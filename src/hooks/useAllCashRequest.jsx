import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllCashRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allCashRequest = [], refetch } = useQuery({
    queryKey: ["allCashRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allCashRequest");
      return res.data;
    },
  });
  return [allCashRequest, refetch];
};

export default useAllCashRequest;
