import { Helmet } from "react-helmet-async";
import { SeoHead } from "@/components/SeoHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Droplet, Sun, Shield, Sparkles, Search, Heart, CheckCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import { ScrollReveal } from "@/hooks/use-scroll-animation";
import { handleWhatsAppClick } from "@/lib/whatsapp";
import heroImg from "@/assets/proc-skincare-hero.webp";
import imgPeeling from "@/assets/skincare-peeling.webp";
import imgMicro from "@/assets/skincare-microagulhamento.webp";
import imgLimpeza from "@/assets/skincare-limpeza.webp";
import imgProdutos from "@/assets/skincare-produtos.webp";
import ctaBg from "@/assets/cta-bg.webp";

const whatsappLink = "https://wa.me/5594992693532?text=Oi%2C%20vim%20pelo%20Google%20e%20tenho%20interesse%20em%20Tratamento%20de%20Manchas%20e%20Skincare.";

const conditions = [
  { icon: Droplet, title: "Melasma", desc: "Manchas escuras no rosto causadas por hormônios e sol" },
  { icon: Sun, title: "Manchas Solares", desc: "Marcas causadas pela exposição solar acumulada" },
  { icon: Shield, title: "Acne e Cicatrizes", desc: "Controle da acne e suavização das marcas" },
  { icon: Sparkles, title: "Rugas Finas", desc: "Rejuvenescimento e textura da pele" },
  { icon: Search, title: "Poros Dilatados", desc: "Redução visível dos poros e uniformização" },
  { icon: Heart, title: "Rosácea", desc: "Controle da sensibilidade e vermelhidão facial" },
];

const treatments = [
  {
    title: "Peeling Químico",
    image: imgPeeling,
    alt: "Peeling químico - tratamento de manchas em Marabá",
    points: [
      "Aplicação de ácidos específicos para renovação celular",
      "Indicado para manchas, textura irregular, acne e rejuvenescimento",
      "Peelings superficiais, médios e profundos — a Dra. Lorena avalia o ideal para cada pele",
      "Sessões rápidas (30-45 min), com descamação controlada nos dias seguintes",
      "Resultados progressivos a cada sessão",
    ],
  },
  {
    title: "Microagulhamento com Drug Delivery",
    image: imgMicro,
    alt: "Microagulhamento com drug delivery em Marabá",
    points: [
      "Estímulo à produção de colágeno através de microagulhas",
      'O "Drug Delivery" potencializa o resultado ao infundir ativos diretamente na pele',
      "Indicado para cicatrizes de acne, rugas finas, melasma e rejuvenescimento",
      "Melhora textura, firmeza e luminosidade",
      "Resultados visíveis após 2-4 sessões",
    ],
  },
  {
    title: "Limpeza de Pele Profunda",
    image: imgLimpeza,
    alt: "Limpeza de pele profunda em Marabá",
    points: [
      "Extração de comedões (cravos) e miliuns",
      "Desobstrução dos poros e remoção de impurezas",
      "Ideal como manutenção mensal para peles oleosas e acneicas",
      "Inclui higienização, esfoliação, extração, máscara calmante e proteção solar",
    ],
  },
  {
    title: "Protocolo Personalizado de Skincare",
    image: imgProdutos,
    alt: "Skincare personalizado - produtos dermocosméticos",
    points: [
      "Avaliação completa do tipo de pele (oleosa, seca, mista, sensível)",
      "Prescrição de rotina de skincare domiciliar (homecare) personalizada",
      "Orientação sobre proteção solar adequada",
      "Acompanhamento da evolução da pele ao longo do tratamento",
      "Prescrição de produtos médicos e dermocosméticos de acordo com a necessidade individual",
    ],
  },
];

const steps = [
  { title: "Avaliação da Pele", desc: "Análise completa do seu tipo de pele, manchas, textura e necessidades" },
  { title: "Plano Personalizado", desc: "Protocolo sob medida com os tratamentos e o skincare homecare ideais para você" },
  { title: "Sessões em Clínica", desc: "Procedimentos realizados pela Dra. Lorena com tecnologia e segurança" },
  { title: "Resultados Progressivos", desc: "Pele transformada sessão após sessão, com acompanhamento contínuo" },
];

const faqs = [
  { q: "Quanto tempo leva para ver resultados no tratamento de manchas?", a: "Os resultados variam de acordo com o tipo e profundidade da mancha. Manchas superficiais podem melhorar em 2-4 semanas. O melasma, por ser crônico, exige tratamento contínuo e proteção solar rigorosa. A Dra. Lorena avalia cada caso individualmente." },
  { q: "O peeling químico dói?", a: "A maioria dos pacientes sente apenas um leve ardor durante a aplicação, que é normal e temporário. A intensidade depende do tipo de peeling utilizado. Peelings superficiais são muito bem tolerados." },
  { q: "Posso fazer microagulhamento se tenho acne ativa?", a: "Depende do grau da acne. Em casos de acne inflamatória ativa, pode ser necessário tratar a acne primeiro antes do microagulhamento. A avaliação da Dra. Lorena define o momento ideal para cada procedimento." },
  { q: "Preciso usar protetor solar todos os dias?", a: "Sim, sempre. O protetor solar é o principal aliado contra manchas e envelhecimento. A Dra. Lorena orienta o tipo e FPS ideal para cada pele, inclusive para reaplicação ao longo do dia." },
  { q: "Quantas sessões são necessárias?", a: "Varia de acordo com a condição tratada e o protocolo escolhido. Em geral, são recomendadas de 3 a 6 sessões com intervalos de 15 a 30 dias, mas isso é definido na avaliação." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Skincare e Tratamento de Manchas em Marabá",
  description: "Protocolos personalizados para melasma, acne, manchas solares e rejuvenescimento em Marabá/PA",
  lastReviewed: "2026-04-01",
  reviewedBy: { "@type": "Physician", name: "Dra. Lorena Lacerda", credential: "CRM 15626" },
  about: [
    { "@type": "MedicalCondition", name: "Melasma" },
    { "@type": "MedicalCondition", name: "Acne" },
    { "@type": "MedicalCondition", name: "Manchas Solares" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const SkincareManchas = () => (
  <>
    <SeoHead path="/skincare-manchas" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <SiteHeader />

    <main>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Skincare e Tratamento de Manchas em Marabá" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>
        <div className="container relative z-10 pb-16 pt-32">
          <Breadcrumbs items={[{ label: "Procedimentos" }, { label: "Skincare e Manchas" }]} />
          <h1 className="mt-4 animate-fade-up font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Skincare Médico e Tratamento de Manchas em Marabá
          </h1>
          <p className="mt-4 max-w-2xl animate-fade-up font-body text-lg text-muted-foreground opacity-0 stagger-1">
            Protocolos personalizados para uma pele uniforme, saudável e radiante
          </p>
          <div className="mt-8 animate-fade-up opacity-0 stagger-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, whatsappLink)}>
              <Button variant="cta" size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Agende sua Avaliação de Pele
              </Button>
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 font-body text-xs text-muted-foreground">
            <span>Conteúdo por Dra. Lorena Lacerda — CRM 15626</span>
            <span>Última atualização: Abril/2026</span>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="container mt-6">
        <MedicalDisclaimer />
      </div>

      {/* O que tratamos */}
      <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              O que Tratamos
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-xl border border-primary/10 p-8 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-glow" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <c.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">{c.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Tratamentos — Zigzag */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Nossos Tratamentos de Pele
            </h2>
          </ScrollReveal>
          <div className="space-y-20">
            {treatments.map((t, i) => (
              <ScrollReveal key={i}>
                <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <h3 className="mb-6 font-heading text-2xl font-semibold text-primary md:text-3xl">{t.title}</h3>
                    <ul className="space-y-3">
                      {t.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="font-body text-muted-foreground">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`overflow-hidden rounded-xl border border-border/50 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                    <img src={t.image} alt={t.alt} className="h-full w-full object-cover" loading="lazy" width={800} height={600} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Passo a Passo do Tratamento
            </h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
            <div className="space-y-10">
              {steps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div className="flex gap-6">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-glow">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">{s.title}</h3>
                      <p className="font-body text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Perguntas Frequentes
            </h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <AccordionItem value={`faq-${i}`} className="rounded-xl border border-border/50 px-6" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <AccordionTrigger className="py-5 font-heading text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-body text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Você Também Pode se Interessar
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: "laser-co2-fracionado", title: "Laser CO2 Fracionado", desc: "Renovação profunda da pele com tecnologia" },
              { slug: "bioestimuladores-colageno", title: "Bioestimuladores de Colágeno", desc: "Firmeza e luminosidade de dentro pra fora" },
              { slug: "harmonizacao-facial", title: "Harmonização Facial", desc: "Equilíbrio e naturalidade para o seu rosto" },
            ].map((r, i) => (
              <ScrollReveal key={r.slug} delay={i * 0.1}>
                <Link to={`/${r.slug}`} className="group block rounded-xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-glow" style={{ background: "rgba(255,255,255,0.03)" }}>
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

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={ctaBg} alt="" className="h-full w-full object-cover" loading="lazy" width={1920} height={800} aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.85)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Sua pele merece cuidado especializado
            </h2>
            <p className="mx-auto mb-10 max-w-xl font-body text-lg text-muted-foreground">
              Agende uma avaliação e descubra o protocolo ideal para você
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, whatsappLink)}>
              <Button variant="cta" size="xl" className="animate-pulse-gold gap-2">
                <MessageCircle className="h-5 w-5" />
                Agendar no WhatsApp
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>

    <SiteFooter />
    <FloatingWhatsApp />
  </>
);

export default SkincareManchas;
