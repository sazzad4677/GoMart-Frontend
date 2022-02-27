import { CheckIcon, CogIcon, UserIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { XIcon } from "@heroicons/react/solid";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { toast } from "react-toastify";
import Autocomplete from "react-google-autocomplete";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateAboutFormSchema } from "../../Validation/UserFormValidation";
import InputField from "./InputField";
const UpdateAbout = ({
  user,
  profileFormSubmitHandler,
  birthDate,
  birthDateOnChange,
  loading,
  setPlace,
}) => {
  // User value destructuring
  const {
    name,
    username,
    email,
    gender,
    phone,
    address,
    city,
    postalCode,
    area,
  } = user;

  const cityName = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Sylhet",
    "Rajshahi",
    "Mymensingh",
    "Barisal",
    "Rangpur",
    "Comilla",
    "Narayanganj",
    "Gazipur",
  ];

  // Get user location
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus({ error: "Geolocation is not supported by your browser" });
    } else {
      setStatus({ loading: "Getting the location" });
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus({ error: "Unable to retrieve your location" });
        }
      );
    }
  };

  // Use hook form
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(updateAboutFormSchema) });

  // for update button decision
  const watchAllFields = watch();

  // error notify
  useEffect(() => {
    const errorFields = [
      "name",
      "username",
      "email",
      "gender",
      "phone",
      "address",
      "city",
      "postalCode",
    ];
    if (errors) {
      errorFields.forEach((errorField) =>
        toast.error(errors[errorField]?.message)
      );
    }
    if (status) {
      if (status.error) {
        toast.error(status.error);
      }
      if (status.loading) {
        toast.info(status.loading);
      }
    }
  }, [errors, status]);

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
          <InputField
            id="name"
            type="text"
            name="name"
            defaultValue={name}
            register={register}
            errors={errors}
          ></InputField>
          {/* Username */}
          <InputField
            id="username"
            type="text"
            name="Username"
            defaultValue={username}
            register={register}
            errors={errors}
          ></InputField>
          {/* Email */}
          <InputField
            id="email"
            type="email"
            name="email"
            defaultValue={email}
            register={register}
            errors={errors}
          ></InputField>
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
              className={`block w-full appearance-none rounded-2xl border-0 border-b border-t-0 bg-transparent px-4 py-1 focus:ring-0 text-base
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base focus:border-skin-base"
              }`}
            />
          </div>
          {/* Gender */}
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Gender</div>
            <select
              className={`block w-full appearance-none rounded-2xl border-0 border-b border-t-0 bg-transparent px-4 py-2 text-base focus:ring-0 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base focus:border-skin-base"
              }`}
              id="gender"
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
                className={`block w-full appearance-none rounded-2xl border-0 border-b border-t-0 bg-transparent px-4 py-2 text-base focus:ring-0 
                ${
                  Object.keys(errors).length
                    ? "border-red focus:border-red"
                    : "border-skin-base focus:border-skin-base"
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
          {/* Address */}
          <InputField
            id="address"
            type="text"
            name="address"
            errors={errors}
            register={register}
            defaultValue={address}
          ></InputField>
          {/* Area Name */}
          <div className="grid grid-cols-2">
            <label htmlFor="area" className="px-4 py-2 font-semibold">
              Area Name
            </label>
            <Autocomplete
              id="area"
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base focus:border-skin-base"
              }`}
              apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
              onPlaceSelected={(place) => {
                setPlace(place);
              }}
              options={{
                types: ["(regions)"],
                componentRestrictions: { country: "bd" },
              }}
              defaultValue={
                area.areaName === "undefined" || area.areaName === "null"
                  ? ""
                  : area.areaName
              }
            />
          </div>
          {/* City */}
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Select City</div>
            <select
              className={`block w-full appearance-none rounded-2xl border-0 border-b border-t-0 bg-transparent px-4 py-2 text-sm focus:ring-0 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base focus:border-skin-base"
              }`}
              id="city"
              // defaultValue={gender && gender}
              {...register("city")}
              defaultValue={city && city}
            >
              <option value="">Click to select City</option>
              {cityName.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
          {/* Postal Code */}
          <InputField
            id="postalCode"
            type="text"
            name="Postal Code"
            defaultValue={postalCode}
            register={register}
            errors={errors}
          ></InputField>
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
            <button
              type="submit"
              className="green-button flex gap-2 rounded-lg text-sm font-semibold"
              disabled={loading ? true : false}
            >
              {loading ? (
                <>
                  <span
                    className="spinner h-4 w-4"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="pl-1">Loading...</span>
                </>
              ) : (
                <>
                  <CheckIcon className="hidden h-4 w-4 md:flex" />
                  Update About
                </>
              )}
            </button>
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
