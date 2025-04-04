
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import HRSidebar from '@/components/hr/HRSidebar';
import Header from '@/components/dashboard/Header';
import MetricCard from '@/components/hr/metrics/MetricCard';
import ActionRequiredItem from '@/components/hr/ActionRequiredItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  Award, 
  Brain, 
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import InviteButton from '@/components/invite/InviteButton';

const HRStaffingDashboard = () => {
  const navigate = useNavigate();
  
  const actionRequiredItems = [
    {
      title: 'Urgent: Senior Software Engineer needed',
      description: 'BD team requires staffing for a new proposal due in 5 days',
      date: 'Due Jul 15',
      priority: 'high' as const,
      source: 'BD Team'
    },
    {
      title: 'Interview schedule for Project Manager candidates',
      description: 'Program Lead needs interview coordination for 3 candidates',
      date: 'Due Jul 18',
      priority: 'medium' as const,
      source: 'Program Team'
    },
    {
      title: 'Contract extension paperwork pending',
      description: 'Contract documentation needs review and processing',
      date: 'Due Jul 22',
      priority: 'low' as const,
      source: 'Contracts'
    }
  ];

  // Recent matches data
  const recentMatches = [
    {
      position: 'Senior Software Engineer',
      candidate: 'John Smith',
      score: 92,
      date: 'Today',
      type: 'internal'
    },
    {
      position: 'Project Manager',
      candidate: 'Sarah Johnson',
      score: 86,
      date: 'Today',
      type: 'external'
    },
    {
      position: 'Data Scientist',
      candidate: 'Michael Davis',
      score: 78,
      date: 'Yesterday',
      type: 'internal'
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-light">
        <HRSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-secondary mb-2">HR & Staffing Dashboard</h1>
              <p className="text-muted-foreground">Overview of staffing health and action items</p>
            </div>

            {/* AI Matching Feature Highlight */}
            <Card className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="p-4 bg-white rounded-full">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">AI-Powered Resume Matching</h2>
                    <p className="text-muted-foreground mb-4">Upload job descriptions and instantly find the best matching candidates from your resume database.</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-white text-gray-800">Instant Matching</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-800">Skills Analysis</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-800">Side-by-Side Comparison</Badge>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => navigate('/hr/ai-matching')} 
                    className="bg-primary hover:bg-primary/90 px-6"
                  >
                    Start AI Matching <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <MetricCard 
                title="Open Positions" 
                value={24} 
                trend="up" 
                trendValue="4 since last week" 
                icon={<Briefcase className="h-5 w-5 text-primary" />}
              />
              <MetricCard 
                title="Active Candidates" 
                value={142} 
                trend="up" 
                trendValue="18 since last week" 
                icon={<Users className="h-5 w-5 text-primary" />}
              />
              <MetricCard 
                title="Upcoming Interviews" 
                value={12} 
                trend="neutral" 
                trendValue="Same as last week" 
                icon={<Calendar className="h-5 w-5 text-primary" />}
              />
              <MetricCard 
                title="Avg. Time to Fill" 
                value="18.5 days" 
                trend="down" 
                trendValue="2.3 days improvement" 
                icon={<Award className="h-5 w-5 text-primary" />}
              />
            </div>
            
            {/* Action Required & Recent Matching Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left column */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-medium">Action Required</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {actionRequiredItems.map((item, index) => (
                      <ActionRequiredItem 
                        key={index}
                        title={item.title}
                        description={item.description}
                        date={item.date}
                        priority={item.priority}
                        source={item.source}
                      />
                    ))}
                  </CardContent>
                </Card>
              </div>
              
              {/* Right column */}
              <div className="lg:col-span-1">
                {/* Recent Matches */}
                <Card className="mb-6">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-medium">Recent Matches</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentMatches.map((match, index) => (
                      <div key={index} className="flex items-start justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="font-medium">{match.position}</div>
                            <Badge className={match.type === 'internal' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}>
                              {match.type === 'internal' ? 'Internal' : 'External'}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {match.candidate}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">{match.date}</div>
                        </div>
                        <Badge className={match.score >= 90 ? 'bg-green-100 text-green-800' : match.score >= 80 ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}>
                          {match.score}% Match
                        </Badge>
                      </div>
                    ))}

                    <Button 
                      variant="outline" 
                      className="w-full mt-2" 
                      onClick={() => navigate('/hr/ai-matching')}
                    >
                      View All Matches <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Staffing Health */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-medium">Staffing Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Current Fill Rate</span>
                          <span className="text-sm font-medium text-primary">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Critical Roles Filled</span>
                          <span className="text-sm font-medium text-primary">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Proposal Support</span>
                          <span className="text-sm font-medium text-amber-500">76%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-amber-500" />
                        <h4 className="text-sm font-medium">Immediate Attention Required</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        3 critical staffing needs for the NASA SWIFT proposal due next week
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
          
          <InviteButton />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default HRStaffingDashboard;
