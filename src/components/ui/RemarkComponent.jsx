import React, { useRef } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import Textarea from './Textarea';

export default function RemarkComponent({ register, setValue }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Get the selected files
    const files = Array.from(e.target.files);

    // Set the value of the 'fileInput' field using React Hook Form
    setValue('images', files);
  };

  return (
    <>
      <Textarea
        title="Remark"
        fieldName="remark"
        register={register}
        placeholder="Enter remarks here..."
        rows={4}
      />

      <div className="mt-4 w-full">
        <div className="flex items-center w-full">
          <button
            type="button"
            className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300\ rounded-lg flex items-center justify-center"
            onClick={handleButtonClick}
          >
            <AiOutlineUpload className="mr-2" />
            Upload Files
          </button>
          <input
            {...register('images')}
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            multiple // Allow multiple file selection
          />
        </div>
      </div>
    </>
  );
}
