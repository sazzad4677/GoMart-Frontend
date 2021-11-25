import React from "react";
import TopNavItems from "./TopNavItems";
import "./styles.css";
import logo from "../../../images/Logo.png";
import { Link } from "react-router-dom";
import {
  HeartIcon,
  ShoppingCartIcon,
  SearchIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import BottomNav from "./BottomNav";

const Nav = () => {
  return (
    <header className="top-0 w-full fixed z-50 bg-skin-scheme-color bg-opacity-50">
      <nav className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8">
        <div className="relative flex items-center justify-between ">
          <a className="flex items-center" href="/">
            <img src={logo} alt="Go Mart" className="object-contain w-8" />
            <span className="font-display font-bold tracking-tight leading-snug text-skin-primary ml-2  text-2xl">
              Go<span className="text-skin-base"> Mart</span>
            </span>
          </a>
          {/* Nav Links */}
          <ul className="hidden xl:flex px-4 font-body font-semibold font-heading space-x-12 text-skin-primary ">
            <TopNavItems />
          </ul>
          {/* Search, cart, wishlist */}
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              <a className="nav-icon" href="/search">
                <SearchIcon className="h-6 w-6" />
              </a>
              <a className="nav-icon" href="/wishlist">
                <HeartIcon className="h-6 w-6" />
              </a>
              <a
                className="flex items-center text-gray hover:text-skin-base"
                href="/cart"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-skin-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-skin-primary"></span>
                </span>
              </a>
              {/* Sign In / Register Button*/}
            </div>
            <div className="hidden xl:block">
              <Link to="/login" className="green-button">
                <LoginIcon className="h-5 w-5 self-center mr-1" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Bottom Navigation -> mobile*/}
      <BottomNav />
    </header>
  );
};

export default Nav;
