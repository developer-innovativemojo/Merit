import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import intrnal from "@/public/images/new-landing/internal.png";
import grad from "@/public/images/new-landing/gradbl.png";

const Internal = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <Image src={grad} alt="grad" className="absolute left-0" />
      <Text className="font-inter text-[50px] mob:text-[32px] mob:leading-[40px] w-full text-center  my-[120px] mob:my-[80px] text-[#30434D] font-bold">
        Internal & External{" "}
        <span className="text-accentGreen"> Talent Optimization</span>
      </Text>
      <div className="flex justify-between xl:justify-center flex-row-reverse xl:flex-wrap-reverse items-center xl:items-center xl:gap-[40px] max-w-[1200px] px-5">
        <div className="w-full max-w-[690px]">
          <ul className="text-[18px] font-inter space-y-[25px] text-[#30434D]">
            <li>
              <span className="text-accentGreen font-bold">
                Maximize Internal Talent First:
              </span>{" "}
              Quickly find and deploy employees, past applicants, and
              subcontractors
            </li>
            <li>
              <span className="text-accentGreen font-bold">
                Teaming & Relationship Intelligence:
              </span>{" "}
              Harness AI insights on past performance to form stronger teams
            </li>
          </ul>
        </div>
        <Image src={intrnal} alt="fix" className="" width={486} height={455} />
      </div>
    </div>
  );
};

export default Internal;
