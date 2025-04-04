
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type Priority = 'high' | 'medium' | 'low';

interface ActionRequiredItemProps {
  title: string;
  description: string;
  date: string;
  priority: Priority;
  source: string;
  onClick?: () => void;
}

const ActionRequiredItem: React.FC<ActionRequiredItemProps> = ({
  title,
  description,
  date,
  priority,
  source,
  onClick
}) => {
  const getPriorityStyles = (priority: Priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-amber-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-3 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={cn("w-2 h-2 rounded-full", getPriorityStyles(priority))}></span>
          <h3 className="font-medium text-secondary">{title}</h3>
        </div>
        <span className="text-xs text-muted-foreground bg-gray-100 px-2 py-1 rounded-full">
          {source}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          <span>{date}</span>
        </div>
        
        <Button variant="ghost" size="sm" className="text-xs" onClick={onClick}>
          Review <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default ActionRequiredItem;
