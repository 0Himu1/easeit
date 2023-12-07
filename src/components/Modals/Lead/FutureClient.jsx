/* eslint-disable max-len */
import React from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import RemarkComponent from '../../ui/RemarkComponent';

export default function FutureClient({ closeModal }) {
  const {
    register, handleSubmit, setValue, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    closeModal(); // Close the modal on submit
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 backdrop-blur-sm absolute inset-0" onClick={closeModal} />
      <div className="relative px-7 py-10 max-w-[890px] bg-white p-8 rounded-lg z-10">
        <h2 className="text-2xl text-center font-semibold mb-4">Update Future Client Details</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-start gap-2 ">
            <div className="">
              <div className="mt-4">
                <p className="text-base font-medium">Time</p>
                <input
                  {...register('time', {
                    required: 'Time is required',
                  })}
                  className={`appearance-none block text-xs w-96 mt-1 p-2 border rounded-md focus:outline-none focus:border-indigo-300 ${errors.phone ? 'border-red-500' : ''}`}
                  type="time"
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div className="mt-4">
                <p className="text-base font-medium">Date</p>
                <input
                  {...register('date', {
                    required: 'Date is required',
                  })}
                  className={`appearance-none block text-xs w-96 mt-1 p-2 border rounded-md focus:outline-none focus:border-indigo-300 ${errors.phone ? 'border-red-500' : ''}`}
                  type="date"
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>
            </div>
            <div className="">
              <RemarkComponent register={register} setValue={setValue} />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button type="submit" className="mt-4 px-5 py-2 bg-sky-700 hover:bg-sky-800 text-lg text-white rounded-lg">
              Submit
            </button>
          </div>

        </form>
        <button type="close" onClick={closeModal} className=" absolute top-3 right-3 text-xl text-sky-700 transition-all rounded">
          <IoClose />
        </button>
      </div>
    </div>
  );
}
