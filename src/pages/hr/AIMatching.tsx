
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from "@/components/ui/tooltip";
import HRSidebar from '@/components/hr/HRSidebar';
import Header from '@/components/dashboard/Header';
import PageTemplate from '@/components/hr/PageTemplate';
import AIPoweredMatching from '@/components/hr/matching/AIPoweredMatching';
import CandidatesView from '@/components/hr/matching/CandidatesView';
import { RefinedTabs, RefinedTabsList, RefinedTabsTrigger, RefinedTabsContent } from '@/components/ui/refined-tabs';
import { Brain, Users } from 'lucide-react';
import InviteButton from '@/components/invite/InviteButton';
import { Toaster } from '@/components/ui/toaster';

const AIMatching = () => {
  const [activeTab, setActiveTab] = useState('ai-matching');

  return (
    <SidebarProvider>
      <TooltipProvider delayDuration={0}>
        <div className="flex min-h-screen w-full bg-light">
          <HRSidebar />
          
          <div className="flex-1 flex flex-col">
            <Header />
            
            <main className="flex-1 p-6">
              <PageTemplate 
                title="AI Matching" 
                description="Match candidates to job descriptions using AI"
                icon={<Brain className="h-5 w-5 text-primary" />}
              >
                <RefinedTabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                  <RefinedTabsList className="px-4 md:px-6">
                    <RefinedTabsTrigger value="ai-matching">
                      <span className="inline-flex items-center">
                        <Brain className="h-4 w-4 mr-2" /> 
                        AI Matching
                      </span>
                    </RefinedTabsTrigger>
                    <RefinedTabsTrigger value="candidates">
                      <span className="inline-flex items-center">
                        <Users className="h-4 w-4 mr-2" /> 
                        Candidates
                      </span>
                    </RefinedTabsTrigger>
                  </RefinedTabsList>
                  
                  <div className="p-4">
                    <RefinedTabsContent value="ai-matching">
                      <AIPoweredMatching />
                    </RefinedTabsContent>
                    
                    <RefinedTabsContent value="candidates">
                      <CandidatesView />
                    </RefinedTabsContent>
                  </div>
                </RefinedTabs>
              </PageTemplate>
            </main>
            
            <InviteButton />
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </SidebarProvider>
  );
};

export default AIMatching;
