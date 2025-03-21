import Text from "@/components/ui/Text";
import React from "react";

const HowMerit = () => {
  return (
    <div
      className="bg-[#30434D] bg-no-repeat bg-center bg-cover min-h-[504px] mob:min-h-[359px] flex justify-center items-center px-5 relative"
      style={{
        backgroundImage: "url('/images/new-landing/Dot Grid.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="py-5 relative"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <Text
          as="h1"
          className="text-[50px] mob:text-[32px] text-accentGreen font-bold text-center"
        >
          How MERIT
        </Text>
        <Text className="text-center mt-[54px] mob:mt-[20px] mob:text-[16px] text-white text-[24px] font-normal mx-auto max-w-[1200px]">
          MERIT{" "}
          <strong>optimizes decision-making and enhances collaboration</strong>{" "}
          across businesses, associations, and government agencies by creating
          <strong>
            AI-powered, scalable partnerships that drive measurable success.
          </strong>
        </Text>
      </div>
    </div>
  );
};

export default HowMerit;
