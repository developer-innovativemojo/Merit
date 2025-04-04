
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { JobDescription, Candidate } from './AIPoweredMatching';
import { Check, Briefcase, ChevronRight, AlertTriangle, User, Clock } from 'lucide-react';

interface CandidateMatchingProps {
  jobDescription: JobDescription | null;
  candidates: Candidate[];
}

const CandidateMatching: React.FC<CandidateMatchingProps> = ({ jobDescription, candidates }) => {
  if (!jobDescription) {
    return (
      <Card className="border-dashed border-2">
        <CardContent className="p-10 flex flex-col items-center justify-center text-center">
          <Briefcase className="h-16 w-16 text-gray-300 mb-4" />
          <CardTitle className="mb-2">No Job Description Selected</CardTitle>
          <CardDescription>
            Please select a job description from the Job Descriptions tab to see matching candidates
          </CardDescription>
        </CardContent>
      </Card>
    );
  }
  
  if (candidates.length === 0) {
    return (
      <Card className="border-dashed border-2">
        <CardContent className="p-10 flex flex-col items-center justify-center text-center">
          <AlertTriangle className="h-16 w-16 text-amber-300 mb-4" />
          <CardTitle className="mb-2">No Matching Candidates</CardTitle>
          <CardDescription>
            We couldn't find any candidates matching this job description. Try broadening the job requirements or uploading more resumes.
          </CardDescription>
        </CardContent>
      </Card>
    );
  }
  
  const getMatchScoreColor = (score?: number) => {
    if (!score) return 'bg-gray-100 text-gray-800';
    if (score >= 80) return 'bg-green-100 text-green-800';
    if (score >= 60) return 'bg-blue-100 text-blue-800';
    if (score >= 40) return 'bg-amber-100 text-amber-800';
    return 'bg-red-100 text-red-800';
  };
  
  const getMatchIndicator = (candidateValue: string, jdValue: string) => {
    const isMatch = candidateValue.toLowerCase() === jdValue.toLowerCase();
    return isMatch ? (
      <Check className="h-4 w-4 text-green-500" />
    ) : (
      <div className="h-4 w-4 rounded-full bg-amber-100 border border-amber-200"></div>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Selected Job Description */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{jobDescription.title}</CardTitle>
              <CardDescription>{jobDescription.department}</CardDescription>
            </div>
            <Badge>Selected JD</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium mb-1">Required Skills</div>
              <div className="flex flex-wrap gap-1">
                {jobDescription.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-sm font-medium mb-1">Experience</div>
                <div>{jobDescription.experience}</div>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Clearance</div>
                <div>{jobDescription.clearance}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Top Matches */}
      <div>
        <h3 className="text-lg font-medium mb-4">Top Matches ({candidates.length})</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2 flex flex-row items-start justify-between">
                <div>
                  <div className="flex items-center">
                    <CardTitle className="text-lg">{candidate.name}</CardTitle>
                    <Badge 
                      className={`ml-2 ${candidate.type === 'internal' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}
                    >
                      {candidate.type === 'internal' ? 'Internal' : 'External'}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    Active {candidate.lastActive.toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge className={`${getMatchScoreColor(candidate.matchScore)} text-lg px-3 py-1`}>
                  {candidate.matchScore}%
                </Badge>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Skills Match */}
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">Skills Match</div>
                    <div className="flex flex-wrap gap-1">
                      {jobDescription.skills.map((skill, index) => {
                        const hasSkill = candidate.skills.includes(skill);
                        return (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className={hasSkill ? 'bg-green-100 text-green-800 border-green-200' : 'bg-secondary/20 text-secondary border-secondary/10'}
                          >
                            {hasSkill && <Check className="h-3 w-3 mr-1" />}
                            {skill}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Other Requirements */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Experience</div>
                      <div className="flex items-center">
                        <span className="mr-2">{candidate.experience} years</span>
                        {candidate.experience >= parseInt(jobDescription.experience) ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 text-amber-500" />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Education</div>
                      <div className="flex items-center">
                        <span className="mr-2">{candidate.education.split(' ')[0]}</span>
                        {getMatchIndicator(candidate.education, jobDescription.education)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Clearance</div>
                      <div className="flex items-center">
                        <span className="mr-2">{candidate.clearance}</span>
                        {getMatchIndicator(candidate.clearance, jobDescription.clearance)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="ghost" size="sm">
                  View Full Resume
                </Button>
                <Button className="bg-primary" size="sm">
                  Contact Candidate <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateMatching;
