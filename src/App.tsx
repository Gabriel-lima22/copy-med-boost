import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Procedimento from "./pages/Procedimento";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { LEGACY_REDIRECTS } from "./lib/legacy-redirects";
import { LegacyRedirect } from "./components/LegacyRedirect";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/procedimentos/:slug" element={<Procedimento />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            {/* URLs do site antigo (ver src/lib/legacy-redirects.ts) */}
            {LEGACY_REDIRECTS.map(([from, to]) => (
              <Route key={from} path={from} element={<LegacyRedirect to={to} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
