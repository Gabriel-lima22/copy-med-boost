import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import { SeoHead } from "@/components/SeoHead";
import { SiteHeader } from "@/components/v2/SiteHeader";
import { SiteFooter } from "@/components/v2/SiteFooter";
import { WhatsAppBar } from "@/components/v2/WhatsAppBar";
import { WhatsAppIcon, WhatsAppLink } from "@/components/v2/WhatsAppLink";
import { PROCEDIMENTOS, type Procedimento as ProcedimentoData } from "@/lib/procedimentos-content";
import { PROCEDURE_CARDS, procedurePath } from "@/lib/procedimentos-v2";
import { procedureWhatsAppMessage } from "@/lib/whatsapp";
import retrato from "@/assets/v2/dra-lorena-retrato.webp";
import NotFound from "./NotFound";

// React 18 nao conhece fetchPriority e avisa no build; em minusculo vai direto para o HTML.
const HIGH_PRIORITY = { fetchpriority: "high" } as Record<string, string>;

const kicker = "text-[11px] font-semibold uppercase tracking-[.2em] text-cl-gold";
const h2 = "m-0 font-heading text-[clamp(30px,3.4vw,44px)] font-medium leading-[1.05]";
const section = "mx-auto max-w-[1200px] px-[clamp(20px,4vw,48px)] pt-[clamp(40px,6vw,80px)]";
/** Titulo a esquerda (5fr) e conteudo a direita (7fr) no desktop */
const split = "grid items-start gap-[clamp(16px,3vw,48px)] d:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]";
const btnPrimary =
  "flex items-center justify-center gap-2.5 rounded-full bg-cl-ink font-semibold text-cl-cream no-underline hover:bg-cl-ink-hover";

const Hero = ({ p, message }: { p: ProcedimentoData; message: string }) => (
  // Celular: titulo sobre a foto e o resto abaixo. Desktop: texto | foto.
  // O titulo e a foto dividem a mesma celula do grid no celular.
  <section className="grid d:mx-auto d:max-w-[1200px] d:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] d:gap-x-[clamp(32px,5vw,72px)] d:px-[clamp(20px,4vw,48px)] d:pt-[clamp(40px,6vw,72px)]">
    <div
      className="relative col-start-1 row-start-1 h-[var(--hero-h)] overflow-hidden bg-cl-sand d:col-start-2 d:row-span-2 d:h-[clamp(440px,46vw,600px)] d:self-center d:rounded-3xl"
      style={{ "--hero-h": `${p.heroH}px` } as CSSProperties}
    >
      <img
        src={p.img}
        alt={p.name}
        {...HIGH_PRIORITY}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: p.imgPos }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,249,245,0)_45%,rgba(251,249,245,.88)_74%,#FBF9F5_100%)] d:hidden" />
    </div>

    <div className="relative z-10 col-start-1 row-start-1 self-end px-6 pb-4 d:self-end d:p-0 d:pb-[18px]">
      <div className={`${kicker} mb-2.5 d:mb-[18px] d:text-xs`}>
        {p.kicker} · Marabá<span className="hidden d:inline">/PA</span>
      </div>
      <h1 className="m-0 text-balance font-heading text-[38px] font-medium leading-[1.05] d:text-[clamp(42px,4.6vw,62px)] d:leading-[1.02]">
        {p.title} {p.titleEm && <em className="text-cl-gold">{p.titleEm}</em>}
      </h1>
    </div>

    <div className="col-start-1 row-start-2 flex flex-col px-6 pt-2 d:gap-[18px] d:self-start d:p-0">
      <p className="m-0 text-[15px] font-medium leading-[1.55] d:max-w-[560px] d:text-[17px]">{p.subtitle}</p>
      {p.paragraph && (
        <p className="m-0 mt-3 text-sm leading-relaxed text-cl-text d:mt-0 d:max-w-[560px] d:text-[15px] d:leading-[1.65]">{p.paragraph}</p>
      )}
      <div className="mt-[18px] d:mt-1.5">
        <WhatsAppLink placement="hero" message={message} className={`${btnPrimary} h-[54px] text-[15px] d:inline-flex d:h-14 d:px-7`}>
          <WhatsAppIcon />
          Agendar avaliação
        </WhatsAppLink>
      </div>
      {p.equipLine && (
        <div className="mt-3 text-center text-[11.5px] leading-normal text-cl-muted d:mt-0 d:max-w-[560px] d:border-t d:border-cl-line d:pt-3 d:text-left d:text-xs">
          {p.equipLine}
        </div>
      )}
    </div>
  </section>
);

const ForWhom = ({ p }: { p: ProcedimentoData }) => (
  <section className={section}>
    <div className={`${kicker} mb-2`}>Para quem é</div>
    <h2 className={`${h2} mb-[clamp(16px,2vw,24px)]`}>Você se identifica com algum destes?</h2>
    <div className="grid gap-2 d:grid-cols-2">
      {p.forWhom.map((i) => (
        <div key={i.t} className="flex items-center justify-between gap-3 rounded-[14px] border border-cl-line bg-white px-4 py-3.5">
          <div className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-cl-gold-soft" />
            <div className="text-sm font-medium leading-[1.4]">{i.t}</div>
          </div>
          <span className="flex-none rounded-full border border-cl-line px-2 py-1 text-[10.5px] uppercase tracking-[.12em] text-cl-gold">
            {i.area}
          </span>
        </div>
      ))}
    </div>
    {p.forWhomNote && (
      <div className="mt-3.5 rounded-[14px] bg-cl-sand px-4 py-3.5 text-[13.5px] leading-[1.55] text-cl-text">
        <strong className="font-semibold text-cl-ink">Nota.</strong> {p.forWhomNote}
      </div>
    )}
  </section>
);

const Diff = ({ diff }: { diff: NonNullable<ProcedimentoData["diff"]> }) => (
  <section className={section}>
    <div className={split}>
      <div>
        <div className={`${kicker} mb-2`}>Diferencial técnico</div>
        <h2 className={h2}>{diff.title}</h2>
      </div>
      <p className="m-0 text-[15px] leading-[1.65] text-cl-text">{diff.text}</p>
    </div>
  </section>
);

const Equip = ({ equip }: { equip: NonNullable<ProcedimentoData["equip"]> }) => (
  <section className={section}>
    <div className={`${split} items-center rounded-[20px] border border-cl-line bg-white p-[clamp(18px,2.5vw,32px)]`}>
      <div className="flex justify-center">
        <img
          src={equip.img}
          alt={equip.title}
          loading="lazy"
          className="h-[clamp(170px,22vw,260px)] w-[clamp(170px,22vw,260px)] object-contain"
        />
      </div>
      <div>
        <div className={`${kicker} mb-2`}>Equipamento</div>
        <h2 className="m-0 font-heading text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.1]">{equip.title}</h2>
        <div className="mt-3.5 flex flex-col gap-2.5">
          {equip.items.map((it) => (
            <div key={it} className="flex gap-2.5 text-sm leading-normal text-cl-text">
              <span className="flex-none font-semibold text-cl-gold">—</span>
              <span>{it}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Steps = ({ steps }: { steps: NonNullable<ProcedimentoData["steps"]> }) => (
  <section className={section}>
    <div className={`${kicker} mb-2`}>O dia do procedimento</div>
    <h2 className={`${h2} mb-[clamp(8px,1.5vw,20px)]`}>Passo a passo</h2>
    <ol className="m-0 grid list-none gap-x-[clamp(16px,2.5vw,32px)] p-0 d:grid-cols-2">
      {steps.map((s, i) => (
        <li key={s.t} className="grid grid-cols-[40px_1fr] gap-3.5 border-t border-cl-line py-4">
          <div className="font-heading text-[28px] leading-none text-cl-gold">{String(i + 1).padStart(2, "0")}</div>
          <div>
            <div className="font-heading text-[21px] font-semibold leading-[1.1]">{s.t}</div>
            <div className="mt-[5px] text-[13.5px] leading-normal text-cl-text">{s.d}</div>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

const After = ({ after }: { after: string[] }) => (
  <section className="mt-[clamp(40px,6vw,80px)] bg-cl-sand py-[clamp(28px,4vw,56px)]">
    <div className={`${split} mx-auto max-w-[1200px] px-[clamp(20px,4vw,48px)]`}>
      <div>
        <div className={`${kicker} mb-2`}>Depois</div>
        <h2 className={h2}>Recuperação e resultado</h2>
      </div>
      <div className="flex flex-col gap-3">
        {after.map((a) => (
          <p key={a} className="m-0 text-[14.5px] leading-[1.65] text-cl-text">
            {a}
          </p>
        ))}
      </div>
    </div>
  </section>
);

const Who = ({ who }: { who: ProcedimentoData["who"] }) => (
  <section className={section}>
    <div className="grid items-center gap-[clamp(16px,2.5vw,32px)] rounded-[20px] border border-cl-line bg-white p-[clamp(18px,2.5vw,32px)] d:grid-cols-[220px_minmax(0,1fr)]">
      <img
        src={retrato}
        alt="Dra. Lorena Lacerda"
        loading="lazy"
        className="block aspect-[4/3] w-full rounded-2xl object-cover object-[50%_12%] d:aspect-square d:max-w-[220px]"
      />
      <div>
        <div className={`${kicker} mb-2`}>Quem aplica</div>
        <h2 className="m-0 font-heading text-[clamp(26px,3vw,38px)] font-medium leading-[1.05]">{who.title}</h2>
        <p className="m-0 mt-3 text-[14.5px] leading-relaxed text-cl-text">{who.text}</p>
        <div className="mt-3 text-xs tracking-[.08em] text-cl-muted">Dra. Lorena Lacerda · {who.crm}</div>
      </div>
    </div>
  </section>
);

const Faq = ({ faq }: { faq: ProcedimentoData["faq"] }) => (
  <section className={section}>
    <div className={split}>
      <div>
        <div className={`${kicker} mb-2`}>FAQ</div>
        <h2 className={h2}>Perguntas que sempre chegam</h2>
      </div>
      <div className="flex flex-col gap-2">
        {faq.map((q) => (
          <details key={q.q} className="group rounded-xl border border-cl-line bg-white px-3.5 py-3">
            <summary className="flex cursor-pointer list-none justify-between gap-3 text-[14.5px] font-semibold leading-[1.3] [&::-webkit-details-marker]:hidden">
              {q.q}
              <span className="text-cl-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="m-0 mt-2 text-[13.5px] leading-[1.55] text-cl-text">{q.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const Cta = ({ cta, message }: { cta: ProcedimentoData["cta"]; message: string }) => (
  <section className="mt-[clamp(40px,6vw,80px)] bg-cl-sand py-[clamp(32px,5vw,64px)]">
    <div className="mx-auto max-w-[720px] px-[clamp(20px,4vw,48px)] text-center">
      <h2 className="m-0 font-heading text-[clamp(30px,3.6vw,46px)] font-medium leading-[1.05]">{cta.title}</h2>
      <p className="mx-auto mb-0 mt-3.5 max-w-[520px] text-[15px] leading-relaxed text-cl-text">{cta.text}</p>
      <WhatsAppLink placement="cta_final" message={message} className={`${btnPrimary} mt-[22px] inline-flex h-14 px-[30px] text-[15px]`}>
        <WhatsAppIcon />
        {cta.button}
      </WhatsAppLink>
    </div>
  </section>
);

/**
 * "Veja tambem": os outros seis procedimentos. No celular e um carrossel com
 * uma animacao de "arraste" que roda uma vez quando a secao aparece e para ao
 * primeiro toque ou rolagem; no desktop e uma grade de 3 colunas.
 */
const Related = ({ slug }: { slug: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [swipe, setSwipe] = useState(false);

  useEffect(() => {
    const el = ref.current;
    setSwipe(false);
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSwipe(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    const stop = () => setSwipe(false);
    el.addEventListener("scroll", stop, { once: true });
    el.addEventListener("touchstart", stop, { once: true, passive: true });
    return () => {
      io.disconnect();
      el.removeEventListener("scroll", stop);
      el.removeEventListener("touchstart", stop);
    };
  }, [slug]);

  const others = PROCEDURE_CARDS.filter((c) => c.slug !== slug);

  return (
    <section className={section}>
      <div className="mb-3 flex items-center justify-between">
        <div className={kicker}>Veja também</div>
        <div className="flex items-center gap-1.5 text-[11px] text-cl-muted d:hidden" aria-hidden="true">
          Arraste<span className={`inline-block ${swipe ? "motion-safe:animate-cl-hand" : ""}`}>→</span>
        </div>
      </div>
      <div
        ref={ref}
        className="-mx-5 flex gap-[clamp(10px,1.5vw,20px)] overflow-x-auto px-5 pb-1 [scrollbar-width:none] d:mx-0 d:grid d:grid-cols-3 d:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {others.map((c) => (
          <Link
            key={c.slug}
            to={procedurePath(c.slug)}
            className={`flex w-[150px] flex-none flex-col items-center text-center text-cl-ink no-underline d:w-auto ${swipe ? "motion-safe:animate-cl-swipe" : ""}`}
          >
            <img src={c.img} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-xl bg-cl-sand object-cover" />
            <div className="mt-2 font-heading text-[clamp(18px,1.8vw,22px)] font-semibold leading-[1.1]">{c.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const Procedimento = () => {
  const { slug = "" } = useParams();
  const p = PROCEDIMENTOS[slug];
  if (!p) return <NotFound />;

  const message = procedureWhatsAppMessage(slug);

  return (
    <div className="flex min-h-screen flex-col bg-cl-bg font-body text-cl-ink antialiased">
      <SeoHead path={procedurePath(slug)} />
      <SiteHeader whatsappMessage={message} />
      <main className="flex-1">
        <Hero p={p} message={message} />
        {p.forWhom.length > 0 && <ForWhom p={p} />}
        {p.diff && <Diff diff={p.diff} />}
        {p.equip && <Equip equip={p.equip} />}
        {p.steps && p.steps.length > 0 && <Steps steps={p.steps} />}
        {p.after.length > 0 && <After after={p.after} />}
        <Who who={p.who} />
        {p.faq.length > 0 && <Faq faq={p.faq} />}
        <Cta cta={p.cta} message={message} />
        <Related slug={slug} />
      </main>
      <SiteFooter />
      <WhatsAppBar
        message={message}
        button="Agendar"
        label={
          <>
            <strong className="block truncate text-cl-ink">{p.name}</strong>
            Avaliação com a Dra. Lorena
          </>
        }
      />
    </div>
  );
};

export default Procedimento;
