import { PlayIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
const Hero = ({ data }) => {
  const {
    label,
    labelImage,
    topText,
    middleText,
    bottomText,
    colorText,
    description,
    image,
  } = data;

  // video player dialog box controller
  let [isOpen, setIsOpen] = useState(false);
  const openVideoPlayer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex h-full min-w-full flex-col-reverse py-16 lg:h-screen lg:flex-col lg:pt-0 lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 mx-auto w-full max-w-xl px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-8/12 lg:max-w-full lg:pr-0 xl:px-0">
        <svg
          className="absolute left-0 hidden h-full -translate-x-1/2 transform text-white lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>

        {/* Banner Image */}
        <img
          className="h-56 w-full rounded object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
          src={image}
          alt=""
        />
      </div>

      {/* Banner text*/}
      <div className="relative mx-auto flex w-full max-w-xl flex-col items-start px-4 md:px-0 lg:max-w-screen-xl lg:px-8">
        <div className="my-14 lg:my-44 lg:max-w-lg lg:pr-5">
          {/* label */}
          <p className="bg-skin-secondary label-text inline-flex items-center ">
            {label}
            <span>
              {/* label image */}
              <img src={labelImage} alt={label} className="ml-2 h-6 w-6" />
            </span>
          </p>
          {/* left text */}
          <h1 className="heading-1">
            {topText}
            <br className="hidden md:block" />
            {middleText}
            <span className="inline-block">
              {bottomText}
              <span className="text-skin-base">{colorText}</span>
            </span>
          </h1>
          <p className="font-display text-skin-secondary mb-5 pr-5 md:text-sm lg:text-base">
            {description}
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/products" className="green-button">
              Explore
            </Link>

            {/* button for video dialog box */}
            <button className="white-button" onClick={openVideoPlayer}>
              <PlayIcon className=" mr-2 h-5 w-5" /> How We Process The Order
            </button>
            <VideoPlayer isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
