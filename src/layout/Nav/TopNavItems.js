import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Navbars = ({items}) => {

  return (
    <Fragment>
      {items.map(({ name, href }, key) => (
        <li key={key} className=" text-skin-secondary ">
          <NavLink
            className={({ isActive }) =>
              `nav-link link-underline link-underline-green 
              ${
                isActive &&
                " text-skin-base link-underline link-underline-active"
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
