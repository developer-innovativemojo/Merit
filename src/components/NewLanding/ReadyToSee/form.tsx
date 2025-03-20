import React from "react";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
const Form = () => {
  return (
    <div
      className="w-full max-w-[598px]"
      data-aos="fade-down"
      data-aos-duration="900"
      data-aos-easing="ease-in-sine"
    >
      <form className="max-w-[671px] mx-auto mt-[-295px] mob:mt-0 rounded-[20px] border-2 border-[#4FB848] bg-white  space-y-[40px] px-[30px] py-[60px]">
        <div className="flex tab:flex-wrap gap-[24px]">
          <div className="w-1/2 tab:w-full space-y-[23px]">
            <Text className="font-inter text-[18px] text-[#30434D]">
              First Name
            </Text>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-[#4FB848] h-[61px] px-3 rounded-[12px] placeholder:text-opacity-60 outline-none text-[18px] text-[#30434D] placeholder:text-[18px] placeholder:text-[#30434D]"
            />
          </div>
          <div className="w-1/2 tab:w-full space-y-[23px]">
            <Text className="font-inter text-[18px] text-[#30434D]">
              Last Name
            </Text>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-[#4FB848] h-[61px] px-3 rounded-[12px] placeholder:text-opacity-60 outline-none text-[18px] text-[#30434D] placeholder:text-[18px] placeholder:text-[#30434D]"
            />
          </div>
        </div>

        <div className="w-full space-y-[23px]">
          <Text className="font-inter text-[18px] text-[#30434D]">Email</Text>
          <input
            type="text"
            placeholder="Email"
            className="w-full border border-[#4FB848] h-[61px] px-3 rounded-[12px] placeholder:text-opacity-60 outline-none text-[18px] text-[#30434D] placeholder:text-[18px] placeholder:text-[#30434D]"
          />
        </div>

        <div className="w-full space-y-[23px] pb-6">
          <Text className="font-inter text-[18px] text-[#30434D]">Message</Text>
          <textarea
            placeholder="Leave us a message..."
            className="w-full border border-[#4FB848] placeholder:text-opacity-60 h-[222px] px-3 pt-3 rounded-[12px] outline-none text-[18px] text-[#30434D] placeholder:text-[18px] placeholder:text-[#30434D] resize-none"
          />
        </div>

        <Button
          type="submit"
          className="bg-[#4FB848] w-full rounded-[12px] h-[61px] text-[18px] leading-[26px] text-white font-inter "
        >
          Send message
        </Button>
      </form>
    </div>
  );
};

export default Form;
