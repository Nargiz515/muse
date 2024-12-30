import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules"; 

function Swiper1() {
  return (
    <div>
        <div className="">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next.swiper-next-1", 
            prevEl: ".swiper-button-prev.swiper-prev-1", 
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="flex">
            <img
              className="w-full !object-cover !h-[600px]"
              src="/assets/img/carousel.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex">
            <img
              className="w-full !object-cover !h-[600px] rounded-lg "
              src="/assets/img/carousel2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex">
            <img
              className="w-full !object-cover !h-[600px] rounded-lg "
              src="/assets/img/carousel3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex">
            <img
              className="w-full !object-cover !h-[600px] rounded-lg "
              src="/assets/img/carousel4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex">
            <img
              className="w-full !object-cover !h-[600px] rounded-lg "
              src="/assets/img/swiper1.jpg"
              alt=""
            />
          </SwiperSlide>
          <div className="swiper-button-prev swiper-prev-1" />
          <div className="swiper-button-next swiper-next-1" />
        </Swiper>
      </div>
    </div>
  )
}

export default Swiper1