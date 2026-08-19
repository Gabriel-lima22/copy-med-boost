import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import LaserCO2 from "./pages/LaserCO2";
import HarmonizacaoFacial from "./pages/HarmonizacaoFacial";
import PreenchimentoLabial from "./pages/PreenchimentoLabial";
import Bioestimuladores from "./pages/Bioestimuladores";
import TratamentoCapilar from "./pages/TratamentoCapilar";
import EpilacaoLaser from "./pages/EpilacaoLaser";
import SkincareManchas from "./pages/SkincareManchas";
import MiniLipo from "./pages/MiniLipo";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import NotFound from "./pages/NotFound";
import AnalyticsTracker from "./components/AnalyticsTracker";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/harmonizacao-facial" element={<HarmonizacaoFacial />} />
            <Route path="/preenchimento-labial" element={<PreenchimentoLabial />} />
            <Route path="/bioestimuladores-colageno" element={<Bioestimuladores />} />
            <Route path="/laser-co2-fracionado" element={<LaserCO2 />} />
            <Route path="/tratamento-capilar" element={<TratamentoCapilar />} />
            <Route path="/epilacao-laser" element={<EpilacaoLaser />} />
            <Route path="/skincare-manchas" element={<SkincareManchas />} />
            <Route path="/mini-lipo-localizada" element={<MiniLipo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            {/* Legacy redirects */}
            <Route path="/toxina-botulinica" element={<Navigate to="/harmonizacao-facial" replace />} />
            <Route path="/toxina-botulinica-botox" element={<Navigate to="/harmonizacao-facial" replace />} />
            <Route path="/botox" element={<Navigate to="/harmonizacao-facial" replace />} />
            <Route path="/laser-co2" element={<LaserCO2 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
