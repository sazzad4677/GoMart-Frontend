import React, { useEffect } from "react";
import { toast } from "react-toastify";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
const InputField = (props) => {
  const { name, type, label, labelFor, errors, register, identity, control } =
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
      {name !== "phone" && (
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
            // onPaste={handlePaste}
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
      {identity === "register" && name === "password" && (
        <p className="px-3 text-xs text-gray-500" id="user_avatar_help">
          <span className="text-red">*</span>Password at least 6 characters long
        </p>
      )}
      {identity === "register" && name === "phone" && (
        <PhoneInputWithCountry
          international
          name="phone"
          control={control}
          defaultCountry="BD"
          country="BD"
          id="phone"
          className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-2 text-base focus:outline-none 
          ${
            errors ? "border-red focus:border-red" : "border-skin-base"
          }`}
        />
      )}
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
