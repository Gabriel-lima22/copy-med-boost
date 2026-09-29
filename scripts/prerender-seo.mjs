// Grava o <head> de cada rota dentro do HTML servido, no fim do build.
//
// O site e um SPA: sem isto, toda URL entrega o HTML da home e so vira a
// pagina certa depois que o React roda. O Googlebot ate executa JavaScript,
// mas numa segunda fila; os robos de WhatsApp, Instagram e Facebook nao
// executam nada - e sao eles que montam a previa de todo link compartilhado.
//
// Fonte dos textos: src/lib/seo-routes.ts (a mesma que o <SeoHead> usa).
// Saida: dist/<rota>.html por rota, servido pelo nginx via try_files $uri.html,
// mais uma pagina de redirecionamento por URL antiga (src/lib/legacy-redirects.ts).
import { build } from "esbuild";
import { readFile, writeFile, rm, mkdir, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
// OUT_DIR permite gerar um build de teste (ex.: dist-staging) sem tocar no dist/ de producao.
const dist = join(root, process.env.OUT_DIR || "dist");
const tmp = join(dist, ".seo-routes.mjs");

// seo-routes.ts e TypeScript e usa o alias "@/": compila num modulo temporario.
// As imagens importadas pelo conteudo das paginas nao interessam aqui (loader "empty").
await build({
  stdin: {
    contents: 'export * from "./src/lib/seo-routes.ts"; export * from "./src/lib/legacy-redirects.ts";',
    resolveDir: root,
    loader: "ts",
  },
  outfile: tmp,
  bundle: true,
  format: "esm",
  platform: "node",
  logLevel: "warning",
  alias: { "@": join(root, "src") },
  loader: { ".webp": "empty", ".png": "empty", ".jpg": "empty", ".svg": "empty" },
});

const { SEO_ROUTES, LEGACY_REDIRECTS, canonicalFor, ogImageFor, SITE_URL } = await import(
  `file://${tmp}?t=${Date.now()}`
);
await rm(tmp);

// Corpo das paginas: bundle SSR de src/entry-server.tsx (vite build --ssr, ver package.json).
const ssrDir = join(root, process.env.SSR_DIR || "dist-ssr");
const { render } = await import(`file://${join(ssrDir, "entry-server.js")}?t=${Date.now()}`);

const template = await readFile(join(dist, "index.html"), "utf8");

// Preload das duas fontes que aparecem na primeira tela (titulo e texto); as
// outras carregam sob demanda pelo @font-face.
const assets = await readdir(join(dist, "assets"));
const fontPreloads = [/^cormorant-garamond-latin-500-normal-.*\.woff2$/, /^montserrat-latin-400-normal-.*\.woff2$/]
  .map((re) => assets.find((f) => re.test(f)))
  .filter(Boolean)
  .map((f) => `    <link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join("\n");

// Tira do molde as tags que passam a ser escritas por rota. O que sobra
// (fontes, analytics, icones) e igual em todas as paginas.
const stripped = template
  .replace("  </head>", `${fontPreloads}\n  </head>`)
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

// Rotas aninhadas (/procedimentos/<slug>) viram dist/procedimentos/<slug>.html.
const writeRoute = async (path, html) => {
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  await mkdir(dirname(join(dist, file)), { recursive: true });
  await writeFile(join(dist, file), html, "utf8");
  return file;
};

for (const route of SEO_ROUTES) {
  // data-ssr-path: main.tsx so hidrata se a URL aberta for a mesma desta pagina.
  const body = `<div id="root" data-ssr-path="${route.path}">${render(route.path)}</div>`;
  const html = stripped
    .replace("  </head>", `${headFor(route)}\n  </head>`)
    .replace('<div id="root"></div>', body);
  const file = await writeRoute(route.path, html);
  console.log(`${file.padEnd(40)} ${route.title.slice(0, 50)}`);
}

// URLs do site antigo (src/lib/legacy-redirects.ts): pagina minima que
// redireciona na hora. O location.replace leva junto a query (gclid, utm_*) de
// anuncio antigo; o meta refresh cobre quem nao roda JavaScript, e o Google
// trata refresh imediato como redirecionamento permanente.
const redirectHtml = (to) => {
  const [path, hash] = to.split("#");
  const canonical = canonicalFor(path === "/" ? "/" : path);
  const js = `location.replace(${JSON.stringify(path)}+location.search+${JSON.stringify(hash ? `#${hash}` : "")})`;
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Clínica Lacerda</title>
    <link rel="canonical" href="${canonical}" />
    <script>${js}</script>
    <meta http-equiv="refresh" content="0; url=${esc(to)}" />
  </head>
  <body>
    <a href="${esc(to)}">Continuar para a página da Clínica Lacerda</a>
  </body>
</html>
`;
};

for (const [from, to] of LEGACY_REDIRECTS) {
  const file = await writeRoute(from, redirectHtml(to));
  console.log(`${file.padEnd(40)} -> ${to}`);
}

console.log(
  `\n${SEO_ROUTES.length} rotas com <head> proprio e ${LEGACY_REDIRECTS.length} redirecionamentos no HTML servido (${SITE_URL})`,
);
