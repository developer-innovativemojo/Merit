import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Form from "./form";

import bg from "@/public/images/new-landing/Header Background.png";
import desktop from "@/public/images/new-landing/DesktopTower.svg";

const ReadyToSee = () => {
  return (
    <div className="relative bg-white flex justify-center items-center overflow-hidden">
      {/* Background image container */}
      <div className="">
        <Image src={bg} alt="gradtop" fill className="" />
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col justify-center items-center relative z-20">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <Text className="text-[45px] mob:text-[30px] mob:text-center font-bold my-[200px] mob:my-10">
            Ready to See <span className="text-accentGreen ">MERIT</span> in
            Action?
          </Text>
        </div>

        <div className="w-full bg-[#30434D] min-h-[953px] px-5 flex justify-center items-center mob:py-[30px]">
          <div className="w-full max-w-[1200px] flex flex-wrap justify-between items-center xl:justify-center xl:gap-[20px]">
            <div>
              <div
                className="flex gap-2 items-center w-full max-w-[500px]"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
              >
                <Image src={desktop} alt="desktop" />
                <Text className="text-[22px] font-inter text-white">
                  <span className="text-accentGreen font-bold">
                    Request a Demo
                  </span>{" "}
                  – See how MERIT helps you find partners, subcontractors, and
                  talent—faster.
                </Text>
              </div>
              <div
                className="flex gap-2 items-center w-full max-w-[500px] my-[50px]"
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
              >
                <Image src={desktop} alt="desktop" />
                <Text className="text-[22px] font-inter text-white">
                  <span className="text-accentGreen font-bold">
                    Request a Demo
                  </span>{" "}
                  – See how MERIT helps you find partners, subcontractors, and
                  talent—faster.
                </Text>
              </div>
              <div
                className="flex gap-2 items-center w-full max-w-[500px]"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                <Image src={desktop} alt="desktop" />
                <Text className="text-[22px] font-inter text-white">
                  <span className="text-accentGreen font-bold">
                    Request a Demo
                  </span>{" "}
                  – See how MERIT helps you find partners, subcontractors, and
                  talent—faster.
                </Text>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToSee;
