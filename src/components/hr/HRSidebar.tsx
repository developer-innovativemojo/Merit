
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, 
  SidebarGroupContent, SidebarGroupLabel, SidebarMenu, 
  SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { 
  BarChart, 
  Brain,
  FileText, 
  Briefcase, 
  ListTodo, 
  Users, 
  MessageSquare, 
  Settings
} from 'lucide-react';
import Logo from '@/components/Logo';

const HRSidebar = () => {
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      path: '/hr-staffing-dashboard',
      icon: <BarChart className="h-5 w-5" />
    },
    {
      name: 'AI Matching',
      path: '/hr/ai-matching',
      icon: <Brain className="h-5 w-5" />
    },
    {
      name: 'Resume Database',
      path: '/hr/resume-database',
      icon: <FileText className="h-5 w-5" />
    },
    {
      name: 'Staffing Opportunities',
      path: '/hr/staffing-opportunities',
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      name: 'Talent Pools',
      path: '/hr/talent-pools',
      icon: <Users className="h-5 w-5" />
    },
    {
      name: 'Tasks & Pipeline',
      path: '/hr/tasks-pipeline',
      icon: <ListTodo className="h-5 w-5" />
    },
    {
      name: 'Collaboration',
      path: '/hr/collaboration',
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      name: 'Settings',
      path: '/hr/settings',
      icon: <Settings className="h-5 w-5" />
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <TooltipProvider delayDuration={0}>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <div className="p-4">
              <Logo size="small" textColor="text-secondary dark:text-white" />
              <div className="mt-2 px-2 py-1 bg-secondary/10 rounded">
                <SidebarGroupLabel className="text-secondary dark:text-white font-bold">MERIT HR</SidebarGroupLabel>
              </div>
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton 
                      asChild
                      isActive={isActive(item.path)}
                      tooltip={item.name}
                      className="transition-all duration-200 ease-in-out relative"
                    >
                      <Link 
                        to={item.path} 
                        className={`
                          ${isActive(item.path) ? 
                            'text-primary font-semibold bg-primary/5 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-primary' : 
                            'text-sidebar-foreground hover:text-primary/80 hover:bg-primary/5'
                          } 
                          rounded-md overflow-hidden
                        `}
                      >
                        <span className={`${isActive(item.path) ? 'text-primary' : ''}`}>
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </TooltipProvider>
  );
};

export default HRSidebar;
