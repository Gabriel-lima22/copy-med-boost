export const WHATSAPP_NUMBER = "5594991521617";

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
  "harmonizacao-facial": "Olá! Vim pelo site e gostaria de saber mais sobre Harmonização Facial.",
  "toxina-botulinica-botox": "Olá! Vim pelo site e gostaria de saber mais sobre Botox.",
  "preenchimento-labial": "Olá! Vim pelo site e gostaria de saber mais sobre Preenchimento Labial.",
  "bioestimuladores-colageno": "Olá! Vim pelo site e gostaria de saber mais sobre Bioestimuladores.",
  "laser-co2-fracionado": "Olá! Vim pelo site e gostaria de saber mais sobre Laser CO2.",
  "tratamento-capilar": "Olá! Vim pelo site e gostaria de saber mais sobre Tratamento Capilar.",
  "epilacao-laser": "Olá! Vim pelo site e gostaria de saber mais sobre Epilação a Laser.",
  "skincare-manchas": "Olá! Vim pelo site e gostaria de saber mais sobre Tratamento de Skincare e Manchas.",
  "mini-lipo-localizada": "Olá! Vim pelo site e gostaria de saber mais sobre Mini Lipo Localizada.",
  default: "Olá! Vim pelo site da Clínica Lacerda e gostaria de agendar uma avaliação.",
};