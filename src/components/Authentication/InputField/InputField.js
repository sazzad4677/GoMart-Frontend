import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { toast } from 'react-toastify';
const InputField = (props) => {
  const { name, type, label, labelFor, errors, register, identity, showPassword, setShowPassword } = props;
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
      <input
        name={name}
        className={`block w-full text-base px-4 py-2 border-b bg-transparent appearance-none focus:outline-none rounded-2xl 
                  ${errors ? "border-red focus:border-red" : "border-skin-base"
          }`}
        type={type}
        placeholder=" "
        autoComplete="off"
        // onPaste={handlePaste}
        {...register(name)}
      />
      <label
        htmlFor={labelFor}
        className="ml-3 text-sm font-body font-semibold text-skin-secondary tracking-wide absolute duration-300 top-3 -z-1 origin-0"
      >
        {label}
      </label>
      {
        (identity === "register" && name === "password") && <p className="px-3 text-xs text-gray-500" id="user_avatar_help"><span className="text-red">*</span>Password at least 6 characters long</p>
      }
      <div className="absolute right-3 -mt-8">
        {/* Error Icon */}
        {errors && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 crossmark"
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
