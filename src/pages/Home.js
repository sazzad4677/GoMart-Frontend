import React from "react";
import Banner from "../components/Home/Hero/Banner";
import Navigation from "../components/Home/Nav/Nav";
import Features from "../components/Home/Features/Features";
import Categories from "../components/Home/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Features />
      <Categories />
    </div>
  );
};

export default Home;
