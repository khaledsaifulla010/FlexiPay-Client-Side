import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../authentication/Register/Register";
import Login from "../authentication/Login/Login";
import UserLayout from "../layout/UserLayout/UserLayout";
import UserHome from "../pages/UserAccount/userHome/userHome";
import SendMoney from "../pages/UserAccount/SendMoney/SendMoney";
import Notifications from "../pages/UserAccount/Notifications/Notifications";
import CashOut from "../pages/UserAccount/CashOut/CashOut";
import AgentLayout from "../layout/AgentLayout/AgentLayout";
import AgentHome from "../pages/AgentAccount/AgentHome/AgentHome";
import AdminLayout from "../layout/AdminLayout/AdminLayout";
import AdminHome from "../pages/AdminAccount/AdminHome/AdminHome";
import AllUsers from "../pages/AdminAccount/AllUsers/AllUsers";
import MyTransaction from "../pages/UserAccount/MyTransaction/MyTransaction";
import AgentTransaction from "../pages/AgentAccount/AgentTransaction/AgentTransaction";

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
  // THIS IS USER LAYOUT //
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
      {
        path: "cashOut",
        element: <CashOut />,
      },
      {
        path: "myTransaction",
        element: <MyTransaction />,
      },
    ],
  },
  // THIS IS AGENT LAYOUT //
  {
    path: "agent",
    element: <AgentLayout />,
    children: [
      {
        path: "agentHome",
        element: <AgentHome />,
      },
      {
        path: "agentTransaction",
        element: <AgentTransaction />,
      },
      // {
      //   path: "sendMoney",
      //   element: <SendMoney />,
      // },
      // {
      //   path: "notifications",
      //   element: <Notifications />,
      // },
      // {
      //   path: "cashOut",
      //   element: <CashOut />,
      // },
    ],
  },
  // THIS IS ADMIN LAYOUT //
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },

      // {
      //   path: "sendMoney",
      //   element: <SendMoney />,
      // },
      // {
      //   path: "notifications",
      //   element: <Notifications />,
      // },
      // {
      //   path: "cashOut",
      //   element: <CashOut />,
      // },
    ],
  },
]);

export default router;
