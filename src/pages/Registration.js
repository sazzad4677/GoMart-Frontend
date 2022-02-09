import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, clearErrors } from "../actions/authActions"
import { toast } from "react-toastify";
import RegistrationForm from "../components/Authentication/RegistrationForm/RegistrationForm";
import Metadata from "../layout/Metadata/Metadata";

const Registration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, error, loading } = useSelector(state => state.authReducers)
  const [userAvatar, setUserAvatar] = useState("")
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
      toast.success("Successfully logged in")
    }
    if (error) {
      toast.error(error)
      dispatch(clearErrors);
    }
  }, [dispatch, isAuthenticated, error, navigate])

  const submitHandler = ({ name, username, email, password, phone, avatar }) => {
    console.log();
    if (avatar.length > 0) {
      if ((avatar[0].size / 1024 / 1024).toFixed(2) > 2) {
        return toast.error("File size is more than 2 MB.")
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setUserAvatar(reader.result)
        }
      }
      reader.readAsDataURL(avatar[0])
    }
    const formData = new FormData()
    formData.set('name', name)
    formData.set('username', username)
    formData.set('password', password)
    formData.set('phone', phone)
    formData.set('avatar', userAvatar)
    formData.set('email', email)

    dispatch(register(formData))
  }
  return (
    <div>
      <Metadata title={"Register"} />
      <RegistrationForm submitHandler={submitHandler} loading={loading} />
    </div>
  );
};

export default Registration;
