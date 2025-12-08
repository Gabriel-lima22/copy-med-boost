import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O procedimento com Laser CO2 Fracionado dói?",
    answer:
      "O tratamento pode causar certo desconforto, por isso utilizamos anestésico tópico antes da aplicação para minimizar qualquer sensação. Durante o procedimento, é comum sentir uma sensação de aquecimento ou leve ardência, que a maioria dos pacientes descreve como tolerável. Após a sessão, oferecemos orientações para seu conforto.",
  },
  {
    question: "Qual é o tempo de recuperação após o tratamento?",
    answer:
      "O período de recuperação varia de 5 a 10 dias, dependendo da intensidade do tratamento e da resposta individual de cada pele. Nos primeiros dias, é esperado vermelhidão, inchaço leve e descamação progressiva. É fundamental seguir as orientações médicas sobre cuidados pós-procedimento e proteção solar. Fornecemos um protocolo detalhado de recuperação para cada paciente.",
  },
  {
    question: "O Laser CO2 Fracionado é seguro?",
    answer:
      "Sim, quando realizado por médico especializado e com equipamento adequado, o Laser CO2 Fracionado é um procedimento seguro e amplamente utilizado na dermatologia. Na Clínica Lacerda, todo o tratamento é conduzido pela Dra. Lorena Lacerda, garantindo avaliação criteriosa antes do procedimento, parâmetros personalizados e acompanhamento durante a recuperação.",
  },
];

export const FAQ = () => {
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
              Esclarecemos as principais dúvidas sobre o tratamento com Laser CO2 Fracionado.
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
