import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Cart = ({
  cartOpen,
  setCartOpen,
  cartItems,
  handleClickIncrement,
  handleClickDecrement,
  removeCartItemHandler,
}) => {
  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={setCartOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-skin-primary text-lg font-medium">
                        Shopping cart
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="text-skin-secondary -m-2 p-2 hover:text-gray-500"
                          onClick={() => setCartOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        {cartItems.length > 0 ? (
                          <ul className="divide-gray-light -my-6 divide-y">
                            {cartItems.map((product, key) => (
                              <li key={key} className="flex py-6">
                                <Link
                                  to={`/products/${product.product}`}
                                  className="border-gray-light h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border"
                                >
                                  <img
                                    src={product.image}
                                    alt={product.image}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </Link>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div className="flex flex-col gap-2">
                                    <div className="text-gray flex justify-between text-base font-medium">
                                      <h3>
                                        <Link
                                          to={`/products/${product.product}`}
                                        >
                                          {product.name}
                                        </Link>
                                      </h3>
                                      <p className="ml-4">
                                        <span className="font-bold">৳</span>{" "}
                                        {(
                                          product.price * product.quantity
                                        ).toFixed(2)}
                                      </p>
                                    </div>
                                    <div className="text-gray-medium flex content-center justify-start text-sm">
                                      <button
                                        onClick={() =>
                                          handleClickDecrement(
                                            product.product,
                                            product.quantity
                                          )
                                        }
                                        className="bg-red w-8 rounded pb-1 text-xl font-bold text-white"
                                      >
                                        -
                                      </button>
                                      <input
                                        value={product.quantity}
                                        className="text-md w-20 self-center px-2 text-center focus:outline-0"
                                        readOnly
                                      />
                                      <button
                                        onClick={() =>
                                          handleClickIncrement(
                                            product.product,
                                            product.quantity,
                                            product.stock
                                          )
                                        }
                                        className="bg-skin-primary w-8 rounded pb-1 text-xl text-white"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p>
                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          removeCartItemHandler(product.product)
                                        }
                                        type="button"
                                        className="text-red font-medium"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-skin-secondary text-center text-xl">
                            Your Cart is Empty :(
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="text-skin-primary flex justify-between text-base font-medium">
                      <p>Subtotal</p>
                      <p>
                        <span className="font-bold">৳</span>
                        {cartItems
                          .reduce(
                            (acc, item) =>
                              acc + Number(item.quantity * item.price),
                            0
                          )
                          .toFixed(2)}
                      </p>
                    </div>
                    <p className="text-skin-secondary mt-0.5 text-sm">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a href="#" className="green-button h-full w-full">
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          className="text-skin-base hover:text-skin-hover-1 font-medium"
                          onClick={() => setCartOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
