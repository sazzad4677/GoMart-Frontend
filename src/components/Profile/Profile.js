import { UserIcon } from "@heroicons/react/solid";
import React from "react";

const Profile = ({ user }) => {
  const { name, avatar, status, accountCreatedAt, area } = user;
  return (
    <>
      {user && (
        <div className="font-display w-full md:mx-2 md:w-3/12">
          <div className="border-skin-base rounded-md border-t-4 border-b-4 bg-gray-100 p-3">
            <div className="image overflow-hidden">
              {avatar ? (
                <img
                  className="mx-auto h-56 w-56 rounded-full border"
                  src={avatar?.url}
                  alt=""
                />
              ) : (
                <UserIcon className="rounded-full  text-gray-300" />
              )}
            </div>
            <h1 className="my-1 overflow-hidden truncate whitespace-nowrap text-center text-xl font-bold leading-8 text-gray-900">
              {name}
            </h1>
            <div className="mt-6 flex justify-around text-center">
              <div>
                <p className="font-bold text-gray-700">20</p>
                <p className="font-hairline mt-2 text-xs text-gray-600">
                  Total Orders
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-700">5</p>
                <p className="font-hairline mt-2 text-xs text-gray-600">
                  Reviews
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-700">2</p>
                <p className="font-hairline mt-2 text-xs text-gray-700">
                  Returns
                </p>
              </div>
            </div>
            <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
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
              <li className="flex items-center py-3">
                <span>Area Name</span>
                <a href={`https://www.google.com/maps/place/?q=place_id:${area.placeId}`} className="ml-auto text-sky-700">
                  {area.areaName  === "undefined" || area.areaName ==="null" ? "" :area?.areaName.split(", Bangladesh")}
                </a>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">
                  {`${accountCreatedAt?.split(" ")[1]} ${
                    accountCreatedAt?.split(" ")[2]
                  } ${accountCreatedAt?.split(" ")[3]}`}
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Last Login</span>
                <span className="ml-auto">
                  {user.lastLoginDate?.split("T")[0]}
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Device</span>
                <span className="ml-auto">{user.device}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
