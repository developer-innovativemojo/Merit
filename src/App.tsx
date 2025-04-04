import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TeamingDemo from "./pages/TeamingDemo";
import StaffingDemo from "./pages/StaffingDemo";
import TalentDemo from "./pages/TalentDemo";
import SignUp from "./pages/SignUp";
import CompanyDetails from "./pages/CompanyDetails";
import RoleSelection from "./pages/RoleSelection";
import ProfileInfo from "./pages/ProfileInfo";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import TeamingDashboard from "./pages/TeamingDashboard";
import HRStaffingDashboard from "./pages/HRStaffingDashboard";
import BDSettings from "./pages/BDSettings";

// HR Dashboard Section Pages
import ResumeDatabase from "./pages/hr/ResumeDatabase";
import Positions from "./pages/hr/Positions";
import Candidates from "./pages/hr/Candidates";
import TalentSearch from "./pages/hr/TalentSearch";
import ContractAnalysis from "./pages/hr/ContractAnalysis";
import Collaboration from "./pages/hr/Collaboration";
import HRAnalytics from "./pages/hr/Analytics";
import HRSettings from "./pages/hr/Settings";
import AIMatching from "./pages/hr/AIMatching";
import StaffingOpportunities from "./pages/hr/StaffingOpportunities";
import TalentPools from "./pages/hr/TalentPools";
import TasksPipeline from "./pages/hr/TasksPipeline";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/teaming" element={<TeamingDemo />} />
          <Route path="/teaming-dashboard" element={<TeamingDashboard />} />
          <Route path="/staffing" element={<StaffingDemo />} />
          <Route path="/talent" element={<TalentDemo />} />
          <Route path="/bd-settings" element={<BDSettings />} />
          
          {/* HR Dashboard Routes */}
          <Route path="/hr-staffing-dashboard" element={<HRStaffingDashboard />} />
          <Route path="/hr/ai-matching" element={<AIMatching />} />
          <Route path="/hr/resume-database" element={<ResumeDatabase />} />
          <Route path="/hr/staffing-opportunities" element={<StaffingOpportunities />} />
          <Route path="/hr/talent-pools" element={<TalentPools />} />
          <Route path="/hr/tasks-pipeline" element={<TasksPipeline />} />
          <Route path="/hr/collaboration" element={<Collaboration />} />
          <Route path="/hr/settings" element={<HRSettings />} />
          
          {/* Legacy routes - keeping for backward compatibility */}
          <Route path="/hr/positions" element={<Positions />} />
          <Route path="/hr/candidates" element={<Candidates />} />
          <Route path="/hr/talent-search" element={<TalentSearch />} />
          <Route path="/hr/contracts" element={<ContractAnalysis />} />
          <Route path="/hr/analytics" element={<HRAnalytics />} />
          
          {/* Signup Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/company-details" element={<CompanyDetails />} />
          <Route path="/signup/role" element={<RoleSelection />} />
          <Route path="/signup/profile" element={<ProfileInfo />} />
          <Route path="/signup/welcome" element={<Welcome />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
