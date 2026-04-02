import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";

const whatsappLink = createWhatsAppLink("Olá! Gostaria de agendar uma avaliação para o tratamento com Botox.");

export const BotoxCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-soft py-20 md:py-28">
      {/* Decorative Elements */}
      <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-rose-medium opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/2 rounded-full bg-gold-light opacity-15 blur-3xl" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gold/20 bg-card p-8 text-center shadow-card md:p-12">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-soft px-4 py-2 text-sm font-medium text-charcoal">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Agende Sua Consulta
          </div>

          <h2 className="mb-4 font-heading text-3xl font-semibold text-charcoal md:text-4xl">
            Pronto para Rejuvenescer sua Pele?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Agende uma avaliação médica e converse com a Dra. Lorena Lacerda sobre 
            as melhores opções de tratamento para você. Atendimento personalizado 
            e sem compromisso.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
            >
              <Button variant="whatsapp" size="xl" className="gap-3">
                <MessageCircle className="h-5 w-5" />
                Agendar pelo WhatsApp
              </Button>
            </a>
          </div>

          {/* Additional Info */}
          <p className="mt-8 text-sm text-muted-foreground">
            <Phone className="mr-1 inline h-4 w-4" />
            Atendemos de segunda a sexta, das 9h às 18h
          </p>
        </div>
      </div>
    </section>
  );
};
