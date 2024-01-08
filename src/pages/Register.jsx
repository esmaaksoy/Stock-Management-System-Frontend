import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'
const Register = () => {
  return (
<div className='h-screen flex items-center bg-gradient-to-r from-[#ABFB60] to-white'>
  <section className=" custom-box-shadow relative flex flex-wrap  lg:items-center w-[50%] mx-auto rounded-[2rem] ">
  <div className="relative w-full sm:h-96  lg:w-1/2">
      <img
        alt="Welcome"
        src={logo}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl text-gray-500">Create your Account</h1>
      </div>
      <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
          <label htmlFor="email" className="sr-only">
            UserName
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="User Name"
            />          
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            First Name
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="First Name"
            />          
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Last Name
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Last Name"
            />          
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
          Do you have an account?
            <NavLink to={"/"} className="underline" href="">
              Sign In
            </NavLink>
          </p>
          <button
            type="submit"
            className="inline-block rounded-lg bg-gray-500  px-5 py-3 text-sm font-medium text-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
    
  </section>
</div>

  )
}

export default Register