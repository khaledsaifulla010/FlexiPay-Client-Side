import { IoWallet } from "react-icons/io5";
import useUser from "../../../hooks/useUser";

const UserHome = () => {
  const [users] = useUser();
  const newBalance = users.myBalance || 0;
  return (
    <div>
      <h1>User Home</h1>

      <div className="border p-2 w-[20%] rounded-md ml-12 mt-12 bg-green-600 border-green-600">
        <h1 className="text-3xl font-bold flex items-center gap-1.5 justify-center">
          <IoWallet />
          {newBalance} Tk
        </h1>
      </div>
    </div>
  );
};

export default UserHome;
