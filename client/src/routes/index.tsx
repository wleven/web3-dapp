import { EtherContext, EtherProvider } from "@/context/Ethers";
import Layout from "@/layout";
import App from "@/views/App";
import ToDoList from "@/views/TodoList";
import { Routes, Route } from "react-router-dom";

function AppRouters() {
  return (
    <Layout>
      <EtherProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/todoList" element={<ToDoList />} />
        </Routes>
      </EtherProvider>
    </Layout>
  );
}

export default AppRouters;
