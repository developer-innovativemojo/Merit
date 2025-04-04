
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  delay: number;
  isVisible: boolean;
  isActive?: boolean;
  showBadge?: boolean;
  isAnimated?: boolean;
}

const RoleCard = ({ 
  icon, 
  title, 
  description, 
  onClick,
  onMouseEnter,
  onMouseLeave,
  delay,
  isVisible,
  isActive = false,
  showBadge = false,
  isAnimated = false
}: RoleCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip open={isActive ? true : undefined}>
        <TooltipTrigger asChild>
          <Card 
            className={`role-card enhanced-role-card bg-[#2A3543] border border-white/10 backdrop-blur-sm rounded-xl cursor-pointer h-full opacity-0 translate-y-4 ${isVisible ? 'animate-fadeIn' : ''} 
              ${isActive ? 'active-card-animation' : ''}
              ${isAnimated ? 'demo-animated-card' : ''}
              ${showBadge ? 'demo-completed' : ''}
            `} 
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ 
              animationDelay: `${1 + delay}s`,
              animationFillMode: 'forwards',
              transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, background-color 0.3s ease'
            }}
          >
            {showBadge && (
              <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-lg z-10">
                Try Demo
              </div>
            )}
            <div className="pulse-corner absolute top-3 right-3"></div>
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="icon-container mb-4 p-5 bg-white/5 rounded-full relative">
                <div className={`absolute inset-0 bg-primary/10 rounded-full transform scale-0 transition-transform duration-300 ${isActive ? 'scale-100' : ''}`}></div>
                <div className="relative">
                  {icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/70">{description}</p>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="bg-secondary text-white border-primary/20">
          <p>Select this role to try the demo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RoleCard;
