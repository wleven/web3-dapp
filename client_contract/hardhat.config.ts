import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  defaultNetwork: "Ganache",
  networks: {
    Ganache: {
      url: " http://172.25.192.1:7545/",
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["130d91305cdd88eea2306974598179b19ca1a1f65c0a0a478d79b54c90f01bc7"],
    },
  },
  etherscan: {
    apiKey: "JUFEHNAKX45TSY3JCKSNR9WSTM6UGIN74X",
  },
};

export default config;
