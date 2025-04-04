
import React from 'react';
import { Plus, Upload, Users, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const QuickActions = () => {
  return (
    <Card className="bg-white p-4 shadow-sm border border-gray-100">
      <div className="flex flex-wrap gap-3 md:gap-4 justify-between md:justify-start">
        <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
          <Plus className="h-4 w-4" />
          <span>Create Opportunity</span>
        </Button>
        
        <Button variant="outline" className="border-gray-200 text-secondary flex items-center gap-2">
          <Upload className="h-4 w-4" />
          <span>Upload Document</span>
        </Button>
        
        <Button variant="outline" className="border-gray-200 text-secondary flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>Find Partners</span>
        </Button>
        
        <div className="relative ml-auto">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search opportunities..." 
            className="pl-9 h-9 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-44 md:w-64"
          />
        </div>
      </div>
    </Card>
  );
};

export default QuickActions;
