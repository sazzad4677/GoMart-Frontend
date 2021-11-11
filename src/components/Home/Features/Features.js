import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import returnLogo from "../../../images/Features/Card-Logo/return.png";
import secureCheckoutLogo from "../../../images/Features/Card-Logo/secure-checkout.png";
import freeShippingLogo from "../../../images/Features/Card-Logo/return.png";

const Features = () => {
  return (
    <section className="bg-red-light">
      <Fade bottom>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className="flex flex-col justify-content-center">
              <p className="text-center mb-4 text-red text-sm font-body font-semibold tracking-wider rounded-full">
                What we Served
              </p>
              <h2 className="mb-6 font-body capitalize text-3xl lg:text-4xl font-bold leading-none tracking-tight text-gray sm:text-4xl  text-center">
                Fruits and Vegetables Delivered <br /> To Your Home
              </h2>
            </div>
          </div>
          <div className="grid gap-14 max-w-5xl lg:px-16 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
            <div className="feature-card">
              <div className="font-body flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6">
                  <img src={freeShippingLogo} alt="Free Shipping" />
                </div>
                <h6 className="text-gray font-body text-lg font-bold leading-5 capitalize pb-5">
                  Free Shipping
                </h6>
                <p className="font-body text-center pl-7 pr-7 text-sm text-gray-dark">
                  A flower in my garden, a mystery in my panties xyz xyz.
                </p>
              </div>
            </div>
            <div className="feature-card-background">
              <div className="feature-card ">
                <div className="font-body flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 z-50">
                    <img src={returnLogo} alt="return logo" />
                  </div>
                  <h6 className="text-gray font-body text-lg font-bold leading-5 capitalize pb-5">
                    15 Days return
                  </h6>
                  <p className="font-body text-center pl-7 pr-7 text-sm text-gray-dark">
                    A flower in my garden, a mystery in my panties xyz xyz.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-card">
              <div className="font-body flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6">
                  <img src={secureCheckoutLogo} alt="Secure Checkout logo" />
                </div>
                <h6 className="text-gray font-body text-lg font-bold leading-5 capitalize pb-5">
                  Secure Checkout
                </h6>
                <p className="font-body text-center pl-7 pr-7 text-sm text-gray-dark">
                  A flower in my garden, a mystery in my panties xyz xyz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Features;
