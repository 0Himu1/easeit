/* eslint-disable no-tabs */
/* eslint-disable max-len */
import React from 'react';
import { AiOutlinePlus, AiOutlineUpload, AiOutlineBarChart } from 'react-icons/ai';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { CiSearch } from 'react-icons/ci';
import Dropdown from '../components/ui/Dropdown';
import Table from '../components/ui/Table';
import mdata from '../data/dummyData.json';

export default function Leads() {
  const columns = [
    { header: 'Lead ID', accessorKey: 'lead_id', footer: 'Lead ID' },
    {
      header: 'Name',
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
      footer: 'Name',
    },
    { header: 'Age', accessorKey: 'age', footer: 'Age' },
    { header: 'Email', accessorKey: 'email', footer: 'Email' },
    { header: 'Country', accessorKey: 'country', footer: 'Country' },
    { header: 'Postal Code', accessorKey: 'postal_code', footer: 'Postal Code' },
    { header: 'Color', accessorKey: 'favorite_color', footer: 'Color' },
    { header: 'Last Purchase Date', accessorKey: 'last_purchase_date', footer: 'Last Purchase Date' },
  ];

  return (
    <div className="bg-indigo-50 w-full px-3">
      <div className="flex justify-start items-center py-4 space-x-2">
        <button className="flex items-center px-3 py-1.5 bg-indigo-600 text-white font-medium text-base rounded-md">
          <AiOutlinePlus />
          New Leads
        </button>
        <button className="flex items-center px-3 py-1.5 bg-indigo-600 text-white font-medium text-base rounded-md">
          <AiOutlineUpload />
          New Leads
        </button>
        <button className="flex items-center px-3 py-1.5 bg-white font-medium text-base rounded-md border border-indigo-300">
          <AiOutlineBarChart />
        </button>
        <button className="flex items-center px-3 py-1.5 bg-white font-medium text-base rounded-md border border-indigo-300">
          <PiDotsSixVerticalBold />
        </button>
      </div>
      <div className="p-6 bg-white rounded-md w-full border border-indigo-300 shadow-sm space-x-2">
        <p className=" mb-2">Filter By</p>
        <div className="space-y-2 lg:flex lg:space-y-0 lg:space-x-2 justify-between items-center">
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>

        <hr className="border-b my-2 border-indigo-200" />

        <div className="flex flex-wrap justify-between items-center space-x-2">
          <div className="dropdown">
            <Dropdown />
          </div>
          <div className="flex items-center text-sm border rounded-md border-indigo-100">
            <button className="py-2 px-3 border-r">Export</button>
            <button className="py-2 px-3 border-r">Bulk action</button>
            <button className="py-2 px-3">
              <HiOutlineRefresh />
            </button>
          </div>
          <div className="flex justify-between items-center  text-sm border rounded-md border-indigo-100">
            <div className="px-3  border-r">
              <CiSearch className="text-xl" />
            </div>
            <input type="text" className="outline-none py-2 px-3" placeholder="search" />
          </div>
        </div>

        <div className="table">
          <Table columns={columns} mdata={mdata} />
        </div>
      </div>
    </div>
  );
}
