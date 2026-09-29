import { getAdsCode } from "@/lib/adsAttribution";

export const WHATSAPP_NUMBER = "5594992693532";

/** Codigo de origem do Ads que ja esteja no fim da mensagem, ex. " [G-123-laser]". */
const ADS_CODE_AT_END = /\s*\[G(?:-[a-z0-9-]*)?\]$/;

/**
 * Acrescenta ao fim da mensagem o codigo de origem do Google Ads (ver
 * adsAttribution.ts). Visita organica: devolve a mensagem intacta.
 * Idempotente — um codigo anterior no fim e trocado pelo atual.
 */
export const withAdsCode = (message: string) => {
  const code = getAdsCode();
  const base = message.replace(ADS_CODE_AT_END, "");
  return code ? `${base} ${code}` : base;
};

export const createWhatsAppLink = (
  message: string,
  number: string = WHATSAPP_NUMBER
) => {
  const encodedMessage = encodeURIComponent(withAdsCode(message));
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

/** Link sem o codigo de origem: e o que o HTML gerado no build consegue ter. */
export const whatsAppLinkWithoutAds = (message: string, number: string = WHATSAPP_NUMBER) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/** Refaz um link wa.me ja montado com o codigo de origem de agora. */
const refreshAdsCode = (whatsappLink: string) => {
  try {
    const url = new URL(whatsappLink);
    const text = url.searchParams.get("text");
    if (url.hostname !== "wa.me" || !text) return whatsappLink;
    return createWhatsAppLink(text, url.pathname.replace(/\//g, ""));
  } catch {
    return whatsappLink;
  }
};

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export const handleWhatsAppClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  whatsappLink: string
) => {
  e.preventDefault();
  // O href foi montado quando o componente carregou; o codigo vale o de agora.
  whatsappLink = refreshAdsCode(whatsappLink);
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(whatsappLink);
  } else {
    window.open(whatsappLink, '_blank');
  }
};

export const HOME_WHATSAPP_MESSAGE = "Oi, vim pelo site e tenho interesse nos procedimentos.";

/**
 * Nome do procedimento na mensagem das landing pages, exatamente como no
 * HANDOFF.md: e por esse texto que o atendimento identifica o interesse.
 */
const PROCEDURE_WHATSAPP_NAMES: Record<string, string> = {
  "laser-co2-fracionado": "CO2",
  endolaser: "Endolaser",
  blefaroplastia: "Blefaroplastia",
  "modelacao-glutea": "Remodelação Glútea",
  "harmonizacao-facial": "Harmonização Facial",
  "mini-lipo-localizada": "Mini Lipo",
  "tratamento-capilar": "Tratamento Capilar",
};

export const procedureWhatsAppMessage = (slug: string) =>
  `Oi, vim pelo Google e tenho interesse no ${PROCEDURE_WHATSAPP_NAMES[slug] ?? "procedimento"}.`;
