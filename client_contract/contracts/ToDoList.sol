// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract ToDoList {
    struct ToDoItem {
        string value;
        string time;
        uint8 state;
    }

    mapping(address => ToDoItem[]) _list;

    constructor() {}

    /** 获取列表 */
    function GetList() public view returns (ToDoItem[] memory) {
        require(msg.sender != address(0), "epmty address");
        return _list[msg.sender];
    }

    /** 添加 */
    function AddItem(string calldata text, string calldata time)
        external
        returns (bool)
    {
        require(msg.sender != address(0), "epmty address");
        _list[msg.sender].push(ToDoItem({value: text, time: time, state: 0}));

        return true;
    }

    /** 更新 */
    function UpdateItem(uint index, uint8 state) public returns (bool) {
        require(msg.sender != address(0), "epmty address");

        _list[msg.sender][index].state = state;

        return true;
    }
}
