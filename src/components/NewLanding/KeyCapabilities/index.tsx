import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import keyslide from "@/public/images/new-landing/key 8.png";
import keybg from "@/public/images/new-landing/kery bg.png";
import tdmatch from "@/public/images/new-landing/traditional match.png";
import missed from "@/public/images/new-landing/missed.svg";
import bigger from "@/public/images/new-landing/bigger.svg";
import manual from "@/public/images/new-landing/manual.svg";
import gradt from "@/public/images/new-landing/grad-core-top.png";
import KeyCapabilitiesSlider from "./KeyCapabilitiesSlider";

const KeyCapabilities = () => {
  return (
    <>
      <div className="gradientKeyCap pt-32 ">
        <Text
          as="h1"
          className="text-[50px] text-white text-center font-inter leading-[48px] mb-20"
        >
          Key Capabilities
        </Text>

        {/* <KeyCapabilitiesSlider /> */}

        <div className="max-w-[1200px] min-h-[600px] mob:min-h-full rounded-[50px] mx-auto mt-10 bg-white flex flex-wrap items-center mob:mx-5">
          <div className="w-[50%] py-10 tab:w-full pl-10 pr-5 tab:px-5">
            <Text className="text-[#30434D] text-[32px] font-semibold mb-[17px] px-3">
              AI-Driven Strategic Matching
            </Text>
            <Text className="text-[#30434D] text-[18px] leading-[26px] font-inter ml-2 mt-[17px]">
              Identifies optimal connections between organizations, businesses,
              suppliers, and associations based on <br />
              <span className="font-bold">
                {" "}
                real-time needs, expertise, and operational goals.
              </span>
            </Text>
          </div>

          <div className="w-[50%] py-10 px-5 tab:w-full bg-[#235220] h-full min-h-[600px] tab:min-h-full rounded-r-[50px] tab:rounded-t-[0px] mob:rounded-b-[50px] flex items-center justify-center">
            <Image src={keyslide} alt="" width={494} height={275} />
          </div>
        </div>

        {/* why merit */}
        <div className="relative  pb-16 ">
          <Image
            className="w-full object-contain object-top absolute h-full"
            src={keybg}
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#30434D] opacity-40"></div>
          <div className=" relative">
            <Text
              as="h1"
              className="text-[50px] text-white text-center font-inter leading-[48px] pt-[80px]"
            >
              Why MERIT?
            </Text>

            <div className="flex tab:flex-wrap justify-center gap-[15px] pt-[109px] mob:px-5">
              <Image className="w-[62px] h-[62px]" src={tdmatch} alt="" />
              <div>
                <Text
                  as="h1"
                  className="text-[40px] text-white text-center font-inter leading-[48px] "
                >
                  Teaming & Staffing Delays = Lost Revenue
                </Text>
                <Text className="text-[18px] text-white text-center  font-inter leading-[26px] pt-[50px] mx-auto max-w-[671px]">
                  <span className="font-bold"> 4-8 weeks → </span> The average
                  time BD teams take to assemble the right team. <br />
                  <span className="font-bold"> 30-60 days → </span>Typical delay
                  in staffing roles after a win, slowing execution. <br />
                  <span className="font-bold">35% of companies</span> miss
                  staffing deadlines, putting contracts and revenue at risk.
                </Text>
              </div>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center justify-center gap-[40px] pt-[49px] mob:px-5">
              <div className="flex items-center justify-between max-w-[671px] w-full ">
                <Text
                  as="h1"
                  className="text-[40px] text-white text-center font-inter leading-[48px] "
                >
                  Missed & Lost Opportunities
                </Text>
                <Image className="w-[62px] h-[62px]" src={missed} alt="" />
              </div>
              <Text className="text-[18px] text-white text-center  font-inter leading-[26px] mx-auto max-w-[671px]">
                <strong> 5-10 contracts lost per year, per company,</strong> due
                to slow teaming & staffing. <br />{" "}
                <strong> $10M-$50M in revenue lost annually </strong>from missed
                bids & execution delays. <br />{" "}
                <strong>80% of successful bids</strong> go to teams that
                <strong>position early</strong>—most BD teams react too late
              </Text>
            </div>
            {/* 3 */}
            <div className="flex tab:flex-wrap justify-center gap-[16px] pt-[64px] w-full  mob:px-5">
              <Image className="w-[62px] h-[62px]" src={bigger} alt="" />

              <div>
                <Text
                  as="h1"
                  className="text-[40px] text-white text-center font-inter leading-[48px] "
                >
                  The Bigger Issue: The Wrong <br className="mob:hidden" />{" "}
                  Teams Get Picked
                </Text>
                <Text className="text-[18px] text-white text-center  font-inter leading-[26px] pt-[40px] mx-auto max-w-[744px]">
                  BD teams{" "}
                  <strong>
                    choose partners & staff based on relationships, not data,
                  </strong>{" "}
                  leading to poor execution. <br />{" "}
                  <strong> Weak staff on proposals = Lower win rates</strong>{" "}
                  (agencies see through misaligned teams). <br />{" "}
                  <strong> The wrong prime or sub</strong>
                  can derail execution, causing{" "}
                  <strong>lost follow-on work & reputation damage.</strong>
                </Text>
              </div>
            </div>

            {/* 4 */}
            <div className="flex flex-col items-center justify-center gap-[40px] pt-[52px] mob:px-5">
              <div className="flex items-center justify-end gap-[50px] max-w-[869px] w-full ">
                <Text
                  as="h1"
                  className="text-[40px] text-white text-center font-inter leading-[48px] "
                >
                  Manual BD Workflows Waste Time <br className="mob:hidden" /> &
                  Resources
                </Text>
                <Image className="w-[62px] h-[62px]" src={manual} alt="" />
              </div>
              <Text className="text-[18px] text-white text-center  font-inter leading-[26px] mx-auto max-w-[791px]">
                <strong> 60% of BD teams</strong> waste time manually searching
                for partners & talent. <br />{" "}
                <strong> 50% of past performance data</strong> is scattered
                across outdated spreadsheets & emails. <br />{" "}
                <strong> 25-30 hours spent per proposal,</strong> often using
                incomplete or outdated data.
              </Text>
            </div>
            {/* <div className="flex tab:flex-wrap justify-center gap-[16px] pt-[52px] mob:px-5">
              <div>
                <Text
                  as="h1"
                  className="text-[40px] text-white text-center font-inter leading-[48px] "
                >
                  
                </Text>
                <Text className="text-[18px] text-white text-center  font-inter leading-[26px] pt-[40px] mx-auto max-w-[682px]">
                 
                </Text>
              </div>
              <Image className="w-[62px] h-[62px]" src={manual} alt="" />
            </div> */}
          </div>
          <Text className="text-[22px] font-inter text-center mt-[100px] relative mx-auto font-bold text-white max-w-[1130px] pb-[50px]">
            MERIT fixes this. AI-driven teaming, staffing, and BD intelligence
            eliminate inefficiencies—helping businesses move faster, win more,
            and execute flawlessly
          </Text>
        </div>
      </div>

      {/* unlock powwer */}
    </>
  );
};

export default KeyCapabilities;
