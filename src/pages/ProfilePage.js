import React from "react";
import { useSelector } from "react-redux";
import RecentOrder from "../components/Orders/RecentOrder";
import About from "../components/Profile/About";
import Profile from "../components/Profile/Profile";
import Loader from "../layout/Loader/Loader";
import Metadata from "../layout/Metadata/Metadata";
import Nav from "../layout/Nav/Nav";

const ProfilePage = () => {
  const { user, loading } = useSelector((state) => state.authReducers);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Metadata title={`${user && user.username} - Profile`} />
          <Nav />
          <div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
            <div class="container mx-auto my-5 p-5">
              <div class="no-wrap md:-mx-2 md:flex ">
                <Profile user={user} />
                <div class="mx-2 h-64 w-full md:w-9/12">
                  <About user={user} />
                  <RecentOrder />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
