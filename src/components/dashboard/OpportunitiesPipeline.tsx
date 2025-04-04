
import React from 'react';
import { Calendar, ChevronRight, Award, DollarSign, AlertCircle, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock data for opportunities
const opportunities = {
  qualification: [
    {
      id: '1',
      title: 'DOD Cybersecurity Initiative',
      agency: 'Department of Defense',
      value: '$2.5M',
      dueDate: '2023-10-15',
      priority: 'high',
      partners: 3
    },
    {
      id: '2',
      title: 'VA Healthcare Modernization',
      agency: 'Veterans Affairs',
      value: '$1.8M',
      dueDate: '2023-11-20',
      priority: 'medium',
      partners: 2
    }
  ],
  capture: [
    {
      id: '3',
      title: 'NASA Data Management',
      agency: 'NASA',
      value: '$3.2M',
      dueDate: '2023-09-30',
      priority: 'high',
      partners: 5
    }
  ],
  proposal: [
    {
      id: '4',
      title: 'DHS Border Technology',
      agency: 'Homeland Security',
      value: '$4.7M',
      dueDate: '2023-08-25',
      priority: 'medium',
      partners: 4
    },
    {
      id: '5',
      title: 'USDA Agricultural Analysis',
      agency: 'Department of Agriculture',
      value: '$1.2M',
      dueDate: '2023-09-15',
      priority: 'low',
      partners: 2
    }
  ],
  won: [
    {
      id: '6',
      title: 'EPA Environmental Monitoring',
      agency: 'EPA',
      value: '$2.1M',
      dueDate: '2023-07-10',
      priority: 'completed',
      partners: 3
    }
  ]
};

const OpportunityCard = ({ opportunity }: { opportunity: typeof opportunities.qualification[0] }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <Card className="mb-4 bg-white border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-secondary">{opportunity.title}</h3>
          <Badge className={`${getPriorityColor(opportunity.priority)} border`}>
            {opportunity.priority === 'completed' ? 'Won' : opportunity.priority}
          </Badge>
        </div>
        
        <div className="mt-3 text-sm text-gray-500">{opportunity.agency}</div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-1 text-primary">
            <DollarSign className="h-4 w-4" />
            <span className="font-medium">{opportunity.value}</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{new Date(opportunity.dueDate).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {opportunity.partners} Partners
          </div>
          
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
            Details <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PipelineColumn = ({ title, opportunities, color }: { title: string, opportunities: any[], color: string }) => {
  return (
    <div className="flex-1 min-w-[250px] px-2">
      <div className={`py-2 px-4 rounded-t-md ${color}`}>
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-white">{title}</h2>
          <Badge variant="outline" className="text-white border-white/50">
            {opportunities.length}
          </Badge>
        </div>
      </div>
      
      <div className="mt-2 pb-4 space-y-3">
        {opportunities.map(opportunity => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
        
        <Button variant="ghost" className="w-full border border-dashed border-gray-300 text-gray-500 hover:text-primary hover:border-primary">
          <Plus className="h-4 w-4 mr-1" /> Add Opportunity
        </Button>
      </div>
    </div>
  );
};

const OpportunitiesPipeline = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-secondary">Opportunities Pipeline</h2>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Plus className="h-4 w-4 mr-1" /> New Opportunity
        </Button>
      </div>
      
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          <PipelineColumn 
            title="Qualification" 
            opportunities={opportunities.qualification} 
            color="bg-blue-600"
          />
          <PipelineColumn 
            title="Capture" 
            opportunities={opportunities.capture}
            color="bg-purple-600" 
          />
          <PipelineColumn 
            title="Proposal" 
            opportunities={opportunities.proposal}
            color="bg-orange-600" 
          />
          <PipelineColumn 
            title="Won / Program" 
            opportunities={opportunities.won}
            color="bg-green-600" 
          />
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesPipeline;
