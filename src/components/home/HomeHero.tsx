import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";

const whatsappLink = createWhatsAppLink("Oi, vim pelo site da Clínica Lacerda e gostaria de saber mais sobre os tratamentos disponíveis.");

export const HomeHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-rose-medium opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-gold-light opacity-20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-soft opacity-40 blur-3xl" />

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center py-20">
        {/* Badge */}
        <div className="mb-8 animate-fade-up opacity-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream px-4 py-2 text-sm font-medium text-charcoal">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Medicina Estética
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-5xl animate-fade-up text-center font-heading text-4xl font-semibold leading-tight text-charcoal opacity-0 stagger-1 md:text-5xl lg:text-7xl">
          Clínica{" "}
          <span className="text-gold">
            Lacerda
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mb-4 animate-fade-up text-center font-heading text-xl text-primary opacity-0 stagger-2 md:text-2xl">
          Dra. Lorena Lacerda
        </p>

        <p className="mb-10 max-w-2xl animate-fade-up text-center text-lg leading-relaxed text-muted-foreground opacity-0 stagger-2 md:text-xl">
          Cuidado especializado em medicina estética facial e corporal, 
          com tecnologia avançada e atendimento humanizado.
        </p>

        {/* CTA Buttons */}
        <div className="flex animate-fade-up flex-col items-center gap-4 opacity-0 stagger-3 sm:flex-row">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
          >
            <Button variant="whatsapp" size="xl" className="gap-3">
              <MessageCircle className="h-5 w-5" />
              Agendar Consulta
            </Button>
          </a>
          <a href="#procedimentos">
            <Button variant="heroOutline" size="lg" className="gap-2">
              Ver Procedimentos
              <ArrowDown className="h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex animate-fade-up flex-wrap items-center justify-center gap-8 opacity-0 stagger-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span>Médica Especialista em Estética</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span>Atendimento Personalizado</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span>Tecnologia Avançada</span>
          </div>
        </div>
      </div>
    </section>
  );
};
