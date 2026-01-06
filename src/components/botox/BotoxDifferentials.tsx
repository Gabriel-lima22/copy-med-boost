import { Shield, Sparkles, Users, HeartHandshake } from "lucide-react";

const differentials = [
  {
    icon: Sparkles,
    title: "Resultado Natural",
    description: "Técnica refinada que preserva suas expressões faciais, evitando o aspecto artificial ou congelado."
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Procedimento realizado exclusivamente por médica especializada, com produtos de alta qualidade."
  },
  {
    icon: HeartHandshake,
    title: "Avaliação Personalizada",
    description: "Análise facial completa antes do procedimento para definir os pontos ideais de aplicação."
  },
  {
    icon: Users,
    title: "Acompanhamento Pós",
    description: "Retorno de avaliação incluso para garantir o melhor resultado e realizar ajustes se necessário."
  }
];

export const BotoxDifferentials = () => {
  return (
    <section className="bg-rose-soft py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block font-medium uppercase tracking-widest text-gold">
            Diferenciais
          </span>
          <h2 className="mb-6 font-heading text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
            Por Que Escolher a{" "}
            <span className="text-primary">Clínica Lacerda</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Nossa estrutura e abordagem foram pensadas para oferecer o melhor cuidado com segurança e acolhimento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-glow"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold shadow-glow transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-7 w-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="mb-3 font-heading text-xl font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
