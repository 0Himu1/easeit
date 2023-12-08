/* eslint-disable max-len */
import React from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import RemarkComponent from '../../ui/RemarkComponent';
import Dropdown from '../../ui/Dropdown';

export default function MeetingFixed({ closeModal }) {
  const {
    register, handleSubmit, setValue, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    closeModal(); // Close the modal on submit
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-scroll">
      <div className="bg-black bg-opacity-50 backdrop-blur-sm absolute inset-0" onClick={closeModal} />
      <div className="relative px-7 py-10 max-w-[890px] bg-white p-8 rounded-lg z-10">
        <h2 className="text-2xl text-center font-semibold mb-4">Update Meeting Fixed Details</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="flex flex-wrap justify-center items-start gap-2">
            <div className="flex flex-col mt-4" style={{ maxWidth: '400px' }}>
              <div className="mt-4">
                <p className="text-base font-medium">Time</p>
                <input
                  {...register('time', {
                    required: 'Time is required',
                  })}
                  className={`appearance-none block text-xs w-96 mt-1 p-2 border rounded-md focus:outline-none focus:border-indigo-300 ${errors.time ? 'border-red-500' : ''}`}
                  type="time"
                />
                {errors.time && <p className="text-xs text-red-500">{errors.time.message}</p>}
              </div>
              <div className="mt-4">
                <p className="text-base font-medium">Date</p>
                <input
                  {...register('date', {
                    required: 'Date is required',
                  })}
                  className={`appearance-none block text-xs w-96 mt-1 p-2 border rounded-md focus:outline-none focus:border-indigo-300 ${errors.date ? 'border-red-500' : ''}`}
                  type="date"
                />
                {errors.date && <p className="text-xs text-red-500">{errors.date.message}</p>}
              </div>
              <div className="mt-4">
                <p className="text-base font-medium">Visit Charge</p>
                <input
                  {...register('visitCharge', {
                    required: 'Visit Charge is required',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Visit Charge must be a number',
                    },
                  })}
                  className={`appearance-none block text-xs w-96 mt-1 p-2 border rounded-md focus:outline-none focus:border-indigo-300 ${errors.visitCharge ? 'border-red-500' : ''}`}
                  type="text"
                  placeholder="Enter visit charge here..."
                />
                {errors.visitCharge && <p className="text-xs text-red-500">{errors.visitCharge.message}</p>}
              </div>
              <div className="mt-4">
                <p className="text-base font-medium">Address</p>
                <textarea
                  {...register('address', {
                    required: 'Address is required',
                  })}
                  className={`appearance-none block text-xs w-96 mt-1 p-2 border rounded-md focus:outline-none focus:border-indigo-300 ${errors.address ? 'border-red-500' : ''}`}
                  rows="4"
                  placeholder="Enter address here..."
                />
                {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
              </div>
              <div className="mt-4 flex items-center justify-start">
                <input
                  {...register('positive')}
                  className="mt-1"
                  type="checkbox"
                />
                <p className="ml-2 text-base font-medium">Positive</p>
              </div>
            </div>
            <div className="flex flex-col mt-4" style={{ maxWidth: '400px' }}>
              <div className="mt-4">
                <p className="text-base font-medium">Project Location</p>
                <Dropdown defaultOptions={['Inside', 'Outside']} setValue={setValue} fieldName="projectLocation" />
                {errors.projectLocation && <p className="text-xs text-red-500">{errors.projectLocation.message}</p>}
              </div>
              {/* Project Status */}
              <div className="mt-4">
                <p className="text-base font-medium">Project Status</p>
                <Dropdown defaultOptions={['Ready', 'Ongoing', 'Recently']} setValue={setValue} fieldName="projectStatus" />
                {errors.projectStatus && <p className="text-xs text-red-500">{errors.projectStatus.message}</p>}
              </div>
              <div className="mt-4">
                <p className="text-base font-medium">Work Scope</p>
                <Dropdown
                  defaultOptions={[
                    'Kitchen Cabinet',
                    'Cabinet',
                    'False Ceiling',
                    'TV Unit',
                    'Dinner Wagon',
                    'Study Unit',
                    'Full Interior',
                    'Design Consultancy',
                  ]}
                  setValue={setValue}
                  fieldName="workScope"
                  showAddOption
                />
                {errors.workScope && <p className="text-xs text-red-500">{errors.workScope.message}</p>}
              </div>
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
