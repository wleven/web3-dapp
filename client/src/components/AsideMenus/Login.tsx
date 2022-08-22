import Icon from "../Icon";
import Menu from "./Menu";

import { useContext, useState } from "react";
import UserCard from "./UserCard";
import { EtherContext } from "@/context/Ethers";

function Login() {
  const context = useContext(EtherContext);

  const [show, setShow] = useState(false);

  if (!context?.userAddress) {
    return (
      <Menu className="mb-[2rem]" title="登录" onClick={() => context?.login()}>
        <Icon className="fa-solid fa-user" size="4rem" />
      </Menu>
    );
  }

  return (
    <div className="relative">
      <Menu className="mb-[2rem]" onClick={() => setShow(!show)}>
        <Icon className="fa-brands fa-ethereum text-primary" size="4rem" />
      </Menu>

      <UserCard show={show} Address={context.userAddress} ETH={context.balance.ETH} PHB={context.balance.PHB} />
    </div>
  );
}

export default Login;
