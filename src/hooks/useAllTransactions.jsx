import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllTransactions = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allTransactions = [], refetch } = useQuery({
    queryKey: ["allTransactions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/transactions/allTransactions");
      return res.data;
    },
  });
  return [allTransactions, refetch];
};

export default useAllTransactions;
