import {
  PencilAltIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { ViewListIcon } from "@heroicons/react/solid";
import React from "react";
import RecentOrder from "../Orders/RecentOrder";

const Profile = ({ user }) => {
  const { name, username, email, avatar, status, accountCreatedAt } = user;
  return (
    <>
      {user && (
        <>
          <div class="font-display w-full md:mx-2 md:w-3/12">
            <div class="border-skin-base rounded-md border-t-4 bg-gray-100 p-3">
              <div class="image overflow-hidden ">
                {avatar ? (
                  <img
                    class="mx-auto h-56 w-56 rounded-full border"
                    src={avatar?.url}
                    alt=""
                  />
                ) : (
                  <UserIcon class="rounded-full  text-gray-300" />
                )}
              </div>
              <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">
                {name}
              </h1>
              <div class="mt-6 flex justify-around text-center">
                <div>
                  <p class="font-bold text-gray-700">20</p>
                  <p class="font-hairline mt-2 text-xs text-gray-600">
                    Total Orders
                  </p>
                </div>
                <div>
                  <p class="font-bold text-gray-700">5</p>
                  <p class="font-hairline mt-2 text-xs text-gray-600">
                    Reviews
                  </p>
                </div>
                <div>
                  <p class="font-bold text-gray-700">2</p>
                  <p class="font-hairline mt-2 text-xs text-gray-700">
                    Returns
                  </p>
                </div>
              </div>
              <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto">
                    <span
                      class={`${
                        status === "Active"
                          ? "bg-skin-primary"
                          : status === "Restricted" && "bg-red-600"
                      } rounded py-1 px-2 text-sm text-white`}
                    >
                      {status}
                    </span>
                  </span>
                </li>
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">
                    {`${accountCreatedAt?.split(" ")[1]} ${
                      accountCreatedAt?.split(" ")[2]
                    } ${accountCreatedAt?.split(" ")[3]}`}
                  </span>
                </li>
                <li class="flex items-center py-3">
                  <span>Last Login</span>
                  <span class="ml-auto">{`${"Feb 13 2022"}`}</span>
                </li>
                <li class="flex items-center py-3">
                  <span>Device</span>
                  <span class="ml-auto">{`${"Chrome"}`}</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
