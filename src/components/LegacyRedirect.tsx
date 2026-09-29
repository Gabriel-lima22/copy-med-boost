import { Navigate, useLocation } from "react-router-dom";
import { withQuery } from "@/lib/legacy-redirects";

/**
 * Redireciona uma URL antiga mantendo a query: gclid e utm_* de anuncio que
 * ainda aponte para o endereco antigo precisam chegar na pagina nova, senao a
 * mensagem do WhatsApp sai sem o codigo de origem.
 */
export const LegacyRedirect = ({ to }: { to: string }) => {
  const { search } = useLocation();
  return <Navigate to={withQuery(to, search)} replace />;
};
