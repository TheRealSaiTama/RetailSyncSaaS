import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SolutionsPage from "./pages/SolutionsPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DemoPage from "./pages/DemoPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main navigation pages */}
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          
          {/* Solution pages */}
          <Route path="/solutions/retail-director" element={<NotFound />} />
          <Route path="/solutions/store-manager" element={<NotFound />} />
          <Route path="/solutions/supply-chain" element={<NotFound />} />
          <Route path="/solutions/financial" element={<NotFound />} />
          
          {/* Feature pages */}
          <Route path="/features/multi-agent" element={<NotFound />} />
          <Route path="/features/demand-forecasting" element={<NotFound />} />
          <Route path="/features/inventory" element={<NotFound />} />
          <Route path="/features/pricing" element={<NotFound />} />
          
          {/* Pricing pages */}
          <Route path="/pricing/essential" element={<NotFound />} />
          <Route path="/pricing/professional" element={<NotFound />} />
          <Route path="/pricing/enterprise" element={<NotFound />} />
          
          {/* Other pages */}
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
