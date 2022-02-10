import { PencilAltIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";

const Profile = () => {
  return (
    <div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
      <div class="container mx-auto my-5 p-5">
        <div class="no-wrap md:-mx-2 md:flex ">
          <div class="w-full md:mx-2 md:w-3/12">
            <div class="border-skin-base rounded-md border-t-4 bg-gray-100 p-3">
              <div class="image overflow-hidden rounded-full">
                <img
                  class="mx-auto h-auto w-full"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
              </div>
              <h1 class="my-1 text-xl font-bold leading-8 text-gray-900">
                Jane Doe
              </h1>
              <h3 class="font-lg text-semibold leading-6 text-gray-600">
                Owner at Her Company Inc.
              </h3>
              <p class="text-sm leading-6 text-gray-500 hover:text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto">
                    <span class="bg-skin-primary rounded py-1 px-2 text-sm text-white">
                      Active
                    </span>
                  </span>
                </li>
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mx-2 h-64 w-full md:w-9/12">
            <div class="rounded-md bg-gray-100 p-3 shadow-sm">
              <div class="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid text-sm md:grid-cols-2">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">Jane</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">Doe</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">Female</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">+11 998001001</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Current Address</div>
                    <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Permanant Address</div>
                    <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com">
                        jane@example.com
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Birthday</div>
                    <div class="px-4 py-2">Feb 06, 1998</div>
                  </div>
                </div>
                <div className="flex">
                  <button class="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                    Show Full Information
                  </button>
                  <button class="focus:shadow-outline my-4 block flex w-full items-center justify-center gap-2 rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 hover:shadow focus:bg-gray-100 focus:outline-none">
                    <PencilAltIcon className="h-6 w-6" />
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
