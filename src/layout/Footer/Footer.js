import React from "react";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="border-t bg-gray-50 min-h-auto">
      <footer className="font-display mx-auto max-w-7xl px-4 py-12">
        <div className="mb-3 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-3">
            <Link
              to="/"
              title="Go to Go Mart Home Page"
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Go Mart logo"
                className="w-8 object-contain"
              />
              <span className="font-display text-skin-primary ml-2 text-2xl font-bold leading-snug  tracking-tight">
                Go<span className="text-skin-base">Mart</span>
              </span>
              <span className="sr-only">Go Mart Home Page</span>
            </Link>
            <p className="my-4 text-xs leading-normal text-gray-500">
              Go mart is an online shop available in Dhaka. We believe time is
              valuable to our fellow residents, and that they should not have to
              waste hours in traffic, brave bad weather and wait in line just to
              buy basic necessities like eggs! This is why Go Mart delivers
              everything you need right at your door-step and at no additional
              cost
            </p>
          </div>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Product
            </p>
            {[
              "Features",
              "Integrations",
              "Documentation",
              "FAQs",
              "Pricing",
            ].map((text, key) => (
              <Link
                key={key}
                to="#"
                className="hover:text-skin-base mb-3 flex text-sm font-medium text-gray-800 transition md:mb-2"
              >
                {text}
              </Link>
            ))}
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              About
            </p>
            {["Press-Kit", "Company", "Privacy", "Blog", "Press-Kit"].map(
              (text, key) => (
                <Link
                  key={key}
                  to="#"
                  className="hover:text-skin-base mb-3 flex text-sm font-medium text-gray-800 transition md:mb-2"
                >
                  {text}
                </Link>
              )
            )}
          </nav>
          <nav className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </p>
            {["Twitter", "Instagram", "Facebook", "Blog"].map((text, key) => (
              <Link
                key={key}
                to="#"
                className="hover:text-skin-base mb-3 flex text-sm font-medium text-gray-800 transition md:mb-2"
              >
                {text}
              </Link>
            ))}
          </nav>
          <div className="col-span-3">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <form action="#" className="mb-2">
              <div className="form-append">
                <input
                  className="form-input form-input-sm"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="green-button btn-sm" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs leading-normal text-gray-500">
              Get lessons and insights on how to grow your freelance business.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between border-t border-gray-100 pt-10 md:flex-row md:items-center">
          <p className="mb-6 text-left text-sm text-gray-600 md:mb-0">
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
            <a
              href="https://facebook.com"
              className="hover:text-primary text-sm text-gray-600 transition "
            >
              <FaFacebookF className="h-5 w-5 text-blue-500" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover:text-primary text-sm text-gray-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2500 2500"
                width="2500"
                height="2500"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient
                    id="0"
                    cx="332.14"
                    cy="2511.81"
                    r="3263.54"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".09" stopColor="#fa8f21" />
                    <stop offset=".78" stopColor="#d82d7e" />
                  </radialGradient>
                  <radialGradient
                    id="1"
                    cx="1516.14"
                    cy="2623.81"
                    r="2572.12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
                    <stop offset="1" stopColor="#8c3aaa" />
                  </radialGradient>
                </defs>
                <path
                  d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                  fill="url(#0)"
                />
                <path
                  d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                  fill="url(#1)"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              className="hover:text-primary text-sm text-gray-600 transition"
            >
              <BsLinkedin className="h-5 w-5 text-blue-600" />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-primary text-sm text-gray-600 transition"
            >
              <GrTwitter className="h-5 w-5 text-blue-400" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
