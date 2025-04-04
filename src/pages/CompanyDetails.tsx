
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowRight, Info, Loader2 } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

interface CompanyDetailsProps {}

interface Company {
  id: string;
  name: string;
  duns: string;
  cage: string;
  uei: string;
  naics: string;
  employees: number;
  location: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  entityStructure: string;
  yearFounded: number;
  annualRevenue: string;
  certifications: string[];
  website: string;
  industry: string;
}

interface FieldInfo {
  tooltip: string;
  impact: 'high' | 'medium' | 'low';
}

const fieldInfos: Record<string, FieldInfo> = {
  uei: { 
    tooltip: "Unique Entity Identifier - Required for government contracting.", 
    impact: 'high' 
  },
  naics: { 
    tooltip: "North American Industry Classification System code - Affects which contracts you qualify for.", 
    impact: 'high' 
  },
  address: { 
    tooltip: "Your company's official address on record.", 
    impact: 'medium' 
  },
  city: { 
    tooltip: "City where your company is located.", 
    impact: 'medium' 
  },
  state: { 
    tooltip: "State where your company is located - May affect local contract eligibility.", 
    impact: 'medium' 
  },
  zip: { 
    tooltip: "ZIP code of your company's location.", 
    impact: 'low' 
  },
  entityStructure: { 
    tooltip: "Your company's legal structure - Affects eligibility for certain contracts.", 
    impact: 'high' 
  },
  yearFounded: { 
    tooltip: "Year your company was established - May affect eligibility for certain contracts.", 
    impact: 'medium' 
  },
  annualRevenue: { 
    tooltip: "Your company's annual revenue - Determines small business status.", 
    impact: 'high' 
  }
};

const getImpactColor = (impact: 'high' | 'medium' | 'low') => {
  switch (impact) {
    case 'high':
      return 'bg-orange-50 border-orange-200 text-orange-700';
    case 'medium':
      return 'bg-blue-50 border-blue-200 text-blue-700';
    case 'low':
      return 'bg-gray-50 border-gray-200 text-gray-700';
  }
};

const CompanyDetails: React.FC<CompanyDetailsProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [company, setCompany] = useState<Company | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationsCompleted, setAnimationsCompleted] = useState<{[key: string]: boolean}>({});
  const [formData, setFormData] = useState({
    uei: '',
    naics: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    entityStructure: '',
    yearFounded: '',
    annualRevenue: ''
  });
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Retrieve the selected company from location state
    if (location.state && location.state.company) {
      setCompany(location.state.company);
      
      // Check if email was passed from previous screen
      if (location.state.email) {
        setEmail(location.state.email);
      }
      
      // Start autofill animation after a short delay
      setTimeout(() => {
        setIsAnimating(true);
        toast({
          title: "Retrieving Company Data",
          description: "Autofilling your company details...",
          duration: 3000,
        });
      }, 1000);
    }
  }, [location.state, toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/signup/role', { 
      state: { 
        company,
        email
      } 
    });
  };

  const markAnimationComplete = (id: string, value: string) => {
    setAnimationsCompleted(prev => ({ ...prev, [id]: true }));
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const renderAnimatedInput = (id: keyof typeof formData, label: string, value: string, animationDelay: number) => {
    // Determine if this field's animation is complete
    const isComplete = animationsCompleted[id];
    const fieldInfo = fieldInfos[id];
    
    return (
      <div className="space-y-2">
        <div className="flex items-center">
          <Label htmlFor={id} className="mr-1">{label}</Label>
          {fieldInfo && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-xs ${getImpactColor(fieldInfo.impact)}`}>
                    <Info className="h-2.5 w-2.5" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{fieldInfo.tooltip}</p>
                  <div className="mt-1 text-xs">
                    Impact on matching: <span className="font-medium capitalize">{fieldInfo.impact}</span>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <div className="relative">
          <Input
            id={id}
            name={id}
            value={formData[id]}
            onChange={handleInputChange}
            className={`pl-3 ${isAnimating && !isComplete ? 'bg-gray-50' : ''}`}
            readOnly={isAnimating && !isComplete}
          />
          {isAnimating && !isComplete && (
            <div className="absolute inset-0 flex items-center pl-3 pointer-events-none">
              <TypeAnimation
                sequence={[
                  animationDelay,
                  value,
                  () => markAnimationComplete(id, value)
                ]}
                cursor={false}
                speed={80}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

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
                Company Details
              </motion.h1>
              <motion.p 
                className="text-secondary/70"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Verify your company information to improve match accuracy
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
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium mr-2">2</div>
                    <h2 className="font-medium text-primary">Company Details</h2>
                    <div className="mx-3 border-t border-gray-300 w-8"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-secondary/70 flex items-center justify-center font-medium mr-2">3</div>
                    <h2 className="font-medium text-secondary/70">Role Selection</h2>
                    <div className="mx-3 border-t border-gray-300 w-8"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-secondary/70 flex items-center justify-center font-medium mr-2">4</div>
                    <h2 className="font-medium text-secondary/70">Your Profile</h2>
                  </div>
                </div>
                
                {company ? (
                  <form onSubmit={handleSubmit}>
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mb-6 p-5 bg-primary/5 rounded-md border border-primary/10"
                    >
                      <h3 className="font-medium text-lg text-secondary mb-2">{company.name}</h3>
                      <div className="text-sm text-secondary/70 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                        <p><span className="font-medium">DUNS:</span> {company.duns}</p>
                        <p><span className="font-medium">CAGE:</span> {company.cage}</p>
                        <p><span className="font-medium">Industry:</span> {company.industry}</p>
                        <p><span className="font-medium">Employees:</span> {company.employees}</p>
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {renderAnimatedInput('uei', 'Unique Entity ID (UEI)', company.uei, 500)}
                      {renderAnimatedInput('naics', 'Primary NAICS Code', company.naics, 800)}
                    </div>

                    <div className="grid grid-cols-1 gap-6 mb-6">
                      {renderAnimatedInput('address', 'Street Address', company.address, 1100)}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                      {renderAnimatedInput('city', 'City', company.city, 1400)}
                      {renderAnimatedInput('state', 'State', company.state, 1700)}
                      {renderAnimatedInput('zip', 'ZIP Code', company.zip, 2000)}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {renderAnimatedInput('entityStructure', 'Entity Structure', company.entityStructure, 2300)}
                      {renderAnimatedInput('yearFounded', 'Year Founded', company.yearFounded.toString(), 2600)}
                      {renderAnimatedInput('annualRevenue', 'Annual Revenue', company.annualRevenue, 2900)}
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6 text-sm text-blue-800">
                      <p className="font-medium mb-1">Why is accurate information important?</p>
                      <p>
                        The details you provide help MERIT match your company with relevant opportunities. 
                        Fields marked with orange indicators strongly affect your matching results.
                      </p>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-primary hover:bg-primary/90 text-white flex items-center"
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-secondary/70">No company selected. Please go back and select a company.</p>
                    <Button 
                      onClick={() => navigate('/signup')}
                      className="mt-4"
                    >
                      Back to Company Search
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default CompanyDetails;
