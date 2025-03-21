import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import dot from "@/public/images/new-landing/Dot Grid.png";
import container from "@/public/images/new-landing/Icon Container.svg";
import fix from "@/public/images/new-landing/howfiox.png";
import twox from "@/public/images/new-landing/2x.svg";
import threex from "@/public/images/new-landing/3x.svg";
import win from "@/public/images/new-landing/win.svg";

const HowMeritFixes = () => {
  return (
    <div
      className="relative px-5 flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/new-landing/Dot Grid.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Background image container */}
      {/* <div className="absolute inset-0 z-10">
        <Image
          src={dot}
          alt="gradtop"
          fill
          className="object-cover bg-repeat opacity-70"
        />
      </div> */}

      {/* Main content */}
      <div className="w-full max-w-[1200px] flex justify-center items-center relative z-20">
        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <Text
            as="h1"
            className="text-[40px] mt-[113px] mob:my-10 text-center font-bold mob:text-[32px]"
          >
            How <span className="text-accentGreen">MERIT</span> Fixes Business
            Development—Instantly
          </Text>
          <div className="flex justify-between xl:justify-center xl:flex-wrap-reverse items-center mt-[-20px]">
            <div className="w-full max-w-[695px] mob:mt-[-100px]">
              <ul className="text-[18px] font-inter space-y-[25px] text-black">
                <li>
                  <span className="text-accentGreen font-semibold">
                    AI-Powered Teaming & Staffing:
                  </span>{" "}
                  Instantly finds{" "}
                  <strong>best-fit partners, subs, & talent</strong> for any
                  opportunity.
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Drag & Drop Matching:
                  </span>{" "}
                  Upload{" "}
                  <strong>
                    RFPs, SOWs, PWS, Job Reqs—AI scans & matches instantly.
                  </strong>
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Automated Scoring:
                  </span>{" "}
                  Ranks <strong>vendors, candidates, & teaming partners</strong>{" "}
                  based on{" "}
                  <strong>past performance & contract relevance.</strong>
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Faster Proposal Staffing:
                  </span>{" "}
                  Aligns <strong>internal & external talent instantly</strong>{" "}
                  to ensure the right people are in place.
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Predictive BD Intelligence:
                  </span>{" "}
                  Identifies{" "}
                  <strong>
                    future contracts & teaming opportunities before they go
                    public.
                  </strong>
                </li>
              </ul>
            </div>
            <Image
              src={fix}
              alt="fix"
              className=" relative bottom-10 mob:bottom-[5.5rem] mob:right-[15px]"
              width={519}
              height={455}
            />
          </div>

          {/* merit impact */}

          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            className="mob:mt-[80px]"
          >
            <Text
              as="h1"
              className="text-[40px] mb-[80px] mob:mb-[56px] mob:text-[32px] mt-0 text-center font-bold"
            >
              <span className="text-accentGreen">MERIT</span> Impact
            </Text>
            <div className="flex flex-wrap justify-center items-center w-full gap-x-[135px] gap-y-[64px] mob:gap-6 mb-[85px] mob:mb-[40px]">
              <div className="flex gap-2 w-full max-w-[470px]">
                <Image src={container} alt="container" />
                <Text className="font-inter text-[18px]">
                  <strong> 60% Reduction in manual BD effort</strong>—less
                  searching, more winning.
                </Text>
              </div>

              {/* 2 */}

              <div className="flex gap-2 w-full max-w-[470px]">
                <Image src={twox} alt="container" />
                <Text className="font-inter text-[18px]">
                  <strong> 2X More successful teaming & hiring</strong>—stronger
                  teams, better bids.
                </Text>
              </div>
              {/* 3 */}
              <div className="flex gap-2 w-full max-w-[470px]">
                <Image src={threex} alt="container" />
                <Text className="font-inter text-[18px]">
                  <strong> 3X Faster bid & deal response times</strong>—speed
                  wins deals.
                </Text>
              </div>

              {/* 4 */}
              <div className="flex gap-2 w-full max-w-[470px]">
                <Image src={win} alt="container" />
                <Text className="font-inter text-[18px]">
                  <strong> Higher win rates</strong> by ensuring
                  <strong> the right people & teams </strong>are in front of
                  decision-makers.
                </Text>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
          >
            <Text className="text-[28px] mob:text-[24px] font-bold max-w-[1200px] text-black mb-[154px] mob:text-center mob:mb-0">
              <span className="text-[#4FB848]">
                Stop losing time, money, and deals. MERIT
              </span>{" "}
              gives BD teams the strategic edge to win.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowMeritFixes;
