export const WHATSAPP_NUMBER = "5594981735505";

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
