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
  const [file, setFile ] = useState(null) 
  const [userAvatar, setUserAvatar] = useState(""); // set user avatar
  const [userAvatarPreview, setUserAvatarPreview] = useState(""); // show the preview of avatar
  const [place, setPlace] = useState(""); // area

  // set the avatar and preview the user avatar
  const profileImageHandler = (avatar) => {
    setFile(Object.values(avatar.target.files))
    if (avatar.target.files.length > 0) {
      if (
        avatar.target.files[0].type !== "image/jpg" &&
        avatar.target.files[0].type !== "image/jpeg" &&
        avatar.target.files[0].type !== "image/png"
      ) {
        return toast.error("Only jpg, png and jpeg files are allowed");
      }
      if ((avatar.target.files[0].size / 1024 / 1024).toFixed(2) > 2) {
        return toast.error("File size is more than 2 MB.");
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setUserAvatar(reader.result);
          setUserAvatarPreview(reader.result);
        }
      };
      reader.onerror = () => {
        return toast.error("Failed to read file!" + reader.error);
      };
      reader.readAsDataURL(avatar.target.files[0]);
    }
  };

  // submit the form
  const submitHandler = ({ name, username, email, password, phone }) => {
    const type = userAvatar.split(";")[0].split("/")[1];
    if (userAvatar && type !== "jpg" && type !== "png" && type !== "jpeg") {
      return toast.error("Only jpg, png and jpeg files are allowed");
    }
    const formData = new FormData();
    formData.set("name", name);
    formData.set("username", username);
    formData.set("password", password);
    formData.set("phone", phone);
    formData.set("areaName", place.formatted_address);
    formData.set("placeId", place.place_id);
    formData.set("avatar", userAvatar);
    formData.set("email", email);

    dispatch(register(formData));
  };

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

  return (
    <div>
      <Metadata title={"Register"} />
      <RegistrationForm
        submitHandler={submitHandler}
        loading={loading}
        userAvatarPreview={userAvatarPreview}
        profileImageHandler={profileImageHandler}
        file={file}
        setFile={setFile}
        setPlace={setPlace}
      />
    </div>
  );
};

export default Registration;
