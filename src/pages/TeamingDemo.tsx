import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileUp, AlertCircle, ArrowLeft, Filter, Info, Star, Briefcase, Award, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import companiesData from '@/data/companies.json';

const TeamingDemo = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof companiesData | null>(null);
  const [searchesLeft, setSearchesLeft] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStage, setAnalysisStage] = useState('');
  const [selectedPartner, setSelectedPartner] = useState<(typeof companiesData)[0] | null>(null);
  const [activeTab, setActiveTab] = useState('myNetwork');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const analysisPhasesData = [
    { phase: "Extracting document data", duration: 700 },
    { phase: "Identifying requirements", duration: 600 },
    { phase: "Detecting key capabilities", duration: 500 },
    { phase: "Matching partners", duration: 800 }
  ];

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
          setSearchResults(companiesData.slice(0, 5));
          
          toast({
            title: "Analysis complete",
            description: `Found ${companiesData.slice(0, 5).length} potential teaming partners.`,
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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
    setSelectedPartner(null);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getMatchScore = (index: number) => {
    const baseScore = 98 - (index * 7);
    return Math.max(baseScore, 65);
  };

  const renderPartnerCard = (company: (typeof companiesData)[0], index: number) => {
    const matchScore = getMatchScore(index);
    const isInNetwork = index < 3;
    
    return (
      <div 
        key={company.id} 
        className={`border rounded-lg p-4 mb-4 cursor-pointer transition-all duration-300 
          ${selectedPartner?.id === company.id ? 'border-primary shadow-md bg-primary/5' : 'border-gray-200 hover:border-primary/30'}
          ${isInNetwork && activeTab === 'myNetwork' || !isInNetwork && activeTab === 'allPartners' ? 'block' : 'hidden'}`}
        onClick={() => setSelectedPartner(company)}
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
              {company.name.substring(0, 2).toUpperCase()}
            </div>
            <div className="ml-3">
              <h3 className="font-semibold text-secondary">{company.name}</h3>
              <div className="text-xs text-secondary/70 flex items-center gap-1">
                <Briefcase className="h-3 w-3" /> {company.industry}
              </div>
            </div>
          </div>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${matchScore > 90 ? 'bg-green-100' : matchScore > 80 ? 'bg-emerald-50' : 'bg-blue-50'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${matchScore > 90 ? 'bg-green-500 text-white' : matchScore > 80 ? 'bg-emerald-400 text-white' : 'bg-blue-400 text-white'}`}>
                      {matchScore}%
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Match score based on capabilities alignment</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="mt-3 text-sm">
          <div className="flex items-center gap-1 mb-1">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
              {isInNetwork ? 'Network Partner' : 'New Connection'}
            </Badge>
            {index === 0 && (
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-xs">
                Past Collaboration
              </Badge>
            )}
          </div>
          
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-secondary/80">
            <div className="flex items-center gap-1">
              <Award className="h-3 w-3 text-primary" /> 
              {index < 2 ? 'Top Secret Clearance' : 'Secret Clearance'}
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-primary" /> 
              {index < 3 ? '8(a) Certified' : 'HUBZone'}
            </div>
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="text-xs text-secondary/70">{company.address}</div>
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
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Find Teaming Partners
              </h1>
              <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
                Upload your RFP, RFI, or SOW to find the best matching companies to team with
                based on capabilities, past performance, and contract requirements.
              </p>
            </div>
            
            <Card className="bg-white border-2 border-light shadow-lg transition-all duration-500 hover:shadow-xl mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center justify-between">
                  Upload Document
                  <Badge className="bg-primary/20 hover:bg-primary/30 text-primary border-0 ml-2">
                    Demo
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Upload your RFP, RFI, or SOW to find potential teaming partners.
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
                        {file ? file.name : 'Drop your document here'}
                      </p>
                      <p className="text-secondary/70 mb-6 max-w-md">
                        {!file ? 'Supported formats: PDF, DOCX, TXT' : 'Document ready for analysis'}
                      </p>
                      {!file && (
                        <Button 
                          onClick={triggerFileInput} 
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary/10"
                        >
                          Browse Files
                        </Button>
                      )}
                      
                      {file && !isProcessing && !searchResults && (
                        <Button 
                          className="mt-4 bg-primary text-white hover:bg-primary/90"
                          onClick={() => processFile(file)}
                        >
                          Analyze Document
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
                            AI is analyzing your document to find the best matches...
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {searchResults && (
                  <div className="mt-4 animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-medium text-secondary">
                        Best Teaming Partners
                      </h3>
                      
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs flex items-center gap-1 border-gray-200"
                        >
                          <Filter className="h-3 w-3" /> 
                          Filter Partners
                        </Button>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Info className="h-4 w-4 text-secondary/70" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Partners are matched based on capability alignment, past performance, and proximity</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="mb-4 border-b">
                          <div className="flex">
                            <Button 
                              variant="ghost" 
                              className={`rounded-none relative px-4 py-2 text-sm ${activeTab === 'myNetwork' ? 'text-primary font-medium' : 'text-secondary/70'}`}
                              onClick={() => setActiveTab('myNetwork')}
                            >
                              My Network
                              {activeTab === 'myNetwork' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
                            </Button>
                            <Button 
                              variant="ghost" 
                              className={`rounded-none relative px-4 py-2 text-sm ${activeTab === 'allPartners' ? 'text-primary font-medium' : 'text-secondary/70'}`}
                              onClick={() => setActiveTab('allPartners')}
                            >
                              Outside Network
                              {activeTab === 'allPartners' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                          {searchResults.map((company, index) => renderPartnerCard(company, index))}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 border rounded-lg p-6">
                        {selectedPartner ? (
                          <div className="animate-fade-in">
                            <div className="flex justify-between items-start mb-6">
                              <div>
                                <h2 className="text-2xl font-bold text-secondary mb-1">{selectedPartner.name}</h2>
                                <p className="text-secondary/70">{selectedPartner.industry}</p>
                              </div>
                              <Button variant="outline" className="border-primary text-primary">
                                Contact Partner
                              </Button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <Card className="border border-gray-100">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base text-secondary">Company Information</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-secondary/70">Founded</span>
                                      <span className="font-medium">2008</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-secondary/70">Employees</span>
                                      <span className="font-medium">125-250</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-secondary/70">Location</span>
                                      <span className="font-medium">{selectedPartner.address}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-secondary/70">Clearance Level</span>
                                      <span className="font-medium">Top Secret</span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                              
                              <Card className="border border-gray-100">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base text-secondary">Contract Match</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="space-y-3">
                                    <div>
                                      <div className="flex justify-between text-sm mb-1">
                                        <span>Skills Match</span>
                                        <span className="font-medium">92%</span>
                                      </div>
                                      <Progress value={92} className="h-1.5" />
                                    </div>
                                    <div>
                                      <div className="flex justify-between text-sm mb-1">
                                        <span>Past Performance</span>
                                        <span className="font-medium">88%</span>
                                      </div>
                                      <Progress value={88} className="h-1.5" />
                                    </div>
                                    <div>
                                      <div className="flex justify-between text-sm mb-1">
                                        <span>Availability</span>
                                        <span className="font-medium">95%</span>
                                      </div>
                                      <Progress value={95} className="h-1.5" />
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                            
                            <div className="mb-6">
                              <h3 className="font-medium text-secondary mb-3">Core Competencies</h3>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">Cloud Infrastructure</Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">DevSecOps</Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">Data Science</Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">Agile Development</Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">Cyber Security</Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">AI/ML</Badge>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-medium text-secondary mb-3">Past Performance</h3>
                              <div className="space-y-3">
                                <div className="border rounded p-3">
                                  <div className="flex justify-between">
                                    <h4 className="font-medium">Department of Defense</h4>
                                    <span className="text-sm text-secondary/70">2020-2023</span>
                                  </div>
                                  <p className="text-sm text-secondary/70 mt-1">Enterprise Cloud Migration - $4.2M</p>
                                </div>
                                <div className="border rounded p-3">
                                  <div className="flex justify-between">
                                    <h4 className="font-medium">Department of Homeland Security</h4>
                                    <span className="text-sm text-secondary/70">2019-2022</span>
                                  </div>
                                  <p className="text-sm text-secondary/70 mt-1">Cybersecurity Enhancement Program - $3.7M</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <Info className="h-12 w-12 text-secondary/30 mb-4" />
                            <h3 className="text-xl font-medium text-secondary mb-2">Partner Details</h3>
                            <p className="text-secondary/70 max-w-md">
                              Select a partner from the list to view detailed information about their capabilities, 
                              past performance, and match factors.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <Button 
                        onClick={() => {
                          setFile(null);
                          setSearchResults(null);
                          setSelectedPartner(null);
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
                  MERIT uses advanced AI to analyze your documents and find the best companies to team with based on past performance, capabilities, and contract requirements.
                </p>
              </CardFooter>
            </Card>
            
            <div className="text-center mt-8">
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

export default TeamingDemo;
