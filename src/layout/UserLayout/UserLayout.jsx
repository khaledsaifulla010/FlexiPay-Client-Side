import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex w-full ">
      {/* Side Content */}
      <div className="w-[350px] border border-red-500 min-h-screen  bg-[#171717]"></div>

      {/* Main Content */}
      <div className="w-full border border-green-700  bg-[#212121]">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
