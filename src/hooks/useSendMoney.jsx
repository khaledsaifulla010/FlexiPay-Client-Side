import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";
const useSendMoney = () => {
  const [users] = useUser();
  const axiosSecure = useAxiosSecure();
  const { data: sendMoney = [], refetch } = useQuery({
    queryKey: [users?.mobileNumber, "sendMoney"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/sendMoney?mobileNumber=${users?.mobileNumber}`
      );
      return res.data;
    },
  });

  // Calculate total get send money amount
  const totalAmount = sendMoney
    .filter((item) => item.mobileNumber === users?.mobileNumber)
    .reduce((sum, item) => sum + item.amount, 0);

  return [sendMoney, totalAmount, refetch];
};

export default useSendMoney;
