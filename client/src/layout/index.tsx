import AsideMenus from "@/components/AsideMenus";

interface IProps {
  children: React.ReactNode;
}

function Layout(props: IProps) {
  return (
    <div className="w-full h-full px-[30rem]">
      {props.children}

      <AsideMenus />
    </div>
  );
}

export default Layout;
