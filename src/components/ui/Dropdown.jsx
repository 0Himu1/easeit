/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export default function Dropdown() {
  const opt = ['HTML', 'CSS', 'React'];
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(null);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const optionClicked = (selectedValue) => {
    setValue(selectedValue);
    setIsOpen(false);
    console.log(selectedValue);
  };

  return (
    <div className="inline-flex w-full border rounded-md border-indigo-100 text-sm">
      <div className="relative inline-flex min-w-full rounded-md bg-white ">
        <div onClick={toggling} className="w-[100%] rounded-l-md px-4 py-2">{value || 'Select-Technology'}</div>
        <div onClick={toggling} className="relative">
          <button className="pr-2 hover:text-gray-700 inline-flex h-full items-center justify-center rounded-r-md border border-gray-50 text-gray-600 hover:bg-gray-50">
            {isOpen ? (<BsChevronUp />) : (<BsChevronDown />)}
          </button>
        </div>
        {isOpen && (
        <div className="absolute top-6 right-0 z-10 mt-4 min-w-full origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
          <div>
            {opt.map((o) => (
              <div key={o} onClick={() => optionClicked(o)} className="block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50">
                {o}
              </div>
            ))}
          </div>
        </div>
        )}

      </div>
    </div>
  );
}
