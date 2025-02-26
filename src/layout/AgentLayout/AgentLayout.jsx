import {
  FaCircleRight,
  // FaHandHoldingDollar,
  // FaMoneyBillTransfer,
} from "react-icons/fa6";
import { RiHome9Fill } from "react-icons/ri";
// import { TbFolderDollar } from "react-icons/tb";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { TbTransactionDollar } from "react-icons/tb";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { BsCashCoin } from "react-icons/bs";
// import { MdNotificationsActive } from "react-icons/md";
// import useNotifications from "../../hooks/useNotifications";

const AgentLayout = () => {
  const { logoutUser } = useAuth();

  const redirect = useNavigate();
  // const [notifications] = useNotifications();
  // const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleLogout = () => {
    logoutUser().then(() => {
      redirect("/login");
      toast.success("Successfully Logged Out !", {
        position: "top-right",
        theme: "colored",
      });
    });
  };
  return (
    <div>
      <div className="flex w-full font-2 text-white">
        {/* Side Content */}
        <div className="w-[350px] border border-red-500 min-h-screen space-y-8 bg-[#171717] py-12">
          <NavLink
            to="/agent/agentHome"
            className="flex items-center font-bold text-2xl gap-1.5 ml-20"
          >
            <RiHome9Fill />
            Home
          </NavLink>
          <NavLink
            to="/agent/agentRequest"
            className="flex items-center font-bold text-2xl gap-1.5 ml-20"
          >
            <VscGitPullRequestGoToChanges />
            Be An Agent
          </NavLink>
          <NavLink
            to="/agent/agentCashRequest"
            className="flex items-center font-bold text-2xl gap-1.5 ml-20"
          >
            <BsCashCoin className="mt-2" />
            Cash Request
          </NavLink>
          <NavLink
            to="/agent/agentTransaction"
            className="flex items-center font-bold text-2xl gap-1.5 ml-20"
          >
            <TbTransactionDollar />
            Transactions
          </NavLink>

          {/* <NavLink
              to="notifications"
              className="flex items-center font-bold text-2xl gap-1.5 ml-20"
            >
              <MdNotificationsActive />
              Notifications({unreadCount > 0 ? unreadCount : 0})
            </NavLink>

            <NavLink
              to="sendMoney"
              className="flex items-center font-bold text-2xl gap-1.5 ml-20"
            >
              <FaMoneyBillTransfer />
              Send Money
            </NavLink>
            <NavLink
              to="userHome"
              className="flex items-center font-bold text-2xl gap-1.5 ml-20"
            >
              <TbFolderDollar />
              Cash In
            </NavLink>
            <NavLink
              to="cashOut"
              className="flex items-center font-bold text-2xl gap-1.5 ml-20"
            >
              <FaHandHoldingDollar />
              Cash Out
            </NavLink> */}
          <button
            onClick={handleLogout}
            className="flex items-center font-bold text-2xl gap-1.5 ml-20 cursor-pointer"
          >
            <FaCircleRight />
            Sign Out
          </button>
        </div>

        {/* Main Content */}
        <div className="w-full border border-green-700  bg-[#212121]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AgentLayout;
