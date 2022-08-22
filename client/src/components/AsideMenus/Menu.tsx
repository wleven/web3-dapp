import React from "react";
import Card from "../Card";

interface IProps extends IComProps {
  title?: string;
  onClick?: React.MouseEventHandler;
}

function Menu(props: IProps) {
  return (
    <Card className={`w-[6rem] h-[6rem] rounded-[8px] flex justify-center items-center ${props.className}`} hover onClick={props.onClick}>
      {props.children}
    </Card>
  );
}

export default Menu;
