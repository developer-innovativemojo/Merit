import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import icon1 from "@/public/images/new-landing/pain-icon7.svg";
import icon2 from "@/public/images/new-landing/pain-icon6.svg";
import icon3 from "@/public/images/new-landing/pain-icon5.svg";
import icon4 from "@/public/images/new-landing/pain-icon4.svg";
import icon5 from "@/public/images/new-landing/pain-icon3.svg";
import icon6 from "@/public/images/new-landing/pain-icon2.svg";
import icon7 from "@/public/images/new-landing/pain-icon1.svg";

const content = [
  {
    image: icon1,
    descrip: "4–8 Weeks wasted assembling the right team",
  },
];

const ThePain = () => {
  return (
    <div className="w-full flex justify-center min-h-[878px] the-pain-bg ">
      <div
        className="w-full max-w-[1046px] min-h-[600px] pb-[39px]"
        style={{
          backgroundImage: "url('/images/new-landing/whymerit.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >
        <Text className="mt-[10px] text-[50px] mob:text-[32px] mob:mt-[30px] font-bold text-center font-inter text-white mb-[52px]">
          The Pain
        </Text>
        <div className="w-full flex flex-wrap justify-center col-gap row-gap">
          <div className="w-full max-w-[408px]">
            <Image src={icon1} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>4–8 Weeks</strong> wasted assembling the right team
            </Text>
          </div>

          {/* 2 */}
          <div className="w-full max-w-[408px]">
            <Image src={icon2} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>30–60 Days</strong> of staffing delays after wins
            </Text>
          </div>

          {/* 3 */}
          <div className="w-full max-w-[408px]">
            <Image src={icon3} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>$10M–$50M</strong> lost annually in missed or poorly
              executed bids
            </Text>
          </div>

          {/* 4 */}
          <div className="w-full max-w-[438px]">
            <Image src={icon4} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>Misaligned Teams</strong> are often picked based on
              familiarity—not performance. MERIT helps you find the right
              relationships, backed by data, without digging through LinkedIn or
              old emails
            </Text>
          </div>

          {/* 5 */}
          <div className="w-full max-w-[408px]">
            <Image src={icon5} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>Inefficient Workflows:</strong> up to 60% of BD’s time
              spent on manual searches
            </Text>
          </div>

          {/* 6 */}
          <div className="w-full max-w-[408px]">
            <Image src={icon6} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>Program Managers</strong> lose focus on delivery when
              pulled into proposal and staffing fire drills
            </Text>
          </div>

          {/* 7 */}
          <div className="w-full max-w-[408px]">
            <Image src={icon7} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>HR/Recruiters</strong> are overtasked—balancing active
              hiring, onboarding, and retention efforts with last-minute bid
              support
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThePain;
