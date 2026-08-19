import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Envia um page view ao GA4 a cada troca de rota.
 *
 * O primeiro carregamento já é contado pelo `gtag('config', ...)` do
 * `index.html`, então a primeira renderização é ignorada aqui para não
 * duplicar. Renderiza dentro do BrowserRouter e não desenha nada.
 */
const AnalyticsTracker = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Espera um frame para o Helmet já ter trocado o <title> da nova página.
    const frame = requestAnimationFrame(() =>
      trackPageView(location.pathname + location.search)
    );
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;
