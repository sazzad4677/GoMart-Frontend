import React from "react";
import strawberryImg from "../../../images/Banner/strawberry.png";

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

  return (
    <div className="min-w-full relative flex flex-col-reverse py-16 h-full lg:h-screen lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-8/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
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
        <div className="mb-16 lg:my-44 lg:max-w-lg lg:pr-5">
          <p className="inline-flex items-center px-4 py-2 mb-4 text-sm font-body font-bold tracking-wider text-red rounded-full bg-red-light">
            {label}
            <span>
              <img
                src={labelImage} // label demo image
                alt={label}
                className="h-6 w-6 ml-2"
              />
            </span>
          </p>
          <h1 className="mb-5 font-display text-3xl lg:text-5xl size font-extrabold tracking-tight text-gray sm:text-4xl sm:leading-none">
            {topText}
            <br className="hidden md:block" />
            {middleText}
            <span className="inline-block text-deep-purple-accent-400">
              {bottomText} <span className="text-red">{colorText}</span>
            </span>
          </h1>
          <p className="pr-5 mb-5 font-body text-base text-gray-700 md:text-lg">
            {description}
          </p>
          <div className="flex items-center">
            <button className="red-button">Get started</button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray transition-colors duration-200 hover:text-red-dark ml-6 link link-underline link-underline-red"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
