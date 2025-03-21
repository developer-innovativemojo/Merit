"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Card from "./Card";

interface TestimonialSliderMobProps {
  totalSlides: number;
}

const MobCoreSlider: React.FC<TestimonialSliderMobProps> = ({
  totalSlides = 6,
}) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full h-full pb-[58px] mob:pb-[60px] relative z-10">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[800px] mob:max-w-full">
          <Swiper
            ref={swiperRef}
            // effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={80} // reduced space between slides
            slidesPerView={1}
            // breakpoints={{
            //   768: {
            //     slidesPerView: 1,
            //     effect: "coverflow",
            //     coverflowEffect: {
            //       rotate: 0,
            //       stretch: 0,
            //       depth: 0,
            //       modifier: 0,
            //       slideShadows: false,
            //     },
            //   },
            //   1300: {
            //     slidesPerView: 1.5,
            //     effect: "coverflow",
            //     coverflowEffect: {
            //       rotate: 0,
            //       stretch: 0,
            //       depth: 100,
            //       modifier: 3,
            //       slideShadows: false,
            //     },
            //   },
            // }}
            speed={1500} // slower transition speed (1500ms)
            autoplay={{
              delay: 3000, // 3-second delay between transitions
              disableOnInteraction: false,
            }}
            loop={true}
            // coverflowEffect={{
            //   rotate: 0,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 3,
            //   slideShadows: false,
            // }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            className="mySwiper mob:h-[400px]"
          >
            {[...Array(totalSlides)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="relative min-h-[539.71px] mt-[100px] w-[447.06px] mob:w-full">
                  <Card slideIndex={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MobCoreSlider;
