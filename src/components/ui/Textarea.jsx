import React from 'react';

function Textarea({
  register,
  errors = {},
  title,
  fieldName,
  validation = {},
  placeholder,
  rows = 4,
}) {
  const error = errors[fieldName];

  return (
    <div className="mt-4">
      <p className="text-base font-medium">{title}</p>
      <textarea
        {...register(fieldName, validation)}
        className={`appearance-none block text-xs w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-indigo-300 ${
          error ? 'border-red-500' : ''
        }`}
        rows={rows}
        placeholder={placeholder}
      />
      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
}

export default Textarea;
