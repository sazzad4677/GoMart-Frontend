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
    gender,
    phone,
    shippingAddress,
    billingAddress,
    birthDay,
    area,
  } = user;

  const fieldValues = [
    { fieldName: "Name", value: name && name },
    { fieldName: "Username", value: username && username },
    { fieldName: "Email", value: email && email },
    {
      fieldName: "Contact No.",
      value: phone === "undefined" || phone === "null" ? "" : phone,
    },
    { fieldName: "Gender.", value: gender && gender },
    { fieldName: "Birthday", value: birthDay && birthDay },
    {
      fieldName: "Shipping Address",
      value:
        shippingAddress === "undefined" || shippingAddress === "null"
          ? ""
          : shippingAddress,
    },
    {
      fieldName: "Billing Address",
      value:
        billingAddress === "undefined" || billingAddress === "null"
          ? ""
          : billingAddress,
    },
  ];

  return (
    <div className="font-display rounded-md bg-gray-100 shadow">
      <div className="mt-3 flex w-full items-center space-x-2 border-b-2 border-gray-200 bg-gray-100 p-3 font-semibold leading-8 text-gray-900 lg:mt-0">
        <div className="flex items-center gap-1">
          <span clas="text-green-500">
            <UserIcon className="h-5 w-5" />
          </span>
          <span className="tracking-wide">About</span>
        </div>
      </div>
      <div className="p-3 text-gray-700">
        <div className="grid text-sm md:grid-cols-2 ">
          {fieldValues.map(({ fieldName, value }, key) => (
            <div className="grid grid-cols-2" key={key}>
              <div className="px-4 py-2 font-semibold">{fieldName}</div>
              <div className="overflow-hidden truncate text-ellipsis whitespace-nowrap px-2 py-2">
                {value}
              </div>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="mt-4 flex justify-end gap-3">
          <Link
            to=""
            className="white-button flex gap-2 rounded-lg text-sm font-semibold "
          >
            <ViewListIcon className="hidden h-4 w-4 md:flex" />
            My Orders
          </Link>
          <Link
            to="/update-profile"
            className="white-button flex gap-2 rounded-lg text-sm font-semibold "
          >
            <PencilAltIcon className="hidden h-4 w-4 md:flex" />
            Edit Profile
          </Link>
          <Link
            to="/update-profile"
            className="white-button flex gap-2 rounded-lg text-sm font-semibold "
          >
            <AdjustmentsIcon className="hidden h-4 w-4 md:flex" />
            Update Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
