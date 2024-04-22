/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Mock_L2_Messenger,
  Mock_L2_MessengerInterface,
} from "../Mock_L2_Messenger.js";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_canonicalToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "canonicalToken",
    outputs: [
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
    inputs: [],
    name: "messageSender",
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
    name: "messageSourceChainId",
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
    inputs: [],
    name: "nextMessage",
    outputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "polygonTarget",
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
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "receiveMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "relayNextMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requireToPassMessage",
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
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_destAddr",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldataForL1",
        type: "bytes",
      },
    ],
    name: "sendTxToL1",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_polygonTarget",
        type: "address",
      },
    ],
    name: "setPolygonTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_targetMessenger",
        type: "address",
      },
    ],
    name: "setTargetMessenger",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "targetMessenger",
    outputs: [
      {
        internalType: "contract Mock_L1_Messenger",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "xDomainMessageSender",
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

export class Mock_L2_Messenger__factory {
  static readonly abi = _abi;
  static createInterface(): Mock_L2_MessengerInterface {
    return new utils.Interface(_abi) as Mock_L2_MessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Mock_L2_Messenger {
    return new Contract(address, _abi, signerOrProvider) as Mock_L2_Messenger;
  }
}
