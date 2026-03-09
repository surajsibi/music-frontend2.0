import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "../index";
import { useDispatch, useSelector } from "react-redux";
import GetImagePreview from "../GetImagePreview";
import { createAccount, userLogin } from "../../store/Slice/authSlice"
import LoginSkeleton from "../../skeleton/LoginSkeleton"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { username: "", email: "", fullname: "", password: "" },
  });

  const dispatch = useDispatch()
  const navigate = useNavigate
  const isActive = useSelector(state => state.utils.isActive);
  const loading = useSelector(state => state.auth?.loading)

  const submit = async (data) => {
    const response = await dispatch(createAccount(data));
    console.log(response);
    if (response?.payload?.success) {

      const loginData = { username: data.username, password: data.password }
      await dispatch(userLogin({ username: data?.username, password: data?.password }))


    }
    // else{
    //   navigate ("/login")
    // }

  }

  if (loading) {
    return <LoginSkeleton />
  }
  return (

    <div
      className={`absolute top-0 h-full flex flex-col items-center justify-center p-10 w-1/2 bg-white transition-transform duration-300 ${isActive ? 'translate-x-full opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center w-full">
        <h1 className="text-3xl  text-[#41118d] font-semibold mb-4">Create Account</h1>

        <span className="text-sm mb-4">Use your email for registration</span>
        <div className="w-full mb-3">
          <Input
            type="text"
            placeholder="Enter a Username"
            className="bg-gray-100 rounded-md w-full p-2.5 text-sm outline-none border border-transparent focus:border-indigo-300"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 2, message: "At least 2 characters" },
            })}
          />
          {errors.username && (
            <p className="text-xs text-rose-500 mt-1 font-medium">{errors.username.message}</p>
          )}
        </div>
        <div className="w-full mb-3">
          <Input
            type="email"
            placeholder="Enter your Email"
            className="bg-gray-100 rounded-md w-full p-2.5 text-sm outline-none border border-transparent focus:border-indigo-300"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-xs text-rose-500 mt-1 font-medium">{errors.email.message}</p>
          )}
        </div>
        <div className="w-full mb-3">
          <Input
            type="text"
            placeholder="Enter your full name"
            className="bg-gray-100 rounded-md w-full p-2.5 text-sm outline-none border border-transparent focus:border-indigo-300"
            {...register("fullname", {
              required: "Full name is required",
              minLength: { value: 2, message: "At least 2 characters" },
            })}
          />
          {errors.fullname && (
            <p className="text-xs text-rose-500 mt-1 font-medium">{errors.fullname.message}</p>
          )}
        </div>
        <div className="w-full mb-3">
          <Input
            type="password"
            placeholder="Enter a password"
            className="bg-gray-100 rounded-md w-full p-2.5 text-sm outline-none border border-transparent focus:border-indigo-300"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
          />
          {errors.password && (
            <p className="text-xs text-rose-500 mt-1 font-medium">{errors.password.message}</p>
          )}
        </div>
        <GetImagePreview
          label="Add your profile picture"
          control={control}
          className="object-cover rounded-full h-20 w-20 outline-none"
          cameraIcon={true}
          cameraSize={20}
        />
        <Button
          type="submit"
          disabled={!isValid}
          className={`bg-indigo-700 text-white uppercase px-6 py-2 rounded-md mt-4 text-sm font-semibold transition-opacity ${
            !isValid ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:opacity-90"
          }`}
          children="Sign Up"
        />
      </form>
    </div>

  );
};

export default Signup;
