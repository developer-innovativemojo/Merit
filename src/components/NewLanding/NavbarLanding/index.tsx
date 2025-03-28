"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";

import Drawer from "@/components/ui/Drawer";
import logo from "@/public/images/new-landing/Logo MERIT white.png";
import moblogo from "@/public/images/new-landing/mob-logo.svg";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = usePathname();

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      const listItems = document.querySelectorAll(".list-items");
      gsap.set(listItems, { opacity: 0, x: 20 });
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className=" top-[0px]  z-50 w-full">
        <div className="flex justify-center items-center w-full ">
          <div className="relative bg-[#30434D] mob:bg-transparent rounded-[50px] max-w-[1276px] min-h-[108px] mob:min-h-full mob:mt-[58px] w-full flex flex-wrap items-center justify-between mx-auto mt-[61px] mob:rounded-[0px] ">
            <div className="flex items-center justify-between w-full gap-[35px] mx-auto max-w-[949px] mob:px-8 ">
              <Link href="/" className=" mob:w-[140px] ">
                <Image
                  src={logo}
                  alt="Flowbite Logo"
                  width={188}
                  height={63}
                  className="mob:hidden"
                />
                <Image
                  src={moblogo}
                  alt="Flowbite Logo"
                  width={288}
                  height={63}
                  className="mob:block hidden"
                />
              </Link>
              <div className="flex items-center xl:hidden ">
                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-gray-700 dark:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>

                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  <ul className="font-normal mob:absolute mob:top-[100px] items-center mob:px-4 mob:left-0 mob:w-full z-50 flex  py-4  gap-[37px] md:flex-row rtl:space-x-reverse md:mt-0 tab:bg-black">
                    <li>
                      <Link
                        href="/#about"
                        // onClick={() => setActiveTab("/who-we-are")}
                        className={`block text-[18px] font-inter font-bold leading-[26px] ${
                          currentPath === "#"
                            ? "text-accentGreen font-semibold"
                            : "text-white"
                        }`}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#corePrinciple"
                        // onClick={() => setActiveTab("/who-we-are")}
                        className={`block text-[18px] font-inter font-bold leading-[26px] ${
                          currentPath === "#"
                            ? "text-accentGreen font-semibold"
                            : "text-white"
                        }`}
                      >
                        Core Principles
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#howmeritcompares"
                        // onClick={() => setActiveTab("/who-we-are")}
                        className={`block text-[18px] font-inter font-bold leading-[26px] ${
                          currentPath === "#"
                            ? "text-accentGreen font-semibold"
                            : "text-white"
                        }`}
                      >
                        How MERIT Compares
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        href="#"
                        // onClick={() => setActiveTab("/who-we-are")}
                        className={`block text-[18px] font-inter font-bold leading-[26px] ${
                          currentPath === "#"
                            ? "text-accentGreen font-semibold"
                            : "text-white"
                        }`}
                      >
                        Why MERIT?
                      </Link>
                    </li> */}
                    <Link href="/#contact">
                      <Button className="bg-[#4FB848] rounded-[20px] max-w-[137px] h-[44px]">
                        Contact Us
                      </Button>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="hidden xl:block">
                <div className="relative cursor-pointer flex" onClick={onOpen}>
                  <button
                    type="button"
                    className="inline-flex items-center w-10 h-10 justify-center text-sm border border-[#fff]/90 bg-[#fff] text-[#00297A] rounded-lg"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-[30px] h-[30px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="#4FB848"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <ul className="font-normal w-full z-50 flex flex-col py-4 gap-0">
                    {[
                      { id: "#about", label: "About" },
                      { id: "#corePrinciple", label: "Core Principles" },
                      { id: "#howmeritcompares", label: "How MERIT Compares" },
                      { id: "#contact", label: "Contact Us" },
                    ].map(({ id, label }) => (
                      <a
                        href={id}
                        key={id}
                        onClick={onClose} // Close drawer when clicked
                        className={`block text-[20px] font-montserrat font-medium leading-[25.5px] ${
                          currentPath === id
                            ? "text-accentGreen font-semibold"
                            : "text-[#FFFFFF]"
                        }`}
                      >
                        <li className="flex justify-center py-[15px] list-items">
                          {label}
                        </li>
                        <hr className="h-px bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                      </a>
                    ))}
                  </ul>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
