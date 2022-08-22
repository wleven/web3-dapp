import { AbiPHB } from "@/contract/abi";
import GetContractAddress from "@/contract/address";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

enum EthereumMethod {
  AccountsChanged = "accountsChanged",
  EthRequestAccounts = "eth_requestAccounts",
}

function getEthereum() {
  if (!window.ethereum) {
    alert("请安装MetaMask钱包");
    return undefined;
  }

  return window.ethereum;
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

  useEffect(() => {
    if (!userAddress) {
      setETH("0");
      setPHB("0");
      return;
    }

    getETHBalance();
    getPHBBalance();
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
  function getPHBBalance() {
    const phbContract = new ethers.Contract(GetContractAddress("PHB"), AbiPHB, provider);
    phbContract.balanceOf(userAddress).then((data: ethers.BigNumber) => {
      setPHB(ethers.utils.formatEther(data));
    });
  }

  return { getProvider, userAddress, login, balance:{ETH,PHB} };
}

export default useEthers;
