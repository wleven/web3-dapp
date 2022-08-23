import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.less";
import AppRouters from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AppRouters />
  </BrowserRouter>
  // </React.StrictMode>
);
