import { Helmet } from "react-helmet-async";
import { canonicalFor, getSeoRoute, ogImageFor, SITE_URL } from "@/lib/seo-routes";

interface SeoHeadProps {
  /** Caminho da rota, como em SEO_ROUTES ("/", "/sobre", "/harmonizacao-facial") */
  path: string;
}

/**
 * Escreve o <head> da rota a partir de SEO_ROUTES.
 *
 * As mesmas tags ja saem prontas no HTML do build (scripts/prerender-seo.mjs);
 * este componente cuida das trocas de rota dentro do SPA, quando nao ha
 * recarregamento de pagina.
 */
export const SeoHead = ({ path }: SeoHeadProps) => {
  const route = getSeoRoute(path);
  if (!route) return null;

  const canonical = canonicalFor(route.path);
  const image = ogImageFor(route.ogImage);

  return (
    <Helmet>
      <title>{route.title}</title>
      <meta name="description" content={route.description} />
      <meta name="robots" content={route.noindex ? "noindex, follow" : "index, follow"} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content="Clínica Lacerda" />
      <meta property="og:title" content={route.ogTitle ?? route.title} />
      <meta property="og:description" content={route.ogDescription ?? route.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={route.ogTitle ?? route.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={route.ogTitle ?? route.title} />
      <meta name="twitter:description" content={route.ogDescription ?? route.description} />
      <meta name="twitter:image" content={image} />
      <link rel="alternate" href={`${SITE_URL}${route.path === "/" ? "" : route.path}`} hrefLang="pt-BR" />

      {(route.jsonLd ?? []).map((schema, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
