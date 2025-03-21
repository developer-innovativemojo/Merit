"use client";

import React from "react";
import Image from "next/image";
import testimonials from "@/lib/corprinciple";

interface CardProps {
  slideIndex: number;
}

const Card: React.FC<CardProps> = ({ slideIndex }) => {
  const testimonial = testimonials.find((item) => item.id === slideIndex);

  return (
    <>
      {testimonial?.avatar && (
        <div className="w-[447px] mob:w-full mob:flex mob:justify-center mob:items-center transition-transform duration-1000 ease-in-out">
          <Image
            src={testimonial?.avatar}
            alt="avatar"
            className="ml-[-121px] mob:ml-0 mob:mx-auto"
          />
        </div>
      )}
    </>
  );
};

export default Card;
