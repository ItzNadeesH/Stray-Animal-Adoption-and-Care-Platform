import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../utils/Loader';

const PrivateRoute = ({ children }) => {
  const userAuth = useSelector((state) => state.userAuth);
  const { isAuthenticated, isLoading } = userAuth;

  if (isLoading) {
    return (
      <div className="mt-[-80px]">
        <Loader />
      </div>
    );
  }

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};

export default PrivateRoute;
