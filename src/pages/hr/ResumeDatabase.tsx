
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from "@/components/ui/tooltip";
import HRSidebar from '@/components/hr/HRSidebar';
import Header from '@/components/dashboard/Header';
import PageTemplate from '@/components/hr/PageTemplate';
import { FileText, Upload, Search, Filter, List, Grid } from 'lucide-react';
import InviteButton from '@/components/invite/InviteButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const ResumeDatabase = () => {
  const { toast } = useToast();
  const [dragOver, setDragOver] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Mock resume data
  const resumes = [
    { id: 1, name: 'John Smith', title: 'Senior Software Engineer', skills: ['JavaScript', 'React', 'Node.js'], date: '2023-06-15' },
    { id: 2, name: 'Sarah Johnson', title: 'Project Manager', skills: ['Agile', 'Scrum', 'JIRA'], date: '2023-07-02' },
    { id: 3, name: 'Michael Williams', title: 'Data Scientist', skills: ['Python', 'Machine Learning', 'SQL'], date: '2023-06-28' },
    { id: 4, name: 'Emma Brown', title: 'UX Designer', skills: ['Figma', 'Adobe XD', 'User Research'], date: '2023-07-10' },
    { id: 5, name: 'James Davis', title: 'DevOps Engineer', skills: ['AWS', 'Docker', 'Kubernetes'], date: '2023-06-20' },
    { id: 6, name: 'Olivia Miller', title: 'Full Stack Developer', skills: ['JavaScript', 'Python', 'React'], date: '2023-07-05' },
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    // Check if files were dropped
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      
      // Filter for PDF files
      const pdfFiles = files.filter(file => file.type === 'application/pdf');
      
      if (pdfFiles.length > 0) {
        toast({
          title: `${pdfFiles.length} resume(s) uploaded successfully`,
          description: "Your files have been added to the database."
        });
      } else {
        toast({
          title: "Invalid file format",
          description: "Please upload PDF files only.",
          variant: "destructive"
        });
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      toast({
        title: `${files.length} resume(s) uploaded successfully`,
        description: "Your files have been added to the database."
      });
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
                title="Resume Database" 
                description="Manage and search through all candidate resumes"
                icon={<FileText className="h-5 w-5 text-primary" />}
              >
                <div className="mb-6">
                  <div 
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragOver ? 'border-primary bg-primary/5' : 'border-gray-300'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-medium mb-2">Drag and drop resumes here</h3>
                    <p className="text-sm text-muted-foreground mb-4">Upload PDF files or click to browse</p>
                    <div>
                      <label htmlFor="resume-upload">
                        <Button>
                          Browse Files
                        </Button>
                        <input 
                          id="resume-upload" 
                          type="file" 
                          multiple 
                          accept=".pdf" 
                          className="hidden" 
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search resumes by name, skills or title..." 
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setViewMode('list')}
                      className={viewMode === 'list' ? 'bg-secondary/20' : ''}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setViewMode('grid')}
                      className={viewMode === 'grid' ? 'bg-secondary/20' : ''}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className={`
                  ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}
                `}>
                  {resumes.map(resume => (
                    <Card key={resume.id} className="overflow-hidden">
                      <CardContent className={`p-4 ${viewMode === 'list' ? 'flex justify-between items-center' : ''}`}>
                        <div>
                          <div className="text-lg font-medium">{resume.name}</div>
                          <div className="text-sm text-muted-foreground mb-2">{resume.title}</div>
                          <div className="flex flex-wrap gap-1 my-2">
                            {resume.skills.map(skill => (
                              <Badge key={skill} variant="secondary" className="font-normal">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-xs text-muted-foreground mt-2">
                            Added: {new Date(resume.date).toLocaleDateString()}
                          </div>
                        </div>
                        {viewMode === 'list' && (
                          <Button size="sm">View Resume</Button>
                        )}
                        {viewMode === 'grid' && (
                          <Button className="w-full mt-4" size="sm">View Resume</Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </PageTemplate>
            </main>
            
            <InviteButton />
          </div>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
};

export default ResumeDatabase;
