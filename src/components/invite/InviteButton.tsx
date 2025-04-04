
import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InviteModal } from './InviteModal';

const InviteButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white z-50 shadow-lg group transition-all duration-200 flex items-center gap-2"
        onClick={() => setIsModalOpen(true)}
        size="lg"
      >
        <UserPlus className="h-5 w-5 group-hover:scale-110 transition-transform" />
        <span className="group-hover:translate-x-0.5 transition-transform">+ Invite Contact</span>
      </Button>
      
      <InviteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default InviteButton;
