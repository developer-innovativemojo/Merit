
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Loader2, Building2, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import companiesData from '@/data/companies.json';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

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

const emailSchema = z.string().email({ message: "Please enter a valid email address" });

const EmailDomainSearch = () => {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectedCompany, setDetectedCompany] = useState<Company | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(null);
    
    // Reset detected company when email changes
    if (detectedCompany) setDetectedCompany(null);
  };
  
  const detectCompany = () => {
    // Validate email format
    try {
      emailSchema.parse(email);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError(error.errors[0].message);
        return;
      }
    }
    
    setIsProcessing(true);
    setEmailError(null);
    
    // Extract domain from email
    const domain = email.split('@')[1];
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Find company by domain (simulated matching)
      // In a real application, you'd make an API call to match the domain with a company
      const domainRoot = domain.split('.')[0].toLowerCase();
      
      // Find a company that might match this domain
      // This is a simplistic simulation - in reality you'd have proper domain matching
      const foundCompany = companiesData.find(company => 
        company.name.toLowerCase().includes(domainRoot) || 
        company.website.toLowerCase().includes(domainRoot)
      );
      
      if (foundCompany) {
        setDetectedCompany(foundCompany);
        toast({
          title: "Company Found",
          description: `We've found ${foundCompany.name} based on your email domain.`,
          duration: 3000,
        });
      } else {
        toast({
          title: "Company Not Found",
          description: "We couldn't find a matching company. Please try searching manually.",
          variant: "destructive"
        });
      }
      
      setIsProcessing(false);
    }, 1500);
  };
  
  const handleContinue = () => {
    if (detectedCompany) {
      navigate('/signup/company-details', { 
        state: { 
          company: detectedCompany,
          email: email 
        } 
      });
    }
  };
  
  const handleSwitch = () => {
    // This would switch to the company search tab
    // The parent component handles this through the TabsTrigger
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email-domain" className="block text-sm font-medium text-secondary mb-1">
          Enter your work email address
        </label>
        <div className="relative">
          <Input
            id="email-domain"
            type="email"
            placeholder="yourname@company.com"
            value={email}
            onChange={handleEmailChange}
            className="pl-10"
            disabled={isProcessing}
          />
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary/50" />
          <Button 
            onClick={detectCompany}
            disabled={isProcessing || email.trim() === ''}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Detecting...
              </>
            ) : (
              'Detect Company'
            )}
          </Button>
        </div>
        {emailError && (
          <p className="text-sm text-red-500 mt-1">{emailError}</p>
        )}
        <p className="text-xs text-secondary/60 mt-1">
          We'll detect your company based on your email domain
        </p>
      </div>
      
      <AnimatePresence>
        {detectedCompany && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 border border-primary/20 rounded-md bg-primary/5"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-secondary">{detectedCompany.name}</h3>
                <div className="text-sm text-secondary/70 mt-1">
                  <p>DUNS: {detectedCompany.duns} | CAGE: {detectedCompany.cage}</p>
                  <p>{detectedCompany.location} | {detectedCompany.employees} Employees</p>
                </div>
                {detectedCompany.certifications.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {detectedCompany.certifications.map((cert, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                        {cert}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleSwitch}
                  >
                    Not your company?
                  </Button>
                  <Button 
                    onClick={handleContinue}
                    size="sm"
                    className="flex items-center"
                  >
                    Continue <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="text-center pt-2">
        <p className="text-sm text-secondary/70">
          Can't find your company? <Button variant="link" className="h-auto p-0" onClick={handleSwitch}>Search manually</Button>
        </p>
      </div>
    </div>
  );
};

export default EmailDomainSearch;
