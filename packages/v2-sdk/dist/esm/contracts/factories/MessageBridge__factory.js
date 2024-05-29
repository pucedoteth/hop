/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "chunkIndex",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "bitOffset",
                type: "uint256",
            },
        ],
        name: "AlreadyTrue",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "bundleRoot",
                type: "bytes32",
            },
        ],
        name: "BundleNotFound",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "CannotMessageAddress",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "bundleRoot",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "messageId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "treeIndex",
                type: "uint256",
            },
            {
                internalType: "bytes32[]",
                name: "siblings",
                type: "bytes32[]",
            },
            {
                internalType: "uint256",
                name: "totalLeaves",
                type: "uint256",
            },
        ],
        name: "InvalidProof",
        type: "error",
    },
    {
        inputs: [],
        name: "NotCrossDomainMessage",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "bundleId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "bundleRoot",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
        ],
        name: "BundleSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "messageId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "MessageRelayed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "messageId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "MessageReverted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "messageId",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "toChainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "MessageSent",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "bundles",
        outputs: [
            {
                internalType: "bytes32",
                name: "root",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getChainId",
        outputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "bundleId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "treeIndex",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "toChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "getSpokeMessageId",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "getXDomainChainId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getXDomainData",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getXDomainSender",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "noMessageList",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "bundleId",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "treeIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "siblings",
                        type: "bytes32[]",
                    },
                    {
                        internalType: "uint256",
                        name: "totalLeaves",
                        type: "uint256",
                    },
                ],
                internalType: "struct BundleProof",
                name: "bundleProof",
                type: "tuple",
            },
        ],
        name: "relayMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "relayedMessage",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "toChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "sendMessage",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "bundleId",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "treeIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "siblings",
                        type: "bytes32[]",
                    },
                    {
                        internalType: "uint256",
                        name: "totalLeaves",
                        type: "uint256",
                    },
                ],
                internalType: "struct BundleProof",
                name: "bundleProof",
                type: "tuple",
            },
            {
                internalType: "bytes32",
                name: "messageId",
                type: "bytes32",
            },
        ],
        name: "validateProof",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
];
export class MessageBridge__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
MessageBridge__factory.abi = _abi;
//# sourceMappingURL=MessageBridge__factory.js.map