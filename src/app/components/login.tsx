"use client";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { View, EyeOff } from "lucide-react";
import { loginApi } from "../Api";

export type loginUserTypes = {
  email: string;
  password: string;

  role: {
    // type: String,
    // required: true,
    enum: ["admin", "user"];
  };
};
// import { AppContext } from "../context/AppNotify";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppContext } from "@/app/context/AppNotify";
// import { useRouter } from "next/router";
// import { Link, useNavigate } from "react-router-dom";

export type loginTypes = {
  email: string;
  password: string;
};
export default function Login() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [passwordType, setPasswordType] = useState("password");
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
    setPasswordType(PasswordVisible ? "text" : "password");
  };
  // const navigate = useNavigate();
  const { showToast } = AppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUserTypes>();

  const { mutate: apiMutate, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: async () => {
      showToast({ type: "SUCCESS", message: "Successfully Login" });
      //  await queryclient.invalidateQueries("validateToken")
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      
      router.push("/");
    },
    onError: (error:Error) => {
      showToast({ type: "ERROR", message: error?.message });

    },
  });
  const onSubmit = handleSubmit((da) => {
    apiMutate(da);
  });
  return (
    <form
      className="flex flex-col mt-32 bg-slate-400 rounded-lg w-full md:w-1/2 h-auto p-4 mx-auto "
      onSubmit={onSubmit}
    >
      <h2 className="flex justify-center text-2xl font-bold">Login</h2>
      <div className="flex flex-col gap-4 ">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Email:
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-sm text-red-300">{errors.email.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Password:
          <input
            type={passwordType}
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("password", {
              minLength: {
                value: 6,
                message: "password must be 6 characters",
              },
              required: "Password is required",
            })}
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute -m-8 mt-1 hover:cursor-pointer"
          >
            {PasswordVisible ? <View /> : <EyeOff />}
          </span>
          {errors.password && (
            <span className="text-sm text-red-300">
              {errors.password.message}
            </span>
          )}
        </label>
        <span className="flex ">
          <Link
            href="/register"
            className="underline font-semibold tracking-tighter hover:text-lg"
          >
            Register your acccount?{" "}
          </Link>
        </span>
      </div>
      {/* <Link to="/register">Register</Link> */}

      <div className="flex justify-center mt-2">
        {isPending ? (
          <button
            className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <svg
              className="w-5 h-5 mr-2 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                strokeWidth="currentColor"
                stroke="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Loading...
          </button>
        ) : (
          <button
            className="bg-green-700 hover:bg-blue-500 text-white  py-1 px-2 rounded"
            type="submit"
          >
            Submit
          </button>
        )}
      </div>

      {/* <button onClick={togglePasswordVisibility}>
        {passwordVisible ?  <View/> : <EyeOff/> }
      </button> */}
    </form>
  );
}
