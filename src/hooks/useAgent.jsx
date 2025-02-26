import useAxiosSecure from "./useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const useAgent = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAgent } = useQuery({
    queryKey: [user?.email, "isAgent"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/agent/${user.email}`);
      return res.data?.isAgent;
    },
  });

  return [isAgent];
};

export default useAgent;
