import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, ArrowRight, Clock, CalendarDays } from "lucide-react";
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
import { createWhatsAppLink, handleWhatsAppClick, PROCEDURE_WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { procedures } from "@/lib/procedures-data";
import ctaBg from "@/assets/cta-bg.jpg";

// Procedure hero images mapping
import procHarmonizacao from "@/assets/proc-harmonizacao.jpg";
import procBotox from "@/assets/proc-botox.jpg";
import procLabial from "@/assets/proc-labial.jpg";
import procBioestimuladores from "@/assets/proc-bioestimuladores.jpg";
import procLaser from "@/assets/proc-laser.jpg";
import procCapilar from "@/assets/proc-capilar.jpg";
import procEpilacao from "@/assets/proc-epilacao.jpg";
import procSkincare from "@/assets/proc-skincare.jpg";
import procMinilipo from "@/assets/proc-minilipo.jpg";

const heroImages: Record<string, string> = {
  "harmonizacao-facial": procHarmonizacao,
  "toxina-botulinica-botox": procBotox,
  "preenchimento-labial": procLabial,
  "bioestimuladores-colageno": procBioestimuladores,
  "laser-co2-fracionado": procLaser,
  "tratamento-capilar": procCapilar,
  "epilacao-laser": procEpilacao,
  "skincare-manchas": procSkincare,
  "mini-lipo-localizada": procMinilipo,
};

interface ProcedurePageProps {
  procedureSlug: string;
}

export const ProcedurePage = ({ procedureSlug }: ProcedurePageProps) => {
  const data = procedures[procedureSlug];
  if (!data) return null;

  const whatsappMessage = PROCEDURE_WHATSAPP_MESSAGES[procedureSlug] || PROCEDURE_WHATSAPP_MESSAGES.default;
  const whatsappLink = createWhatsAppLink(whatsappMessage);
  const heroImage = heroImages[procedureSlug];

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: data.title,
    description: data.metaDescription,
    lastReviewed: "2026-04-01",
    reviewedBy: { "@type": "Physician", name: "Dra. Lorena Lacerda", credential: "CRM 15626" },
    about: { "@type": "MedicalProcedure", name: data.shortTitle, procedureType: "NoninvasiveProcedure" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const relatedData = data.relatedProcedures.map((slug) => procedures[slug]).filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://clinicalacerda.com/${data.slug}`} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`https://clinicalacerda.com/${data.slug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(medicalWebPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SiteHeader />

      <main>
        {/* Hero with background image */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20">
          <div className="absolute inset-0">
            {heroImage && (
              <img
                src={heroImage}
                alt={`${data.shortTitle} em Marabá - Dra. Lorena Lacerda`}
                className="h-full w-full object-cover"
                width={1200}
                height={600}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </div>
          <div className="container relative z-10 pb-16 pt-32">
            <Breadcrumbs items={[{ label: "Procedimentos" }, { label: data.shortTitle }]} />
            <h1 className="mt-4 animate-fade-up font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mt-4 max-w-2xl animate-fade-up font-body text-lg text-muted-foreground opacity-0 stagger-1">
              {data.subtitle}
            </p>
            <div className="mt-8 animate-fade-up opacity-0 stagger-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
              >
                <Button variant="cta" size="lg" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Agende sua Consulta
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

        {/* What is it — Zigzag layout */}
        <section className="py-20 lg:py-24">
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <ScrollReveal>
                <div>
                  <h2 className="mb-8 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    O que é?
                  </h2>
                  <div className="space-y-4">
                    {data.description.map((p, i) => (
                      <p key={i} className="font-body text-base leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                {data.indications.length > 0 && (
                  <div className="rounded-xl border border-primary/10 p-8" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <h3 className="mb-6 font-heading text-2xl font-semibold text-foreground">
                      Para quem é indicado
                    </h3>
                    <ul className="space-y-4">
                      {data.indications.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="font-body text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
          <div className="container">
            <ScrollReveal>
              <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Benefícios
              </h2>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.benefits.map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group rounded-xl border border-primary/10 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <h3 className="mb-3 font-heading text-xl font-semibold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works — Timeline */}
        <section className="py-20 lg:py-24">
          <div className="container max-w-3xl">
            <ScrollReveal>
              <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Como Funciona
              </h2>
            </ScrollReveal>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
              <div className="space-y-10">
                {data.steps.map((step, i) => (
                  <ScrollReveal key={i} delay={i * 0.15}>
                    <div className="flex gap-6">
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-glow">
                        {i + 1}
                      </div>
                      <div className="pb-2">
                        <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="font-body text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {(data.sessionInfo || data.recoveryInfo) && (
              <ScrollReveal>
                <div className="mt-12 flex flex-wrap gap-4">
                  {data.sessionInfo && (
                    <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-body text-sm text-muted-foreground">{data.sessionInfo}</span>
                    </div>
                  )}
                  {data.recoveryInfo && (
                    <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3">
                      <CalendarDays className="h-5 w-5 text-primary" />
                      <span className="font-body text-sm text-muted-foreground">{data.recoveryInfo}</span>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )}
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
              {data.faq.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <AccordionItem
                    value={`faq-${i}`}
                    className="rounded-xl border border-border/50 px-6"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <AccordionTrigger className="py-5 font-heading text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 font-body text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Procedures */}
        {relatedData.length > 0 && (
          <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
            <div className="container">
              <ScrollReveal>
                <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  Você Também Pode se Interessar
                </h2>
              </ScrollReveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedData.map((related, i) => (
                  <ScrollReveal key={related.slug} delay={i * 0.1}>
                    <Link
                      to={`/${related.slug}`}
                      className="group relative block min-h-[200px] overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
                    >
                      {heroImages[related.slug] && (
                        <>
                          <img
                            src={heroImages[related.slug]}
                            alt={`${related.shortTitle} em Marabá`}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            width={400}
                            height={300}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                        </>
                      )}
                      <div className="relative flex h-full min-h-[200px] flex-col justify-end p-6">
                        <h3 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary">
                          {related.shortTitle}
                        </h3>
                        <p className="mb-3 font-body text-sm text-muted-foreground">
                          {related.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary">
                          Saiba mais <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={ctaBg} alt="" className="h-full w-full object-cover" loading="lazy" width={1920} height={800} aria-hidden="true" />
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.85)" }} />
          </div>
          <div className="container relative z-10 text-center">
            <ScrollReveal>
              <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
                Agende agora e transforme sua autoestima
              </h2>
              <p className="mx-auto mb-10 max-w-xl font-body text-lg text-muted-foreground">
                Entre em contato e agende sua avaliação personalizada com a Dra. Lorena Lacerda.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
              >
                <Button variant="cta" size="xl" className="animate-pulse-gold gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Agendar pelo WhatsApp
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
};
