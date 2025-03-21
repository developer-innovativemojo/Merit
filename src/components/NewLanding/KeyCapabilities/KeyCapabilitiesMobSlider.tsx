"use client";

import React, { useRef } from "react";
import Image from "next/image";

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

import Text from "@/components/ui/Text";

import slide1 from "@/public/images/new-landing/coreslider3.png";
import slide2 from "@/public/images/new-landing/coreslider1.png";
import slide3 from "@/public/images/new-landing/key4.png";
import slide4 from "@/public/images/new-landing/key3.png";
import slide5 from "@/public/images/new-landing/key2.png";
import slide6 from "@/public/images/new-landing/key1.png";

const KeyCapabilitiesMob = ({}) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full h-full pb-[58px] mob:pb-[60px] relative z-10 ">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[800px] mob:max-w-full">
          <Swiper
            ref={swiperRef}
            // effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={80} // reduced space between slides
            slidesPerView={1}
            speed={1500} // slower transition speed (1500ms)
            // autoplay={{
            //   delay: 3000, // 3-second delay between transitions
            //   disableOnInteraction: false,
            // }}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            className="keycapslidermob"
          >
            {/* {[...Array(totalSlides)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="relative min-h-[539.71px] mt-[100px] w-[447.06px] mob:w-full">
                  <Card slideIndex={index} />
                </div>
              </SwiperSlide>
            ))} */}
            {/* 1 */}
            <SwiperSlide className="mb-[53px]">
              <div>
                <div className="key-cap-grad min-h-[312px] flex justify-center items-center rounded-t-[32px]">
                  <Image
                    src={slide1}
                    alt=""
                    width={494}
                    height={275}
                    className="w-[80%] "
                  />
                </div>
                <div className="w-full pt-[20px] pb-[30px] flex justify-center items-center bg-white rounded-b-[32px]">
                  <div className="w-full max-w-[502px]">
                    <Text className="text-[#30434D] text-[24px] leading-[28px] font-semibold mb-[17px] px-3 text-center">
                      AI-Driven Strategic Matching
                    </Text>
                    <Text className="text-[#30434D] text-[16px] leading-[24px]  font-inter ml-2 mt-[17px] text-center px-2">
                      Identifies optimal connections between organizations,
                      businesses, suppliers, and associations based on <br />
                      <span className="font-bold">
                        real-time needs, expertise, and operational goals.
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 2 */}
            <SwiperSlide className="mb-[53px]">
              <div>
                <div className="key-cap-grad min-h-[312px] flex justify-center items-center rounded-t-[32px]">
                  <Image
                    src={slide2}
                    alt=""
                    width={494}
                    height={275}
                    className="w-[80%] "
                  />
                </div>
                <div className="w-full pt-[20px] pb-[30px] flex justify-center items-center bg-white rounded-b-[32px]">
                  <div className="w-full max-w-[502px]">
                    <Text className="text-[#30434D] text-[24px] leading-[28px]  font-semibold mb-[17px] px-3 text-center">
                      Data-Driven Decision Intelligence
                    </Text>
                    <Text className="text-[#30434D] text-[16px] leading-[24px]  font-inter ml-2 mt-[17px] text-center px-2">
                      Delivers{" "}
                      <strong>
                        {" "}
                        real-time analytics, industry benchmarking,
                      </strong>{" "}
                      and predictive insights to support smarter{" "}
                      <strong>
                        {" "}
                        hiring, procurement, and business strategies.
                      </strong>
                    </Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 3 */}
            <SwiperSlide className="mb-[53px]">
              <div>
                <div className="key-cap-grad min-h-[312px] flex justify-center items-center rounded-t-[32px]">
                  <Image
                    src={slide3}
                    alt=""
                    width={494}
                    height={275}
                    className="w-[80%] "
                  />
                </div>
                <div className="w-full pt-[20px] pb-[30px] flex justify-center items-center bg-white rounded-b-[32px]">
                  <div className="w-full max-w-[502px]">
                    <Text className="text-[#30434D] text-[24px] leading-[28px]  font-semibold mb-[17px] text-center px-2">
                      Supplier & Partnership Optimization
                    </Text>
                    <Text className="text-[#30434D] text-[16px]  font-inter ml-2 mt-[17px] text-center">
                      <strong>Uses AI-powered analytics</strong> to{" "}
                      <strong>
                        enhance corporate supplier diversity, subcontracting
                        partnerships, and B2B matchmaking.
                      </strong>
                    </Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 4 */}
            <SwiperSlide className="mb-[53px]">
              <div>
                <div className="key-cap-grad min-h-[312px] flex justify-center items-center rounded-t-[32px]">
                  <Image
                    src={slide4}
                    alt=""
                    width={494}
                    height={275}
                    className="w-[80%] "
                  />
                </div>
                <div className="w-full pt-[20px] pb-[30px] flex justify-center items-center bg-white rounded-b-[32px]">
                  <div className="w-full max-w-[502px]">
                    <Text className="text-[#30434D] text-[24px] leading-[28px] leadig-[39px] font-semibold mb-[17px] px-3 text-center">
                      AI-Augmented Workforce Matching
                    </Text>
                    <Text className="text-[#30434D] text-[16px] leading-[24px]  font-inter ml-2 mt-[17px] text-center px-2">
                      Matches{" "}
                      <strong>
                        {" "}
                        talent to job opportunities, bids, projects, and
                        leadership development programs
                      </strong>{" "}
                      while <strong>minimizing bias</strong> through
                      <strong> context-aware AI filtering.</strong>
                    </Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 5 */}
            <SwiperSlide className="mb-[53px]">
              <div>
                <div className="key-cap-grad min-h-[312px] flex justify-center items-center rounded-t-[32px]">
                  <Image
                    src={slide5}
                    alt=""
                    width={494}
                    height={275}
                    className="w-[80%] "
                  />
                </div>
                <div className="w-full pt-[20px] pb-[30px] flex justify-center items-center bg-white rounded-b-[32px]">
                  <div className="w-full max-w-[502px]">
                    <Text className="text-[#30434D] text-[24px] leading-[28px] leadig-[39px] font-semibold mb-[17px] px-3 text-center">
                      Optimized Association & Business Networks
                    </Text>
                    <Text className="text-[#30434D] text-[16px] leading-[24px]  font-inter ml-2 mt-[17px] text-center">
                      Helps associations, member-based organizations, and
                      professional groups enhance engagement, collaboration, and
                      strategic partnerships.
                    </Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 6 */}
            <SwiperSlide className="mb-[53px]">
              <div>
                <div className="key-cap-grad min-h-[312px] flex justify-center items-center rounded-t-[32px]">
                  <Image
                    src={slide6}
                    alt=""
                    width={494}
                    height={275}
                    className="w-[80%] "
                  />
                </div>
                <div className="w-full pt-[20px] pb-[30px] flex justify-center items-center bg-white rounded-b-[32px]">
                  <div className="w-full max-w-[502px]">
                    <Text className="text-[#30434D] text-[24px] leading-[28px] leadig-[39px] font-semibold mb-[17px] px-3 text-center">
                      API & System Integration
                    </Text>
                    <Text className="text-[#30434D] text-[16px] leading-[24px]  font-inter ml-2 mt-[17px] text-center">
                      <strong>Plug MERIT into any existing system </strong>{" "}
                      (Salesforce, Workday, SAP Ariba, Oracle, HubSpot, etc.)
                      for a<strong> seamless, automated workflow</strong> with{" "}
                      <strong>zero additional workload.</strong>
                    </Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default KeyCapabilitiesMob;
