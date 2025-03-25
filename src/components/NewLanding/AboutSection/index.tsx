import React from "react";
import Image from "next/image";

import bg from "@/public/images/new-landing/aboutbg.png";
import greenbg from "@/public/images/new-landing/gradb.png";
import Text from "@/components/ui/Text";

const AboutSection = () => {
  return (
    <div
      className="flex items-center justify-center relative mt-[143px] mob:mt-[10px] mb-[120px]"
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
        className="absolute z-[0] object-cover w-full max-w-[1050px] bottom-[-100px] mob:bottom-0 mob:top-[-222px]"
        src={greenbg}
        alt=""
      />
      <div
        className="w-full max-w-[1200px]"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <div className="max-w-[993px] w-full mx-auto flex flex-col justify-between gap-[48px] items-center mob:justify-center mob:gap-0">
          <Text
            as="h1"
            className="text-accentGreen text-[50px] mob:text-[32px] font-inter mob:text-center mob:mt-10"
          >
            About
          </Text>
          <Image className=" mob:block hidden" src={bg} alt="" />

          <Text className="max-w-full w-full text-center font-inter text-[#30434D] text-[18px] leading-[26px] mob:px-5">
            <strong> MERIT</strong> is an AI-driven business intelligence
            platform built for{" "}
            <strong>
              {" "}
              Business Development (BD), HR/Recruiters, and Program Management{" "}
            </strong>{" "}
            teams. It reduces friction, eliminates wasted time, and connects the
            right people at the right time—so teams can win more contracts and
            execute without delays.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
