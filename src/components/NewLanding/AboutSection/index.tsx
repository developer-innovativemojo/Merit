import React from "react";
import Image from "next/image";

import bg from "@/public/images/new-landing/aboutbg.png";
import greenbg from "@/public/images/new-landing/gradb.png";
import Text from "@/components/ui/Text";

const AboutSection = () => {
  return (
    <div className="min-h-[493px] flex items-center justify-center relative mt-[193px] mob:mt-[10px]">
      <Image
        className="absolute z-[0] object-cover w-full mob:hidden"
        src={bg}
        alt=""
      />
      <Image
        className="absolute z-[0] object-cover bottom-[-100px] w-[992px] mob:bottom-0 mob:top-[-222px]"
        src={greenbg}
        alt=""
      />
      <div className="w-full max-w-[1200px]">
        <div className="max-w-[990px] w-full mx-auto flex flex-wrap justify-between gap-8 items-center mob:justify-center mob:gap-0">
          <Text
            as="h1"
            className="text-accentGreen text-[50px] font-inter mob:text-center"
          >
            About
          </Text>
          <Image className=" mob:block hidden" src={bg} alt="" />

          <Text className="max-w-[683px] w-full font-inter text-[#30434D] text-[18px] leading-[26px] mob:px-5">
            MERIT is a <strong> business intelligence platform </strong> that
            helps organizations <strong> quickly connect </strong> with the
            right
            <strong>teaming partners, subcontractors, and talent</strong> —
            driving{" "}
            <strong> faster wins and sustainable business growth.</strong>{" "}
            <br /> Most companies already have{" "}
            <strong>
              {" "}
              valuable relationships, databases, and talent pools
            </strong>{" "}
            — but <strong>are they being used effectively?</strong> Too often,
            teams waste <strong>weeks</strong> searching outdated lists, making
            cold outreach, and scrambling across internal teams to find the
            right people and partners. <br /> <br />
            <strong>MERIT changes that.</strong> Our AI-driven platform{" "}
            <strong>eliminates the guesswork</strong> by turning{" "}
            <strong>
              historical data, real-time insights, and market intelligence
            </strong>{" "}
            into actionable matches— <strong>instantly.</strong>
          </Text>
        </div>
        <Text className="font-inter text-[24px] mt-[82px] mob:mt-[30px] text-center mx-auto mob:px-5">
          <span className="text-[#4FB848] font-bold"> MERIT</span>{" "}
          streamlines this business development process, helping organizations
          strategically align their talent and teaming efforts by leveraging
          historical knowledge, current and upcoming opportunities, and external
          market insights in one centralized, actionable platform.
        </Text>
      </div>
    </div>
  );
};

export default AboutSection;
