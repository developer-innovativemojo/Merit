
import React, { useState } from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, 
  SidebarGroupContent, SidebarGroupLabel, SidebarMenu, 
  SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Users, LineChart, MessageSquare, LayoutDashboard, Brain, Settings, Award } from "lucide-react";
import Header from "@/components/dashboard/Header";
import OpportunitiesPipeline from "@/components/dashboard/OpportunitiesPipeline";
import PartnerNetwork from "@/components/dashboard/PartnerNetwork";
import AITeamMatching from "@/components/dashboard/AITeamMatching";
import CollaborationHub from "@/components/dashboard/CollaborationHub";
import AnalyticsDashboard from "@/components/dashboard/AnalyticsDashboard";
import QuickActions from "@/components/dashboard/QuickActions";
import AIMatchingPromo from "@/components/dashboard/AIMatchingPromo";
import CompetitionIncumbents from "@/components/dashboard/CompetitionIncumbents";
import Logo from '@/components/Logo';
import InviteButton from '@/components/invite/InviteButton';
import ContextualInvitePrompt from '@/components/invite/ContextualInvitePrompt';
import { useNavigate } from 'react-router-dom';

type NavItem = 'dashboard' | 'ai-matching' | 'partners' | 'collaboration' | 'analytics' | 'competition';

const TeamingDashboard = () => {
  const [activeNav, setActiveNav] = useState<NavItem>('dashboard');
  const navigate = useNavigate();

  // Sample data for contextual prompts (would normally come from state or API)
  const sampleOpportunity = {
    opportunityName: "Federal Healthcare Initiative"
  };

  const renderContent = () => {
    switch(activeNav) {
      case 'dashboard':
        return (
          <>
            <AIMatchingPromo />
            <div className="mt-6">
              <QuickActions />
            </div>
            <div className="mt-6">
              <OpportunitiesPipeline />
            </div>
          </>
        );
      case 'ai-matching':
        return <AITeamMatching />;
      case 'partners':
        return (
          <>
            <ContextualInvitePrompt 
              type="partner" 
              data={{ partnerName: "Acme Solutions" }} 
            />
            <PartnerNetwork />
          </>
        );
      case 'collaboration':
        return <CollaborationHub />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'competition':
        return <CompetitionIncumbents />;
      default:
        return (
          <>
            <QuickActions />
            <div className="mt-6">
              <OpportunitiesPipeline />
            </div>
          </>
        );
    }
  };

  // Navigation items for consistent rendering
  const navItems = [
    { 
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    { 
      id: 'ai-matching',
      label: 'AI Team Matching',
      icon: Brain
    },
    { 
      id: 'partners',
      label: 'Partners',
      icon: Users
    },
    { 
      id: 'competition',
      label: 'Competition & Incumbents',
      icon: Award
    },
    { 
      id: 'collaboration',
      label: 'Collaboration',
      icon: MessageSquare
    },
    { 
      id: 'analytics',
      label: 'Analytics',
      icon: LineChart
    }
  ];

  return (
    <div className="min-h-screen bg-light flex flex-col">
      <SidebarProvider>
        <TooltipProvider delayDuration={0}>
          <div className="flex flex-1 w-full overflow-hidden">
            {/* Fixed width sidebar */}
            <Sidebar className="z-30">
              <SidebarContent>
                <SidebarGroup>
                  <div className="p-4">
                    <Logo size="small" textColor="text-secondary dark:text-white" />
                    <div className="mt-2 px-2 py-1 bg-secondary/10 rounded">
                      <SidebarGroupLabel className="text-secondary dark:text-white font-bold">MERIT BD</SidebarGroupLabel>
                    </div>
                  </div>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {navItems.map((item) => (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton 
                            onClick={() => setActiveNav(item.id as NavItem)} 
                            isActive={activeNav === item.id}
                            tooltip={item.label}
                            className="transition-all duration-200 ease-in-out"
                          >
                            <div className={`
                              ${activeNav === item.id ? 
                                'text-primary font-semibold bg-primary/5 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-primary' : 
                                'text-sidebar-foreground hover:text-primary/80 hover:bg-primary/5'
                              }
                              rounded-md overflow-hidden w-full flex items-center gap-2 px-2 py-1
                            `}>
                              <item.icon className={`h-5 w-5 ${activeNav === item.id ? 'text-primary' : ''}`} />
                              <span>{item.label}</span>
                            </div>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                      
                      {/* Settings item */}
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          onClick={() => navigate('/bd-settings')} 
                          isActive={false}
                          tooltip="Settings"
                          className="transition-all duration-200 ease-in-out"
                        >
                          <div className="text-sidebar-foreground hover:text-primary/80 hover:bg-primary/5 rounded-md overflow-hidden w-full flex items-center gap-2 px-2 py-1">
                            <Settings className="h-5 w-5" />
                            <span>Settings</span>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            
            {/* Main content area with proper overflow handling */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
              <Header />
              
              <main className="flex-1 p-6 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                  {renderContent()}
                </div>
              </main>

              <InviteButton />
            </div>
          </div>
        </TooltipProvider>
      </SidebarProvider>
    </div>
  );
};

export default TeamingDashboard;
