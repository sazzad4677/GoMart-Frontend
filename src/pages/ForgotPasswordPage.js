import React, { useEffect } from "react";
import ForgotPassword from "../components/Authentication/ForgotPassword/ForgotPassword";
import Metadata from "../layout/Metadata/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, clearErrors } from "../actions/authActions";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector(
    (state) => state.forgotPasswordReducer
  );
  // Form Submit Handler
  const submitHandler = (data) => {
    const { email, username } = data
    const formData = new FormData();
    formData.set("email", email);
    formData.set("username", username);
    dispatch(forgotPassword(formData));
  };

  useEffect(() => {
    // Update Profile or About
    if (message) {
      
      toast.success(message);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, message]);
  
  return (
    <div>
      <Metadata title="Forgot Password" />
      <ForgotPassword submitHandler={submitHandler} loading={loading} />
    </div>
  );
};

export default ForgotPasswordPage;
