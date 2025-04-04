
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from "@/components/ui/tooltip";
import HRSidebar from '@/components/hr/HRSidebar';
import Header from '@/components/dashboard/Header';
import PageTemplate from '@/components/hr/PageTemplate';
import { 
  ListTodo, 
  UserRound,
  CalendarClock,
  FileCheck,
  Users,
  Calendar,
  User,
  Clock,
  ArrowRightCircle,
  CheckCircle2,
  PlusCircle
} from 'lucide-react';
import InviteButton from '@/components/invite/InviteButton';
import { RefinedTabs, RefinedTabsList, RefinedTabsTrigger, RefinedTabsContent } from '@/components/ui/refined-tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TasksPipeline = () => {
  const [activeTab, setActiveTab] = useState('tasks');

  // Mock tasks data
  const tasks = [
    {
      id: 1,
      title: 'Schedule interview for Senior DevOps Engineer',
      description: 'NASA SWIFT proposal - coordinate with technical panel',
      dueDate: '2023-07-20',
      priority: 'high',
      owner: 'You',
      relatedOpportunity: 'NASA SWIFT'
    },
    {
      id: 2,
      title: 'Review resumes for Data Scientists',
      description: 'Initial screening for DOE Data Platform project',
      dueDate: '2023-07-18',
      priority: 'medium',
      owner: 'Sarah T.',
      relatedOpportunity: 'DOE Data Platform'
    },
    {
      id: 3,
      title: 'Check references for Project Manager candidates',
      description: 'Final step before offer for top 2 candidates',
      dueDate: '2023-07-25',
      priority: 'low',
      owner: 'You',
      relatedOpportunity: 'VA Healthcare Modernization'
    },
    {
      id: 4,
      title: 'Prepare offer package for Cloud Architect',
      description: 'Finalize compensation and benefits details',
      dueDate: '2023-07-16',
      priority: 'high',
      owner: 'Michael R.',
      relatedOpportunity: 'DHS Cloud Migration'
    },
    {
      id: 5,
      title: 'Schedule technical assessment for ML Engineers',
      description: 'Coordinate coding challenge for 3 candidates',
      dueDate: '2023-07-22',
      priority: 'medium',
      owner: 'You',
      relatedOpportunity: 'USDA AI Initiative'
    }
  ];

  // Pipeline stages with candidates
  const pipelineStages = [
    {
      name: 'Screening',
      icon: <UserRound className="h-5 w-5" />,
      candidates: [
        { id: 1, name: 'Alex Johnson', position: 'Data Scientist', days: 2 },
        { id: 2, name: 'Taylor Wilson', position: 'Full Stack Developer', days: 1 },
        { id: 3, name: 'Morgan Smith', position: 'UX Designer', days: 3 },
        { id: 4, name: 'Casey Rivera', position: 'DevOps Engineer', days: 1 }
      ]
    },
    {
      name: 'Interviews',
      icon: <CalendarClock className="h-5 w-5" />,
      candidates: [
        { id: 5, name: 'Jordan Lee', position: 'Project Manager', days: 5 },
        { id: 6, name: 'Riley Thomas', position: 'Software Engineer', days: 4 }
      ]
    },
    {
      name: 'Technical Assessment',
      icon: <FileCheck className="h-5 w-5" />,
      candidates: [
        { id: 7, name: 'Jamie Garcia', position: 'Security Architect', days: 7 },
        { id: 8, name: 'Avery Collins', position: 'Backend Developer', days: 6 }
      ]
    },
    {
      name: 'Final Selection',
      icon: <Users className="h-5 w-5" />,
      candidates: [
        { id: 9, name: 'Drew Martinez', position: 'Systems Engineer', days: 10 }
      ]
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case 'medium':
        return <Badge className="bg-amber-100 text-amber-800">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800">Low</Badge>;
      default:
        return <Badge>{priority}</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <TooltipProvider delayDuration={0}>
        <div className="flex min-h-screen w-full bg-light">
          <HRSidebar />
          
          <div className="flex-1 flex flex-col">
            <Header />
            
            <main className="flex-1 p-6">
              <PageTemplate 
                title="Tasks & Recruitment Pipeline" 
                description="Track recruiting activities and candidate progression"
                icon={<ListTodo className="h-5 w-5 text-primary" />}
              >
                <RefinedTabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                  <RefinedTabsList className="px-4 md:px-6">
                    <RefinedTabsTrigger value="tasks">Task List</RefinedTabsTrigger>
                    <RefinedTabsTrigger value="pipeline">Recruitment Pipeline</RefinedTabsTrigger>
                  </RefinedTabsList>
                  
                  <div className="p-4">
                    <RefinedTabsContent value="tasks" className="mt-0">
                      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                        <div className="relative flex-1">
                          <Input placeholder="Search tasks..." />
                        </div>
                        <div className="flex gap-2">
                          <Select defaultValue="all">
                            <SelectTrigger className="w-[150px]">
                              <SelectValue placeholder="Priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Priorities</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select defaultValue="all">
                            <SelectTrigger className="w-[150px]">
                              <SelectValue placeholder="Owner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Owners</SelectItem>
                              <SelectItem value="me">Assigned to Me</SelectItem>
                              <SelectItem value="others">Assigned to Others</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button variant="default">
                            <PlusCircle className="h-4 w-4 mr-2" />
                            New Task
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {tasks.map(task => (
                          <Card key={task.id}>
                            <CardContent className="p-5">
                              <div className="flex flex-col md:flex-row justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    {getPriorityBadge(task.priority)}
                                    <h3 className="text-lg font-medium">{task.title}</h3>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                                  
                                  <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4 text-muted-foreground" />
                                      <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <User className="h-4 w-4 text-muted-foreground" />
                                      <span>Owner: <span className={task.owner === 'You' ? 'font-medium text-primary' : ''}>{task.owner}</span></span>
                                    </div>
                                    {task.relatedOpportunity && (
                                      <Badge variant="outline">
                                        {task.relatedOpportunity}
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="mt-4 md:mt-0 md:ml-4 flex gap-2 justify-end items-start">
                                  <Button variant="outline" size="icon">
                                    <ArrowRightCircle className="h-4 w-4" />
                                  </Button>
                                  <Button variant="default" size="icon">
                                    <CheckCircle2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </RefinedTabsContent>
                    
                    <RefinedTabsContent value="pipeline" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {pipelineStages.map((stage, index) => (
                          <Card key={index} className="h-full">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-md font-medium flex items-center gap-2">
                                {stage.icon}
                                {stage.name}
                                <Badge className="ml-auto">{stage.candidates.length}</Badge>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              {stage.candidates.map(candidate => (
                                <Card key={candidate.id} className="bg-secondary/5">
                                  <CardContent className="p-3">
                                    <div className="font-medium">{candidate.name}</div>
                                    <div className="text-xs text-muted-foreground mb-2">{candidate.position}</div>
                                    <div className="flex justify-between items-center">
                                      <div className="text-xs flex items-center gap-1">
                                        <Clock className="h-3 w-3 text-muted-foreground" />
                                        <span>{candidate.days} days in stage</span>
                                      </div>
                                      <Button variant="ghost" size="sm" className="h-7 px-2">
                                        <ArrowRightCircle className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                              <Button variant="ghost" className="w-full border border-dashed border-gray-300">
                                <PlusCircle className="h-4 w-4 mr-2" />
                                Add Candidate
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </RefinedTabsContent>
                  </div>
                </RefinedTabs>
              </PageTemplate>
            </main>
            
            <InviteButton />
          </div>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
};

export default TasksPipeline;
