
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  textColor?: string;
}

const Logo = ({ size = 'medium', className = '', textColor = 'text-secondary dark:text-white' }: LogoProps) => {
  const sizeClasses = {
    small: 'h-6',
    medium: 'h-8',
    large: 'h-12'
  };

  const textSizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  return (
    <Link to="/" className={`flex items-center hover:opacity-90 transition-opacity ${className}`}>
      <img 
        src="/lovable-uploads/e4c89fa3-8fe6-4a6a-9121-105a13dbc077.png" 
        alt="MERIT Logo" 
        className={`${sizeClasses[size]} mr-2`} 
      />
      <span className={`font-bold ${textSizeClasses[size]} ${textColor}`}>
        MERIT
      </span>
    </Link>
  );
};

export default Logo;
