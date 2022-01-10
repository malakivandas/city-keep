import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthOutlet = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AuthOutlet;
