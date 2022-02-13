import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearErrors, loadUser, updateProfile } from "../actions/authActions";
import RecentOrder from "../components/Orders/RecentOrder";
import About from "../components/Profile/About";
import UpdateAbout from "../components/Profile/UpdateAbout";
import UpdateProfile from "../components/Profile/UpdateProfile";
import Footer from "../layout/Footer/Footer";
import Loader from "../layout/Loader/Loader";
import Metadata from "../layout/Metadata/Metadata";
import Nav from "../layout/Nav/Nav";
import { UPDATE_PROFILE_RESET } from "../constants/authConstants";

const UpdateProfilePage = () => {
  const { user } = useSelector((state) => state.authReducers);
  const { error, isUpdated, loading } = useSelector(
    (state) => state.userReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userAvatar, setUserAvatar] = useState("");
  const [userAvatarPreview, setUserAvatarPreview] = useState("");
  useEffect(() => {
    if (isUpdated) {
      toast.success("User updated successfully");
      dispatch(loadUser());
      navigate("/profile");
      dispatch({ type: UPDATE_PROFILE_RESET });
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, user, isUpdated, navigate]);

  const submitHandler = ({
    name,
    gender,
    shippingAddress,
    billingAddress,
    birthDay,
    username,
    email,
    password,
    phone,
  }) => {
    // const type = userAvatar.split(";")[0].split("/")[1];
    // if (type !== "jpg" && type !== "png" && type !== "jpeg") {
    //   return toast.error("Only jpg, png and jpeg files are allowed");
    // }
    const formData = new FormData();
    formData.set("name", name);
    formData.set("username", username);
    formData.set("password", password);
    formData.set("phone", phone);
    formData.set("avatar", userAvatar);
    formData.set("email", email);

    dispatch(updateProfile(formData));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Metadata title={`${user && user.username} Update `} />
          <Nav />
          <div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
            <div class="container mx-auto my-5 p-5">
              <div class="no-wrap md:-mx-2 md:flex ">
                <UpdateProfile user={user} />
                <div class="mx-2 h-64 w-full md:w-9/12">
                  <UpdateAbout user={user} submitHandler={submitHandler} />
                  <RecentOrder />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default UpdateProfilePage;
