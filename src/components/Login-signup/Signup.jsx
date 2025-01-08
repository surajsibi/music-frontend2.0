import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "../index";
import { useSelector } from "react-redux";
import GetImagePreview from "../GetImagePreview";

const Signup = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  }
  const isActive = useSelector(state => state.utils.isActive);
  return (

    <div
      className={`absolute top-0 h-full flex flex-col items-center justify-center p-10 w-1/2 bg-white transition-transform duration-300 ${isActive ? 'translate-x-full opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center w-full">
        <h1 className="text-3xl  text-[#41118d] font-semibold mb-4">Create Account</h1>

        <span className="text-sm mb-4">Use your email for registration</span>
        <Input
          type="text"
          placeholder="Enter a Username"
          className="bg-gray-100 rounded-md w-full mb-3 p-2.5 text-sm outline-none"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
        <Input
          type="email"
          placeholder=" Enter you'r Email"
          className="bg-gray-100 rounded-md w-full mb-3 p-2.5 text-sm outline-none"
        />
        {errors.email && (
          <span className='text-red-500'>{errors.email.message}</span>
        )}
        
        <Input
          type="password"
          placeholder="Enter a password"
          className="bg-gray-100 rounded-md w-full mb-3 p-2.5 text-sm outline-none"
        />
        <GetImagePreview
        label="Add your profile picture"
          control={control}
          className="object-cover rounded-full h-20 w-20 outline-none"
          cameraIcon={true}
          cameraSize={20}
        />
        <Button
          type="submit"
          className="bg-indigo-700 text-white uppercase px-6 py-2 rounded-md mt-4 text-sm font-semibold"
          children="Sign Up"
        />
      </form>
    </div>

  );
};

export default Signup;
