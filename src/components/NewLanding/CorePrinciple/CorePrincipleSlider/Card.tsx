"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import testimonials from "@/lib/corprinciple"; // Adjust import based on the actual structure of your testimonials data

interface CardProps {
  isActive: boolean;
  activeIndex: number;
}

const Card: React.FC<CardProps> = ({ isActive, activeIndex }) => {
  const [scale, setScale] = useState<number>(1); // initial scale set to 1
  const [isScaled, setIsScaled] = useState<boolean>(false); // state to track if the image should scale

  // Find the testimonial for the given activeIndex
  const testimonial = testimonials.find((item) => item.id === activeIndex);

  // UseEffect to trigger scaling after 2 seconds delay
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setScale(1.5); // scale the image after 2 seconds
        setIsScaled(true); // mark that scaling should happen
      }, 50); // 2 second delay

      return () => clearTimeout(timer); // Cleanup timeout if the component is unmounted or active status changes
    } else {
      setScale(1); // reset scale if the slide is not active
    }
  }, [isActive]); // Run the effect when `isActive` changes

  return (
    <>
      {testimonial?.avatar && (
        <div
          className="transition-transform duration-700 ease-in-out w-[447px]"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <Image
            src={testimonial?.avatar}
            alt="avatar"
            className="transition-transform duration-700 ease-in-out pl-[67px]"
          />
        </div>
      )}
    </>
  );
};

export default Card;
