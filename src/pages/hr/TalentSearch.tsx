
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import HRSidebar from '@/components/hr/HRSidebar';
import Header from '@/components/dashboard/Header';
import PageTemplate from '@/components/hr/PageTemplate';
import { Search } from 'lucide-react';
import InviteButton from '@/components/invite/InviteButton';

const TalentSearch = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-light">
        <HRSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-6">
            <PageTemplate 
              title="Talent Search" 
              description="Advanced search tools for finding the right talent"
              icon={<Search className="h-5 w-5 text-primary" />}
            >
              <div className="min-h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Talent search tools will be displayed here</p>
              </div>
            </PageTemplate>
          </main>
          
          <InviteButton />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default TalentSearch;
