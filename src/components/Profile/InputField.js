import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const InputField = (props) => {
    const {
        name,
        type,
        label,
        labelFor,
        errors,
        register,
        identity,
        showPassword,
        setShowPassword,
      } = props;
      useEffect(() => {
        if (errors) {
          toast.error(errors);
        }
      }, [errors]);
    return (
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
      {identity === "register" && name === "password" && (
        <p className="px-3 text-xs text-gray-500" id="user_avatar_help">
          <span className="text-red">*</span>Password at least 6 characters long
        </p>
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