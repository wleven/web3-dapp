// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract PHB {
    string private _name = "PHB";
    string private _symbol = "PHB";

    // 账户列表
    mapping(address => uint256) _blances;

    mapping(address => mapping(address => uint256)) _allowances;

    uint256 _totalSupply = 0;

    address _owner;

    constructor(uint256 initSupply) {
        _owner = msg.sender;
        _mint(_owner, initSupply);
    }

    event Transfer(address indexed from, address indexed to, uint256 _value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public pure returns (uint8) {
        return 18;
    }

    // 代币总数
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    // 查询代币
    function balanceOf(address account) public view returns (uint256) {
        return _blances[account];
    }

    // 从主账户转账
    function transfer(address to, uint256 amount)
        public
        returns (bool success)
    {
        _transfer(msg.sender, to, amount);
        return true;
    }

    // 账户间转账
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public returns (bool success) {
        _checkApprove(from, to, amount);
        _transfer(from, to, amount);
        return true;
    }

    // 授权
    function approve(address spender, uint256 amount)
        public
        returns (bool success)
    {
        _approve(msg.sender, spender, amount);
        return true;
    }

    // 授权金额检测
    function allowance(address owner, address spender)
        public
        view
        returns (uint256)
    {
        return _allowances[owner][spender];
    }

    // 生成代币
    function _mint(address account, uint256 mount) private {
        require(account != address(0), "mint account is 0");
        _totalSupply = mount;
        _blances[account] = mount;
        emit Transfer(address(0), account, mount);
    }

    // 代币授权
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal {
        require(owner != address(0), "zero address");
        require(spender != address(0), "zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    // 授权检测
    function _checkApprove(
        address owner,
        address spender,
        uint256 amount
    ) internal {
        uint256 approveAmount = allowance(owner, spender);
        require(approveAmount >= amount, unicode"授权代币不足");
        _approve(owner, spender, approveAmount - amount);
    }

    // 代币交易
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) private {
        require(from != address(0), unicode"账户地址不能为空");
        require(to != address(0), unicode"账户地址不能为空");

        uint256 fromBlance = _blances[from];
        require(fromBlance >= amount, unicode"代币余额不足");

        _blances[from] = fromBlance - amount;
        _blances[to] += amount;

        emit Transfer(from, to, amount);
    }
}
