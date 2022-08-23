import { InputHTMLAttributes, memo } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

function CheckBox(props: IProps) {
  return <input {...props} className="w-[2rem] h-[2rem]" type="checkbox" />;
}

export default memo(CheckBox);
