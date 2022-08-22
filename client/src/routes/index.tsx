import Layout from "@/layout";
import App from "@/views/App";
import ToDoList from "@/views/TodoList";
import { Routes, Route } from "react-router-dom";

function AppRouters() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todoList" element={<ToDoList />} />
      </Routes>
    </Layout>
  );
}

export default AppRouters;
