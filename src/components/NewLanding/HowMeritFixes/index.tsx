import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import dot from "@/public/images/new-landing/Dot Grid.png";
import fix from "@/public/images/new-landing/howfiox.png";

const HowMeritFixes = () => {
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
          <Text
            as="h1"
            className="text-[40px] my-[113px] mob:my-10 text-center font-bold mob:text-[30px]"
          >
            How <span className="text-accentGreen">MERIT</span> Fixes Business
            Development—Instantly
          </Text>
          <div className="flex justify-between xl:justify-center xl:flex-wrap items-center">
            <div className="w-full max-w-[695px]">
              <ul className="text-[18px] font-inter space-y-[25px] text-black">
                <li>
                  <span className="text-accentGreen font-semibold">
                    AI-Powered Teaming & Staffing:
                  </span>{" "}
                  Instantly finds{" "}
                  <strong>best-fit partners, subs, & talent</strong> for any
                  opportunity.
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Drag & Drop Matching:
                  </span>{" "}
                  Upload{" "}
                  <strong>
                    RFPs, SOWs, PWS, Job Reqs—AI scans & matches instantly.
                  </strong>
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Automated Scoring:
                  </span>{" "}
                  Ranks <strong>vendors, candidates, & teaming partners</strong>{" "}
                  based on{" "}
                  <strong>past performance & contract relevance.</strong>
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Faster Proposal Staffing:
                  </span>{" "}
                  Aligns <strong>internal & external talent instantly</strong>{" "}
                  to ensure the right people are in place.
                </li>
                <li>
                  <span className="text-accentGreen font-semibold">
                    Predictive BD Intelligence:
                  </span>{" "}
                  Identifies{" "}
                  <strong>
                    future contracts & teaming opportunities before they go
                    public.
                  </strong>
                </li>
              </ul>
            </div>
            <Image
              src={fix}
              alt="fix"
              className="h-[600px]"
              width={519}
              height={455}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowMeritFixes;
