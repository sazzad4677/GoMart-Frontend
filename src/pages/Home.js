import React from "react";
import Banner from "../components/Home/Hero/Banner";
import Navigation from "../components/Home/Nav/Nav";
import Features from "../components/Home/Features/Features";
import Categories from "../components/Home/Categories/Categories";
import PopularItems from "../components/Home/PopularItems/PopularItems";
import BestSeller from "../components/Home/BestSeller/BestSeller";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Features />
      <Categories />
      <PopularItems />
      <BestSeller />
    </div>
  );
};

export default Home;
