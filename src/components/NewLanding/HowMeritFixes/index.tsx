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
            className="text-[50px] mt-[113px] mob:my-10 text-center font-bold mob:text-[32px]"
          >
            How <span className="text-accentGreen">MERIT</span> Fixes It
          </Text>
          <div className="flex justify-between xl:justify-center xl:flex-wrap-reverse items-center mt-[-20px]">
            <div className="w-full max-w-[695px] mob:mt-[-100px]">
              <ul className="text-[18px] font-inter space-y-[25px] text-[#30434D]">
                <li>
                  <span className="text-accentGreen font-bold">
                    AI-Powered Teaming & Staffing:
                  </span>{" "}
                  Quickly surfaces top-fit partners and talent using past
                  performance, skill alignment, and agency relevance. Drop in
                  your PWS, job descriptions, capability statements, or
                  SOWs—MERIT does the matching instantly.
                </li>
                <li>
                  <span className="text-accentGreen font-bold">
                    Automated Scoring & Matching:
                  </span>{" "}
                  Ranks vendors and candidates based on verified performance and
                  strategic fit—no guesswork.
                </li>
                <li>
                  <span className="text-accentGreen font-bold">
                    Faster Proposal Staffing & Alignment:
                  </span>{" "}
                  Brings BD, HR/Recruiters, and program leads onto one platform,
                  cutting proposal response time by up to 3×.
                </li>
                <li>
                  <span className="text-accentGreen font-bold">
                    Smarter Bid Preparation:
                  </span>{" "}
                  Gives BD, HR/Recruiters, and Program Managers a clearer view
                  of who to team with and staff—before you&apos;re under
                  pressure to respond.
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

          {/* <div
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

          

              <div className="flex gap-2 w-full max-w-[470px]">
                <Image src={twox} alt="container" />
                <Text className="font-inter text-[18px]">
                  <strong> 2X More successful teaming & hiring</strong>—stronger
                  teams, better bids.
                </Text>
              </div>
        
              <div className="flex gap-2 w-full max-w-[470px]">
                <Image src={threex} alt="container" />
                <Text className="font-inter text-[18px]">
                  <strong> 3X Faster bid & deal response times</strong>—speed
                  wins deals.
                </Text>
              </div>

        
              <div className="flex gap-2 w-full max-w-[470px]">
                <Image src={win} alt="container" />
                <Text className="font-inter text-[18px]">
                  <strong> Higher win rates</strong> by ensuring
                  <strong> the right people & teams </strong>are in front of
                  decision-makers.
                </Text>
              </div>
            </div>
          </div> */}
          {/* <div
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HowMeritFixes;
