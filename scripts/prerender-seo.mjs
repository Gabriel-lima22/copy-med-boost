// Grava o <head> de cada rota dentro do HTML servido, no fim do build.
//
// O site e um SPA: sem isto, toda URL entrega o HTML da home e so vira a
// pagina certa depois que o React roda. O Googlebot ate executa JavaScript,
// mas numa segunda fila; os robos de WhatsApp, Instagram e Facebook nao
// executam nada - e sao eles que montam a previa de todo link compartilhado.
//
// Fonte dos textos: src/lib/seo-routes.ts (a mesma que o <SeoHead> usa).
// Saida: dist/<slug>.html por rota, servido pelo nginx via try_files $uri.html.
import { build } from "esbuild";
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const tmp = join(dist, ".seo-routes.mjs");

// seo-routes.ts e TypeScript e usa o alias "@/": compila num modulo temporario.
await build({
  entryPoints: [join(root, "src", "lib", "seo-routes.ts")],
  outfile: tmp,
  bundle: true,
  format: "esm",
  platform: "node",
  logLevel: "warning",
  alias: { "@": join(root, "src") },
});

const { SEO_ROUTES, canonicalFor, ogImageFor, SITE_URL } = await import(`file://${tmp}?t=${Date.now()}`);
await rm(tmp);

const template = await readFile(join(dist, "index.html"), "utf8");

// Tira do molde as tags que passam a ser escritas por rota. O que sobra
// (fontes, analytics, icones) e igual em todas as paginas.
const stripped = template
  .replace(/[ \t]*<title>[\s\S]*?<\/title>\n?/g, "")
  .replace(/[ \t]*<meta\s+name="description"[\s\S]*?\/>\n?/g, "")
  .replace(/[ \t]*<meta\s+name="robots"[\s\S]*?\/>\n?/g, "")
  .replace(/[ \t]*<meta\s+property="og:[\s\S]*?\/>\n?/g, "")
  .replace(/[ \t]*<meta\s+name="twitter:[\s\S]*?\/>\n?/g, "")
  .replace(/[ \t]*<link\s+rel="canonical"[\s\S]*?\/>\n?/g, "");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// data-rh e a marca do react-helmet-async: com ela, ao hidratar, o Helmet
// assume estas tags em vez de duplicar cada uma.
const meta = (attr, name, content) => `    <meta ${attr}="${name}" content="${esc(content)}" data-rh="true" />`;

const headFor = (route) => {
  const canonical = canonicalFor(route.path);
  const image = ogImageFor(route.ogImage);
  const ogTitle = route.ogTitle ?? route.title;
  const ogDescription = route.ogDescription ?? route.description;

  const tags = [
    `    <title data-rh="true">${esc(route.title)}</title>`,
    meta("name", "description", route.description),
    meta("name", "robots", route.noindex ? "noindex, follow" : "index, follow"),
    `    <link rel="canonical" href="${canonical}" data-rh="true" />`,
    meta("property", "og:site_name", "Clínica Lacerda"),
    meta("property", "og:title", ogTitle),
    meta("property", "og:description", ogDescription),
    meta("property", "og:type", "website"),
    meta("property", "og:locale", "pt_BR"),
    meta("property", "og:url", canonical),
    meta("property", "og:image", image),
    meta("property", "og:image:width", "1200"),
    meta("property", "og:image:height", "630"),
    meta("property", "og:image:alt", ogTitle),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", ogTitle),
    meta("name", "twitter:description", ogDescription),
    meta("name", "twitter:image", image),
    `    <link rel="alternate" href="${canonical}" hrefLang="pt-BR" data-rh="true" />`,
  ];

  for (const schema of route.jsonLd ?? []) {
    tags.push(
      `    <script type="application/ld+json" data-rh="true">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`,
    );
  }

  return tags.join("\n");
};

for (const route of SEO_ROUTES) {
  const html = stripped.replace("  </head>", `${headFor(route)}\n  </head>`);
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  await writeFile(join(dist, file), html, "utf8");
  console.log(`${file.padEnd(32)} ${route.title.slice(0, 58)}`);
}

console.log(`\n${SEO_ROUTES.length} rotas com <head> proprio no HTML servido (${SITE_URL})`);
