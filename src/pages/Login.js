import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LoginForm from "../components/Authentication/LoginForm/LoginForm";
import Metadata from "../layout/Metadata/Metadata";
import { login, clearErrors } from "../actions/authActions"
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader/Loader';

const Authentication = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, error, loading } = useSelector(state => state.authReducers)
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
      toast.success("Successfully logged in")
    }
    if (error) {
      toast.error(error)
    }
  }, [dispatch, isAuthenticated, error, navigate])

  const submitHandler = ({ email, password }) => {
    dispatch(login(email, password))
  }
  return (
    <section>
      <Metadata title={"Login"} />
      <LoginForm submitHandler={submitHandler} loading={loading} />
    </section>
  );
};

export default Authentication;
