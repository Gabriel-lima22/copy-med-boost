/**
 * URLs do site antigo -> destino no design novo.
 *
 * Fonte unica para os dois lados:
 *   - scripts/prerender-seo.mjs grava <from>.html com redirecionamento imediato
 *     (location.replace + meta refresh) e canonical para o destino. E o que o
 *     nginx serve (try_files $uri.html) e o que o Google le. Nao usamos 301 no
 *     nginx porque o CloudPanel reescreve o vhost.
 *   - App.tsx, para quem chega na URL antiga navegando dentro do SPA.
 * Os dois preservam a query (gclid, utm_*) de anuncio antigo.
 */
export const LEGACY_REDIRECTS: [from: string, to: string][] = [
  ["/laser-co2-fracionado", "/procedimentos/laser-co2-fracionado"],
  ["/laser-co2", "/procedimentos/laser-co2-fracionado"],
  ["/harmonizacao-facial", "/procedimentos/harmonizacao-facial"],
  ["/toxina-botulinica", "/procedimentos/harmonizacao-facial"],
  ["/toxina-botulinica-botox", "/procedimentos/harmonizacao-facial"],
  ["/botox", "/procedimentos/harmonizacao-facial"],
  ["/endolaser", "/procedimentos/endolaser"],
  ["/mini-lipo-localizada", "/procedimentos/mini-lipo-localizada"],
  ["/tratamento-capilar", "/procedimentos/tratamento-capilar"],
  // Procedimentos que sairam do site
  ["/preenchimento-labial", "/#procedimentos"],
  ["/bioestimuladores-colageno", "/#procedimentos"],
  ["/skincare-manchas", "/#procedimentos"],
  ["/epilacao-laser", "/"],
  // Viraram secoes da home
  ["/sobre", "/#sobre"],
  ["/contato", "/#contato"],
  // Nao e URL antiga: /procedimentos sozinho (usuario apagando o slug) leva a grade da home
  ["/procedimentos", "/#procedimentos"],
];

/** Destino com a query de origem; a ancora (#secao) fica no fim, onde precisa estar. */
export const withQuery = (to: string, search: string) => {
  const [path, hash] = to.split("#");
  return `${path}${search}${hash ? `#${hash}` : ""}`;
};
