import Card from "@/components/Card";
import Input from "@/components/Form/Input";
import { EtherContext } from "@/context/Ethers";
import { GetContractAbi, GetContractAddress } from "@/contract";
import { ethers } from "ethers";
import { KeyboardEvent, useContext, useEffect, useMemo, useRef, useState } from "react";
import ListItem from "./ListItem";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<ToDoItem[]>([]);

  const todoContract = useRef<ethers.Contract>();

  const context = useContext(EtherContext);

  useEffect(() => {
    document.getElementById("todoList")?.addEventListener("change", handleEventClick);
    return () => {
      document.getElementById("todoList")?.removeEventListener("change", handleEventClick);
    };
  }, [list]);

  useEffect(() => {
    if (!context?.userAddress) {
      if (list.length !== 0) {
        setList([]);
        todoContract.current = undefined;
      }
      return;
    }

    const todo = new ethers.Contract(GetContractAddress("ToDoList"), GetContractAbi("ToDoList"), context?.provider?.getSigner());
    todoContract.current = todo;

    getDataList();

    todo.on("update", handleContractUpdate);

    return () => {
      todo.off("update", handleContractUpdate);
    };
  }, [context?.userAddress]);

  /** 合约数据更新事件 */
  function handleContractUpdate(address: string) {
    if (address === context?.userAddress) {
      getDataList();
    }
  }

  /** 获取数据列表 */
  function getDataList() {
    todoContract.current?.GetList().then((data: ToDoItem[]) => {
      setList(data);
    });
  }

  /** 改变状态 */
  function handleEventClick(event: HTMLElementEventMap["change"]) {
    if (!context?.checkLogin()) return;
    const target = event.target as HTMLInputElement;

    if (target.getAttribute("type") === "checkbox") {
      const time = target.getAttribute("data-time");

      const index = list.findIndex((i) => {
        return i.time === time;
      });
      if (index === -1) return;

      const state = !target.checked ? 1 : 0;

      todoContract.current?.UpdateItem(index, state).then(() => {
        getDataList();
      });
    }
  }

  /** 回车 */
  async function handleOnKeyDown(event: KeyboardEvent) {
    if (event.code === "Enter") {
      await context?.checkLogin();
      todoContract.current?.AddItem(inputValue, new Date().getTime().toString()).then(() => {
        getDataList();
        setInputValue("");
      });
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
