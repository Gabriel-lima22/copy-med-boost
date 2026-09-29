import { useEffect, useState, type AnchorHTMLAttributes } from "react";
import { useLocation } from "react-router-dom";
import { trackWhatsAppClick } from "@/lib/analytics";
import { createWhatsAppLink, handleWhatsAppClick, whatsAppLinkWithoutAds } from "@/lib/whatsapp";

export const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.4.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
  </svg>
);

interface WhatsAppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Mensagem pre-preenchida; o codigo de origem do Ads e anexado sozinho. */
  message: string;
  /**
   * Bloco da pagina de onde vem o clique (hero, barra_fixa, cta_final...).
   * Vai no evento `whatsapp_click` do dataLayer para o GTM/GA4 saberem qual secao converte.
   */
  placement: string;
}

/**
 * Link de WhatsApp do design novo. Passa por handleWhatsAppClick, que refaz o
 * codigo de origem do Ads na hora do clique; a conversao do Ads, o lead do GA4
 * e a marcacao do Clarity saem do listener global do index.html. O evento
 * `whatsapp_click` do dataLayer so informa o GTM - nao dispara conversao.
 */
export const WhatsAppLink = ({ message, placement, children, ...rest }: WhatsAppLinkProps) => {
  const { pathname } = useLocation();
  // O HTML do build sai sem o codigo do Ads (ele so existe no navegador). O
  // primeiro render precisa bater com esse HTML; o codigo entra logo depois.
  const [href, setHref] = useState(() => whatsAppLinkWithoutAds(message));
  useEffect(() => setHref(createWhatsAppLink(message)), [message]);
  const procedure = pathname.match(/^\/procedimentos\/([^/]+)/)?.[1];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackWhatsAppClick(placement, procedure);
        handleWhatsAppClick(e, href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
};
