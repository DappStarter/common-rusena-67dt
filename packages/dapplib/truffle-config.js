require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rice still hole hover another army giant'; 
let testAccounts = [
"0x6c2599711dd2042d8237ae1c09920006206930a6e7f666a80aae128c160863af",
"0x7f48bc5650b4f7bb747524eb22e990258bbc76066e14a7de238665b03dd62066",
"0x62d18ccf453e2eba3484cc132db61aa3ec1f4e92afa1c7984d8f109fdecdd0cf",
"0x066eba702c7d959aa09697048e90f19c1ab1040cbcdafe69cff8fc3241063cac",
"0x32b048e5d1f4e1d295730db9e2c359d979353e2cbe18227cd443bb578b90bafe",
"0x6c3f5f649b7de33a4936acae0932fe1ed9c3087ed33cc0f9aef86c0a5571af37",
"0xa8b1bbc84b26377790077fe155c4a50568a0c3a96a504278c2a375fd11252edf",
"0xce452a0d7db784d3b2f3294841e30912631e2959175186df09f5aef3890d9921",
"0x7a5dd481c01c549d14c3e5b07f5e269a537c5efcf3775002a687d93986d888b2",
"0x58514cf89d940cb682bd0847bf1dddf6b4466b1465abc7d77f4a4c2dada086e9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


