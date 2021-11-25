import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/outline";
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
    <div className="min-w-full relative flex flex-col-reverse py-16 h-full lg:h-screen lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-8/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-skin-accent transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>

        {/* Banner Image */}
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={image}
          alt=""
        />
      </div>

      {/* Banner text*/}
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="my-14 lg:my-44 lg:max-w-lg lg:pr-5">
          {/* label */}
          <p className="bg-skin-secondary label-text inline-flex items-center ">
            {label}
            <span>
              {/* label image */}
              <img src={labelImage} alt={label} className="h-6 w-6 ml-2" />
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
          <p className="pr-5 mb-5 font-display lg:text-base text-skin-secondary md:text-sm">
            {description}
          </p>
          <div className="flex items-center space-x-4">
            <button className="green-button">Explore</button>

            {/* button for video dialog box */}
            <button className="white-button" onClick={openVideoPlayer}>
              <PlayIcon className=" mr-2 h-5 w-5" /> Order Process
            </button>
            <VideoPlayer isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
