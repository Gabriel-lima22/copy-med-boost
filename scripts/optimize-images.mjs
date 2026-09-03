// Converte as fotos originais (assets-src/*.jpg) para WebP redimensionado em
// src/assets/, que e o que as paginas importam. Rode: npm run images
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "assets-src");
const out = join(root, "src", "assets");

// Largura maxima por uso. A primeira regra que casa com o nome vence.
const WIDTHS = [
  [/^(hero-|cta-bg|bg-)|-bg\./, 1920],  // fundos de tela cheia
  [/^dra-lorena\./, 1100],              // retrato em card 3/4
  [/^(proc-|area-|skincare-|minilipo-)/, 900], // cards e imagens de secao
];
const DEFAULT_WIDTH = 1200;

const widthFor = (name) => WIDTHS.find(([re]) => re.test(name))?.[1] ?? DEFAULT_WIDTH;

await mkdir(out, { recursive: true });
const files = (await readdir(src)).filter((f) => /\.jpe?g$/i.test(f));
let before = 0;
let after = 0;

for (const file of files.sort()) {
  const from = join(src, file);
  const to = join(out, basename(file).replace(/\.jpe?g$/i, ".webp"));
  const width = widthFor(file);
  const meta = await sharp(from).metadata();
  await sharp(from)
    .resize({ width: Math.min(width, meta.width), withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(to);
  const [a, b] = [(await stat(from)).size, (await stat(to)).size];
  before += a;
  after += b;
  console.log(
    basename(to).padEnd(30),
    `${String(meta.width).padStart(4)}px -> ${String(Math.min(width, meta.width)).padStart(4)}px`,
    `${(a / 1024).toFixed(0).padStart(5)} KB -> ${(b / 1024).toFixed(0).padStart(4)} KB`,
  );
}

console.log(
  `\n${files.length} imagens: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB ` +
    `(-${(100 - (after / before) * 100).toFixed(0)}%)`,
);
