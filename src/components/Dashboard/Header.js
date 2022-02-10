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
          <div className="relative  flex h-16 items-center justify-end">
            <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="bg-skin-scheme-color text-skin-base relative rounded-full p-1 focus:outline-none focus:ring-0"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon
                  className="hover:fill-green h-6 w-6"
                  aria-hidden="true"
                />
                <span className="absolute -mt-6 ml-3 flex">
                  <span className="bg-skin-primary absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75"></span>
                  <span className="bg-skin-primary relative inline-flex h-2 w-2 rounded-full"></span>
                </span>
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="bg-skin-secondary border-skin-base flex rounded-full border text-sm focus:outline-none  focus:ring-0">
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
                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "text-skin-primary block px-4 py-2 text-sm"
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
                            "text-skin-primary block px-4 py-2 text-sm"
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
                            "text-skin-primary block px-4 py-2 text-sm"
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
                className="bg-skin-primary relative ml-6 h-16 px-4 text-white focus:outline-none focus:ring-0"
              >
                <span className="sr-only">View Chat</span>
                <ChatAltIcon className="h-6 w-6 " />
                <span className="absolute -mt-6 ml-4 flex">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="bg-skin-secondary relative inline-flex h-2 w-2 rounded-full"></span>
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
