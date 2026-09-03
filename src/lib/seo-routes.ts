import { procedures } from "@/lib/procedures-data";
import { ENDOLASER_FAQ } from "@/lib/endolaser-faq";

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
  address: { "@type": "PostalAddress", addressLocality: "Marabá", addressRegion: "PA", addressCountry: "BR" },
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
    title: "Clínica Lacerda | Dra. Lorena Lacerda - Medicina Estética em Marabá",
    description:
      "Clínica Lacerda — Medicina Estética em Marabá/PA com Dra. Lorena Lacerda (CRM 15626). Harmonização facial, preenchimento, bioestimuladores, laser CO2 e mais. Agende sua avaliação.",
    ogTitle: "Clínica Lacerda | Medicina Estética em Marabá",
    ogDescription: "Medicina Estética com olhar humanizado. Dra. Lorena Lacerda — CRM 15626.",
    ogImage: "default",
    jsonLd: [businessSchema],
  },
  {
    path: "/mini-lipo-localizada",
    title: "Mini Lipo Localizada em Marabá - Clínica Lacerda | Dra. Lorena Lacerda",
    description:
      "Mini lipoaspiração localizada com microcânulas em Marabá/PA. Recuperação rápida, resultado definitivo. Dra. Lorena Lacerda — CRM 15626.",
    ogTitle: "Mini Lipo Localizada em Marabá - Clínica Lacerda",
    ogDescription: "Mini lipoaspiração com microcânulas. Recuperação rápida e resultado definitivo.",
    ogImage: "mini-lipo-localizada",
  },
  {
    path: "/endolaser",
    title: "Endolaser em Marabá - Clínica Lacerda | Dra. Lorena Lacerda",
    description:
      "Endolaser em Marabá/PA — laser aplicado sob a pele, indicado para avaliação de flacidez facial e corporal. Dra. Lorena Lacerda, CRM-PA 15626. Agende sua avaliação.",
    ogTitle: "Endolaser em Marabá - Clínica Lacerda",
    ogDescription:
      "Laser endodérmico aplicado sob a pele, indicado para avaliação de flacidez facial e corporal.",
    ogImage: "endolaser",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name: "Endolaser",
        alternateName: ["Laser endodérmico", "Endolifting"],
        description:
          "Técnica em que uma fibra óptica fina é introduzida sob a pele por uma microperfuração, entregando energia de laser na camada subdérmica. O estímulo térmico controlado pode auxiliar na retração do colágeno existente e no estímulo à produção de colágeno novo.",
        url: `${SITE_URL}/endolaser`,
        image: `${SITE_URL}/og/endolaser.jpg`,
        procedureType: "https://schema.org/PercutaneousProcedure",
        bodyLocation: ["Face", "Região submentoniana", "Pescoço", "Colo", "Braços", "Abdômen", "Coxas"],
        howPerformed:
          "Realizado em ambiente ambulatorial, com anestesia local. Uma fibra óptica é introduzida sob a pele através de uma microperfuração e a energia do laser é aplicada na camada subdérmica.",
        preparation:
          "Avaliação médica prévia com histórico de saúde e exame da área. Quando indicado, são solicitados exames e orientados ajustes prévios, como a suspensão de determinadas medicações.",
        followup:
          "Consultas de retorno para acompanhamento da evolução. A resposta é progressiva e varia conforme as características individuais de cada paciente.",
        relevantSpecialty: "https://schema.org/Dermatology",
        provider: {
          "@type": "MedicalBusiness",
          name: "Clínica Lacerda",
          url: SITE_URL,
          address: { "@type": "PostalAddress", addressLocality: "Marabá", addressRegion: "PA", addressCountry: "BR" },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Endolaser em Marabá",
        description:
          "Página informativa sobre o Endolaser na Clínica Lacerda, em Marabá/PA.",
        url: `${SITE_URL}/endolaser`,
        inLanguage: "pt-BR",
        // TODO: acrescentar `lastReviewed` e `reviewedBy` (Physician, Dra. Lorena
        // Lacerda, CRM-PA 15626) SOMENTE depois que a medica validar o conteudo.
        // Declarar revisao medica antes que ela aconteca seria falso.
        about: { "@type": "MedicalProcedure", name: "Endolaser" },
        publisher: { "@type": "MedicalBusiness", name: "Clínica Lacerda", url: SITE_URL },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: ENDOLASER_FAQ.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  },
  {
    path: "/sobre",
    title: "Sobre a Dra. Lorena Lacerda - Clínica Lacerda | Medicina Estética em Marabá",
    description:
      "Conheça a Dra. Lorena Lacerda, médica especialista em Medicina Estética em Marabá/PA. CRM 15626. Formada pela UNIRG.",
    ogTitle: "Dra. Lorena Lacerda - Medicina Estética em Marabá",
    ogDescription: "Médica especialista em Medicina Estética. CRM 15626.",
    ogImage: "sobre",
  },
  {
    path: "/contato",
    title: "Contato - Clínica Lacerda | Medicina Estética em Marabá",
    description:
      "Entre em contato com a Clínica Lacerda em Marabá/PA. Agende sua avaliação com a Dra. Lorena Lacerda — CRM 15626.",
    ogTitle: "Contato - Clínica Lacerda",
    ogDescription: "Agende sua avaliação em Marabá/PA.",
    ogImage: "contato",
  },
  {
    path: "/politica-privacidade",
    title: "Política de Privacidade - Clínica Lacerda",
    description:
      "Política de Privacidade da Clínica Lacerda — saiba como tratamos seus dados pessoais.",
    ogImage: "default",
  },
];

/** Fichas renderizadas por ProcedurePage: o head vem da propria ficha. */
const PROCEDURE_ROUTES: SeoRoute[] = Object.values(procedures).map((p) => ({
  path: `/${p.slug}`,
  title: p.metaTitle,
  description: p.metaDescription,
  ogTitle: `${p.title} - Clínica Lacerda`,
  ogDescription: p.subtitle,
  ogImage: p.slug,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: p.title,
      description: p.metaDescription,
      url: `${SITE_URL}/${p.slug}`,
      lastReviewed: "2026-08-21",
      reviewedBy: { "@type": "Physician", name: "Dra. Lorena Lacerda", credential: "CRM 15626" },
      about: { "@type": "MedicalProcedure", name: p.shortTitle, procedureType: "NoninvasiveProcedure" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
}));

export const SEO_ROUTES: SeoRoute[] = [...STATIC_ROUTES, ...PROCEDURE_ROUTES];

export const getSeoRoute = (path: string): SeoRoute | undefined => {
  const normalized = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
  return SEO_ROUTES.find((r) => r.path === normalized);
};

export const canonicalFor = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

export const ogImageFor = (name: string) => `${SITE_URL}/og/${name}.jpg`;
