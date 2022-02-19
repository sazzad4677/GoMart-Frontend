import React, { useEffect } from "react";
import { toast } from "react-toastify";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import ReactGoogleAutocomplete from "react-google-autocomplete";
const InputField = (props) => {
  const { name, type, label, labelFor, errors, register, identity, control, setPlace } =
    props;

  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);

  const handlePaste = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {name !== "phone" && name !== "area" && (
        <>
          <input
            name={name}
            className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-2 text-base focus:outline-none 
                  ${
                    errors ? "border-red focus:border-red" : "border-skin-base"
                  }`}
            type={type}
            placeholder=" "
            autoComplete="off"
            onPaste={handlePaste}
            {...register(name)}
          />
          <label
            htmlFor={labelFor}
            className="font-body text-skin-secondary -z-1 origin-0 absolute top-3 ml-3 text-sm font-semibold tracking-wide duration-300"
          >
            {label}
          </label>
        </>
      )}
      {identity === "register" && name === "phone" && (
        <PhoneInputWithCountry
          name="phone"
          control={control}
          defaultCountry={"BD"}
          countries={["BD"]}
          country="BD"
          id="phone"
          international={true}
          limitMaxLength={11}
          addInternationalOption={false}
          countryCallingCodeEditable={false}
          withCountryCallingCode
          className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-2 text-base focus:outline-none 
          ${errors ? "border-red focus:border-red" : "border-skin-base"}`}
        />
      )}
      {/* {identity === "register" && name === "area" && (
        <>
          <ReactGoogleAutocomplete
            id="area"
            className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-2 text-base focus:outline-none 
          ${errors ? "border-red focus:border-red" : "border-skin-base"}`}
            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            onPlaceSelected={(place) => {
              setPlace(place);
            }}
            options={{
              types: ["(regions)"],
              componentRestrictions: { country: "bd" },
            }}
            autoComplete={false}
            placeholder=" "
          />
          <label
            htmlFor={labelFor}
            className="font-body text-skin-secondary -z-1 origin-0 absolute top-3 ml-3 text-sm font-semibold tracking-wide duration-300"
          >
            {label}
          </label>
        </>
      )} */}
      <div className="absolute right-3 -mt-8">
        {/* Error Icon */}
        {errors && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="crossmark h-6 w-6"
            viewBox="0 0 52 52"
          >
            <circle
              className="crossmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="crossmark__check"
              fill="none"
              d="M16 16 36 36 M36 16 16 36"
            />
          </svg>
        )}
      </div>
    </>
  );
};

export default InputField;
