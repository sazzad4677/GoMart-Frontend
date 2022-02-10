import React from "react";
import "./styles.css";
import Fade from "react-reveal/Fade";
import freeShippingLogo from "../../../images/Features/Card-Logo/Free-Shipping.png";
import returnLogo from "../../../images/Features/Card-Logo/return.png";
import secureCheckoutLogo from "../../../images/Features/Card-Logo/secure-checkout.png";

const Features = () => {
  return (
    <section className="bg-skin-secondary bg-opacity-100">
      {/* <Fade bottom> */}
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <div className="justify-content-center flex flex-col">
            <p className="label-text text-center">What we Served</p>
            <h2 className="heading-2 text-center">
              Fruits and Vegetables Delivered <br /> To Your Home
            </h2>
          </div>
        </div>
        <div className="group z-10 mx-auto grid max-w-5xl gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
          <div className="feature-card">
            <div className="font-display flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16">
                <img src={freeShippingLogo} alt="Free Shipping" />
              </div>
              <h6 className="text-skin-primary font-display pb-5 text-lg font-bold capitalize leading-5">
                Free Shipping
              </h6>
              <p className="font-display text-skin-secondary pl-7 pr-7 text-center text-base tracking-wide">
                A flower in my garden, a mystery in my panties xyz xyz.
              </p>
            </div>
          </div>
          <div className="feature-card-background">
            <div className="feature-card ">
              <div className="font-display z-10 flex flex-col items-center text-center">
                <div className="mb-6 h-16 w-16">
                  <img src={returnLogo} alt="return logo" />
                </div>
                <h6 className="text-skin-primary font-display pb-5 text-lg font-bold capitalize leading-5">
                  15 Days return
                </h6>
                <p className="font-display text-skin-secondary pl-7 pr-7 text-center text-sm">
                  A flower in my garden, a mystery in my panties xyz xyz.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="font-display flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16">
                <img src={secureCheckoutLogo} alt="Secure Checkout logo" />
              </div>
              <h6 className="text-skin-primary font-display pb-5 text-lg font-bold capitalize leading-5">
                Secure Checkout
              </h6>
              <p className="font-display text-skin-secondary pl-7 pr-7 text-center text-sm">
                A flower in my garden, a mystery in my panties xyz xyz.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </section>
  );
};

export default Features;
