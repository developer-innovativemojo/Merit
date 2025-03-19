"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

import Text from "@/components/ui/Text";

import leaderboarPhone from "@/public/images/new-landing/key1.png";
import notes from "@/public/images/new-landing/key1.png";
import plan from "@/public/images/new-landing/key1.png";
import track from "@/public/images/new-landing/key1.png";

import r2screen1 from "@/public/images/new-landing/key1.png";
import r2screen2 from "@/public/images/new-landing/key1.png";
import r2screen3 from "@/public/images/new-landing/key1.png";
import r2screen4 from "@/public/images/new-landing/key1.png";
import r2screen5 from "@/public/images/new-landing/key1.png";
import r2screen6 from "@/public/images/new-landing/key1.png";
import r2screen7 from "@/public/images/new-landing/key1.png";
import r2screen8 from "@/public/images/new-landing/key1.png";

const sliderData = [
  {
    image: leaderboarPhone,
    title: "Easy To Follow Videos ",
    descriptionOne: `Know exactly what to do every day — it’s never been easier to train with high-definition video guidance, detailed target areas, modifications, and more. `,
  },
  {
    image: notes,
    title: "Notes & Logging ",
    descriptionOne: `Keep track of your weights and reps with our robust notes and logging experience to see your progression.`,
  },
  {
    image: plan,
    title: "Plan For Success",
    descriptionOne: `See your month at a glance with our intuitive calendar to help you plan out your workouts and keep you on track and on target.`,
  },
  {
    image: track,
    title: "Track Everything",
    descriptionOne: `Set the standard for your overall health by tracking sleep, heart rate, steps, workouts, and more. `,
  },
];
const sliderData2 = [
  {
    image: r2screen7,
  },
  {
    image: r2screen8,
  },
  {
    image: r2screen6,
  },
  {
    image: r2screen5,
  },
  {
    image: r2screen4,
  },
  {
    image: r2screen3,
  },
  {
    image: r2screen2,
  },
  {
    image: r2screen1,
  },
];
const INTERVAL_TIME = 5000000000000000;

const OnScrolSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let images = gsap.utils.toArray("#image-itemscroll") as HTMLElement[];
    let images2 = gsap.utils.toArray("#image-item2scroll") as HTMLElement[];

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=2000",
      pin: true,
      scrub: true,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress * 2000; // assuming end value of scrollTrigger
        if (progress < 600) {
          setCurrentIndex(0);
        } else if (progress < 1200) {
          setCurrentIndex(1);
        } else if (progress < 1800) {
          setCurrentIndex(2);
        } else {
          setCurrentIndex(3);
        }
      },
    });

    gsap.to(images, {
      y: -1900,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: true,
      },
    });

    gsap.to(images2, {
      y: 3280, // Opposite direction to image-item
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftTextRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.fromTo(
      leftTextRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    ).fromTo(
      leftTextRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );

    animationRef.current = tl;

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === sliderData.length - 1) return 0;
        else return prev + 1;
      });
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="nonemob mx-auto max-w-7xl px-5 mob:mb-[50px] mob:w-full mob:px-5"
      ref={containerRef}
    >
      <div className="flex min-h-screen items-center justify-center mob:flex-col mob:gap-[60px]">
        {/* Left Side */}
        <div className="mb-20 w-[50%] mob:w-full" data-aos="fade-up">
          <div ref={leftTextRef}>
            <div>
              <Text
                as="h1"
                className="flex max-w-[442px] items-center gap-[18px] text-[60px]"
              >
                {sliderData[currentIndex].title}
              </Text>
            </div>

            <Text className="488px mt-5 w-[80%] text-[16px] font-normal leading-[28px] text-[#FFFFFF99]/60 mob:w-full">
              {sliderData[currentIndex].descriptionOne}
            </Text>
          </div>
          {/* Slider bullets */}
          <div className="mt-[30px] flex items-center gap-3 mob:justify-center">
            {sliderData.map((item, index) => (
              <div
                className={cn(
                  "h-[16px] w-[16px] rounded-full bg-[#535358] transition-all duration-300",
                  currentIndex === index && "w-[60px] bg-white"
                )}
                key={index}
                // onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div
          className="flex h-[800px] w-[50%] justify-center gap-[50px] overflow-hidden mob:w-full"
          data-aos="fade-in"
          data-aos-delay="400"
        >
          {/* Inner Blue Box Container */}
          <div id="image-itemscroll" className="relative">
            {/* Render only the current image for each section */}
            <Image
              key={currentIndex}
              src={sliderData[currentIndex].image}
              alt={sliderData[currentIndex].title}
              className="relative top-[200px] mb-[30px] max-w-[269px] mob:h-[360px] mob:w-[176px]"
            />
          </div>
          <div id="image-item2scroll" className="relative">
            {/* Render one image for the second set corresponding to the current index */}
            <Image
              key={currentIndex}
              src={sliderData2[currentIndex % sliderData2.length].image}
              alt="r2"
              className="relative top-[-3500px] mb-[30px] max-w-[269px] mob:h-[360px] mob:w-[176px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnScrolSlide;
