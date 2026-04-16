import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getWhatsAppLinkForRoute, handleWhatsAppClick } from "@/lib/whatsapp";

const procedureLinks = [
  { href: "/harmonizacao-facial", label: "Harmonização Facial" },
  { href: "/toxina-botulinica", label: "Toxina Botulínica" },
  { href: "/preenchimento-labial", label: "Preenchimento Labial" },
  { href: "/bioestimuladores-colageno", label: "Bioestimuladores" },
  { href: "/laser-co2-fracionado", label: "Laser CO2 Fracionado" },
  { href: "/tratamento-capilar", label: "Tratamento Capilar" },
  { href: "/epilacao-laser", label: "Epilação a Laser" },
  { href: "/skincare-manchas", label: "Skincare e Manchas" },
  { href: "/mini-lipo-localizada", label: "Mini Lipo Localizada" },
];

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProceduresOpen, setIsProceduresOpen] = useState(false);
  const location = useLocation();
  const whatsappLink = getWhatsAppLinkForRoute(location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProceduresOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/95 py-3 shadow-card backdrop-blur-md"
          : "bg-background/80 py-5 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl font-semibold text-primary">
          Clínica Lacerda
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Início
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsProceduresOpen(true)}
            onMouseLeave={() => setIsProceduresOpen(false)}
          >
            <button
              className="flex items-center gap-1 font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              onClick={() => setIsProceduresOpen(!isProceduresOpen)}
              aria-expanded={isProceduresOpen}
              aria-haspopup="true"
            >
              Procedimentos
              <ChevronDown className={`h-4 w-4 transition-transform ${isProceduresOpen ? "rotate-180" : ""}`} />
            </button>

            {isProceduresOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[240px] rounded-lg border border-border bg-popover p-2 shadow-card">
                  {procedureLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block rounded-md px-4 py-2.5 font-body text-sm text-popover-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/sobre"
            className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Contato
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
          >
            <Button variant="cta" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Agendar
            </Button>
          </a>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full max-h-[80vh] overflow-y-auto border-b border-border bg-background/98 backdrop-blur-md lg:hidden">
          <nav className="container flex flex-col gap-1 py-6">
            <Link
              to="/"
              className="rounded-md px-4 py-3 font-body text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              Início
            </Link>

            <button
              className="flex items-center justify-between rounded-md px-4 py-3 font-body text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
              onClick={() => setIsProceduresOpen(!isProceduresOpen)}
            >
              Procedimentos
              <ChevronDown className={`h-5 w-5 transition-transform ${isProceduresOpen ? "rotate-180" : ""}`} />
            </button>

            {isProceduresOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l border-border pl-4">
                {procedureLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="rounded-md px-4 py-2.5 font-body text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/sobre"
              className="rounded-md px-4 py-3 font-body text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className="rounded-md px-4 py-3 font-body text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              Contato
            </Link>

            <div className="mt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
              >
                <Button variant="cta" className="w-full gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Agendar pelo WhatsApp
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
