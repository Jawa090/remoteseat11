import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ExtendTeam from "./pages/ExtendTeam";
import ProjectsDone from "./pages/ProjectsDone";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import ConstructionEstimator from "./pages/ConstructionEstimator";
import CADDrafter from "./pages/CADDrafter";
import OutsourceConstruction from "./pages/OutsourceConstruction";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/outsource-architecture-construction-staffing/" element={<ExtendTeam />} />
          <Route path="/outsource-3d-architectural-rendering-bim-cad/" element={<ProjectsDone />} />
          <Route path="/hire-offshore-construction-cost-estimators/" element={<ConstructionEstimator />} />
          <Route path="/hire-offshore-cad-drafters/" element={<CADDrafter />} />
          <Route path="/outsource-construction-services/" element={<OutsourceConstruction />} />
          <Route path="/contact-us/" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/blogs/:slug/" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
