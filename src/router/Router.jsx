import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../authentication/Register/Register";
import Login from "../authentication/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
