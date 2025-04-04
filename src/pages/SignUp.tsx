
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompanySearch from '@/components/CompanySearch';
import EmailDomainSearch from '@/components/EmailDomainSearch';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Search, Mail, ArrowRight, Building2, Users, Briefcase } from 'lucide-react';

const SignUp = () => {
  const [searchMethod, setSearchMethod] = useState<'company' | 'email'>('company');
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col"
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
                Welcome to MERIT
              </motion.h1>
              <motion.p 
                className="text-secondary/70 max-w-xl mx-auto"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                The intelligent platform that connects government contractors with perfect-fit opportunities and partners
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, staggerChildren: 0.1 }}
            >
              <Card className="border-none card-shadow hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Building2 size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-secondary mb-2">Business Development</h3>
                  <p className="text-secondary/70 text-sm">
                    Find perfect-fit contract opportunities and connect with potential teaming partners based on your company's capabilities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none card-shadow hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-secondary mb-2">Human Resources</h3>
                  <p className="text-secondary/70 text-sm">
                    Identify ideal candidates for contract positions and streamline the staffing process with AI-powered matching.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none card-shadow hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-secondary mb-2">Program Management</h3>
                  <p className="text-secondary/70 text-sm">
                    Oversee contract execution and resource allocation with powerful tools designed to keep your projects on track.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card className="mb-8 border-none card-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-primary">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium mr-2">1</div>
                      <h2 className="font-medium">Find Your Company</h2>
                    </div>
                    <div className="hidden sm:flex items-center opacity-50">
                      <div className="w-8 h-8 rounded-full bg-gray-200 text-secondary/70 flex items-center justify-center font-medium mr-2">2</div>
                      <h2 className="font-medium">Company Details</h2>
                      <div className="mx-3 border-t border-gray-300 w-8"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 text-secondary/70 flex items-center justify-center font-medium mr-2">3</div>
                      <h2 className="font-medium">Role Selection</h2>
                      <div className="mx-3 border-t border-gray-300 w-8"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 text-secondary/70 flex items-center justify-center font-medium mr-2">4</div>
                      <h2 className="font-medium">Your Profile</h2>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="company" onValueChange={(value) => setSearchMethod(value as 'company' | 'email')}>
                    <TabsList className="grid grid-cols-2 mb-6">
                      <TabsTrigger value="company" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                        <Search className="mr-2 h-4 w-4" />
                        Find My Company
                      </TabsTrigger>
                      <TabsTrigger value="email" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                        <Mail className="mr-2 h-4 w-4" />
                        Use Work Email
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="company" className="mt-0">
                      <CompanySearch />
                    </TabsContent>
                    
                    <TabsContent value="email" className="mt-0">
                      <EmailDomainSearch />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-6 card-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-secondary mb-4">Why Join MERIT?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary mb-1">Faster Teaming</h3>
                  <p className="text-sm text-secondary/70">Quickly connect with qualified partners for government opportunities.</p>
                </div>
                
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary mb-1">Smarter Matches</h3>
                  <p className="text-sm text-secondary/70">AI-powered matching ensures optimal partnership opportunities.</p>
                </div>
                
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary mb-1">Seamless Execution</h3>
                  <p className="text-sm text-secondary/70">Streamlined collaboration tools for successful contract execution.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default SignUp;
