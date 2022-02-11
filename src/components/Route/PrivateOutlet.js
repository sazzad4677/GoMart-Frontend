import React from 'react';
import {Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateOutlet = () => {
    const { isAuthenticated, loading, user } = useSelector(
        (state) => state.authReducers
      );
      return (
        <>
          {loading === false &&  isAuthenticated ? <Outlet/> : <Navigate to="/login" />}
        </>
      );
};

export default PrivateOutlet;