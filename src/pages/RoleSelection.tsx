import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ArrowRight, Building2, Users, Briefcase, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";

interface Role {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  preview: string;
}

interface SerializableRole {
  id: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  preview: string;
}

const roles: Role[] = [
  { 
    id: 'bd', 
    name: 'Business Development',
    description: 'Finding and pursuing new business opportunities',
    icon: Building2,
    color: 'bg-blue-100 text-blue-600',
    preview: 'Opportunity matching, teaming partner recommendations, proposal tools'
  },
  { 
    id: 'hr', 
    name: 'Human Resources',
    description: 'Manage recruiting and staffing operations',
    icon: Users,
    color: 'bg-green-100 text-green-600',
    preview: 'Talent matching, contract staffing, skill analysis, resource forecasting'
  },
  { 
    id: 'program', 
    name: 'Program Management',
    description: 'Overseeing project execution and delivery',
    icon: Briefcase,
    color: 'bg-purple-100 text-purple-600',
    preview: 'Project dashboards, resource allocation, deliverable tracking'
  },
  { 
    id: 'leadership', 
    name: 'Leadership',
    description: 'Executive decision-making and strategic planning',
    icon: Star,
    color: 'bg-amber-100 text-amber-600',
    preview: 'Company performance metrics, pipeline visibility, strategic insights'
  },
];

const toSerializableRole = (role: Role): SerializableRole => {
  let iconName = 'Unknown';
  if (role.icon === Building2) iconName = 'Building2';
  if (role.icon === Users) iconName = 'Users';
  if (role.icon === Briefcase) iconName = 'Briefcase';
  if (role.icon === Star) iconName = 'Star';

  return {
    id: role.id,
    name: role.name,
    description: role.description,
    iconName,
    color: role.color,
    preview: role.preview
  };
};

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [secondaryRoles, setSecondaryRoles] = useState<string[]>([]);
  const [selectedDashboard, setSelectedDashboard] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const company = location.state?.company || null;
  const email = location.state?.email || null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with role:", selectedRole);
    
    if (selectedRole) {
      const primaryRoleObj = roles.find(r => r.id === selectedRole);
      
      if (!primaryRoleObj) {
        toast({
          title: "Error",
          description: "Please select a primary role",
          variant: "destructive",
        });
        return;
      }
      
      const serializablePrimaryRole = toSerializableRole(primaryRoleObj);
      const serializableSecondaryRoles = roles
        .filter(r => secondaryRoles.includes(r.id))
        .map(toSerializableRole);
      
      console.log("Navigating to profile with state:", { 
        company, 
        email,
        primaryRole: serializablePrimaryRole,
        secondaryRoles: serializableSecondaryRoles
      });
      
      navigate('/signup/profile', { 
        state: { 
          company, 
          email,
          primaryRole: serializablePrimaryRole,
          secondaryRoles: serializableSecondaryRoles
        }
      });
    }
  };

  const handleRoleSelect = (value: string) => {
    setSelectedRole(value);
    setSelectedDashboard(value);
    
    if (secondaryRoles.includes(value)) {
      setSecondaryRoles(prev => prev.filter(id => id !== value));
    }
  };

  const handleSecondaryRoleToggle = (id: string) => {
    if (id === selectedRole) return;
    
    setSecondaryRoles(prev => {
      if (prev.includes(id)) {
        return prev.filter(roleId => roleId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  if (!company) {
    React.useEffect(() => {
      navigate('/signup');
    }, [navigate]);
    return null;
  }

  return (
    <motion.div 
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <motion.h1 
                className="text-3xl font-bold text-secondary mb-2"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Select Your Role
              </motion.h1>
              <motion.p 
                className="text-secondary/70"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                We'll personalize your MERIT experience based on your role
              </motion.p>
            </div>
            
            <Card className="mb-8 border-none card-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-secondary/70">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-secondary/70 flex items-center justify-center font-medium mr-2">1</div>
                    <h2 className="font-medium">Find Company</h2>
                  </div>
                  <div className="hidden sm:flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-secondary/70 flex items-center justify-center font-medium mr-2">2</div>
                    <h2 className="font-medium text-secondary/70">Company Details</h2>
                    <div className="mx-3 border-t border-gray-300 w-8"></div>
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium mr-2">3</div>
                    <h2 className="font-medium text-primary">Role Selection</h2>
                    <div className="mx-3 border-t border-gray-300 w-8"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-secondary/70 flex items-center justify-center font-medium mr-2">4</div>
                    <h2 className="font-medium text-secondary/70">Your Profile</h2>
                  </div>
                </div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 p-4 bg-primary/5 rounded-md border border-primary/10"
                >
                  <h3 className="font-medium text-lg text-secondary">{company.name}</h3>
                  <div className="text-sm text-secondary/70">
                    <p>{company.location} | {company.industry}</p>
                  </div>
                </motion.div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="font-medium text-lg text-secondary mb-3">Select your primary role</h3>
                    <RadioGroup value={selectedRole} onValueChange={handleRoleSelect} className="gap-3">
                      {roles.map((role) => (
                        <motion.div 
                          key={role.id} 
                          className={`flex items-start space-x-3 border rounded-md p-4 hover:border-primary/50 transition-all cursor-pointer ${selectedRole === role.id ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                          whileHover={{ y: -2, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + parseInt(role.id) * 0.1 }}
                        >
                          <RadioGroupItem value={role.id} id={role.id} className="mt-1" />
                          <div className="grid gap-1.5 flex-1">
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full ${role.color} flex items-center justify-center mr-2`}>
                                <role.icon className="h-4 w-4" />
                              </div>
                              <Label htmlFor={role.id} className="font-medium text-secondary text-lg">{role.name}</Label>
                            </div>
                            <p className="text-sm text-secondary/70">{role.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium text-lg text-secondary mb-3">Add secondary roles (optional)</h3>
                    <p className="text-sm text-secondary/70 mb-3">Select any additional roles you perform to customize your experience further</p>
                    <div className="space-y-2">
                      {roles.map((role) => (
                        <div key={`secondary-${role.id}`} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`secondary-${role.id}`} 
                            checked={secondaryRoles.includes(role.id)}
                            disabled={selectedRole === role.id}
                            onCheckedChange={() => handleSecondaryRoleToggle(role.id)}
                          />
                          <Label 
                            htmlFor={`secondary-${role.id}`} 
                            className={`${selectedRole === role.id ? 'text-gray-400' : 'text-secondary'}`}
                          >
                            {role.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedDashboard && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 border border-gray-200 rounded-md p-4"
                    >
                      <h3 className="font-medium text-secondary mb-2">Your dashboard preview</h3>
                      <p className="text-sm text-secondary/70 mb-3">
                        Based on your selection, your dashboard will feature:
                      </p>
                      <div className="bg-gray-50 rounded-md p-4">
                        <p className="text-sm font-medium text-primary mb-1">
                          {roles.find(r => r.id === selectedDashboard)?.name} Dashboard
                        </p>
                        <p className="text-sm text-secondary/70">
                          {roles.find(r => r.id === selectedDashboard)?.preview}
                        </p>
                        {secondaryRoles.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              Additional features from your secondary roles:
                            </p>
                            <ul className="list-disc pl-5 text-sm text-secondary/70 space-y-1">
                              {secondaryRoles.map(id => (
                                <li key={`feature-${id}`}>
                                  {roles.find(r => r.id === id)?.name}: {roles.find(r => r.id === id)?.preview.split(',')[0]}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="mt-8 flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-primary/90 text-white flex items-center"
                      disabled={!selectedRole}
                    >
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default RoleSelection;
