import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import categoryData from "../../../Data/CategoryData";
import "./styles.css";

const Categories = () => {
  const [expendCategory, setExpendCategory] = useState(false);
  const handelButtonClick = () => {
    setExpendCategory((prev) => !prev);
  };

  return (
    <section className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-24 lg:pt-24 md:pt-20">
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-screen-xl px-4 py-5">
        <div className="flex flex-col justify-content-center">
          <p className="small-text">Here's what you need</p>
          <h2 className="heading-2">Shop by Categories</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 gap-y-16 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        {/* first half of category items */}
        {categoryData.slice(0, 6).map(({ id, name, image, link }) => (
          <Link to={link} className="text-center">
            <div className="category-data-style">
              <img src={image} alt={name} className="w-12 h-12" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">{name}</h6>
          </Link>
        ))}
        {/* second half of category items (only expendCategory when user clicks the arrow button) */}
        <Fragment>
          {categoryData.slice(6, 12).map(({ id, name, image, link }) => (
            <Link
              to={link}
              className={`text-center ${
                expendCategory ? "fadeInDown" : "fadeOutUp"
              }`} //fadeInDown & fadeOutUp css animation
            >
              <div className="category-data-style">
                <img src={image} alt={name} className="w-12 h-12" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{name}</h6>
            </Link>
          ))}
        </Fragment>
      </div>
      <div
        className={`flex justify-center p-8 transform duration-1000
        ${!expendCategory && "-translate-y-128 lg:-translate-y-60"}`}
      >
        <button className="green-circle-icon" onClick={handelButtonClick}>
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
