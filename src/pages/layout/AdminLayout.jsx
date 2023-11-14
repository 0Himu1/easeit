import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
}
