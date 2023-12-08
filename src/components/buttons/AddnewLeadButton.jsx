import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import RemarkComponent from '../ui/RemarkComponent';
import Dropdown from '../ui/Dropdown';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

export default function AddnewLeadButton() {
  const [modal, setModal] = useState(false);
  const {
    register, handleSubmit, setValue, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setModal(false); // Close the modal on submit
  };

  return (
    <>
      <button onClick={() => setModal(true)} className="flex items-center px-3 py-1.5 bg-indigo-600 text-white font-medium text-base rounded-md">
        <AiOutlinePlus />
        New Leads
      </button>
      {modal && (
      <div className="fixed inset-0 p-2 md:p-5 lg:p-20 flex items-start justify-center z-50 overflow-scroll">
        <div className=" bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0" onClick={() => setModal(false)} />
        <div className="relative px-4 py-5 md:px-6 md:py-8 lg:px-6 lg:py-10 w-full bg-white p-3 rounded-lg z-10">
          <h2 className="text-2xl text-center font-semibold mb-4">Add New Lead</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row w-full gap-2 mb-2">
              <div className="w-full">
                <p className="text-base mb-1 font-medium">Status</p>
                <Dropdown
                  defaultOptions={[
                    'unread',
                    'No Response',
                    'Message Rescheduled',
                    'Need Support',
                    'Number Collected',
                    'Call Reschedule',
                    'Future Client',
                    'Meeting Fixed',
                    'Meeting Reschedule',
                    'Cancel Meeting',
                  ]}
                  setValue={setValue}
                  fieldName="status"
                />
              </div>
              <div className="w-full">
                <p className="text-base mb-1 font-medium">Source</p>
                <Dropdown
                  defaultOptions={[
                    'Facebook',
                    'WhatsApp',
                    'Web',
                    'By Phone',
                  ]}
                  setValue={setValue}
                  fieldName="source"
                />
              </div>
              <div className="w-full">
                <p className="text-base mb-1 font-medium">Assigned</p>
                <Dropdown
                  defaultOptions={[
                    'Mother Teresa',
                    'Joynob',
                    'Tanjin',
                  ]}
                  setValue={setValue}
                  fieldName="assignedCRE"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:flex-wrap w-full gap-2 lg:gap-5 mb-2">
              <div className="lg:flex-1">
                {/* name */}
                <Input
                  className=""
                  title="Name"
                  fieldName="name"
                  register={register}
                  validation={{
                    required: 'Name is required',
                  }}
                  placeholder="Enter Name here..."
                  errors={errors}
                />
                {/* Phone */}
                <Input
                  title="Phone"
                  fieldName="phone"
                  register={register}
                  validation={{
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: 'Invalid phone number format',
                    },
                  }}
                  type="tel"
                  placeholder="Enter customer's phone number here..."
                  errors={errors}
                />
                {/* Address  */}
                <Textarea
                  title="Address"
                  fieldName="address"
                  register={register}
                  placeholder="Enter address here..."
                  rows={4}
                />
                {/* Visit charge  */}
                <Input
                  title="Visit Charge"
                  fieldName="visitCharge"
                  register={register}
                  type="text"
                  placeholder="Enter visit charge here..."
                  errors={errors}
                />
                {/* Positive  */}
                <Input
                  title="Positive"
                  fieldName="positive"
                  register={register}
                  type="checkbox"
                />
              </div>
              <div className="lg:flex-1">
                {/* Project Details  */}
                <div className="md:flex md:gap-2 md:justify-between">
                  {/* Project Location  */}
                  <div className="mt-4 w-full">
                    <p className="text-base font-medium">Project Location</p>
                    <Dropdown defaultOptions={['Inside', 'Outside']} setValue={setValue} fieldName="projectLocation" />
                    {errors.projectLocation && <p className="text-xs text-red-500">{errors.projectLocation.message}</p>}
                  </div>
                  {/* Project Status  */}
                  <div className="mt-4 w-full">
                    <p className="text-base font-medium">Project Status</p>
                    <Dropdown defaultOptions={['Ready', 'Ongoing', 'Recently']} setValue={setValue} fieldName="projectStatus" />
                    {errors.projectStatus && <p className="text-xs text-red-500">{errors.projectStatus.message}</p>}
                  </div>
                  {/* Work Scope  */}
                  <div className="mt-4 w-full">
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
                </div>

                {/* Meeting Time  */}
                <Input
                  title="Time"
                  fieldName="time"
                  register={register}
                  type="time"
                />
                {/* Meeting Date  */}
                <Input
                  title="Date"
                  fieldName="date"
                  register={register}
                  type="date"
                />

                {/* Remark  */}
                <RemarkComponent register={register} setValue={setValue} />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button type="submit" className="mt-4 px-5 py-2 bg-sky-700 hover:bg-sky-800 text-lg text-white rounded-lg">
                Submit
              </button>
            </div>

          </form>
          <button type="close" onClick={() => setModal(false)} className=" absolute top-3 right-3 text-xl text-sky-700 transition-all rounded">
            <IoClose />
          </button>
        </div>
      </div>
      )}

    </>
  );
}
