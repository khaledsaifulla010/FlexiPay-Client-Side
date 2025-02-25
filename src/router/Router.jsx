import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../authentication/Register/Register";
import Login from "../authentication/Login/Login";
import UserLayout from "../layout/UserLayout/UserLayout";
import UserHome from "../pages/UserAccount/userHome/userHome";
import SendMoney from "../pages/UserAccount/SendMoney/SendMoney";
import Notifications from "../pages/UserAccount/Notifications/Notifications";

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
      {
        path: "sendMoney",
        element: <SendMoney />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
]);

export default router;
