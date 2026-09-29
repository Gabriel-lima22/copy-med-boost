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

/**
 * Rotas do site, sem o roteador: o navegador usa com BrowserRouter (App) e o
 * build usa com StaticRouter (entry-server.tsx) para gravar o HTML de cada pagina.
 */
export const AppRoutes = () => (
  <>
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
  </>
);

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
