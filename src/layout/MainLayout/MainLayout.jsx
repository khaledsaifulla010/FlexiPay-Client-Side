import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-green-900 min-h-screen ">
      <Outlet />
    </div>
  );
};

export default MainLayout;
