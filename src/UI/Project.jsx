import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../CSS/project.css";

import { data } from "../lib/projectdata";

export default function Project() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="heading text-4xl font-bold mt-14">
        Somethings <br /> I've worked on
      </h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container mt-14 gap-8  py-12"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="card p-3 border border-[#00fbff] rounded-lg w-72 h-auto bg-[#081737] text-white"
          >
            <div className="border border-black rounded-lg w-54 h-40">
              <img
                src={item.img}
                alt={item.head}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h1 className="text-2xl font-bold mt-3">{item.head}</h1>
            <div className="flex gap-3 my-3 text-center">
              <div className="border border-black p-1 rounded-full w-auto h-7 text-[14px] px-2 text-black bg-[#f8ec02]">
                {item.lang1}
              </div>
              <div className="border border-black p-1 rounded-full w-auto h-7 text-[14px] px-2 text-black bg-[#f8ec02]">
                {item.lang2}
              </div>
              <div className="border border-black p-1 rounded-full w-auto h-7 text-[14px] px-2 text-black bg-[#f8ec02]">
                {item.lang3}
              </div>
            </div>
            <p>{item.content}</p>
            <div className="flex gap-3 mt-3 text-center">
              <div className="border border-black p-2 rounded-xl w-1/4  bg-[#053df6]">
                <item.icon className="w-10 h-6" />
              </div>
              <div className="border border-black p-2 rounded-xl w-3/4 text-black bg-[#02f6fe]">
                {item.btn}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev slider-arrow ">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
