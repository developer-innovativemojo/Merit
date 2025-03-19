import React from "react";
// import Image from "next/image";

import Text from "@/components/ui/Text";
// import Button from "@/components/ui/Button";

// import keyslide from "@/public/images/new-landing/key Slider6 1.png";
// import keybg from "@/public/images/new-landing/kery bg.png";
// import tdmatch from "@/public/images/new-landing/traditional match.png";
// import gradt from "@/public/images/new-landing/grad-core-top.png";
import KeyCapabilitiesSlider from "./KeyCapabilitiesSlider";

const KeyCapabilities = () => {
  return (
    <>
      <div className="pt-32 bg-black">
        <Text
          as="h1"
          className="text-[50px] text-white text-center font-inter leading-[48px] mb-20"
        >
          Key Capabilities
        </Text>

        <KeyCapabilitiesSlider />

        {/* <div className="max-w-[1200px] min-h-[600px] mob:min-h-full rounded-[50px] mx-auto mt-10 bg-white flex flex-wrap items-center mob:mx-5">
          <div className="w-[50%] py-10 tab:w-full pl-10 pr-5 tab:px-5">
            <Text className="text-[#30434D] text-[32px] font-semibold leading-[100%] font-inter  ">
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
        </div> */}

        {/* why merit */}
      </div>

      {/* unlock powwer */}
    </>
  );
};

export default KeyCapabilities;
