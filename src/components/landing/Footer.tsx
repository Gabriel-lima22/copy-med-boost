import { MapPin, Phone, Mail, Instagram, Clock, MessageCircle } from "lucide-react";
const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de mais informações sobre a Clínica Lacerda.");
export const Footer = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-border bg-charcoal text-cream">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-heading text-2xl font-semibold">
              Clínica Lacerda
            </h3>
            <p className="mb-6 max-w-md text-sm leading-relaxed opacity-70">Medicina estética avançada com atendimento humanizado. Tratamentos personalizados para cuidar da saúde e beleza da sua pele com segurança e profissionalismo.</p>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-gold" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-gold" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>Rua Exemplo, 123 - Bairro<br />Cidade - Estado</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>​(94) 98173-5505
 </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>​Clinica.Lacerda@outlook.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Horários</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <div>
                  <p className="font-medium">Segunda a Sexta</p>
                  <p>9h às 18h</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <div>
                  <p className="font-medium">Sábado</p>
                  <p>9h às 13h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 text-center text-xs opacity-50 sm:flex-row sm:text-left">
          <p>© {currentYear} Clínica Lacerda. Todos os direitos reservados.</p>
          <p>Dra. Lorena Lacerda - CRM - PA: 15626 </p>
        </div>
      </div>
    </footer>;
};