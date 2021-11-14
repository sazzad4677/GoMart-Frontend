import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Navbars = () => {
  const topNavigation = [
    { name: "Home", href: "/home" },
    { name: "Products", href: "/products" },
    { name: "Stores", href: "/stores" },
    { name: "Contact Us", href: "/contact" },
    { name: "Track Order", href: "/track-order" },
  ];
  return (
    <Fragment>
      {topNavigation.map(({ name, href }, key) => (
        <li
          key={key}
          className=" text-gray hover:text-primary-color active:text-primary-color link link-underline link-underline-red "
        >
          <NavLink to={`${href}`}>{name}</NavLink>
        </li>
      ))}
    </Fragment>
  );
};

export default Navbars;
