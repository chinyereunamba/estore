"use client";
import React from "react";
import Link from "next/link";
import style from "./intro.module.css";
import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Intro() {
  const slides = [
    { title: "Slide 1", img: "/slide-1.jpg" },
    { title: "Slide 2", img: "/slide-2.jpg" },
    { title: "Slide 3", img: "/slide-3.jpg" },
    { title: "Slide 4", img: "/slide-4.jpg" },
    { title: "Slide 5", img: "/slide-5.jpg" },
  ];
  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        
        className={style.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={style.slide} key={index} >
            <Image
              src={slide.img}
              alt={slide.title}
              width={1400}
              height={750}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
