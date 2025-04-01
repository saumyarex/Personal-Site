import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Preview from "./preview";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import AddProject from "./pages/AddProject.jsx";
import HomePage from "./pages/HomePage.jsx";
import Authlayout from "./components/Authlayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: (
      <Authlayout authentication={false}>
        <LoginPage />
      </Authlayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Authlayout authentication={false}>
        <SignupPage />
      </Authlayout>
    ),
  },
  {
    path: "/admin-panel",
    element: (
      <Authlayout authentication={true}>
        <AdminPanel />
      </Authlayout>
    ),
  },
  {
    path: "/addprojects",
    element: (
      <Authlayout authentication={true}>
        <AddProject />
      </Authlayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
