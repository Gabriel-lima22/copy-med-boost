import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * O SPA nao volta ao topo sozinho ao trocar de pagina. Com ancora (ex.: /#sobre)
 * quem rola e a propria pagina de destino.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};
