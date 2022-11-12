require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind artist gesture forum flock top'; 
let testAccounts = [
"0x55eb0e48a7239d62522c4274c5e867c1c91f5e19278042d6ba731160e422c759",
"0x9a58da8298fdf707483a44d0e2532823c69c87bbfe55eafa9da37c92a9fa714e",
"0x0dd9cabb2071ac3ccadacb834767eaaed12b1a415431949d52b8d8c766d8882f",
"0xc9db91c06577d632acd058e10116baf06addc447c60305f43a6616d5a6e4028e",
"0xdad7fbf8a5ca34581956e65e2c4160bef32324cab1ed9d3ac9efae4f25e7c08f",
"0x60276bc5084484db79081300d35ceb0ccea3bf07adf26522209a660324632c4e",
"0xeee9b1bcf7fb05fe2f6dc4ead9aa442607a14ff3d505f177b77c9b7180833797",
"0x2146d1737b4eed82a500624e5e2eac3526ef6c4c7c74be564595a289ce774035",
"0xc8957e5c35f3d95b07e7915a0a61e561d11ea66281a8432d0a4a0216eb69e23f",
"0x639e65b5d54c19d70ab278180666cc3ee101f4eb463ea5c1bde3b44fd6c2457e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

