import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function SettingsLayout() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start p-10 bg-indigo-50 w-full">
      <div className="lg:w-[468px] w-full p-4">
        <h1 className="text-lg font-semibold">Settings</h1>
        <ul className="w-full bg-white text-sm rounded-lg shadow-md border mt-2">
          <li className="py-2.5 px-3.5 font-medium border-b"><Link className="" to="general"> General</Link></li>
          <li className="py-2.5 px-3.5 font-medium border-b"><Link className="" to="account"> Accounts</Link></li>
          <li className="py-2.5 px-3.5 font-medium border-b"><Link className="" to="facebook_lead"> Leads</Link></li>
        </ul>
      </div>

      <div className="w-full p-4">
        <Outlet />
      </div>
    </div>
  );
}
