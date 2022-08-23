import CheckBox from "@/components/Form/CheckBox";
import { ChangeEvent, memo } from "react";

interface IProps extends ToDoItem {
  onChange?: (checked: boolean) => void;
}

function ListItem(props: IProps) {
  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
    props.onChange && props.onChange(event.target.checked);
  }

  return (
    <div className="flex item-center py-[2rem] border-b-[1px] border-primary">
      <CheckBox data-time={props.time} checked={props.state === 1} onChange={handleChecked} />
      <span className={`pl-[1rem] ${props.state === 1 ? "line-through" : ""}`}>{props.value}</span>
    </div>
  );
}

export default memo(ListItem);
