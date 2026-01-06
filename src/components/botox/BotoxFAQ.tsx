import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O Botox dói?",
    answer:
      "O procedimento causa um leve desconforto, semelhante a pequenas picadas de agulha. Utilizamos agulhas ultrafinas e técnicas que minimizam a sensação. A maioria dos pacientes descreve como muito tolerável e a aplicação é rápida, durando cerca de 15 a 20 minutos.",
  },
  {
    question: "Quanto tempo dura o efeito do Botox?",
    answer:
      "O efeito do Botox dura em média de 4 a 6 meses, variando de acordo com o metabolismo de cada pessoa, área tratada e quantidade aplicada. Com aplicações regulares, muitos pacientes percebem que o efeito pode durar mais tempo.",
  },
  {
    question: "O resultado fica artificial?",
    answer:
      "Não! Na Clínica Lacerda, priorizamos um resultado natural que suaviza as rugas preservando suas expressões faciais. A técnica utilizada pela Dra. Lorena visa harmonizar sua aparência, não criar um aspecto 'congelado' ou artificial.",
  },
  {
    question: "Posso voltar às atividades normais após o procedimento?",
    answer:
      "Sim, o Botox é um procedimento ambulatorial que permite retorno imediato às atividades. Recomendamos apenas evitar exercícios físicos intensos, deitar-se ou massagear a região nas primeiras 4 horas após a aplicação.",
  },
];

export const BotoxFAQ = () => {
  return (
    <section id="duvidas" className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block font-medium uppercase tracking-widest text-gold">
              Dúvidas Frequentes
            </span>
            <h2 className="mb-6 font-heading text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Esclarecemos as principais dúvidas sobre o tratamento com Botox.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 shadow-card transition-all duration-300 data-[state=open]:border-gold/30 data-[state=open]:shadow-glow"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-lg font-semibold text-charcoal hover:no-underline [&[data-state=open]>svg]:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
