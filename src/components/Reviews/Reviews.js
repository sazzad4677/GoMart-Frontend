import React from "react";
import ReactStars from "react-rating-stars-component";
import { StarIcon } from "@heroicons/react/solid";

const Reviews = () => {
  const firstExample = {
    size: 50,
    value: 4.7,
    edit: false,
    activeColor: "#FACA51",
    isHalf: true,
  };
  return (
    <>
      <div className="mx-auto my-6 bg-white sm:max-w-xl md:max-w-full md:px-4 md:px-20 lg:max-w-screen-xl lg:px-0">
        <p class="font-display truncate text-ellipsis whitespace-nowrap bg-gray-200 px-5 py-4 font-medium leading-10">
          Ratings & Reviews of i7s Double Dual Mini Wireless 4.1 Bluetooth
          Earphone With Power Case HBQ i7s TWS Earbuds i7s TWS Headp
        </p>
        <div class="md:flex md:gap-20">
          <div class="flex flex-col content-center px-4 py-3 leading-snug">
            <h1 class="font-display text-5xl">4.7/5</h1>
            <ReactStars
              value={4.5}
              count={5}
              size={45}
              isHalf={true}
              edit={false}
            />
            <p className="text-skin-secondary text-sm">42 Ratings</p>
          </div>
          <div class="my-0 mb-1 rounded-lg bg-white px-4 py-1 tracking-wide lg:w-1/4">
            <div class="-mx-8 px-8">
              <div class="flex items-center justify-center leading-8">
                <div class="w-full tracking-tighter text-indigo-500">
                  <ReactStars value={5} count={5} size={24} isHalf={true} />
                </div>
                <div class="w-full">
                  <div class="h-2 w-full bg-gray-300">
                    <div class=" h-2 w-7/12 bg-[#FACA51]"></div>
                  </div>
                </div>
                <div class="text-skin-primary w-1/5 pl-3">
                  <span class="text-sm">51%</span>
                </div>
              </div>
              <div class="flex items-center leading-8">
                <div class="w-full tracking-tighter">
                  <ReactStars
                    value={4}
                    count={5}
                    size={24}
                    isHalf={true}
                    activeColor="#FACA51"
                  />
                </div>
                <div class="w-full">
                  <div class="h-2 w-full bg-gray-300">
                    <div class=" h-2 w-7/12 bg-[#FACA51]"></div>
                  </div>
                </div>
                <div class="w-1/5 pl-3 text-gray-700">
                  <span class="text-sm">17%</span>
                </div>
              </div>
              <div class="flex items-center justify-center leading-8">
                <div class="w-full tracking-tighter text-indigo-500">
                  <ReactStars
                    value={3}
                    count={5}
                    size={24}
                    isHalf={true}
                    activeColor="#FACA51"
                  />
                </div>
                <div class="w-full">
                  <div class="h-2 w-full bg-gray-300">
                    <div class=" h-2 w-7/12 bg-[#FACA51]"></div>
                  </div>
                </div>
                <div class="w-1/5 pl-3 text-gray-700">
                  <span class="text-sm">17%</span>
                </div>
              </div>
              <div class="flex items-center justify-center leading-8">
                <div class="w-full tracking-tighter text-indigo-500">
                  <ReactStars
                    value={2}
                    count={5}
                    size={24}
                    isHalf={true}
                    activeColor="#FACA51"
                  />
                </div>
                <div class="w-full">
                  <div class="h-2 w-full  bg-gray-300">
                    <div class=" h-2 w-7/12 bg-[#FACA51]"></div>
                  </div>
                </div>
                <div class="w-1/5 pl-3 text-gray-700">
                  <span class="text-sm">17%</span>
                </div>
              </div>
              <div class="flex items-center justify-center leading-8">
                <div class="w-full tracking-tighter text-indigo-500">
                  <ReactStars
                    value={1}
                    count={5}
                    size={24}
                    isHalf={true}
                    activeColor="#FACA51"
                  />
                </div>
                <div class="w-full">
                  <div class="h-2 w-full bg-gray-300">
                    <div class="h-2 w-7/12 bg-[#FACA51]"></div>
                  </div>
                </div>
                <div class="w-1/5 pl-3 text-gray-700">
                  <span class="text-sm">17%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-skin-secondary border-t border-b p-4">
            Product Reviews
          </p>
          <div class="flex items-start p-6">
            <div class="flex-shrink-0">
              <div class="relative inline-block">
                <div class="relative h-16 w-16 overflow-hidden rounded-full">
                  <img
                    class="object-fit absolute top-0 left-0 h-full w-full bg-cover object-cover"
                    src="https://picsum.photos/id/646/200/200"
                    alt="Profile picture"
                  />
                  <div class="absolute top-0 left-0 h-full w-full rounded-full shadow-inner"></div>
                </div>
                <svg
                  class="absolute bottom-0 right-0 -mx-1 -my-1 h-6 w-6 rounded-full bg-green-600 fill-current p-1 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                </svg>
              </div>
            </div>
            <div class="ml-6">
              <p class="flex items-baseline">
                <span class="font-bold text-gray-600">Mary T.</span>
                <span class="ml-2 text-xs text-green-600">Verified Buyer</span>
              </p>
              <div class="mt-1 flex items-center">
                <svg
                  class="h-4 w-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  class="h-4 w-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  class="h-4 w-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  class="h-4 w-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  class="h-4 w-4 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <div class="mt-3">
                <span class="font-bold">Sapien consequat eleifend!</span>
                <p class="mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div class="mt-4 flex items-center justify-end fill-current text-sm text-gray-600">
                <div class="flex items-center">
                  <span>Was this review helplful?</span>
                  <button class="ml-6 flex items-center">
                    <svg
                      class="h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                    </svg>
                    <span class="ml-2">56</span>
                  </button>
                  <button class="ml-4 flex items-center">
                    <svg
                      class="h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                    </svg>
                    <span class="ml-2">10</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
