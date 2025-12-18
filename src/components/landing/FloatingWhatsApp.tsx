import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";

const whatsappLink = createWhatsAppLink("Olá! Gostaria de agendar uma avaliação.");

export const FloatingWhatsApp = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
      onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
    >
      <Button
        variant="whatsapp"
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
    </a>
  );
};
