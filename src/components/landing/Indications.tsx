import { Sparkles, Sun, Scissors } from "lucide-react";

const indications = [
  {
    icon: Sun,
    title: "Melasma",
    description:
      "O Laser CO2 Fracionado atua estimulando a renovação celular e promovendo a melhora gradual das manchas, trabalhando em conjunto com protocolos de tratamento complementares para resultados mais efetivos.",
  },
  {
    icon: Sparkles,
    title: "Rejuvenescimento Facial",
    description:
      "A tecnologia estimula a produção natural de colágeno, contribuindo para a suavização de linhas finas e melhora da textura e firmeza da pele ao longo das sessões de tratamento.",
  },
  {
    icon: Scissors,
    title: "Cicatrizes de Acne e Pós-Cirúrgicas",
    description:
      "O laser promove a remodelação do tecido cicatricial, auxiliando na atenuação de cicatrizes e irregularidades na superfície da pele com abordagem progressiva e segura.",
  },
];

export const Indications = () => {
  return (
    <section id="indicacoes" className="bg-gradient-soft py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block font-medium uppercase tracking-widest text-gold">
            Indicações
          </span>
          <h2 className="mb-6 font-heading text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
            Para Quem é Indicado o{" "}
            <span className="text-primary">Laser CO2 Fracionado</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            O tratamento é indicado para diferentes necessidades dermatológicas, 
            sempre com avaliação médica prévia individualizada.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {indications.map((indication, index) => (
            <div
              key={indication.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex rounded-xl bg-rose-soft p-4">
                <indication.icon className="h-7 w-7 text-rose-deep" />
              </div>

              {/* Content */}
              <h3 className="mb-4 font-heading text-2xl font-semibold text-charcoal">
                {indication.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {indication.description}
              </p>

              {/* Decorative Gradient */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gold opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
