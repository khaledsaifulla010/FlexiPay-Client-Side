import {
  FaCircleRight,
  FaHandHoldingDollar,
  FaMoneyBillTransfer,
} from "react-icons/fa6";
import { RiHome9Fill } from "react-icons/ri";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { MdNotificationsActive } from "react-icons/md";
import useNotifications from "../../hooks/useNotifications";
import useUser from "../../hooks/useUser";
import { TbTransactionDollar } from "react-icons/tb";
const UserLayout = () => {
  const { logoutUser } = useAuth();
  const [users] = useUser();
  const isUser = users.accountType === "User";
  const redirect = useNavigate();
  const [notifications] = useNotifications();
  const unreadCount = notifications.filter((n) => !n.isRead).length;

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
      {isUser && (
        <div className="flex w-full font-2 text-white">
          {/* Side Content */}
          <div className="w-[350px] border border-red-500 min-h-screen space-y-8 bg-[#171717] py-12">
            <NavLink
              to="/user/userHome"
              className="flex items-center font-bold text-2xl gap-1.5 ml-20"
            >
              <RiHome9Fill />
              Home
            </NavLink>
            <NavLink
              to="/user/notifications"
              className="flex items-center font-bold text-2xl gap-1.5 ml-20"
            >
              <MdNotificationsActive />
              Notifications({unreadCount > 0 ? unreadCount : 0})
            </NavLink>

            <NavLink
              to="/user/sendMoney"
              className="flex items-center font-bold text-2xl gap-1.5 ml-20"
            >
              <FaMoneyBillTransfer />
              Send Money
            </NavLink>
            <NavLink
              to="/user/cashOut"
              className="flex items-center font-bold text-2xl gap-1.5 ml-20"
            >
              <FaHandHoldingDollar />
              Cash Out
            </NavLink>
            <NavLink
              to="/user/myTransaction"
              className="flex items-center font-bold text-2xl gap-1.5 ml-20"
            >
              <TbTransactionDollar />
              Transactions
            </NavLink>
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
      )}
    </div>
  );
};

export default UserLayout;
