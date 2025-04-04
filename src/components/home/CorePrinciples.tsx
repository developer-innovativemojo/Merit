
import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CircleCheck, Zap, Star, MessageSquare, CircleUser } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

interface CorePrincipleProps {
  isVisible: boolean;
}

interface PrincipleCardProps {
  letter: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isVisible: boolean;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ letter, title, description, icon, index, isVisible }) => {
  return (
    <Card 
      className={`principle-card border border-white/10 bg-[#2A3543] backdrop-blur-sm h-full opacity-0 translate-y-4 ${isVisible ? 'animate-fadeIn' : ''}`}
      style={{ 
        animationDelay: `${0.5 + (index * 0.2)}s`,
        animationFillMode: 'forwards',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
        <div className="icon-container mb-2">
          {icon}
        </div>
        <span className="text-3xl md:text-4xl font-bold text-primary mb-2">{letter}</span>
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-xs md:text-sm text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

const CorePrinciples: React.FC<CorePrincipleProps> = ({ isVisible }) => {
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isSticky, setIsSticky] = useState(false);

  // Check if section is in viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
        }
      },
      { threshold: 0.3 } // Trigger when at least 10% of the element is visible
    );
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  // Handle sticky title on mobile
  useEffect(() => {
    if (!isMobile || !titleRef.current) return;

    const handleScroll = () => {
      if (!sectionRef.current || !titleRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
      
      if (sectionTop <= 0 && sectionBottom > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Use both props visibility and scroll-based visibility
  const isComponentVisible = isVisible && sectionInView;

  const principles = [
    {
      letter: "M",
      title: "Matching",
      description: "AI-driven connections across talent pools and partner networks",
      icon: <CircleUser className="h-8 w-8 text-primary" />
    },
    {
      letter: "E",
      title: "Efficiency",
      description: "Streamlined workflows that save time and cost",
      icon: <Zap className="h-8 w-8 text-primary" />
    },
    {
      letter: "R",
      title: "Results",
      description: "Measurable outcomes aligned to strategic objectives",
      icon: <Star className="h-8 w-8 text-primary" />
    },
    {
      letter: "I",
      title: "Innovation",
      description: "Cutting-edge strategies that modernize your BD",
      icon: <CircleCheck className="h-8 w-8 text-primary" />
    },
    {
      letter: "T",
      title: "Technology",
      description: "Automated, real-time collaboration for precise matching",
      icon: <MessageSquare className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div id="principles" className="mt-16 pt-8 relative" ref={sectionRef}>
      <Separator className="mb-8 bg-white/10" />
      
      {/* Modified title section to remove the sticky styling on mobile */}
      <div 
        ref={titleRef} 
        className={`text-center mb-8 ${
          isMobile ? "" : (isSticky ? "sticky top-0 bg-secondary/95 py-4 z-20 shadow-md" : "")
        }`}
      >
        <h2 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${isMobile ? "" : `opacity-0 ${isComponentVisible ? 'animate-fadeIn' : ''}`}`} 
          style={isMobile ? {} : { animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Core Principles of <span className="text-primary">MERIT</span>
        </h2>
        <p className={`text-white/80 max-w-xl mx-auto ${isMobile ? "" : `opacity-0 ${isComponentVisible ? 'animate-fadeIn' : ''}`}`}
          style={isMobile ? {} : { animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          Our platform is built on these fundamental principles to deliver exceptional value
        </p>
      </div>
      
      {/* Mobile view: vertical layout */}
      <div className="md:hidden space-y-4 px-2">
        {principles.map((principle, index) => (
          <PrincipleCard 
            key={principle.letter}
            letter={principle.letter}
            title={principle.title}
            description={principle.description}
            icon={principle.icon}
            index={index}
            isVisible={isComponentVisible}
          />
        ))}
      </div>
      
      {/* Desktop view: horizontal scrollable layout */}
      <div className="hidden md:block overflow-x-auto pb-4 hide-scrollbar">
        <div className="grid grid-cols-5 gap-6 w-full min-w-[calc(5*240px)] md:min-w-0">
          {principles.map((principle, index) => (
            <PrincipleCard 
              key={principle.letter}
              letter={principle.letter}
              title={principle.title}
              description={principle.description}
              icon={principle.icon}
              index={index}
              isVisible={isComponentVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorePrinciples;
