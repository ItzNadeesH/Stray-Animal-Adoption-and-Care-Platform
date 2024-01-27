import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dog from '../../assets/doggy-walk-cycle.gif';

const PrivateRoute = ({ children }) => {
  const userAuth = useSelector((state) => state.userAuth);
  const { isAuthenticated, isLoading } = userAuth;

  if (isLoading) {
    return (
      <div className="w-[400px] mx-auto">
        <img src={dog} alt="dog" />
        <h1 className="text-center">Loading...</h1>
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
