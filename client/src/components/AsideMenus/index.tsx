import Menu from "./Menu";
import Login from "./Login";
import Icon from "../Icon";

function AsideMenus() {
  return (
    <div className="absolute right-[4rem] bottom-[4rem]">
      <Login />

      <Menu title="Github">
        <Icon className="fa-brands fa-github" size="4rem" />
      </Menu>
    </div>
  );
}

export default AsideMenus;
