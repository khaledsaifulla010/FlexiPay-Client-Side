import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";

const useNotifications = () => {
  const [users] = useUser();
  const axiosSecure = useAxiosSecure();

  const { data: notifications = [], refetch } = useQuery({
    queryKey: ["notifications", users?._id],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/notifications?receiverId=${users?._id}`
      );
      return res.data;
    },
  });

  return [notifications, refetch];
};

export default useNotifications;
