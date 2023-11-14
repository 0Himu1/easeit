/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onsubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="flex flex-col justify-center items-center py-14">
      <h1 className="text-2xl font-medium mb-4">Please Login</h1>
      <div className="w-[480px] bg-white p-10 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-3 ">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
            <input
              type="text"
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              className="text-base w-full px-3 py-1 outline-none border border-gray-300 rounded-md focus:border-indigo-600 focus:border-2"
            />
            {errors.email && errors.email.message}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              type="password"
              {...register('password')}
              className="text-base w-full px-3 py-1 outline-none border border-gray-300 rounded-md focus:border-indigo-600 focus:border-2"
            />
          </div>
          <div className="flex">
            <input
              type="checkbox"
              {...register('remember')}
              className="indeterminate:bg-indigo-300 mr-2"
            />
            <label htmlFor="email" className="text-sm font-medium">Remember Me</label>
          </div>
          <button
            type="submit"
            className="py-1.5 w-full bg-indigo-600 text-white rounded-md text-base "
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
