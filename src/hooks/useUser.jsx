import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure'
import useAuth from "./useAuth";
const useUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const { data: users = [], refetch } = useQuery({
    queryKey: [user?.email, "users"],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/users?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [users, refetch];
  
};

export default useUser;
