import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const WithoutLoginHome = () => {
  return (
    <div className="text-white font-1">
      <h1 className="text-6xl font-bold  text-center py-52  ">
        FlexiPay – Fast, Secure & Effortless Transactions
      </h1>
      <p className="text-2xl font-semibold -mt-44 text-center px-40">
        FlexiPay simplifies sending money, cash-in, cash-out, and balance
        inquiries with a secure, user-friendly experience. Enjoy seamless
        digital transactions anytime, anywhere!
      </p>
      <Link
        to="/register"
        className="w-36 mt-8 p-2 border rounded-md font-bold text-lg ml-[700px] bg-indigo-800 border-indigo-700 cursor-pointer flex items-center justify-center gap-1.5"
      >
        Get Started <FaHandPointRight />
      </Link>
    </div>
  );
};

export default WithoutLoginHome;
