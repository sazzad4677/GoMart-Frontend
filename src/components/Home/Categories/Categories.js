import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import categoryData from "../../../Data/CategoryData";
import CategoryItems from "./CategoryItems";
import "./styles.css";

const Categories = () => {
  const [expendCategory, setExpendCategory] = useState(false);
  const handelButtonClick = () => {
    setExpendCategory((prev) => !prev);
  };
  return (
    <section
      className={`px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ${
        !expendCategory
          ? "transform lg:translate-y-36 duration-1000  py-8 lg:py-5"
          : "transform translate-y-0 duration-1000 py-8 lg:py-5"
      }`}
    >
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-screen-xl px-4 pb-5">
        <div className="flex flex-col justify-content-center">
          <p className="small-text text-center">Here's what you need</p>
          <h2 className="heading-2 text-center">Shop by Categories</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 gap-y-16 mb-10 sm:grid-cols-3 lg:grid-cols-6 text-kombu-green">
        {/* first half of category items always visible */}
        {categoryData.slice(0, 6).map(({ id, name, image, link }) => (
          <Link to={link} key={id} className="text-center">
            <CategoryItems id={id} name={name} image={image} link={link} />
          </Link>
        ))}
        {/* second half of category items (only show Category when user clicks the arrow button) */}
        <Fragment>
          {categoryData.slice(6, 12).map(({ id, name, image, link }) => (
            <Link
              to={link}
              key={id}
              className={`text-center 
              ${expendCategory ? "fadeInDown" : "fadeOutUp hidden md:block"}`} //fadeInDown & fadeOutUp css animation
            >
              <CategoryItems id={id} name={name} image={image} link={link} />
            </Link>
          ))}
        </Fragment>
      </div>
      <div
        className={`flex justify-center transform duration-1000
        ${!expendCategory && "lg:-translate-y-60"}`}
      >
        <button
          className="green-circle-button animate-bounce"
          onClick={handelButtonClick}
        >
          <ArrowDownIcon
            className={`h-6 w-6 text-white font-bold transition transform rotate-0 duration-1000
            ${expendCategory && "rotate-180"}`}
          />
        </button>
      </div>
    </section>
  );
};

export default Categories;
