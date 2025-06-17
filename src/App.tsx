
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterCandidate from "./pages/RegisterCandidate";
import RegisterEmployer from "./pages/RegisterEmployer";
import Login from "./pages/Login";
import CandidateDashboard from "./pages/CandidateDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import PostJob from "./pages/PostJob";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import JobDetail from "./pages/JobDetail";
import CompanyDetail from "./pages/CompanyDetail";
import About from "./pages/About";
import SavedJobs from "./pages/SavedJobs";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register-candidate" element={<RegisterCandidate />} />
          <Route path="/register-employer" element={<RegisterEmployer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/company/:id" element={<CompanyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
