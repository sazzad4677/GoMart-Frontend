import { PencilAltIcon, UserIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfile = ({
  user,
  userAvatarPreview,
  submitHandler,
  handleProfileImageChange,
}) => {
  const { name, avatar, status, area, accountCreatedAt } = user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Form error notify
  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);

  return (
    <>
      <div className="font-display w-full md:mx-2 md:w-3/12">
        <div className="border-skin-base rounded-md border-t-4 bg-gray-100 p-3">
          <form
            className="image relative overflow-hidden"
            onSubmit={handleSubmit(submitHandler)}
          >
            {avatar && !userAvatarPreview ? (
              <img
                className="mx-auto h-56 w-56 rounded-full border"
                src={avatar?.url}
                alt=""
              />
            ) : avatar && userAvatarPreview ? (
              <img
                className="mx-auto h-56 w-56 rounded-full border"
                src={userAvatarPreview}
                alt=""
              />
            ) : (
              <UserIcon className="rounded-full  text-gray-300" />
            )}
            <label className="absolute top-0 right-0  m-2 rounded p-2 text-white opacity-20">
              <PencilAltIcon className="h-8 w-8 text-gray-700 hover:text-gray-800" />
              <input
                type="file"
                {...register("avatar", {
                  onChange: handleProfileImageChange,
                })}
                className="hidden"
                accept="image/*"
              ></input>
            </label>
          </form>
          <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
            {name}
          </h1>
          <div className="mt-6 flex justify-around text-center">
            {/* Total Orders */}
            <div>
              <p className="font-bold text-gray-700">20</p>
              <p className="font-hairline mt-2 text-xs text-gray-600">
                Total Orders
              </p>
            </div>
            {/* Reviews */}
            <div>
              <p className="font-bold text-gray-700">5</p>
              <p className="font-hairline mt-2 text-xs text-gray-600">
                Reviews
              </p>
            </div>
            {/* Returns */}
            <div>
              <p className="font-bold text-gray-700">2</p>
              <p className="font-hairline mt-2 text-xs text-gray-700">
                Returns
              </p>
            </div>
          </div>
          <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            {/* Status */}
            <li className="flex items-center py-3">
              <span>Status</span>
              <span className="ml-auto">
                <span
                  className={`${
                    status === "Active"
                      ? "bg-skin-primary"
                      : status === "Restricted" && "bg-red-600"
                  } rounded py-1 px-2 text-sm text-white`}
                >
                  {status}
                </span>
              </span>
            </li>
            {/* Area */}
            <li className="flex items-center justify-between py-3">
              <span>Area</span>
              <a
                href={`https://www.google.com/maps/place/?q=place_id:${area.placeId}`}
                className="ml-auto text-sky-700"
              >
                {area.areaName.split(", Bangladesh")}
              </a>
            </li>
            {/* Member since */}
            <li className="flex items-center py-3">
              <span>Member since</span>
              <span className="ml-auto">
                {`${accountCreatedAt?.split(" ")[1]} ${
                  accountCreatedAt?.split(" ")[2]
                } ${accountCreatedAt?.split(" ")[3]}`}
              </span>
            </li>
            {/* Last login */}
            <li className="flex items-center py-3">
              <span>Last Login</span>
              <span className="ml-auto">
                {user.lastLoginDate?.split("T")[0]}
              </span>
            </li>
            {/* Device */}
            <li className="flex items-center py-3">
              <span>Device</span>
              <span className="ml-auto">{user.device}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
