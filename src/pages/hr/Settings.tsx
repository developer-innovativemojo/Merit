
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from "@/components/ui/tooltip";
import HRSidebar from '@/components/hr/HRSidebar';
import Header from '@/components/dashboard/Header';
import PageTemplate from '@/components/hr/PageTemplate';
import { Settings, Users, Bell, Palette, AccessibilityIcon } from 'lucide-react';
import { RefinedTabs, RefinedTabsList, RefinedTabsTrigger, RefinedTabsContent } from '@/components/ui/refined-tabs';
import InviteManagement from '@/components/invite/InviteManagement';
import AccountPreferences from '@/components/settings/AccountPreferences';
import DisplayOptions from '@/components/settings/DisplayOptions';
import AccessibilitySettings from '@/components/settings/AccessibilitySettings';
import InviteButton from '@/components/invite/InviteButton';

const HRSettings = () => {
  const [activeTab, setActiveTab] = useState('invites');

  return (
    <SidebarProvider>
      <TooltipProvider delayDuration={0}>
        <div className="flex min-h-screen w-full bg-light">
          <HRSidebar />
          
          <div className="flex-1 flex flex-col">
            <Header />
            
            <main className="flex-1 p-6">
              <PageTemplate 
                title="Settings" 
                description="Configure HR dashboard preferences"
                icon={<Settings className="h-5 w-5 text-primary" />}
              >
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
              </PageTemplate>
            </main>
            
            <InviteButton />
          </div>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
};

export default HRSettings;
