"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 w-full h-full"
      options={{
        fullScreen: false,
        particles: {
          number: { value: 80, density: { enable: true, area: 400 } }, // Closer spacing
          color: { value: "#000000" },
          shape: { type: "circle" },
          opacity: { value: 0.9, random: false },
          size: { value: 4.5, random: true }, // Bigger dots
          move: {
            enable: true,
            speed: 0.5, // Slower for smooth effect
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
            trail: {
              enable: true,
              length: 1,
              fillColor: "#ffffff00", // Transparent trail effect
            },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false }, // No interaction
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
