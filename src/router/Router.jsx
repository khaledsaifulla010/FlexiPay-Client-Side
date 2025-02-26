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
import AgentRequest from "../pages/AgentAccount/AgentRequest/AgentRequest";
import AllTransactions from "../pages/AdminAccount/AllTransactions/AllTransactions";
import AllRequestedAgent from "../pages/AdminAccount/AllRequestedAgent/AllRequestedAgent";
import CashRequest from "../pages/AgentAccount/CashRequest/CashRequest";
import AllCashRequest from "../pages/AdminAccount/AllCashRequest/AllCashRequest";

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
      {
        path: "agentRequest",
        element: <AgentRequest />,
      },
      {
        path: "agentCashRequest",
        element: <CashRequest />,
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
      {
        path: "allRequestedAgent",
        element: <AllRequestedAgent />,
      },
      {
        path: "allTransactions",
        element: <AllTransactions />,
      },
      {
        path: "cashRequest",
        element: <AllCashRequest />,
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
