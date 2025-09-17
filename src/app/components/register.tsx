/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
"use client"
import { useForm } from "react-hook-form";

export type registerUserTypes = {
  user: any;

  email: string,
  password: string,
  confirmPassword: string,
  firstName: string,
  imageFile:string,
  
  lastName: string
}
// import { RegisterUserTypes } from '../../../backend/src/models/registeUser.models';
// import { Link } from 'react-router-dom';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { registerApi } from '../Api';
import { AppContext } from "../context/AppNotify";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

// import { Link, useNavigate } from "react-router-dom";


// import { useContextNotify } from '../context/AppNotify';

export default function Register () {    
const router=    useRouter();
  const { showToast } = AppContext();
//   const navigate=useNavigate();
   const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<registerUserTypes>();
  // const queryclient = useQueryClient();
  const {mutate:apiMutate,isPending:isLoading} = useMutation({ mutationFn: registerApi,
  onSuccess: async () => {
    showToast({ type: "SUCCESS", message: "Successfully Registered" });
    await queryClient.invalidateQueries({ queryKey: ["validateToken"] })
    router.push("/");
  },});
  const onSubmit = handleSubmit((data:any) => {
    apiMutate(data);
  })
  return (

    <form className="flex flex-col mt-14 bg-slate-400 rounded-lg w-full md:w-1/2 h-auto p-4 mx-auto" onSubmit={onSubmit}>
      <h2 className="flex justify-center text-2xl font-bold">Register</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          FirstName:
          <input className="border rounded w-full py-1 px-2 font-normal" {...register("firstName", { required: "firstName is required" })} />
          {
            errors.firstName && (<span className="text-sm text-red-300">{errors.firstName.message}</span>)
          }
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          LastName:
          <input className="border rounded w-full py-1 px-2 font-normal" {...register("lastName", { required: "lastName is required" })} />
          {
            errors.lastName && (<span className="text-sm text-red-300">{errors.lastName.message}</span>)
          }
        </label>
      </div>
      {/* ///// */}
      <div className="flex flex-col gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Email:
          <input type="email" className="border rounded w-full py-1 px-2 font-normal" {...register("email", { required: "Email is required" })} />
          {
            errors.email && (<span className="text-sm text-red-300">{errors.email.message}</span>)
          }
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Password:
          <input type="password" className="border rounded w-full py-1 px-2 font-normal" {...register("password", {
            minLength: {
              value: 6,
              message: "password must be 6 characters"
            },
              required:"Password is required"
          })} />
          {
            errors.password && (<span className="text-sm text-red-300">{errors.password?.message}</span>)
          }
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          ConfirmPassword:
          <input type="password" className="border rounded w-full py-1 px-2 font-normal" {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "Confirm Password is required"
              }
              else if (watch("password") !== val) {
                return "Password not macthed"

              }
            }
          })} />
          {
            errors.confirmPassword && (<span className="text-sm text-red-300">{errors.confirmPassword?.message}</span>)
          }
        </label>
      </div>
      <span className="flex ">
                    <Link href="/login" className="underline font-semibold tracking-tighter hover:text-lg">Login your acccount</Link>
                </span>
          <div className="flex justify-center mt-2">
                {isLoading?
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
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Loading...
              </button>
              
                : 
                <button className="bg-green-700 hover:bg-blue-500 text-white  py-1 px-2 rounded" type="submit">Submit</button>
                } 
            </div>
   
    </form>
  )
}
