import React from "react";
import Image from "next/image";

import bg from "@/public/images/new-landing/aboutbg.png";
import greenbg from "@/public/images/new-landing/gradb.png";
import Text from "@/components/ui/Text";

const AboutSection = () => {
  return (
    <div
      className="flex items-center justify-center relative mt-[143px] mob:mt-[10px]"
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Image
        className="absolute z-[0] object-cover w-full mob:hidden"
        src={bg}
        alt=""
      />
      <Image
        className="absolute z-[0] object-cover w-[660px] bottom-[-100px] mob:bottom-0 mob:top-[-222px]"
        src={greenbg}
        alt=""
      />
      <div
        className="w-full max-w-[1200px]"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <div className="max-w-[990px] w-full mx-auto flex flex-wrap justify-between gap-8 items-center mob:justify-center mob:gap-0">
          <Text
            as="h1"
            className="text-accentGreen text-[50px] mob:text-[32px] font-inter mob:text-center mob:mt-10"
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
            <br /> <br /> Most companies already have{" "}
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
      </div>
    </div>
  );
};

export default AboutSection;
