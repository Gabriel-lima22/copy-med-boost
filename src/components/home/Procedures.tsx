import { Sparkles, Syringe, User, Scissors, CircleDot, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const procedures = [
  {
    icon: Sparkles,
    title: "Laser CO2 Fracionado",
    description: "Tratamento avançado para suavização de manchas, melhora da textura da pele e atenuação de cicatrizes com tecnologia de última geração.",
    isExclusive: true,
    link: "/laser-co2",
  },
  {
    icon: Syringe,
    title: "Botox",
    description: "Suavização de linhas de expressão e rugas para um visual natural e rejuvenescido, com resultados precisos e seguros.",
    isExclusive: false,
  },
  {
    icon: User,
    title: "Preenchimento Facial",
    description: "Harmonização e contorno facial com ácido hialurônico para restaurar volume, definir contornos e rejuvenescer a aparência.",
    isExclusive: false,
  },
  {
    icon: Scissors,
    title: "Tratamento Capilar",
    description: "Soluções especializadas para saúde e fortalecimento dos fios, combatendo a queda capilar e estimulando o crescimento.",
    isExclusive: false,
  },
  {
    icon: CircleDot,
    title: "Modelação de Glúteos",
    description: "Procedimento estético para definição e contorno dos glúteos, proporcionando resultados naturais e harmoniosos.",
    isExclusive: false,
  },
  {
    icon: Scissors,
    title: "Lipoaspiração Localizada",
    description: "Remoção precisa de gordura localizada em áreas específicas do corpo, promovendo contornos mais definidos e proporcionais com recuperação rápida.",
    isExclusive: false,
  },
];

export const Procedures = () => {
  return (
    <section id="procedimentos" className="bg-secondary py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-wider text-primary">
            Nossos Tratamentos
          </span>
          <h2 className="mb-6 font-heading text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
            Procedimentos Especializados
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Oferecemos uma variedade de tratamentos dermatológicos e estéticos 
            com tecnologia avançada e supervisão médica especializada.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {procedures.map((procedure, index) => (
            <div
              key={procedure.title}
              className={`group relative rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${
                procedure.isExclusive ? "md:col-span-2 lg:col-span-1 ring-2 ring-gold/30" : ""
              }`}
            >
              {/* Exclusive Badge */}
              {procedure.isExclusive && (
                <Badge className="absolute -top-3 left-6 bg-gold text-charcoal hover:bg-gold/90">
                  Exclusivo
                </Badge>
              )}

              {/* Icon */}
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                procedure.isExclusive ? "bg-gold/20" : "bg-rose-soft"
              } transition-colors group-hover:bg-primary/20`}>
                <procedure.icon className={`h-7 w-7 ${
                  procedure.isExclusive ? "text-gold" : "text-primary"
                }`} />
              </div>

              {/* Content */}
              <h3 className="mb-3 font-heading text-xl font-semibold text-charcoal">
                {procedure.title}
              </h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                {procedure.description}
              </p>

              {/* Link for exclusive procedure */}
              {procedure.link && (
                <Link to={procedure.link}>
                  <Button variant="outline" size="sm" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Saiba mais
                    <Sparkles className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
