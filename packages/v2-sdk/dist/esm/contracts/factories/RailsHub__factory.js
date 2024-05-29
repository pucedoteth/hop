/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transferId",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalSent",
                type: "uint256",
            },
        ],
        name: "TransferBonded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transferId",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalSent",
                type: "uint256",
            },
        ],
        name: "TransferSent",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "checkpoint",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "totalSent",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "attestedCheckpoint",
                type: "bytes32",
            },
        ],
        name: "bond",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "checkpoint",
                type: "bytes32",
            },
        ],
        name: "confirmCheckpoint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
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
                internalType: "uint256",
                name: "chainId0",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
                name: "token0",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainId1",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
                name: "token1",
                type: "address",
            },
        ],
        name: "getPathId",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
        ],
        name: "getPathInfo",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
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
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "getWithdrawableBalance",
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
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "counterpartChainId",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
                name: "counterpartToken",
                type: "address",
            },
            {
                internalType: "contract IMessageDispatcher",
                name: "dispatcher",
                type: "address",
            },
            {
                internalType: "contract IMessageExecutor",
                name: "executor",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "rateDelta",
                type: "uint256",
            },
        ],
        name: "initPath",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "transferId",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "head",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "totalSent",
                type: "uint256",
            },
        ],
        name: "postClaim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "checkpoint",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
        ],
        name: "removeClaim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "attestedCheckpoint",
                type: "bytes32",
            },
        ],
        name: "send",
        outputs: [
            {
                internalType: "bytes32",
                name: "checkpoint",
                type: "bytes32",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "pathId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "withdrawAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
export class RailsHub__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
RailsHub__factory.abi = _abi;
//# sourceMappingURL=RailsHub__factory.js.map