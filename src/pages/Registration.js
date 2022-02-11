import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, clearErrors } from "../actions/authActions";
import { toast } from "react-toastify";
import RegistrationForm from "../components/Authentication/RegistrationForm/RegistrationForm";
import Metadata from "../layout/Metadata/Metadata";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.authReducers
  );
  const [userAvatar, setUserAvatar] = useState("");
  const [userAvatarPreview, setUserAvatarPreview] = useState("");
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      toast.success("Successfully logged in");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  const submitHandler = ({ name, username, email, password, phone }) => {
    const type = userAvatar.split(";")[0].split("/")[1];
    if (type !== "jpg" && type !== "png" && type !== "jpeg") {
      return toast.error("Only jpg, png and jpeg files are allowed");
    }
    const formData = new FormData();
    formData.set("name", name);
    formData.set("username", username);
    formData.set("password", password);
    formData.set("phone", phone);
    formData.set("avatar", userAvatar);
    formData.set("email", email);

    dispatch(register(formData));
  };
  return (
    <div>
      <Metadata title={"Register"} />
      <RegistrationForm
        submitHandler={submitHandler}
        loading={loading}
        userAvatarPreview={userAvatarPreview}
        userAvatar={userAvatar}
        setUserAvatar={setUserAvatar}
        setUserAvatarPreview={setUserAvatarPreview}
      />
    </div>
  );
};

export default Registration;
