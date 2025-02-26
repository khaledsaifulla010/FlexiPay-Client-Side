import useAxiosSecure from "./useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
const useAccountUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isUser } = useQuery({
    queryKey: [user?.email, "isUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/user/${user.email}`);
      return res.data?.isUser;
    },
  });

  return [isUser];
};

export default useAccountUser;
