import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import '@openzeppelin/hardhat-upgrades';
 import "@nomiclabs/hardhat-etherscan";
import * as dotenv from "dotenv";
dotenv.config();

import "./tasks";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  // Default network when you don't specify "--network {network_name}"
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    goerli: {
      url: "https://goerli.infura.io/v3/" + process.env.INFURA_KEY,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      // {
      //  mnemonic: process.env.MNEMONIC,
      //  count: 20,
      //}
    },
    bnbtest: {
      url: process.env.BNBTest_URL || "",
      accounts: process.env.BNBTest_PRIVATE_KEY !== undefined ? [process.env.BNBTest_PRIVATE_KEY] : [],
      
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
};

export default config;