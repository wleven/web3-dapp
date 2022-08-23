interface ToDoItem {
  value: string;
  /** 0-未完成 1-已完成 */
  state: 0 | 1;
  time: string;
}
