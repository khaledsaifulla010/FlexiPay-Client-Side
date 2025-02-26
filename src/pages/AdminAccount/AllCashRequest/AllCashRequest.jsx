import { VscVerifiedFilled } from "react-icons/vsc";
import useAllCashRequest from "../../../hooks/useAllCashRequest";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const AllCashRequest = () => {
  const [allCashRequest, refetch] = useAllCashRequest();
  const axiosSecure = useAxiosSecure();

  const handleAccepetCashRequest = async (agentId, agentBalance) => {
    const newAgentBalance = agentBalance + 100000;
    console.log(newAgentBalance);

    const res = await axiosSecure.put(`/cashRequest/${agentId}`, {
      agentBalance: newAgentBalance,
    });
    if (
      res.data.result.modifiedCount > 0 ||
      res.data.userUpdate.modifiedCount > 0
    ) {
      refetch();
      toast.success("Agent Cash Request Accepted Successfully!", {
        position: "top-right",
        theme: "colored",
        style: { width: "400px" },
      });
    }
  };

  return (
    <div className="container mx-auto p-4 text-center mt-12">
      <h2 className="text-4xl text-white font-bold mb-4">
        All Requested Agents
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white font-bold text-xl">
            <tr>
              <th className="py-3 px-4 text-center">SL/No.</th>
              <th className="py-3 px-4 text-center">Name</th>
              <th className="py-3 px-4 text-center">Mobile</th>
              <th className="py-3 px-4 text-center">Email</th>
              <th className="py-3 px-4 text-center">NID</th>
              <th className="py-3 px-4 text-center">Agent Balance</th>
              <th className="py-3 px-4 text-center">Accept</th>
            </tr>
          </thead>
          <tbody>
            {allCashRequest.map((agent, index) => (
              <tr key={agent._id} className="border-b text-center">
                <td className="py-3 px-4 font-bold text-indigo-800">
                  {index + 1}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  {agent.name}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  0{agent.mobileNumber}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  {agent.email}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  {agent.nid}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  {agent.agentBalance}
                </td>

                <td className="py-3 px-4 flex justify-center space-x-2">
                  <button
                    onClick={() =>
                      handleAccepetCashRequest(
                        agent.agentId,
                        agent.agentBalance
                      )
                    }
                  >
                    <VscVerifiedFilled className="text-3xl text-green-600 cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCashRequest;
