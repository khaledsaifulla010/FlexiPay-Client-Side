import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";
const useTransactionIndividual = () => {
  const [users] = useUser();
  const axiosSecure = useAxiosSecure();
  const { data: transaction = [], refetch } = useQuery({
    queryKey: [users?.mobileNumber, "sendMoney"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/transactions/Individual/user?senderMobileNumber=${users?.mobileNumber}`
      );
      return res.data;
    },
  });
  return [transaction, refetch];
};

export default useTransactionIndividual;
