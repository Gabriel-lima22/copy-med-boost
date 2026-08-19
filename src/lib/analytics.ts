/**
 * Camada de analytics do site.
 *
 * Os IDs ficam num único lugar: o bloco `window.__ANALYTICS__` do `index.html`.
 * Enquanto um ID estiver com o valor `SUBSTITUIR`, a ferramenta correspondente
 * não carrega e nada é enviado — o site funciona igual.
 */

export type AnalyticsConfig = {
  /** ID do GA4, no formato G-XXXXXXXXXX */
  ga4: string;
  /** ID do projeto no Microsoft Clarity */
  clarity: string;
  /** ID do Google Ads */
  ads: string;
  /** Conversão de clique no WhatsApp, no formato AW-000/label */
  adsWhatsAppLabel: string;
};

declare global {
  interface Window {
    __ANALYTICS__?: AnalyticsConfig;
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/** Um ID só vale se existir e já não for o placeholder. */
export const isConfigured = (id?: string) =>
  Boolean(id) && !id!.includes("SUBSTITUIR");

export const getAnalyticsConfig = () => window.__ANALYTICS__;

const ga4Id = () => {
  const id = getAnalyticsConfig()?.ga4;
  return isConfigured(id) ? id : undefined;
};

/**
 * Page view manual — o site é uma SPA, então a troca de rota não recarrega a
 * página e o GA4 não enxergaria nada além da primeira tela sem isto.
 */
export const trackPageView = (path: string, title = document.title) => {
  const id = ga4Id();
  if (!id || !window.gtag) return;

  window.gtag("event", "page_view", {
    send_to: id,
    page_path: path,
    page_location: window.location.origin + path,
    page_title: title,
  });
};

/** Evento avulso do GA4. */
export const trackEvent = (
  name: string,
  params: Record<string, unknown> = {}
) => {
  const id = ga4Id();
  if (!id || !window.gtag) return;

  window.gtag("event", name, { send_to: id, ...params });
};
