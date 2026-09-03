import { Button } from "@/components/ui/button";
import { MessageCircle, Award, GraduationCap, Heart } from "lucide-react";
import doctorImage from "@/assets/dra-lorena.webp";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";

const whatsappLink = createWhatsAppLink("Oi, vim pelo site da Clínica Lacerda e gostaria de saber mais sobre os tratamentos disponíveis.");

const credentials = [
  {
    icon: GraduationCap,
    title: "Formação",
    description: "Medicina Estética",
  },
  {
    icon: Award,
    title: "Especialização",
    description: "Medicina Estética",
  },
  {
    icon: Heart,
    title: "Abordagem",
    description: "Atendimento Humanizado",
  },
];

export const AboutDoctor = () => {
  return (
    <section id="doutora" className="bg-gradient-soft py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gold/20" />
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-primary/30" />
            
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={doctorImage}
                alt="Dra. Lorena Lacerda - Médica Especialista em Estética"
                className="h-full w-full object-cover aspect-[4/5]"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-background/95 p-4 backdrop-blur-sm shadow-soft">
                <p className="font-heading text-lg font-semibold text-charcoal">
                  Dra. Lorena Lacerda
                </p>
                <p className="text-sm text-muted-foreground">
                  CRM-PA 15626
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-wider text-primary">
              Conheça a Especialista
            </span>
            
            <h2 className="mb-6 font-heading text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
              Dra. Lorena{" "}
              <span className="text-gold">Lacerda</span>
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Médica especialista em Medicina Estética, dedicada ao cuidado integral da pele e à realização 
              de procedimentos estéticos com excelência e segurança. Com formação sólida 
              e atualização constante, oferece tratamentos personalizados que respeitam 
              a individualidade de cada paciente.
            </p>
            
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Sua abordagem combina conhecimento técnico avançado com sensibilidade e 
              acolhimento, garantindo resultados naturais e a satisfação dos pacientes 
              que buscam saúde, beleza e autoestima.
            </p>

            {/* Credentials */}
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {credentials.map((credential) => (
                <div key={credential.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-soft">
                    <credential.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">{credential.title}</p>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
            >
              <Button variant="whatsapp" size="lg" className="gap-3">
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
