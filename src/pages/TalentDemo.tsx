import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, ChevronUp, Info, AlertTriangle, X, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';

const activePrograms = [
  {
    id: 1,
    name: "DoD Enterprise Cloud Migration",
    agency: "Department of Defense",
    contractValue: "$28.5M",
    startDate: "2023-04-15",
    endDate: "2025-10-31",
    completion: 42,
    status: "on-track",
    staffingStatus: {
      filled: 18,
      open: 3,
      critical: 1
    },
    description: "Cloud migration and infrastructure modernization for critical defense systems.",
    milestones: [
      { id: 1, name: "Requirements Gathering", date: "2023-06-30", status: "completed" },
      { id: 2, name: "Architecture Design", date: "2023-09-15", status: "completed" },
      { id: 3, name: "Phase 1 Migration", date: "2024-02-28", status: "completed" },
      { id: 4, name: "Security Validation", date: "2024-06-30", status: "in-progress" },
      { id: 5, name: "Phase 2 Migration", date: "2024-12-15", status: "planned" }
    ]
  },
  {
    id: 2,
    name: "CMS Healthcare Analytics Platform",
    agency: "Centers for Medicare & Medicaid",
    contractValue: "$12.7M",
    startDate: "2023-09-01",
    endDate: "2025-03-31",
    completion: 35,
    status: "at-risk",
    staffingStatus: {
      filled: 9,
      open: 2,
      critical: 2
    },
    description: "Data analytics platform for healthcare cost reduction and outcome improvement.",
    milestones: [
      { id: 1, name: "Data Integration Design", date: "2023-11-15", status: "completed" },
      { id: 2, name: "ETL Pipeline Build", date: "2024-02-01", status: "completed" },
      { id: 3, name: "Analytics Engine Development", date: "2024-05-30", status: "delayed" },
      { id: 4, name: "User Dashboard Creation", date: "2024-08-15", status: "planned" },
      { id: 5, name: "System Integration Testing", date: "2024-11-30", status: "planned" }
    ]
  },
  {
    id: 3,
    name: "USDA Field Operations Modernization",
    agency: "Department of Agriculture",
    contractValue: "$8.3M",
    startDate: "2023-11-15",
    endDate: "2024-09-30",
    completion: 28,
    status: "behind",
    staffingStatus: {
      filled: 7,
      open: 4,
      critical: 2
    },
    description: "Mobile operations platform for USDA field inspectors and agricultural specialists.",
    milestones: [
      { id: 1, name: "Requirements Analysis", date: "2023-12-31", status: "completed" },
      { id: 2, name: "UX/UI Design", date: "2024-02-15", status: "delayed" },
      { id: 3, name: "Mobile App Development", date: "2024-05-31", status: "delayed" },
      { id: 4, name: "Field Testing Program", date: "2024-07-15", status: "at-risk" },
      { id: 5, name: "Full Deployment", date: "2024-09-01", status: "planned" }
    ]
  },
  {
    id: 4,
    name: "State Dept. Secure Communications",
    agency: "Department of State",
    contractValue: "$15.2M",
    startDate: "2023-07-01",
    endDate: "2025-01-31",
    completion: 52,
    status: "on-track",
    staffingStatus: {
      filled: 12,
      open: 1,
      critical: 0
    },
    description: "Secure communications platform for diplomatic missions worldwide.",
    milestones: [
      { id: 1, name: "Security Architecture", date: "2023-09-15", status: "completed" },
      { id: 2, name: "Protocol Development", date: "2023-12-31", status: "completed" },
      { id: 3, name: "Integration Testing", date: "2024-04-30", status: "completed" },
      { id: 4, name: "Pilot Deployments", date: "2024-08-31", status: "in-progress" },
      { id: 5, name: "Global Rollout", date: "2024-11-30", status: "planned" }
    ]
  }
];

const upcomingPipeline = [
  {
    id: 1,
    name: "VA Healthcare Data Interoperability",
    agency: "Department of Veterans Affairs",
    estimatedValue: "$18.5M",
    stage: "Proposal",
    probability: 75,
    estimatedStartDate: "2024-09-01",
    requiredResources: {
      technical: 14,
      management: 3,
      support: 4
    }
  },
  {
    id: 2,
    name: "DHS Cyber Threat Intelligence",
    agency: "Department of Homeland Security",
    estimatedValue: "$22.7M",
    stage: "Capture",
    probability: 60,
    estimatedStartDate: "2024-10-15",
    requiredResources: {
      technical: 17,
      management: 4,
      support: 6
    }
  },
  {
    id: 3,
    name: "EPA Environmental Monitoring System",
    agency: "Environmental Protection Agency",
    estimatedValue: "$7.2M",
    stage: "Qualification",
    probability: 40,
    estimatedStartDate: "2024-12-01",
    requiredResources: {
      technical: 8,
      management: 2,
      support: 3
    }
  }
];

const tourSteps = [
  {
    id: 1,
    targetId: "active-programs",
    title: "Program Overview",
    content: "Get a complete view of all active programs with status indicators and completion tracking.",
    tabId: "overview",
    position: "bottom"
  },
  {
    id: 2,
    targetId: "staffing-status",
    title: "Staffing Management",
    content: "Monitor staffing progress across all programs with visual indicators for filled and open positions.",
    tabId: "staffing",
    position: "bottom"
  },
  {
    id: 3,
    targetId: "upcoming-pipeline",
    title: "Pipeline Visibility",
    content: "See upcoming opportunities and prepare for future resource needs.",
    tabId: "pipeline",
    position: "bottom"
  },
  {
    id: 4,
    targetId: "milestones",
    title: "Milestone Tracking",
    content: "Track key milestones across all your programs to stay on schedule.",
    tabId: "milestones",
    position: "top"
  }
];

const TalentDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);
  const [viewType, setViewType] = useState("card");
  const [tourStep, setTourStep] = useState<number | null>(null);
  const [targetElementRect, setTargetElementRect] = useState<DOMRect | null>(null);
  const navigate = useNavigate();
  
  const targetRefs = {
    "active-programs": useRef<HTMLElement | null>(null),
    "staffing-status": useRef<HTMLElement | null>(null),
    "upcoming-pipeline": useRef<HTMLElement | null>(null),
    "milestones": useRef<HTMLElement | null>(null),
  };

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setTourStep(1);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (tourStep !== null) {
      const currentStep = tourSteps.find(step => step.id === tourStep);
      if (currentStep) {
        setActiveTab(currentStep.tabId);
        setTimeout(() => {
          const targetElement = document.getElementById(currentStep.targetId);
          if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            setTargetElementRect(rect);
          }
        }, 100);
      }
    }
  }, [tourStep, activeTab]);

  const toggleProgramExpansion = (programId: number) => {
    if (expandedProgram === programId) {
      setExpandedProgram(null);
    } else {
      setExpandedProgram(programId);
    }
  };

  const handleNextTourStep = () => {
    if (tourStep === null) return;
    
    if (tourStep >= tourSteps.length) {
      setTourStep(null);
      return;
    }
    
    setTourStep(tourStep + 1);
  };

  const handleSkipTour = () => {
    setTourStep(null);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-green-500";
      case "at-risk":
        return "bg-amber-400";
      case "behind":
      case "delayed":
        return "bg-red-500";
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-400";
      case "planned":
        return "bg-gray-300";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "on-track":
        return "On Track";
      case "at-risk":
        return "At Risk";
      case "behind":
      case "delayed":
        return "Behind";
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
      default:
        return status;
    }
  };

  const renderTourSpotlight = () => {
    if (tourStep === null) return null;

    const currentStep = tourSteps.find(step => step.id === tourStep);
    if (!currentStep || !targetElementRect) return null;

    return (
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div 
          className="absolute bg-transparent pointer-events-auto" 
          style={{
            left: targetElementRect.left - 10,
            top: targetElementRect.top - 10,
            width: targetElementRect.width + 20,
            height: targetElementRect.height + 20,
            boxShadow: '0 0 0 2000px rgba(0, 0, 0, 0.6)',
            borderRadius: '4px'
          }}
        ></div>
        
        <div 
          className="absolute pointer-events-auto bg-white rounded-lg shadow-lg border border-primary/20 w-64 p-4 flex flex-col gap-2 animate-fade-in"
          style={{
            left: currentStep.position === 'bottom' 
              ? targetElementRect.left + targetElementRect.width / 2 - 128
              : targetElementRect.left + targetElementRect.width / 2 - 128,
            top: currentStep.position === 'bottom' 
              ? targetElementRect.bottom + 15
              : targetElementRect.top - 120,
          }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {tourStep}
              </span>
              <h4 className="font-medium text-secondary">{currentStep.title}</h4>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6" 
              onClick={handleSkipTour}
              aria-label="Close tour"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-secondary/80">{currentStep.content}</p>
          
          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-1">
              {tourSteps.map(step => (
                <div 
                  key={step.id}
                  className={`w-2 h-2 rounded-full ${step.id === tourStep ? 'bg-primary' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 text-xs"
                onClick={handleSkipTour}
              >
                Skip
              </Button>
              <Button 
                size="sm" 
                className="h-8 text-xs flex items-center"
                onClick={handleNextTourStep}
              >
                {tourStep < tourSteps.length ? (
                  <>Next <ArrowRight className="ml-1 h-3 w-3" /></>
                ) : (
                  'Finish'
                )}
              </Button>
            </div>
          </div>
          
          <div 
            className={`absolute w-3 h-3 bg-white rotate-45 border-t border-l border-primary/20
              ${currentStep.position === 'bottom' ? '-top-1.5' : '-bottom-1.5'}`}
            style={{
              left: '50%',
              transform: 'translateX(-50%) rotate(45deg)'
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Header />
      <main className="flex-grow bg-light">
        {renderTourSpotlight()}
        
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 flex justify-between items-center">
              <Button 
                variant="ghost" 
                className="text-secondary hover:text-primary group flex items-center" 
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
              <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full animate-pulse">
                Demo Mode
              </div>
            </div>

            <div className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-secondary mb-2">Interactive Demo - Program Management Dashboard</h1>
                <p className="text-secondary/70 max-w-3xl mx-auto">
                  Experience how MERIT helps program managers efficiently track, manage, and optimize government contract performance.
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <TabsList className="bg-white border">
                    <TabsTrigger id="active-programs" value="overview" ref={el => targetRefs["active-programs"].current = el}>Overview</TabsTrigger>
                    <TabsTrigger id="staffing-status" value="staffing" ref={el => targetRefs["staffing-status"].current = el}>Staffing</TabsTrigger>
                    <TabsTrigger id="upcoming-pipeline" value="pipeline" ref={el => targetRefs["upcoming-pipeline"].current = el}>Pipeline</TabsTrigger>
                    <TabsTrigger id="milestones" value="milestones" ref={el => targetRefs["milestones"].current = el}>Milestones</TabsTrigger>
                  </TabsList>
                  
                  <ToggleGroup type="single" value={viewType} onValueChange={(value) => value && setViewType(value)}>
                    <ToggleGroupItem value="card" aria-label="Card View">Cards</ToggleGroupItem>
                    <ToggleGroupItem value="table" aria-label="Table View">Table</ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <TabsContent value="overview" className="mt-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span>Active Programs</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 ml-2 text-secondary/50" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Overview of all your active government contracts</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {viewType === "card" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activePrograms.map((program) => (
                            <Card 
                              key={program.id}
                              className={`border-l-4 ${
                                program.status === "on-track" ? "border-l-green-500" : 
                                program.status === "at-risk" ? "border-l-amber-400" : 
                                "border-l-red-500"
                              } hover:shadow-md transition-shadow cursor-pointer`}
                              onClick={() => toggleProgramExpansion(program.id)}
                            >
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h3 className="font-semibold text-secondary">{program.name}</h3>
                                    <p className="text-sm text-secondary/70">{program.agency}</p>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="text-sm font-medium mr-2">{program.contractValue}</span>
                                    <div className={`w-3 h-3 rounded-full ${getStatusColor(program.status)}`}></div>
                                  </div>
                                </div>
                                
                                <div className="mt-3">
                                  <div className="flex justify-between text-xs mb-1">
                                    <span>Completion</span>
                                    <span>{program.completion}%</span>
                                  </div>
                                  <Progress value={program.completion} className="h-2" />
                                </div>
                                
                                <div className="flex justify-between mt-4 text-xs text-secondary/70">
                                  <span>{formatDate(program.startDate)}</span>
                                  <span>{formatDate(program.endDate)}</span>
                                </div>
                                
                                {expandedProgram === program.id && (
                                  <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm mb-3">{program.description}</p>
                                    
                                    <div className="grid grid-cols-3 gap-2 mb-3">
                                      <div className="text-center p-2 bg-gray-50 rounded">
                                        <div className="text-lg font-semibold">{program.staffingStatus.filled}</div>
                                        <div className="text-xs">Filled</div>
                                      </div>
                                      <div className="text-center p-2 bg-gray-50 rounded">
                                        <div className="text-lg font-semibold">{program.staffingStatus.open}</div>
                                        <div className="text-xs">Open</div>
                                      </div>
                                      <div className="text-center p-2 bg-gray-50 rounded">
                                        <div className={`text-lg font-semibold ${program.staffingStatus.critical > 0 ? "text-red-500" : ""}`}>
                                          {program.staffingStatus.critical}
                                        </div>
                                        <div className="text-xs">Critical</div>
                                      </div>
                                    </div>
                                    
                                    <h4 className="font-medium text-sm mb-2">Key Milestones</h4>
                                    <ul className="space-y-1">
                                      {program.milestones.slice(0, 3).map((milestone) => (
                                        <li key={milestone.id} className="flex items-center justify-between text-sm">
                                          <span>{milestone.name}</span>
                                          <div className="flex items-center">
                                            <span className="text-xs mr-2">{formatDate(milestone.date)}</span>
                                            <div className={`w-2 h-2 rounded-full ${getStatusColor(milestone.status)}`}></div>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                    {program.milestones.length > 3 && (
                                      <div className="text-xs text-primary text-center mt-2">+ {program.milestones.length - 3} more milestones</div>
                                    )}
                                  </div>
                                )}
                                
                                <div className="flex justify-center mt-3">
                                  {expandedProgram === program.id ? (
                                    <ChevronUp className="h-5 w-5 text-gray-400" />
                                  ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program Name</TableHead>
                              <TableHead>Agency</TableHead>
                              <TableHead>Contract Value</TableHead>
                              <TableHead>Timeline</TableHead>
                              <TableHead>Completion</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Staffing</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {activePrograms.map((program) => (
                              <TableRow key={program.id} className="cursor-pointer" onClick={() => toggleProgramExpansion(program.id)}>
                                <TableCell className="font-medium">{program.name}</TableCell>
                                <TableCell>{program.agency}</TableCell>
                                <TableCell>{program.contractValue}</TableCell>
                                <TableCell className="text-xs">
                                  {formatDate(program.startDate)} - {formatDate(program.endDate)}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Progress value={program.completion} className="h-2 w-20" />
                                    <span className="text-xs">{program.completion}%</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${getStatusColor(program.status)}`}></div>
                                    <span>{getStatusText(program.status)}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-1">
                                    <span className="text-xs">{program.staffingStatus.filled} filled</span>
                                    {program.staffingStatus.critical > 0 && (
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <AlertTriangle size={16} className="text-red-500" />
                                          </TooltipTrigger>
                                          <TooltipContent>
                                            <p>{program.staffingStatus.critical} critical positions need urgent attention</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    )}
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="staffing" className="mt-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Staffing Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {activePrograms.map((program) => {
                          const totalPositions = program.staffingStatus.filled + program.staffingStatus.open;
                          const filledPercentage = Math.round((program.staffingStatus.filled / totalPositions) * 100);
                          
                          return (
                            <div key={program.id} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex justify-between items-center mb-3">
                                <h3 className="font-semibold">{program.name}</h3>
                                <div className="flex items-center">
                                  <span className="text-sm mr-2">
                                    {program.staffingStatus.filled}/{totalPositions} positions filled
                                  </span>
                                  {program.staffingStatus.critical > 0 && (
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <AlertTriangle size={16} className="text-red-500" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{program.staffingStatus.critical} critical positions need urgent attention</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  )}
                                </div>
                              </div>
                              
                              <div className="mb-3">
                                <div className="flex justify-between text-xs mb-1">
                                  <span>Staffing Progress</span>
                                  <span>{filledPercentage}%</span>
                                </div>
                                <Progress value={filledPercentage} className="h-2.5" />
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                  <div className="text-xs text-secondary/70 mb-1">Project Management</div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-lg font-medium">4/4</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Complete</span>
                                  </div>
                                </div>
                                
                                <div className="bg-gray-50 p-3 rounded-lg">
                                  <div className="text-xs text-secondary/70 mb-1">Technical Staff</div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-lg font-medium">10/12</span>
                                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">In Progress</span>
                                  </div>
                                </div>
                                
                                <div className="bg-gray-50 p-3 rounded-lg">
                                  <div className="text-xs text-secondary/70 mb-1">Support Staff</div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-lg font-medium">4/5</span>
                                    {program.staffingStatus.critical > 0 ? (
                                      <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">Critical</span>
                                    ) : (
                                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">In Progress</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <h4 className="text-sm font-medium mb-3">Critical Open Positions</h4>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Role</TableHead>
                                      <TableHead>Department</TableHead>
                                      <TableHead>Required By</TableHead>
                                      <TableHead>Status</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell className="font-medium">Senior DevOps Engineer</TableCell>
                                      <TableCell>Technical</TableCell>
                                      <TableCell>Jul 15, 2024</TableCell>
                                      <TableCell>
                                        <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">Critical</span>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="font-medium">Security Specialist</TableCell>
                                      <TableCell>Technical</TableCell>
                                      <TableCell>Aug 1, 2024</TableCell>
                                      <TableCell>
                                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">In Progress</span>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="font-medium">Technical Writer</TableCell>
                                      <TableCell>Support</TableCell>
                                      <TableCell>Aug 15, 2024</TableCell>
                                      <TableCell>
                                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">In Progress</span>
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="pipeline" className="mt-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Pipeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {viewType === "card" ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {upcomingPipeline.map((opportunity) => (
                            <Card key={opportunity.id} className="hover:shadow-md transition-shadow">
                              <CardContent className="p-4">
                                <div className="mb-2">
                                  <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-secondary">{opportunity.name}</h3>
                                    <div className={`px-2 py-0.5 rounded text-xs font-medium ${
                                      opportunity.stage === "Proposal" ? "bg-blue-100 text-blue-800" :
                                      opportunity.stage === "Capture" ? "bg-purple-100 text-purple-800" :
                                      "bg-gray-100 text-gray-800"
                                    }`}>
                                      {opportunity.stage}
                                    </div>
                                  </div>
                                  <p className="text-sm text-secondary/70">{opportunity.agency}</p>
                                </div>
                                
                                <div className="my-3 flex justify-between items-center">
                                  <div className="text-sm">
                                    <div className="font-medium">{opportunity.estimatedValue}</div>
                                    <div className="text-xs text-secondary/70">Est. Value</div>
                                  </div>
                                  
                                  <div className="text-sm text-right">
                                    <div className="font-medium">{opportunity.probability}%</div>
                                    <div className="text-xs text-secondary/70">Win Probability</div>
                                  </div>
                                </div>
                                
                                <div className="mt-3 pt-3 border-t border-gray-100">
                                  <div className="flex justify-between text-sm">
                                    <div>
                                      <div className="text-xs text-secondary/70">Est. Start Date</div>
                                      <div>{formatDate(opportunity.estimatedStartDate)}</div>
                                    </div>
                                    
                                    <div>
                                      <div className="text-xs text-secondary/70">Required Resources</div>
                                      <div>{opportunity.requiredResources.technical + opportunity.requiredResources.management + opportunity.requiredResources.support} total</div>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-3">
                                    <div className="text-xs text-secondary/70 mb-1">Resource Breakdown</div>
                                    <div className="flex gap-2">
                                      <div className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                                        {opportunity.requiredResources.technical} Technical
                                      </div>
                                      <div className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded">
                                        {opportunity.requiredResources.management} Management
                                      </div>
                                      <div className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded">
                                        {opportunity.requiredResources.support} Support
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Opportunity</TableHead>
                              <TableHead>Agency</TableHead>
                              <TableHead>Stage</TableHead>
                              <TableHead>Est. Value</TableHead>
                              <TableHead>Probability</TableHead>
                              <TableHead>Start Date</TableHead>
                              <TableHead>Required Resources</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {upcomingPipeline.map((opportunity) => (
                              <TableRow key={opportunity.id}>
                                <TableCell className="font-medium">{opportunity.name}</TableCell>
                                <TableCell>{opportunity.agency}</TableCell>
                                <TableCell>
                                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                    opportunity.stage === "Proposal" ? "bg-blue-100 text-blue-800" :
                                    opportunity.stage === "Capture" ? "bg-purple-100 text-purple-800" :
                                    "bg-gray-100 text-gray-800"
                                  }`}>
                                    {opportunity.stage}
                                  </span>
                                </TableCell>
                                <TableCell>{opportunity.estimatedValue}</TableCell>
                                <TableCell>{opportunity.probability}%</TableCell>
                                <TableCell>{formatDate(opportunity.estimatedStartDate)}</TableCell>
                                <TableCell>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <span className="cursor-help underline decoration-dotted">
                                          {opportunity.requiredResources.technical + opportunity.requiredResources.management + opportunity.requiredResources.support} total
                                        </span>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <div className="text-xs">
                                          <div>{opportunity.requiredResources.technical} Technical</div>
                                          <div>{opportunity.requiredResources.management} Management</div>
                                          <div>{opportunity.requiredResources.support} Support</div>
                                        </div>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}
                      
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-4">Expected Resource Requirements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card>
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">Next 30 Days</h4>
                              <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                              <p className="text-sm text-secondary/70">New resources needed</p>
                              <div className="mt-3 text-xs">
                                <div className="flex justify-between mb-1">
                                  <span>Technical</span>
                                  <span>5</span>
                                </div>
                                <div className="flex justify-between mb-1">
                                  <span>Management</span>
                                  <span>1</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Support</span>
                                  <span>2</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">30-60 Days</h4>
                              <div className="text-3xl font-bold text-purple-600 mb-1">14</div>
                              <p className="text-sm text-secondary/70">New resources needed</p>
                              <div className="mt-3 text-xs">
                                <div className="flex justify-between mb-1">
                                  <span>Technical</span>
                                  <span>9</span>
                                </div>
                                <div className="flex justify-between mb-1">
                                  <span>Management</span>
                                  <span>2</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Support</span>
                                  <span>3</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">60-90 Days</h4>
                              <div className="text-3xl font-bold text-green-600 mb-1">21</div>
                              <p className="text-sm text-secondary/70">New resources needed</p>
                              <div className="mt-3 text-xs">
                                <div className="flex justify-between mb-1">
                                  <span>Technical</span>
                                  <span>13</span>
                                </div>
                                <div className="flex justify-between mb-1">
                                  <span>Management</span>
                                  <span>3</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Support</span>
                                  <span>5</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="milestones" className="mt-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Program Milestones</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {activePrograms.map((program) => (
                          <div key={program.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold">{program.name}</h3>
                              <div className={`px-2 py-0.5 text-xs font-medium rounded-full flex items-center ${
                                program.status === "on-track" ? "bg-green-100 text-green-800" :
                                program.status === "at-risk" ? "bg-amber-100 text-amber-800" :
                                "bg-red-100 text-red-800"
                              }`}>
                                <div className={`w-2 h-2 rounded-full mr-1 ${getStatusColor(program.status)}`}></div>
                                {getStatusText(program.status)}
                              </div>
                            </div>
                            
                            <div className="relative">
                              <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                              
                              <div className="space-y-8">
                                {program.milestones.map((milestone, index) => (
                                  <div key={milestone.id} className="relative pl-10">
                                    <div className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-white ${getStatusColor(milestone.status)}`}></div>
                                    
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                      <div>
                                        <h4 className="font-medium">{milestone.name}</h4>
                                        <p className="text-sm text-secondary/70">{formatDate(milestone.date)}</p>
                                      </div>
                                      
                                      <div className={`mt-2 sm:mt-0 px-2 py-0.5 text-xs font-medium rounded-full ${
                                        milestone.status === "completed" ? "bg-green-100 text-green-800" :
                                        milestone.status === "in-progress" ? "bg-blue-100 text-blue-800" :
                                        milestone.status === "delayed" ? "bg-red-100 text-red-800" :
                                        milestone.status === "at-risk" ? "bg-amber-100 text-amber-800" :
                                        "bg-gray-100 text-gray-800"
                                      }`}>
                                        {getStatusText(milestone.status)}
                                      </div>
                                    </div>
                                    
                                    {(milestone.status === "in-progress" || milestone.status === "delayed" || milestone.status === "at-risk") && (
                                      <div className="mt-3 bg-gray-50 p-3 rounded-md text-sm">
                                        <div className="font-medium mb-1">Key Activities:</div>
                                        <ul className="list-disc list-inside space-y-1 text-secondary/80">
                                          <li>Documentation updates</li>
                                          <li>Stakeholder approval</li>
                                          <li>Integration testing</li>
                                        </ul>
                                        
                                        {milestone.status === "delayed" && (
                                          <div className="mt-2 flex items-start">
                                            <AlertTriangle size={14} className="text-amber-500 mr-1.5 mt-0.5" />
                                            <span className="text-amber-800">Delayed due to pending security clearances</span>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-10 text-center">
                <p className="text-secondary/80 mb-4">Sign up to access your personalized Program Management dashboard</p>
                <Button
                  onClick={() => navigate('/signup')}
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-md text-lg"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TalentDemo;
