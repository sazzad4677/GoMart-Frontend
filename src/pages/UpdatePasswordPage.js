import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearErrors, updatePassword } from "../actions/authActions";
import UpdatePassword from "../components/UpdateProfile/UpdatePassword";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import { UPDATE_PASSWORD_RESET } from "../constants/authConstants";
import Footer from "../layout/Footer/Footer";
import Metadata from "../layout/Metadata/Metadata";
import Nav from "../layout/Nav/Nav";

const UpdatePasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isUpdated, loading } = useSelector(
    (state) => state.userReducer
  );
  const { user } = useSelector((state) => state.authReducers);
  // Password form Submit
  const passwordFormSubmitHandler = (data) => {
    const { oldPassword, newPassword } = data;
    const formData = new FormData();
    formData.set("oldPassword", oldPassword);
    formData.set("newPassword", newPassword);
    dispatch(updatePassword(formData));
  };

  useEffect(() => {
    // Update password
    if (isUpdated) {
      toast.success("User updated successfully");
      navigate("/profile/");
      dispatch({ type: UPDATE_PASSWORD_RESET });
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, navigate, isUpdated]);
  return (
    <div>
      <Metadata title={`Password Update `} />
      <Nav />
      <div className="mx-auto px-4 py-5 pb-20 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
        <div className="container mx-auto my-5 p-5">
          <div className="no-wrap md:-mx-2 md:flex ">
            <UpdateProfile user={user} />
            <div className="h-full w-full md:w-9/12">
              <UpdatePassword
                passwordFormSubmitHandler={passwordFormSubmitHandler}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdatePasswordPage;
