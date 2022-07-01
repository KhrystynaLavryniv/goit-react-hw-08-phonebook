import { useSelector } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, navigateTo }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to={navigateTo} />;
}
