import config from "./address.json";

type name = keyof typeof config;

export default function GetContractAddress(contractName: name) {
  return config[contractName];
}
