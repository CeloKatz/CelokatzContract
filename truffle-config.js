const ContractKit = require('@celo/contractkit');
const Web3 = require('web3');
require('dotenv').config({ path: '.env' });

// Create connection to DataHub Celo Network node
const web3 = new Web3(process.env.REST_URL);

const client = ContractKit.newKitFromWeb3(web3);

// Initialize account from our private key
const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);

// We need to add private key to ContractKit in order to sign transactions
client.addAccount(account.privateKey);

module.exports = {
  compilers: {
    solc: {
      version: "0.8.10",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
  networks: {

    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    alfajores: {
      provider: client.connection.web3.currentProvider, // CeloProvider
      networkCheckTimeout: 100000000,
      network_id: 44787,  // latest Alfajores network id
      gas: 20000000,
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
    },
    mainnet: {
      provider: client.connection.web3.currentProvider, // CeloProvider
      networkCheckTimeout: 1000000,
      network_id: 42220,
      gas: 4000000,
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ]
  // api_keys: {
  //   bscscan: "7YJ8YNF8PBMBU5BYMRU2SXPI6ECVHM9XHA"
  // },
};

// require('dotenv').config();

// const HDWalletProvider = require('@truffle/hdwallet-provider');


// module.exports = {


//   networks: {

//     development: {
//       host: "127.0.0.1",     // Localhost (default: none)
//       port: 8545,            // Standard Ethereum port (default: none)
//       network_id: "*",       // Any network (default: none)
//     },
//     testnet: {
//       networkCheckTimeout: 1000000,
//       provider: function () {
//         return new HDWalletProvider(process.env.MNEMONIC, "https://alfajores-forno.celo-testnet.org")
//       },
//       network_id: 44787,
//       gas: 20000000,
//       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
//       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
//       skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
//     },
//     mainnet: {
//       provider: function() {
//         return new HDWalletProvider(process.env.MNEMONIC, "https://forno.celo.org")
//       },
//       network_id: 42220,
//       gas: 4000000,
//       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
//       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
//       skipDryRun: true     
//     },
//   },

//   // Set default mocha options here, use special reporters etc.
//   mocha: {
//     // timeout: 100000
//   },

//   // Configure your compilers
//   compilers: {
//     solc: {
//       version: "0.8.10",    // Fetch exact version from solc-bin (default: truffle's version)
//       // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
//       // settings: {          // See the solidity docs for advice about optimization and evmVersion
//       //  optimizer: {
//       //    enabled: false,
//       //    runs: 200
//       //  },
//       //  evmVersion: "byzantium"
//       // }
//     }
//   },
// };
