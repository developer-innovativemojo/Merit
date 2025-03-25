import React from "react";
import Image from "next/image";

import Text from "../ui/Text";
import dot from "@/public/images/new-landing/Dot Grid.png";
import merit from "@/public/images/new-landing/prove-results.png";
import intrnal from "@/public/images/new-landing/Slider4 2.png";
const Meritcapabilities = () => {
  return (
    <div
      className="relative px-5 flex justify-center items-center bg-contain overflow-hidden"
      style={{
        backgroundImage: "url('/images/new-landing/Dot Grid.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        // minHeight: "1030px"
      }}
    >
      <div className="w-full max-w-[1200px] flex justify-center items-center relative z-20">
        <div
          className="w-full"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          {/* <Text
            as="h1"
            className="text-[50px] mob:text-[32px] mob:leading-[40px] mob:mt-[100px] mb-[150px] mob:mb-[83px] mt-0 text-center font-bold text-accentGreen"
          >
            MERIT’s <span className="text-black"> Capabilities</span> – Faster
            Teaming, Smarter Matching, and Better Business Development
          </Text> */}
          <Text
            as="h1"
            className="text-[50px] mb-[115px] mob:my-[73px] text-center font-bold mob:text-[32px]"
          >
            Proven <span className="text-accentGreen">Results</span>
          </Text>
          <div className="flex justify-between xl:justify-center xl:flex-wrap-reverse items-center mb-[150px] mob:gap-[20px] xl:items-center xl:gap-[40px] mob:mb-[73px]">
            <div className="w-full max-w-[465px]">
              {/* <Text className="font-inter text-[25px] w-full max-w-[700px] mb-6 text-accentGreen font-bold">
                AI-Driven Matching for Growth, Bids, and Contracts
              </Text> */}
              <ul className="text-[18px] font-inter space-y-[25px] text-[#30434D] mob:text-center">
                <li>
                  <span className="text-accentGreen font-semibold">60%</span>{" "}
                  cut in manual business development tasks
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">80%</span> of
                  winning bids go to teams positioned early—MERIT delivers that
                  edge
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">3×</span>{" "}
                  faster bid responses
                </li>
              </ul>
            </div>
            <Image
              src={merit}
              alt="fix"
              className="w-full max-w-[690px]"
              width={519}
              height={383}
            />
          </div>

          {/* internal and externla */}

          {/* <div className="flex justify-between xl:justify-center flex-row-reverse xl:flex-wrap-reverse items-start xl:items-center xl:gap-[40px]">
            <div className="w-full max-w-[695px]">
              <Text className="font-inter text-[25px] w-full max-w-[700px] mb-6 text-accentGreen font-bold">
                Internal & External Talent Optimization
              </Text>
              <ul className="text-[18px] font-inter space-y-[25px] text-black">
                <li>
                  <span className="text-accentGreen font-semibold">
                    Maximize Internal Talent First:
                  </span>{" "}
                  The best-fit candidate{" "}
                  <strong> may already be in your organization.</strong> MERIT
                  makes{" "}
                  <strong>
                    past applicants, current employees, and subcontractor
                    databases instantly searchable.
                  </strong>
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Teaming & Relationship Intelligence:
                  </span>{" "}
                  AI-powered <strong>relationship mapping</strong> helps BD
                  teams{" "}
                  <strong>
                    see past partnerships, subcontracting trends, and the best
                    teaming combinations—without the guesswork.
                  </strong>
                </li>
              </ul>
            </div>
            <Image
              src={intrnal}
              alt="fix"
              className=""
              width={519}
              height={455}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Meritcapabilities;
