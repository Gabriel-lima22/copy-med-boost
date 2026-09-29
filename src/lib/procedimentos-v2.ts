import laserCo2 from "@/assets/v2/laser-co2-rosto.webp";
import harmonizacao from "@/assets/v2/proc-harmonizacao.webp";
import endolaser from "@/assets/v2/proc-endolaser-card.webp";
import miniLipo from "@/assets/v2/proc-minilipo.webp";
import blefaro from "@/assets/v2/proc-blefaro.webp";
import capilar from "@/assets/v2/proc-capilar-card.webp";
import gluteo from "@/assets/v2/proc-gluteo.webp";

/**
 * Procedimentos do design novo, na ordem da grade da home.
 * A URL de cada um e /procedimentos/<slug>.
 */
export interface ProcedureCard {
  slug: string;
  name: string;
  short: string;
  img: string;
}

export const PROCEDURE_CARDS: ProcedureCard[] = [
  { slug: "laser-co2-fracionado", name: "Laser CO2 Fracionado", short: "Manchas, cicatrizes de acne e flacidez", img: laserCo2 },
  { slug: "harmonizacao-facial", name: "Harmonização Facial", short: "Equilíbrio e proporção para o rosto", img: harmonizacao },
  { slug: "endolaser", name: "Endolaser", short: "Laser sob a pele para flacidez", img: endolaser },
  { slug: "mini-lipo-localizada", name: "Mini Lipo Localizada", short: "Microcânulas e recuperação rápida", img: miniLipo },
  { slug: "blefaroplastia", name: "Blefaroplastia", short: "Rejuvenescimento do olhar", img: blefaro },
  { slug: "tratamento-capilar", name: "Tratamento Capilar", short: "Combate à queda e fortalecimento", img: capilar },
  { slug: "modelacao-glutea", name: "Modelação Glútea", short: "Contorno e firmeza", img: gluteo },
];

export const procedurePath = (slug: string) => `/procedimentos/${slug}`;
