
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, 
  SidebarGroupContent, SidebarGroupLabel, SidebarMenu, 
  SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Settings, Users, Bell, Palette, AccessibilityIcon, Brain, LayoutDashboard, 
  LineChart, MessageSquare, Award, Users as UsersIcon } from 'lucide-react';
import { RefinedTabs, RefinedTabsList, RefinedTabsTrigger, RefinedTabsContent } from '@/components/ui/refined-tabs';
import Header from "@/components/dashboard/Header";
import InviteManagement from '@/components/invite/InviteManagement';
import AccountPreferences from '@/components/settings/AccountPreferences';
import DisplayOptions from '@/components/settings/DisplayOptions';
import AccessibilitySettings from '@/components/settings/AccessibilitySettings';
import InviteButton from '@/components/invite/InviteButton';
import Logo from '@/components/Logo';

const BDSettings = () => {
  const [activeTab, setActiveTab] = useState('invites');
  const navigate = useNavigate();
  
  // Navigation items for consistent rendering - match with TeamingDashboard.tsx
  const navItems = [
    { 
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/teaming-dashboard'
    },
    { 
      id: 'ai-matching',
      label: 'AI Team Matching',
      icon: Brain,
      path: '/teaming-dashboard?view=ai-matching'
    },
    { 
      id: 'partners',
      label: 'Partners',
      icon: UsersIcon,
      path: '/teaming-dashboard?view=partners'
    },
    { 
      id: 'competition',
      label: 'Competition & Incumbents',
      icon: Award,
      path: '/teaming-dashboard?view=competition'
    },
    { 
      id: 'collaboration',
      label: 'Collaboration',
      icon: MessageSquare,
      path: '/teaming-dashboard?view=collaboration'
    },
    { 
      id: 'analytics',
      label: 'Analytics',
      icon: LineChart,
      path: '/teaming-dashboard?view=analytics'
    },
    { 
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      path: '/bd-settings'
    }
  ];

  return (
    <div className="min-h-screen bg-light">
      <SidebarProvider>
        <TooltipProvider delayDuration={0}>
          <div className="flex min-h-screen w-full">
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
                            onClick={() => navigate(item.path)} 
                            isActive={item.id === 'settings'}
                            tooltip={item.label}
                            className="transition-all duration-200 ease-in-out"
                          >
                            <div className={`
                              ${item.id === 'settings' ? 
                                'text-primary font-semibold bg-primary/5 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-primary' : 
                                'text-sidebar-foreground hover:text-primary/80 hover:bg-primary/5'
                              }
                              rounded-md overflow-hidden w-full flex items-center gap-2 px-2 py-1
                            `}>
                              <item.icon className={`h-5 w-5 ${item.id === 'settings' ? 'text-primary' : ''}`} />
                              <span>{item.label}</span>
                            </div>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
              <Header />
              
              <main className="flex-1 p-6 overflow-y-auto">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold">Settings</h1>
                  <p className="text-muted-foreground mt-1">Configure BD dashboard preferences</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm">
                  <RefinedTabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                    <RefinedTabsList className="px-4 md:px-6">
                      <RefinedTabsTrigger value="invites" className="md:flex-1">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="hidden sm:inline">Invitations</span>
                        <span className="inline sm:hidden">Invites</span>
                      </RefinedTabsTrigger>
                      <RefinedTabsTrigger value="account" className="md:flex-1">
                        <Bell className="h-4 w-4 mr-2" />
                        <span>Account</span>
                      </RefinedTabsTrigger>
                      <RefinedTabsTrigger value="display" className="md:flex-1">
                        <Palette className="h-4 w-4 mr-2" />
                        <span>Display</span>
                      </RefinedTabsTrigger>
                      <RefinedTabsTrigger value="accessibility" className="md:flex-1">
                        <AccessibilityIcon className="h-4 w-4 mr-2" />
                        <span className="hidden sm:inline">Accessibility</span>
                        <span className="inline sm:hidden">Access</span>
                      </RefinedTabsTrigger>
                    </RefinedTabsList>
                    
                    <div className="p-4 md:p-6">
                      <RefinedTabsContent value="invites">
                        <InviteManagement />
                      </RefinedTabsContent>
                      
                      <RefinedTabsContent value="account">
                        <AccountPreferences />
                      </RefinedTabsContent>
                      
                      <RefinedTabsContent value="display">
                        <DisplayOptions />
                      </RefinedTabsContent>
                      
                      <RefinedTabsContent value="accessibility">
                        <AccessibilitySettings />
                      </RefinedTabsContent>
                    </div>
                  </RefinedTabs>
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

export default BDSettings;
