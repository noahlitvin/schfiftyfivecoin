/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('hardhat-abi-exporter');
require('dotenv').config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  abiExporter: {
    path: './data/abi',
    clear: true
  },
   networks: {
      hardhat: {},
      mainnet: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};
