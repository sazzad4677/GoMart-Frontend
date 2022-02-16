import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { clearErrors, loadUser, updateProfile } from "../actions/authActions";
import UpdateAbout from "../components/UpdateProfile/UpdateAbout";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Footer from "../layout/Footer/Footer";
import Loader from "../layout/Loader/Loader";
import Metadata from "../layout/Metadata/Metadata";
import Nav from "../layout/Nav/Nav";
import { UPDATE_PROFILE_RESET } from "../constants/authConstants";
import UpdatePassword from "../components/UpdateProfile/UpdatePassword";
import { useForm } from "react-hook-form";

const UpdateProfilePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducers);
  const { error, isUpdated, loading } = useSelector(
    (state) => state.userReducer
  );
  const [userAvatar, setUserAvatar] = useState(""); // set avatar
  const [userAvatarPreview, setUserAvatarPreview] = useState(""); // avatar preview
  const [birthDate, setBirthDate] = useState(() => birthDateSetter()); // date picker
  const [birthDay, setBirthDay] = useState(""); // send to backend

  // React hook form
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  // If the birthday is already stored in the database, the function will return it; otherwise, a new date will be generated.
  function birthDateSetter() {
    if (user.birthDay) {
      const userBirthday = user.birthDay;
      const split = userBirthday.split("/");
      const year = split[2];
      const month = split[1] - 1;
      const day = split[0];
      return new Date(year, month, day);
    }
    return new Date();
  }
  // Handle date picker on change
  const birthDateOnChange = (date) => {
    const formattedDate =
      date && `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setBirthDay(!date ? "" : formattedDate);
    setBirthDate(date);
  };
  // handle update image preview and set the image
  const handleProfileImageChange = (avatar) => {
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

  // submit the data
  const submitHandler = ({
    name,
    gender,
    shippingAddress,
    billingAddress,
    username,
    email,
    password,
    phone,
  }) => {
    if (userAvatar) {
      const type = userAvatar.split(";")[0].split("/")[1];
      if (type !== "jpg" && type !== "png" && type !== "jpeg") {
        return toast.error("Only jpg, png and jpeg files are allowed");
      }
    }
    const formData = new FormData();
    formData.set("name", name);
    formData.set("username", username);
    formData.set("password", password);
    formData.set("phone", phone);
    formData.set("avatar", userAvatar);
    formData.set("email", email);
    formData.set("birthDay", birthDay);
    formData.set("gender", gender);
    formData.set("shippingAddress", shippingAddress);
    formData.set("billingAddress", billingAddress);
    dispatch(updateProfile(formData));
  };

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
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Metadata title={`${user && user.username} Update `} />
          <Nav />
          <div className="mx-auto px-4 py-5 pb-20 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
            <div className="container mx-auto my-5 p-5">
              <div className="no-wrap md:-mx-2 md:flex ">
                <UpdateProfile
                  user={user}
                  userAvatar={userAvatar}
                  setUserAvatar={setUserAvatar}
                  userAvatarPreview={userAvatarPreview}
                  setUserAvatarPreview={setUserAvatarPreview}
                  submitHandler={submitHandler}
                  handleProfileImageChange={handleProfileImageChange}
                  register={register}
                  handleSubmit={handleSubmit}
                  control={control}
                  watch={watch}
                  errors={errors}
                />
                <div className="mx-2 mx-auto flex h-full w-full flex-col gap-6 md:w-9/12">
                  <UpdateAbout
                    user={user}
                    submitHandler={submitHandler}
                    birthDate={birthDate}
                    birthDateOnChange={birthDateOnChange}
                    register={register}
                    handleSubmit={handleSubmit}
                    control={control}
                    watch={watch}
                    errors={errors}
                  />
                  <UpdatePassword 
                    register={register}
                    handleSubmit={handleSubmit}
                    control={control}
                    watch={watch}
                    errors={errors}
                  />
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
