/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineUpload, AiOutlineBarChart } from 'react-icons/ai';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { CiSearch } from 'react-icons/ci';
import { createColumnHelper } from '@tanstack/react-table';
import Dropdown from '../components/ui/Dropdown';
import Table from '../components/ui/Table';
import AddnewLeadButton from '../components/buttons/AddnewLeadButton';
import { useGetLeadsQuery } from '../features/leads/leadsAPI';
import NameComponent from '../components/table components/NameComponenet';
import CommentComponent from '../components/table components/Comment Component';
import StatusDropdowns from '../components/table components/StatusDropdowns';
import DateToolTip from '../components/ui/DateToolTip';
import Source from '../components/table components/Source';
import WorkScope from '../components/table components/WorkScope';

export default function Leads() {
  const columnHelper = createColumnHelper();
  const { data: leads } = useGetLeadsQuery();

  const columns = [
    columnHelper.accessor('', {
      id: 'S.No',
      cell: (info) => <p className="text-sm text-blue-600">{info.row.index + 1}</p>,
      header: 'S.No',
    }),
    columnHelper.accessor('createdAt', {
      cell: (info) => <DateToolTip dateString={info.row.original?.createdAt} />,
      header: 'Created',
    }),
    columnHelper.accessor('CID', {
      cell: (info) => <span>{info.row.original?.CID}</span>,
      header: 'CID',
    }),
    columnHelper.accessor('name', {
      cell: (info) => <NameComponent _id={info.row.original?._id} name={info.row.original?.name} />,
      header: 'Name',
    }),

    columnHelper.accessor('phone', {
      cell: (info) => <span className="text-sm text-gray-600">{info.row.original?.phone}</span>,
      header: 'Phone',
    }),
    columnHelper.accessor('source', {
      cell: (info) => <Source source={info.row.original?.source} />,
      header: 'Source',
    }),
    columnHelper.accessor('workScope', {
      cell: (info) => <WorkScope scopes={[info.row.original?.workScope]} />,
      header: 'Work Scope',
    }),
    columnHelper.accessor('creName', {
      cell: (info) => <span>{info.row.original?.creName}</span>,
      header: 'CRE Name',
    }),
    columnHelper.accessor('comment', {
      cell: (info) => <CommentComponent commentData={info.row.original?.comment[0]} />,
      header: 'Remark',
    }),
    columnHelper.accessor('status', {
      cell: (info) => <StatusDropdowns _id={info.row.original?._id} status={info.row.original?.status} />,
      header: 'Status',
    }),
  ];

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
          {leads?.length > 0 && (
          <Table columns={columns} data={leads} />
          )}
        </div>
      </div>
    </div>
  );
}
