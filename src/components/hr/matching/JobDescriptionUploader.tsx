import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FilePlus, Search, MoreVertical, Upload, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { JobDescription } from './AIPoweredMatching';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';

interface JobDescriptionUploaderProps {
  jobDescriptions: JobDescription[];
  onSelect: (jd: JobDescription) => void;
}

const JobDescriptionUploader: React.FC<JobDescriptionUploaderProps> = ({ jobDescriptions, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStage, setUploadStage] = useState('');
  const [newJobDescriptions, setNewJobDescriptions] = useState<JobDescription[]>([]);
  
  const filteredJDs = [...jobDescriptions, ...newJobDescriptions].filter(jd => 
    jd.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    jd.department.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'filled': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      processFiles(files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      processFiles(files);
    }
  };
  
  const processFiles = (files: File[]) => {
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
    
    setIsUploading(true);
    setUploadProgress(0);
    setUploadStage('Extracting document data');
    
    const analysisPhasesData = [
      { phase: "Extracting document data", duration: 1000 },
      { phase: "Identifying key requirements", duration: 1500 },
      { phase: "Parsing job details", duration: 1200 },
      { phase: "Finalizing job descriptions", duration: 800 }
    ];
    
    let currentPhase = 0;
    let currentProgress = 0;
    
    const progressInterval = setInterval(() => {
      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setIsUploading(false);
        setUploadProgress(100);
        
        const newJDs: JobDescription[] = validFiles.map((file, index) => {
          const fileNameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
          return {
            id: `new-${Date.now()}-${index}`,
            title: `${fileNameWithoutExt.replace(/-|_/g, " ")}`,
            department: "Engineering",
            skills: ["JavaScript", "React", "AWS", "Node.js"],
            experience: "3+ years",
            education: "Bachelor's degree",
            clearance: "Secret",
            status: 'draft' as 'active' | 'filled' | 'draft',
            created: new Date()
          };
        });
        
        setNewJobDescriptions(prev => [...prev, ...newJDs]);
        
        toast({
          title: "Upload complete",
          description: `${validFiles.length} job descriptions have been added`,
        });
        
        return;
      }
      
      if (currentProgress >= ((currentPhase + 1) / analysisPhasesData.length) * 100) {
        currentPhase = Math.min(currentPhase + 1, analysisPhasesData.length - 1);
        setUploadStage(analysisPhasesData[currentPhase].phase);
      }
      
      currentProgress += 1;
      setUploadProgress(currentProgress);
      
    }, 50);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search job descriptions..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button className="bg-primary flex items-center gap-2">
          <FilePlus className="h-4 w-4" />
          New Job Description
        </Button>
      </div>
      
      <Card 
        className={`border-2 border-dashed ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-200'} transition-colors`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="p-6 flex flex-col items-center justify-center">
          <input 
            type="file" 
            id="file-input" 
            className="hidden" 
            onChange={handleFileSelect} 
            accept=".pdf,.docx,.txt" 
            multiple
          />
          
          {isUploading ? (
            <div className="w-full max-w-md animate-fade-in">
              <div className="rounded-full bg-primary/10 p-6 mb-4 mx-auto w-fit">
                <Upload className="h-10 w-10 text-primary animate-pulse" />
              </div>
              
              <CardTitle className="mb-2 text-center">{uploadStage}</CardTitle>
              
              <div className="mb-2 flex justify-between items-center text-sm">
                <span>Processing files</span>
                <span>{Math.round(uploadProgress)}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2 mb-4" />
              
              <p className="text-center text-muted-foreground text-sm italic">
                AI is analyzing job descriptions to extract requirements...
              </p>
            </div>
          ) : (
            <>
              <Upload className="h-10 w-10 text-gray-400 mb-4" />
              <CardTitle className="mb-2 text-center">Drag & Drop here</CardTitle>
              <CardDescription className="text-center mb-4">Drop PDF or DOCX files here, or click to browse</CardDescription>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('file-input')?.click()}
              >
                Browse Files
              </Button>
            </>
          )}
        </CardContent>
      </Card>
      
      {filteredJDs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {filteredJDs.map((jd) => (
            <Card key={jd.id} className={`hover:shadow-md transition-shadow ${newJobDescriptions.some(newJd => newJd.id === jd.id) ? 'border-primary/30 bg-primary/5' : ''}`}>
              <CardHeader className="pb-2 flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-medium">{jd.title}</CardTitle>
                  <CardDescription>{jd.department}</CardDescription>
                </div>
                <div className="flex items-center">
                  <Badge className={`mr-2 ${getStatusColor(jd.status)}`}>
                    {jd.status.charAt(0).toUpperCase() + jd.status.slice(1)}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onSelect(jd)}>Find Matches</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Skills</div>
                    <div className="flex flex-wrap gap-1">
                      {jd.skills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Experience</div>
                      <div className="text-sm">{jd.experience}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Clearance</div>
                      <div className="text-sm">{jd.clearance}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      Created {jd.created.toLocaleDateString()}
                    </div>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-primary"
                      onClick={() => onSelect(jd)}
                    >
                      <Search className="h-3 w-3 mr-1" />
                      Find Matches
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {filteredJDs.length === 0 && !isUploading && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No job descriptions found. Upload or create a new job description.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default JobDescriptionUploader;
