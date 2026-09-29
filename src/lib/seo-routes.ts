import { PROCEDIMENTOS } from "@/lib/procedimentos-content";
import { procedurePath } from "@/lib/procedimentos-v2";

export const SITE_URL = "https://clinicalacerda.com";

export interface SeoRoute {
  /** Caminho da rota, sempre sem barra no fim ("/" e a home) */
  path: string;
  title: string;
  description: string;
  /** Titulo curto do cartao de compartilhamento; cai no title se ausente */
  ogTitle?: string;
  /** Descricao curta do cartao; cai na description se ausente */
  ogDescription?: string;
  /** Arquivo em public/og. Sem extensao. */
  ogImage: string;
  noindex?: boolean;
  /** Dados estruturados da rota, escritos junto do <head> no build */
  jsonLd?: Record<string, unknown>[];
}

/**
 * Dados da clinica no formato do Google. Alimenta a busca local e o bloco de
 * mapa, entao endereco, telefone e horario aqui precisam bater exatamente com
 * o Perfil da Empresa no Google.
 */
export const businessSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Clínica Lacerda",
  description: "Clínica de Medicina Estética em Marabá/PA — Dra. Lorena Lacerda",
  url: SITE_URL,
  image: `${SITE_URL}/og/default.jpg`,
  logo: `${SITE_URL}/icon-512x512.png`,
  telephone: "+5594991521617",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fl27, QD07, LT08 - Nova Marabá",
    addressLocality: "Marabá",
    addressRegion: "PA",
    postalCode: "68509-160",
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: "-5.346683", longitude: "-49.096493" },
  hasMap: "https://www.google.com/maps/search/?api=1&query=-5.346683,-49.096493",
  medicalSpecialty: "PlasticSurgery",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "12:00" },
  ],
  sameAs: [
    "https://www.instagram.com/dralorenalacerdaa",
    "https://www.doctoralia.com.br/lorena-lacerda-2/especialista-em-medicina-estetica/maraba",
  ],
};

/**
 * Fonte unica das tags de <head> do site.
 *
 * Serve dois consumidores:
 *   1. <SeoHead> nas paginas, que atualiza o head na navegacao do SPA;
 *   2. scripts/prerender-seo.mjs, que grava essas mesmas tags no HTML de cada
 *      rota no build - e o que os robos do Google, do WhatsApp e do Facebook
 *      leem antes de qualquer JavaScript rodar.
 *
 * Ao criar uma rota nova, adicione aqui: sem isso ela nasce com o head da home.
 */
const STATIC_ROUTES: SeoRoute[] = [
  {
    path: "/",
    title: "Clínica Lacerda — Medicina Estética em Marabá | Dra. Lorena Lacerda",
    description:
      "Clínica Lacerda — Medicina Estética em Marabá/PA com Dra. Lorena Lacerda (CRM-PA 15626). Laser CO2, endolaser, harmonização facial, blefaroplastia e mais. Agende sua avaliação.",
    ogTitle: "Clínica Lacerda | Medicina Estética em Marabá",
    ogDescription: "Medicina Estética com olhar humanizado. Dra. Lorena Lacerda — CRM 15626.",
    ogImage: "default",
    jsonLd: [businessSchema],
  },
  {
    path: "/politica-privacidade",
    title: "Política de Privacidade - Clínica Lacerda",
    description:
      "Política de Privacidade da Clínica Lacerda — saiba como tratamos seus dados pessoais.",
    ogImage: "default",
  },
];

/** Corta no ultimo espaco antes do limite, para a descricao nao sair truncada pelo Google. */
const clip = (text: string, max = 158) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:—-]+$/, "")}…`;
};

/**
 * Paginas de procedimento (src/pages/Procedimento.tsx), uma por slug de
 * PROCEDIMENTOS. O og:image de cada uma e public/og/<slug>.jpg (npm run images).
 *
 * `reviewedBy`/`lastReviewed`: texto revisado pela Dra. Lorena (confirmado pelo
 * Gabriel em 29/09/2026). Ao mudar conteudo clinico em procedimentos-content.ts,
 * so atualizar a data depois de nova revisao dela.
 */
const PROCEDURE_ROUTES: SeoRoute[] = Object.entries(PROCEDIMENTOS).map(([slug, p]) => {
  const path = procedurePath(slug);
  const url = `${SITE_URL}${path}`;
  const description = clip(`${p.subtitle} Avaliação com a Dra. Lorena Lacerda, em Marabá.`);
  return {
    path,
    title: `${p.name} em Marabá | Clínica Lacerda`,
    description,
    ogTitle: `${p.name} em Marabá - Clínica Lacerda`,
    ogImage: slug,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: `${p.name} em Marabá`,
        description,
        url,
        inLanguage: "pt-BR",
        lastReviewed: "2026-09-29",
        reviewedBy: { "@type": "Physician", name: "Dra. Lorena Lacerda", identifier: "CRM-PA 15626" },
        about: { "@type": "MedicalProcedure", name: p.name },
        publisher: { "@type": "MedicalBusiness", name: "Clínica Lacerda", url: SITE_URL },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
});

export const SEO_ROUTES: SeoRoute[] = [...STATIC_ROUTES, ...PROCEDURE_ROUTES];

export const getSeoRoute = (path: string): SeoRoute | undefined => {
  const normalized = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
  return SEO_ROUTES.find((r) => r.path === normalized);
};

export const canonicalFor = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

export const ogImageFor = (name: string) => `${SITE_URL}/og/${name}.jpg`;
