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
import { createWhatsAppLink, handleWhatsAppClick, PROCEDURE_WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { procedures, type ProcedureData } from "@/lib/procedures-data";

interface ProcedurePageProps {
  procedureSlug: string;
}

export const ProcedurePage = ({ procedureSlug }: ProcedurePageProps) => {
  const data = procedures[procedureSlug];
  if (!data) return null;

  const whatsappMessage = PROCEDURE_WHATSAPP_MESSAGES[procedureSlug] || PROCEDURE_WHATSAPP_MESSAGES.default;
  const whatsappLink = createWhatsAppLink(whatsappMessage);

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: data.title,
    description: data.metaDescription,
    lastReviewed: "2026-04-01",
    reviewedBy: {
      "@type": "Physician",
      name: "Dra. Lorena Lacerda",
      credential: "CRM 15626",
    },
    about: {
      "@type": "MedicalProcedure",
      name: data.shortTitle,
      procedureType: "NoninvasiveProcedure",
    },
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

  const relatedData = data.relatedProcedures
    .map((slug) => procedures[slug])
    .filter(Boolean);

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

      <main className="pt-20">
        {/* Breadcrumbs */}
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Procedimentos" },
              { label: data.shortTitle },
            ]}
          />
        </div>

        {/* Disclaimer */}
        <div className="container mt-2">
          <MedicalDisclaimer />
        </div>

        {/* Hero */}
        <section className="bg-gradient-hero py-16 lg:py-24">
          <div className="container text-center">
            <h1 className="animate-fade-up font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl animate-fade-up font-body text-lg text-muted-foreground opacity-0 stagger-1">
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
                  Agende sua Avaliação
                </Button>
              </a>
            </div>
            <p className="mt-4 font-body text-xs text-muted-foreground">
              Conteúdo por Dra. Lorena Lacerda — CRM 15626, Especialista em Medicina Estética
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Última atualização: Abril/2026
            </p>
          </div>
        </section>

        {/* What is it */}
        <section className="py-16 lg:py-20">
          <div className="container max-w-4xl">
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

            {data.indications.length > 0 && (
              <div className="mt-10">
                <h3 className="mb-4 font-heading text-2xl font-semibold text-foreground">
                  Para quem é indicado
                </h3>
                <ul className="space-y-3">
                  {data.indications.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-body text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-secondary py-16 lg:py-20">
          <div className="container">
            <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Benefícios
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <h3 className="mb-2 font-heading text-xl font-semibold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-20">
          <div className="container max-w-4xl">
            <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Como Funciona
            </h2>
            <div className="space-y-8">
              {data.steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {(data.sessionInfo || data.recoveryInfo) && (
              <div className="mt-10 flex flex-wrap gap-6">
                {data.sessionInfo && (
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-body text-sm text-muted-foreground">{data.sessionInfo}</span>
                  </div>
                )}
                {data.recoveryInfo && (
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <span className="font-body text-sm text-muted-foreground">{data.recoveryInfo}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary py-16 lg:py-20">
          <div className="container max-w-3xl">
            <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {data.faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="py-5 font-heading text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-body text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Procedures */}
        {relatedData.length > 0 && (
          <section className="py-16 lg:py-20">
            <div className="container">
              <h2 className="mb-10 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Você Também Pode se Interessar
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedData.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/${related.slug}`}
                    className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
                  >
                    <h3 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary">
                      {related.shortTitle}
                    </h3>
                    <p className="mb-4 font-body text-sm text-muted-foreground">
                      {related.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary">
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="bg-gradient-hero py-16 lg:py-24">
          <div className="container text-center">
            <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Agende agora e transforme sua autoestima
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-muted-foreground">
              Entre em contato e agende sua avaliação personalizada com a Dra. Lorena Lacerda.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
            >
              <Button variant="cta" size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Agendar pelo WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
};