import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import HRSidebar from '@/components/hr/HRSidebar';
import Header from '@/components/dashboard/Header';
import PageTemplate from '@/components/hr/PageTemplate';
import { Users, CheckCircle, Search, Filter, Briefcase, Award, Clock } from 'lucide-react';
import InviteButton from '@/components/invite/InviteButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RefinedTabs, RefinedTabsList, RefinedTabsTrigger, RefinedTabsContent } from '@/components/ui/refined-tabs';

// Mock talent data - internal and external
const internalTalent = [
  { 
    id: 1, 
    name: 'Alex Johnson', 
    title: 'Senior Software Engineer', 
    skills: ['Java', 'Spring Boot', 'Microservices'],
    clearance: 'Top Secret',
    availability: '2 weeks',
    match: 92, 
    internal: true 
  },
  { 
    id: 2, 
    name: 'Morgan Smith', 
    title: 'DevOps Engineer', 
    skills: ['AWS', 'Terraform', 'CI/CD'],
    clearance: 'Secret',
    availability: 'Immediate',
    match: 88, 
    internal: true 
  },
  { 
    id: 3, 
    name: 'Taylor Wilson', 
    title: 'Data Scientist', 
    skills: ['Python', 'Machine Learning', 'TensorFlow'],
    clearance: 'Secret',
    availability: '1 month',
    match: 85, 
    internal: true 
  },
  { 
    id: 4, 
    name: 'Jordan Lee', 
    title: 'Project Manager', 
    skills: ['Agile', 'JIRA', 'Risk Management'],
    clearance: 'Public Trust',
    availability: '3 weeks',
    match: 78, 
    internal: true 
  }
];

const externalTalent = [
  { 
    id: 101, 
    name: 'Casey Rivera', 
    title: 'Security Architect', 
    skills: ['Zero Trust', 'NIST', 'Cloud Security'],
    clearance: 'Top Secret/SCI',
    availability: '1 month',
    match: 94, 
    internal: false 
  },
  { 
    id: 102, 
    name: 'Riley Thomas', 
    title: 'Full Stack Developer', 
    skills: ['React', 'Node.js', 'MongoDB'],
    clearance: 'Secret',
    availability: '2 weeks',
    match: 87, 
    internal: false 
  },
  { 
    id: 103, 
    name: 'Jamie Garcia', 
    title: 'UX/UI Designer', 
    skills: ['Figma', 'User Research', 'Prototyping'],
    clearance: 'Public Trust',
    availability: 'Immediate',
    match: 82, 
    internal: false 
  },
  { 
    id: 104, 
    name: 'Avery Collins', 
    title: 'Systems Architect', 
    skills: ['Enterprise Architecture', 'Solution Design', 'Azure'],
    clearance: 'Secret',
    availability: '1 month',
    match: 79, 
    internal: false 
  }
];

const getMatchBadge = (match: number) => {
  if (match >= 90) {
    return <Badge className="bg-green-100 text-green-800">{match}% Match</Badge>;
  } else if (match >= 80) {
    return <Badge className="bg-blue-100 text-blue-800">{match}% Match</Badge>;
  } else {
    return <Badge className="bg-amber-100 text-amber-800">{match}% Match</Badge>;
  }
};

const TalentPools = () => {
  const [activeTab, setActiveTab] = useState('internal');

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-light">
        <HRSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-6">
            <PageTemplate 
              title="Talent Pools" 
              description="Browse and manage internal and external talent"
              icon={<Users className="h-5 w-5 text-primary" />}
            >
              <div className="bg-white rounded-lg shadow-sm">
                <RefinedTabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                  <RefinedTabsList className="px-4 md:px-6">
                    <RefinedTabsTrigger value="internal">Internal Talent</RefinedTabsTrigger>
                    <RefinedTabsTrigger value="external">External Candidates</RefinedTabsTrigger>
                  </RefinedTabsList>
                  
                  <div className="p-4">
                    <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          placeholder={`Search ${activeTab === 'internal' ? 'internal talent' : 'external candidates'}...`} 
                          className="pl-10"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Skills" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Skills</SelectItem>
                            <SelectItem value="technical">Technical</SelectItem>
                            <SelectItem value="management">Management</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Clearance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Clearances</SelectItem>
                            <SelectItem value="ts-sci">TS/SCI</SelectItem>
                            <SelectItem value="ts">Top Secret</SelectItem>
                            <SelectItem value="secret">Secret</SelectItem>
                            <SelectItem value="public">Public Trust</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <RefinedTabsContent value="internal" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {internalTalent.map(talent => (
                          <Card key={talent.id}>
                            <CardContent className="p-5">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="text-lg font-medium">{talent.name}</div>
                                  <div className="text-sm text-muted-foreground">{talent.title}</div>
                                </div>
                                {getMatchBadge(talent.match)}
                              </div>
                              
                              <div className="flex flex-wrap gap-1 my-3">
                                {talent.skills.map((skill, idx) => (
                                  <Badge key={idx} variant="outline" className="font-normal">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="grid grid-cols-2 gap-2 my-3 text-sm">
                                <div className="flex items-center gap-1">
                                  <Award className="h-4 w-4 text-primary" />
                                  <span>{talent.clearance}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-primary" />
                                  <span>Available: {talent.availability}</span>
                                </div>
                              </div>
                              
                              <div className="flex gap-2 mt-4">
                                <Button className="flex-1">View Profile</Button>
                                <Button variant="outline" className="flex-1">Match to Role</Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </RefinedTabsContent>
                    
                    <RefinedTabsContent value="external" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {externalTalent.map(talent => (
                          <Card key={talent.id}>
                            <CardContent className="p-5">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="text-lg font-medium">{talent.name}</div>
                                  <div className="text-sm text-muted-foreground">{talent.title}</div>
                                </div>
                                {getMatchBadge(talent.match)}
                              </div>
                              
                              <div className="flex flex-wrap gap-1 my-3">
                                {talent.skills.map((skill, idx) => (
                                  <Badge key={idx} variant="outline" className="font-normal">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="grid grid-cols-2 gap-2 my-3 text-sm">
                                <div className="flex items-center gap-1">
                                  <Award className="h-4 w-4 text-primary" />
                                  <span>{talent.clearance}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-primary" />
                                  <span>Available: {talent.availability}</span>
                                </div>
                              </div>
                              
                              <div className="flex gap-2 mt-4">
                                <Button className="flex-1">View Resume</Button>
                                <Button variant="outline" className="flex-1">Schedule Interview</Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </RefinedTabsContent>
                  </div>
                </RefinedTabs>
              </div>
            </PageTemplate>
          </main>
          
          <InviteButton />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default TalentPools;
