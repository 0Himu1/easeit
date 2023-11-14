/* eslint-disable import/no-extraneous-dependencies */
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { useMemo, useState } from 'react';

/*
  {
      "id": 1,
      "first_name": "Rey",
      "last_name": "Macvey",
      "email": "rmacvey0@fc2.com",
      "gender": "Female",
      "ip_address": "17.107.8.45"
    }
  */

export default function Table({ mdata, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');

  const data = useMemo(() => mdata, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="w-full">
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <table className="border rounded-lg w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-left">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className=""
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div className="whitespace-nowrap text-left border-r text-sm py-2.5 px-4 font-medium text-gray-600">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {
                          { asc: '⬆️', desc: '⬇️' }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="whitespace-nowrap text-left border-r text-sm py-2.5 px-4 font-medium text-gray-800">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="whitespace-nowrap text-left border-r text-sm py-2.5 px-4 font-medium text-gray-600" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="flex items-center mt-2 justify-end">
        <div className="flex items-center text-sm border rounded-md border-indigo-100">
          <button
            className="flex items-center px-3 py-1.5 border-r font-medium"
            onClick={() => table.setPageIndex(0)}
          >
            <FiChevronsLeft className="mr-2" />
            First Page

          </button>
          <button
            className="flex items-center px-3 py-1.5 border-r font-medium"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Previous Page
          </button>
          <button
            className="flex items-center px-3 py-1.5 border-r font-medium"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next Page
          </button>
          <button
            className="flex items-center px-3 py-1.5 border-r font-medium"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            Last Page
            <FiChevronsRight className="ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
}
