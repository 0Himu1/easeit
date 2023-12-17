/* eslint-disable max-len */
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
import { useState } from 'react';

export default function Table({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');

  // const data = useMemo(() => mdata, [mdata]);

  // console.log(data);

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
      {/* Table Properties */}
      <table className="border rounded-lg w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-left">
              {headerGroup.headers.map((header) => (
                <th
                  className="whitespace-nowrap text-left border-r border-b text-sm py-2.5 px-4 font-medium text-gray-600"
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {
                        { asc: '⬆️', desc: '⬇️' }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </>
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
        {/* <tfoot>
          {table.getFooterGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                className="whitespace-nowrap text-left border-r text-sm py-2.5 px-4 font-medium text-gray-600" key={header.id}
                >
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
        </tfoot> */}
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
