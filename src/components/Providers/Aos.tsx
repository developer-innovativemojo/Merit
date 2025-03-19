"use client";

import React, { ReactNode, useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";
interface MyProviderProps {
  children: ReactNode;
}

const AosProvider: React.FC<MyProviderProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return <div>{children}</div>;
};

export default AosProvider;
