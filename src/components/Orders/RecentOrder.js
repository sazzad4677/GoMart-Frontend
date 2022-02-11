import { CollectionIcon, ViewListIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const RecentOrder = () => {
  return (
    <div>
      <div class="font-display -mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <div class="border-b-2 border-gray-200 bg-gray-100 p-3 shadow-sm ">
            <p class="flex items-center gap-2 space-x-2 font-semibold leading-8 text-gray-900">
              <ViewListIcon class="h-4 w-4" />
              Recent Order
            </p>
          </div>
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Order#
                </th>
                <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Placed On
                </th>
                <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Items
                </th>
                <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Total
                </th>
                <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Status
                </th>
                <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* Order id */}
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="flex items-center">
                    <p class="whitespace-no-wrap text-skin-secondary">
                      623432123034656
                    </p>
                  </div>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap text-gray-900">Jan 10, 2020</p>
                </td>
                {/* items */}
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="flex items-center gap-2">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-full w-full rounded-full"
                        src="https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38="
                        alt=""
                      />
                    </div>
                    <div>
                      <p class="whitespace-no-wrap text-skin-secondary text-gray-900">
                        Tomato
                      </p>
                    </div>
                  </div>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap text-gray-900">43</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden
                      class="absolute inset-0 rounded-full bg-green-200 opacity-50"
                    ></span>
                    <span class="relative">Delivered</span>
                  </span>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <Link to="#" class="text-blue-500">
                    Manage
                  </Link>
                </td>
              </tr>
              <tr>
                {/* Order id */}
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap text-skin-secondary text-gray-900">
                    623432123034656
                  </p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap text-gray-900">Jan 10, 2020</p>
                </td>
                {/* Items */}
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="flex items-center gap-2">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-full w-full rounded-full"
                        src="https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38="
                        alt=""
                      />
                    </div>
                    <div>
                      <p class="whitespace-no-wrap text-skin-secondary text-gray-900">
                        Tomato
                      </p>
                    </div>
                  </div>
                </td>
                {/* Price */}
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap text-gray-900">77</p>
                </td>
                {/* Status */}
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden
                      class="absolute inset-0 rounded-full bg-green-200 opacity-50"
                    ></span>
                    <span class="relative">Delivered</span>
                  </span>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <Link to="#" class="text-blue-500">
                    Manage
                  </Link>
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap text-skin-secondary text-gray-900">
                    623432123034656
                  </p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap text-gray-900">Jan 10, 2020</p>
                </td>
                {/* Items */}
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="flex items-center gap-2">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-full w-full rounded-full"
                        src="https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38="
                        alt=""
                      />
                    </div>
                    <div>
                      <p class="whitespace-no-wrap text-skin-secondary text-gray-900">
                        tomato
                      </p>
                    </div>
                  </div>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap text-gray-900">64</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-orange-900">
                    <span
                      aria-hidden
                      class="absolute inset-0 rounded-full bg-orange-200 opacity-50"
                    ></span>
                    <span class="relative">Suspended</span>
                  </span>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <Link to="#" class="text-blue-500">
                    Manage
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
