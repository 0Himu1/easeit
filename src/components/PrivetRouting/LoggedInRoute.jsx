import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function LoggedInRoute() {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/authentication" replace />;
}
