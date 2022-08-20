
interface IProps extends IComProps {
  title?: string;
}

function Menu(props: IProps) {
  return (
    <div
      className={`w-[6rem] h-[6rem] rounded-[8px] flex justify-center items-center bg-soft hover:bg-mute cursor-pointer ${props.className}`}
      title={props.title}
    >
      {props.children}
    </div>
  );
}

export default Menu;
