import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChildrenItemsProvider } from "./context/child-items.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChildrenItemsProvider>
        <App />
      </ChildrenItemsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
