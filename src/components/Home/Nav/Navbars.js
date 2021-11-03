import React from "react";
import logo from "../../../images/Logo.png";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  SearchIcon,
  HomeIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
// import MobileMenu from "./MobileMenu";

const Navbars = (props) => {
  const navigations = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];
  return (
    <div>
      <nav class="flex justify-between  w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <a class=" flex text-3xl font-bold font-heading" href="#">
            <img src={logo} alt="Go Mart" className="h-8 w-8" />
            <span class="text-gray-primary ml-3 text-2xl">GoMart</span>
          </a>
          {/* <!-- Nav Links --> */}
          <ul class="hidden lg:flex px-4 mx-auto font-semibold font-heading space-x-12">
            {navigations.map((items) => (
              <li>
                <a
                  class="text-gray-primary hover:text-red-dark active:text-red-primary"
                  href={items.href}
                >
                  {items.name}
                </a>
              </li>
            ))}
          </ul>
          {/* <!-- Header Icons --> */}
          <div class="hidden xl:flex items-center space-x-5 items-center">
            <a class="text-gray-primary hover:text-red-dark" href="#">
              <SearchIcon class="h-6 w-6" />
            </a>
            <a class="text-gray-primary hover:text-red-dark" href="#">
              <HeartIcon class="h-6 w-6" />
            </a>
            <a
              class="flex items-center text-gray-primary hover:text-red-dark"
              href="#"
            >
              <ShoppingCartIcon class="h-6 w-6" />
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-primary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-primary"></span>
              </span>
            </a>
            {/* <!-- Sign In / Register      --> */}
            <a
              class="flex items-center text-gray-primary hover:text-red-dark"
              href="#"
            >
              <UserCircleIcon class="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          id="bottom-navigation"
          class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white" //shadow
        >
          <div id="tabs" class="flex justify-between">
            <a
              href="#"
              class="w-full text-red-primary justify-center inline-block text-center pt-2 "
            >
              <HomeIcon class="w-6 h-6 inline-block mb-1" />
              <span class="tab tab-home block text-xs">Home</span>
            </a>
            <a
              href="#"
              class="w-full text-red-primary  focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 "
            >
              <CollectionIcon class="w-6 h-6 inline-block mb-1" />
              <span class="tab tab-kategori block text-xs">Category</span>
            </a>
            <a
              href="#"
              class="w-full text-red-primary  focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 "
            >
              <SearchIcon class="w-6 h-6 inline-block mb-1" />
              <span class="tab tab-explore block text-xs">Search</span>
            </a>
            <a
              href="#"
              class="w-full text-red-primary  focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 "
            >
              <HeartIcon class="w-6 h-6 inline-block mb-1" />
              <span class="tab tab-whishlist block text-xs">Whishlist</span>
            </a>
            <a
              href="#"
              class="w-full text-red-primary  focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2"
            >
              <UserCircleIcon class="w-6 h-6 inline-block mb-1" />
              <span class="tab tab-account block text-xs">Account</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbars;
