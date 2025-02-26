import { BsCashCoin } from "react-icons/bs";
import useUser from "../../../hooks/useUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const CashRequest = () => {
  const [users] = useUser();
  const axiosSecure = useAxiosSecure();

  const cashRequestData = {
    name: users?.name,
    mobileNumber: users?.mobileNumber,
    email: users?.email,
    nid: users?.nid,
  };

  const handleCashRequest = async () => {
    const res = await axiosSecure.post("/cashRequest", cashRequestData);
    if (res.data.insertedId) {
      toast.success("Request for Cash Successfully!", {
        position: "top-right",
        theme: "colored",
      });
    }
  };

  return (
    <div>
      <h1 className="mt-36 text-4xl font-bold text-center">Cash Request</h1>
      <div className="border w-[500px] space-y-2 py-6 mx-auto mt-4 rounded-md bg-gray-600 border-gray-500">
        <h1 className="font-bold text-3xl text-center ">
          Name : {users?.name}
        </h1>
        <h1 className="font-bold text-2xl text-center ">
          Mobile : +880{users?.mobileNumber}
        </h1>
        <h1 className="font-bold text-2xl text-center ">
          Email : {users?.email}
        </h1>
        <h1 className="font-bold text-2xl text-center ">NID : {users?.nid}</h1>
        <button
          onClick={handleCashRequest}
          className="p-2 border rounded-md  w-[80%] ml-12 bg-cyan-800 font-bold border-cyan-600 flex items-center justify-center gap-1.5 cursor-pointer text-xl"
        >
          Request For Cash <BsCashCoin className="mt-2" />
        </button>
      </div>
    </div>
  );
};

export default CashRequest;
