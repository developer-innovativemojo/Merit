
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, FileText, Users, BarChart3, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showTour, setShowTour] = useState(false);
  const [currentTourStep, setCurrentTourStep] = useState(0);
  
  const profileData = location.state?.profileData || null;
  const userFirstName = profileData?.profile?.firstName || '';
  const userRole = profileData?.primaryRole?.name || '';
  
  // Define next steps based on user role
  const getNextSteps = () => {
    const roleId = profileData?.primaryRole?.id;
    
    switch (roleId) {
      case 'bd':
        return [
          { title: 'Upload your first SOW', icon: FileText, description: 'Get matched with teaming partners' },
          { title: 'Complete capability statement', icon: BarChart3, description: 'Enhance your company profile' },
          { title: 'Explore partner network', icon: Users, description: 'Find complementary contractors' },
        ];
      case 'hr':
        return [
          { title: 'Upload job description', icon: FileText, description: 'Find perfect-fit candidates' },
          { title: 'Browse talent pool', icon: Users, description: 'Explore available candidates' },
          { title: 'Set up staffing alerts', icon: BarChart3, description: 'Stay informed about talent availability' },
        ];
      case 'program':
        return [
          { title: 'Create a project', icon: FileText, description: 'Start tracking your contract execution' },
          { title: 'Assign team members', icon: Users, description: 'Build your project team' },
          { title: 'Set up reporting', icon: BarChart3, description: 'Configure dashboards and alerts' },
        ];
      case 'leadership':
        return [
          { title: 'Review company dashboard', icon: BarChart3, description: 'Get a high-level view of performance' },
          { title: 'Explore opportunity pipeline', icon: FileText, description: 'See upcoming business opportunities' },
          { title: 'Manage team access', icon: Users, description: 'Set permissions for your team' },
        ];
      default:
        return [
          { title: 'Complete your profile', icon: FileText, description: 'Add more details to enhance matching' },
          { title: 'Explore the dashboard', icon: BarChart3, description: 'See what MERIT can do for you' },
          { title: 'Invite team members', icon: Users, description: 'Bring your colleagues onboard' },
        ];
    }
  };
  
  const nextSteps = getNextSteps();
  
  const tourSteps = [
    { 
      title: 'Welcome to MERIT',
      content: 'Your personalized dashboard is now ready! Let\'s take a quick tour to help you get started.',
      target: '#welcome-card'
    },
    { 
      title: 'Quick Actions',
      content: 'These are the most important actions for your role as ' + userRole + '.',
      target: '#quick-actions'
    },
    { 
      title: 'Personalized Dashboard',
      content: 'Your dashboard is customized for your role. Explore the features designed specifically for you.',
      target: '#dashboard-preview'
    }
  ];
  
  const handleStartTour = () => {
    setShowTour(true);
    setCurrentTourStep(0);
  };
  
  const handleNextTourStep = () => {
    if (currentTourStep < tourSteps.length - 1) {
      setCurrentTourStep(currentTourStep + 1);
    } else {
      setShowTour(false);
    }
  };
  
  const handleSkipTour = () => {
    setShowTour(false);
  };
  
  const handleGoToDashboard = () => {
    // In a real app, this would navigate to the actual dashboard
    navigate('/');
  };
  
  if (!profileData) {
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
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-10"
            >
              <h1 className="text-4xl font-bold text-secondary mb-2">
                Welcome to MERIT, {userFirstName}!
              </h1>
              <p className="text-secondary/70 text-xl max-w-2xl mx-auto">
                Your personalized {userRole} experience is ready
              </p>
            </motion.div>
            
            <motion.div 
              id="welcome-card"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8"
            >
              <Card className="border-none card-shadow overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-primary/80 to-primary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-xl font-medium">Your MERIT Dashboard</h2>
                  </div>
                </div>
                <CardContent className="pt-6 pb-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium text-secondary mb-2">Your account is ready!</h3>
                    <p className="text-secondary/70">
                      We've set up your personalized MERIT experience based on your role as a {userRole}.
                    </p>
                  </div>
                  
                  <div id="quick-actions" className="mb-8">
                    <h3 className="font-medium text-secondary mb-4 text-lg">Here's what you can do next:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {nextSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                          className="border border-gray-200 rounded-lg p-4 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                            <step.icon className="h-5 w-5" />
                          </div>
                          <h4 className="font-medium text-secondary mb-1">{step.title}</h4>
                          <p className="text-sm text-secondary/70">{step.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div id="dashboard-preview" className="mb-8 p-4 bg-gray-50 border border-gray-100 rounded-lg">
                    <h3 className="font-medium text-secondary mb-2">Your {userRole} Dashboard Preview</h3>
                    <p className="text-sm text-secondary/70 mb-4">
                      We've customized your experience based on your role and company information.
                    </p>
                    <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
                      <p className="text-secondary/50">Dashboard preview will be available when you complete onboarding</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="outline"
                      onClick={handleStartTour}
                    >
                      Take a guided tour
                    </Button>
                    
                    <Button 
                      onClick={handleGoToDashboard}
                      className="bg-primary hover:bg-primary/90 text-white flex items-center"
                    >
                      Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Tour Overlay */}
      <AnimatePresence>
        {showTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-white rounded-lg max-w-md w-full mx-4"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-lg text-secondary">
                    {tourSteps[currentTourStep].title}
                  </h3>
                  <button 
                    onClick={handleSkipTour}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-secondary/70 mb-6">
                  {tourSteps[currentTourStep].content}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {tourSteps.map((_, index) => (
                      <div 
                        key={index} 
                        className={`w-2 h-2 rounded-full ${currentTourStep === index ? 'bg-primary' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleSkipTour}
                    >
                      Skip
                    </Button>
                    <Button 
                      size="sm"
                      onClick={handleNextTourStep}
                    >
                      {currentTourStep < tourSteps.length - 1 ? 'Next' : 'Finish'}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Welcome;
