import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Linkedin, Mail, User, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

interface SerializableRole {
  id: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  preview: string;
}

const profileFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  linkedin: z.string().optional(),
  title: z.string().min(2, { message: "Job title is required." }),
  bio: z.string().optional(),
  phone: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const bioSuggestions: Record<string, string[]> = {
  "Program Manager": [
    "Experienced program manager with a track record of successfully delivering government contracts.",
    "Detail-oriented program manager focused on meeting deliverables and maintaining client satisfaction.",
    "Results-driven program manager with expertise in resource allocation and timeline management."
  ],
  "Business Development": [
    "Strategic BD professional specializing in identifying and capturing government contracts.",
    "Business development expert with experience in building successful teaming arrangements.",
    "Proven track record in identifying and pursuing federal contracting opportunities."
  ],
  "Human Resources": [
    "HR leader specializing in government contract staffing and compliance.",
    "Human resources professional focused on recruiting and retaining top talent for federal contracts.",
    "Experienced in managing personnel requirements for government contracts of all sizes."
  ],
  "CEO": [
    "Visionary leader driving company growth through strategic government partnerships.",
    "Executive with extensive experience in the federal contracting sector.",
    "Business leader focused on building strong client relationships and delivering excellence."
  ]
};

const ProfileInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [bioSuggestion, setBioSuggestion] = useState('');
  
  const company = location.state?.company || null;
  const email = location.state?.email || null;
  const primaryRole: SerializableRole = location.state?.primaryRole || null;
  const secondaryRoles: SerializableRole[] = location.state?.secondaryRoles || [];
  
  console.log("ProfileInfo received state:", {
    company,
    email,
    primaryRole,
    secondaryRoles
  });
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: email || "",
      linkedin: "",
      title: primaryRole?.name || "",
      bio: "",
      phone: ""
    },
    mode: "onChange"
  });

  useEffect(() => {
    const formValues = form.getValues();
    let fieldsCompleted = 0;
    let totalRequiredFields = 5; // firstName, lastName, email, title, bio
    
    if (formValues.firstName) fieldsCompleted++;
    if (formValues.lastName) fieldsCompleted++;
    if (formValues.email) fieldsCompleted++;
    if (formValues.title) fieldsCompleted++;
    if (formValues.bio) fieldsCompleted++;
    
    const percentage = Math.floor((fieldsCompleted / totalRequiredFields) * 100);
    setCompletionPercentage(percentage);
  }, [form.watch()]);
  
  useEffect(() => {
    const title = form.watch('title');
    if (title) {
      const matchingTitle = Object.keys(bioSuggestions).find(key => 
        title.toLowerCase().includes(key.toLowerCase())
      );
      
      if (matchingTitle && bioSuggestions[matchingTitle].length > 0) {
        const randomIndex = Math.floor(Math.random() * bioSuggestions[matchingTitle].length);
        setBioSuggestion(bioSuggestions[matchingTitle][randomIndex]);
      } else {
        setBioSuggestion("Professional with expertise in " + title + " and experience in government contracting.");
      }
    }
  }, [form.watch('title')]);

  useEffect(() => {
    if (!company || !primaryRole) {
      toast({
        title: "Information Missing",
        description: "Please complete the previous steps first.",
        variant: "destructive"
      });
      navigate('/signup');
    } else {
      if (email) {
        form.setValue('email', email);
      }
      
      form.setValue('title', primaryRole.name);
    }
  }, [company, primaryRole, navigate, toast, form, email]);

  function onSubmit(data: ProfileFormValues) {
    setIsSubmitting(true);

    const profileData = {
      company,
      primaryRole,
      secondaryRoles,
      profile: data
    };
    
    console.log(profileData);
    
    setTimeout(() => {
      toast({
        title: "Registration Complete!",
        description: "Your MERIT account has been created successfully.",
      });
      
      navigate('/signup/welcome', { 
        state: { 
          profileData
        } 
      });
    }, 1500);
  }
  
  const applyBioSuggestion = () => {
    form.setValue('bio', bioSuggestion);
  };
  
  const fetchLinkedInProfile = () => {
    toast({
      title: "LinkedIn Integration",
      description: "Fetching profile data from LinkedIn...",
    });
    
    setTimeout(() => {
      form.setValue('firstName', "Alex");
      form.setValue('lastName', "Morgan");
      form.setValue('bio', "Government contracting professional with 7+ years of experience in " + primaryRole?.name.toLowerCase() + ". Specialized in federal procurement processes and compliance requirements.");
      
      toast({
        title: "LinkedIn Data Retrieved",
        description: "Your profile was successfully populated with LinkedIn data.",
      });
    }, 1500);
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
                Complete Your Profile
              </motion.h1>
              <motion.p 
                className="text-secondary/70"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Tell us a bit about yourself to personalize your experience
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
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-secondary/70 flex items-center justify-center font-medium mr-2">3</div>
                    <h2 className="font-medium text-secondary/70">Role Selection</h2>
                    <div className="mx-3 border-t border-gray-300 w-8"></div>
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium mr-2">4</div>
                    <h2 className="font-medium text-primary">Your Profile</h2>
                  </div>
                </div>
                
                {company && primaryRole && (
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 p-4 bg-primary/5 rounded-md border border-primary/10"
                  >
                    <h3 className="font-medium text-lg text-secondary">{company.name}</h3>
                    <div className="text-sm text-secondary/70">
                      <p>{company.location} | Primary Role: {primaryRole.name}</p>
                      {secondaryRoles.length > 0 && (
                        <p className="mt-1">Secondary Roles: {secondaryRoles.map(role => role.name).join(', ')}</p>
                      )}
                    </div>
                  </motion.div>
                )}
                
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-secondary">Profile completion</h3>
                  <span className="text-sm font-medium text-primary">{completionPercentage}%</span>
                </div>
                <Progress value={completionPercentage} className="mb-8 h-2" />

                <div className="flex justify-end mb-6">
                  <Button 
                    variant="outline"
                    className="flex items-center"
                    onClick={fetchLinkedInProfile}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Import from LinkedIn
                  </Button>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="John" 
                                  {...field} 
                                  className="pl-10"
                                />
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary/50" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="Doe" 
                                  {...field} 
                                  className="pl-10"
                                />
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary/50" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="john.doe@example.com" 
                                type="email" 
                                {...field} 
                                className="pl-10"
                                readOnly={!!email}
                              />
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary/50" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormDescription>Optional, but recommended for account recovery</FormDescription>
                          <FormControl>
                            <Input 
                              placeholder="(555) 123-4567" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="linkedin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn Profile</FormLabel>
                          <FormDescription>Optional - Add your LinkedIn URL to enhance your profile</FormDescription>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="https://linkedin.com/in/johndoe" 
                                {...field} 
                                className="pl-10"
                              />
                              <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary/50" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Program Manager" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Professional Bio <span className="text-red-500">*</span></FormLabel>
                          <FormDescription>Tell us about your experience and expertise</FormDescription>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your professional background, expertise, and interests..." 
                              {...field} 
                              className="min-h-[120px]"
                            />
                          </FormControl>
                          {bioSuggestion && (
                            <div className="mt-2 bg-blue-50 p-3 rounded-md border border-blue-100">
                              <p className="text-sm text-blue-800 mb-2">Suggested bio based on your job title:</p>
                              <p className="text-sm italic text-blue-700">"{bioSuggestion}"</p>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={applyBioSuggestion}
                                className="mt-2"
                              >
                                Use this suggestion
                              </Button>
                            </div>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-between pt-4 items-center">
                      <div className="text-sm text-secondary/70">
                        <span className="text-red-500">*</span> Required fields
                      </div>
                      <Button 
                        type="submit" 
                        className="bg-primary hover:bg-primary/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating Account...
                          </>
                        ) : (
                          'Complete Sign Up'
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default ProfileInfo;
