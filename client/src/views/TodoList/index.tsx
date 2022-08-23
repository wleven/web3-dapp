import Card from "@/components/Card";
import Input from "@/components/Form/Input";
import { KeyboardEvent, useEffect, useId, useMemo, useState } from "react";
import ListItem from "./ListItem";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<ToDoItem[]>([]);

  useEffect(() => {
    document.getElementById("todoList")?.addEventListener("change", handleEventClick);
    return () => {
      document.getElementById("todoList")?.removeEventListener("change", handleEventClick);
    };
  }, [list]);

  function handleEventClick(event: HTMLElementEventMap["change"]) {
    const target = event.target as HTMLInputElement;

    if (target.getAttribute("type") === "checkbox") {
      const time = target.getAttribute("data-time");

      const item = list.find((i) => i.time === time);
      if (!item) return;

      item.state = !target.checked ? 1 : 0;

      setList([...list]);
    }
  }

  /** 回车 */
  function handleOnKeyDown(event: KeyboardEvent) {
    if (event.code === "Enter") {
      setList([
        {
          value: inputValue,
          state: 0,
          time: new Date().getTime().toString(),
        },
        ...list,
      ]);
      setInputValue("");
    }
  }

  const List = useMemo(() => {
    if (list.length === 0) {
      return <div className="flex items-center justify-center h-full ">暂无数据</div>;
    }

    return list.map((item) => {
      return <ListItem key={item.time} value={item.value} time={item.time} state={item.state} />;
    });
  }, [list]);

  return (
    <div className="h-full flex flex-col text-[2rem]">
      <div className="my-[3rem] font-bold text-[3rem]">ToDoList</div>
      <Input value={inputValue} maxLength={60} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleOnKeyDown} />
      <Card id="todoList" className="flex-1 mt-[4rem] overflow-hidden">
        <div className="h-full overflow-y-scroll px-[2rem]">{List}</div>
      </Card>
    </div>
  );
}

export default ToDoList;
