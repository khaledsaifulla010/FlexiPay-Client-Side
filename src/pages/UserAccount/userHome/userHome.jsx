import { IoWallet } from "react-icons/io5";
import useUser from "../../../hooks/useUser";
import { useState } from "react";
import "animate.css";
const UserHome = () => {
  const [users] = useUser();
  const newBalance = users.myBalance || 0;
  const [isVisible, setIsVisible] = useState(false);
  const [showTapText, setShowTapText] = useState(true);
  const handleClick = () => {
    setIsVisible(true);
    setShowTapText(false);

    setTimeout(() => {
      setIsVisible(false);
      setShowTapText(true);
    }, 3000);
  };
  return (
    <div>
      <div
        className="border p-2 w-[40%] rounded-md ml-12 mt-12 bg-green-600 border-green-600 cursor-pointer text-white text-center"
        onClick={handleClick}
      >
        <h1 className="text-3xl font-bold ">
          {isVisible ? (
            <span
              className="animate__animated animate__fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="flex items-center gap-1.5 justify-center">
                <IoWallet />
                {newBalance} Tk
              </span>
            </span>
          ) : showTapText ? (
            <span>Tap for balance</span>
          ) : null}
        </h1>
      </div>
    </div>
  );
};

export default UserHome;
