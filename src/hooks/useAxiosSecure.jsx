import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://flexi-pay-server-side.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
