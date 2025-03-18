import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Navbar from "../NavbarLanding";

import bg from "@/public/images/new-landing/Background Image.png";
import cont from "@/public/images/new-landing/Container.png";
import gradbl from "@/public/images/new-landing/gradbl.png";
import gradbr from "@/public/images/new-landing/gradbr.png";
import gradb from "@/public/images/new-landing/gradb.png";
import left from "@/public/images/new-landing/Group 11.png";
import right from "@/public/images/new-landing/Group 14.png";

const HeroSection = () => {
  return (
    <div className=" min-h-[863px] relative flex justify-center items-center px-5 mob:overflow-hidden">
      <Navbar />

      <div className=" flex justify-center items-center h-full">
        <div className=" mx-auto space-y-[25px] relative z-20">
          <Text
            as="h1"
            className="text-center font-inter text-[#30434D] mob:text-[40px] mob:leading-[49px]"
          >
            The
            <span className="text-accentGreen"> Smartest, Fastest Way</span> to
            Find the Right
            <br />
            Partners & Resources to Win More Work
          </Text>
          <div className="mob:flex justify-between gap-[30px] w-full mt-[16px] mb-[88px] hidden">
            <Image className="w-[158px]" src={right} alt="bg" />
            <Image className="w-[155px]" src={left} alt="bg" />
          </div>
          <Text className="text-accentGreen text-center font-bold text-[24px]  font-inter">
            Faster Teaming. Smarter Matches. Better Business.
          </Text>
        </div>
        <Image
          className="absolute bottom-0 mx-auto"
          src={bg}
          alt="bg"
          width={1092}
          height={358}
        />
        <Image
          className="absolute z-0 mx-auto mt-[200px] mob:hidden"
          src={cont}
          alt="bg"
          width={1493}
          height={84}
        />
        <Image
          className="absolute z-10 left-0 bottom-[-300px]"
          src={gradbl}
          alt="bgl"
          width={411}
          height={512}
        />
        <Image
          className="absolute z-10 right-0 bottom-[-300px]"
          src={gradbr}
          alt="bgr"
          width={411}
          height={512}
        />
        <Image
          className="absolute z-10 mx-auto bottom-[-260px]"
          src={gradb}
          alt="gradb"
          width={591}
          height={512}
        />
      </div>
    </div>
  );
};

export default HeroSection;
