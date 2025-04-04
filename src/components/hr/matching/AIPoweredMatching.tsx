
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import JobDescriptionUploader from './JobDescriptionUploader';
import ResumeDatabase from './ResumeDatabase';
import CandidateMatching from './CandidateMatching';
import { Button } from '@/components/ui/button';
import { Search, Users, FileText } from 'lucide-react';
import { RefinedTabs, RefinedTabsList, RefinedTabsTrigger, RefinedTabsContent } from '@/components/ui/refined-tabs';

// Job description type definition
export interface JobDescription {
  id: string;
  title: string;
  department: string;
  skills: string[];
  experience: string;
  education: string;
  clearance: string;
  status: 'active' | 'filled' | 'draft';
  created: Date;
}

// Candidate type definition
export interface Candidate {
  id: string;
  name: string;
  type: 'internal' | 'external';
  skills: string[];
  experience: number;
  education: string;
  clearance: string;
  resume: string;
  lastActive: Date;
  matchScore?: number;
}

const AIPoweredMatching = () => {
  const [selectedJobDescription, setSelectedJobDescription] = useState<JobDescription | null>(null);
  const [matchedCandidates, setMatchedCandidates] = useState<Candidate[]>([]);
  const [activeTab, setActiveTab] = useState('jd');

  // Sample job descriptions
  const sampleJobDescriptions: JobDescription[] = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      department: 'Engineering',
      skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
      experience: '5+ years',
      education: 'Bachelor\'s in Computer Science',
      clearance: 'Secret',
      status: 'active',
      created: new Date('2023-06-15')
    },
    {
      id: '2',
      title: 'Project Manager',
      department: 'Program Management',
      skills: ['Program Management', 'JIRA', 'Agile', 'Government Contracts'],
      experience: '8+ years',
      education: 'Bachelor\'s in Business or related field',
      clearance: 'Top Secret',
      status: 'active',
      created: new Date('2023-07-02')
    }
  ];

  // Sample candidates
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
    }
  ];

  // Function to simulate AI matching
  const matchCandidates = (jd: JobDescription) => {
    // Simple matching algorithm for demonstration
    const matched = sampleCandidates.map(candidate => {
      // Calculate match score based on skills overlap
      const skillsMatch = candidate.skills.filter(skill => 
        jd.skills.includes(skill)
      ).length / jd.skills.length;
      
      // Consider experience match
      const expRequired = parseInt(jd.experience);
      const expMatch = candidate.experience >= expRequired ? 1 : candidate.experience / expRequired;
      
      // Consider clearance match
      const clearanceMatch = candidate.clearance === jd.clearance ? 1 : 0.5;
      
      // Calculate overall match score (simple average)
      const matchScore = Math.round((skillsMatch * 0.6 + expMatch * 0.2 + clearanceMatch * 0.2) * 100);
      
      return {
        ...candidate,
        matchScore
      };
    }).sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
    
    setMatchedCandidates(matched);
    setSelectedJobDescription(jd);
    setActiveTab('matching');
  };

  return (
    <div className="space-y-6">
      <RefinedTabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <RefinedTabsList className="mb-4">
          <RefinedTabsTrigger value="jd">
            <span className="inline-flex items-center">
              <FileText className="h-4 w-4 mr-2" /> 
              Job Descriptions
            </span>
          </RefinedTabsTrigger>
          <RefinedTabsTrigger value="resumes">
            <span className="inline-flex items-center">
              <Users className="h-4 w-4 mr-2" /> 
              Resume Database
            </span>
          </RefinedTabsTrigger>
          <RefinedTabsTrigger value="matching">
            <span className="inline-flex items-center">
              <Search className="h-4 w-4 mr-2" /> 
              Candidate Matching
            </span>
          </RefinedTabsTrigger>
        </RefinedTabsList>
        
        <div className="p-0">
          <RefinedTabsContent value="jd" className="mt-2">
            <JobDescriptionUploader 
              jobDescriptions={sampleJobDescriptions}
              onSelect={matchCandidates}
            />
          </RefinedTabsContent>
          
          <RefinedTabsContent value="resumes" className="mt-2">
            <ResumeDatabase candidates={sampleCandidates} />
          </RefinedTabsContent>
          
          <RefinedTabsContent value="matching" className="mt-2">
            <CandidateMatching 
              jobDescription={selectedJobDescription}
              candidates={matchedCandidates}
            />
          </RefinedTabsContent>
        </div>
      </RefinedTabs>
      
      {/* Quick Actions */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Upload Job Description
            </Button>
            <Button variant="outline" size="sm" className="inline-flex items-center gap-2">
              <Users className="h-4 w-4" />
              Bulk Upload Resumes
            </Button>
            <Button variant="outline" size="sm" className="inline-flex items-center gap-2">
              <Search className="h-4 w-4" />
              Quick Match
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIPoweredMatching;
