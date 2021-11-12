import React, { useState, Fragment } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import categoryData from "../../../Data/CategoryData";
import "./styles.css";
import Fade from "react-reveal/Fade";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

const Categories = () => {
  const [show, setShow] = useState(false);

  return (
    <section className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-24 lg:pt-24 md:pt-20">
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-screen-xl px-4 py-5">
        <div className="flex flex-col justify-content-center">
          <p className="text-center mb-4 text-red text-sm font-display font-semibold tracking-wider rounded-full">
            Here's what you need
          </p>
          <h2 className="mb-10 font-display capitalize text-3xl lg:text-4xl font-bold leading-none tracking-tight text-gray sm:text-4xl  text-center">
            Shop by Categories
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 gap-y-16 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        {/* first half of category items */}
        {categoryData.slice(0, 6).map(({ id, name, image }) => (
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-light sm:w-24 sm:h-24">
              <img src={image} alt={name} className="w-12 h-12" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">{name}</h6>
          </div>
        ))}
        {/* second half of category items (only show when user clicks the arrow button) */}
        <Fragment className="">
          {show &&
            categoryData.slice(6, 12).map(({ id, name, image }) => (
              // <Fade bottom>
              <div className="text-center transition transform duration-500 ease-in-out">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-light sm:w-24 sm:h-24">
                  <img src={image} alt={name} className="w-12 h-12" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">{name}</h6>
              </div>
              // </Fade>
            ))}
        </Fragment>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red rounded-full h-10 w-10 flex items-center justify-center"
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          {!show ? (
            <ArrowDownIcon className="h-6 w-6 text-white font-bold animate-bounce" />
          ) : (
            <ArrowUpIcon className="h-6 w-6 text-white font-bold animate-bounce" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Categories;
