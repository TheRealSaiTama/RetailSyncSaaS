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
import MultiAgentLandingPage from "./pages/features/multi-agent";
import DemandForecastingPage from "./pages/features/demand-forecasting";
import InventoryOptimizationPage from "./pages/features/inventory";
import DynamicPricingPage from "./pages/features/pricing";

import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

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
          <Route path="/features/multi-agent" element={<MultiAgentLandingPage />} />
          <Route path="/features/demand-forecasting" element={<DemandForecastingPage />} />
          <Route path="/features/inventory" element={<InventoryOptimizationPage />} />
          <Route path="/features/pricing" element={<DynamicPricingPage />} />
          
          {/* Pricing pages */}
          <Route path="/pricing/essential" element={<NotFound />} />
          <Route path="/pricing/professional" element={<NotFound />} />
          <Route path="/pricing/enterprise" element={<NotFound />} />
          
          {/* Other pages */}
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
