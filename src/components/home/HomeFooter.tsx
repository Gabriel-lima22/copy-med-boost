import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import { createWhatsAppLink, handleWhatsAppClick, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const whatsappLink = createWhatsAppLink("Oi, vim pelo site da Clínica Lacerda e gostaria de saber mais sobre os tratamentos disponíveis.");

export const HomeFooter = () => {
  return (
    <footer className="border-t border-border bg-charcoal text-background">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-heading text-2xl font-semibold">
              Clínica Lacerda
            </h3>
            <p className="mb-6 max-w-md text-background/70">
              Cuidado especializado em medicina estética, 
              com tecnologia avançada e atendimento humanizado pela Dra. Lorena Lacerda.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dralorenalacerda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
                aria-label="Instagram da Dra. Lorena Lacerda"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
                aria-label="WhatsApp da Clínica Lacerda"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Contato</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Marabá, PA</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Seg - Sex: 8h às 18h</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
                  className="transition-colors hover:text-primary"
                >
                  (94) 98173-5505
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="#procedimentos" className="transition-colors hover:text-primary">
                  Procedimentos
                </a>
              </li>
              <li>
                <a href="#doutora" className="transition-colors hover:text-primary">
                  Dra. Lorena
                </a>
              </li>
              <li>
                <a href="/laser-co2" className="transition-colors hover:text-primary">
                  Laser CO2 Fracionado
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10 py-6">
        <div className="container text-center text-sm text-background/50">
          <p>
            © {new Date().getFullYear()} Clínica Lacerda - Dra. Lorena Lacerda. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
