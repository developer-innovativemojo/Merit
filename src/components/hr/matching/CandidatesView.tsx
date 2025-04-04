
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, ChevronDown, User, Building } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Candidate } from './AIPoweredMatching';
import { toast } from '@/hooks/use-toast';

const CandidatesView = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'internal' | 'external'>('all');
  const [view, setView] = useState<'table' | 'grid'>('table');

  // Mock data loading effect
  useEffect(() => {
    const loadCandidates = async () => {
      // Simulating API fetch delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Sample candidate data
      const sampleCandidates: Candidate[] = [
        {
          id: '1',
          name: 'John Smith',
          type: 'internal',
          skills: ['React', 'TypeScript', 'Node.js', 'Python'],
          experience: 6,
          education: 'Master\'s in Computer Science',
          clearance: 'Secret',
          resume: 'john_smith_resume.pdf',
          lastActive: new Date('2023-07-10')
        },
        {
          id: '2',
          name: 'Sarah Johnson',
          type: 'external',
          skills: ['React', 'JavaScript', 'AWS', 'GraphQL'],
          experience: 5,
          education: 'Bachelor\'s in Software Engineering',
          clearance: 'Secret',
          resume: 'sarah_johnson_resume.pdf',
          lastActive: new Date('2023-07-14')
        },
        {
          id: '3',
          name: 'Michael Davis',
          type: 'internal',
          skills: ['Project Management', 'Agile', 'JIRA', 'Government Contracts'],
          experience: 10,
          education: 'MBA',
          clearance: 'Top Secret',
          resume: 'michael_davis_resume.pdf',
          lastActive: new Date('2023-07-12')
        },
        {
          id: '4',
          name: 'Priya Patel',
          type: 'external',
          skills: ['Machine Learning', 'Python', 'R', 'Data Visualization'],
          experience: 6,
          education: 'PhD in Data Science',
          clearance: 'Secret',
          resume: 'priya_patel_resume.pdf',
          lastActive: new Date('2023-08-05')
        },
        {
          id: '5',
          name: 'James Wilson',
          type: 'internal',
          skills: ['DevOps', 'Kubernetes', 'Terraform', 'AWS'],
          experience: 8,
          education: 'Bachelor\'s in Computer Engineering',
          clearance: 'Top Secret',
          resume: 'james_wilson_resume.pdf',
          lastActive: new Date('2023-08-02')
        }
      ];
      
      setCandidates(sampleCandidates);
      setLoading(false);
      
      toast({
        title: "Candidates loaded",
        description: `${sampleCandidates.length} candidates retrieved`,
      });
    };
    
    loadCandidates();
  }, []);
  
  // Filter candidates based on search and type filter
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = filterType === 'all' || candidate.type === filterType;
    
    return matchesSearch && matchesType;
  });

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
        </div>
      </div>
      
      {loading ? (
        <Card>
          <CardContent className="p-8 flex justify-center items-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading candidates...</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <Tabs defaultValue="table" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="table" onClick={() => setView('table')}>Table View</TabsTrigger>
              <TabsTrigger value="grid" onClick={() => setView('grid')}>Grid View</TabsTrigger>
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
        </>
      )}
    </div>
  );
};

export default CandidatesView;
