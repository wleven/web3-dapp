import Icon from "../Icon";

import { useContext, useState } from "react";
import UserCard from "./UserCard";
import { EtherContext } from "@/context/Ethers";
import Button from "../Button";
import { ImportToken } from "@/hooks/useEthers";

import "./index.less";

function Login() {
  const context = useContext(EtherContext);

  if (!context?.userAddress) {
    return <Icon className="fa-solid fa-circle-user cursor-pointer" size="4rem" onClick={context?.login} />;
  }

  return (
    <div className="flex items-center h-full ">
      <Button className="mr-[2rem]" onClick={ImportToken}>
        导入PHB代币
      </Button>
      <Button className="mr-[2rem]">领取PHB代币</Button>

      <div className="h-full user-layout relative">
        <Icon className="fa-solid fa-circle-user text-primary mt-[2rem]" size="4rem"></Icon>
        <UserCard Address={context.userAddress} ETH={context.balance.ETH} PHB={context.balance.PHB} />
      </div>
    </div>
  );
}

export default Login;
