import { CheckIcon, CogIcon, UserIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { XIcon } from "@heroicons/react/solid";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { toast } from "react-toastify";
import Autocomplete from "react-google-autocomplete";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateAboutFormSchema } from "../../Validation/UserFormValidation";
const UpdateAbout = ({
  user,
  profileFormSubmitHandler,
  birthDate,
  birthDateOnChange,
  loading,
}) => {
  const {
    name,
    username,
    email,
    gender,
    phone,
    shippingAddress,
    billingAddress,
  } = user;

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(updateAboutFormSchema) });

  // for update button decision
  const watchAllFields = watch();

  useEffect(() => {
    const errorFields = [
      "name",
      "username",
      "email",
      "gender",
      "phone",
      "shippingAddress",
      "billingAddress",
    ];
    if (errors) {
      errorFields.forEach((errorField) =>
        toast.error(errors[errorField]?.message)
      );
    }
  }, [errors]);
  return (
    <form
      className="font-display rounded-md bg-gray-100 shadow"
      onSubmit={handleSubmit(profileFormSubmitHandler)}
    >
      <div className="mt-3 flex w-full items-center justify-between space-x-2 border-b-2 border-gray-200 bg-gray-100 p-3 font-semibold leading-8 text-gray-900 lg:mt-0">
        <div className="flex items-center gap-1">
          <span clas="text-green-500">
            <UserIcon className="h-5 w-5" />
          </span>
          <span className="tracking-wide">Update About</span>
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
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
             ${
               Object.keys(errors).length
                 ? "border-red focus:border-red"
                 : "border-skin-base"
             }`}
              id="name"
              type="text"
              placeholder="Your Name"
              {...register("name", { min: 3, max: 255 })}
              defaultValue={name}
            ></input>
          </div>
          {/* Username */}
          <div className="grid grid-cols-2">
            <label htmlFor="username" className="px-4 py-2 font-semibold">
              Username
            </label>
            <input
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base"
              }`}
              id="username"
              type="text"
              placeholder="Your Username"
              {...register("username", { min: 3, max: 20 })}
              defaultValue={username}
            ></input>
          </div>
          {/* Email */}
          <div className="grid grid-cols-2">
            <label htmlFor="email" className="px-4 py-2 font-semibold">
              Email.
            </label>
            <input
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base"
              }`}
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email")}
              defaultValue={email}
            ></input>
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
              international={true}
              limitMaxLength={11}
              addInternationalOption={false}
              countryCallingCodeEditable={false}
              withCountryCallingCode
              id="phone"
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base"
              }`}
            />
          </div>
          {/* Gender */}
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Gender</div>
            <select
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base"
              }`}
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
          {/* BirthDay */}
          <div className="grid grid-cols-2">
            <label htmlFor="birthDate" className="px-4 py-2 font-semibold">
              Birthday
            </label>
            <div id="birthDate">
              <DatePicker
                className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
                ${
                  Object.keys(errors).length
                    ? "border-red focus:border-red"
                    : "border-skin-base"
                }`}
                portalId="root-portal"
                onChange={birthDateOnChange}
                selected={birthDate}
                closeOnScroll={true}
                maxDate={new Date()}
                openToDate={new Date("2007/01/01")}
                isClearable={false}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                timeCaption="time"
                dateFormat="dd/MM/yyyy"
                placeholderText="Click to select a date"
              />
            </div>
          </div>
          {/* Shipping Address */}
          <div className="grid grid-cols-2">
            <label
              htmlFor="shippingAddress"
              className="px-4 py-2 font-semibold"
            >
              Shipping Address
            </label>
            <Autocomplete
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base"
              }`}
              apiKey={"AIzaSyDMuTTurSbA7-GqIVOy80S6gOFHCv5xqB8"}
              onPlaceSelected={(place) => console.log(place)}
            />
            {/* <input
              className="rounded rounded-full border-b bg-transparent py-1 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-green"
              id="shippingAddress"
              type="text"
              placeholder="Your Shipping Address"
              {...register("shippingAddress")}
              defaultValue={shippingAddress}
            ></input> */}
          </div>
          {/* Billing Address */}
          <div className="grid grid-cols-2">
            <label htmlFor="billingAddress" className="px-4 py-2 font-semibold">
              Billing Address
            </label>
            <input
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base"
              }`}
              id="billingAddress"
              type="text"
              placeholder="Your billing address"
              {...register("billingAddress")}
              defaultValue={billingAddress}
            ></input>
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-3">
          <button
            type="reset"
            className="gray-button flex gap-2 rounded-lg text-sm font-semibold "
          >
            <CogIcon className="hidden h-4 w-4 md:flex" />
            Reset Changes
          </button>
          {Object.keys(watchAllFields).length > 0 && (
            <Link
              to="/update-profile"
              className="green-button flex gap-2 rounded-lg text-sm font-semibold"
              disabled={loading ? true : false}
            >
              {loading ? (
                <>
                  <span
                    class="spinner h-4 w-4"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span class="pl-1">Loading...</span>
                </>
              ) : (
                <>
                  <CheckIcon className="hidden h-4 w-4 md:flex" />
                  Update About
                </>
              )}
            </Link>
          )}
          <Link
            to="/profile"
            className="red-button flex gap-2 rounded-lg text-sm font-semibold "
          >
            <XIcon className="hidden h-4 w-4 md:flex" />
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
};

export default UpdateAbout;
