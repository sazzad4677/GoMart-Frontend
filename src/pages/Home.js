import React from "react";
import Banner from "../components/Home/Hero/Banner";
import Navigation from "../layout/Nav/Nav";
import Features from "../components/Home/Features/Features";
import Categories from "../components/Home/Categories/Categories";
import PopularItems from "../components/Home/PopularItems/PopularItems";
import BestSeller from "../components/Home/BestSeller/BestSeller";
import Testimonial from "../components/Home/Testimonial/Testimonial";


const Home = () => {

  return (
    <section>
      <Navigation />
      <Banner />
      <Features />
      <Categories />
      <PopularItems />
      <BestSeller />
      <Testimonial />
    </section>
  );
};

export default Home;
