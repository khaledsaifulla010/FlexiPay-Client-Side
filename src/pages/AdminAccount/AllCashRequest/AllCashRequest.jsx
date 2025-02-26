import { VscVerifiedFilled } from "react-icons/vsc";
import useAllCashRequest from "../../../hooks/useAllCashRequest";

const AllCashRequest = () => {
  const [allCashRequest] = useAllCashRequest();
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

                <td className="py-3 px-4 flex justify-center space-x-2">
                  <button>
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
