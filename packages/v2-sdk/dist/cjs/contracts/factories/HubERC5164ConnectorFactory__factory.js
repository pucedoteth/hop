"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubERC5164ConnectorFactory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_messageDispatcher",
                type: "address",
            },
            {
                internalType: "address",
                name: "_messageExecutor",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "connector",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "counterpartChainId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "counterpartConnector",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "counterpartTarget",
                type: "address",
            },
        ],
        name: "ConnectorDeployed",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId1",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "target1",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainId2",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "target2",
                type: "address",
            },
        ],
        name: "calculateAddress",
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
                name: "target",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "counterpartChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "counterpartConnector",
                type: "address",
            },
            {
                internalType: "address",
                name: "counterpartTarget",
                type: "address",
            },
        ],
        name: "deployConnector",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId1",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "target1",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainId2",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "target2",
                type: "address",
            },
        ],
        name: "deployConnectors",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "payable",
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
                internalType: "uint256[]",
                name: "chainIds",
                type: "uint256[]",
            },
        ],
        name: "getFee",
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
        inputs: [
            {
                internalType: "address",
                name: "target1",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainId1",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "target2",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainId2",
                type: "uint256",
            },
        ],
        name: "getSalt",
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
        name: "messageDispatcher",
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
        inputs: [],
        name: "messageExecutor",
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
];
class HubERC5164ConnectorFactory__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.HubERC5164ConnectorFactory__factory = HubERC5164ConnectorFactory__factory;
HubERC5164ConnectorFactory__factory.abi = _abi;
//# sourceMappingURL=HubERC5164ConnectorFactory__factory.js.map