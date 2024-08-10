import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Subscribe from "./pages/Subscribe";
import Thanks from "./pages/thanks";

const router = createBrowserRouter([
  { path: "/", element: <Subscribe /> },
  { path: "/thanks", element: <Thanks /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
