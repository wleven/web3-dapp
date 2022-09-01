// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

struct VoteDataItem {
    // 投票项目
    string name;
    // 票数
    uint count;
}

struct VoteItem {
    // 投票主题
    string name;
    // 创建时间
    string time;
    // 投票数据
    VoteDataItem[] data;
}

/** 投票数据保存合约 */
contract VoteData {
    VoteItem[] public voteList;

    constructor(VoteItem memory data) {
        AddVote(data);
    }

    function AddVote(VoteItem memory params) public {
        VoteItem storage data = voteList.push();
        data.name = params.name;
        data.time = params.time;

        for (uint i = 0; i < params.data.length; i++) {
            data.data.push(params.data[i]);
        }
    }

    function GetList() public view returns (VoteItem[] memory) {
        return voteList;
    }
}

/** 投票合约工厂 */
contract VoteFactory {
    mapping(address => address) addressMap;

    constructor() {}

    // 获取合约地址
    function getAddress() external view returns (address) {
        return addressMap[msg.sender];
    }

    // 部署合约
    function createVote(VoteItem memory data) public {
        address addr = addressMap[msg.sender];
        if (addr == address(0)) {
            VoteData _address = new VoteData(data);
            addressMap[msg.sender] = address(_address);
        } else {
            VoteData _contract = VoteData(addr);
            _contract.AddVote(data);
        }
    }
}
