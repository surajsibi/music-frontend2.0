import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button } from "../index"
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser, userLogin } from '../../store/Slice/authSlice'
import LoginSkeleton from '../../skeleton/LoginSkeleton'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const loading = useSelector((state) => { state.auth?.loading })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const { handleSubmit, register, formState: { errors }, } = useForm();
  const isActive = useSelector(state => state.utils.isActive)
  const state = useSelector((state) =>  state.auth?.userData )
  console.log(state,"this is state");
  const submit = async (data) => {
    const isEmail = data.username.includes("@")
    const loginData = isEmail ? { email: data.username, password: data.password } : { username: data.username, password: data.password }
    const response = await dispatch(userLogin(loginData))
    const user = await dispatch(getCurrentUser())
    if (user && response?.payload) {
      navigate("/")
    }
  };
  if (loading) {
    return <LoginSkeleton />
  }


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
          {...register("username", {
            required: "Username/email is required"
          })}
        />
        {errors.email && (
          <span className='text-red-500'>{errors.email.message}</span>
        )}
        {/* {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )} */}
        <Input
          type="password"
          placeholder="Password"
          className="bg-gray-100 rounded-md w-full mb-3 p-2.5 text-sm outline-none"
          {...register("password", {
            required: "password is required"
          })}
        />
        {errors.password && (
          <span className='text-red-500'>{errors.password.message}</span>
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
