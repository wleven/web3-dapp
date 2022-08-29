const addressMap = new Map<string, string>();

// addressMap.set("PHB", "0x7B6E62ed08713aA257b0fc6181EFD3B05bF25467");
addressMap.set("PHB", "0xe5c71aE95B93d22082e8c576eBB7b70D6EbAe43e");
addressMap.set("ToDoList", "0x7B96C9B586a267ad0F98228C65D86eC5c66774F2");

export default function GetContractAddress(contractName: string) {
  return addressMap.get(contractName) ?? "";
}
