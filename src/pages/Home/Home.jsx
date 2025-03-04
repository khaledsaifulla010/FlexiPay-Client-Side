import useAccountUser from "../../hooks/useAccountUser";
import useAdmin from "../../hooks/useAdmin";
import useAgent from "../../hooks/useAgent";
import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import AgentLayout from "../../layout/AgentLayout/AgentLayout";
import UserLayout from "../../layout/UserLayout/UserLayout";
import WithoutLoginHome from "../WithoutLoginHome/WithoutLoginHome";

const Home = () => {
  const [isAdmin] = useAdmin();
  const [isAgent] = useAgent();
  const [isUser] = useAccountUser();

  return (
    <div>
      {isAdmin ? (
        <AdminLayout />
      ) : isAgent ? (
        <AgentLayout />
      ) : isUser ? (
        <UserLayout />
      ) : (
        <WithoutLoginHome />
      )}
    </div>
  );
};

export default Home;
