import { ethers } from "hardhat";

async function PHB() {
  const contract = await ethers.getContractFactory("PHB");
  const phb = await contract.deploy("100000000000000000000000000");

  await phb.deployed();
  console.log("---------- Contract PHB ----------");
  console.log(phb.address);
}

async function TodoList() {
  const Contract = await ethers.getContractFactory("ToDoList");
  const contract = await Contract.deploy();

  await contract.deployed();
  console.log("---------- Contract ToDoList ----------");
  console.log(contract.address);
}

async function main() {
  // await PHB();
  await TodoList();

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
  // const lockedAmount = ethers.utils.parseEther("1");
  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  // await lock.deployed();
  // console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
