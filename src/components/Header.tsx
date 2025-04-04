
import React, { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import DashboardSelectionModal from './dashboard/DashboardSelectionModal';

const Header = () => {
  const navigate = useNavigate();
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

  const openDashboardModal = () => {
    setIsDashboardModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="w-full bg-secondary py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-6 items-center">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-primary transition-colors nav-item"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('principles')} 
            className="text-white hover:text-primary transition-colors nav-item"
          >
            Core Principles
          </button>
          <button 
            onClick={() => scrollToSection('compare')} 
            className="text-white hover:text-primary transition-colors nav-item"
          >
            How MERIT Compares
          </button>
          <Button 
            onClick={openDashboardModal}
            className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 transition-transform hover:scale-105"
          >
            Open Dashboard
          </Button>
          <Button 
            onClick={() => navigate('/signup')} 
            className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-6"
          >
            Contact Us
          </Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <div className="w-5 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-current"></span>
              <span className="w-full h-0.5 bg-current"></span>
              <span className="w-full h-0.5 bg-current"></span>
            </div>
          </Button>
        </div>
      </div>

      <DashboardSelectionModal 
        isOpen={isDashboardModalOpen} 
        onClose={() => setIsDashboardModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
