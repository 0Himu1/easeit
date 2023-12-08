import React from 'react';

function Input({
  className,
  register,
  errors = {},
  title,
  fieldName,
  validation = {},
  placeholder,
  type = 'text',
}) {
  const error = errors[fieldName];

  return (
    <div className={`mt-4 ${className} ${type === 'checkbox' ? 'flex' : ''}`}>
      {type !== 'checkbox' && <p className="text-base font-medium">{title}</p>}
      <input
        {...register(fieldName, validation)}
        className={`block text-xs ${type === 'checkbox' ? 'mr-2' : 'w-full'} mt-1 p-2 border rounded-md focus:outline-none focus:border-indigo-300 ${
          error ? 'border-red-500' : ''
        }`}
        type={type}
        placeholder={placeholder}
      />
      {type === 'checkbox' && <p className="text-base font-medium">{title}</p>}
      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
}

export default Input;
