
import React, { useState } from 'react';
import { Award, Calendar, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import CompetitorInsightChart from '@/components/dashboard/CompetitorInsightChart';
import { RefinedTabs, RefinedTabsList, RefinedTabsTrigger, RefinedTabsContent } from '@/components/ui/refined-tabs';

// Mock data for competitors
const MOCK_COMPETITORS = [
  {
    id: 1,
    name: 'Acme Federal Solutions',
    winRate: 0.68,
    isIncumbent: true, 
    threatLevel: 'high' as const,
    keyAgencies: ['DoD', 'DHS', 'VA'],
    recentWins: 4,
    recentLosses: 1
  },
  {
    id: 2,
    name: 'TechGov Innovations',
    winRate: 0.52,
    isIncumbent: false,
    threatLevel: 'medium' as const,
    keyAgencies: ['HHS', 'DoD'],
    recentWins: 3,
    recentLosses: 2
  },
  {
    id: 3,
    name: 'FedTech Solutions',
    winRate: 0.38,
    isIncumbent: true,
    threatLevel: 'medium' as const,
    keyAgencies: ['GSA', 'DoE'],
    recentWins: 2,
    recentLosses: 3
  },
  {
    id: 4,
    name: 'GovServe Partners',
    winRate: 0.71,
    isIncumbent: false,
    threatLevel: 'high' as const,
    keyAgencies: ['DoD', 'DHS', 'DoJ'],
    recentWins: 5,
    recentLosses: 2
  },
  {
    id: 5,
    name: 'Public Sector Technologies',
    winRate: 0.42,
    isIncumbent: false,
    threatLevel: 'low' as const,
    keyAgencies: ['DoT', 'EPA'],
    recentWins: 2,
    recentLosses: 4
  },
  {
    id: 6,
    name: 'MERIT Corp',
    winRate: 0.65,
    isIncumbent: false,
    threatLevel: 'medium' as const,
    keyAgencies: ['DoD', 'DHS', 'HHS', 'VA'],
    recentWins: 6,
    recentLosses: 2,
    isYourCompany: true
  }
];

// Mock data for agency performance
const AGENCY_PERFORMANCE = {
  DoD: [
    { name: 'MERIT Corp', value: 75, isYourCompany: true, trend: 'up' as const, trendValue: 8 },
    { name: 'Acme Federal', value: 68, isIncumbent: true, trend: 'down' as const, trendValue: 3 },
    { name: 'GovServe', value: 80, trend: 'up' as const, trendValue: 5 },
    { name: 'TechGov', value: 45, trend: 'neutral' as const },
    { name: 'FedTech', value: 30, isIncumbent: true, trend: 'down' as const, trendValue: 7 },
    { name: 'Public Sector', value: 25, trend: 'down' as const, trendValue: 2 }
  ],
  DHS: [
    { name: 'MERIT Corp', value: 70, isYourCompany: true, trend: 'up' as const, trendValue: 12 },
    { name: 'Acme Federal', value: 65, isIncumbent: true, trend: 'down' as const, trendValue: 5 },
    { name: 'GovServe', value: 70, trend: 'neutral' as const },
    { name: 'TechGov', value: 35, trend: 'up' as const, trendValue: 4 },
    { name: 'FedTech', value: 25, trend: 'down' as const, trendValue: 10 },
    { name: 'Public Sector', value: 20, trend: 'neutral' as const }
  ],
  HHS: [
    { name: 'MERIT Corp', value: 62, isYourCompany: true, trend: 'up' as const, trendValue: 10 },
    { name: 'Acme Federal', value: 40, trend: 'down' as const, trendValue: 8 },
    { name: 'TechGov', value: 78, isIncumbent: true, trend: 'up' as const, trendValue: 6 },
    { name: 'FedTech', value: 32, trend: 'neutral' as const },
    { name: 'GovServe', value: 55, trend: 'up' as const, trendValue: 3 },
    { name: 'Public Sector', value: 60, trend: 'up' as const, trendValue: 15 }
  ],
  TopAgencies: [
    { name: 'MERIT Corp', value: 75, isYourCompany: true, trend: 'up' as const, trendValue: 8 },
    { name: 'GovServe', value: 80, trend: 'up' as const, trendValue: 5 },
    { name: 'TechGov', value: 78, isIncumbent: true, trend: 'up' as const, trendValue: 6 },
    { name: 'Acme Federal', value: 68, isIncumbent: true, trend: 'down' as const, trendValue: 3 },
    { name: 'Public Sector', value: 60, trend: 'up' as const, trendValue: 15 },
    { name: 'FedTech', value: 32, trend: 'neutral' as const }
  ]
};

// Indicator for competition strength
const getCompetitionStrength = (agency: string) => {
  const agencyData = AGENCY_PERFORMANCE[agency as keyof typeof AGENCY_PERFORMANCE];
  if (!agencyData) return 'medium';
  
  const yourCompanyData = agencyData.find(item => item.isYourCompany);
  const competitors = agencyData.filter(item => !item.isYourCompany);
  
  if (!yourCompanyData) return 'medium';
  
  const strongerCompetitors = competitors.filter(comp => comp.value > yourCompanyData.value);
  
  if (strongerCompetitors.length >= 3) return 'high';
  if (strongerCompetitors.length >= 1) return 'medium';
  return 'low';
};

const CompetitionIncumbents = () => {
  const [selectedAgency, setSelectedAgency] = useState('All');
  const [selectedTimeframe, setSelectedTimeframe] = useState('6m');
  const [selectedTab, setSelectedTab] = useState<string>('DoD');
  
  // Filter competitors based on selected agency
  const filteredCompetitors = selectedAgency === 'All' 
    ? MOCK_COMPETITORS
    : MOCK_COMPETITORS.filter(comp => comp.keyAgencies.includes(selectedAgency));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-secondary">Competition & Incumbents</h2>
          <p className="text-sm text-muted-foreground">
            Track competitor performance and identify teaming opportunities
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Agency:</span>
            <select 
              className="rounded-md border border-input bg-background px-3 py-1 text-sm"
              value={selectedAgency}
              onChange={(e) => setSelectedAgency(e.target.value)}
            >
              <option value="All">All Agencies</option>
              <option value="DoD">DoD</option>
              <option value="DHS">DHS</option>
              <option value="HHS">HHS</option>
              <option value="VA">VA</option>
              <option value="GSA">GSA</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Timeframe:</span>
            <select 
              className="rounded-md border border-input bg-background px-3 py-1 text-sm"
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
            >
              <option value="3m">Last 3 months</option>
              <option value="6m">Last 6 months</option>
              <option value="1y">Last year</option>
              <option value="2y">Last 2 years</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Top Competitors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            {filteredCompetitors
              .filter(comp => !comp.isYourCompany) // Don't show your company in competitors list
              .sort((a, b) => b.winRate - a.winRate)
              .slice(0, 5) // Show only top 5
              .map((competitor) => (
                <CompetitorCard key={competitor.id} competitor={competitor} />
              ))}
          </CardContent>
        </Card>
        
        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Agency Performance</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 flex-1 flex flex-col min-h-[450px]">
            <RefinedTabs 
              defaultValue="DoD" 
              value={selectedTab}
              onValueChange={(value) => setSelectedTab(value)}
              className="w-full flex flex-col flex-grow"
            >
              <RefinedTabsList className="w-full mb-2">
                <RefinedTabsTrigger 
                  value="TopAgencies" 
                  className="relative"
                  hasIndicator
                  indicatorColor="green"
                >
                  Top Agencies
                </RefinedTabsTrigger>
                <RefinedTabsTrigger 
                  value="DoD" 
                  className="relative"
                  hasIndicator={getCompetitionStrength('DoD') !== 'low'}
                  indicatorColor={getCompetitionStrength('DoD') === 'high' ? 'red' : 'amber'}
                >
                  DoD
                </RefinedTabsTrigger>
                <RefinedTabsTrigger 
                  value="DHS" 
                  className="relative"
                  hasIndicator={getCompetitionStrength('DHS') !== 'low'}
                  indicatorColor={getCompetitionStrength('DHS') === 'high' ? 'red' : 'amber'}
                >
                  DHS
                </RefinedTabsTrigger>
                <RefinedTabsTrigger 
                  value="HHS" 
                  className="relative"
                  hasIndicator={getCompetitionStrength('HHS') !== 'low'}
                  indicatorColor={getCompetitionStrength('HHS') === 'high' ? 'red' : 'amber'}
                >
                  HHS
                </RefinedTabsTrigger>
              </RefinedTabsList>
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                {Object.entries(AGENCY_PERFORMANCE).map(([key, data]) => (
                  <RefinedTabsContent 
                    key={key} 
                    value={key} 
                    className="transition-opacity animate-fade-in flex-1 flex flex-col h-full"
                  >
                    <CompetitorInsightChart data={data} agency={key} />
                  </RefinedTabsContent>
                ))}
              </div>
            </RefinedTabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Strategic Insights</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Teaming Opportunities</div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">3 New</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                FedTech Solutions is seeking partners for an upcoming DoD opportunity
              </p>
              <Button variant="link" size="sm" className="mt-2 px-0">
                View Details <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Recompete Alert</div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Priority</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                DHS contract with Acme Federal Solutions expires in 45 days
              </p>
              <Button variant="link" size="sm" className="mt-2 px-0">
                View Details <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm font-medium">Recent Changes</div>
              </div>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                  TechGov won DoD cloud migration contract
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                  Acme Federal hired 5 former DoD officials
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                  GovServe lost incumbent position at DHS
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitionIncumbents;
