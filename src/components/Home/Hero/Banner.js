import React, { useRef, useState, useEffect } from "react";
import bannerData from "../../../Data/Banner";
import Hero from "./Hero";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Banner = () => {
  const [data, SetData] = useState([]);

  // Get banner data
  useEffect(() => {
    SetData(bannerData);
  }, [data]);
  

  return (
    <section className="mb-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {data &&
          data.map((data) => (
            <SwiperSlide>
              <Hero data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;