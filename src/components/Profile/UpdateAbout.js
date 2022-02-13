import {
  AdjustmentsIcon,
  PencilAltIcon,
  UserIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";

const UpdateAbout = ({ user, submitHandler }) => {
  const [value, onChange] = useState(new Date());
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="font-display rounded-md bg-gray-100 shadow">
      <div className="mt-3 flex w-full items-center space-x-2 border-b-2 border-gray-200 bg-gray-100 p-3 font-semibold leading-8 text-gray-900 lg:mt-0">
        <span clas="text-green-500">
          <UserIcon className="h-5 w-5" />
        </span>
        <span className="tracking-wide">About</span>
      </div>
      <form className="p-3 text-gray-700" onSubmit={handleSubmit(submitHandler)}>
        <div className="grid text-sm md:grid-cols-2">
          <label className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Name</div>
            <input
              class="rounded bg-transparent py-1 px-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
              id="name"
              type="text"
              placeholder="Your Name"
              {...register("name")}
              defaultValue={user.name}
            ></input>
          </label>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Username</div>
            <input
              class="rounded bg-transparent py-1 px-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
              id="username"
              type="text"
              placeholder="Your Username"
              {...register("username")}
              defaultValue={user.username}
            ></input>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Gender</div>
            <select
              class="rounded bg-transparent py-1 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
              id="username"
              type="text"
              placeholder="Your Gender"
              {...register("gender")}
            >
              <option value=""></option>
              <option value="male" selected>Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Contact No.</div>
            <input
              class="rounded bg-transparent py-1 px-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
              id="username"
              type="number"
              placeholder="Your number"
              {...register("phone")}
              defaultValue={user.phone}
            ></input>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold"> Shipping Address</div>
            <input
              class="rounded bg-transparent py-1 px-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
              id="shippingAddress"
              type="text"
              placeholder="Your Shipping Address"
              {...register("ShippingAddress")}
              defaultValue={user.shippingAddress}
            ></input>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Billing Address</div>
            <input
              class="rounded bg-transparent py-1 px-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
              id="billingAddress"
              type="text"
              placeholder="Your billing address"
              {...register("BillingAddress")}
              defaultValue={user.billingAddress}
            ></input>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Email.</div>
            <div className="-px-1 py-2">
              <input
                class="rounded bg-transparent py-1 px-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
                id="email"
                type="email"
                placeholder="Your email"
                {...register("email")}
                defaultValue={user.email}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Birthday</div>
            <DatePicker
              className="rounded bg-transparent py-1 px-2 text-gray-700 ring-0 focus:outline-none focus:ring-1 focus:ring-green-500"
              onChange={onChange}
              value={value}
              {...register("date")}
            />
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <Link
            to=""
            className="green-button flex w-full gap-2  rounded-lg text-sm font-semibold "
          >
            <ViewListIcon className="hidden h-4 w-4 md:flex" />
            My Orders
          </Link>
          <button type="submit"
            to="/update-profile"
            className="green-button flex w-full gap-2  rounded-lg text-sm font-semibold "
          >
            <PencilAltIcon className="hidden h-4 w-4 md:flex" />
            Edit Profile
          </button>
          <Link
            to=""
            className="green-button flex w-full gap-2  rounded-lg text-sm font-semibold "
          >
            <AdjustmentsIcon className="hidden h-4 w-4 md:flex" />
            Update Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateAbout;
