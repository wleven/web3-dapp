import NavBar from "@/components/NavBar";

interface IProps {
  children: React.ReactNode;
}

function Layout(props: IProps) {
  return (
    <div className="w-screen h-screen">
      <div className="px-[30rem] py-[8rem] h-full"> {props.children}</div>

      <NavBar />
    </div>
  );
}

export default Layout;
