import React, { useEffect } from "react";
import { toast } from "react-toastify";

const SelectField = ({ register, data, registerAs, errors }) => {
  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);
  return (
    <>
      <select
        {...register(registerAs)}
        className={` mt-1 block w-full rounded-2xl rounded-md border-0 border-b  bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-0 focus:ring-0 sm:text-sm border-red focus:border-red
        ${
          errors
            ? "border-red focus:border-red"
            : "border-skin-base focus:border-skin-base"
        }`}
      >
        {data.map(({ value, id, text }, key) => (
          <option key={key} value={value}>
            {text}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectField;
