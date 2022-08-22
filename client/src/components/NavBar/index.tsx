import Login from "./Login";
import Icon from "../Icon";
import { EtherProvider } from "@/context/Ethers";

function AsideMenus() {
  return (
    <div className="fixed top-0 inset-x-0 h-[8rem] bg-black/[0.2] px-[30rem] select-none ">
      <div className="flex h-full items-center justify-between ">
        <a href="/">
          <img src="https://docs.metamask.io/metamask-fox.svg" alt="Logo" width={40} height={40} />
        </a>

        <span className="font-bold text-[3rem] pl-[1rem]">DAPP</span>

        <span className="flex-1"></span>

        <EtherProvider>
          <Login />
        </EtherProvider>

        <a href="/" className="pl-[2rem]" title="github">
          <Icon className="fa-brands fa-github" size="4rem" />
        </a>
      </div>
    </div>
  );
}

export default AsideMenus;
