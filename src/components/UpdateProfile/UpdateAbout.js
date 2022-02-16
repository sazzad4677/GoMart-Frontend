import { CheckIcon, UserIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import {  useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { XIcon } from "@heroicons/react/solid";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { isValidPhoneNumber } from 'react-phone-number-input'
import { toast } from "react-toastify";
const UpdateAbout = ({
  user,
  submitHandler,
  birthDate,
  birthDateOnChange,
  setConfirmModal,
}) => {
  const { name, username, email, gender, phone, shippingAddress, billingAddress } =
    user;
    const {
      register,
      handleSubmit,
      control,
      watch,
      formState: { errors },
    } = useForm();

  // for update button decision
  const watchAllFields = watch();

  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);
  return (
    <form
      className="font-display rounded-md bg-gray-100 shadow"
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="mt-3 flex w-full items-center justify-between space-x-2 border-b-2 border-gray-200 bg-gray-100 p-3 font-semibold leading-8 text-gray-900 lg:mt-0">
        <div className="flex items-center gap-1">
          <span clas="text-green-500">
            <UserIcon className="h-5 w-5" />
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="flex gap-3">
          {Object.keys(watchAllFields).length > 0 && (
            <button
              type="submit"
              to="/update-profile"
              className="green-button w- flex gap-2  rounded-lg text-sm font-semibold"
            >
              <CheckIcon className="hidden h-4 w-4 md:flex" />
            </button>
          )}
          <Link
            to="/profile"
            className="red-button w- flex gap-2  rounded-lg text-sm font-semibold "
          >
            <XIcon className="hidden h-4 w-4 md:flex" />
          </Link>
        </div>
      </div>
      <div className="p-3 text-gray-700">
        <div className="grid gap-3 text-sm md:grid-cols-2">
          {/* Name */}
          <div className="grid grid-cols-2">
            <label htmlFor="name" className="px-4 py-2 font-semibold">
              Name
            </label>
            <input
              className="rounded rounded-full border-b bg-transparent py-1 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              id="name"
              type="text"
              placeholder="Your Name"
              {...register("name",{min: 3, max: 255,})}
              defaultValue={name}
            ></input>
          </div>
          {/* Username */}
          <div className="grid grid-cols-2">
            <label htmlFor="username" className="px-4 py-2 font-semibold">
              Username
            </label>
            <input
              className="rounded rounded-full border-b bg-transparent py-1 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              id="username"
              type="text"
              placeholder="Your Username"
              {...register("username", {min: 3, max: 20})}
              defaultValue={username}
            ></input>
          </div>
          {/* Gender */}
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Gender</div>
            <select
              className="rounded rounded-full border-b bg-transparent py-1 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              id="username"
              type="text"
              placeholder="Your Gender"
              defaultValue={gender && gender}
              {...register("gender")}
            >
              <option value="">Click to select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* Contact No. */}
          <div className="grid grid-cols-2">
            <label htmlFor="phone" className="px-4 py-2 font-semibold">
              Contact No.
            </label>
            <PhoneInputWithCountry
              name="phone"
              control={control}
              defaultValue={phone && phone}
              defaultCountry={"BD"}
              countries={["BD"]}
              // countrySelectComponent={"disabled"}
              international={true}
              limitMaxLength={11}
              addInternationalOption = {false}
              countryCallingCodeEditable={false}
              withCountryCallingCode
              id="phone"
              className="phone grid-col-2 grid rounded rounded-full bg-gray-100 py-1 px-4 text-gray-700 shadow-sm"
            />
          </div>
          {/* Shipping Address */}
          <div className="grid grid-cols-2">
            <label
              htmlFor="shippingAddress"
              className="px-4 py-2 font-semibold"
            >
              Shipping Address
            </label>
            <input
              className="rounded rounded-full border-b bg-transparent py-1 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              id="shippingAddress"
              type="text"
              placeholder="Your Shipping Address"
              {...register("shippingAddress")}
              defaultValue={shippingAddress}
            ></input>
          </div>
          {/* Billing Address */}
          <div className="grid grid-cols-2">
            <label htmlFor="billingAddress" className="px-4 py-2 font-semibold">
              Billing Address
            </label>
            <input
              className="rounded rounded-full border-b bg-transparent py-1 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              id="billingAddress"
              type="text"
              placeholder="Your billing address"
              {...register("billingAddress")}
              defaultValue={billingAddress}
            ></input>
          </div>
          {/* Email */}
          <div className="grid grid-cols-2">
            <label htmlFor="email" className="px-4 py-2 font-semibold">
              Email.
            </label>
            <input
              className="rounded rounded-full border-b bg-transparent py-1 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email")}
              defaultValue={email}
            ></input>
          </div>
          {/* BirthDay */}
          <div className="grid grid-cols-2">
            <label htmlFor="birthDate" className="px-4 py-2 font-semibold">
              Birthday
            </label>
            <div id="birthDate" onChange={() => setConfirmModal(true)}>
              <DatePicker
                className="rounded rounded-full border-b bg-transparent py-1 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                onChange={birthDateOnChange}
                selected={birthDate}
                closeOnScroll={true}
                maxDate={new Date()}
                openToDate={new Date("2007/01/01")}
                isClearable
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                timeCaption="time"
                dateFormat="dd/MM/yyyy"
                placeholderText="Click to select a date"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateAbout;
