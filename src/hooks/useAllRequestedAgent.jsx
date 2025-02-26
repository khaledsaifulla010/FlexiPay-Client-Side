import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllRequestedAgent = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allRequestedAgent = [], refetch } = useQuery({
    queryKey: ["allRequestedAgent"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allRequestedAgent");
      return res.data;
    },
  });
  return [allRequestedAgent, refetch];
};

export default useAllRequestedAgent;
