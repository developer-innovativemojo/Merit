
import React, { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import DashboardSelectionModal from './dashboard/DashboardSelectionModal';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

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
    <header className="w-full bg-secondary py-4 sticky top-0 z-50">
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
          
          {/*<Button 
            onClick={openDashboardModal}
            className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 transition-transform hover:scale-105"
          >
            Open Dashboard
          </Button>
          */}
          
          <Button 
            onClick={() => navigate('/signup')} 
            className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-6"
          >
            Contact Us
          </Button>
        </nav>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary p-0">
              <div className="flex flex-col space-y-4 p-6">
                <button 
                  onClick={() => {
                    scrollToSection('about');
                    document.querySelector('[data-radix-sheet-content]')?.setAttribute('data-state', 'closed');
                  }}
                  className="text-left text-white hover:text-primary transition-colors py-3 border-b border-white/10"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('principles');
                    document.querySelector('[data-radix-sheet-content]')?.setAttribute('data-state', 'closed');
                  }}
                  className="text-left text-white hover:text-primary transition-colors py-3 border-b border-white/10"
                >
                  Core Principles
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('compare');
                    document.querySelector('[data-radix-sheet-content]')?.setAttribute('data-state', 'closed');
                  }}
                  className="text-left text-white hover:text-primary transition-colors py-3 border-b border-white/10"
                >
                  How MERIT Compares
                </button>
                <Button 
                  onClick={() => navigate('/signup')} 
                  className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 w-full mt-4"
                >
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
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
