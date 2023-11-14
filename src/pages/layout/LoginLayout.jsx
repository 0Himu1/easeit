import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../images/Solution Provider.jpg';

export default function LoginLayout() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-indigo-50">
      <div className="px-20 py-8 bg-white">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" className="w-32" />
          <div className="flex">
            <button type="button" className="text-sm">Knowledge Based</button>
            <button type="button" className="bg-indigo-600 text-white text-sm font-medium rounded-md px-4 py-2 border-none ml-2" onClick={() => navigate('login', { replace: true })}>Login</button>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Outlet />
      </div>
    </div>
  );
}
