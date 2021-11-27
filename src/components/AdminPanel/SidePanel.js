import React from "react";
import "./styles.css";
import logo from "../../images/Logo.png";
import { Link, useLocation } from "react-router-dom";
// Icons
import { ViewGridIcon, LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { AiOutlineUnorderedList, AiOutlineGift } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { FiCompass, FiSettings, FiShoppingBag } from "react-icons/fi";

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

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-white dark:bg-gray-900 h-full text-black transition-all duration-300 border-none z-10 sidebar shadow">
      <aside class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow ">
        <ul class="flex flex-col py-4 space-y-2">
          <li>
            <a
              href="/"
              class="relative flex flex-grow items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent px-2"
            >
              <img
                src={logo}
                alt="Go Mart"
                className="object-contain w-6 ml-3"
              />
              <span className=" font-display font-bold tracking-tight leading-snug text-skin-primary ml-3  text-2xl">
                Go<span className="text-skin-base">Mart</span>
              </span>
            </a>
          </li>
          {dashboardItems.map(({ name, href, icon }, id) => (
            <li className="relative" key={id}>
              <Link
                to={href}
                class="px-2 py-4 inline-flex items-center w-full text-sm font-semibold text-skin-secondary "
              >
                {/* Icons */}
                <span
                  class={`inline-flex justify-center items-center ml-4 ${
                    splitLocation[1] === href.split("/")[1] && "text-skin-base"
                  }`}
                >
                  {icon}
                </span>
                {/* Item name */}
                <span
                  class={`ml-3 ${
                    splitLocation[1] === href.split("/")[1] && "text-skin-base"
                  }`}
                >
                  {name}
                </span>
              </Link>
              {/* Left side border */}
              {splitLocation[1] === href.split("/")[1] && (
                <span
                  class="absolute inset-y-0 left-0 w-1 bg-skin-primary rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          class="align-bottom flex items-center px-2 py-3  "
        >
          <span class="inline-flex justify-center items-center ml-4">
            <LogoutIcon class="w-6 h-6 text-skin-secondary font-semibold" />
          </span>
          <span class="ml-3 text-sm text-skin-secondary font-display font-semibold">
            Logout
          </span>
        </button>
      </aside>
    </div>
  );
};

export default SidePanel;
