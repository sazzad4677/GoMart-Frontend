import React, { Fragment } from "react";
import {
  UserCircleIcon,
  SearchIcon,
  HomeIcon,
  CollectionIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

const BottomNav = () => {
  return (
    <Fragment>
      <div
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 z-10 shadow "
      >
        <div id="tabs" className="flex justify-between ">
          <a
            href="/home"
            className="bottom-nav"
          >
            <HomeIcon className="bottom-nav-icon" />
            <span className="block text-xs">Home</span>
          </a>
          <a
            href="/products"
            className="bottom-nav "
          >
            <CollectionIcon className="bottom-nav-icon" />
            <span className="block text-xs">Products</span>
          </a>
          <a
            href="/search"
            className="bottom-nav"
          >
            <SearchIcon className="bottom-nav-icon" />
            <span className="block text-xs">Search</span>
          </a>
          <a
            href="/track-order"
            className="bottom-nav "
          >
            <LocationMarkerIcon className="bottom-nav-icon" />
            <span className="block text-xs">Tracking</span>
          </a>
          <a
            href="/account"
            className="bottom-nav"
          >
            <UserCircleIcon className="bottom-nav-icon" />
            <span className="block text-xs">Login</span>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default BottomNav;
