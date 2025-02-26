import {
  FaCashRegister,
  FaCircleRight,
  FaCodePullRequest,
  FaUsers,
  // FaHandHoldingDollar,
  // FaMoneyBillTransfer,
} from "react-icons/fa6";
import { RiHome9Fill } from "react-icons/ri";
// import { TbFolderDollar } from "react-icons/tb";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { IoBarChartSharp } from "react-icons/io5";
// import { MdNotificationsActive } from "react-icons/md";
// import useNotifications from "../../hooks/useNotifications";

const AdminLayout = () => {
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
            to="/admin/adminHome"
            className="flex items-center font-bold text-2xl gap-1.5 ml-12"
          >
            <RiHome9Fill />
            Admin Home
          </NavLink>
          <NavLink
            to="/admin/allUsers"
            className="flex items-center font-bold text-2xl gap-1.5 ml-12"
          >
            <FaUsers />
            All Users
          </NavLink>
          <NavLink
            to="/admin/allRequestedAgent"
            className="flex items-center font-bold text-2xl gap-1.5 ml-12"
          >
            <FaCodePullRequest />
            Requested Agent
          </NavLink>
          <NavLink
            to="/admin/cashRequest"
            className="flex items-center font-bold text-2xl gap-1.5 ml-12"
          >
            <FaCashRegister />
            Cash Request
          </NavLink>
          <NavLink
            to="/admin/allTransactions"
            className="flex items-center font-bold text-2xl gap-1.5 ml-12"
          >
            <IoBarChartSharp />
            All Transactions
          </NavLink>
          <button
            onClick={handleLogout}
            className="flex items-center font-bold text-2xl gap-1.5 ml-12 cursor-pointer"
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

export default AdminLayout;
