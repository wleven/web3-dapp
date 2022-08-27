const addressMap = new Map<string, string>();

// addressMap.set("PHB", "0x7B6E62ed08713aA257b0fc6181EFD3B05bF25467");
addressMap.set("PHB", "0xe5c71aE95B93d22082e8c576eBB7b70D6EbAe43e");
addressMap.set("ToDoList", "0x84e878D5025fEEbE6B710e26D6BA97E6C6D69C79");

export default function GetContractAddress(contractName: string) {
  return addressMap.get(contractName) ?? "";
}
