import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks/index";

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  defaultNetwork: "Ganache",
  networks: {
    Ganache: {
      url: " http://172.25.192.1:7545/",
    },
  },
};

export default config;
