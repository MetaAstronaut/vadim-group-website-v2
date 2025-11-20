import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import * as React from "react";
import { useLocation } from "react-router-dom";

// Pages
import { HomePage } from "@/pages/HomePage";
import { HomeRepairsPage } from "@/pages/HomeRepairsPage";
import { SpecializedServicesPage } from "@/pages/SpecializedServicesPage";
import { MarineRVPage } from "@/pages/MarineRVPage";
import { CommercialPage } from "@/pages/CommercialPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { FAQPage } from "@/pages/FAQPage";
import { BlogPage } from "@/pages/BlogPage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { DesignSystemExample } from "@/components/DesignSystemExample";

const queryClient = new QueryClient();

// ScrollToTop component to ensure page starts at top on route change
const ScrollToTopWrapper = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <ScrollToTopWrapper />
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/home-repairs" element={<HomeRepairsPage />} />
              <Route path="/specialized-services" element={<SpecializedServicesPage />} />
              <Route path="/marine-rv" element={<MarineRVPage />} />
              <Route path="/commercial" element={<CommercialPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />

              {/* Dev Routes */}
              <Route path="/design-system" element={<DesignSystemExample />} />
              
              {/* 404 Catch-all */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
