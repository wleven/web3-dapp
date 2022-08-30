import fs from "fs";
import { task } from "hardhat/config";
import path from "path";

task("deploy", "custom deploy contract")
  .addParam("name", "the contract name", "all")
  .addParam("params", "the contract constructor params", "[]")
  .setAction(async (args) => {
    console.log("task-deploy", args);

    try {
      args.params = JSON.parse(args.params);

      if (args.name === "all") {
        const data = await deployContracts();
        setAddressConfig(data);
      } else {
        const address = await deployContract(args.name, args.params);
        if (address) {
          const addConfig = getAddressConfig();
          addConfig[args.name] = address;

          setAddressConfig(addConfig);
        }
      }
    } catch (error) {
      console.log(error);
    }
  });

/** 合约数据 name-合约名称 params-合约构造函数默认参数 */
const contractData = [
  {
    name: "PHB",
    params: ["100000000000000000000000000"],
  },
  {
    name: "ToDoList",
    params: [],
  },
];

/** 部署单个合约 */
async function deployContract(name: string, args: string[]) {
  const { ethers } = require("hardhat");
  try {
    const Contract = await ethers.getContractFactory(name);
    const contract = await Contract.deploy(...args);

    await contract.deployed();
    const address: string = contract.address;
    console.log(`Contract ${name} - ${address} `);
    return address;
  } catch (error) {
    console.log(`---------- Deploy Fail ${name} ----------`);
    console.log(error);
    return "";
  }
}

/** 部署全部合约 */
async function deployContracts() {
  const obj: Record<string, string> = {};
  for (const item of contractData) {
    const address = await deployContract(item.name, item.params);
    obj[item.name] = address;
  }
  return obj;
}

/** 获取合约地址数据 */
function getAddressConfig() {
  const filePath = path.resolve(__dirname, "./address.json");
  if (fs.existsSync(filePath)) {
    const config = require("./address.json");
    return config;
  } else {
    return {};
  }
}

/** 前端项目路径 */
const front_path = "../../client/src/contract/";

/** 保存合约地址数据 */
function setAddressConfig(content: Record<string, string> = {}) {
  const filePath = path.resolve(__dirname, "./address.json");
  const str = JSON.stringify(content, undefined, 2);
  fs.writeFileSync(filePath, str);
  fs.writeFileSync(path.resolve(__dirname, front_path, "address.json"), str);
}
