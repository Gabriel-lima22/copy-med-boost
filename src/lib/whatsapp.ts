export const WHATSAPP_NUMBER = "5594992693532";

/**
 * Numero de atendimento da clinica — o mesmo que aparece no rodape, no bloco de
 * Localizacao da home e no `telephone` do businessSchema.
 *
 * Atencao: e diferente do WHATSAPP_NUMBER acima, que e o que todos os demais
 * CTAs do site usam. A divergencia e anterior a esta pagina e esta anotada em
 * /root/cutover/ANALYTICS.md — enquanto nao for resolvida, so a rota
 * /endolaser aponta para ca.
 */
export const WHATSAPP_NUMBER_CLINICA = "5594991521617";

export const createWhatsAppLink = (
  message: string,
  number: string = WHATSAPP_NUMBER
) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
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
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(whatsappLink);
  } else {
    window.open(whatsappLink, '_blank');
  }
};

export const PROCEDURE_WHATSAPP_MESSAGES: Record<string, string> = {
  "harmonizacao-facial": "Oi, vim pelo Google e tenho interesse em Harmonização Facial.",
  "preenchimento-labial": "Oi, vim pelo Google e tenho interesse em Preenchimento Labial.",
  "bioestimuladores-colageno": "Oi, vim pelo Google e tenho interesse em Bioestimuladores de Colágeno.",
  "laser-co2-fracionado": "Oi, vim pelo Google e tenho interesse em Laser CO2 Fracionado.",
  "tratamento-capilar": "Oi, vim pelo Google e tenho interesse em Tratamento Capilar.",
  "skincare-manchas": "Oi, vim pelo Google e tenho interesse em Tratamento de Manchas e Skincare.",
  "mini-lipo-localizada": "Oi, vim pelo Google e tenho interesse em Mini Lipo Localizada.",
  endolaser: "Oi, vim pelo Google e gostaria de agendar uma avaliação para Endolaser.",
  default: "Oi, vim pelo site da Clínica Lacerda e gostaria de saber mais sobre os tratamentos disponíveis.",
};

/** Map route paths to WhatsApp messages */
export const ROUTE_WHATSAPP_MESSAGES: Record<string, string> = {
  "/": "Oi, vim pelo site da Clínica Lacerda e gostaria de saber mais sobre os tratamentos disponíveis.",
  "/harmonizacao-facial": "Oi, vim pelo Google e tenho interesse em Harmonização Facial.",
  "/preenchimento-labial": "Oi, vim pelo Google e tenho interesse em Preenchimento Labial.",
  "/bioestimuladores-colageno": "Oi, vim pelo Google e tenho interesse em Bioestimuladores de Colágeno.",
  "/laser-co2-fracionado": "Oi, vim pelo Google e tenho interesse em Laser CO2 Fracionado.",
  "/tratamento-capilar": "Oi, vim pelo Google e tenho interesse em Tratamento Capilar.",
  "/skincare-manchas": "Oi, vim pelo Google e tenho interesse em Tratamento de Manchas e Skincare.",
  "/mini-lipo-localizada": "Oi, vim pelo Google e tenho interesse em Mini Lipo Localizada.",
  "/endolaser": "Oi, vim pelo Google e gostaria de agendar uma avaliação para Endolaser.",
  "/contato": "Oi, vim pelo site da Clínica Lacerda e gostaria de agendar uma avaliação.",
  "/sobre": "Oi, vim pelo site da Clínica Lacerda e gostaria de agendar uma avaliação.",
};

/** Rotas que atendem pelo numero da clinica em vez do WHATSAPP_NUMBER padrao. */
const ROUTES_ON_CLINICA_NUMBER = new Set(["/endolaser"]);

export const getWhatsAppLinkForRoute = (pathname: string) => {
  const message = ROUTE_WHATSAPP_MESSAGES[pathname] || ROUTE_WHATSAPP_MESSAGES["/"];
  const number = ROUTES_ON_CLINICA_NUMBER.has(pathname)
    ? WHATSAPP_NUMBER_CLINICA
    : WHATSAPP_NUMBER;
  return createWhatsAppLink(message, number);
};
