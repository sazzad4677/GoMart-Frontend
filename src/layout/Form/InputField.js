import React, { useEffect } from "react";
import { toast } from "react-toastify";
const InputField = (props) => {
  const { id, name, type, label, labelFor, register, errors, autoComplete } =
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
      {
        <>
          <input
            name={name}
            className={`border-skin-base block w-full appearance-none rounded-2xl border-0 border-b border-t-0 bg-transparent px-4 py-2 text-base focus:ring-0
            ${
              errors
                ? "border-red focus:border-red"
                : "border-skin-base focus:border-skin-base"
            }`}
            type={type}
            placeholder=" "
            autoComplete={autoComplete}
            onPaste={handlePaste}
            {...register(id)}
          />
          <label
            htmlFor={labelFor}
            className="font-body text-skin-secondary -z-1 origin-0 absolute top-3 ml-3 text-sm font-semibold tracking-wide duration-300"
          >
            {label}
          </label>
        </>
      }
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
