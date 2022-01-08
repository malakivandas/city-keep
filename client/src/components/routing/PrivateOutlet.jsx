import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateOutlet = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
