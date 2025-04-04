
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Upload, Filter, User, Building, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Candidate } from './AIPoweredMatching';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface ResumeDatabaseProps {
  candidates: Candidate[];
}

const ResumeDatabase: React.FC<ResumeDatabaseProps> = ({ candidates }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'internal' | 'external'>('all');
  const [isDragging, setIsDragging] = useState(false);
  
  // Filter candidates based on search query and type filter
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = filterType === 'all' || candidate.type === filterType;
    
    return matchesSearch && matchesType;
  });

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
    // Handle the actual file drop here
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search candidates or skills..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setFilterType('all')}>
                All Candidates
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('internal')}>
                Internal Only
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('external')}>
                External Only
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="bg-primary flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload Resumes
          </Button>
        </div>
      </div>
      
      {/* Upload Area */}
      <Card 
        className={`border-2 border-dashed ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-200'} transition-colors`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="p-6 flex flex-col items-center justify-center">
          <Upload className="h-10 w-10 text-gray-400 mb-4" />
          <CardTitle className="mb-2 text-center">Drag & Drop Resumes</CardTitle>
          <p className="text-center mb-4 text-muted-foreground">Drop PDF, DOCX, or CSV files here or click to browse</p>
          <Button variant="outline">Browse Files</Button>
        </CardContent>
      </Card>
      
      {/* Candidate Tabs */}
      <Tabs defaultValue="table" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="table">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Candidates ({filteredCandidates.length})</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Skills</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Clearance</TableHead>
                    <TableHead>Last Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCandidates.map(candidate => (
                    <TableRow key={candidate.id}>
                      <TableCell className="font-medium">{candidate.name}</TableCell>
                      <TableCell>
                        <Badge className={candidate.type === 'internal' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}>
                          {candidate.type === 'internal' ? 'Internal' : 'External'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.slice(0, 2).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 2 && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              +{candidate.skills.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{candidate.experience} years</TableCell>
                      <TableCell>{candidate.clearance}</TableCell>
                      <TableCell>{candidate.lastActive.toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCandidates.map(candidate => (
              <Card key={candidate.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base font-medium">{candidate.name}</CardTitle>
                    <Badge className={candidate.type === 'internal' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}>
                      {candidate.type === 'internal' ? (
                        <><Building className="h-3 w-3 mr-1" /> Internal</>
                      ) : (
                        <><User className="h-3 w-3 mr-1" /> External</>
                      )}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Skills</div>
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.slice(0, 4).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {skill}
                          </Badge>
                        ))}
                        {candidate.skills.length > 4 && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            +{candidate.skills.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Experience</div>
                        <div className="text-sm">{candidate.experience} years</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Clearance</div>
                        <div className="text-sm">{candidate.clearance}</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-100">
                      <div className="text-xs text-gray-500">
                        Active {candidate.lastActive.toLocaleDateString()}
                      </div>
                      <Button variant="outline" size="sm">
                        View Resume
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeDatabase;
