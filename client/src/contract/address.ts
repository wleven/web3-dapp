const addressMap = new Map<string, string>();

addressMap.set("PHB", "0xe5c71aE95B93d22082e8c576eBB7b70D6EbAe43e");

export default function GetContractAddress(contractName: string) {
  return addressMap.get(contractName) ?? '';
  //   if (addressMap.has(contractName)) {
  //     return Promise.resolve(addressMap.get(contractName));
  //   }

  //   return Promise.reject();
}
