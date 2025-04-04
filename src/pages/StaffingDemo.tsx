import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileUp, AlertCircle, SearchCheck, ArrowLeft, Filter, Info, Star, Briefcase, Award, CheckCircle, ChevronDown, ChevronRight, Clock, MapPin, Building, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const staffingData = [
  { 
    id: "1", 
    name: "Michael Johnson", 
    role: "Project Manager", 
    experience: "10+ years", 
    clearance: "Top Secret", 
    location: "Remote",
    skills: ["Project Management", "Agile", "DoD Experience", "IT Leadership"],
    availability: "Immediate",
    matchScore: 95,
    internal: true,
    certifications: ["PMP", "CISSP", "SAFe Agilist"],
    bio: "Experienced project manager with a strong background in federal IT projects and DoD contracting."
  },
  { 
    id: "2", 
    name: "Sarah Williams", 
    role: "Senior Developer", 
    experience: "7+ years", 
    clearance: "Secret", 
    location: "Washington DC",
    skills: ["Java", "Python", "AWS", "Microservices"],
    availability: "2 weeks",
    matchScore: 88,
    internal: true,
    certifications: ["AWS Certified Developer", "Scrum Master"],
    bio: "Full stack developer specialized in cloud-native applications with extensive federal contracting experience."
  },
  { 
    id: "3", 
    name: "David Chen", 
    role: "Systems Analyst", 
    experience: "5+ years", 
    clearance: "Public Trust", 
    location: "Arlington, VA",
    skills: ["Systems Architecture", "Requirements Analysis", "TOGAF", "UML"],
    availability: "1 month",
    matchScore: 82,
    internal: true,
    certifications: ["TOGAF Certified", "ITIL v4"],
    bio: "Systems analyst focused on large-scale federal IT modernization initiatives and enterprise architecture."
  },
  { 
    id: "4", 
    name: "Priya Patel", 
    role: "Data Scientist", 
    experience: "6+ years", 
    clearance: "Secret", 
    location: "Remote",
    skills: ["Machine Learning", "Python", "R", "Data Visualization"],
    availability: "Immediate",
    matchScore: 79,
    internal: false,
    certifications: ["TensorFlow Certified", "Microsoft Data Scientist"],
    bio: "Data scientist with a background in predictive analytics and machine learning applications."
  },
  { 
    id: "5", 
    name: "James Wilson", 
    role: "DevOps Engineer", 
    experience: "8+ years", 
    clearance: "Top Secret", 
    location: "Reston, VA",
    skills: ["CI/CD", "Kubernetes", "Terraform", "AWS"],
    availability: "2 weeks",
    matchScore: 75,
    internal: false,
    certifications: ["AWS DevOps Professional", "CKA"],
    bio: "Experienced DevOps engineer specializing in containerization and infrastructure as code."
  }
];

const StaffingDemo = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof staffingData | null>(null);
  const [searchesLeft, setSearchesLeft] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStage, setAnalysisStage] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<(typeof staffingData)[0] | null>(null);
  const [activeTab, setActiveTab] = useState('internal');
  const [view, setView] = useState('list');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const analysisPhasesData = [
    { phase: "Extracting document data", duration: 700 },
    { phase: "Identifying key skills", duration: 600 },
    { phase: "Assessing experience requirements", duration: 500 },
    { phase: "Matching candidates", duration: 800 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isProcessing) {
      let progress = 0;
      let phaseIndex = 0;

      const interval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setSearchesLeft(prev => prev - 1);
          setAnalysisProgress(100);
          setSearchResults(staffingData);
          
          toast({
            title: "Analysis complete",
            description: `Found ${staffingData.length} qualified candidates for staffing.`,
          });
          return;
        }

        if (progress >= ((phaseIndex + 1) / analysisPhasesData.length) * 100) {
          phaseIndex = Math.min(phaseIndex + 1, analysisPhasesData.length - 1);
        }

        setAnalysisStage(analysisPhasesData[phaseIndex].phase);
        
        const incrementAmount = 0.5;
        progress = Math.min(progress + incrementAmount, 100);
        setAnalysisProgress(progress);

      }, 50);

      return () => clearInterval(interval);
    }
  }, [isProcessing, toast]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      processFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      processFile(selectedFile);
    }
  };

  const processFile = (file: File) => {
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file format",
        description: "Please upload a PDF, DOCX, or TXT file.",
        variant: "destructive",
      });
      return;
    }
    
    if (searchesLeft <= 0) {
      toast({
        title: "No searches remaining",
        description: "You've used all your free trial searches. Please sign up for full access.",
        variant: "destructive",
      });
      return;
    }
    
    setFile(file);
    setIsProcessing(true);
    setAnalysisProgress(0);
    setAnalysisStage(analysisPhasesData[0].phase);
    setSearchResults(null);
    setSelectedCandidate(null);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const useSampleDocument = () => {
    setFile(new File(["Sample job description"], "sample-job-description.pdf", { type: "application/pdf" }));
    setIsProcessing(true);
    setAnalysisProgress(0);
    setAnalysisStage(analysisPhasesData[0].phase);
    setSearchResults(null);
    setSelectedCandidate(null);
  };

  const renderCandidateCard = (candidate: (typeof staffingData)[0], index: number) => {
    const { matchScore, internal, name, role, clearance, experience, location, availability } = candidate;
    
    return (
      <div 
        key={candidate.id} 
        className={`border rounded-lg p-4 mb-4 cursor-pointer transition-all duration-300 
          ${selectedCandidate?.id === candidate.id ? 'border-primary shadow-md bg-primary/5' : 'border-gray-200 hover:border-primary/30'}
          ${internal && activeTab === 'internal' || !internal && activeTab === 'external' || activeTab === 'all' ? 'block' : 'hidden'}`}
        onClick={() => setSelectedCandidate(candidate)}
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${matchScore > 90 ? 'bg-green-500' : matchScore > 80 ? 'bg-blue-500' : 'bg-secondary'}`}>
              {name.substring(0, 1)}
            </div>
            <div className="ml-3">
              <h3 className="font-semibold text-secondary">{name}</h3>
              <div className="text-xs text-secondary/70 flex items-center gap-1">
                <Briefcase className="h-3 w-3" /> {role}
              </div>
            </div>
          </div>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${matchScore > 90 ? 'bg-green-100' : matchScore > 80 ? 'bg-blue-50' : 'bg-gray-50'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${matchScore > 90 ? 'bg-green-500 text-white' : matchScore > 80 ? 'bg-blue-500 text-white' : 'bg-secondary text-white'}`}>
                      {matchScore}%
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Match score based on required skills and experience</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="mt-3 text-sm">
          <div className="flex items-center gap-1 mb-1">
            <Badge variant="outline" className={`${internal ? 'bg-green-50 text-green-700 border-green-200' : 'bg-blue-50 text-blue-700 border-blue-200'} text-xs`}>
              {internal ? 'Internal Talent' : 'External Candidate'}
            </Badge>
            <Badge variant="outline" className="bg-secondary/5 text-secondary border-secondary/20 text-xs">
              {clearance}
            </Badge>
          </div>
          
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-secondary/80">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-primary" /> 
              Availability: {availability}
            </div>
            <div className="flex items-center gap-1">
              <Award className="h-3 w-3 text-primary" /> 
              {experience}
            </div>
            <div className="flex items-center gap-1 col-span-2">
              <MapPin className="h-3 w-3 text-primary" /> 
              {location}
            </div>
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="text-xs text-secondary/70">Skills match: {matchScore}%</div>
          <ChevronRight className="h-4 w-4 text-primary" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-16">
          <div 
            className={`max-w-6xl mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex justify-between items-center mb-8">
              <Button 
                onClick={() => navigate('/')}
                variant="ghost" 
                className="group flex items-center text-secondary"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary px-3 py-1 text-sm">
                Demo Mode
              </Badge>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Staff My Contract</h1>
              <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
                Upload job descriptions or staffing requirements to find 
                qualified candidates based on skills, experience, clearance, and availability.
              </p>
            </div>
            
            <Card className="bg-white border-2 border-light shadow-lg transition-all duration-500 hover:shadow-xl mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center justify-between">
                  Upload Staffing Requirements
                  <Badge className="bg-primary/20 hover:bg-primary/30 text-primary border-0 ml-2">
                    Demo
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Upload job descriptions or staffing requirements to identify qualified candidates.
                  <span className="block mt-1 font-medium text-primary">
                    {searchesLeft} free {searchesLeft === 1 ? 'search' : 'searches'} remaining
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!searchResults && (
                  <div 
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${isDragging ? 'border-primary bg-primary/5 scale-[1.01]' : 'border-gray-300'}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input 
                      type="file" 
                      className="hidden" 
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      accept=".pdf,.docx,.txt"
                    />
                    
                    <div className="flex flex-col items-center">
                      <div className={`rounded-full bg-light p-6 mb-4 transition-all ${isDragging ? 'bg-primary/10 scale-110' : ''}`}>
                        <FileUp className={`h-16 w-16 transition-all ${isDragging ? 'text-primary' : 'text-secondary/50'}`} />
                      </div>
                      <p className="text-lg mb-2 font-medium text-secondary">
                        {file ? file.name : 'Drop your staffing document here'}
                      </p>
                      <p className="text-secondary/70 mb-6 max-w-md">
                        {!file ? 'Supported formats: PDF, DOCX, TXT' : 'Document ready for analysis'}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 justify-center">
                        {!file && (
                          <>
                            <Button 
                              onClick={triggerFileInput} 
                              variant="outline"
                              className="border-primary text-primary hover:bg-primary/10"
                            >
                              Browse Files
                            </Button>
                            <Button
                              onClick={useSampleDocument}
                              variant="outline"
                              className="border-secondary/30 text-secondary/70 hover:bg-secondary/5"
                            >
                              Use Sample Document
                            </Button>
                          </>
                        )}
                      </div>
                      
                      {file && !isProcessing && !searchResults && (
                        <Button 
                          className="mt-6 bg-primary text-white hover:bg-primary/90"
                          onClick={() => processFile(file)}
                        >
                          <SearchCheck className="mr-2 h-4 w-4" /> 
                          Find Candidates
                        </Button>
                      )}
                      
                      {isProcessing && (
                        <div className="w-full max-w-md mt-8 animate-fade-in">
                          <div className="mb-2 flex justify-between items-center text-sm text-secondary/80">
                            <span>{analysisStage}</span>
                            <span>{Math.round(analysisProgress)}%</span>
                          </div>
                          <Progress value={analysisProgress} className="h-2" />
                          
                          <div className="mt-6 text-sm text-secondary/70 italic">
                            AI is analyzing job requirements to find the best candidates...
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {searchResults && (
                  <div className="mt-4 animate-fade-in">
                    <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                      <h3 className="text-xl font-medium text-secondary">
                        Qualified Candidates
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="flex border rounded-md overflow-hidden">
                          <Button 
                            variant={view === 'list' ? 'secondary' : 'ghost'} 
                            size="sm" 
                            className="rounded-none border-0 px-3"
                            onClick={() => setView('list')}
                          >
                            List
                          </Button>
                          <Button 
                            variant={view === 'detailed' ? 'secondary' : 'ghost'} 
                            size="sm" 
                            className="rounded-none border-0 px-3"
                            onClick={() => setView('detailed')}
                          >
                            Detailed
                          </Button>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs flex items-center gap-1 border-gray-200"
                        >
                          <Filter className="h-3 w-3" /> 
                          Filter Candidates
                        </Button>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Info className="h-4 w-4 text-secondary/70" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Candidates are matched based on skills, experience, clearance, and availability</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    
                    {view === 'list' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <div className="mb-4 border-b">
                            <div className="flex flex-wrap">
                              <Button 
                                variant="ghost" 
                                className={`rounded-none relative px-4 py-2 text-sm ${activeTab === 'internal' ? 'text-primary font-medium' : 'text-secondary/70'}`}
                                onClick={() => setActiveTab('internal')}
                              >
                                Internal
                                {activeTab === 'internal' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
                              </Button>
                              <Button 
                                variant="ghost" 
                                className={`rounded-none relative px-4 py-2 text-sm ${activeTab === 'external' ? 'text-primary font-medium' : 'text-secondary/70'}`}
                                onClick={() => setActiveTab('external')}
                              >
                                External
                                {activeTab === 'external' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
                              </Button>
                              <Button 
                                variant="ghost" 
                                className={`rounded-none relative px-4 py-2 text-sm ${activeTab === 'all' ? 'text-primary font-medium' : 'text-secondary/70'}`}
                                onClick={() => setActiveTab('all')}
                              >
                                All
                                {activeTab === 'all' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
                              </Button>
                            </div>
                          </div>
                          
                          <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                            {searchResults.map((candidate, index) => renderCandidateCard(candidate, index))}
                          </div>
                        </div>
                        
                        <div className="md:col-span-2 border rounded-lg p-6">
                          {selectedCandidate ? (
                            <div className="animate-fade-in">
                              <div className="flex justify-between items-start mb-6">
                                <div>
                                  <h2 className="text-2xl font-bold text-secondary mb-1">{selectedCandidate.name}</h2>
                                  <p className="text-secondary/70">{selectedCandidate.role}</p>
                                </div>
                                <Button variant="outline" className="border-primary text-primary">
                                  Contact Candidate
                                </Button>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <Card className="border border-gray-100">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base text-secondary">Candidate Information</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-secondary/70">Experience</span>
                                        <span className="font-medium">{selectedCandidate.experience}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-secondary/70">Clearance</span>
                                        <span className="font-medium">{selectedCandidate.clearance}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-secondary/70">Location</span>
                                        <span className="font-medium">{selectedCandidate.location}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-secondary/70">Availability</span>
                                        <span className="font-medium">{selectedCandidate.availability}</span>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                                
                                <Card className="border border-gray-100">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base text-secondary">Job Match</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="space-y-3">
                                      <div>
                                        <div className="flex justify-between text-sm mb-1">
                                          <span>Skills Match</span>
                                          <span className="font-medium">{selectedCandidate.matchScore}%</span>
                                        </div>
                                        <Progress value={selectedCandidate.matchScore} className="h-1.5" />
                                      </div>
                                      <div>
                                        <div className="flex justify-between text-sm mb-1">
                                          <span>Experience Match</span>
                                          <span className="font-medium">{Math.round(selectedCandidate.matchScore * 0.9)}%</span>
                                        </div>
                                        <Progress value={selectedCandidate.matchScore * 0.9} className="h-1.5" />
                                      </div>
                                      <div>
                                        <div className="flex justify-between text-sm mb-1">
                                          <span>Clearance Match</span>
                                          <span className="font-medium">{selectedCandidate.clearance === "Top Secret" ? "100%" : "80%"}</span>
                                        </div>
                                        <Progress value={selectedCandidate.clearance === "Top Secret" ? 100 : 80} className="h-1.5" />
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                              
                              <div className="mb-6">
                                <h3 className="font-medium text-secondary mb-3">Key Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                  {selectedCandidate.skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200 text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="mb-6">
                                <h3 className="font-medium text-secondary mb-3">Certifications</h3>
                                <div className="flex flex-wrap gap-2">
                                  {selectedCandidate.certifications.map((cert, index) => (
                                    <Badge key={index} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                                      {cert}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h3 className="font-medium text-secondary mb-3">Profile</h3>
                                <p className="text-sm text-secondary/80">{selectedCandidate.bio}</p>
                              </div>
                            </div>
                          ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                              <UserCheck className="h-12 w-12 text-secondary/30 mb-4" />
                              <h3 className="text-xl font-medium text-secondary mb-2">Candidate Details</h3>
                              <p className="text-secondary/70 max-w-md">
                                Select a candidate from the list to view detailed information about their skills, 
                                experience, and match factors.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {view === 'detailed' && (
                      <div>
                        <div className="mb-4 border-b">
                          <div className="flex">
                            <Button 
                              variant="ghost" 
                              className={`rounded-none relative px-4 py-2 text-sm ${activeTab === 'internal' ? 'text-primary font-medium' : 'text-secondary/70'}`}
                              onClick={() => setActiveTab('internal')}
                            >
                              Internal
                              {activeTab === 'internal' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
                            </Button>
                            <Button 
                              variant="ghost" 
                              className={`rounded-none relative px-4 py-2 text-sm ${activeTab === 'external' ? 'text-primary font-medium' : 'text-secondary/70'}`}
                              onClick={() => setActiveTab('external')}
                            >
                              External
                              {activeTab === 'external' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
                            </Button>
                            <Button 
                              variant="ghost" 
                              className={`rounded-none relative px-4 py-2 text-sm ${activeTab === 'all' ? 'text-primary font-medium' : 'text-secondary/70'}`}
                              onClick={() => setActiveTab('all')}
                            >
                              All
                              {activeTab === 'all' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Candidate</TableHead>
                                <TableHead>Skills</TableHead>
                                <TableHead>Experience</TableHead>
                                <TableHead>Clearance</TableHead>
                                <TableHead>Availability</TableHead>
                                <TableHead className="text-right">Match</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {searchResults
                                .filter(candidate => {
                                  return activeTab === 'all' ? true : 
                                      activeTab === 'internal' ? candidate.internal : !candidate.internal;
                                })
                                .map((candidate) => (
                                <TableRow 
                                  key={candidate.id} 
                                  className={`hover:bg-primary/5 cursor-pointer ${selectedCandidate?.id === candidate.id ? 'bg-primary/5' : ''}`}
                                  onClick={() => setSelectedCandidate(candidate)}
                                >
                                  <TableCell>
                                    <div className="flex items-center">
                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2 text-xs ${candidate.internal ? 'bg-green-500' : 'bg-blue-500'}`}>
                                        {candidate.name.substring(0, 1)}
                                      </div>
                                      <div>
                                        <div className="font-medium">{candidate.name}</div>
                                        <div className="text-xs text-secondary/70">{candidate.role}</div>
                                      </div>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                      {candidate.skills.slice(0, 2).map((skill, i) => (
                                        <Badge key={i} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                          {skill}
                                        </Badge>
                                      ))}
                                      {candidate.skills.length > 2 && (
                                        <span className="text-xs text-secondary/70">+{candidate.skills.length - 2}</span>
                                      )}
                                    </div>
                                  </TableCell>
                                  <TableCell>{candidate.experience}</TableCell>
                                  <TableCell>{candidate.clearance}</TableCell>
                                  <TableCell>{candidate.availability}</TableCell>
                                  <TableCell className="text-right">
                                    <div className="flex items-center justify-end">
                                      <span className={`inline-block w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                                        candidate.matchScore > 90 ? 'bg-green-500' : 
                                        candidate.matchScore > 80 ? 'bg-blue-500' : 'bg-secondary'
                                      }`}>
                                        {candidate.matchScore}
                                      </span>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                        
                        {selectedCandidate && (
                          <div className="mt-6 p-5 border rounded-lg bg-light/50 animate-fade-in">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 ${
                                  selectedCandidate.internal ? 'bg-green-500' : 'bg-blue-500'
                                }`}>
                                  {selectedCandidate.name.substring(0, 1)}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-secondary">{selectedCandidate.name}</h3>
                                  <p className="text-xs text-secondary/70">{selectedCandidate.role} • {selectedCandidate.experience}</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="border-primary text-primary">
                                View Full Profile
                              </Button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                              <div>
                                <h4 className="text-xs uppercase font-semibold text-secondary/70 mb-2">Skills</h4>
                                <div className="flex flex-wrap gap-1">
                                  {selectedCandidate.skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200 text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xs uppercase font-semibold text-secondary/70 mb-2">Certifications</h4>
                                <div className="flex flex-wrap gap-1">
                                  {selectedCandidate.certifications.map((cert, index) => (
                                    <Badge key={index} variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs">
                                      {cert}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xs uppercase font-semibold text-secondary/70 mb-2">Availability</h4>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 text-secondary/70 mr-1" /> 
                                  <span className="text-sm">{selectedCandidate.availability}</span>
                                </div>
                                <div className="flex items-center mt-1">
                                  <MapPin className="h-4 w-4 text-secondary/70 mr-1" /> 
                                  <span className="text-sm">{selectedCandidate.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="flex justify-between mt-8">
                      <Button 
                        onClick={() => {
                          setFile(null);
                          setSearchResults(null);
                          setSelectedCandidate(null);
                        }}
                        variant="outline"
                      >
                        New Search
                      </Button>
                      <div className="flex gap-3">
                        <Button 
                          variant="outline"
                          className="border-primary text-primary"
                        >
                          <Star className="mr-2 h-4 w-4" /> 
                          Save Results
                        </Button>
                        <Button className="bg-primary text-white hover:bg-primary/90">
                          Sign Up For Full Access
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {searchesLeft === 0 && !isProcessing && (
                  <Alert className="mt-6 border-primary/30 bg-primary/5">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <AlertTitle>Demo limit reached</AlertTitle>
                    <AlertDescription>
                      You've used all your free trial searches. Sign up for full access to our platform.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <p className="text-xs text-center text-secondary/70 max-w-md">
                  MERIT uses advanced AI to analyze job requirements and find the best candidates based on skills, experience, clearance, and availability.
                </p>
              </CardFooter>
            </Card>
            
            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/')}
                variant="outline" 
                className="rounded-full px-6"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f9f9f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e5e5e5;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default StaffingDemo;
