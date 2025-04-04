
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Users, BriefcaseBusiness, ClipboardList } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DashboardSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const dashboardOptions = [
  {
    title: 'Business Development',
    description: 'Track opportunities, manage pipelines, and analyze business growth metrics.',
    icon: BriefcaseBusiness,
    path: '/teaming-dashboard',
    color: 'bg-blue-500',
  },
  {
    title: 'HR & Staffing',
    description: 'Manage recruitment, track candidates, and oversee position fulfillment.',
    icon: Users,
    path: '/hr-staffing-dashboard',
    color: 'bg-primary',
  },
  {
    title: 'Program Management',
    description: 'Monitor program execution, track deliverables, and manage client relationships.',
    icon: ClipboardList,
    path: '/program-dashboard', // This is a placeholder path for now
    color: 'bg-purple-500',
  },
];

const DashboardSelectionModal = ({ isOpen, onClose }: DashboardSelectionModalProps) => {
  const navigate = useNavigate();

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white rounded-xl">
        <DialogHeader className="px-6 pt-6 pb-0">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-secondary">Select Your Dashboard</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="p-6">
          <p className="text-secondary/70 mb-6">
            Choose the dashboard that best fits your role and responsibilities.
          </p>
          
          <div className="grid gap-4">
            {dashboardOptions.map((option) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => handleSelect(option.path)}
              >
                <div className="border rounded-lg p-4 hover:border-primary/30 hover:bg-light/50 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${option.color} text-white`}>
                      <option.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary text-lg">{option.title}</h3>
                      <p className="text-secondary/70 text-sm">{option.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardSelectionModal;
