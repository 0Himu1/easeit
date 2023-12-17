/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export default function Dropdown({
  defaultOptions, fieldName, setValue, showAddOption,
}) {
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValueInternal] = useState(null);
  const [newOption, setNewOption] = useState('');

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setOptions(defaultOptions);
  }, [defaultOptions]);

  const optionClicked = (selectedValue) => {
    setValue(fieldName, selectedValue);
    setValueInternal(selectedValue);
    setIsOpen(false);
  };

  const addOption = () => {
    if (newOption && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setValue(fieldName, newOption);
      setNewOption('');
      setValueInternal(newOption);
      setIsOpen(false);
    }
  };

  return (
    <div className="inline-flex w-full border rounded-md border-indigo-100 text-sm">
      <div className="relative inline-flex min-w-full rounded-md bg-white">
        <div onClick={toggling} className="w-[100%] rounded-l-md px-4 py-2">
          {value || 'Select Options'}
        </div>
        <div onClick={toggling} className="relative">
          <button type="button" className="pr-2 hover:text-gray-700 inline-flex h-full items-center justify-center rounded-r-md border border-gray-50 text-gray-600 hover:bg-gray-50">
            {isOpen ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-6 right-0 z-10 mt-4 min-w-full origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
            <div>
              {options.map((o) => (
                <div
                  key={`${o}`}
                  onClick={() => optionClicked(o)}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50"
                >
                  {o}
                </div>
              ))}
            </div>
            {showAddOption && (
              <div className="px-4 py-2 border-t">
                <input
                  type="text"
                  placeholder="Add new option"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  className="w-full p-1 border rounded-md"
                />
                <button
                  onClick={addOption}
                  className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md"
                >
                  Add Option
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
