import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";

const whatsappLink = createWhatsAppLink("Oi, vim pelo Google e tenho interesse em Laser CO2 Fracionado.");

export const Doctor = () => {
  return (
    <section id="doutora" className="overflow-hidden bg-background py-20 md:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Frame */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-gold/20" />
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-rose-soft" />
            
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img 
                alt="Dra. Lorena Lacerda - Médica Especialista em Estética" 
                className="h-auto w-full object-cover" 
                src="/lovable-uploads/f67bd3a2-d4fb-49c3-b143-cbad83c9b0cc.jpg" 
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 bottom-8 rounded-xl border border-border bg-card p-4 shadow-card md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold">
                  <svg className="h-6 w-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-charcoal">CRM 15626</p>
                  <p className="text-sm text-muted-foreground">Médica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block font-medium uppercase tracking-widest text-gold">
              Sua Médica
            </span>
            <h2 className="mb-6 font-heading text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
              Dra. Lorena Lacerda
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Médica dedicada a oferecer um atendimento humanizado e personalizado. Acredito que cada paciente merece atenção individualizada e um plano de tratamento que respeite suas expectativas e características únicas.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Minha abordagem combina conhecimento científico atualizado com escuta ativa, 
              garantindo que você se sinta acolhido e bem informado durante todo o processo 
              de tratamento. Trabalho com transparência sobre o que cada procedimento pode 
              oferecer, sempre priorizando sua segurança e bem-estar.
            </p>

            {/* Credentials */}
            <div className="mb-8 flex flex-wrap gap-4">
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-charcoal">Formação em Medicina Estética</span>
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-charcoal">
                Especialista em Laser
              </span>
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-charcoal">
                Atendimento Humanizado
              </span>
            </div>

            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
            >
              <Button variant="cta" size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Agendar Consulta
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
