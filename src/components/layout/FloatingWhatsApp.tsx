import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";
import { useState } from "react";

const whatsappLink = createWhatsAppLink("Olá! Vim pelo site da Clínica Lacerda e gostaria de agendar uma avaliação.");

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg border border-border bg-card px-4 py-2 font-body text-sm text-foreground shadow-card">
          Fale conosco
          <div className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 border-b border-r border-border bg-card" />
        </div>
      )}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
        aria-label="Contato via WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="relative">
          {/* Pulse ring */}
          <div className="absolute inset-0 animate-ping rounded-full opacity-20" style={{ background: "#25D366" }} />
          <Button
            variant="whatsapp"
            size="icon"
            className="relative h-[60px] w-[60px] rounded-full shadow-lg"
            style={{ boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}
          >
            <MessageCircle className="h-7 w-7" />
          </Button>
        </div>
      </a>
    </div>
  );
};
