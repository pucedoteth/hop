import { utils } from 'ethers';
import { L1_xDaiAMB__factory } from '#contracts/factories/L1_xDaiAMB__factory.js';
import { L2_xDaiAMB__factory } from '#contracts/factories/L2_xDaiAMB__factory.js';
const { solidityKeccak256 } = utils;
// reference:
// https://github.com/poanetwork/tokenbridge/blob/bbc68f9fa2c8d4fff5d2c464eb99cea5216b7a0f/oracle/src/events/processAMBCollectedSignatures/index.js#L149
export class GnosisChainRelayer {
    constructor(network = 'mainnet', l1Provider, l2Provider) {
        // TODO: set this addresses
        if (network === 'mainnet') {
            this.l1AmbAddress = '';
            this.l2AmbAddress = '';
        }
        else {
            this.l1AmbAddress = '';
            this.l2AmbAddress = '';
        }
        this.network = network;
        this.l1Provider = l1Provider;
        this.l2Provider = l2Provider;
    }
    getL1Amb() {
        return L1_xDaiAMB__factory.connect(this.l1AmbAddress, this.l1Provider);
    }
    getL2Amb() {
        return L2_xDaiAMB__factory.connect(this.l2AmbAddress, this.l1Provider);
    }
    async getExitPopulatedTx(l2TxHash) {
        const l1Amb = this.getL1Amb();
        const l2Amb = this.getL2Amb();
        const sigEvent = await this.getValidSigEvent(l2TxHash);
        if (!sigEvent?.args) {
            throw new Error(`args for sigEvent not found for ${l2TxHash}`);
        }
        const message = sigEvent.args.encodedData;
        if (!message) {
            throw new Error(`message not found for ${l2TxHash}`);
        }
        const msgHash = solidityKeccak256(['bytes'], [message]);
        const id = await l2Amb.numMessagesSigned(msgHash);
        const alreadyProcessed = await l2Amb.isAlreadyProcessed(id);
        if (!alreadyProcessed) {
            throw new Error(`commit already processed found for ${l2TxHash}`);
        }
        const messageId = '0x' +
            Buffer.from(strip0x(message), 'hex')
                .slice(0, 32)
                .toString('hex');
        const alreadyRelayed = await l1Amb.relayedMessages(messageId);
        if (alreadyRelayed) {
            throw new Error(`message already relayed for ${l2TxHash}`);
        }
        const requiredSigs = (await l2Amb.requiredSignatures()).toNumber();
        const sigs = [];
        for (let i = 0; i < requiredSigs; i++) {
            const sig = await l2Amb.signature(msgHash, i);
            const [v, r, s] = [[], [], []];
            const vrs = signatureToVRS(sig);
            v.push(vrs.v);
            r.push(vrs.r);
            s.push(vrs.s);
            sigs.push(vrs);
        }
        const packedSigs = packSignatures(sigs);
        return l1Amb.executeSignatures(message, packedSigs);
    }
    async getValidSigEvent(l2TxHash) {
        const tx = await this.l2Provider.getTransactionReceipt(l2TxHash);
        const l2Amb = this.getL2Amb();
        const sigEvents = await l2Amb.queryFilter(l2Amb.filters.UserRequestForSignature(), tx.blockNumber, tx.blockNumber);
        for (const sigEvent of sigEvents) {
            const sigTxHash = sigEvent.transactionHash;
            if (sigTxHash.toLowerCase() !== l2TxHash.toLowerCase()) {
                continue;
            }
            const { encodedData } = sigEvent.args;
            // TODO: better way of slicing by method id
            const data = encodedData.includes('ef6ebe5e00000')
                ? encodedData.replace(/.*(ef6ebe5e00000.*)/, '$1')
                : '';
            if (data) {
                return sigEvent;
            }
        }
    }
}
// https://github.com/poanetwork/tokenbridge/blob/bbc68f9fa2c8d4fff5d2c464eb99cea5216b7a0f/oracle/src/utils/message.js
import assert from 'assert';
import { toHex } from 'web3-utils';
const strip0x = (value) => value.replace(/^0x/i, '');
function signatureToVRS(rawSignature) {
    const signature = strip0x(rawSignature);
    assert.strictEqual(signature.length, 2 + 32 * 2 + 32 * 2);
    const v = signature.substr(64 * 2);
    const r = signature.substr(0, 32 * 2);
    const s = signature.substr(32 * 2, 32 * 2);
    return { v, r, s };
}
function packSignatures(array) {
    const length = strip0x(toHex(array.length));
    const msgLength = length.length === 1 ? `0${length}` : length;
    let v = '';
    let r = '';
    let s = '';
    array.forEach(e => {
        v = v.concat(e.v);
        r = r.concat(e.r);
        s = s.concat(e.s);
    });
    return `0x${msgLength}${v}${r}${s}`;
}
//# sourceMappingURL=GnosisChainRelayer.js.map