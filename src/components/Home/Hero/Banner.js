import React, { useState, useEffect } from "react";
import "./styles.css";
import bannerData from "../../../Data/BannerData";
import Hero from "./Hero";
import { useMediaQuery } from "react-responsive";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Banner = () => {
  const [data, setData] = useState([]);

  // Get & set banner data
  useEffect(() => {
    setData(bannerData);
  }, [data]);

  //navigation arrow is displayed only when the screen width exceeds 768px.
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <section className="mb-16 lg:mb-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        navigation={isTabletOrMobile}
        keyboard={{
          enabled: true,
        }}
        className="mySwiper"
      >
        {data &&
          data.map((data) => (
            <SwiperSlide key={data.id}>
              <Hero data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
