import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button } from "../index"
import { useSelector } from 'react-redux'

const Login = () => {
  const { handleSubmit, register, formState: { errors }, } = useForm();
  const isActive = useSelector(state=>state.utils.isActive)
  const submit = data => console.log(data);


  return (
    <div
      className={`absolute top-0 h-full flex flex-col items-center justify-center p-10 w-1/2 bg-white transition-transform duration-300 ${isActive ? 'opacity-0 z-0' : 'translate-x-0 opacity-100 z-10'}`}
    >
      <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center w-full">
        <h1 className="text-3xl text-[#41118d] font-semibold mb-4">Login</h1>

        <span className="text-sm mb-4">Use your email and password</span>
        <Input
          type="text"
          className="bg-gray-100 rounded-md w-full mb-3 p-2.5 text-sm outline-none"
          placeholder="Enter your email or username"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
        <Input
          type="password"
          placeholder="Password"
          className="bg-gray-100 rounded-md w-full mb-3 p-2.5 text-sm outline-none"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <Button
        type='submit'
          className="bg-indigo-700 text-white uppercase px-6 py-2 rounded-md mt-4 text-sm font-semibold"
          children="Login"

        />
      </form>
    </div>

  )
}

export default Login
