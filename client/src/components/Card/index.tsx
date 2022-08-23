import { memo } from "react";

interface IProps extends IComProps {
  hover?: boolean;
  onClick?: React.MouseEventHandler;
}

function Card(props: IProps) {
  return (
    <div id={props.id} className={`${props.className} ${props.hover ? "cursor-pointer hover:bg-mute" : ""} bg-soft`} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default memo(Card);
