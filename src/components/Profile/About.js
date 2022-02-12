import { UserIcon } from "@heroicons/react/outline";
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
      <div className="font-display rounded-md bg-gray-100 shadow">
        <div className="flex w-full items-center space-x-2 border-b-2 border-gray-200 bg-gray-100 p-3 font-semibold leading-8 text-gray-900 mt-3 lg:mt-0">
          <span clas="text-green-500">
            <UserIcon className="h-5 w-5"/>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="p-3 text-gray-700">
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
              <div className="px-2 py-2">
                {shippingAddress && shippingAddress}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Billing Address</div>
              <div className="px-2 py-2">
                {billingAddress && billingAddress}
              </div>
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
          <div className="mt-4 flex gap-3">
            <Link
              to=""
              className="green-button flex w-full gap-2  rounded-lg text-sm font-semibold "
            >
              <ViewListIcon className="h-4 w-4 hidden md:flex" />
              My Orders
            </Link>
            <Link
              to=""
              className="green-button flex w-full gap-2  rounded-lg text-sm font-semibold "
            >
              <PencilAltIcon className="h-4 w-4 hidden md:flex" />
              Edit Profile
            </Link>
            <Link
              to=""
              className="green-button flex w-full gap-2  rounded-lg text-sm font-semibold "
            >
              <AdjustmentsIcon className="h-4 w-4 hidden md:flex" />
              Update Password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
