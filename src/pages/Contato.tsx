import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Phone, Clock, Instagram } from "lucide-react";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";

const whatsappLink = createWhatsAppLink("Olá! Vim pelo site da Clínica Lacerda e gostaria de agendar uma avaliação.");

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato - Clínica Lacerda | Medicina Estética em Marabá</title>
        <meta name="description" content="Entre em contato com a Clínica Lacerda em Marabá/PA. Agende sua avaliação com a Dra. Lorena Lacerda — CRM 15626." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clinicalacerda.com/contato" />
        <meta property="og:title" content="Contato - Clínica Lacerda" />
        <meta property="og:description" content="Agende sua avaliação em Marabá/PA." />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteHeader />
      <main className="pt-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Contato" }]} />
        </div>

        <section className="py-12 lg:py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                Entre em Contato
              </h1>
              <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
                Agende sua avaliação ou tire suas dúvidas. Estamos prontos para atender você.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="rounded-xl border border-border bg-card p-8">
                  <h2 className="mb-6 font-heading text-2xl font-semibold text-foreground">
                    Informações
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-body text-sm font-medium text-foreground">Endereço</h3>
                        <p className="font-body text-sm text-muted-foreground">Marabá, PA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-body text-sm font-medium text-foreground">Telefone / WhatsApp</h3>
                        <a href="tel:+5594991521617" className="font-body text-sm text-muted-foreground hover:text-primary">(94) 99152-1617</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-body text-sm font-medium text-foreground">Horário</h3>
                        <p className="font-body text-sm text-muted-foreground">Seg-Sex: 08:00 - 18:00</p>
                        <p className="font-body text-sm text-muted-foreground">Sáb: 08:00 - 12:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Instagram className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-body text-sm font-medium text-foreground">Instagram</h3>
                        <a href="https://www.instagram.com/dralorenalacerdaa/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary">
                          @dralorenalacerdaa
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, whatsappLink)}>
                      <Button variant="cta" size="lg" className="w-full gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Falar pelo WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>

                <p className="font-body text-xs text-muted-foreground">
                  Dra. Lorena Lacerda — CRM-PA 15626 | Medicina Estética
                </p>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.91!2d-49.1178!3d-5.3686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c7a5b9515e7b%3A0x2e5e9d5a89d24b89!2sMarab%C3%A1%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica Lacerda em Marabá"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default Contato;