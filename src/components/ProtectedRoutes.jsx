import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('adminToken');  // Get token from localStorage

  if (!token) {
    // If no token is found, redirect to the login page
    return <Navigate to="/admin/login" />;
  }

  // If token exists, render the protected component
  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
