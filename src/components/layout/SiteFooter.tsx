import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Facebook } from "lucide-react";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";

const whatsappLink = createWhatsAppLink("Oi, vim pelo site da Clínica Lacerda e gostaria de saber mais sobre os tratamentos disponíveis.");

const procedureLinks = [
  { href: "/harmonizacao-facial", label: "Harmonização Facial" },
  { href: "/toxina-botulinica-botox", label: "Toxina Botulínica" },
  { href: "/preenchimento-labial", label: "Preenchimento Labial" },
  { href: "/bioestimuladores-colageno", label: "Bioestimuladores" },
  { href: "/laser-co2-fracionado", label: "Laser CO2 Fracionado" },
  { href: "/tratamento-capilar", label: "Tratamento Capilar" },
  { href: "/epilacao-laser", label: "Epilação a Laser" },
  { href: "/skincare-manchas", label: "Skincare e Manchas" },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-heading text-2xl font-semibold text-primary">
              Clínica Lacerda
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              Medicina Estética com olhar humanizado.
              <br />
              Dra. Lorena Lacerda — CRM-PA 15626
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/dralorenalacerdaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Instagram da Dra. Lorena Lacerda"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Contato via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Facebook da Clínica Lacerda"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Procedures */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Procedimentos</h3>
            <ul className="space-y-2">
              {procedureLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                  Sobre a Dra. Lorena
                </Link>
              </li>
              <li>
                <Link to="/contato" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-3 font-body text-sm text-muted-foreground">
              <p>Marabá, PA</p>
              <p>
                <a href="tel:+5594991521617" className="transition-colors hover:text-primary">
                  (94) 99152-1617
                </a>
              </p>
              <p>Seg-Sex: 08:00 - 18:00</p>
              <p>Sáb: 08:00 - 12:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
            <p className="font-body text-xs text-muted-foreground">
              © {new Date().getFullYear()} Clínica Lacerda. Todos os direitos reservados.
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Os resultados podem variar de acordo com cada organismo. Consulte seu médico.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};