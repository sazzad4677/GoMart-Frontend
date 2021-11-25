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
    <section className=" p-2">
      <div className="px-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 mt-10">
        <div className="flex flex-row justify-between items-center ">
          <h2 className="heading-3">
            <span className="text-skin-base">Popular</span>{" "}
            <span className="text-skin-primary">Items</span>
          </h2>
          <div className="flex justify-between items-center gap-8 ">
            <button
              ref={sliderArrowPrev}
              className=" bg-transparent border-transparent font-semibold"
            >
              <ArrowCircleLeftIcon className="h-8 w-8  text-skin-secondary hover:opacity-80" />
            </button>
            <button
              ref={sliderArrowNext}
              className="bg-transparent border-transparent font-semibold  rounded-full "
            >
              <ArrowCircleRightIcon className="h-8 w-8 text-skin-base hover:opacity-80" />
            </button>
          </div>
        </div>
        <div className="antialiased text-skin-primary pt-6">
          <Swiper
            slidesPerGroup={2}
            loop={true}
            navigation={{
              prevEl: sliderArrowPrev.current,
              nextEl: sliderArrowNext.current,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
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
      </div>
    </section>
  );
};

export default PopularItems;
