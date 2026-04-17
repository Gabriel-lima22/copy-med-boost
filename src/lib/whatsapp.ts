export const WHATSAPP_NUMBER = "5594992693532";

export const createWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
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
  "epilacao-laser": "Oi, vim pelo Google e tenho interesse em Epilação a Laser.",
  "skincare-manchas": "Oi, vim pelo Google e tenho interesse em Tratamento de Manchas e Skincare.",
  "mini-lipo-localizada": "Oi, vim pelo Google e tenho interesse em Mini Lipo Localizada.",
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
  "/epilacao-laser": "Oi, vim pelo Google e tenho interesse em Epilação a Laser.",
  "/skincare-manchas": "Oi, vim pelo Google e tenho interesse em Tratamento de Manchas e Skincare.",
  "/mini-lipo-localizada": "Oi, vim pelo Google e tenho interesse em Mini Lipo Localizada.",
  "/contato": "Oi, vim pelo site da Clínica Lacerda e gostaria de agendar uma avaliação.",
  "/sobre": "Oi, vim pelo site da Clínica Lacerda e gostaria de agendar uma avaliação.",
};

export const getWhatsAppLinkForRoute = (pathname: string) => {
  const message = ROUTE_WHATSAPP_MESSAGES[pathname] || ROUTE_WHATSAPP_MESSAGES["/"];
  return createWhatsAppLink(message);
};
