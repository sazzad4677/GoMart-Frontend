import React from "react";
import { useSelector } from "react-redux";
import RecentOrder from "../components/Orders/RecentOrder";
import About from "../components/Profile/About";
import Profile from "../components/Profile/Profile";
import Footer from "../layout/Footer/Footer";
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
        <>
          <Metadata title={`${user && user.username} `} />
          <Nav />
          <div className="mx-auto px-4 py-5 pb-20 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
            <div className="container mx-auto my-5 p-5">
              <div className="no-wrap md:-mx-2 md:flex ">
                <Profile user={user} />
                <div className="mx-2 h-full w-full mx-auto md:w-9/12">
                  <About user={user} />
                  <RecentOrder />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default ProfilePage;
