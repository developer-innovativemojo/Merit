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
    <div className="w-full flex justify-center min-h-[878px] the-pain-bg mob:px-5 relative">
      <div className=" absolute h-full w-full bg-[#D0D5DD] bg-opacity-5"></div>
      <div
        className="w-full max-w-[1146px] min-h-[600px] pb-[39px] relative"
        style={{
          backgroundImage: "url('/images/new-landing/whymerit.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >
        <Text className="mt-[50px] text-[50px] mob:text-[32px] mob:mt-[30px] font-bold text-center font-inter text-white mb-[10px]">
          The Cost of Traditional Methods
        </Text>
        <Text className="text-[24px] text-white font-bold text-center mb-[48px]">
          Even top-performing teams face outdated workflows
        </Text>
        <div className="w-full flex flex-wrap justify-center col-gap row-gap mb-[33px] ">
          <div className="w-full max-w-[454px]">
            <Image src={icon1} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>Extended Team Assembly: </strong>Spending 4–8 weeks
              assembling the right team delays project initiation and affects
              timelines
            </Text>
          </div>

          {/* 2 */}
          <div className="w-full max-w-[485px]">
            <Image src={icon2} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>Post-Award Staffing Delays: </strong> Experiencing 30–60
              days of staffing delays after wins hampers project momentum and
              client satisfaction.​
            </Text>
          </div>

          {/* 3 */}
          <div className="w-full max-w-[474px]">
            <Image src={icon3} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>Financial Losses:</strong> Organizations may lose
              $10M–$50M annually due to missed or poorly executed bids,
              highlighting the need for efficient team formation
            </Text>
          </div>

          {/* 4 */}
          <div className="w-full max-w-[485px]">
            <Image src={icon4} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>Misaligned Teams:</strong> Teams often picked based on
              familiarity—not performance
            </Text>
          </div>

          {/* 5 */}
          <div className="w-full max-w-[464px]">
            <Image src={icon5} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>Inefficient Workflows:</strong> Up to 60% of BD’s time
              consumed by manual searches, email chasing, and slow decisions.​
            </Text>
          </div>

          {/* 6 */}
          <div className="w-full max-w-[485px]">
            <Image src={icon6} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>Program Manager Distractions:</strong> Program Managers
              lose focus on delivery when diverted to handle proposal and
              staffing emergencies.​
            </Text>
          </div>

          {/* 7 */}
          <div className="w-full max-w-[588px]">
            <Image src={icon7} alt="icon" className="mx-auto" />
            <Text className="text-[18px] font-normal text-center mt-[25px] text-white">
              <strong>HR/Recruiter Overload: </strong> HR/Recruiters are
              overtasked—balancing active hiring, onboarding, and retention
              efforts with last-minute bid support.
            </Text>
          </div>
        </div>
        <Text className="text-[24px] font-bold text-white text-center">
          The traditional approach drains time and energy. MERIT offers clarity,
          speed, and superior outcomes—with greater ease.
        </Text>
      </div>
    </div>
  );
};

export default ThePain;
