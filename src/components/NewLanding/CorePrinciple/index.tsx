import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { BackgroundBeams } from "@/components/ui/background-beams";

import slide1 from "@/public/images/new-landing/core slide1 (1).png";
import slide2 from "@/public/images/new-landing/core slide 2.png";
import gradtop from "@/public/images/new-landing/gradb.png";
import gradright from "@/public/images/new-landing/grad-core-br.png";
import TestimonialSliderMob from "./CorePrincipleSlider/CorePrincipleSlider";
import MobCoreSlider from "./CorePrincipleSlider/MobCoreslider";

const CorePrinciple = () => {
  return (
    <>
      {/* <div
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <Text className="font-inter text-[24px] mt-[106px] mob:mt-[30px] font-bold max-w-[1200px] px-5 text-center mx-auto mob:px-5 relative z-10">
          <span className="text-[#4FB848] font-bold"> MERIT</span> streamlines
          this business development process, helping organizations strategically
          align their talent and teaming efforts by leveraging historical
          knowledge, current and upcoming opportunities, and external market
          insights in one centralized, actionable platform.
          <Image
            className="w-full left-0 absolute max-w-[1000px] h-[800px] object-cover opacity-100 mx-auto bottom-[-365px] right-0 mob:top-[-3%] z-0"
            src={gradtop}
            alt="gradtop"
            width={1400}
            height={300}
          />
        </Text>
      </div> */}

      <div className="relative px-5 z-[-4]">
        <div className="relative overflow-hidden z-[-4]">
          {/* Background beams animation */}
          {/* <BackgroundBeams className="absolute inset-0 h-full w-full z-0" /> */}

          <Image
            className="absolute right-0 bottom-[0px] z-10"
            src={gradright}
            alt="gradright"
            width={337}
            height={236}
          />

          <div
            className="max-w-[1300px] mx-auto pt-[35px] relative z-0 mob:pt-0"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
          >
            <Text
              as="h1"
              className="text-accentGreen text-[50px] text-center mob:text-[32px] mb-[24px] mob:leading-[40px] mob:text-center mob:mb-[60px]"
            >
              Core Principles of MERIT
            </Text>
            {/* <Text className="text-[24px] mob:leading-[30px] font-inter max-w-[735px]">
              At its core,{" "}
              <span className="font-bold text-[#4FB848]"> MERIT</span> is
              designed to maximize efficiency and optimize strategic
              decision-making through
            </Text> */}
            <div className="flex tab:flex-wrap w-full mt-[90px] mob:mt-[55px] items-start">
              <div className="mob:flex tab:flex-wrap tab:justify-center items-center w-full mob:h-full hidden">
                <MobCoreSlider totalSlides={6} />
              </div>
              <div className="max-w-[480px] space-y-[20px] mob:space-y-[20px]">
                <Text className="text-[24px] leading-[32px] mob:text-[18px] mob:leading-[22px] font-inter ">
                  {" "}
                  <span className="text-[#4FB848] font-bold">
                    M – Matching:
                  </span>{" "}
                  Optimizing connections across processes, systems, and
                  resources to ensure the best outcomes.
                </Text>
                <Text className="text-[24px] leading-[32px] mob:leading-[22px] font-inter mob:text-[18px]">
                  {" "}
                  <span className="text-[#4FB848] font-bold">
                    E – Efficiency:
                  </span>{" "}
                  Streamlining workflows and decision-making through data-driven
                  solutions and technology.​
                </Text>

                <Text className="text-[24px] leading-[32px] mob:leading-[22px] font-inter mob:text-[18px]">
                  {" "}
                  <span className="text-[#4FB848] font-bold">
                    R – Results:{" "}
                  </span>
                  Delivering measurable, impactful solutions that align with
                  organizational goals and objectives.​
                </Text>

                <Text className="text-[24px] leading-[32px] mob:leading-[22px] font-inter mob:text-[18px]">
                  {" "}
                  <span className="text-[#4FB848] font-bold">
                    I – Innovation:
                  </span>{" "}
                  Leveraging cutting-edge tools and strategies to modernize
                  operations and improve performance.​
                </Text>
                <Text className="text-[24px] leading-[32px] mob:leading-[22px] font-inter mob:text-[18px]">
                  {" "}
                  <span className="text-[#4FB848] font-bold">
                    T – Technology:
                  </span>{" "}
                  Harnessing advanced platforms and AI to automate and enhance
                  matching processes across industries.
                </Text>
              </div>

              <div className="flex tab:flex-wrap tab:justify-center items-center w-full mob:hidden">
                <TestimonialSliderMob totalSlides={6} />
              </div>
            </div>
          </div>
        </div>
        {/* <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <Text className="mt-[-25px] mob:my-[94px] font-bold text-[24px] mob:text-[18px] leading-[32px] mob:leading-[25px] mb-[134px] font-inter max-w-[1050px] text-center mx-auto">
            <span className="text-[#4FB848] font-bold">MERIT</span> isn’t just a
            tool—it’s a{" "}
            <span className="text-[#4FB848] font-bold">
              strategic advantage that helps organizations move faster
            </span>
            , make better decisions, and maximize their existing relationships
            and data.
          </Text>
        </div> */}
      </div>
    </>
  );
};

export default CorePrinciple;
