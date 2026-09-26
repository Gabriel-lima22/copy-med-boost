/**
 * Origem do Google Ads para a mensagem do WhatsApp.
 *
 * O sufixo de URL final das campanhas manda para a landing page:
 *   utm_source=google&utm_medium=cpc&utm_campaign={campaignid}
 *   &utm_content={adgroupid}&utm_term={keyword}&matchtype={matchtype}
 * e a codificacao automatica do Ads acrescenta o gclid.
 *
 * Na primeira leitura guardamos isso em sessionStorage e num cookie de 30 dias
 * (`cl_ads`), para a origem sobreviver a navegacao entre paginas e a visitas de
 * volta. `getAdsCode()` devolve o codigo que vai no fim da mensagem, ex.:
 *   [G-23145678901-laser-co2-maraba]
 * O painel de atendimento le esse codigo e cruza o ID da campanha com a API do
 * Ads, por isso o ID vai inteiro, sem truncar.
 *
 * Visita organica (sem gclid e sem utm do Google): codigo vazio, mensagem igual
 * a de sempre. Visita com utm de outra origem (ex.: Instagram) apaga a origem
 * do Ads guardada, para nao atribuir ao Google um contato que veio de outro lugar.
 */

export type AdsAttribution = {
  /** ID da campanha ({campaignid}) */
  campaign: string;
  /** ID do grupo de anuncios ({adgroupid}) */
  adGroup: string;
  /** Palavra-chave ({keyword}) */
  keyword: string;
  /** Tipo de correspondencia ({matchtype}): e, p ou b */
  matchType: string;
  gclid: string;
};

const STORAGE_KEY = "cl_ads";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
/** Um ID de campanha do Ads e um int64: ate 19 digitos. */
const CAMPAIGN_MAX = 20;
const KEYWORD_MAX = 30;

/** Parametro ValueTrack que o Google nao substituiu chega literal, ex. "{keyword}". */
const clean = (value: string | null) =>
  value && !value.includes("{") ? value.trim().slice(0, 200) : "";

/** Sem acento, minusculo, so a-z0-9 e hifen, sem hifen repetido ou nas pontas. */
export const slug = (value: string, max: number) =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, max)
    .replace(/-+$/, "");

const readCookie = () => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${STORAGE_KEY}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

const writeCookie = (value: string, maxAge: number) => {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie =
    `${STORAGE_KEY}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax${secure}`;
};

const parse = (raw: string | null): AdsAttribution | null => {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw);
    return data && typeof data === "object" ? (data as AdsAttribution) : null;
  } catch {
    return null;
  }
};

const save = (data: AdsAttribution) => {
  const raw = JSON.stringify(data);
  try {
    sessionStorage.setItem(STORAGE_KEY, raw);
  } catch {
    /* navegador sem storage: o cookie basta */
  }
  try {
    writeCookie(raw, COOKIE_MAX_AGE);
  } catch {
    /* sem cookie: vale so para esta pagina */
  }
};

const clear = () => {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
    writeCookie("", 0);
  } catch {
    /* nada guardado */
  }
};

/** Le a URL atual; devolve a origem nova, `null` para "apagar" ou `undefined` para "manter". */
const fromUrl = (): AdsAttribution | null | undefined => {
  const params = new URLSearchParams(window.location.search);
  const gclid = clean(params.get("gclid") || params.get("gbraid") || params.get("wbraid"));
  const source = (params.get("utm_source") || "").toLowerCase();
  const medium = (params.get("utm_medium") || "").toLowerCase();
  const fromGoogleAds = Boolean(gclid) || (source === "google" && medium === "cpc");

  if (!fromGoogleAds) return source ? null : undefined;

  return {
    campaign: clean(params.get("utm_campaign")),
    adGroup: clean(params.get("utm_content")),
    keyword: clean(params.get("utm_term")),
    matchType: clean(params.get("matchtype")),
    gclid,
  };
};

let cached: AdsAttribution | null | undefined;

/** Origem do Ads desta visita, ou `null` se a visita nao veio do Ads. */
export const getAdsAttribution = (): AdsAttribution | null => {
  if (typeof window === "undefined") return null;
  if (cached !== undefined) return cached;

  const current = fromUrl();
  if (current) {
    save(current);
    cached = current;
  } else if (current === null) {
    clear();
    cached = null;
  } else {
    let stored: string | null = null;
    try {
      stored = sessionStorage.getItem(STORAGE_KEY);
    } catch {
      /* segue para o cookie */
    }
    cached = parse(stored ?? readCookie());
  }
  return cached;
};

/** Codigo curto para o fim da mensagem do WhatsApp; string vazia fora do Ads. */
export const getAdsCode = () => {
  const ads = getAdsAttribution();
  if (!ads) return "";
  const parts = ["G", slug(ads.campaign ?? "", CAMPAIGN_MAX), slug(ads.keyword ?? "", KEYWORD_MAX)];
  return `[${parts.filter(Boolean).join("-")}]`;
};
