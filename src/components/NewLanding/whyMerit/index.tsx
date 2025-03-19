"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import Text from "@/components/ui/Text";

import keybg from "@/public/images/new-landing/kery bg.png";
import tdmatch from "@/public/images/new-landing/traditional match.png";

const WhyMerit = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    const images = document.querySelectorAll(".animate-rotate360");

    images.forEach((image) => {
      const animation = gsap.to(image, {
        rotation: 360, // Rotate 360 degrees
        duration: 0.5, // Run for 2 seconds
        ease: "linear",
        paused: true, // Initially paused
      });

      ScrollTrigger.create({
        trigger: image,
        start: "top bottom", // When image enters viewport
        onEnter: () => {
          animation.play(); // Start animation
          setTimeout(() => {
            animation.pause(); // Stop animation after 2 seconds
          }, 2000);
        },
      });
    });
  }, []);

  return (
    <div className="gradientKeyCap pt-32">
      <div className="relative min-h-screen pb-16">
        <Image
          className="object-cover absolute w-full h-full"
          src={keybg}
          alt=""
        />

        <Text
          as="h1"
          className="text-[50px] text-white text-center font-inter leading-[48px] pt-[80px]"
        >
          Why MERIT?
        </Text>

        <div className="flex tab:flex-wrap justify-center gap-[15px] pt-[109px] mob:px-5">
          <Image
            className="w-[62px] h-[62px] animate-rotate360"
            src={tdmatch}
            alt=""
          />
          <div>
            <Text
              as="h1"
              className="text-[40px] text-white text-center font-inter leading-[48px]"
            >
              Teaming & Staffing Delays = Lost Revenue
            </Text>
          </div>
        </div>

        <div className="flex tab:flex-wrap mob:flex-col-reverse justify-center gap-[16px] pt-[40px] mob:px-5">
          <div>
            <Text
              as="h1"
              className="text-[40px] text-white text-center font-inter leading-[48px]"
            >
              Missed & Lost Opportunities
            </Text>
          </div>
          <Image
            className="w-[62px] h-[62px] mob:mx-auto animate-rotate360"
            src={tdmatch}
            alt=""
          />
        </div>

        <div className="flex tab:flex-wrap justify-center gap-[16px] pt-[40px] mob:px-5">
          <Image
            className="w-[62px] h-[62px] animate-rotate360"
            src={tdmatch}
            alt=""
          />
          <div>
            <Text
              as="h1"
              className="text-[40px] text-white text-center font-inter leading-[48px]"
            >
              The Bigger Issue: The Wrong Teams Get Picked
            </Text>
          </div>
        </div>

        <div className="flex tab:flex-wrap justify-center gap-[16px] pt-[40px] mob:px-5">
          <div>
            <Text
              as="h1"
              className="text-[40px] text-white text-center font-inter leading-[48px]"
            >
              Manual BD Workflows Waste Time & Resources
            </Text>
          </div>
          <Image
            className="w-[62px] h-[62px] animate-rotate360"
            src={tdmatch}
            alt=""
          />
        </div>
      </div>

      <Text className="text-[24px] font-inter text-center mx-auto font-bold text-white max-w-[1130px] pb-[50px]">
        MERIT fixes this. AI-driven teaming, staffing, and BD intelligence
        eliminate inefficiencies—helping businesses move faster, win more, and
        execute flawlessly
      </Text>
    </div>
  );
};

export default WhyMerit;
