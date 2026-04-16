import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";

const whatsappLink = createWhatsAppLink("Oi, vim pelo Google e tenho interesse em Laser CO2 Fracionado.");

const navLinks = [
  { href: "#indicacoes", label: "Indicações" },
  { href: "#doutora", label: "Dra. Lorena" },
  { href: "#duvidas", label: "Dúvidas" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/95 py-4 shadow-card backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-heading text-2xl font-semibold text-charcoal">
          Clínica Lacerda
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-charcoal" />
          ) : (
            <Menu className="h-6 w-6 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-charcoal/80 transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleWhatsAppClick(e, whatsappLink);
              }}
            >
              <Button variant="whatsapp" className="w-full gap-2">
                <MessageCircle className="h-4 w-4" />
                Agendar pelo WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
