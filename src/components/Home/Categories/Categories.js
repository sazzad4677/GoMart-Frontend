import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "@heroicons/react/outline";
import categoryData from "../../../Data/CategoryData";
import CategoryItems from "./CategoryItems";
import "./styles.css";
import { Collapse } from "react-collapse";

const Categories = () => {
  const [expendCategory, setExpendCategory] = useState(false);
  const handelButtonClick = () => {
    setExpendCategory((prev) => !prev);
  };
  
  return (
    <section className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-10">
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-screen-xl px-4 pb-5">
        <div className="flex flex-col justify-content-center">
          <p className="label-text text-center">Here's what you need</p>
          <h2 className="heading-2 text-center">Shop by Categories</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mb-10 sm:grid-cols-3 lg:grid-cols-6 text-skin-primary">
        {/* first half of category items always visible */}
        {categoryData.slice(0, 6).map(({ id, name, image, link }) => (
          <Link to={link} key={id} className="text-center">
            <CategoryItems id={id} name={name} image={image} link={link} />
          </Link>
        ))}
        {/* second half of category items (only show Category when user clicks the arrow button) */}
        <Fragment>
          {categoryData.slice(6, 12).map(({ id, name, image, link }) => (
            <Link to={link} key={id} className="text-center">
              <Collapse isOpened={expendCategory}>
                <CategoryItems id={id} name={name} image={image} link={link} />
              </Collapse>
            </Link>
          ))}
        </Fragment>
      </div>
      <div className="flex justify-center">
        <button
          className={`green-circle-button ${
            !expendCategory ? "animate-bounce" : "animate-none"
          } `}
          onClick={handelButtonClick}
        >
          <ArrowDownIcon
            className={`h-6 w-6 text-skin-accent font-bold transition transform duration-1000
            ${expendCategory && "rotate-180"}`}
          />
        </button>
      </div>
    </section>
  );
};

export default Categories;
