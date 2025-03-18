import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import dot from "@/public/images/new-landing/Dot Grid.png";
import container from "@/public/images/new-landing/Icon Container.svg";
import merit from "@/public/images/new-landing/Slider7 3.png";
import intrnal from "@/public/images/new-landing/Slider4 2.png";

const MeritImapct = () => {
  return (
    <div className="relative px-5 bg-white flex justify-center items-center overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 z-10">
        <Image
          src={dot}
          alt="gradtop"
          fill
          className="object-cover bg-repeat opacity-70"
        />
      </div>

      {/* Main content */}
      <div className="w-full max-w-[1200px] flex justify-center items-center relative z-20">
        <div className="w-full">
          {/* merit impact */}
          <Text
            as="h1"
            className="text-[40px] mb-[80px] mt-0 text-center font-bold"
          >
            <span className="text-accentGreen">MERIT</span> Impact
          </Text>
          <div className="flex flex-wrap justify-center items-center w-full gap-[135px] mob:gap-6 mb-[85px] mob:mb-[30px]">
            <div className="flex gap-2 w-full max-w-[470px]">
              <Image src={container} alt="container" />
              <Text className="font-inter text-[18px]">
                <strong> 60% Reduction in manual BD effort</strong>—less
                searching, more winning.
              </Text>
            </div>

            {/* 2 */}

            <div className="flex gap-2 w-full max-w-[470px]">
              <Image src={container} alt="container" />
              <Text className="font-inter text-[18px]">
                <strong> 60% Reduction in manual BD effort</strong>—less
                searching, more winning.
              </Text>
            </div>
            {/* 3 */}
            <div className="flex gap-2 w-full max-w-[470px]">
              <Image src={container} alt="container" />
              <Text className="font-inter text-[18px]">
                <strong> 60% Reduction in manual BD effort</strong>—less
                searching, more winning.
              </Text>
            </div>

            {/* 4 */}
            <div className="flex gap-2 w-full max-w-[470px]">
              <Image src={container} alt="container" />
              <Text className="font-inter text-[18px]">
                <strong> 60% Reduction in manual BD effort</strong>—less
                searching, more winning.
              </Text>
            </div>
          </div>

          {/* merit capabilities */}
          <Text
            as="h1"
            className="text-[40px] mb-[150px] mob:mb-8 mt-0 text-center font-bold text-accentGreen"
          >
            MERIT’s <span className="text-black"> Capabilities</span> – Faster
            Teaming, Smarter Matching, and Better Business Development
          </Text>

          <div className="flex justify-between xl:justify-center xl:flex-wrap items-start mb-[150px] xl:items-center xl:gap-[40px] mob:mb-[50px]">
            <div className="w-full max-w-[695px]">
              <Text className="font-inter text-[25px] w-full max-w-[700px] mb-6 text-accentGreen font-bold">
                AI-Driven Matching for Growth, Bids, and Contracts
              </Text>
              <ul className="text-[18px] font-inter space-y-[25px] text-black">
                <li>
                  <span className="text-accentGreen font-semibold">
                    Instant Teaming & Partner Discovery:
                  </span>{" "}
                  MERIT matches your organization with the best primes, subs,
                  and talent for bids and current projects
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    AI-Powered Search Beyond Spreadsheets:
                  </span>{" "}
                  MERIT ranks <strong>vendors, candidates, and partners</strong>
                  based on past performance, agency relationships, and contract
                  fit.
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Seamless Team Collaboration:
                  </span>{" "}
                  BD, HR, Recruiting, and Operations work together in Ranks{" "}
                  <strong>one platform</strong> for{" "}
                  <strong>faster, data-driven staffing & teaming.</strong>
                </li>
              </ul>
            </div>
            <Image
              src={merit}
              alt="fix"
              className=""
              width={519}
              height={455}
            />
          </div>

          {/* internal and externla */}

          <div className="flex justify-between xl:justify-center flex-row-reverse xl:flex-wrap items-start mb-[150px] xl:items-center mob:mb-[50px] xl:gap-[40px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeritImapct;
