import React, { Fragment, useRef, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaFacebookF, FaTwitter, FaHeart, FaShareAlt } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
// Swiper Js import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/solid";
const ProductDetails = ({ product, loading }) => {
  const [counter, setCounter] = useState(1);
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
  return (
    <section class="font-display my-14 overflow-hidden bg-[#F3F4F6] text-gray-700">
      <div className="mx-auto bg-white px-4 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
        <div class="mx-auto p-5 lg:flex">
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            loop={false}
            grabCursor={true}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {product.images?.map((image) => (
              <SwiperSlide>
                <img
                  alt={image.url}
                  src="https://media.istockphoto.com/photos/groceries-picture-id171302954?k=20&m=171302954&s=612x612&w=0&h=kDpFXA8IoG22Uxog3YUmWvzBRzwyibd6r4S2v5z-Mno="
                  // src={image.url}
                  class=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 class="title-font text-sm tracking-widest text-gray-500">
              BRAND NAME
            </h2>
            <h1 class="title-font mb-1 text-3xl font-medium text-gray-900">
              The Catcher in the Rye
            </h1>
            <div class="mb-4 flex gap-6">
              <div class="flex items-center">
                <ReactStars
                  value={4.5}
                  count={5}
                  size={20}
                  isHalf={true}
                  edit={false}
                  activeColor="#40aa54"
                />
                <span class="ml-3 text-gray-600">4 Reviews</span>
              </div>
              <div class="flex items-center gap-6">
                <Menu as="div" className="relative ml-5 inline-block text-left">
                  <div>
                    <Menu.Button
                      title="Share"
                      class="bg-transparent text-gray-500 hover:text-gray-700"
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
            <p class="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div class="mt-6 mb-5 flex items-center justify-between border-b-2 border-gray-200 pb-5">
              <div class="flex items-center">
                <span class="mr-3">Quantity</span>
                <div className="flex items-center gap-2 rounded border">
                  <button
                    onClick={handleClickDecrement}
                    className="text-skin-primary w-8 rounded bg-gray-200 p-2 text-xl"
                  >
                    -
                  </button>
                  <p className="h-10 w-10 px-2 py-2 text-center text-lg">
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
              <div class="ml-6 flex items-center gap-2">
                <button className="white-button gap-3">
                  <ShoppingCartIcon className="h-5 w-5" />
                  Add to cart
                </button>
              </div>
            </div>
            <div class="flex justify-between">
              <span class="title-font text-2xl font-medium text-gray-900">
                $58.00
              </span>
              <div class="ml-6 flex items-center gap-2">
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
