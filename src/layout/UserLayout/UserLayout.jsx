import { useState } from "react";
import { FaHandHoldingDollar, FaMoneyBillTransfer } from "react-icons/fa6";
import { RiHome9Fill } from "react-icons/ri";
import { TbFolderDollar } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
  const [balance, setBalance] = useState(5000.31);

  return (
    <div className="flex w-full font-2 text-white">
      {/* Side Content */}
      <div className="w-[350px] border border-red-500 min-h-screen space-y-8 bg-[#171717] py-12">
        <NavLink
          to="userHome"
          className="flex items-center font-bold text-2xl gap-1.5 ml-20"
        >
          <RiHome9Fill />
          Home
        </NavLink>
        <NavLink
          to="userHome"
          className="flex items-center font-bold text-2xl gap-1.5 ml-20"
        >
          <TbFolderDollar />
          Cash In
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
          <FaHandHoldingDollar />
          Cash Out
        </NavLink>
      </div>

      {/* Main Content */}
      <div className="w-full border border-green-700  bg-[#212121]">
        <Outlet context={{ balance, setBalance }} />
      </div>
    </div>
  );
};

export default UserLayout;
