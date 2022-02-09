import {
  ChevronDownIcon,
  HeartIcon, LoginIcon, LogoutIcon, SearchIcon, ShoppingCartIcon
} from "@heroicons/react/outline";
import { CogIcon, UserIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Searchbar from "../../components/Search/Searchbar";
import logo from "../../images/Logo.png";
import BottomNav from "./BottomNav";
import "./styles.css";


const Nav = ({ ...props }) => {
  const { fixed, items = [], SearchBarShow, productsData } = props
  const { isAuthenticated, user, error, loading } = useSelector(state => state.authReducers)
  return (
    <header className={`top-0 w-full ${fixed} z-50 bg-skin-scheme-color bg-opacity-50`}>
      <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-0">
        <div className="relative flex items-center justify-between ">
          <a className="flex items-center " href="/">
            <img src={logo} alt="Go Mart" className="object-contain w-8" />
            <span className="font-display font-bold tracking-tight leading-snug text-skin-primary ml-2  text-2xl">
              Go<span className="text-skin-base">Mart</span>
            </span>
          </a>
          {/* Nav Links */}
          <ul className="hidden xl:flex px-4 font-body font-semibold font-heading space-x-12 text-skin-primary ">
            {items.map(({ name, href }, key) => (
              <li key={key} className=" text-skin-secondary ">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link link-underline link-underline-green 
              ${isActive &&
                    " text-skin-base link-underline link-underline-active"
                    }`
                  }
                  to={`${href}`}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Searchbar SearchBarShow={SearchBarShow} productsData={productsData} />
          {/* Search, cart, wishlist */}
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/search" className="nav-icon" >
                <SearchIcon id="search-toggle" className={`h-6 w-6 ${!SearchBarShow && "hidden"}`} />
              </Link>
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
              {!isAuthenticated ?
                <Link to="/login" className="green-button">
                  <LoginIcon className="h-5 w-5 self-center mr-1" />
                  Login
                </Link>
                // Logged in Profile 
                : <div x-data="dropdown()">
                  <button class="p-0" x-spread="trigger">
                    <div class="flex items-center gap-2 rounded-full" >
                      <div class="avatar avatar-sm bg-skin-secondary">
                        {user.avatar
                          ? <img src={user.avatar.url} alt={user && user.name} />
                          : <UserIcon className="h-4 w-4 text-gray-600" />}
                      </div>
                      <ChevronDownIcon className="h-4 w-4" />
                    </div>
                  </button>
                  <div class="dropdown-list" id="profile-menu" x-position="left-start" x-spread="dropdown" x-cloak="true" >
                    <p class="dropdown-header">Signed In as <span class="text-skin-primary text-bold">{user && user.name}</span></p>
                    <Link to="#" class="dropdown-item focus:ring-0 flex gap-2 items-center">
                      <UserIcon className="w-6 h-6" />
                      Profile
                    </Link>
                    <Link to="#" class="dropdown-item focus:ring-0 flex gap-2 items-center">
                      <CogIcon className="w-6 h-6" />
                      Settings
                    </Link>
                    <Link to="#" class="dropdown-item focus:ring-0 flex gap-2 items-center">
                      <LogoutIcon className="w-6 h-6" />
                      Log out
                    </Link>
                  </div>
                </div>}
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
