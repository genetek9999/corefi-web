import "@typechain/hardhat";
import { type HardhatUserConfig } from "hardhat/types";

require("@nomicfoundation/hardhat-toolbox");

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "bnbt",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
    },

    hardhat: {},

    // binance smart chain mainnet (BNB Mainnet)
    bnb: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: ["98a4a9923e359bfa162523ef7bbc69c5ed1c18d1c1b2f438d12ce23cf89226b3"],
    },

    // binance smart chain testnet (BNB Testnet)
    bnbt: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: ["f397e04449c31b07a70b7a9407ebf5eb348902c313e5b8835d73e75ff754ada3"],
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./temp/artifacts",
    cache: "./temp/cache",
  },
  typechain: {
    outDir: "../src/typechain-owned",
  },
};

export default config;
