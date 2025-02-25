import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUser from "../../hooks/useUser";
import useSendMoney from "../../hooks/useSendMoney";
const Register = () => {
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState(["", "", "", "", ""]);
  const { createUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [users] = useUser();
  const [sendMoney, totalAmount] = useSendMoney();

  const initialTotalAMount = totalAmount || 0;
  const initialMyBalance = users.myBalance || 0;
  const newBalance = initialMyBalance + initialTotalAMount;

  // PIN Change & Join it //
  const handlePinChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      setValue("pin", newPin.join(""));
    }
  };

  const onSubmit = (data) => {
    // Create User //
    const newPin = "0" + data.pin;
    createUser(data.email, newPin).then((result) => {
      const user = result.user;

      const balance = data.accountType === "User" ? 40 + newBalance : 100000;

      const newUser = {
        name: data.fullName,
        email: user.email,
        mobileNumber: Number(data.mobileNumber),
        accountType: data.accountType,
        myBalance: balance,
        nid: data.nid,
      };

      axiosSecure
        .post("/users", newUser)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Register Successfully!", {
              position: "top-right",
              theme: "colored",
            });
          }
        })
        .catch((error) => {
          toast.error("Something Went Wrong!", {
            position: "top-right",
            theme: "colored",
          });
        });

      return updateUserProfile(data.fullName);
    });
  };

  return (
    <div className="bg-white min-h-screen font-1 flex flex-col items-center">
      <h1 className="mt-24 text-5xl font-bold text-center">Please Register</h1>

      <div className="w-[1000px] mt-12 border border-slate-300 px-6  py-10 rounded-xl shadow-lg">
        <form
          className="flex flex-col space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            {/* Full Name */}
            <div className="form-control flex-1">
              <label className="label font-bold">
                Full Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                {...register("fullName", { required: "Full Name is required" })}
                placeholder="Enter Your Full Name"
                className="input input-bordered w-full"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="form-control flex-1">
              <label className="label font-bold">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter Your Email"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            {/* Mobile Number */}
            <div className="form-control flex-1">
              <label className="label font-bold">
                Mobile Number<span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                {...register("mobileNumber", {
                  required: "Mobile number is required",
                })}
                placeholder="Enter Your Mobile Number"
                className="input input-bordered w-full"
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>

            {/* 5-Digit PIN */}
            <div className="form-control flex-1">
              <label className="label font-bold">
                5-Digit PIN<span className="text-red-600">*</span>
              </label>
              <div className="flex gap-8 items-center">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    type={showPin ? "text" : "password"}
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    maxLength={1}
                    className="w-12 h-10 text-center input input-bordered"
                  />
                ))}
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="ml-2 p-2 bg-gray-200 rounded-full"
                >
                  {showPin ? (
                    <IoMdEyeOff className="h-6 w-6 text-gray-600" />
                  ) : (
                    <IoEye className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>
              {errors.pin && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pin.message}
                </p>
              )}
              <input
                type="hidden"
                {...register("pin", {
                  required: "PIN is required",
                  minLength: 5,
                  maxLength: 5,
                })}
              />
            </div>
          </div>
          <div className="flex gap-4">
            {/* Account Type */}
            <div className="form-control flex-1">
              <label className="label font-bold">
                Account Type<span className="text-red-600">*</span>
              </label>
              <select
                {...register("accountType", {
                  required: "Account type is required",
                })}
                className="select select-bordered w-full"
              >
                <option value="">Select Account Type</option>
                <option value="Agent">Agent</option>
                <option value="User">User</option>
              </select>
              {errors.accountType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.accountType.message}
                </p>
              )}
            </div>

            {/* NID Number */}
            <div className="form-control flex-1">
              <label className="label font-bold">
                NID Number<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                {...register("nid", { required: "NID number is required" })}
                placeholder="Enter Your NID Number"
                className="input input-bordered w-full"
              />
              {errors.nid && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nid.message}
                </p>
              )}
            </div>
          </div>
          <h3>
            Have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-base text-purple-600 underline"
            >
              Login
            </Link>{" "}
          </h3>
          {/* Submit Button */}
          <button
            type="submit"
            className="text-lg font-bold p-2 border rounded-md bg-blue-600 text-white border-blue-600 w-full cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
