import React from 'react';
import {Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateOutlet = () => {
  const location = useLocation();
    const { isAuthenticated, loading, user } = useSelector(
        (state) => state.authReducers
      );
      return (
        <>
          {(loading === false &&  isAuthenticated) ? <Outlet/> : <Navigate to="/login" replace={true} state={{from: location}}/>}
        </>
      );
};

export default PrivateOutlet;