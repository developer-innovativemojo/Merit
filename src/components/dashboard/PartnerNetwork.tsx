import React, { useState } from 'react';
import { Search, Filter, Star, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefinedTabs, RefinedTabsList, RefinedTabsTrigger, RefinedTabsContent } from '@/components/ui/refined-tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const myNetworkPartners = [
  {
    id: '1',
    name: 'TechSolutions Inc.',
    logo: 'TS',
    capabilities: ['Cloud Infrastructure', 'DevSecOps', 'Data Analytics'],
    experience: ['DOD', 'DHS', 'VA'],
    rating: 4.8,
    contractTypes: ['IDIQ', 'T&M'],
  },
  {
    id: '2',
    name: 'SecurityWare Systems',
    logo: 'SS',
    capabilities: ['Cybersecurity', 'Risk Management', 'Compliance'],
    experience: ['DOD', 'Treasury', 'DOJ'],
    rating: 4.5,
    contractTypes: ['FFP', 'IDIQ'],
  },
  {
    id: '3',
    name: 'DataVision Partners',
    logo: 'DP',
    capabilities: ['AI/ML', 'Business Intelligence', 'Data Warehousing'],
    experience: ['NASA', 'NOAA', 'DOE'],
    rating: 4.3,
    contractTypes: ['T&M', 'CPFF'],
  }
];

const recommendedPartners = [
  {
    id: '4',
    name: 'CloudSphere Technologies',
    logo: 'CT',
    capabilities: ['Cloud Migration', 'DevOps Automation', 'System Integration'],
    experience: ['DOD', 'State', 'HHS'],
    rating: 4.6,
    contractTypes: ['FFP', 'T&M'],
  },
  {
    id: '5',
    name: 'AgileDefend Solutions',
    logo: 'AS',
    capabilities: ['Cybersecurity', 'Zero Trust Architecture', 'Compliance'],
    experience: ['DOD', 'FBI', 'DHS'],
    rating: 4.7,
    contractTypes: ['IDIQ', 'CPFF'],
  }
];

const PartnerCard = ({ partner }: { partner: typeof myNetworkPartners[0] }) => {
  return (
    <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar className="h-12 w-12 bg-primary/10 text-primary border border-primary/20">
              <AvatarFallback>{partner.logo}</AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="font-medium text-secondary">{partner.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-gray-600">{partner.rating}</span>
              </div>
            </div>
          </div>
          
          <Button variant="ghost" size="icon">
            <Plus className="h-5 w-5 text-primary" />
          </Button>
        </div>
        
        <div className="mt-4">
          <div className="text-xs text-gray-500 mb-2">Capabilities</div>
          <div className="flex flex-wrap gap-1">
            {partner.capabilities.map((capability) => (
              <Badge key={capability} variant="outline" className="bg-gray-50">
                {capability}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <div className="text-xs text-gray-500 mb-2">Agency Experience</div>
          <div className="flex flex-wrap gap-1">
            {partner.experience.map((agency) => (
              <Badge key={agency} className="bg-secondary/10 text-secondary border-none">
                {agency}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <div className="text-xs text-gray-500 mb-2">Contract Types</div>
          <div className="flex flex-wrap gap-1">
            {partner.contractTypes.map((type) => (
              <Badge key={type} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PartnerNetwork = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('my-network');

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-secondary">Partner Network</h2>
      </div>
      
      <Card className="mb-6 bg-white border-gray-200">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search partners by name, capability, or contract type..." 
                className="pl-9 py-2 pr-3 h-10 rounded-md border border-gray-200 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button variant="outline" className="flex items-center gap-2 h-10">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-white rounded-lg shadow-sm">
        <RefinedTabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <RefinedTabsList className="px-4 md:px-6">
            <RefinedTabsTrigger value="my-network">My Network</RefinedTabsTrigger>
            <RefinedTabsTrigger value="recommended">AI Recommended</RefinedTabsTrigger>
          </RefinedTabsList>
          
          <div className="p-4">
            <RefinedTabsContent value="my-network">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myNetworkPartners.map(partner => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            </RefinedTabsContent>
            
            <RefinedTabsContent value="recommended">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedPartners.map(partner => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            </RefinedTabsContent>
          </div>
        </RefinedTabs>
      </div>
    </div>
  );
};

export default PartnerNetwork;
