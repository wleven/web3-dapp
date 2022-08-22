import Layout from "@/layout";
import App from "@/views/App";
import { Routes, Route } from "react-router-dom";

function AppRouters() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Layout>
  );
}

export default AppRouters;
