import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../authentication/Register/Register";
import Login from "../authentication/Login/Login";
import UserLayout from "../layout/UserLayout/UserLayout";
import UserHome from "../pages/UserAccount/userHome/userHome";

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
  {
    path: "user",
    element: <UserLayout />,
    children: [
      {
        path: "userHome",
        element: <UserHome />,
      },
    ],
  },
]);

export default router;
