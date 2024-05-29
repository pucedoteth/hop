"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addresses = void 0;
exports.addresses = {
    '11155111': {
        chainId: '11155111',
        startBlock: 5804841,
        hubCoreMessenger: '0x5Faca3F1bC4966Ef18411559D8Ec0E6314AAd5cE',
        spokeCoreMessenger: '0x5Faca3F1bC4966Ef18411559D8Ec0E6314AAd5cE',
        ethFeeDistributor: '',
        railsGateway: '0xE09810aEA635e0B481cC3703963216013Ff7956D',
        dispatcher: '0x5Faca3F1bC4966Ef18411559D8Ec0E6314AAd5cE',
        executor: '0xf0c69685d1C42D2B0bcb48a4F46327B849a13EFa',
        tokens: {
            MOCK: '0xF0da7a70e0F5E06372A3c407c4FB0c1F25162c32',
            USDC: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238'
        }
    },
    '11155420': {
        chainId: '11155420',
        startBlock: 11311906,
        spokeCoreMessenger: '0x45F00cfbBF8418133eAB132502aa1A8611d7111e',
        connector: '',
        railsGateway: '0x9B6370567e535e74881a84A2ed1f0001d2D4a5f1',
        dispatcher: '0x45F00cfbBF8418133eAB132502aa1A8611d7111e',
        executor: '0x0D7d6298A74bB868316Be66daFb84dEad358C413',
        tokens: {
            MOCK: '0xaCa72C8D5360dC237001cD963566F411732980B0',
            USDC: '0x5fd84259d66Cd46123540766Be93DFE6D43130D7'
        }
    }
    // 84532: {
    //   chainId: 84532,
    //   startBlock: 0,
    //   spokeCoreMessenger: '',
    //   connector: '',
    //   railsGateway: ''
    // }
};
// Path Ids for chain 11155111
// mock to 11155420 0xf47a641595157206fd457efb304ec553834dffaf756de8dc6d3a639ba379557a
// mock to 84532 0x71f0f039d075ef5003db7bfaeae23300edb9b1ec18eaa4c1881957cec227c8b6
// usdc to 11155420 0x5895972a67d33d1353fcbad8d01857b643af149611407bbe06e0e3682ed217c5
// usdc to 84532 0xa08b1ae09638b4738c1fbf00bdd1f06912d995da7d69dbd406b3234a5285b119
// Path Ids for chain 11155420
// mock to 11155111 0xf47a641595157206fd457efb304ec553834dffaf756de8dc6d3a639ba379557a
// mock to 84532 0x924fea04466a929ad213aeff922055c01851d89c9135e77a7cbd205491edf78d
// usdc to 11155111 0x5895972a67d33d1353fcbad8d01857b643af149611407bbe06e0e3682ed217c5
// usdc to 84532 0x8e051c70431a2c93eee3074c3624ed01335d4e4b8f78f1cd5ae1f398d0ba6660
// Path Ids for chain 84532
// mock to 11155111 0x71f0f039d075ef5003db7bfaeae23300edb9b1ec18eaa4c1881957cec227c8b6
// mock to 11155420 0x924fea04466a929ad213aeff922055c01851d89c9135e77a7cbd205491edf78d
// usdc to 11155111 0xa08b1ae09638b4738c1fbf00bdd1f06912d995da7d69dbd406b3234a5285b119
// usdc to 11155420 0x8e051c70431a2c93eee3074c3624ed01335d4e4b8f78f1cd5ae1f398d0ba6660
// Contracts for chain 11155111
// dispatcher 0x5Faca3F1bC4966Ef18411559D8Ec0E6314AAd5cE
// executor 0xf0c69685d1C42D2B0bcb48a4F46327B849a13EFa
// gateway 0xE09810aEA635e0B481cC3703963216013Ff7956D
// MOCK 0xF0da7a70e0F5E06372A3c407c4FB0c1F25162c32
// USDC 0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
// Contracts for chain 11155420
// dispatcher 0x45F00cfbBF8418133eAB132502aa1A8611d7111e
// executor 0x0D7d6298A74bB868316Be66daFb84dEad358C413
// gateway 0x9B6370567e535e74881a84A2ed1f0001d2D4a5f1
// MOCK 0xaCa72C8D5360dC237001cD963566F411732980B0
// USDC 0x5fd84259d66Cd46123540766Be93DFE6D43130D7
// Contracts for chain 84532
// dispatcher 0x687955eD748F5203ee4703C5640Deb5B9be7c3Ff
// executor 0xF1Dd23473dB1c920322E16B895073C329178CA17
// gateway 0x01CbF505083EA3dAb47c29d64f35C94c011F0cA7
// MOCK 0x45F00cfbBF8418133eAB132502aa1A8611d7111e
// USDC 0x036CbD53842c5426634e7929541eC2318f3dCF7e
//# sourceMappingURL=sepolia.js.map