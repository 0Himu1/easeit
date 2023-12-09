/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineUpload, AiOutlineBarChart } from 'react-icons/ai';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { CiSearch } from 'react-icons/ci';
import Dropdown from '../components/ui/Dropdown';
import Table from '../components/ui/Table';
import mdata from '../data/dummyData.json';
import { useGetLeadsQuery } from '../features/leads/leadsAPI';
import StatusDropdowns from '../components/StatusDropdowns';
import AddnewLeadButton from '../components/buttons/AddnewLeadButton';

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const { data, isSuccess } = useGetLeadsQuery();
  const columns = [
    { header: 'Lead ID', accessorKey: 'id', footer: 'Lead ID' },
    { header: 'Name', accessorKey: 'name', footer: 'Name' },
    { header: 'Date', accessorKey: 'date', footer: 'Date' },
    { header: 'Phone', accessorKey: 'phone', footer: 'Phone' },
    { header: 'Work Scope', accessorKey: 'work_scope', footer: 'Work Scope' },
    { header: 'Asigned CRE', accessorKey: 'asigned_by', footer: 'Asigned CRE' },
    { header: 'Remark', accessorKey: 'work_scope', footer: 'Remark' },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (info) => <StatusDropdowns status={info.getValue()} />,
      footer: 'Status',
    },
  ];

  useEffect(() => {
    if (data?.length > 0) {
      setLeads(data);
    }
  }, [isSuccess]);

  return (
    <div className="bg-indigo-50 w-full px-3">
      <div className="flex justify-start items-center py-4 space-x-2">
        <AddnewLeadButton />
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

        <div className="table w-full">
          <Table columns={columns} mdata={mdata} />
        </div>
      </div>
    </div>
  );
}
