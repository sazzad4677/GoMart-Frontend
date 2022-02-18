import { CheckIcon, CogIcon, PencilAltIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AdjustmentsIcon, XIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "yup-phone";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePasswordSchema } from "../../Validation/UserFormValidation";

const UpdatePassword = ({ passwordFormSubmitHandler, requestLoading }) => {
  // Form Hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(updatePasswordSchema) });

  // for update button decision
  const watchAllFields = watch();

  // Error Message
  useEffect(() => {
    const errorFields = ["oldPassword", "newPassword", "confirmPassword"];
    if (errors) {
      errorFields.forEach((errorField) =>
        toast.error(errors[errorField]?.message)
      );
    }
  }, [errors]);

  return (
    <form
      className="font-display rounded-md bg-gray-100 shadow"
      onSubmit={handleSubmit(passwordFormSubmitHandler)}
    >
      <div className="mt-3 flex w-full items-center justify-between space-x-2 border-b-2 border-gray-200 bg-gray-100 p-3 font-semibold leading-8 text-gray-900 lg:mt-0">
        <div className="flex items-center gap-1">
          <span clas="text-green-500">
            <AdjustmentsIcon className="h-5 w-5" />
          </span>
          <span className="tracking-wide">Update Password</span>
        </div>
      </div>
      <div className="p-3 text-gray-700">
        <div className="grid gap-3 text-sm md:grid-cols-2">
          {/* Old Password */}
          <div className="grid grid-cols-2">
            <label htmlFor="name" className="px-4 py-2 font-semibold">
              Old Password
            </label>
            <input
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
                  ${
                    Object.keys(errors).length
                      ? "border-red focus:border-red"
                      : "border-skin-base"
                  }`}
              id="oldPassword"
              type="password"
              placeholder="Enter Your Old Password"
              {...register("oldPassword")}
            ></input>
          </div>
          {/* New Password */}
          <div className="grid grid-cols-2">
            <label htmlFor="name" className="px-4 py-2 font-semibold">
              New Password
            </label>
            <input
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base"
              }`}
              id="newPassword"
              type="password"
              placeholder="Enter Your New Password"
              {...register("newPassword")}
            ></input>
          </div>
          {/* To move the confirm password to the right, blank column on the right. */}
          <div className="grid grid-cols-2" />
          {/* Confirm Password */}
          <div className="grid grid-cols-2">
            <label htmlFor="name" className="px-4 py-2 font-semibold">
              Confirm Password
            </label>
            <input
              className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-1 focus:outline-none 
              ${
                Object.keys(errors).length
                  ? "border-red focus:border-red"
                  : "border-skin-base"
              }`}
              id="confirmPassword"
              type="password"
              placeholder="Confirm Your Password"
              {...register("confirmPassword")}
            ></input>
          </div>
        </div>
        {/* Update, cancel button, reset button */}
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
              disabled={requestLoading ? true : false}
            >
              {requestLoading ? (
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
                  Update Password
                </>
              )}
            </Link>
          )}
          <Link
            to="/profile"
            className="red-button flex gap-2 rounded-lg text-sm font-semibold shadow-green"
          >
            <XIcon className="hidden h-4 w-4 md:flex" />
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
};

export default UpdatePassword;
