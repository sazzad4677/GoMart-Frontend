import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoginForm from "../components/Authentication/LoginForm/LoginForm";
import Metadata from "../layout/Metadata/Metadata";
import { login, clearErrors } from "../actions/authActions";
import { useLocation, useNavigate } from "react-router-dom";
const Authentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [remember, setRemember] = useState(false);
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.authReducers
  );
  useEffect(() => {
    if (isAuthenticated && !location.state?.from) {
      navigate("/");
      toast.success("Successfully logged in");
    }
    if (isAuthenticated && location.state?.from) {
      navigate(location.state.from);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate, location.state?.from]);

  const submitHandler = ({ email, password }) => {
    dispatch(login(email, password, remember));
  };
  return (
    <section>
      <Metadata title={"Login"} />
      <LoginForm
        submitHandler={submitHandler}
        loading={loading}
        remember={remember}
        setRemember={setRemember}
      />
    </section>
  );
};

export default Authentication;
