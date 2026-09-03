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

/* ─────────────────────────────────────────────────────────────────────────────
 * Camada de eventos do GTM (GTM-NSJN7LJ3)
 *
 * O GTM ja esta no index.html. O que faltava era um vocabulario de eventos que
 * o painel do GTM pudesse usar como gatilho. `pushDataLayer` e esse vocabulario.
 *
 * IMPORTANTE — risco de conversao dobrada: o index.html tem um listener proprio
 * que dispara `gtag('event','conversion')` no label
 * AW-17789690534/1tfpCLyTl84bEKbF5KJC em QUALQUER clique num link wa.me.
 * Se uma tag do GTM disparada por `whatsapp_click` usar esse mesmo label, a
 * conversao conta duas vezes. Use um label novo no Ads, ou remova o listener
 * do index.html ao criar a tag no GTM — nunca os dois com o mesmo label.
 * ────────────────────────────────────────────────────────────────────────────*/

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Empurra um evento nomeado para o dataLayer do GTM. No-op se o GTM nao carregou. */
export const pushDataLayer = (
  event: string,
  params: Record<string, unknown> = {}
) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

/**
 * Clique em qualquer CTA de WhatsApp.
 * `location` diz de qual bloco da pagina o clique veio (hero, cta_final, ...),
 * o que permite medir no GTM/GA4 qual secao converte.
 */
export const trackWhatsAppClick = (location: string, procedure?: string) =>
  pushDataLayer("whatsapp_click", {
    click_location: location,
    procedure,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });

/** Envio validado do formulario de captacao de lead. */
export const trackLeadFormSubmit = (procedure: string) =>
  pushDataLayer("lead_form_submit", {
    form_name: "lead_whatsapp",
    procedure,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
