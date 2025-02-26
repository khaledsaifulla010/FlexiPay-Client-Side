import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye, IoWallet } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import useUser from "../../../hooks/useUser";

const CashOut = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const [users, refetch] = useUser();
  const newBalance = users.myBalance;

  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState(["", "", "", "", ""]);

  const handlePinChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      setValue("pin", newPin.join(""));
    }
  };

  const onSubmit = (data) => {
    // Generate Transaction ID Dynamically //
    const transactionId = () =>
      Array.from({ length: 10 }, () =>
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
          Math.floor(Math.random() * 62)
        )
      ).join("");

    // Amount Validation //
    const amount = Number(data.amount);
    if (amount < 50) {
      toast.error("Minimum amount to cash out is 50!", {
        position: "top-right",
        theme: "colored",
      });
      return;
    }

    // Added Transaction Fee //
    const totalDeduction = amount * 0.015;

    // We Check The Balance Sufficient //
    if (totalDeduction > newBalance) {
      toast.error("Insufficient balance!", {
        position: "top-right",
        theme: "colored",
      });
      return;
    }

    const senderMobileNumber = users?.mobileNumber;

    const cashout = {
      senderId: users._id,
      accountType: users.accountType,
      sender: user?.displayName,
      senderMobileNumber: senderMobileNumber,
      mobileNumber: Number(data.mobileNumber),
      amount: amount,
      transactionId: transactionId(),
      transferType: "Cashout",
      date: new Date(),
    };
    axios
      .post("https://flexi-pay-server-side.vercel.app/cashout", cashout)
      .then((res) => {
        if (res.data.success) {
          refetch();

          toast.success("Transaction Successful!", {
            position: "top-right",
            theme: "colored",
          });

          reset();
        }
      })
      .catch(() => {
        toast.error("Something Went Wrong!", {
          position: "top-right",
          theme: "colored",
        });
      });
  };

  const handleCancel = () => {
    reset();
  };
  return (
    <div>
      <div className="flex flex-col items-center ">
        <h1 className="mt-24 text-5xl font-bold text-center">Cash Out</h1>

        <div className="w-[500px] mt-12 border border-slate-300 px-6 py-10 rounded-xl shadow-lg">
          <form
            className="flex flex-col space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Mobile Number */}
            <div className="form-control flex-1">
              <label className="label font-bold">
                Mobile Number (Agent) <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                {...register("mobileNumber", {
                  required: "Mobile number is required",
                })}
                placeholder="Enter Your Mobile Number"
                className="input input-bordered w-full text-black"
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>

            {/* Amount */}
            <div className="form-control flex-1">
              <label className="label font-bold">
                Amount<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                {...register("amount", { required: "Amount is required" })}
                placeholder="Enter Amount"
                min={0}
                className="input input-bordered w-full text-black"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.amount.message}
                </p>
              )}
            </div>

            {/* Available Balance */}
            <div>
              <h1 className="font-bold text-lg flex items-center gap-2">
                Available Balance : <IoWallet />
                {newBalance} Tk{" "}
              </h1>
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
                    className="w-12 h-10 text-center input input-bordered text-black"
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.pin.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="text-lg font-bold p-2 border rounded-md bg-gray-400 text-white border-gray-400 w-1/2 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-lg font-bold p-2 border rounded-md bg-red-600 text-white border-red-600 w-1/2 cursor-pointer"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CashOut;
