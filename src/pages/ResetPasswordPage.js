import React, { useEffect } from "react";
import ResetPassword from "../components/Authentication/ResetPassword/ResetPassword";
import Metadata from "../layout/Metadata/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../actions/authActions";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ResetPasswordPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, success, loading } = useSelector(
    (state) => state.forgotPasswordReducer
  );
  // Form Submit Handler
  const submitHandler = (data) => {
    const { newPassword, confirmPassword } = data;
    const formData = new FormData();
    formData.set("password", newPassword);
    formData.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(params.token, formData));
  };

  useEffect(() => {
    if (success) {
      toast.success("Password updated successfully");
      navigate("/login");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, success, navigate]);

  return (
    <div>
      <Metadata title="Reset Password" />
      <ResetPassword submitHandler={submitHandler} loading={loading} />
    </div>
  );
};

export default ResetPasswordPage;
