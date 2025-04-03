"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Text from "../ui/Text";

import slide1 from "@/public/images/new-landing/coreslider3.png";
import slide2 from "@/public/images/new-landing/coreslider1.png";
import slide3 from "@/public/images/new-landing/key4.png";
import slide4 from "@/public/images/new-landing/key3.png";
import slide5 from "@/public/images/new-landing/key2.png";
import slide6 from "@/public/images/new-landing/key1.png";

export default function ScrollSyncPage() {
  const normalRef = useRef<HTMLDivElement>(null);
  const reverseRef = useRef<HTMLDivElement>(null);
  // Keep track of the desired scroll position and the current animated value.
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  useEffect(() => {
    const normalDiv = normalRef.current;
    const reverseDiv = reverseRef.current;
    if (!normalDiv || !reverseDiv) return;

    // Adjust this factor to slow down the scroll delta.
    const scrollSpeedFactor = 0.8;
    let animationFrameId: number;

    // Update the target scroll position on wheel events.
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetScroll.current += e.deltaY * scrollSpeedFactor;
      // Clamp the target scroll between 0 and the maximum scroll height.
      const maxScroll = normalDiv.scrollHeight - normalDiv.clientHeight;
      if (targetScroll.current < 0) targetScroll.current = 0;
      if (targetScroll.current > maxScroll) targetScroll.current = maxScroll;
    };

    // Attach the wheel event to both containers (passive false so preventDefault works)
    normalDiv.addEventListener("wheel", handleWheel, { passive: false });
    reverseDiv.addEventListener("wheel", handleWheel, { passive: false });

    // Smoothly animate the scroll position toward the target value.
    const smoothScroll = () => {
      // Use a damping factor to interpolate (adjust 0.1 for smoothness)
      currentScroll.current +=
        (targetScroll.current - currentScroll.current) * 0.1;
      normalDiv.scrollTop = currentScroll.current;
      reverseDiv.scrollTop = currentScroll.current;
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    return () => {
      normalDiv.removeEventListener("wheel", handleWheel);
      reverseDiv.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex justify-center items-center mob:hidden">
      <div className="flex justify-center items-center max-w-[1200px]">
        {/* First container: Normal scrolling (cards appear from bottom) */}
        <div
          ref={normalRef}
          className="h-[636px] min-w-[600px] overflow-y-auto space-y-[200px] no-scrollbar bg-white rounded-l-[50px]"
        >
          {/* 1 */}
          <div className="w-full py-10 flex justify-center items-center min-h-[636px]">
            <div className="w-full max-w-[502px]">
              <Text className="text-[#30434D] text-[32px] font-semibold mb-[17px] px-3">
                AI-Driven Strategic Matching
              </Text>
              <Text className="text-[#30434D] text-[18px] leading-[26px] font-inter ml-2 mt-[17px]">
                Identifies optimal connections between organizations,
                businesses, suppliers, and associations based on <br />
                <span className="font-bold">
                  real-time needs, expertise, and operational goals.
                </span>
              </Text>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full py-10 flex justify-center items-center min-h-[636px]">
            <div className="w-full max-w-[502px]">
              <Text className="text-[#30434D] text-[32px] leading-[38px] font-semibold mb-[17px] px-3">
                Data-Driven Decision Intelligence
              </Text>
              <Text className="text-[#30434D] text-[18px] leading-[26px] font-inter ml-2 mt-[17px]">
                Delivers{" "}
                <strong> real-time analytics, industry benchmarking,</strong>{" "}
                and predictive insights to support smarter{" "}
                <strong> hiring, procurement, and business strategies.</strong>
              </Text>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full py-10 flex justify-center items-center min-h-[636px]">
            <div className="w-full max-w-[502px]">
              <Text className="text-[#30434D] text-[32px] leading-[39px] font-semibold mb-[17px] px-3">
                Supplier & Partnership Optimization
              </Text>
              <Text className="text-[#30434D] text-[16px] leading-[26px] font-inter ml-2 mt-[17px]">
                <strong>Uses AI-powered analytics</strong> to{" "}
                <strong>
                  enhance corporate supplier diversity, subcontracting
                  partnerships, and B2B matchmaking.
                </strong>
              </Text>
            </div>
          </div>
          {/* 4 */}
          <div className="w-full py-10 flex justify-center items-center min-h-[636px]">
            <div className="w-full max-w-[502px]">
              <Text className="text-[#30434D] text-[32px] leadig-[39px] font-semibold mb-[17px] px-3">
                AI-Augmented Workforce Matching
              </Text>
              <Text className="text-[#30434D] text-[18px] leading-[26px] font-inter ml-2 mt-[17px]">
                Matches{" "}
                <strong>
                  {" "}
                  talent to job opportunities, bids, projects, and leadership
                  development programs
                </strong>{" "}
                while <strong>minimizing bias</strong> through
                <strong> context-aware AI filtering.</strong>
              </Text>
            </div>
          </div>

          {/* 5 */}
          <div className="w-full py-10 flex justify-center items-center min-h-[636px]">
            <div className="w-full max-w-[502px]">
              <Text className="text-[#30434D] text-[32px] leadig-[39px] font-semibold mb-[17px] px-3">
                Optimized Association & Business Networks
              </Text>
              <Text className="text-[#30434D] text-[18px] leading-[26px] font-inter ml-2 mt-[17px]">
                Helps associations, member-based organizations, and professional
                groups enhance engagement, collaboration, and strategic
                partnerships.
              </Text>
            </div>
          </div>

          {/* 6 */}

          <div className="w-full py-10 flex justify-center items-center min-h-[636px]">
            <div className="w-full max-w-[502px]">
              <Text className="text-[#30434D] text-[32px] leadig-[39px] font-semibold mb-[17px] px-3">
                API & System Integration
              </Text>
              <Text className="text-[#30434D] text-[18px] leading-[26px] font-inter ml-2 mt-[17px]">
                <strong>Plug MERIT into any existing system </strong>{" "}
                (Salesforce, Workday, SAP Ariba, Oracle, HubSpot, etc.) for a
                <strong> seamless, automated workflow</strong> with{" "}
                <strong>zero additional workload.</strong>
              </Text>
            </div>
          </div>
        </div>

        {/* Second container: Reversed scrolling (cards appear from top) */}
        <div
          ref={reverseRef}
          className="h-[636px] overflow-y-auto rotate-180 w-full min-w-[600px] space-y-[200px] no-scrollbar key-cap-grad rounded-l-[50px]"
        >
          <div className="w-full h-[636px] flex justify-center items-center rotate-180">
            <Image
              src={slide1}
              alt=""
              width={494}
              height={275}
              className="rounded-[20px]"
            />
          </div>
          <div className="w-full h-[636px] flex justify-center items-center rotate-180">
            <Image
              src={slide2}
              alt=""
              width={494}
              height={275}
              className="rounded-[20px]"
            />
          </div>
          <div className="w-full h-[636px] flex justify-center items-center rotate-180">
            <Image src={slide3} alt="" width={494} height={275} />
          </div>
          <div className="w-full h-[636px] flex justify-center items-center rotate-180">
            <Image src={slide4} alt="" width={494} height={275} />
          </div>
          <div className="w-full h-[636px] flex justify-center items-center rotate-180">
            <Image src={slide5} alt="" width={494} height={275} />
          </div>
          <div className="w-full h-[636px] flex justify-center items-center rotate-180">
            <Image src={slide6} alt="" width={494} height={275} />
          </div>
        </div>
      </div>
    </div>
  );
}
