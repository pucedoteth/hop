export default [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "messageNum",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "InboxMessageDelivered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "messageNum",
        "type": "uint256"
      }
    ],
    "name": "InboxMessageDeliveredFromOrigin",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "bridge",
    "outputs": [
      {
        "internalType": "contract IBridge",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "destAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "arbTxCallValue",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxSubmissionCost",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "submissionRefundAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "valueRefundAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasPriceBid",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "createRetryableTicket",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "destAddr",
        "type": "address"
      }
    ],
    "name": "depositEth",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "destAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "maxSubmissionCost",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxGasPrice",
        "type": "uint256"
      }
    ],
    "name": "depositEthRetryable",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasPriceBid",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "destAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "sendContractTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasPriceBid",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "destAddr",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "sendL1FundedContractTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasPriceBid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "destAddr",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "sendL1FundedUnsignedTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "messageData",
        "type": "bytes"
      }
    ],
    "name": "sendL2Message",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasPriceBid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "destAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "sendUnsignedTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
