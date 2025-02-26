
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";
const useAgentTransactions = () => {
   const [users] = useUser();
   const axiosSecure = useAxiosSecure();
   const { data: transaction = [], refetch } = useQuery({
     queryKey: [users?.mobileNumber, "sendMoney"],
     queryFn: async () => {
       const res = await axiosSecure.get(
         `/transactions/Individual/agent?mobileNumber=${users?.mobileNumber}`
       );
       return res.data;
     },
   });
   return [transaction, refetch];
};

export default useAgentTransactions;