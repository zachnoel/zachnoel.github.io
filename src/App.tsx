import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BodyArmorPage from "./pages/BodyArmorPage";
import NightvisionPage from "./pages/NightvisionPage";
import WeaponSitesPage from "./pages/WeaponSitesPage";
import LightingPage from "./pages/LightingPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/body-armor" element={<BodyArmorPage />} />
          <Route path="/nightvision" element={<NightvisionPage />} />
          <Route path="/weapon-sites" element={<WeaponSitesPage />} />
          <Route path="/lighting" element={<LightingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
