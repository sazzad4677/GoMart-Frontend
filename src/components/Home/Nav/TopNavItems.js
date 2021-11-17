import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Navbars = () => {
  const topNavigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Stores", href: "/stores" },
    { name: "Contact Us", href: "/contact" },
    { name: "Track Order", href: "/track-order" },
  ];
  return (
    <Fragment>
      {topNavigation.map(({ name, href }, key) => (
        <li key={key} className=" text-gray ">
          <NavLink
            className={({ isActive }) =>
              `nav-link link-underline link-underline-green 
              ${
                isActive &&
                "text-green-pantone link-underline link-underline-active"
              }`
            }
            to={`${href}`}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </Fragment>
  );
};

export default Navbars;
