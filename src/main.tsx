import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App";

import "./assets/css/utilities/index.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { PwdForget } from "./pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/pwdForget",
    element: <PwdForget />,
  },
  /* {
    path: "/test",
    element: <App />,
  }, */
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
