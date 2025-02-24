import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [pin, setPin] = useState(["", "", "", "", ""]);
  const [showPin, setShowPin] = useState(false);
  const redirects = useNavigate();
  const { loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

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
    const newPin = "0" + data.pin;
    loginUser(data.email, newPin).then((result) => {
      console.log(result.user);
      redirects("/");
    });
  };
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <h1 className="mt-24 text-5xl font-bold text-center">Please Login</h1>

      <div className="w-[500px] mt-12 border border-slate-300 px-6 py-10 rounded-xl shadow-lg">
        <form
          className="flex flex-col space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
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

          {/* 5-Digit PIN */}
          <div className="form-control">
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
            <input
              type="hidden"
              {...register("pin", {
                required: "PIN is required",
                minLength: 5,
                maxLength: 5,
              })}
            />
            {errors.pin && (
              <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>
            )}
          </div>

          <h3>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-base text-blue-600 underline"
            >
              Register
            </Link>{" "}
          </h3>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-lg font-bold p-2 border rounded-md bg-purple-600 text-white border-purple-600 w-full cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
