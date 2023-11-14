import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function LoggedOutRoute() {
  const { pathname } = useLocation();
  const auth = useAuth();

  return !auth ? <Outlet /> : <Navigate to="/admin/dashboard" />;
}
