import React from "react";
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/solid";

const PopularItems = () => {
  return (
    <section className="px-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8">
      <div className="px-3 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-row justify-between items-center ">
          <div className="">
            <h2 className="heading-3">Popular Items</h2>
          </div>
          <div className="flex justify-between items-center gap-4">
            <button className="btn font-semibold  focus:ring-0 focus:ring-transparent ">
              <ArrowCircleLeftIcon className="h-8 w-8  text-dim-gray" />
            </button>
            <button className="btn font-semibold  focus:ring-0  focus:ring-transparent">
              <ArrowCircleRightIcon className="h-8 w-8 text-green-pantone" />
            </button>
          </div>
        </div>
        <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4"></div>
      </div>
    </section>
  );
};

export default PopularItems;
