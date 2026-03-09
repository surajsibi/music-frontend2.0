import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button } from "../index"
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser, userLogin } from '../../store/Slice/authSlice'
import LoginSkeleton from '../../skeleton/LoginSkeleton'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
  const loading = useSelector((state) => state.auth?.loading)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { handleSubmit, register, formState: { errors }, } = useForm();
  const isActive = useSelector(state => state.utils.isActive)

  const submit = async (data) => {
    const isEmail = data.username.includes("@")
    const loginData = isEmail ? { email: data.username, password: data.password } : { username: data.username, password: data.password }
    const response = await dispatch(userLogin(loginData))
    const user = await dispatch(getCurrentUser())
    if (user && response?.payload) {
      const from = location.state?.from?.pathname || "/"
      navigate(from, { replace: true })
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
        <div className="w-full mb-3">
          <Input
            type="text"
            className="bg-gray-100 rounded-md w-full p-2.5 text-sm outline-none border border-transparent focus:border-indigo-300"
            placeholder="Enter your email or username"
            {...register("username", {
              required: "Username or email is required",
            })}
          />
          {errors.username && (
            <p className="text-xs text-rose-500 mt-1 font-medium">{errors.username.message}</p>
          )}
        </div>
        <div className="w-full mb-3">
          <Input
            type="password"
            placeholder="Password"
            className="bg-gray-100 rounded-md w-full p-2.5 text-sm outline-none border border-transparent focus:border-indigo-300"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="text-xs text-rose-500 mt-1 font-medium">{errors.password.message}</p>
          )}
        </div>

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
