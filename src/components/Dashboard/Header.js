import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, ChatAltIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-skin-scheme-color">
      {() => (
        <>
          <div className="relative  flex items-center justify-end h-16">
            <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative bg-skin-scheme-color p-1 rounded-full text-skin-base focus:outline-none focus:ring-0"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon
                  className="h-6 w-6 hover:fill-green"
                  aria-hidden="true"
                />
                <span className="flex absolute -mt-6 ml-3">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-skin-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-skin-primary"></span>
                </span>
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-skin-secondary flex text-sm rounded-full border border-skin-base focus:outline-none  focus:ring-0">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-skin-primary"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-skin-primary"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-skin-primary"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                type="button"
                className="relative ml-6 h-16 px-4 bg-skin-primary text-white focus:outline-none focus:ring-0"
              >
                <span className="sr-only">View Chat</span>
                <ChatAltIcon className="h-6 w-6 " />
                <span className="flex absolute -mt-6 ml-4">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-skin-secondary"></span>
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
