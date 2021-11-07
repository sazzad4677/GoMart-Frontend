import React from "react";
import { Fragment } from "react";

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
      {topNavigation.map(({ name, href }) => (
        <li>
          <a
            className="text-dark-primary hover:text-red-dark active:text-red activeMenu"
            href={href}
          >
            {name}
          </a>
        </li>
      ))}
    </Fragment>
  );
};

export default Navbars;
