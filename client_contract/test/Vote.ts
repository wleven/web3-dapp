import { before, describe } from "mocha";

import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Vote", function () {
  let vote: any;
  let signers: SignerWithAddress[] = [];

  const emptyAddress = "0x0000000000000000000000000000000000000000";

  before(async () => {
    try {
      signers = await ethers.getSigners();

      const Vote = await ethers.getContractFactory("VoteFactory");
      vote = await Vote.deploy();

      await vote.deployed();
    } catch (error) {
      console.error(error);
    }
  });

  it("deploy success", () => {
    expect(vote.address).not.to.be.undefined;
  });

  it("not create vote", async () => {
    let address = await vote.getAddress();

    if (address === emptyAddress) {
      const pedding = await vote.createVote({
        name: "test1",
        time: new Date().getTime().toString(),
        data: [
          {
            name: "item1",
            count: 0,
          },
          {
            name: "item2",
            count: 0,
          },
        ],
      });
      await pedding.wait();
      address = await vote.getAddress();
      expect(address).not.to.be.equal(emptyAddress, "部署失败");
    }
  });

  it("has create vote", async () => {
    const address = await vote.getAddress();

    if (address !== emptyAddress) {
      const pedding = await vote.createVote({
        name: "test2",
        time: new Date().getTime().toString(),
        data: [
          {
            name: "item1",
            count: 0,
          },
          {
            name: "item2",
            count: 0,
          },
        ],
      });
      await pedding.wait();
      const newAddress = await vote.getAddress();
      expect(address).to.be.equal(newAddress, "重新部署");
    }
  });

  it("query vote List", async () => {
    const address = await vote.getAddress();
    expect(address).not.equal(emptyAddress, "无效的合约地址");
    const VoteData = await ethers.getContractFactory("VoteData");
    const con = VoteData.attach(address);
    const result = await con.GetList();
    expect(result.length).to.be.equal(2);
    expect(result[0].name).to.be.equal("test1");
    expect(result[1].name).to.be.equal("test2");
  });
});
