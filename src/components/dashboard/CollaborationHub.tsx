import React from 'react';
import { CheckSquare, MessageSquare, Clock, Users, Star, ChevronRight, Paperclip } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for collaboration
const tasks = [
  {
    id: '1',
    title: 'Review DOD Cybersecurity proposal',
    assignedTo: 'me',
    dueDate: '2023-08-15',
    status: 'in-progress',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Coordinate staffing needs with HR for NASA project',
    assignedBy: 'Sarah Johnson',
    assignedByAvatar: 'SJ',
    dueDate: '2023-08-18',
    status: 'not-started',
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Submit partner agreements for VA Health project',
    assignedTo: 'Alex Williams',
    assignedToAvatar: 'AW',
    dueDate: '2023-08-20',
    status: 'completed',
    completedDate: '2023-08-12',
    priority: 'medium'
  }
];

const messages = [
  {
    id: '1',
    sender: 'Maria Chen',
    senderAvatar: 'MC',
    department: 'HR',
    message: 'I\'ve identified 3 potential staff members for the DHS project. Can we discuss their qualifications tomorrow?',
    time: '2 hours ago',
    unread: true,
    opportunity: 'DHS Border Technology'
  },
  {
    id: '2',
    sender: 'Robert Kim',
    senderAvatar: 'RK',
    department: 'Program Management',
    message: 'The kickoff meeting for NASA Data Management is scheduled for next Tuesday. Do you have the partner agreements ready?',
    time: '5 hours ago',
    unread: true,
    opportunity: 'NASA Data Management'
  }
];

const staffingUpdates = [
  {
    id: '1',
    opportunity: 'DOD Cybersecurity Initiative',
    type: 'new-candidate',
    personName: 'James Wilson',
    personRole: 'Senior Security Architect',
    time: 'Just now',
    matchScore: 95
  },
  {
    id: '2',
    opportunity: 'VA Healthcare Modernization',
    type: 'filled-position',
    personName: 'Elena Rodriguez',
    personRole: 'Healthcare Systems Analyst',
    time: '3 hours ago',
    experience: 'Veterans Affairs, HHS'
  }
];

const TaskItem = ({ task }: { task: typeof tasks[0] }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'not-started':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="p-4 border-b border-gray-100 last:border-none">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-3">
          <div className={`w-5 h-5 rounded-full border ${task.status === 'completed' ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'} flex items-center justify-center`}>
            {task.status === 'completed' && <CheckSquare className="h-3 w-3 text-white" />}
          </div>
          
          <div>
            <h4 className={`font-medium ${task.status === 'completed' ? 'text-gray-500 line-through' : 'text-secondary'}`}>
              {task.title}
            </h4>
            <div className="flex items-center gap-2 mt-2">
              {task.assignedTo && (
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <span>Assigned to:</span>
                  {task.assignedTo === 'me' ? (
                    <span className="font-medium">You</span>
                  ) : (
                    <span className="font-medium">{task.assignedTo}</span>
                  )}
                </div>
              )}
              
              {task.assignedBy && (
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <span>From:</span>
                  <span className="font-medium">{task.assignedBy}</span>
                </div>
              )}
              
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{task.status === 'completed' ? 'Completed' : 'Due'} {task.status === 'completed' ? task.completedDate : task.dueDate}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Badge className={getStatusColor(task.status)}>
            {task.status === 'in-progress' ? 'In Progress' : 
             task.status === 'completed' ? 'Completed' : 'Not Started'}
          </Badge>
          <Badge className={getPriorityColor(task.priority)}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </Badge>
        </div>
      </div>
    </div>
  );
};

const MessageItem = ({ message }: { message: typeof messages[0] }) => {
  return (
    <div className={`p-4 border-b border-gray-100 last:border-none ${message.unread ? 'bg-blue-50' : ''}`}>
      <div className="flex gap-3">
        <Avatar>
          <AvatarFallback className="bg-primary/20 text-primary">{message.senderAvatar}</AvatarFallback>
        </Avatar>
        
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-secondary">{message.sender}</h4>
              <span className="text-xs text-gray-500">{message.department}</span>
            </div>
            <div className="text-xs text-gray-500">{message.time}</div>
          </div>
          
          <p className="mt-2 text-sm text-gray-700">{message.message}</p>
          
          <div className="mt-2 flex items-center justify-between">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              RE: {message.opportunity}
            </Badge>
            
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StaffingUpdateItem = ({ update }: { update: typeof staffingUpdates[0] }) => {
  return (
    <div className="p-4 border-b border-gray-100 last:border-none">
      <div className="flex gap-3">
        <Avatar>
          <AvatarFallback className="bg-secondary/20 text-secondary">
            {update.type === 'new-candidate' ? 'NC' : 'FP'}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-grow">
          <span className="text-xs text-gray-500">
            {update.time} • {update.opportunity}
          </span>
          
          <h4 className="font-medium text-secondary mt-1">
            {update.type === 'new-candidate' 
              ? 'New candidate identified' 
              : 'Position filled'}
          </h4>
          
          <div className="mt-2 flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs bg-primary/20 text-primary">
                {update.personName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{update.personName}</span>
            <span className="text-xs text-gray-500">• {update.personRole}</span>
          </div>
          
          {update.type === 'new-candidate' && update.matchScore && (
            <div className="mt-2 flex items-center gap-1 text-green-700">
              <Star className="h-4 w-4 fill-green-500" />
              <span className="text-sm font-medium">{update.matchScore}% match</span>
            </div>
          )}
          
          {update.type === 'filled-position' && update.experience && (
            <div className="mt-2">
              <span className="text-xs text-gray-500">Experience: </span>
              <span className="text-xs text-gray-700">{update.experience}</span>
            </div>
          )}
          
          <div className="mt-2 flex justify-end">
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollaborationHub = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-secondary">Collaboration Hub</h2>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          New Task
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex justify-between items-center">
              <div className="flex items-center">
                <CheckSquare className="h-5 w-5 mr-2 text-primary" />
                Tasks
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {tasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex justify-between items-center">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Messages
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {messages.map(message => (
              <MessageItem key={message.id} message={message} />
            ))}
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex justify-between items-center">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Staffing Updates
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {staffingUpdates.map(update => (
              <StaffingUpdateItem key={update.id} update={update} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollaborationHub;
