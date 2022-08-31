import fs from "fs";
import path from "path";

/** 前端项目路径 */
const front_path = "../../../client/src/contract/";

/** 获取合约地址数据 */
export function getAddressConfig() {
  const filePath = path.resolve(__dirname, "./address.json");
  if (fs.existsSync(filePath)) {
    const config = require("./address.json");
    return config;
  } else {
    return {};
  }
}

/** 保存合约地址数据 */
export function setAddressConfig(content: Record<string, string> = {}) {
  const filePath = path.resolve(__dirname, "./address.json");
  const str = JSON.stringify(content, undefined, 2);
  fs.writeFileSync(filePath, str);
  fs.writeFileSync(path.resolve(__dirname, front_path, "address.json"), str);
}

/** 合约编译 */
export async function contractCompile() {
  const hre = require("hardhat");
  await hre.run("clean");
  await hre.run("compile");

  const fileList = getAbiFileList();

  getAbiData(fileList);
}

/** 获取合约结构文件列表 */
function getAbiFileList() {
  const dir = path.resolve(__dirname, "../../artifacts/contracts/");
  const dirList = fs.readdirSync(dir);

  let fileList: string[] = [];
  dirList.map((name) => {
    const d = path.resolve(dir, name);
    fileList.push(...fs.readdirSync(d).map((file) => `${d}/${file}`));
  });

  fileList = fileList.filter((item) => !/\.dbg\.json$/.test(item));

  return fileList;
}

/** 获取合约结构 */
function getAbiData(paths: string[]) {
  const data: Record<string, any[]> = {};

  paths.map((path) => {
    const fileData = require(path);
    data[fileData.contractName] = fileData.abi ?? [];
  });

  const fileData = JSON.stringify(data, undefined, 2);

  // 写入文件
  fs.writeFileSync(path.resolve(__dirname, "./abi.json"), fileData);
  fs.writeFileSync(path.resolve(__dirname, front_path, "abi.json"), fileData);
}
