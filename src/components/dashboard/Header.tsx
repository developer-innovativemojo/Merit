
import React from 'react';
import { Bell, Settings, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  // Determine if we're in the HR dashboard
  const isHRDashboard = location.pathname.startsWith('/hr') || location.pathname === '/hr-staffing-dashboard';
  
  // Determine the dashboard title based on the current route
  const getDashboardTitle = () => {
    if (location.pathname.startsWith('/hr')) {
      return "HR & Staffing Dashboard";
    } else if (location.pathname === '/hr-staffing-dashboard') {
      return "HR & Staffing Dashboard";
    } else if (location.pathname.includes('teaming')) {
      return "Team Management Dashboard";
    } else if (location.pathname.includes('competition')) {
      return "Competition & Incumbents Dashboard";
    } else {
      return "BD Dashboard";
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200 py-3 px-4 md:px-6 flex justify-between items-center w-full">
      <div className="flex items-center space-x-4 overflow-hidden">
        <h1 className="text-lg md:text-xl font-semibold text-secondary truncate">
          {getDashboardTitle()}
        </h1>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4 shrink-0">
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[1.25rem] h-5 bg-primary text-white flex items-center justify-center">
              3
            </Badge>
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 md:h-10 md:w-10 border border-gray-200">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-secondary text-white">JD</AvatarFallback>
          </Avatar>
          
          <div className="hidden md:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">ACME Solutions Inc.</p>
          </div>
          
          <Button variant="ghost" size="icon" className="ml-1">
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
