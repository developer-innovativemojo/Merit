import React from "react";
import Image from "next/image";

import bg from "@/public/images/new-landing/aboutbg.png";
import greenbg from "@/public/images/new-landing/gradb.png";
import Text from "@/components/ui/Text";

const AboutSection = () => {
  return (
    <div
      className="flex items-center justify-center relative mt-[86px] mob:mt-[10px] mb-[80px]"
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
      {/* <Image
        className="absolute z-[0] object-cover w-full max-w-[1050px] bottom-[-100px] mob:bottom-0 mob:top-[-222px]"
        src={greenbg}
        alt=""
      /> */}
      <div
        className="w-full max-w-[1200px] flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <div className="w-full max-w-[1100px] flex mob:flex-col justify-between gap-[48px] items-center mob:justify-center mob:gap-0">
          <Text
            as="h1"
            className="text-accentGreen text-[50px] mob:text-[32px] font-inter mob:text-center mob:mt-10"
          >
            About
          </Text>
          <Image className=" mob:block hidden" src={bg} alt="" />
          <div className="w-full max-w-[785px]">
            <Text className="max-w-full w-full font-inter text-[#30434D] text-[18px] leading-[26px] mob:px-5">
              In Business Development (BD), Human Resources (HR), or Program
              Delivery, your expertise drives success. Yet, traditional methods
              can be time-consuming and challenging. <br /> <br />
              <strong> MERIT</strong> serves as your{" "}
              <strong>AI-powered business development partner,</strong> designed
              to streamline team-building by instantly connecting you with
              top-fit partners and talent using real data. This enables you to
            </Text>{" "}
            <br />
            <br />
            <ul className="list-disc font-inter font-bold text-[18px] text-[#30434D] pl-7 mob:pl-10">
              <li>
                Swiftly Assemble High-Performing Teams with AI-Powered
                Matching.​
              </li>
              <li>
                Enhance Contract Staffing by Intelligently Identifying Top
                Candidates.​
              </li>
              <li>
                Ensure Program Success by Precisely Aligning Talent with Project
                Needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
