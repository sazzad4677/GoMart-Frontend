import React, { Fragment, useRef, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaFacebookF, FaTwitter, FaHeart, FaShareAlt } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import "./styles.css";
// Swiper Js import
import {
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Scrollbar,
  Mousewheel,
} from "swiper";
import {
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
const ProductDetails = ({ product, loading }) => {
  const [counter, setCounter] = useState(1);
  const [descriptionShowMore, setDescriptionShowMore] = useState(false);
  // Function is called everytime increment button is clicked
  const handleClickIncrement = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClickDecrement = () => {
    // handle zero or negative decrement
    if (counter <= 1) {
      return setCounter(counter);
    }
    // Counter state is decremented
    setCounter(counter - 1);
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const {
    name,
    price,
    description,
    seller,
    ratings,
    reviews,
    category,
    stock,
    numOfReviews,
  } = product;
  const starObject = {
    value: product?.ratings,
    count: 5,
    size: 20,
    isHalf: true,
    edit: false,
    activeColor: "#40aa54",
  };
  const [mainPicture, setMainPicture] = useState(0);
  return (
    <section className="font-display my-10 overflow-hidden rounded-md text-gray-700">
      <div className="bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Product Picture container */}
          <div className="flex w-full flex-col items-center py-8 lg:w-1/2">
            {/* ::Main Picture */}
            <div className="h-56 max-h-96 w-auto overflow-hidden sm:h-72 lg:h-full">
              <img
                src={product.images && product.images[mainPicture].url}
                alt={product.images && product.images[mainPicture].url}
                className="h-full w-full object-contain"
              />
            </div>
            {/* ::Gallery */}
            <div className="mx-auto mt-6">
              <ul className="grid auto-cols-fr grid-flow-col gap-4">
                {product.images?.map((image, index) => (
                  <li
                    key={image?.url}
                    className={`col-span-1 w-16 rounded border-2 p-1 ${
                      index === mainPicture
                        ? "border-skin-base"
                        : "border-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      className="block h-full overflow-hidden rounded"
                      onClick={() => setMainPicture(index)}
                    >
                      <img
                        src={image.url}
                        alt={image.url}
                        className="object-contain"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Product Description Container*/}
          <div className="flex w-full flex-col border-gray-200 px-5 lg:w-1/2 lg:border-l-2 lg:py-8">
            <div>
              {/* Seller name on top */}
              <h2 className="title-font truncate text-ellipsis whitespace-nowrap pt-3 text-sm tracking-widest text-gray-500">
                {seller}
              </h2>
              {/* Product Name */}
              <h1 className="title-font mb-1 text-3xl font-medium text-gray-900 ">
                {name}
              </h1>
              <div className="mb-4 flex gap-6">
                {/* Product Review */}
                <div className="flex items-center">
                  <ReactStars {...starObject} />
                  <span className="ml-3 text-gray-600">
                    {numOfReviews} Reviews
                  </span>
                </div>
                {/* Share button dropdown */}
                <div className="flex items-center gap-6">
                  <Menu
                    as="div"
                    className="relative ml-5 inline-block text-left"
                  >
                    <div>
                      <Menu.Button
                        title="Share"
                        className="bg-transparent text-gray-500 hover:text-gray-700"
                      >
                        <FaShareAlt />
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
                      <Menu.Items className="w-15 absolute right-0 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://twitter.com"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-500 hover:text-blue-500",
                                  "block px-4 py-2 text-sm hover:text-blue-500"
                                )}
                              >
                                <FaTwitter />
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://facebook.com"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-500",
                                  "block px-4 py-2 text-sm hover:text-blue-500"
                                )}
                              >
                                <FaFacebookF />
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <p
                    className="hover:text-red mb-1 cursor-pointer"
                    title="Wishlist"
                  >
                    <FaHeart />
                  </p>
                </div>
              </div>
              {/* Product Details*/}
              <div
                className={`description h-72 ${
                  description?.length > 600 && "overflow-y-scroll"
                }`}
              >
                <p className="pr-5">
                  {descriptionShowMore
                    ? description
                    : `${description?.substring(0, 600)}`}
                  {description?.length > 600 && (
                    <button
                      onClick={() =>
                        setDescriptionShowMore(!descriptionShowMore)
                      }
                      className="w-full text-left"
                    >
                      {descriptionShowMore ? (
                        <span className="text-blue-600">Show less</span>
                      ) : (
                        <span className="text-blue-600">Show more</span>
                      )}
                    </button>
                  )}
                </p>
              </div>
            </div>
            {/* Increase or decrease button & cart button*/}
            <div className="mt-6 flex items-center justify-between border-b-2 border-gray-200 pb-5">
              <div className="flex items-center">
                <span className="mr-3">Quantity</span>
                <div className="flex items-center gap-2 rounded border">
                  <button
                    onClick={handleClickDecrement}
                    className="text-skin-primary w-8 rounded bg-gray-200 p-2 text-xl"
                  >
                    -
                  </button>
                  <p className="w-10 px-2 py-2 text-center text-lg">
                    {counter}
                  </p>
                  <button
                    onClick={handleClickIncrement}
                    className="text-skin-primary w-8 rounded bg-gray-200 p-2 text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* add to cart button */}
              <div className="ml-6 flex items-center gap-2">
                <button className="white-button gap-3">
                  <ShoppingCartIcon className="h-5 w-5" />
                  Add to cart
                </button>
              </div>
            </div>
            {/* Product price and buy now button */}
            <div className="flex justify-between py-5">
              <span className="title-font text-2xl font-medium text-gray-900">
                ৳{(price * counter).toFixed(2)}
              </span>
              <div className="ml-6 flex items-center gap-2">
                <button className="green-button gap-3">
                  <ShoppingBagIcon className="h-5 w-5" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
