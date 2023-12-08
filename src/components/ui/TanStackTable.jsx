import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';

export default function TanStackTable() {
  const columnHelper = createColumnHelper();
  return (
    <div className="p-2 max-w-5xl mx-auto text-gray-800">TanStackTable</div>
  );
}
