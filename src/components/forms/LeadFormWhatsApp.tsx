import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { trackLeadFormSubmit } from "@/lib/analytics";

interface LeadFormWhatsAppProps {
  /** Nome do procedimento, usado na mensagem e no evento de rastreamento. */
  procedure: string;
  /** Numero que vai receber o lead. */
  whatsappNumber: string;
}

/** So os digitos, para validar e montar a mensagem. */
const onlyDigits = (v: string) => v.replace(/\D/g, "");

/** (94) 99999-9999 conforme o usuario digita. */
const maskPhone = (v: string) => {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

/**
 * Captacao de lead sem backend.
 *
 * O site e estatico — nao ha servidor nem banco para receber um POST. Entao o
 * formulario valida os dados, registra o evento `lead_form_submit` no dataLayer
 * do GTM e abre o WhatsApp com a mensagem ja escrita, incluindo o nome. O lead
 * chega de fato na clinica e o envio fica mensuravel, sem infra nova e sem que
 * dado de saude passe por terceiro.
 *
 * O `window.open` fica no proprio handler do submit (gesto do usuario), senao o
 * bloqueador de pop-up do navegador barra a abertura.
 */
export const LeadFormWhatsApp = ({ procedure, whatsappNumber }: LeadFormWhatsAppProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanName = name.trim();
    const digits = onlyDigits(phone);

    if (cleanName.length < 2) return setError("Por favor, informe seu nome.");
    if (digits.length < 10) return setError("Informe um WhatsApp com DDD, ex: (94) 99999-9999.");
    if (!consent) return setError("É preciso concordar com o contato para continuar.");

    setError(null);
    trackLeadFormSubmit(procedure);

    const message =
      `Oi, meu nome é ${cleanName}. Vim pelo site da Clínica Lacerda e gostaria de ` +
      `agendar uma avaliação para ${procedure}. Meu WhatsApp é ${maskPhone(phone)}.`;

    window.open(createWhatsAppLink(message, whatsappNumber), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div
        className="rounded-xl p-8 text-center"
        style={{ background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.3)" }}
      >
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
          Tudo certo, {name.trim().split(" ")[0]}!
        </h3>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">
          Abrimos o WhatsApp com sua mensagem pronta. Se a janela não abriu, o bloqueador de
          pop-up do navegador pode ter impedido — toque no botão abaixo.
        </p>
        <a
          href={createWhatsAppLink(
            `Oi, meu nome é ${name.trim()}. Vim pelo site da Clínica Lacerda e gostaria de agendar uma avaliação para ${procedure}.`,
            whatsappNumber
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block"
        >
          <Button variant="cta" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Abrir o WhatsApp
          </Button>
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl p-8"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,169,110,0.15)" }}
    >
      <div className="space-y-5">
        <div>
          <Label htmlFor="lead-nome" className="font-body text-sm text-foreground">
            Nome
          </Label>
          <Input
            id="lead-nome"
            name="nome"
            type="text"
            autoComplete="name"
            placeholder="Como podemos te chamar?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="lead-whatsapp" className="font-body text-sm text-foreground">
            WhatsApp
          </Label>
          <Input
            id="lead-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="(94) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
            className="mt-2"
          />
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="lead-consent"
            checked={consent}
            onCheckedChange={(v) => setConsent(v === true)}
            className="mt-0.5"
          />
          <Label
            htmlFor="lead-consent"
            className="font-body text-xs font-normal leading-relaxed text-muted-foreground"
          >
            Autorizo a Clínica Lacerda a entrar em contato comigo por WhatsApp sobre esta
            solicitação, conforme a{" "}
            <Link to="/politica-privacidade" className="text-primary underline">
              Política de Privacidade
            </Link>
            .
          </Label>
        </div>

        {error && (
          <p role="alert" className="font-body text-sm text-destructive">
            {error}
          </p>
        )}

        <Button type="submit" variant="cta" size="lg" className="w-full gap-2">
          <MessageCircle className="h-5 w-5" />
          Quero ser avaliada
        </Button>

        <p className="font-body text-xs leading-relaxed text-muted-foreground">
          Ao enviar, abrimos o WhatsApp com sua mensagem já escrita. O envio não constitui
          agendamento nem avaliação médica — a indicação depende de consulta presencial.
        </p>
      </div>
    </form>
  );
};
