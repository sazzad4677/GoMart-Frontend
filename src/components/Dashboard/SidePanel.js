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
      icon: <ViewGridIcon className="w-6 h-6" />,
    },
    {
      name: "Products",
      href: "/products",
      icon: <FiShoppingBag className="w-5 h-5" />,
    },
    {
      name: "Category",
      href: "/category",
      icon: <AiOutlineUnorderedList className="w-5 h-5" />,
    },
    {
      name: "Customers",
      href: "/customers",
      icon: <IoPeopleOutline className="w-5 h-5" />,
    },
    {
      name: "Orders",
      href: "/orders",
      icon: <FiCompass className="w-5 h-5" />,
    },
    {
      name: "Coupons",
      href: "/coupons",
      icon: <AiOutlineGift className="w-5 h-5" />,
    },
    {
      name: "Staff",
      href: "/staff",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <FiSettings className="w-5 h-5" />,
    },
  ];
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className="static  flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-white dark:bg-gray-900 h-full text-black transition-all duration-300 border-none sidebar z-20">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow ">
        <ul className="flex flex-col space-y-2 mt-1">
          <li>
            <Link
              to="/"
              className="relative flex flex-grow items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent px-2"
            >
              <img
                src={logo}
                alt="Go Mart"
                className="object-contain w-6 ml-3"
              />
              <span className=" font-display font-bold tracking-tight leading-snug text-skin-primary ml-3  text-2xl">
                Go<span className="text-skin-base">Mart</span>
              </span>
            </Link>
          </li>
          {dashboardItems.map(({ name, href, icon }, id) => (
            <li className="relative" key={id}>
              <Link
                to={href}
                className="px-2 py-4 inline-flex items-center w-full text-sm font-semibold text-skin-secondary hover:text-skin-base"
              >
                {/* Icons */}
                <span
                  className={`inline-flex justify-center items-center ml-4 ${
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
                  className="absolute inset-y-0 left-0 w-1 bg-skin-primary rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="align-bottom flex items-center px-2 py-3  "
        >
          <span className="inline-flex justify-center items-center ml-4">
            <LogoutIcon className="w-6 h-6 text-skin-secondary font-semibold" />
          </span>
          <span className="ml-3 text-sm text-skin-secondary font-display font-semibold">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
