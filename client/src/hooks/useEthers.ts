import { AbiPHB } from "@/contract/abi";
import GetContractAddress from "@/contract/address";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

enum EthereumMethod {
  /** 账户改变 */
  AccountsChanged = "accountsChanged",
  /** 连接账户 */
  EthRequestAccounts = "eth_requestAccounts",
  /** 导入token */
  WalletWatchAsset = "wallet_watchAsset",
}

/** 获取window.ethereum */
export function getEthereum() {
  if (!window.ethereum) {
    alert("请安装MetaMask钱包");
    return undefined;
  }

  return window.ethereum;
}

/** 导入代币 */
export function ImportToken() {
  getEthereum()
    ?.request({
      method: EthereumMethod.WalletWatchAsset,
      params: {
        type: "ERC20",
        options: {
          address: GetContractAddress("PHB"),
          symbol: "PHB",
          decimals: 18,
          image: "https://docs.metamask.io/metamask-fox.svg",
        },
      },
    })
    .then(console.log)
    .catch(console.error);
}

function useEthers() {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [userAddress, setUserAddress] = useState<string>("");

  const [ETH, setETH] = useState("0");
  const [PHB, setPHB] = useState("0");

  useEffect(() => {
    if (!getEthereum()) return;

    const _provider = new ethers.providers.Web3Provider(window.ethereum);

    _provider.listAccounts().then(handleAccountChanged);

    getEthereum().on(EthereumMethod.AccountsChanged, handleAccountChanged);

    setProvider(_provider);

    return () => {
      getEthereum().removeListener(EthereumMethod.AccountsChanged, handleAccountChanged);
    };
  }, []);

  /** 账户改变相关操作 */
  useEffect(() => {
    console.log("useEffect userAddress");
    if (!userAddress) {
      setETH("0");
      setPHB("0");
      return;
    }
    getETHBalance();
    getTokenBalance();
  }, [userAddress]);

  function getProvider() {
    if (!provider) {
      alert("请安装MetaMask钱包");
      return;
    }
    return provider;
  }

  function login() {
    return getProvider()?.send(EthereumMethod.EthRequestAccounts, []).then(handleAccountChanged);
  }

  /** 设置用户地址 */
  function handleAccountChanged(arr: string[]) {
    setUserAddress(arr.length === 1 ? arr[0] : "");
  }

  /** 获取ETH余额 */
  function getETHBalance() {
    getProvider()
      ?.getBalance(userAddress)
      .then((data) => {
        setETH(ethers.utils.formatEther(data));
      });
  }

  /** 获取PHB余额 */
  function getTokenBalance() {
    const phbContract = new ethers.Contract(GetContractAddress("PHB"), AbiPHB, provider);
    phbContract.balanceOf(userAddress).then((data: ethers.BigNumber) => {
      setPHB(ethers.utils.formatEther(data));
    });
  }

  return { getProvider,provider, userAddress, login, balance: { ETH, PHB } };
}

export default useEthers;
