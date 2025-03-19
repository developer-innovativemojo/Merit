import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import dot from "@/public/images/new-landing/Dot Grid.png";
import container from "@/public/images/new-landing/Icon Container.svg";
import twox from "@/public/images/new-landing/2x.svg";
import threex from "@/public/images/new-landing/3x.svg";
import win from "@/public/images/new-landing/win.svg";

const MeritImapct = () => {
  return (
    <div
      className="relative px-5 bg-white flex justify-center items-center overflow-hidden"
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
          className="object-contain bg-repeat opacity-70 w-full h-full"
        />
      </div> */}

      {/* Main content */}
      <div className="w-full max-w-[1200px] flex justify-center items-center relative z-20">
        <div className="w-full">
          {/* merit impact */}
          <Text
            as="h1"
            className="text-[40px] mb-[80px] mob:text-[40px] mt-0 text-center font-bold"
          >
            <span className="text-accentGreen">MERIT</span> Impact
          </Text>
          <div className="flex flex-wrap justify-center items-center w-full gap-[135px] mob:gap-6 mb-[85px] mob:mb-[30px]">
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
                <strong> 3X Faster bid & deal response times</strong>—speed wins
                deals.
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

          <Text className="text-[28px] font-bold max-w-[1200px] text-black mb-[154px]">
            <span className="text-[#4FB848]">
              Stop losing time, money, and deals. MERIT
            </span>{" "}
            gives BD teams the strategic edge to win.
          </Text>

          {/* merit capabilities */}
        </div>
      </div>
    </div>
  );
};

export default MeritImapct;
