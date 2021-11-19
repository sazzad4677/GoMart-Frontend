import React, { useEffect, useState, useRef } from "react";
// icons import
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/solid";
// Products
import ProductCard from "./ProductCard";
import Products from "../../../Data/Products";
// Swiper Js import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

const PopularItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);

  // Product Slider button
  const sliderArrowPrev = useRef(null);
  const sliderArrowNext = useRef(null);
  return (
    <section className="px-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 mt-10 mySwiper">
      <div className="flex flex-row justify-between items-center ">
        <div>
          <h2 className="heading-3">
            <span className="text-green-pantone">Popular</span>{" "}
            <span className="text-kombu-green">Items</span>
          </h2>
        </div>
        <div className="flex justify-between items-center gap-8">
          <button
            ref={sliderArrowPrev}
            className=" bg-white border-transparent font-semibold"
          >
            <ArrowCircleLeftIcon className="h-8 w-8  text-dim-gray hover:text-kombu-green" />
          </button>
          <button
            ref={sliderArrowNext}
            className="bg-white border-transparent font-semibold  rounded-full "
          >
            <ArrowCircleRightIcon className="h-8 w-8 text-green-pantone hover:text-may-green" />
          </button>
        </div>
      </div>
      <div className="antialiased text-kombu-green pt-6">
        <Swiper
          slidesPerGroup={4}
          loop={true}
          navigation={{
            prevEl: sliderArrowPrev.current,
            nextEl: sliderArrowNext.current,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products &&
            products.map((items) => (
              <SwiperSlide key={items.id}>
                <ProductCard items={items} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularItems;
