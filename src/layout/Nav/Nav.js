import {
  ChevronDownIcon,
  HeartIcon,
  LoginIcon,
  LogoutIcon,
  SearchIcon,
  ShoppingCartIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import Searchbar from "../../components/Search/Searchbar";
import logo from "../../images/Logo.png";
import BottomNav from "./BottomNav";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import "./styles.css";
import ShoppingCart from "../../pages/ShoppingCart";

const Nav = ({ ...props }) => {
  const dispatch = useDispatch();
  const { fixed, items = [], SearchBarShow, productsData } = props;
  const { user, error, loading } = useSelector((state) => state.authReducers);
  const { cartItems } = useSelector((state) => state.cart);
  const logoutHandler = () => {
    dispatch(logoutUser());
    toast.success("Successfully Logged out");
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <header
      className={`top-0 w-full ${fixed} bg-skin-secondary z-50 bg-opacity-70`}
    >
      <nav className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
        <div className="relative flex items-center justify-between ">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Go Mart" className="w-8 object-contain" />
            <span className="font-display text-skin-primary ml-2 text-2xl font-bold leading-snug  tracking-tight">
              Go<span className="text-skin-base">Mart</span>
            </span>
          </Link>
          {/* Nav Links */}
          <ul className="font-body font-heading text-skin-primary hidden space-x-12 px-4 font-semibold xl:flex ">
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
          </ul>
          <Searchbar
            SearchBarShow={SearchBarShow}
            productsData={productsData}
          />
          {/* Search, cart, wishlist */}
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/search" className="nav-icon">
                <SearchIcon
                  id="search-toggle"
                  className={`h-6 w-6 ${!SearchBarShow && "hidden"}`}
                />
              </Link>
              <Link to="/wishlist" className="nav-icon">
                <HeartIcon className="h-6 w-6" />
              </Link>
              <button
                onClick={() => setCartOpen(true)}
                className="text-gray hover:text-skin-base flex items-center"
              >
                <span className="relative flex ">
                  <ShoppingCartIcon className="h-6 w-6 flex-1" />
                  {cartItems.length ? (
                    <span className="bg-skin-gray top right bg-skin-primary absolute -right-2 -top-2 m-0 h-4 w-4 rounded-full p-0 text-center font-mono text-sm  leading-tight text-white">
                      {cartItems.length}
                    </span>
                  ) : ""
                }
                </span>
              </button>
            </div>
            <div className="hidden xl:block">
              {user ? (
                <div>
                  <Menu
                    as="div"
                    className="relative z-50 inline-block text-left"
                  >
                    <div>
                      <Menu.Button
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white ${
                          user.avatar ? "px-3 py-1" : "px-4 py-3"
                        } text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50`}
                      >
                        {user.avatar ? (
                          <img
                            src={user.avatar.url}
                            alt={user.name}
                            className="avatar avatar-sm"
                          />
                        ) : (
                          <UserIcon className="h-4 w-4 bg-white text-gray-600" />
                        )}
                        <ChevronDownIcon
                          className="h-4 w-4 transform font-bold transition duration-1000"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="w-30 absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 px-2">
                          <p className="text-skin-secondary text-bold p-2">
                            {user.username}
                          </p>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/profile"
                                className={classNames(
                                  active
                                    ? "flex items-center gap-2 bg-gray-100 text-gray-900"
                                    : "flex items-center gap-2 text-gray-700",
                                  "block px-3 py-2 text-sm"
                                )}
                              >
                                <UserIcon className="h-4 w-4" />
                                Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) =>
                                user.role === "admin" ? (
                                  <Link
                                    to="/dashboard"
                                    className={classNames(
                                      active
                                        ? "flex items-center gap-2 bg-gray-100 text-gray-900"
                                        : "flex items-center gap-2 text-gray-700",
                                      "block px-3 py-2 text-sm"
                                    )}
                                  >
                                    <ViewGridIcon className="h-4 w-4" />
                                    Dashboard
                                  </Link>
                                ) : (
                                  <Link
                                    to="/orders"
                                    className={classNames(
                                      active
                                        ? "flex items-center gap-2 bg-gray-100 text-gray-900"
                                        : "flex items-center gap-2 text-gray-700",
                                      "block px-3 py-2 text-sm"
                                    )}
                                  >
                                    <ViewGridIcon className="h-4 w-4" />
                                    Orders
                                  </Link>
                                )
                              }
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/"
                                  onClick={logoutHandler}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100  text-red-900"
                                      : "text-red-700",
                                    "block flex items-center  gap-2 px-3 py-2 text-sm"
                                  )}
                                >
                                  <LogoutIcon
                                    className={classNames(
                                      active ? "text-red-900" : "text-red-700",
                                      "h-4 w-4"
                                    )}
                                  />
                                  Logout
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                // Logged in Profile
                !loading && (
                  <Link to="/login" className="green-button">
                    <LoginIcon className="mr-1 h-5 w-5 self-center" />
                    Login
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        <ShoppingCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </nav>
      {/* Bottom Navigation -> mobile*/}
      {/* <BottomNav /> */}
    </header>
  );
};

export default Nav;
