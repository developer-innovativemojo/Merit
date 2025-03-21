"use client";
// import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Text from "@/components/ui/Text";

import logo from "@/public/images/new-landing/Logo MERIT 1.png";
import mobdecorationlogo from "@/public/images/new-landing/footer-image.png";
import decoration from "@/public/images/new-landing/Footer Decoration.png";

const FooterLanding = () => {
  // const [formData, setFormData] = useState({
  //     email: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [responseMessage, setResponseMessage] = useState("");
  // const { activeTab, setActiveTab } = useTabContext();
  const currentPath = usePathname();
  // const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  // };
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);

  //     try {
  //         const response = await fetch("/api/subscribe", {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //                 email: formData.email,
  //             }),
  //         });

  //         if (response.ok) {
  //             setResponseMessage("Thank you for your submission!");
  //             alert("You Have Subscribed successfully!");
  //         } else {
  //             setResponseMessage("Failed to submit. Please try again later.");
  //         }
  //     } catch (error) {
  //         console.log(error);
  //         setResponseMessage("An error occurred. Please try again.");
  //     } finally {
  //         setIsSubmitting(false);
  //     }
  // };

  return (
    <div className=" bg-white  pt-16 pb-6 px-5 mob:pb-16 mob:pt-0 relative">
      <div className="flex justify-start items-center overflow-hidden min-h-[450px] mob:min-h-[100%] max-w-[1200px] mx-auto">
        <div className="max-w-[964.82px] w-full flex flex-wrap gap-[55px] relative z-20 mob:flex-col mob:mt-[50px] mob:gap-[127px]">
          <div className="flex-col w-full max-w-[280px] mr-[67px]">
            <div className="mt-8">
              <Image src={logo} alt="" width={280} height={93} />
            </div>
          </div>

          {/* company */}
          <div className=" w-full max-w-[149px] mob:mt-5 ">
            <Text className="text-[#30434D] text-[24px] font-bold font-inter mob:text-[22px] mb-[28px]">
              Company
            </Text>

            <div className="flex flex-wrap gap-[25px] mob:flex-col">
              <Link
                href="#"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter    font-normal  mob:text-[15px]  ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                About Us
              </Link>
              <Link
                href="#"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter font-normal  mob:text-[15px]  ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                Careers
              </Link>

              <Link
                href="#"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter font-normal  mob:text-[15px]  ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                News
              </Link>

              <Link
                href="#"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter font-normal  mob:text-[15px] ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* social */}
          <div className=" w-full max-w-[149px] mob:mt-5 ">
            <Text className="text-[#30434D] text-[24px] font-bold font-inter mob:text-[22px] mb-[28px]">
              Social
            </Text>

            <div className="flex flex-wrap gap-[25px]">
              <Link
                href="#"
                className={`text-[#30434D] w-full  leading-[25.89px] text-[18px] uppercase font-inter   font-normal  mob:text-[15px]  ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                X
              </Link>
              <Link
                href="#"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter font-normal  mob:text-[15px]  ${
                  currentPath === "/#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                Linkedin
              </Link>

              <Link
                href="#"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter font-normal  mob:text-[15px]  ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                Facebook
              </Link>

              <Link
                href="#"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter font-normal  mob:text-[15px] ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                Telegram
              </Link>
            </div>
          </div>

          {/* legal */}
          <div className=" w-full max-w-[149px] mob:mt-5 ">
            <Text className="text-[#30434D] text-[24px] font-bold font-inter mob:text-[22px] mb-[28px]">
              Legal
            </Text>

            <div className="flex flex-wrap mob:flex-col gap-[25px]">
              <Link
                href="#"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter   font-normal  mob:text-[15px]  ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                Terms
              </Link>
              <Link
                href="/what-we-do"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter font-normal  mob:text-[15px]  ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                Privacy
              </Link>

              <Link
                href="#"
                className={`text-[#30434D]  leading-[25.89px] text-[18px] uppercase font-inter font-normal  mob:text-[15px]  ${
                  currentPath === "#"
                    ? "text-accentGreen font-semibold"
                    : "text-[#30434D]"
                }`}
              >
                Licenses
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute mob:relative right-0 bottom-0 h-full w-auto z-0 mob:max-w-[35%] mob:hidden"
        src={decoration}
        alt=""
        width={415.99}
        height={524.9}
      />
      <Image
        className="mob:block mt-[120px] hidden"
        src={mobdecorationlogo}
        alt=""
        width={415.99}
        height={524.9}
      />
    </div>
  );
};

export default FooterLanding;
