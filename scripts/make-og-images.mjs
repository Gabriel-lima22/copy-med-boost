// Gera as imagens de compartilhamento (og:image) 1200x630 a partir das fotos
// do site, com um leve escurecimento na base e o monograma da clinica.
// Rode de novo sempre que trocar uma foto: npm run og
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "assets-src");
const out = join(root, "public", "og");

// rota -> foto de origem. Rotas sem entrada usam default.jpg.
const MAP = {
  default: "hero-home.jpg",
  "harmonizacao-facial": "proc-harmonizacao.jpg",
  "preenchimento-labial": "proc-labial.jpg",
  "bioestimuladores-colageno": "proc-bioestimuladores.jpg",
  "laser-co2-fracionado": "proc-laser.jpg",
  "tratamento-capilar": "proc-capilar.jpg",
  "skincare-manchas": "proc-skincare-hero.jpg",
  "mini-lipo-localizada": "minilipo-hero.jpg",
  endolaser: "hero-skin.jpg",
  sobre: "cta-bg.jpg",
  contato: "minilipo-consulta.jpg",
};

const W = 1200;
const H = 630;

// Scrim + monograma. So paths e gradiente: nao depende de fonte instalada.
const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0A0A0A" stop-opacity="0.05"/>
      <stop offset="55%" stop-color="#0A0A0A" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0A0A0A" stop-opacity="0.85"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#scrim)"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#CCA766"/>
  <g transform="translate(60, ${H - 186}) scale(1.18)">
    <rect width="100" height="100" rx="22" ry="22" fill="#0A0A0A" fill-opacity="0.92"
          stroke="#CCA766" stroke-opacity="0.55" stroke-width="1.5"/>
    <g fill="#CCA766">
      <rect x="39.2" y="25" width="8" height="45.5"/>
      <rect x="30" y="25" width="26.4" height="4.2"/>
      <rect x="30" y="70.5" width="42" height="5"/>
      <rect x="67" y="63.5" width="5" height="12"/>
    </g>
  </g>
</svg>`);

await mkdir(out, { recursive: true });

for (const [slug, file] of Object.entries(MAP)) {
  const dest = join(out, `${slug}.jpg`);
  await sharp(join(src, file))
    .resize(W, H, { fit: "cover", position: "attention" })
    .composite([{ input: overlay }])
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(dest);
  const { size } = await sharp(dest).metadata().then(async () => ({ size: (await import("node:fs")).statSync(dest).size }));
  console.log(`og/${slug}.jpg`.padEnd(38), `${(size / 1024).toFixed(0)} KB`);
}
