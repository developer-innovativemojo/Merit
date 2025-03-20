"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   CardOneContent,
//   CardtwoContent,
//   CardThreeContent,
//   CardfourContent,
//   CardfiveContent,
//   CardsixContent,
// } from "./ServicesContent";

import dbaimg from "@/imgs/home/dna.png";
import b1 from "@/imgs/services/pngaaa 10.png";
import b2 from "@/imgs/services/pngaaa 11.png";
import b3 from "@/imgs/services/pngaaa 12.png";
import b4 from "@/imgs/services/pngaaa 13.png";

gsap.registerPlugin(ScrollTrigger);

const ServicesStackSection = () => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRef4 = useRef(null);
  const cardRef5 = useRef(null);
  const cardRef6 = useRef(null);

  useEffect(() => {
    // Animation for the first card
    gsap.to(cardRef1.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: cardRef1.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animation for the second card
    gsap.to(cardRef2.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: cardRef2.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animation for the third card
    gsap.to(cardRef3.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: cardRef3.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
    // Animation for the four card
    gsap.to(cardRef4.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: cardRef1.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animation for the five card
    gsap.to(cardRef5.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: cardRef2.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animation for the six card
    gsap.to(cardRef6.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: cardRef3.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div
        className="flex mob:hidden  justify-center  relative "
        id="what-we-do"
      >
        {/* <div className="sticky top-0 w-[90%]  flex justify-center ">
        <Image src={dbaimg} alt="" width={1024} height={768} />
      </div> */}
        <div className=" relative max-w-[1440px]">
          {/* bg imgs design */}

          <div
            ref={cardRef1}
            className="  w-full min-h-screen flex items-center sticky top-[0px] text-accent "
          >
            <div className="h-[500px] bg-red-500 tab:h-[70%] mob:h-auto w-[500px] mob:pb-[25px] rounded-[24px]"></div>
          </div>

          <div
            ref={cardRef2}
            className="w-full  min-h-screen flex items-center sticky top-[0px]  mob:pt-[0px] bg-white"
          >
            <div className="h-[500px] tab:h-[70%] bg-yellow-500 mob:h-auto w-[500px] mob:pb-[25px] rounded-t-[24px] rounded-b-[20px] "></div>
          </div>

          <div
            ref={cardRef3}
            className="w-full min-h-screen flex items-center sticky top-[0px]  mob:pt-[0px] bg-white"
          >
            <div className="h-[500px] tab:h-[80%] mob:min-h[80vh] mob:h-auto mob:pb-[25px] w-[500px] bg-orange-500 rounded-t-[24px] rounded-b-[18px]"></div>
          </div>
          <div
            ref={cardRef4}
            className="w-full min-h-screen flex items-center sticky top-[0px] mob:pt-[0px] bg-white"
          >
            <div className="h-[500px] tab:h-[80%] mob:min-h[80vh] mob:h-auto mob:pb-[25px] w-[500px] bg-black rounded-t-[24px] rounded-b-[18px]"></div>
          </div>
          <div
            ref={cardRef5}
            className="w-full min-h-screen flex items-center sticky top-[0px] mob:pt-[0px] bg-white"
          >
            <div className="h-[500px] tab:h-[80%] mob:min-h[80vh] mob:h-auto mob:pb-[25px] w-[500px] bg-blue-500 rounded-t-[24px] rounded-b-[18px]"></div>
          </div>
          <div
            ref={cardRef6}
            className="w-full  min-h-screen flex items-center sticky top-[0px]  mob:pt-[0px] py-20 bg-white"
          >
            <div className="h-[500px] tab:h-[80%] mob:min-h[80vh] mob:h-auto mob:pb-[25px] w-[500px] bg-gray-500 rounded-t-[24px] rounded-b-[18px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStackSection;

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedCards = () => {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     cardRefs.current.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         { y: -100 }, // Start position slightly above viewport
//         {
//           y: 0, // Moves down naturally
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top bottom", // Triggers when the top of the card hits the bottom of the viewport
//             end: "top top", // Ends when the top of the card reaches the top of the viewport
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="flex flex-col items-center space-y-6 p-10">
//       {[...Array(6)].map((_, index) => (
//         <div
//           key={index}
//           ref={(el) => (cardRefs.current[index] = el)}
//           className="w-80 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg"
//         >
//           Card {index + 1}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AnimatedCards;
