import {
  Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import useAuth from './hooks/useAuth';
import AdminLayout from './pages/layout/AdminLayout';
import Login from './pages/authentication/Login';
import LoggedOutRoute from './components/PrivetRouting/LoggedOutRoute';
import LoggedInRoute from './components/PrivetRouting/LoggedInRoute';
import RootLayout from './pages/layout/RootLayout';
import Dashboard from './pages/Dashboard';
import Announcements from './pages/Announcements';
import Sales from './pages/Sales';
import Leads from './pages/Leads';
import Settings from './pages/Settings';
import Help from './pages/Help';
import LoginLayout from './pages/layout/LoginLayout';

export default function App() {
  const { auth } = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>

        {/* Logget out routes */}
        <Route path="/*" element={<LoggedOutRoute />}>
          <Route path="authentication" element={<LoginLayout />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Route>

        {/* User Routes */}
        <Route path="/*" element={<LoggedInRoute />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="announsment" element={<Announcements />} />
            <Route path="sales" element={<Sales />} />
            <Route path="leads" element={<Leads />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Route>
      </Route>,
    ),
  );

  return (
    <RouterProvider router={router} />
  );
}
