import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Form from "./form";

import bg from "@/public/images/new-landing/Header Background.png";
import desktop from "@/public/images/new-landing/DesktopTower.svg";
import download from "@/public/images/new-landing/donwload.svg";
import mail from "@/public/images/new-landing/Envelope.svg";

const ReadyToSee = () => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden">
      {/* Background image container */}
      <div className="">
        <Image
          src={bg}
          alt="gradtop"
          className="w-[1300px] absolute object-cover left-0 right-0 mx-auto top-[145px]"
        />
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col justify-center items-center relative z-20">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <Text className="text-[45px] mob:text-[30px] max-w-[1194px] text-center leading-[50px] mob:text-center font-bold my-[200px] mob:my-[85px] px-5">
            <span className="text-accentGreen ">
              Ready to move faster, make smarter matches, and grow confidently?
            </span>
            That’s MERIT—because better matchmaking means better business.
          </Text>
        </div>

        <div
          className="w-full bg-[#30434D] min-h-[953px] mob:min-h-[1682px] px-5 flex justify-center items-center mob:py-[30px]"
          id="contact"
        >
          <div className="w-full max-w-[1220px] flex flex-wrap justify-between items-center xl:justify-center xl:gap-[80px]">
            <div>
              <div
                className="flex gap-4 items-center w-full max-w-[550px] mob:flex-col"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
              >
                <Image src={desktop} alt="desktop" />
                <Text className="text-[24px] font-inter text-white mob:text-center">
                  <span className="text-accentGreen font-bold">
                    Request a Demo
                  </span>{" "}
                  – See how MERIT helps you find partners, subcontractors, and
                  talent—faster.
                </Text>
              </div>
              <div
                className="flex gap-4 items-center w-full max-w-[500px] my-[50px] mob:flex-col"
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
              >
                <Image src={download} alt="desktop" />
                <Text className="text-[24px] font-inter text-white mob:text-center">
                  <span className="text-accentGreen font-bold">
                    Download Our White Paper
                  </span>{" "}
                  AI-Driven Business Development & Talent Optimization.
                </Text>
              </div>
              <div
                className="flex gap-4 items-center w-full max-w-[500px] mob:flex-col"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                <Image src={mail} alt="desktop" />
                <Text className="text-[24px] font-inter text-white mob:text-center">
                  <span className="text-accentGreen font-bold">
                    Get in Touch
                  </span>{" "}
                  Let&apos;s discuss how MERIT can fit your exact business
                  needs.
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
