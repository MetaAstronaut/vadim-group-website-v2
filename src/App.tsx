import { Toaster } from "@/components/archive/ui/toaster";
import { Toaster as Sonner } from "@/components/archive/ui/sonner";
import { TooltipProvider } from "@/components/archive/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/archive/Index";
import HomeRepairs from "./pages/archive/HomeRepairs";
import OtherServices from "./pages/archive/OtherServices";
import EmergencyServices from "./pages/archive/EmergencyServices";
import Contact from "./pages/archive/Contact";
import Blog from "./pages/archive/Blog";
import NotFound from "./pages/archive/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home-repairs" element={<HomeRepairs />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/emergency-services" element={<EmergencyServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
