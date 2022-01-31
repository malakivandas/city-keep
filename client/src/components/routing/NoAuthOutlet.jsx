import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const NoAuthOutlet = ({ isAuthenticated }) => {
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/reports" />
  );
};

export default NoAuthOutlet;
