import { SeoHead } from "@/components/SeoHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageCircle, CheckCircle, Clock, ArrowRight, Stethoscope, FileText, Crosshair,
  Activity, Heart, Award, Layers, Thermometer, Sparkles, Blend, AlertTriangle,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import { ReviewMark, ReviewModeBanner } from "@/components/ReviewMark";
import { LeadFormWhatsApp } from "@/components/forms/LeadFormWhatsApp";
import { ScrollReveal } from "@/hooks/use-scroll-animation";
import { createWhatsAppLink, handleWhatsAppClick, WHATSAPP_NUMBER_CLINICA } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { ENDOLASER_FAQ } from "@/lib/endolaser-faq";

// Imagens: reaproveitadas do acervo ja otimizado (todas em WebP, abaixo de 150 KB).
// SUBSTITUIR quando houver foto real de Endolaser: colocar o JPG em assets-src/
// e rodar `npm run images`.
import heroImg from "@/assets/hero-skin.webp";
import whatImg from "@/assets/minilipo-what.webp";
import benefitsBg from "@/assets/minilipo-benefits-bg.webp";
import timelineBg from "@/assets/minilipo-timeline-bg.webp";
import draLorena from "@/assets/dra-lorena.webp";
import formImg from "@/assets/minilipo-consulta.webp";
import faqImg from "@/assets/minilipo-faq.webp";
import ctaImg from "@/assets/cta-bg.webp";

const PROCEDURE = "Endolaser";

const whatsappLink = createWhatsAppLink(
  "Oi, vim pelo Google e gostaria de agendar uma avaliação para Endolaser.",
  WHATSAPP_NUMBER_CLINICA
);

/** Clique de CTA: registra a origem no GTM e segue o fluxo padrao do site. */
const onCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, location: string) => {
  trackWhatsAppClick(location, PROCEDURE);
  handleWhatsAppClick(e, whatsappLink);
};

const indications = [
  { text: "Flacidez leve a moderada da pele do rosto", review: "confirmar os graus de flacidez que a clínica atende com esta técnica" },
  { text: "Contorno mandibular e região submentoniana (a chamada papada)" },
  { text: "Flacidez de pescoço e colo" },
  { text: "Flacidez em braços, abdômen e face interna das coxas" },
  { text: "Casos em que se busca uma alternativa menos invasiva a procedimentos cirúrgicos — a comparação entre as opções é feita na consulta" },
  { text: "Situações em que o Endolaser pode ser associado a outros procedimentos, quando houver indicação" },
];

const characteristics = [
  { icon: Layers, title: "Aplicação sob a pele", desc: "A energia é entregue na camada logo abaixo da pele, através de uma microperfuração, e não pela superfície.", review: "confirmar o calibre da fibra e o tamanho da microperfuração usados na clínica" },
  { icon: Thermometer, title: "Estímulo térmico controlado", desc: "O aquecimento local pode auxiliar na retração do colágeno existente e no estímulo à produção de colágeno novo.", review: "validar a descrição do mecanismo de ação" },
  { icon: Heart, title: "Anestesia local", desc: "Realizado em ambiente ambulatorial, com anestesia local.", review: "confirmar o tipo de anestesia utilizada (local simples ou tumescente)" },
  { icon: Clock, title: "Resposta progressiva", desc: "As alterações não são imediatas: aparecem de forma gradual, acompanhando o processo natural de remodelação do colágeno.", review: "informar em quantas semanas a resposta costuma ser observada" },
  { icon: Sparkles, title: "Face e corpo", desc: "Pode ser avaliado para diferentes regiões, conforme a indicação de cada caso." },
  { icon: Blend, title: "Pode ser combinado", desc: "A associação com outros procedimentos da clínica é definida caso a caso, em consulta." },
];

const steps = [
  { icon: Stethoscope, title: "Avaliação médica", desc: "Consulta com a Dra. Lorena Lacerda para histórico de saúde, exame da área e definição de haver ou não indicação para a técnica." },
  { icon: FileText, title: "Preparo e orientações", desc: "Quando indicado, são solicitados exames e orientados ajustes prévios, como a suspensão de determinadas medicações.", review: "confirmar quais exames e cuidados prévios são solicitados" },
  { icon: Crosshair, title: "Antissepsia, marcação e anestesia", desc: "A área é higienizada e marcada, e a anestesia local é aplicada antes do início.", review: "confirmar o protocolo de antissepsia e anestesia" },
  { icon: Activity, title: "Aplicação do laser", desc: "A fibra óptica é introduzida pela microperfuração e o laser é aplicado na camada subdérmica. A duração varia conforme a área tratada.", review: "informar a duração média da sessão por área" },
  { icon: Heart, title: "Pós-imediato e recuperação", desc: "Inchaço e hematomas nos primeiros dias são esperados. O uso de malha compressiva e o tempo de retorno às atividades são orientados individualmente.", review: "informar o tempo médio de recuperação, o retorno às atividades e o uso e a duração da malha compressiva" },
  { icon: Award, title: "Retornos e acompanhamento", desc: "Consultas de retorno acompanham a evolução e definem se há indicação de nova sessão.", review: "informar o intervalo dos retornos e em que prazo a reavaliação é feita" },
];

const contraindications = [
  { text: "Gestação e amamentação" },
  { text: "Infecção, inflamação ou lesão ativa na área a ser tratada" },
  { text: "Distúrbios de coagulação ou uso de anticoagulantes" },
  { text: "Doenças crônicas descompensadas" },
  { text: "Histórico de cicatrização queloidiana" },
  { text: "Uso de medicações fotossensibilizantes", review: "confirmar a lista completa de contraindicações e de medicações que impedem o procedimento" },
];

const related = [
  { slug: "bioestimuladores-colageno", title: "Bioestimuladores de Colágeno", desc: "Estímulo de colágeno por via injetável" },
  { slug: "laser-co2-fracionado", title: "Laser CO2 Fracionado", desc: "Laser aplicado na superfície da pele" },
  { slug: "mini-lipo-localizada", title: "Mini Lipo Localizada", desc: "Contorno corporal com microcânulas" },
];

const Endolaser = () => (
  <>
    <SeoHead path="/endolaser" />

    <SiteHeader />

    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20 lg:min-h-[85vh]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Endolaser em Marabá — Clínica Lacerda" className="h-full w-full object-cover" width={1920} height={1080} fetchPriority="high" decoding="async" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.3) 100%)" }} />
        </div>
        <div className="container relative z-10 pb-16 pt-32 lg:pb-28">
          <Breadcrumbs items={[{ label: "Procedimentos" }, { label: "Endolaser" }]} />
          <h1 className="mt-4 animate-fade-up font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            Endolaser<span className="block text-primary"> em Marabá</span>
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up font-body text-lg text-muted-foreground opacity-0 stagger-1 md:text-xl">
            Tecnologia a laser aplicada sob a pele, indicada para avaliação de flacidez facial e corporal
          </p>
          <div className="mt-10 animate-fade-up opacity-0 stagger-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => onCtaClick(e, "hero")}>
              <Button variant="cta" size="xl" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Agende sua avaliação
              </Button>
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-body text-xs text-muted-foreground">
            <span>Conteúdo sob responsabilidade da Dra. Lorena Lacerda — CRM-PA 15626</span>
            <span>Última atualização: Agosto/2026</span>
          </div>
        </div>
      </section>

      <div className="container mt-6 space-y-4">
        <ReviewModeBanner />
        <MedicalDisclaimer />
      </div>

      {/* ═══ O QUE É ═══ */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="mb-8 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  O que é o Endolaser
                </h2>
                <div className="space-y-4 font-body leading-relaxed text-muted-foreground">
                  <p>
                    O Endolaser — também chamado de <strong className="text-foreground">laser endodérmico</strong> ou
                    endolifting — é uma técnica em que uma fibra óptica muito fina é introduzida sob a pele
                    através de uma microperfuração. A energia do laser é entregue diretamente na camada logo
                    abaixo da pele, e não através da superfície.
                  </p>
                  <p>
                    Esse aquecimento controlado <strong className="text-foreground">pode auxiliar</strong> na
                    retração das fibras de colágeno já existentes e no estímulo à produção de colágeno novo pelo
                    próprio organismo — processo conhecido como neocolagênese.
                    <ReviewMark note="validar a descrição técnica do mecanismo de ação" />
                  </p>
                  <p>
                    Por atuar por baixo da pele, é uma técnica diferente dos lasers aplicados na superfície,
                    como o laser de CO2 fracionado. São abordagens com objetivos distintos, e qual delas se
                    aplica a cada caso é definido em consulta.
                  </p>
                  <p>
                    Na Clínica Lacerda o procedimento é realizado pela Dra. Lorena Lacerda em ambiente
                    ambulatorial, com anestesia local, sempre após avaliação individualizada.
                    <ReviewMark note="confirmar o equipamento e o comprimento de onda utilizados, e o tipo de anestesia" />
                  </p>
                  <p className="text-sm">
                    A resposta ao procedimento varia conforme a idade, o grau de flacidez, a qualidade da pele e
                    as características individuais de cada paciente. Não há resultado que possa ser prometido
                    antes da avaliação médica.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="overflow-hidden rounded-lg" style={{ border: "1px solid rgba(200,169,110,0.3)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                {/* SUBSTITUIR: foto real do consultório ou do equipamento de Endolaser */}
                <img src={whatImg} alt="Consultório de medicina estética da Clínica Lacerda em Marabá" className="h-full w-full object-cover" loading="lazy" width={800} height={600} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ INDICAÇÕES ═══ */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(0 0% 6%)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl rounded-xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, rgba(200,169,110,0.08) 0%, rgba(200,169,110,0.02) 100%)", borderLeft: "4px solid hsl(var(--primary))" }}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mb-3 font-heading text-2xl font-semibold text-primary md:text-3xl">
                Indicado para avaliação de
              </h2>
              <p className="mb-8 font-body text-sm text-muted-foreground">
                A presença de uma dessas situações não significa, por si só, que o procedimento esteja indicado.
                A indicação é individual e depende de consulta.
              </p>
              <ul className="space-y-4 font-body leading-relaxed text-muted-foreground">
                {indications.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      {item.text}
                      {item.review && <ReviewMark note={item.review} />}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CARACTERÍSTICAS / BENEFÍCIOS ═══ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={benefitsBg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.9)" }} />
        </div>
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Características do procedimento
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-muted-foreground">
                O que descrevemos abaixo são características da técnica, não resultados garantidos.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {characteristics.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="group h-full rounded-xl p-8 backdrop-blur-md transition-all duration-300 hover:shadow-glow" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,169,110,0.15)" }}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-[1.15]">
                    <c.icon className="h-7 w-7 text-primary" style={{ filter: "drop-shadow(0 0 8px rgba(200,169,110,0.3))" }} />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">{c.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                    {c.review && <ReviewMark note={c.review} />}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMO FUNCIONA A SESSÃO ═══ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={timelineBg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.92)" }} />
        </div>
        <div className="container relative z-10 max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Como funciona a sessão
            </h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/10 lg:left-6" />
            <div className="space-y-12">
              {steps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="flex gap-6">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-glow">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">{s.title}</h3>
                      <p className="font-body text-muted-foreground">
                        {s.desc}
                        {s.review && <ReviewMark note={s.review} />}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTRAINDICAÇÕES ═══ */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(0 0% 6%)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl rounded-xl p-8 md:p-10" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,169,110,0.15)" }}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <AlertTriangle className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mb-3 font-heading text-2xl font-semibold text-foreground md:text-3xl">
                Quando o procedimento não é indicado
              </h2>
              <p className="mb-8 font-body text-sm text-muted-foreground">
                Algumas condições contraindicam o Endolaser ou exigem cuidado adicional. A relação abaixo é
                informativa e não substitui a avaliação médica, que é o que define cada caso.
              </p>
              <ul className="grid gap-4 font-body leading-relaxed text-muted-foreground sm:grid-cols-2">
                {contraindications.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      {item.text}
                      {item.review && <ReviewMark note={item.review} />}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ DRA. LORENA ═══ */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-lg" style={{ border: "2px solid hsl(var(--primary))" }}>
                  <img src={draLorena} alt="Dra. Lorena Lacerda — CRM-PA 15626, Clínica Lacerda, Marabá/PA" className="h-full w-full object-cover" loading="lazy" width={600} height={800} />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-card p-4 shadow-card">
                  <p className="font-heading text-lg font-semibold text-primary">CRM-PA 15626</p>
                  <p className="font-body text-xs text-muted-foreground">Responsável técnica</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <span className="mb-3 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                  Responsável pelo procedimento
                </span>
                <h2 className="mb-2 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  Dra. Lorena Lacerda
                </h2>
                <p className="mb-6 font-body text-sm font-medium uppercase tracking-widest text-primary">
                  CRM-PA 15626
                </p>
                <div className="space-y-4 font-body leading-relaxed text-muted-foreground">
                  <p>
                    Médica formada pela UNIRG (Universidade de Gurupi), com experiência clínica adquirida no
                    Hospital Universitário de Araguaína. Atua com dedicação à Medicina Estética em Marabá/PA.
                  </p>
                  <p>
                    O Endolaser é realizado por ela na Clínica Lacerda, sempre precedido de consulta, exame da
                    área e conversa sobre o que a técnica pode e o que não pode oferecer em cada caso.
                    <ReviewMark note="informar formação específica ou curso na técnica de laser endodérmico, se houver, para publicação" />
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/sobre">
                    <Button variant="ctaOutline" className="gap-2">
                      Conheça a Dra. Lorena
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ FORMULÁRIO DE LEAD ═══ */}
      <section id="agendar" className="relative overflow-hidden py-20 lg:py-28" style={{ background: "hsl(0 0% 5%)" }}>
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  Prefere que a gente chame você?
                </h2>
                <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                  Deixe seu nome e WhatsApp. A equipe da Clínica Lacerda entra em contato para explicar como é a
                  avaliação e verificar os horários disponíveis. Se preferir falar agora, é só usar o botão de
                  WhatsApp em qualquer ponto desta página.
                </p>
                <div className="hidden overflow-hidden rounded-lg lg:block" style={{ border: "1px solid rgba(200,169,110,0.25)" }}>
                  <img src={formImg} alt="Consulta de avaliação na Clínica Lacerda em Marabá" className="h-auto w-full object-cover" loading="lazy" width={800} height={600} />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <LeadFormWhatsApp procedure={PROCEDURE} whatsappNumber={WHATSAPP_NUMBER_CLINICA} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(0 0% 6%)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Perguntas frequentes
            </h2>
          </ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-3">
                {ENDOLASER_FAQ.map((f, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <AccordionItem value={`faq-${i}`} className="rounded-xl border px-6" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(200,169,110,0.1)" }}>
                      <AccordionTrigger className="py-5 font-heading text-lg font-medium text-foreground hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                        {f.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 font-body leading-relaxed text-muted-foreground">
                        {f.answer}
                        {f.review && <ReviewMark note={f.review} />}
                      </AccordionContent>
                    </AccordionItem>
                  </ScrollReveal>
                ))}
              </Accordion>
            </div>
            <div className="hidden lg:block">
              <div className="sticky top-24 overflow-hidden rounded-lg" style={{ border: "1px solid rgba(200,169,110,0.25)" }}>
                <img src={faqImg} alt="Clínica Lacerda — Marabá/PA" className="h-auto w-full object-cover" loading="lazy" width={600} height={900} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RELACIONADOS ═══ */}
      <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Outros procedimentos da clínica
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <ScrollReveal key={r.slug} delay={i * 0.1}>
                <Link to={`/${r.slug}`} className="group block rounded-xl p-6 transition-all duration-300 hover:shadow-glow" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,169,110,0.1)" }}>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary">{r.title}</h3>
                  <p className="mb-3 font-body text-sm text-muted-foreground">{r.desc}</p>
                  <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaImg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.45) 100%)" }} />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <ScrollReveal>
            <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Agende uma avaliação
            </h2>
            <p className="mx-auto mb-10 max-w-xl font-body text-lg text-muted-foreground">
              Na consulta, a Dra. Lorena Lacerda avalia se o Endolaser é indicado para o seu caso e explica as
              alternativas disponíveis.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => onCtaClick(e, "cta_final")}>
              <Button variant="cta" size="xl" className="animate-pulse-gold gap-2 text-lg">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </a>
            <p className="mx-auto mt-8 max-w-xl font-body text-xs text-muted-foreground">
              Clínica Lacerda — Marabá/PA. Responsável técnica: Dra. Lorena Lacerda, CRM-PA 15626.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>

    <SiteFooter />
    <FloatingWhatsApp />
  </>
);

export default Endolaser;
