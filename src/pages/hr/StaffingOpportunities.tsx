
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import HRSidebar from '@/components/hr/HRSidebar';
import Header from '@/components/dashboard/Header';
import PageTemplate from '@/components/hr/PageTemplate';
import { Briefcase, Calendar, Clock, UserPlus, AlertTriangle } from 'lucide-react';
import InviteButton from '@/components/invite/InviteButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const StaffingOpportunities = () => {
  // Mock staffing opportunities data
  const opportunities = [
    {
      id: 1,
      title: 'Cloud Infrastructure Modernization',
      agency: 'Department of Defense',
      positions: ['Cloud Architect', 'DevSecOps Engineer', 'Security Specialist'],
      deadline: '2023-07-25',
      status: 'new'
    },
    {
      id: 2,
      title: 'Data Analytics Platform',
      agency: 'Department of Energy',
      positions: ['Data Scientist', 'ML Engineer', 'Data Architect'],
      deadline: '2023-08-10',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement Program',
      agency: 'Department of Homeland Security',
      positions: ['Cybersecurity Analyst', 'Penetration Tester', 'Security Architect'],
      deadline: '2023-07-18',
      status: 'critical'
    },
    {
      id: 4,
      title: 'Enterprise Resource Planning Implementation',
      agency: 'Department of Agriculture',
      positions: ['Project Manager', 'Business Analyst', 'ERP Specialist'],
      deadline: '2023-08-05',
      status: 'new'
    },
    {
      id: 5,
      title: 'Healthcare Management System',
      agency: 'Department of Health',
      positions: ['Software Engineer', 'UX Designer', 'QA Specialist'],
      deadline: '2023-07-30',
      status: 'in-progress'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'new':
        return <Badge className="bg-blue-100 text-blue-800">New</Badge>;
      case 'in-progress':
        return <Badge className="bg-amber-100 text-amber-800">In Progress</Badge>;
      case 'critical':
        return <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
          <AlertTriangle className="h-3 w-3" />
          Critical
        </Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-light">
        <HRSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-6">
            <PageTemplate 
              title="Staffing Opportunities" 
              description="View and manage BD opportunities requiring staffing"
              icon={<Briefcase className="h-5 w-5 text-primary" />}
            >
              <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                <div className="relative flex-1">
                  <Input placeholder="Search opportunities..." />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="deadline">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deadline">Deadline (Soonest)</SelectItem>
                      <SelectItem value="agency">Agency (A-Z)</SelectItem>
                      <SelectItem value="positions">Required Positions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                {opportunities.map(opportunity => {
                  const daysRemaining = getDaysRemaining(opportunity.deadline);
                  const isUrgent = daysRemaining <= 7;
                  
                  return (
                    <Card key={opportunity.id} className={`overflow-hidden ${
                      isUrgent ? 'border-red-200' : ''
                    }`}>
                      <CardContent className="p-5">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              {getStatusBadge(opportunity.status)}
                              <h3 className="text-lg font-medium">{opportunity.title}</h3>
                            </div>
                            <div className="text-sm text-muted-foreground mb-3">{opportunity.agency}</div>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {opportunity.positions.map((position, idx) => (
                                <div key={idx} className="flex items-center gap-1 text-sm bg-secondary/10 px-2 py-1 rounded-md">
                                  <UserPlus className="h-3 w-3 text-primary" />
                                  {position}
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-sm">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>Due: {new Date(opportunity.deadline).toLocaleDateString()}</span>
                              </div>
                              <div className={`flex items-center gap-1 text-sm ${
                                isUrgent ? 'text-red-600' : 'text-muted-foreground'
                              }`}>
                                <Clock className={`h-4 w-4 ${
                                  isUrgent ? 'text-red-600' : 'text-muted-foreground'
                                }`} />
                                <span>{daysRemaining} days remaining</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 md:mt-0 md:ml-4 flex md:flex-col gap-2 justify-end">
                            <Button className="w-full">Begin Staffing</Button>
                            <Button variant="outline" className="w-full">View Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </PageTemplate>
          </main>
          
          <InviteButton />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default StaffingOpportunities;
