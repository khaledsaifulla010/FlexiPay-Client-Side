import useAxiosSecure from "./useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin } = useQuery({
      queryKey: [user?.email, "isAdmin"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        return res.data?.isAdmin;
      },
    });

    return [isAdmin];
};

export default useAdmin;