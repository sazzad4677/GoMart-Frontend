// Icons
import { LogoutIcon, UserIcon, ViewGridIcon } from "@heroicons/react/outline";
import React from "react";
import { AiOutlineGift, AiOutlineUnorderedList } from "react-icons/ai";
import { FiCompass, FiSettings, FiShoppingBag } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./styles.css";

const SidePanel = () => {
  const dashboardItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <ViewGridIcon className="h-6 w-6" />,
    },
    {
      name: "Products",
      href: "/products",
      icon: <FiShoppingBag className="h-5 w-5" />,
    },
    {
      name: "Category",
      href: "/category",
      icon: <AiOutlineUnorderedList className="h-5 w-5" />,
    },
    {
      name: "Customers",
      href: "/customers",
      icon: <IoPeopleOutline className="h-5 w-5" />,
    },
    {
      name: "Orders",
      href: "/orders",
      icon: <FiCompass className="h-5 w-5" />,
    },
    {
      name: "Coupons",
      href: "/coupons",
      icon: <AiOutlineGift className="h-5 w-5" />,
    },
    {
      name: "Staff",
      href: "/staff",
      icon: <UserIcon className="h-5 w-5" />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <FiSettings className="h-5 w-5" />,
    },
  ];
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className="sidebar  static left-0 z-20 flex h-full w-14 flex-col border-none bg-white text-black transition-all duration-300 hover:w-64 dark:bg-gray-900 md:w-64">
      <div className="flex flex-grow flex-col justify-between overflow-y-auto overflow-x-hidden ">
        <ul className="mt-1 flex flex-col space-y-2">
          <li>
            <Link
              to="/"
              className="text-white-600 hover:text-white-800 relative flex h-11 flex-grow items-center border-l-4 border-transparent px-2 focus:outline-none"
            >
              <img
                src={logo}
                alt="Go Mart"
                className="ml-3 w-6 object-contain"
              />
              <span className=" font-display text-skin-primary ml-3 text-2xl font-bold leading-snug  tracking-tight">
                Go<span className="text-skin-base">Mart</span>
              </span>
            </Link>
          </li>
          {dashboardItems.map(({ name, href, icon }, id) => (
            <li className="relative" key={id}>
              <Link
                to={href}
                className="text-skin-secondary hover:text-skin-base inline-flex w-full items-center px-2 py-4 text-sm font-semibold"
              >
                {/* Icons */}
                <span
                  className={`ml-4 inline-flex items-center justify-center ${
                    splitLocation[1] === href.split("/")[1] && "text-skin-base"
                  }`}
                >
                  {icon}
                </span>
                {/* Item name */}
                <span
                  className={`ml-4 ${
                    splitLocation[1] === href.split("/")[1] && "text-skin-base"
                  }`}
                >
                  {name}
                </span>
              </Link>
              {/* Left side border */}
              {splitLocation[1] === href.split("/")[1] && (
                <span
                  className="bg-skin-primary absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="flex items-center px-2 py-3 align-bottom  "
        >
          <span className="ml-4 inline-flex items-center justify-center">
            <LogoutIcon className="text-skin-secondary h-6 w-6 font-semibold" />
          </span>
          <span className="text-skin-secondary font-display ml-3 text-sm font-semibold">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
