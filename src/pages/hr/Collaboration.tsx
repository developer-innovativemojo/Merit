
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import HRSidebar from '@/components/hr/HRSidebar';
import Header from '@/components/dashboard/Header';
import PageTemplate from '@/components/hr/PageTemplate';
import { MessageSquare, Users, Video, FileText, Search, PlusCircle, MessageCircle } from 'lucide-react';
import InviteButton from '@/components/invite/InviteButton';
import ContextualInvitePrompt from '@/components/invite/ContextualInvitePrompt';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Collaboration = () => {
  // Sample data for contextual prompts
  const collaborationData = {
    opportunityName: "Talent Acquisition Project"
  };

  // Mock conversation teams
  const teams = [
    {
      id: 1,
      name: "NASA SWIFT Proposal Team",
      members: 8,
      unread: 5,
      lastMessage: "10 min ago",
      type: "bd"
    },
    {
      id: 2,
      name: "Program Management Office",
      members: 12,
      unread: 0,
      lastMessage: "2 hours ago",
      type: "program"
    },
    {
      id: 3,
      name: "Talent Acquisition Working Group",
      members: 6,
      unread: 2,
      lastMessage: "1 day ago",
      type: "hr"
    },
    {
      id: 4,
      name: "DHS Cloud Migration Team",
      members: 9,
      unread: 0,
      lastMessage: "2 days ago",
      type: "bd"
    }
  ];

  // Mock recent documents
  const documents = [
    {
      id: 1,
      title: "Senior Cloud Architect - Job Description",
      owner: "Michael R.",
      modified: "Today",
      comments: 3
    },
    {
      id: 2,
      title: "Technical Interview Questions - DevOps",
      owner: "You",
      modified: "Yesterday",
      comments: 5
    },
    {
      id: 3,
      title: "NASA SWIFT - Staffing Plan",
      owner: "Sarah T.",
      modified: "Jul 12, 2023",
      comments: 8
    },
    {
      id: 4,
      title: "Security Clearance Process Guide",
      owner: "HR Team",
      modified: "Jul 10, 2023",
      comments: 0
    }
  ];

  // Mock upcoming meetings
  const meetings = [
    {
      id: 1,
      title: "Staffing Planning - NASA SWIFT",
      time: "Today, 2:00 PM",
      participants: 5
    },
    {
      id: 2,
      title: "Resume Review - Data Scientists",
      time: "Tomorrow, 10:00 AM",
      participants: 3
    },
    {
      id: 3,
      title: "Interview Panel Coordination",
      time: "Jul 18, 1:30 PM",
      participants: 6
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-light">
        <HRSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-6">
            <PageTemplate 
              title="Collaboration Hub" 
              description="Communicate with BD and program teams"
              icon={<MessageSquare className="h-5 w-5 text-primary" />}
            >
              <ContextualInvitePrompt 
                type="opportunity" 
                data={collaborationData} 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {/* Teams & Conversations Column */}
                <div className="md:col-span-1 space-y-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-medium">Teams</CardTitle>
                        <Button variant="ghost" size="sm" className="h-8">
                          <PlusCircle className="h-4 w-4 mr-1" />
                          New
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search teams..." className="pl-10" />
                      </div>

                      {teams.map(team => (
                        <div key={team.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/5 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={`https://ui-avatars.com/api/?name=${team.name}&background=random`} />
                              <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                {team.name}
                                {team.unread > 0 && (
                                  <Badge className="h-5 min-w-5 rounded-full bg-primary">{team.unread}</Badge>
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {team.members} members • {team.lastMessage}
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className={`
                            ${team.type === 'bd' ? 'border-blue-200 text-blue-700' : ''}
                            ${team.type === 'program' ? 'border-green-200 text-green-700' : ''}
                            ${team.type === 'hr' ? 'border-purple-200 text-purple-700' : ''}
                          `}>
                            {team.type.toUpperCase()}
                          </Badge>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full">
                        View All Teams
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-medium">Upcoming Meetings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {meetings.map(meeting => (
                        <div key={meeting.id} className="p-3 border rounded-md">
                          <div className="font-medium">{meeting.title}</div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center gap-1 text-sm">
                              <Video className="h-3 w-3 text-primary" />
                              <span>{meeting.time}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                              <Users className="h-3 w-3" />
                              <span>{meeting.participants} participants</span>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button variant="default" size="sm" className="text-xs h-7">Join</Button>
                            <Button variant="outline" size="sm" className="text-xs h-7">Details</Button>
                          </div>
                        </div>
                      ))}
                      <Button variant="ghost" className="w-full">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Schedule Meeting
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Shared Documents Column */}
                <div className="md:col-span-2">
                  <Card className="h-full">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-medium">Shared Documents</CardTitle>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="h-8">
                            <FileText className="h-4 w-4 mr-1" />
                            Upload
                          </Button>
                          <Button variant="default" size="sm" className="h-8">
                            <PlusCircle className="h-4 w-4 mr-1" />
                            Create New
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search documents..." className="pl-10" />
                      </div>

                      <div className="space-y-3">
                        {documents.map(doc => (
                          <Card key={doc.id} className="overflow-hidden">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex items-start gap-3">
                                  <div className="p-2 bg-secondary/10 rounded-md mt-1">
                                    <FileText className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <div className="font-medium">{doc.title}</div>
                                    <div className="text-xs text-muted-foreground">
                                      Owned by: <span className={doc.owner === 'You' ? 'text-primary' : ''}>{doc.owner}</span> • Modified: {doc.modified}
                                    </div>
                                    {doc.comments > 0 && (
                                      <div className="flex items-center gap-1 mt-1 text-xs">
                                        <MessageCircle className="h-3 w-3 text-blue-500" />
                                        <span>{doc.comments} comment{doc.comments !== 1 ? 's' : ''}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="sm" className="h-7">View</Button>
                                  <Button variant="outline" size="sm" className="h-7">Edit</Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <Button variant="outline" className="w-full">
                          View All Documents
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </PageTemplate>
          </main>
          
          <InviteButton />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Collaboration;
