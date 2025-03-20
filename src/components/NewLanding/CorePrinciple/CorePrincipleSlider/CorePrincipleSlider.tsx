"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import Card from "./Card";
import NextCard from "./NextCard";

interface TestimonialSliderMobProps {
  totalSlides: number;
}

const TestimonialSliderMob: React.FC<TestimonialSliderMobProps> = ({
  totalSlides = 6,
}) => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      // Listen to the slide change event
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex); // Directly update the active index
      });
    }
  }, []);

  const nextIndex = (activeIndex + 1) % totalSlides;

  return (
    <div className="w-full h-full pb-[58px]">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[800px]">
          <Swiper
            ref={swiperRef}
            breakpoints={{
              768: { slidesPerView: 1 },

              1323: { slidesPerView: 2, spaceBetween: 40 },
            }}
            slidesPerView={1}
            speed={1000}
            // slidesPerGroup={1}
            initialSlide={0}
            // centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
            className="mySwiper"
          >
            {[...Array(totalSlides)].map((_, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative min-h-[539.71px] mt-[100px] w-[447.06px]`}
                >
                  {activeIndex === index ? (
                    <Card isActive activeIndex={activeIndex} />
                  ) : nextIndex === index ? (
                    <NextCard isNext nextIndex={nextIndex} />
                  ) : null}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderMob;
