import Menu from "./Menu";
import Login from "./Login";
import Icon from "../Icon";
import { EtherProvider } from "@/context/Ethers";

function AsideMenus() {
  return (
    <div className="absolute right-[2rem] bottom-[2rem]">
      <EtherProvider>
        <Login />
      </EtherProvider>

      <Menu title="Github">
        <Icon className="fa-brands fa-github" size="4rem" />
      </Menu>
    </div>
  );
}

export default AsideMenus;
