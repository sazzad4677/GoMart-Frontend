import {
  AdjustmentsIcon,
  PencilAltIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const About = ({ user }) => {
  const {
    name,
    username,
    email,
    avatar,
    status,
    accountCreatedAt,
    gender,
    phone,
    shippingAddress,
    billingAddress,
    birthday,
  } = user;
  return (
    <>
      <div className="font-display rounded-md bg-gray-100 p-3 shadow-sm">
        <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
          <span clas="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid text-sm md:grid-cols-2">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Name</div>
              <div className="px-2 py-2">{name && name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Username</div>
              <div className="px-2 py-2">{username}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Gender</div>
              <div className="px-2 py-2">{gender && gender}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-2 py-2">{phone && phone}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold"> Shipping Address</div>
              <div className="px-2 py-2">{shippingAddress && shippingAddress}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Billing Address</div>
              <div className="px-2 py-2">{billingAddress && billingAddress}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email.</div>
              <div className="-px-1 py-2">
                <a className="text-blue-800" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Birthday</div>
              <div className="px-4 py-2">{birthday && birthday}</div>
            </div>
          </div>
          <div className="flex">
            <Link
              to=""
              className="btn btn-icon my-4 flex w-full gap-2  rounded-lg text-sm font-semibold text-blue-800 hover:bg-gray-100 hover:shadow focus:bg-gray-100 focus:ring-orange-600"
            >
              <ViewListIcon className="h-4 w-4" />
              My Orders
            </Link>
            <Link
              to=""
              className="btn btn-icon my-4 flex w-full gap-2  rounded-lg text-sm font-semibold text-blue-800 hover:bg-gray-100 hover:shadow focus:bg-gray-100 focus:ring-orange-600"
            >
              <PencilAltIcon className="h-4 w-4" />
              Edit Profile
            </Link>
            <Link
              to=""
              className="btn btn-icon my-4 flex w-full gap-2  rounded-lg text-sm font-semibold text-blue-800 hover:bg-gray-100 hover:shadow focus:bg-gray-100 focus:ring-orange-600"
            >
              <AdjustmentsIcon className="h-4 w-4" />
              Update Password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
