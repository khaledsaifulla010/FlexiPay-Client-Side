import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import useUser from "../../../hooks/useUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { MdVerified } from "react-icons/md";
import useAllRequestedAgent from "../../../hooks/useAllRequestedAgent";
const AgentRequest = () => {
  const [users] = useUser();
  const [allRequestedAgent] = useAllRequestedAgent();
  const axiosSecure = useAxiosSecure();

  const agentData = {
    name: users?.name,
    mobileNumber: users?.mobileNumber,
    email: users?.email,
    nid: users?.nid,
    status: "Pending",
  };

  const handleRequestAnAgent = () => {
    axiosSecure
      .post("/requestedAgent", agentData)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Request for an Agent Successfully!", {
            position: "top-right",
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!", {
          position: "top-right",
          theme: "colored",
        });
      });
  };

  const findAgentStatus = (mobileNumber) => {
    const agent = allRequestedAgent.find(
      (agent) => agent.mobileNumber === mobileNumber
    );
    return agent ? agent.status : "Not Found";
  };
  const agentStatus = findAgentStatus(agentData?.mobileNumber);

  return (
    <div>
      <h1 className="mt-36 text-4xl font-bold text-center">
        Agent Request :{" "}
        <span
          className={`font-bold ${
            agentStatus === "Pending"
              ? "text-orange-500"
              : agentStatus === "Accepted"
              ? "text-green-500"
              : agentStatus === "Rejected"
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {agentStatus}
        </span>{" "}
      </h1>
      <div className="border w-[500px] h-[300px] mx-auto mt-4 rounded-md bg-gray-600 border-gray-500">
        <h1 className="font-bold text-3xl text-center mt-8">
          Name : {users?.name}
        </h1>
        <h1 className="font-bold text-2xl text-center mt-2">
          Mobile : +880{users?.mobileNumber}
        </h1>
        <h1 className="font-bold text-2xl text-center mt-2">
          Email : {users?.email}
        </h1>
        <h1 className="font-bold text-2xl text-center mt-2">
          NID : {users?.nid}
        </h1>
        {agentStatus === "Accepted" ? (
          <button className="p-2 border rounded-md mt-8 w-[80%] ml-12 bg-green-700 font-bold text-xl border-green-700 flex items-center justify-center gap-1.5 cursor-pointer">
            Verified Agent <MdVerified />
          </button>
        ) : (
          <button
            onClick={handleRequestAnAgent}
            className="p-2 border rounded-md mt-8 w-[80%] ml-12 bg-blue-800 font-bold border-blue-600 flex items-center justify-center gap-1.5 cursor-pointer text-xl"
          >
            Request For Agent <VscGitPullRequestGoToChanges />
          </button>
        )}
      </div>
    </div>
  );
};

export default AgentRequest;
