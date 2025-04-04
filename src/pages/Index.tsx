
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import CorePrinciples from '@/components/home/CorePrinciples';
import ComparisonSection from '@/components/home/ComparisonSection';

const IndexPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (backgroundRef.current) {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <Header />
      <main className="flex-grow bg-gradient-to-br from-secondary/95 to-secondary/90 relative">
        <div 
          ref={backgroundRef}
          className="grid-overlay absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
          <div id="about">
            <HeroSection isVisible={isVisible} />
            <StatsSection isVisible={isVisible} />
          </div>
          <CorePrinciples isVisible={isVisible} />
          <ComparisonSection isVisible={isVisible} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndexPage;
