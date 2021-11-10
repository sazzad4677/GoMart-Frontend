import React from "react";
import Banner from "../components/Home/Hero/Banner";
import Navigation from "../components/Home/Nav/Nav";
import Features from "../components/Home/Features/Features";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Features />
    </div>
  );
};

export default Home;
