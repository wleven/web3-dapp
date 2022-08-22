import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.less";
import AppRouters from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ConfigProvider componentSize="large">
      <AppRouters />
    </ConfigProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
