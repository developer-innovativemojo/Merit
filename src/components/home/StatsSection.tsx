
import React, { useEffect, useRef, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { TypeAnimation } from 'react-type-animation';

interface StatsSectionProps {
  isVisible: boolean;
}

const StatsSection = ({ isVisible }: StatsSectionProps) => {
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check if section is in viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Use both props visibility and scroll-based visibility
  const isComponentVisible = isVisible && sectionInView;

  return (
    <div className="mt-16 pt-6" ref={sectionRef}>
      <Separator className="mb-6 bg-white/10" />
      
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-10 text-white">
        <div className="stat-item opacity-0 animate-floatIn stagger-1" style={{animationFillMode: 'forwards'}}>
          <div className="h-10 flex items-center">
            {isComponentVisible ? (
              <TypeAnimation
                sequence={[
                  500, // Delay before starting
                  '1M+',
                ]}
                wrapper="p"
                speed={25}
                className="text-3xl font-bold text-primary"
                cursor={false}
              />
            ) : (
              <p className="text-3xl font-bold text-primary">1M+</p>
            )}
          </div>
          <p className="text-white/80 text-sm">Organizations in DB</p>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/20 self-center"></div>
        
        <div className="stat-item opacity-0 animate-floatIn stagger-2" style={{animationFillMode: 'forwards'}}>
          <div className="h-10 flex items-center">
            {isComponentVisible ? (
              <TypeAnimation
                sequence={[
                  900, // Delay more for second stat
                  '24/7',
                ]}
                wrapper="p"
                speed={25}
                className="text-3xl font-bold text-primary"
                cursor={false}
              />
            ) : (
              <p className="text-3xl font-bold text-primary">24/7</p>
            )}
          </div>
          <p className="text-white/80 text-sm">AI Matching Uptime</p>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/20 self-center"></div>
        
        <div className="stat-item opacity-0 animate-floatIn stagger-3" style={{animationFillMode: 'forwards'}}>
          <div className="h-10 flex items-center">
            {isComponentVisible ? (
              <TypeAnimation
                sequence={[
                  1300, // Delay most for third stat
                  '15+',
                ]}
                wrapper="p"
                speed={25} 
                className="text-3xl font-bold text-primary"
                cursor={false}
              />
            ) : (
              <p className="text-3xl font-bold text-primary">15+</p>
            )}
          </div>
          <p className="text-white/80 text-sm">Federal Agencies</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
