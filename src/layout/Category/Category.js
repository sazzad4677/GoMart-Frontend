import React from "react";
import "./style.css";
const Category = () => {
  return (
    <div className="font-body top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto px-4 py-2 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
        <div class="dropdown relative z-50 inline-block w-full">
          <button class="text-skin-primary inline-flex items-center rounded py-2 px-4 text-sm font-semibold">
            <span>Food</span>
          </button>
          <ul class="dropdown-content font-display text-skin-primary border-skin-base absolute hidden border-t-4 text-sm">
            <li class="dropdown ">
              <a
                class="block w-full bg-gray-200 py-2 px-4 hover:bg-gray-400"
                href="#"
              >
                Fruits & Vegetables
              </a>
              <ul class="dropdown-content absolute ml-24 -mt-10 hidden w-full pl-5 text-gray-700">
                <li>
                  <a
                    class="block w-full bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  >
                    Fresh Fruits
                  </a>
                  <ul>
                    <li>
                      <a
                        class="block w-full bg-gray-200 py-2 px-4 hover:bg-gray-400"
                        href="#"
                      >
                        Fresh Vegetables
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400"
                href="#"
              >
                Option 2
              </a>
            </li>
            <li class="dropdown">
              <a
                class="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400"
                href="#"
              >
                Option 3 🠞
              </a>
              <ul class="dropdown-content absolute ml-24 -mt-10 hidden pl-5 text-gray-700">
                <li>
                  <a
                    class="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  >
                    Option 3-1
                  </a>
                  <ul>
                    <li>
                      <a
                        class="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400"
                        href="#"
                      >
                        Option 3-2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    class="whitespace-no-wrap block rounded-b bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  >
                    Option 4
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
