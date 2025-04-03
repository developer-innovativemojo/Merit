import React from "react";
import Image from "next/image";
import testimonials from "@/lib/corprinciple";

interface NextCardProps {
  isNext: boolean;
  nextIndex: number;
}

const NextCard: React.FC<NextCardProps> = ({ isNext, nextIndex }) => {
  // Find the testimonial for the given nextIndex
  const testimonial = testimonials.find((item) => item.id === nextIndex);

  return (
    <>
      <div
        className={`relative min-h-[377.81px] mt-[150px] w-[343.26px] max-w-[343px] ${
          isNext ? "transform scale-[1.2]" : "transform scale-[1]"
        } transition-all duration-[0.5s] ease-in-out`} // Adjusted duration for smoother transitions
      >
        {testimonial?.avatar && (
          <Image
            src={testimonial?.avatar}
            alt="image"
            className="ml-[-100px]"
          />
        )}
      </div>
    </>
  );
};

export default NextCard;
