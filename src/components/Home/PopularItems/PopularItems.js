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
import { Navigation } from "swiper";
const PopularItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);

  // Product Slider button
  const sliderArrowPrev = useRef(null);
  const sliderArrowNext = useRef(null);
  return (
    <section className="p-2">
      <div className="mx-auto  mt-10 px-3 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-row items-center justify-between ">
          <h2 className="heading-3">
            <span className="text-skin-base">Popular</span>{" "}
            <span className="text-skin-primary">Items</span>
          </h2>
          <div className="flex items-center justify-between gap-8 ">
            <button
              ref={sliderArrowPrev}
              className=" border-transparent bg-transparent font-semibold"
            >
              <ArrowCircleLeftIcon className="text-skin-secondary h-8  w-8 hover:opacity-80" />
            </button>
            <button
              ref={sliderArrowNext}
              className="rounded-full border-transparent bg-transparent  font-semibold "
            >
              <ArrowCircleRightIcon className="text-skin-base h-8 w-8 hover:opacity-80" />
            </button>
          </div>
        </div>
        <div className="text-skin-primary pt-6 antialiased">
          <Swiper
            slidesPerGroup={2}
            loop={true}
            modules={[Navigation]}
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
            className="row-gap-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
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
