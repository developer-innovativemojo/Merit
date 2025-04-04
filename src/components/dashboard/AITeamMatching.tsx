
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileUp, FileText, CheckCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface MatchResult {
  company: string;
  percentage: number;
  isInNetwork: boolean;
}

const AITeamMatching = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  
  // Mock data for team matches
  const teamMatches: MatchResult[] = [
    { company: "TechSolutions Inc.", percentage: 95, isInNetwork: true },
    { company: "Innovate Partners", percentage: 88, isInNetwork: true },
    { company: "DataSecure Systems", percentage: 82, isInNetwork: true },
    { company: "GlobalTech Enterprises", percentage: 78, isInNetwork: false },
    { company: "Nexus Innovations", percentage: 75, isInNetwork: false },
    { company: "Quantum Solutions Group", percentage: 70, isInNetwork: false },
  ];
  
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
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      // Check if files are valid (PDF, DOCX, TXT)
      const validFiles = files.filter(file => 
        ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
        .includes(file.type)
      );
      
      if (validFiles.length !== files.length) {
        toast({
          title: "Invalid file format",
          description: "Please upload only PDF, DOCX, or TXT files.",
          variant: "destructive",
        });
        return;
      }
      
      // Process the files
      const fileNames = validFiles.map(file => file.name);
      setUploadedFiles(fileNames);
      
      // Simulate processing
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setShowResults(true);
        toast({
          title: "Analysis complete",
          description: "Team matching results are ready to view.",
        });
      }, 2000);
    }
  };
  
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const fileNames = files.map(file => file.name);
      setUploadedFiles(fileNames);
      
      // Simulate processing
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setShowResults(true);
        toast({
          title: "Analysis complete",
          description: "Team matching results are ready to view.",
        });
      }, 2000);
    }
  };
  
  const handleUploadClick = () => {
    document.getElementById('file-upload')?.click();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">AI Team Matching</h2>
      
      {!showResults ? (
        <Card className="transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <FileText className="mr-2 h-5 w-5 text-secondary" />
              Team Partner Matching
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging ? "border-secondary bg-secondary/10" : "border-gray-300"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                id="file-upload" 
                className="hidden" 
                multiple 
                onChange={handleFileInputChange}
                accept=".pdf,.docx,.txt"
              />
              
              {isProcessing ? (
                <div className="py-8">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="rounded-full bg-secondary/20 h-12 w-12 mb-4"></div>
                    <div className="h-4 bg-secondary/20 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-secondary/20 rounded w-1/3"></div>
                  </div>
                </div>
              ) : (
                <>
                  <FileUp className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium">
                    Upload opportunity documents to find ideal teaming partners
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Drag and drop your RFPs, SOWs, or contract documents here
                  </p>
                  <button
                    onClick={handleUploadClick}
                    className="mt-4 bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Select Files
                  </button>
                  <p className="mt-4 text-xs text-gray-400">
                    Supported formats: PDF, DOCX, TXT
                  </p>
                </>
              )}
              
              {uploadedFiles.length > 0 && (
                <div className="mt-6 border-t pt-4">
                  <p className="text-sm font-medium">Uploaded files:</p>
                  <ul className="mt-2 text-sm">
                    {uploadedFiles.map((file, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {file}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card className="transition-all duration-300 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileText className="mr-2 h-5 w-5 text-secondary" />
                Document Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-gray-50">
                  <h4 className="font-medium mb-2">Extracted Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>5+ years of federal contracting experience</li>
                    <li>Cybersecurity certification required (CMMC Level 3)</li>
                    <li>Cloud migration expertise (AWS/Azure)</li>
                    <li>Past performance in healthcare IT systems</li>
                    <li>Small business set-aside eligibility</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-md bg-gray-50">
                  <h4 className="font-medium mb-2">Key Capabilities Needed</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Agile development methodology</li>
                    <li>FedRAMP compliance experience</li>
                    <li>Data analytics and reporting</li>
                    <li>System integration with legacy systems</li>
                    <li>24/7 support capabilities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Network Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMatches
                    .filter(match => match.isInNetwork)
                    .map((match, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-md bg-secondary/5 hover:bg-secondary/10 transition-colors">
                        <span className="font-medium">{match.company}</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full" 
                              style={{ width: `${match.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{match.percentage}%</span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Outside Network Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMatches
                    .filter(match => !match.isInNetwork)
                    .map((match, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="font-medium">{match.company}</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${match.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{match.percentage}%</span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                setShowResults(false);
                setUploadedFiles([]);
              }}
              className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md transition-colors"
            >
              Upload New Document
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AITeamMatching;
