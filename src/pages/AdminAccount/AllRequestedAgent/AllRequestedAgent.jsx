import { VscVerifiedFilled } from "react-icons/vsc";
import useAllRequestedAgent from "../../../hooks/useAllRequestedAgent";
import { ImCross } from "react-icons/im";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const AllRequestedAgent = () => {
  const [allRequestedAgent, refetch] = useAllRequestedAgent();
  const axiosSecure = useAxiosSecure();

  // Status Accept //
  const handleRequestAccept = async (id) => {
    const response = await axiosSecure.put(`/requestedAgent/${id}`, {
      status: "Accepted",
    });
    if (response.data.modifiedCount > 0) {
      refetch();
      toast.success("Agent Request Accepted Successfully!", {
        position: "top-right",
        theme: "colored",
        style: { width: "350px" },
      });
    }
  };

  // Status Reject //
  const handleRequestReject = async (id) => {
    const response = await axiosSecure.put(`/requestedAgent/${id}`, {
      status: "Rejected",
    });
    if (response.data.modifiedCount > 0) {
      refetch();
      toast.success("Agent Request Rejected Successfully!", {
        position: "top-right",
        theme: "colored",
        style: { width: "350px", backgroundColor: "red", color: "#FFFFFF" },
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
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Accept</th>
              <th className="py-3 px-4 text-center">Reject</th>
            </tr>
          </thead>
          <tbody>
            {allRequestedAgent.map((agent, index) => (
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
                <td
                  className={`py-3 px-4 font-bold ${
                    agent.status === "Pending"
                      ? "text-orange-600"
                      : agent.status === "Accepted"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {agent.status}
                </td>

                <td className="py-3 px-4 flex justify-center space-x-2">
                  <button onClick={() => handleRequestAccept(agent._id)}>
                    <VscVerifiedFilled className="text-3xl text-green-600 cursor-pointer" />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleRequestReject(agent._id)}>
                    <ImCross className="text-xl text-red-600 cursor-pointer" />
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

export default AllRequestedAgent;
