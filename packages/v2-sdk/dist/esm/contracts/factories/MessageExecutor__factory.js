/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [],
        name: "CallFailedForUnknownReason",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "messageId",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "errorData",
                type: "bytes",
            },
        ],
        name: "MessageFailure",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "messageId",
                type: "bytes32",
            },
        ],
        name: "MessageIdAlreadyExecuted",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "messageId",
                type: "bytes32",
            },
        ],
        name: "MessageIdExecuted",
        type: "event",
    },
];
export class MessageExecutor__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
MessageExecutor__factory.abi = _abi;
//# sourceMappingURL=MessageExecutor__factory.js.map