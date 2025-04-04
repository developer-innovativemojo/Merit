
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, FileText, Users, Briefcase, Brain, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RoleBasedLandingProps {
  role: 'BD' | 'HR' | 'Program' | 'SME' | 'Reviewer';
  userName: string;
}

const RoleBasedLanding = ({ role, userName }: RoleBasedLandingProps) => {
  const getRoleContent = () => {
    switch (role) {
      case 'BD':
        return {
          title: 'Welcome to MERIT BD',
          description: 'You have been invited to collaborate on business development opportunities.',
          icon: <Briefcase className="h-8 w-8 text-primary" />,
          steps: [
            'Explore the BD dashboard to see current opportunities',
            'Set up your profile with your areas of expertise',
            'Connect with teammates using the collaboration hub',
            'Begin contributing to opportunity development'
          ],
          primaryAction: 'Explore Opportunities',
          secondaryAction: 'Complete Profile',
          permissions: ['View opportunities', 'Create proposals', 'Partner network access', 'Full collaboration tools']
        };
      case 'HR':
        return {
          title: 'Welcome to MERIT HR & Staffing',
          description: 'You have access to staffing and personnel management tools.',
          icon: <Users className="h-8 w-8 text-primary" />,
          steps: [
            'Review the HR dashboard for an overview',
            'Set up your recruiter profile',
            'Explore the talent database',
            'Begin managing open positions'
          ],
          primaryAction: 'View HR Dashboard',
          secondaryAction: 'Set Up Profile',
          permissions: ['Personnel database access', 'Position management', 'Candidate reviews', 'Staffing analytics']
        };
      case 'Program':
        return {
          title: 'Welcome to MERIT Program Management',
          description: 'You can now manage program execution and team coordination.',
          icon: <FileText className="h-8 w-8 text-primary" />,
          steps: [
            'Review current program status on your dashboard',
            'Set up your program manager profile',
            'Connect with your assigned team members',
            'Begin tracking program milestones'
          ],
          primaryAction: 'View Programs',
          secondaryAction: 'Set Up Profile',
          permissions: ['Project timeline management', 'Resource allocation', 'Team coordination', 'Client communications']
        };
      case 'SME':
        return {
          title: 'Welcome to MERIT as Subject Matter Expert',
          description: 'Your expertise will enhance MERIT proposals and solutions.',
          icon: <Brain className="h-8 w-8 text-primary" />,
          steps: [
            'Define your areas of expertise in your profile',
            'Review opportunities where your expertise is needed',
            'Connect with BD teams working on relevant proposals',
            'Begin contributing technical content to proposals'
          ],
          primaryAction: 'View Opportunities',
          secondaryAction: 'Complete Expert Profile',
          permissions: ['Knowledge contribution', 'Technical review access', 'Solution development', 'Expert community access']
        };
      case 'Reviewer':
        return {
          title: 'Welcome to MERIT as Reviewer',
          description: 'Your role is to review and approve proposals before submission.',
          icon: <MessageSquare className="h-8 w-8 text-primary" />,
          steps: [
            'Set up your reviewer profile',
            'Review your assigned documents in the queue',
            'Provide feedback and approvals',
            'Collaborate with proposal teams'
          ],
          primaryAction: 'View Review Queue',
          secondaryAction: 'Set Up Profile',
          permissions: ['Document review access', 'Approval authority', 'Feedback tools', 'Version comparison']
        };
      default:
        return {
          title: 'Welcome to MERIT',
          description: 'You have been invited to join the MERIT platform.',
          icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
          steps: [
            'Complete your profile',
            'Explore the dashboard',
            'Connect with your team',
            'Begin collaborating'
          ],
          primaryAction: 'Go to Dashboard',
          secondaryAction: 'Complete Profile',
          permissions: ['Basic platform access', 'Team collaboration', 'Document viewing']
        };
    }
  };

  const content = getRoleContent();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
          {content.icon}
        </div>
        <h1 className="text-3xl font-bold text-secondary mb-2">{content.title}</h1>
        <p className="text-muted-foreground">
          Hi {userName}, {content.description}
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">Getting Started</CardTitle>
          <CardDescription>Follow these steps to get started with MERIT</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {content.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button className="flex-1">{content.primaryAction}</Button>
            <Button variant="outline" className="flex-1">{content.secondaryAction}</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Access Level</CardTitle>
          <CardDescription>Here's what you can do with your current role</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.permissions.map((permission, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{permission}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoleBasedLanding;
