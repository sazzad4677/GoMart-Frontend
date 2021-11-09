import React from "react";
import TopNavItems from "./TopNavItems";
import logo from "../../../images/Logo.png";
import {
  HeartIcon,
  ShoppingCartIcon,
  SearchIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import BottomNav from "./BottomNav";

const Nav = () => {
  return (
    <header className="top-0 w-full fixed z-50 bg-white bg-opacity-50">
      <nav className="container flex justify-between font-body mx-auto">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
          <a className=" flex text-3xl md:text-2xl font-bold font-heading" href="/">
            <img src={logo} alt="Go Mart" className="h-8 w-8 md:h-6 md:w-6" />
            <span className="text-gray ml-3 text-2xl md:text-xl">GoMart</span>
          </a>
          {/* Nav Links */}
          <ul className="hidden xl:flex px-4 mx-auto font-semibold font-heading space-x-12 text-gray ">
            <TopNavItems />
          </ul>
          {/* Search, cart, wishlist */}
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              <a
                className="hidden xl:block text-gray hover:text-red-dark"
                href="/search"
              >
                <SearchIcon className="h-6 w-6" />
              </a>
              <a
                className="hidden xl:block text-gray hover:text-red-dark"
                href="/wishlist"
              >
                <HeartIcon className="h-6 w-6" />
              </a>
              <a
                className="flex items-center text-gray hover:text-red-dark"
                href="/cart"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red"></span>
                </span>
              </a>
              {/* Sign In / Register Button*/}
            </div>
            <div className="hidden xl:block">
              <button className="red-button">
                <LoginIcon className="h-5 w-5 self-center mr-1" />
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation -> mobile*/}
      </nav>
      {/* <div className="bottom-0"> */}
        <BottomNav />
        {/* </div> */}
        
    </header>
  );
};

export default Nav;
