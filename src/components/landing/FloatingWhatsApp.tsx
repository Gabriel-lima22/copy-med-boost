import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de agendar uma avaliação.");

export const FloatingWhatsApp = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
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
