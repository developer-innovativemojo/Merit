
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InviteModal } from './InviteModal';

interface ContextualInvitePromptProps {
  type: 'partner' | 'opportunity';
  data: {
    partnerName?: string;
    opportunityName?: string;
  };
}

const ContextualInvitePrompt = ({ type, data }: ContextualInvitePromptProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getMessage = () => {
    if (type === 'partner' && data.partnerName) {
      return (
        <>
          <span className="font-medium">Looks like {data.partnerName}</span> isn't in MERIT. Want to invite them?
        </>
      );
    } else if (type === 'opportunity' && data.opportunityName) {
      return (
        <>
          Need help on <span className="font-medium">{data.opportunityName}</span>? Invite teammates or partners.
        </>
      );
    }
    
    return 'Would you like to invite someone to collaborate?';
  };
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <>
      <Card className="bg-primary/5 border-primary/20 p-3 flex justify-between items-center mb-4 animate-fade-in">
        <p className="text-sm">{getMessage()}</p>
        
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="secondary" 
            className="text-xs h-8"
            onClick={() => setIsModalOpen(true)}
          >
            Invite
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6" 
            onClick={() => setIsVisible(false)}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </Card>
      
      <InviteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        contextualData={data}
      />
    </>
  );
};

export default ContextualInvitePrompt;
