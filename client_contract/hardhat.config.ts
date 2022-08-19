import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.16",

  networks: {
    Ganache: {
      url: "HTTP://172.17.192.1:7545",
    },
  },
};

export default config;
