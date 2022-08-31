import address from "./address.json";
import abi from "./abi.json";

type name = keyof typeof address;

/** 获取合约地址 */
export function GetContractAddress(contractName: name) {
  return address[contractName];
}

/** 获取合约ABI */
export function GetContractAbi(contractName: name) {
  return abi[contractName];
}
