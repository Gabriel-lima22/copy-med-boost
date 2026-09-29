import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SeoHead } from "@/components/SeoHead";
import { SiteHeader } from "@/components/v2/SiteHeader";
import { SiteFooter } from "@/components/v2/SiteFooter";
import { WhatsAppBar } from "@/components/v2/WhatsAppBar";
import { WhatsAppIcon, WhatsAppLink } from "@/components/v2/WhatsAppLink";
import { PROCEDURE_CARDS, procedurePath } from "@/lib/procedimentos-v2";
import { HOME_FAQ, HOME_REVIEWS } from "@/lib/home-v2";
import { HOME_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import heroDesktop from "@/assets/v2/dra-lorena-hero.webp";
import heroMobile from "@/assets/v2/banner-dra-lorena.webp";
import retrato from "@/assets/v2/dra-lorena-retrato.webp";
import salaProcedimentos from "@/assets/v2/sala-procedimentos.webp";
import recepcao from "@/assets/v2/recepcao.webp";
import consultorio from "@/assets/v2/consultorio.webp";
import fachada from "@/assets/v2/fachada.webp";
import hegon from "@/assets/v2/hegon-co2.webp";

const WA_MESSAGE = HOME_WHATSAPP_MESSAGE;

const kicker = "text-[11px] font-semibold uppercase tracking-[.2em] text-cl-gold";
const h2 = "m-0 font-heading text-[clamp(32px,3.6vw,48px)] font-medium leading-[1.05]";
const section = "mx-auto max-w-[1200px] scroll-mt-20 px-[clamp(20px,4vw,48px)] pt-[clamp(40px,6vw,88px)]";
const btnPrimary =
  "flex items-center justify-center gap-2.5 rounded-full bg-cl-ink font-semibold text-cl-cream no-underline hover:bg-cl-ink-hover";

const Hero = () => (
  // Uma estrutura so para as duas telas: no celular a foto ocupa o fundo e o
  // texto fica por cima; no desktop sao duas colunas. O <picture> garante que
  // cada tela baixa apenas a sua foto.
  <section className="relative d:mx-auto d:grid d:max-w-[1200px] d:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] d:items-center d:gap-[clamp(32px,5vw,72px)] d:px-[clamp(20px,4vw,48px)] d:pt-[clamp(40px,6vw,80px)]">
    <div className="absolute inset-x-6 bottom-[22px] z-10 flex flex-col gap-3.5 d:static">
      <div className="hidden text-xs font-semibold uppercase tracking-[.2em] text-cl-gold d:block">Medicina Estética · Marabá/PA</div>
      <h1 className="m-0 text-balance font-heading text-[40px] font-medium leading-[1.05] d:text-[clamp(44px,5vw,68px)] d:leading-[1.02]">
        Realce sua beleza de forma <em className="text-cl-gold">natural e segura</em>
      </h1>
      <p className="m-0 text-sm leading-[1.55] text-cl-text d:max-w-[520px] d:text-[17px] d:leading-relaxed">
        Dra. Lorena Lacerda · CRM-PA 15626. Avaliação individual, protocolos personalizados e acompanhamento próximo.
      </p>
      <div className="flex flex-wrap gap-3 d:mt-0.5">
        <WhatsAppLink message={WA_MESSAGE} className={`${btnPrimary} h-[54px] w-full text-[15px] d:h-14 d:w-auto d:px-7`}>
          <WhatsAppIcon />
          Agendar avaliação
        </WhatsAppLink>
        <a
          href="#procedimentos"
          className="hidden h-14 items-center justify-center rounded-full border border-cl-gold-soft px-6 text-[15px] font-medium text-cl-ink no-underline hover:bg-cl-sand d:flex"
        >
          Ver procedimentos
        </a>
      </div>
    </div>

    <div className="relative h-[520px] overflow-hidden bg-cl-sand d:h-[clamp(440px,48vw,620px)] d:rounded-3xl">
      <picture>
        <source media="(min-width: 900px)" srcSet={heroDesktop} width={1100} height={1650} />
        <img
          src={heroMobile}
          alt="Dra. Lorena Lacerda"
          width={1600}
          height={901}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[100%_20%] d:object-[50%_20%]"
        />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,249,245,0)_28%,rgba(251,249,245,.55)_48%,rgba(251,249,245,.95)_64%,#FBF9F5_100%)] d:hidden" />
      <div className="absolute bottom-[18px] left-[18px] hidden rounded-[14px] bg-cl-bg/95 px-4 py-3 backdrop-blur-sm d:block">
        <div className="font-heading text-xl font-semibold leading-[1.1]">Dra. Lorena Lacerda</div>
        <div className="mt-[3px] text-xs text-cl-muted">Médica · CRM-PA 15626</div>
      </div>
    </div>
  </section>
);

const Highlights = () => (
  <div className="mx-auto mt-[clamp(32px,5vw,64px)] max-w-[1200px] px-[clamp(20px,4vw,48px)]">
    <div className="grid grid-cols-3 border-y border-cl-line">
      {[
        ["CRM-PA", "15626"],
        ["Laser CO2", "Hegon · na clínica"],
        ["Marabá", "Seg–Sáb"],
      ].map(([title, sub], i) => (
        <div key={title} className={`px-2 py-[clamp(16px,2vw,24px)] text-center ${i < 2 ? "border-r border-cl-line" : ""}`}>
          <div className="font-heading text-[clamp(22px,2.4vw,30px)] font-semibold">{title}</div>
          <div className="text-[clamp(11px,1vw,13px)] text-cl-muted">{sub}</div>
        </div>
      ))}
    </div>
  </div>
);

const Procedures = () => (
  <section id="procedimentos" className={section}>
    <div className="mb-[clamp(18px,2.5vw,32px)] flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
      <div>
        <div className={`${kicker} mb-2`}>Procedimentos</div>
        <h2 className={h2}>Escolha o que você procura</h2>
      </div>
      <p className="m-0 max-w-[420px] text-sm leading-[1.55] text-cl-text">
        Toque em um procedimento para ver indicações, etapas e dúvidas frequentes.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,20px)] d:grid-cols-4">
      {PROCEDURE_CARDS.map((p, i) => (
        <Link
          key={p.slug}
          to={procedurePath(p.slug)}
          className="relative flex flex-col overflow-hidden rounded-2xl border border-cl-line bg-white text-cl-ink no-underline transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-cl-gold-soft"
        >
          <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/3] w-full bg-[#F7F3EC] object-cover" />
          {i === 0 && (
            <div className="absolute left-2.5 top-2.5 rounded-full bg-cl-gold-soft px-2 py-1 text-[10px] font-semibold uppercase tracking-[.1em] text-cl-ink">
              Mais procurado
            </div>
          )}
          <div className="px-3.5 pb-4 pt-3.5">
            <div className="font-heading text-[21px] font-semibold leading-[1.1]">{p.name}</div>
            <div className="mt-[5px] text-[12.5px] leading-[1.4] text-cl-muted">{p.short}</div>
          </div>
        </Link>
      ))}
      <WhatsAppLink
        message={WA_MESSAGE}
        className="flex min-h-[160px] flex-col justify-center gap-2 rounded-2xl bg-cl-ink p-[18px] text-white no-underline hover:bg-cl-ink-hover"
      >
        <div className="text-[11px] font-semibold uppercase tracking-[.12em] text-cl-gold-soft">Não sabe qual?</div>
        <div className="font-heading text-[22px] leading-[1.2]">Fale com a clínica e receba orientação.</div>
      </WhatsAppLink>
    </div>
  </section>
);

const ABOUT_TEXT =
  "Médica formada pela UNIRG, com experiência clínica no Hospital Universitário de Araguaína. Hoje dedica-se exclusivamente à Medicina Estética em Marabá, com atendimento personalizado e humanizado.";

const About = () => (
  <section id="sobre" className={section}>
    {/* Desktop */}
    <div className="hidden grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center gap-[clamp(32px,5vw,72px)] d:grid">
      <img
        src={retrato}
        alt="Dra. Lorena Lacerda"
        loading="lazy"
        width={1100}
        height={1650}
        className="aspect-[4/5] w-full rounded-[200px_200px_20px_20px] object-cover object-[50%_15%]"
      />
      <div>
        <div className={`${kicker} mb-2.5`}>Sobre</div>
        <h2 className={h2}>Dra. Lorena Lacerda</h2>
        <div className="mt-2 text-[13px] text-cl-muted">Medicina Estética · CRM-PA 15626</div>
        <p className="m-0 mt-[22px] max-w-[560px] text-base leading-[1.65] text-cl-text">{ABOUT_TEXT}</p>
        <blockquote className="m-0 mt-[22px] max-w-[560px] border-l border-cl-gold-soft pl-[18px] font-heading text-[22px] italic leading-[1.35]">
          “Minha missão é cuidar da sua autoestima através de protocolos personalizados, tecnologia de ponta e acompanhamento próximo.”
        </blockquote>
        <div className="mt-[26px] grid max-w-[560px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          {[
            ["Formação", "Medicina — UNIRG"],
            ["Experiência", "Hospital Universitário de Araguaína"],
            ["Atuação", "Medicina Estética — Marabá/PA"],
          ].map(([t, d]) => (
            <div key={t} className="border-t border-cl-line pt-3.5">
              <div className="text-[11px] font-semibold uppercase tracking-[.14em] text-cl-gold">{t}</div>
              <div className="mt-1 text-[13.5px] leading-[1.45] text-cl-text">{d}</div>
            </div>
          ))}
        </div>
        <WhatsAppLink message={WA_MESSAGE} className={`${btnPrimary} mt-7 inline-flex h-[52px] px-6 text-sm`}>
          Agendar consulta
        </WhatsAppLink>
      </div>
    </div>

    {/* Celular */}
    <div className="d:hidden">
      <div className="grid grid-cols-[120px_1fr] items-end gap-[18px]">
        <img
          src={retrato}
          alt="Dra. Lorena Lacerda"
          loading="lazy"
          width={120}
          height={120}
          className="h-[120px] w-[120px] rounded-xl object-cover object-[50%_18%]"
        />
        <div>
          <div className={`${kicker} mb-2`}>Sobre</div>
          <h2 className="m-0 font-heading text-[30px] font-medium leading-[1.05]">Dra. Lorena Lacerda</h2>
          <div className="mt-1.5 text-xs text-cl-muted">Medicina Estética · CRM-PA 15626</div>
        </div>
      </div>
      <p className="m-0 mt-[18px] text-sm leading-relaxed text-cl-text">{ABOUT_TEXT}</p>
    </div>
  </section>
);

const HegonCard = ({ className, imgSize, textClass }: { className: string; imgSize: number; textClass: string }) => (
  <div className={`items-center rounded-[14px] border border-cl-line bg-white ${className}`}>
    <img
      src={hegon}
      alt="Laser CO2 Hegon"
      loading="lazy"
      width={imgSize}
      height={imgSize}
      className="flex-none object-contain"
      style={{ width: imgSize, height: imgSize }}
    />
    <div className={`text-cl-text ${textClass}`}>
      <strong className="font-semibold text-cl-ink">Laser CO2 Fracionado Hegon.</strong> Tecnologia para manchas, cicatrizes de acne e
      flacidez, com protocolo definido em avaliação.
    </div>
  </div>
);

const Clinic = () => {
  const photo = "h-full w-full rounded-[14px] object-cover";
  return (
    <section id="clinica" className={section}>
      <div className={`${kicker} mb-2`}>A clínica</div>
      <h2 className={`${h2} mb-[clamp(16px,2.5vw,28px)]`}>Estrutura completa em Marabá</h2>
      <div className="grid grid-cols-2 grid-rows-[180px_180px] gap-2.5 d:grid-cols-4 d:grid-rows-[clamp(200px,22vw,280px)_auto] d:gap-[clamp(10px,1.2vw,16px)]">
        <img src={salaProcedimentos} alt="Sala de procedimentos com Laser CO2 Hegon" loading="lazy" className={`${photo} row-span-2`} />
        <img src={recepcao} alt="Recepção" loading="lazy" className={photo} />
        <img src={consultorio} alt="Consultório" loading="lazy" className={photo} />
        <img src={fachada} alt="Fachada da Clínica Lacerda" loading="lazy" className={`${photo} hidden object-[50%_60%] d:block`} />
        <HegonCard className="col-span-3 hidden gap-6 py-4 pl-5 pr-7 d:flex" imgSize={150} textClass="text-[15px] leading-[1.55]" />
      </div>
      <HegonCard className="mt-3.5 flex gap-3.5 p-4 d:hidden" imgSize={56} textClass="text-[13px] leading-[1.45]" />
    </section>
  );
};

const AVATAR_COLORS = ["#7A5C24", "#4A443C", "#8A6A2F", "#1C1916", "#A8875A"];

const Reviews = () => (
  <section className="mt-[clamp(40px,6vw,88px)] bg-cl-sand py-[clamp(32px,5vw,64px)]">
    <div className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,48px)]">
      <div className="mb-[clamp(14px,2vw,24px)] flex items-baseline justify-between">
        <h2 className="m-0 font-heading text-[clamp(28px,3.2vw,42px)] font-medium leading-[1.05]">Avaliações</h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Lacerda+Marab%C3%A1"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap text-[13px] text-cl-muted no-underline hover:text-cl-ink"
        >
          Google · 5,0 · Ver todas →
        </a>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3">
        {HOME_REVIEWS.map((r, i) => (
          // Desktop mostra 3, celular mostra as 5.
          <div key={r.name} className={`flex flex-col rounded-[14px] border border-cl-line bg-white p-[18px] ${i >= 3 ? "d:hidden" : ""}`}>
            <div className="flex items-center gap-3">
              <div
                className="flex h-[42px] w-[42px] flex-none items-center justify-center overflow-hidden rounded-full font-heading text-xl font-semibold text-white"
                style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                aria-hidden="true"
              >
                {r.name[0]}
              </div>
              <div className="min-w-0">
                <div className="truncate text-[13.5px] font-semibold leading-[1.2]">{r.name}</div>
                <div className="mt-[3px] flex items-center gap-2">
                  <span className="text-xs tracking-[1.5px] text-cl-gold-soft" aria-label="5 estrelas">
                    ★★★★★
                  </span>
                  <span className="text-[11.5px] text-cl-muted">{r.when}</span>
                </div>
              </div>
            </div>
            <p className="m-0 mt-3 text-sm leading-[1.55] text-cl-text">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Faq = () => (
  <section className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,48px)] pt-[clamp(36px,5vw,72px)]">
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,4vw,64px)]">
      <div>
        <div className={`${kicker} mb-2`}>FAQ</div>
        <h2 className="m-0 font-heading text-[clamp(28px,3.2vw,42px)] font-medium leading-[1.05]">Dúvidas frequentes</h2>
        <p className="m-0 mt-3.5 max-w-[380px] text-sm leading-[1.55] text-cl-text">
          Não encontrou sua dúvida? Fale com a clínica pelo WhatsApp.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {HOME_FAQ.map((item) => (
          <details key={item.q} className="group rounded-xl border border-cl-line bg-white px-4 py-3.5">
            <summary className="flex cursor-pointer list-none justify-between gap-3 text-[14.5px] font-semibold leading-[1.3] [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="text-cl-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="m-0 mt-2 text-[13.5px] leading-[1.55] text-cl-text">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const label = "text-[11px] font-semibold uppercase tracking-[.12em] text-cl-gold";
  return (
    <section id="contato" className={section}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-stretch gap-[clamp(20px,3vw,40px)]">
        <div className="flex flex-col">
          <div className={`${kicker} mb-2`}>Contato</div>
          <h2 className="m-0 mb-[18px] font-heading text-[clamp(28px,3.2vw,42px)] font-medium leading-[1.05]">Onde estamos</h2>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4 text-[13.5px] leading-normal text-cl-text">
            <div>
              <div className={label}>Endereço</div>
              Fl27, QD07, LT08 · Nova Marabá
              <br />
              Marabá - PA, 68509-160
            </div>
            <div>
              <div className={label}>Horário</div>
              Seg–Sex 08h–18h
              <br />
              Sáb 08h–12h
            </div>
            <div>
              <div className={label}>WhatsApp</div>
              <WhatsAppLink message={WA_MESSAGE} className="text-cl-text no-underline hover:text-cl-ink">
                (94) 99269-3532
              </WhatsAppLink>
            </div>
            <div>
              <div className={label}>Instagram</div>
              <a
                href="https://www.instagram.com/dralorenalacerdaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cl-text no-underline hover:text-cl-ink"
              >
                @dralorenalacerdaa
              </a>
            </div>
          </div>
          <WhatsAppLink message={WA_MESSAGE} className={`${btnPrimary} mt-6 h-[54px] text-[15px] d:mt-auto`}>
            Agendar avaliação pelo WhatsApp
          </WhatsAppLink>
        </div>
        <iframe
          title="Mapa da Clínica Lacerda"
          src="https://maps.google.com/maps?q=-5.346683,-49.096493&z=16&hl=pt-BR&output=embed"
          loading="lazy"
          className="h-full min-h-[280px] w-full rounded-[14px] border-0"
        />
      </div>
    </section>
  );
};

const Home = () => {
  const { hash } = useLocation();

  // Link de outra pagina para uma secao (ex.: /#sobre): o navegador nao rola
  // sozinho numa troca de rota do SPA.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <div className="flex min-h-screen flex-col bg-cl-bg font-body text-cl-ink antialiased">
      <SeoHead path="/" />
      <SiteHeader whatsappMessage={WA_MESSAGE} />
      <main id="inicio" className="flex-1">
        <Hero />
        <Highlights />
        <Procedures />
        <About />
        <Clinic />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppBar message={WA_MESSAGE} />
    </div>
  );
};

export default Home;
