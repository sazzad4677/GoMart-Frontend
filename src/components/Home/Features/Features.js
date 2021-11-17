import React from "react";
import "./styles.css";
import Fade from "react-reveal/Fade";
import freeShippingLogo from "../../../images/Features/Card-Logo/Free-Shipping.png";
import returnLogo from "../../../images/Features/Card-Logo/return.png";
import secureCheckoutLogo from "../../../images/Features/Card-Logo/secure-checkout.png";

const Features = () => {
  return (
    <section className="bg-honeydew">
      {/* <Fade bottom> */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="flex flex-col justify-content-center">
            <p className="small-text">What we Served</p>
            <h2 className="heading-2 text-center">
              Fruits and Vegetables Delivered <br /> To Your Home
            </h2>
          </div>
        </div>
        <div className="grid gap-14 max-w-5xl lg:px-16 sm:grid-cols-2 lg:grid-cols-3 mx-auto z-10">
          <div className="feature-card">
            <div className="font-display flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6">
                <img src={freeShippingLogo} alt="Free Shipping" />
              </div>
              <h6 className="text-kombu-green font-display text-lg font-bold leading-5 capitalize pb-5">
                Free Shipping
              </h6>
              <p className="font-display text-center pl-7 pr-7 text-sm tracking-wide text-dim-gray">
                A flower in my garden, a mystery in my panties xyz xyz.
              </p>
            </div>
          </div>
          <div className="feature-card-background">
            <div className="feature-card ">
              <div className="font-display flex flex-col items-center text-center z-10">
                <div className="w-16 h-16 mb-6">
                  <img src={returnLogo} alt="return logo" />
                </div>
                <h6 className="text-kombu-green font-display text-lg font-bold leading-5 capitalize pb-5">
                  15 Days return
                </h6>
                <p className="font-display text-center pl-7 pr-7 text-sm text-dim-gray">
                  A flower in my garden, a mystery in my panties xyz xyz.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="font-display flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6">
                <img src={secureCheckoutLogo} alt="Secure Checkout logo" />
              </div>
              <h6 className="text-kombu-green font-display text-lg font-bold leading-5 capitalize pb-5">
                Secure Checkout
              </h6>
              <p className="font-display text-center pl-7 pr-7 text-sm text-dim-gray">
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
