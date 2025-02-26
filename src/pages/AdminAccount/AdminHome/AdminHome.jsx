import { IoWallet } from "react-icons/io5";
import useUser from "../../../hooks/useUser";
import { useEffect, useState } from "react";
import "animate.css";
import useAllTransactions from "../../../hooks/useAllTransactions";
import useAllUsers from "../../../hooks/useAllUsers";
const AdminHome = () => {
  const [users] = useUser();
  const [allUsers] = useAllUsers();
  const [totalBalance, setTotalBalance] = useState(0);
  const [allTransactions] = useAllTransactions();

  useEffect(() => {
    if (allUsers && allUsers.length > 0) {
      const sum = allUsers.reduce((acc, user) => acc + user.myBalance, 0);
      setTotalBalance(sum);
    }
  }, [allUsers]);
  const newBalance = users.myBalance || 0;
  const [isVisible, setIsVisible] = useState(false);
  const [showTapText, setShowTapText] = useState(true);
  const [isIncomeVisible, setIncomeIsVisible] = useState(false);
  const [showIncomeTapText, setIncomeShowTapText] = useState(true);
  const handleClick = () => {
    setIsVisible(true);
    setShowTapText(false);

    setTimeout(() => {
      setIsVisible(false);
      setShowTapText(true);
    }, 3000);
  };
  const handleClickforIncome = () => {
    setIncomeIsVisible(true);
    setIncomeShowTapText(false);

    setTimeout(() => {
      setIncomeIsVisible(false);
      setIncomeShowTapText(true);
    }, 3000);
  };
  return (
    <div>
      <h1 className=" mt-12 ml-8 font-bold text-5xl">
        Welcome <span className="text-cyan-500">Mr. {users.name}</span>
      </h1>
      <div className="flex items-center justify-around mt-24 gap-8">
        <div
          className="border p-2 w-[20%] rounded-md  bg-green-600 border-green-600 cursor-pointer text-white text-center"
          onClick={handleClickforIncome}
        >
          <h1 className="text-3xl font-bold ">
            {isIncomeVisible ? (
              <span
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="flex items-center gap-1.5 justify-center">
                  <IoWallet />
                  {newBalance} Tk
                </span>
              </span>
            ) : showIncomeTapText ? (
              <span>Tap for Income</span>
            ) : null}
          </h1>
        </div>
        <div
          className="border p-2 w-[30%] rounded-md  bg-blue-700 border-blue-700 cursor-pointer text-white text-center"
          onClick={handleClick}
        >
          <h1 className="text-3xl font-bold ">
            {isVisible ? (
              <span
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="flex items-center gap-1.5 justify-center">
                  <IoWallet />
                  {totalBalance} Tk
                </span>
              </span>
            ) : showTapText ? (
              <span>Tap for balance</span>
            ) : null}
          </h1>
        </div>
        <div className="border p-2 w-[30%] rounded-md  bg-orange-800 border-orange-800 text-white text-center">
          <h1 className="text-3xl font-bold">
            Total Transactions : {allTransactions.length}{" "}
          </h1>
        </div>
      </div>
      <div className="border w-[500px] h-[300px] mx-auto mt-12  rounded-md">
        <h1 className="text-xl font-bold text-center bg-purple-500 w-16 rounded-r-md">
          {users.accountType}
        </h1>
        <h1 className="text-4xl font-bold text-center space-y-2 mt-4">
          Name :{users.name}
        </h1>
        <h1 className="text-3xl font-bold text-center space-y-2 mt-4">
          Mobile : +880{users.mobileNumber}
        </h1>
        <h1 className="text-3xl font-bold text-center space-y-2 mt-4">
          Email : {users.email}
        </h1>
        <h1 className="text-2xl font-bold text-center space-y-2 mt-4">
          NID : {users.nid}
        </h1>
      </div>
    </div>
  );
};

export default AdminHome;
