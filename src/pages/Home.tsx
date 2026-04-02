import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, User, Sparkles, Shield, Star, MapPin, Clock, Phone } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";
import draLorena from "@/assets/dra-lorena.jpg";

const whatsappLink = createWhatsAppLink("Olá! Vim pelo site e gostaria de agendar uma avaliação.");

const procedureShortcuts = [
  { slug: "harmonizacao-facial", title: "Harmonização Facial", description: "Equilíbrio e proporção para o seu rosto" },
  { slug: "toxina-botulinica-botox", title: "Toxina Botulínica", description: "Suavize linhas de expressão" },
  { slug: "preenchimento-labial", title: "Preenchimento Labial", description: "Lábios naturais e definidos" },
  { slug: "bioestimuladores-colageno", title: "Bioestimuladores", description: "Rejuvenescimento de dentro pra fora" },
  { slug: "laser-co2-fracionado", title: "Laser CO2 Fracionado", description: "Renovação profunda da pele" },
  { slug: "tratamento-capilar", title: "Tratamento Capilar", description: "Combata a queda e fortaleça os fios" },
  { slug: "epilacao-laser", title: "Epilação a Laser", description: "Depilação definitiva com tecnologia" },
  { slug: "skincare-manchas", title: "Skincare e Manchas", description: "Pele uniforme e radiante" },
];

const differentials = [
  { icon: Heart, title: "Atendimento Humanizado", description: "Acolhimento e escuta atenta às suas necessidades e expectativas" },
  { icon: User, title: "Protocolos Personalizados", description: "Cada tratamento é planejado de forma individualizada para você" },
  { icon: Sparkles, title: "Tecnologia de Ponta", description: "Equipamentos de última geração para resultados superiores" },
  { icon: Shield, title: "Resultados Naturais", description: "Técnicas que preservam sua identidade e realçam sua beleza" },
];

const testimonials = [
  { name: "Maria C.", text: "Amei o resultado da harmonização! Super natural e a Dra. Lorena é extremamente atenciosa.", procedure: "Harmonização Facial", stars: 5 },
  { name: "Ana P.", text: "O botox ficou perfeito, ninguém percebe que fiz. Resultado super natural como eu queria.", procedure: "Toxina Botulínica", stars: 5 },
  { name: "Juliana S.", text: "Fiz o Laser CO2 e minha pele melhorou muito! As manchas clarearam bastante. Recomendo demais.", procedure: "Laser CO2 Fracionado", stars: 5 },
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Clínica Lacerda",
  description: "Clínica de Medicina Estética em Marabá/PA — Dra. Lorena Lacerda",
  url: "https://clinicalacerda.com",
  telephone: "+5594991521617",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marabá",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: "-5.3686", longitude: "-49.1178" },
  medicalSpecialty: "Dermatology",
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-12:00",
  sameAs: [
    "https://www.instagram.com/dralorenalacerdaa",
    "https://www.doctoralia.com.br/lorena-lacerda-2/especialista-em-medicina-estetica/maraba",
  ],
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Clínica Lacerda | Dra. Lorena Lacerda - Medicina Estética em Marabá</title>
        <meta name="description" content="Clínica Lacerda — Medicina Estética em Marabá/PA com Dra. Lorena Lacerda (CRM 15626). Harmonização facial, botox, laser CO2 e mais. Agende sua avaliação." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clinicalacerda.com" />
        <meta property="og:title" content="Clínica Lacerda | Medicina Estética em Marabá" />
        <meta property="og:description" content="Medicina Estética com olhar humanizado. Dra. Lorena Lacerda — CRM 15626." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinicalacerda.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>

      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen items-center bg-gradient-hero pt-20">
          <div className="absolute inset-0 bg-background/60" />
          <div className="container relative z-10 py-20 text-center">
            <h1 className="animate-fade-up font-heading text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
              Realce sua beleza de forma
              <span className="block text-primary"> natural e segura</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl animate-fade-up font-body text-lg text-muted-foreground opacity-0 stagger-1 md:text-xl">
              Dra. Lorena Lacerda — Medicina Estética com olhar humanizado
            </p>
            <div className="mt-10 animate-fade-up opacity-0 stagger-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
              >
                <Button variant="cta" size="xl" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Agende sua Avaliação
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Procedure Shortcuts */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                Nossos Tratamentos
              </span>
              <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
                Procedimentos Especializados
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {procedureShortcuts.map((proc, i) => (
                <Link
                  key={proc.slug}
                  to={`/${proc.slug}`}
                  className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
                >
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {proc.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {proc.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Doctor */}
        <section id="doutora" className="py-16 lg:py-24">
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                  <img
                    src={draLorena}
                    alt="Dra. Lorena Lacerda - Médica Especialista em Medicina Estética em Marabá"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={600}
                    height={800}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-card p-4 shadow-card">
                  <p className="font-heading text-lg font-semibold text-primary">CRM-PA 15626</p>
                  <p className="font-body text-xs text-muted-foreground">Medicina Estética</p>
                </div>
              </div>

              <div>
                <span className="mb-3 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                  Sobre
                </span>
                <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  Dra. Lorena Lacerda
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Médica formada pela UNIRG (Universidade de Gurupi), com experiência adquirida no Hospital Universitário de Araguaína. Atua com dedicação exclusiva à Medicina Estética em Marabá/PA.
                  </p>
                  <p className="italic text-foreground/80">
                    "Minha missão é cuidar da sua autoestima através de protocolos personalizados, tecnologia de ponta e acompanhamento próximo."
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/sobre">
                    <Button variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                      Saiba mais sobre a Dra. Lorena
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container">
            <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Por que escolher a Clínica Lacerda
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {differentials.map((diff, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-soft"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <diff.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                    {diff.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              O que dizem nossos pacientes
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-soft"
                >
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-4 font-body text-sm italic text-muted-foreground leading-relaxed">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">{t.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.procedure}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container">
            <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Localização
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.91!2d-49.1178!3d-5.3686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c7a5b9515e7b%3A0x2e5e9d5a89d24b89!2sMarab%C3%A1%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica Lacerda em Marabá"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">Endereço</h3>
                    <p className="font-body text-sm text-muted-foreground">Marabá, PA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">Telefone / WhatsApp</h3>
                    <a href="tel:+5594991521617" className="font-body text-sm text-muted-foreground hover:text-primary">
                      (94) 99152-1617
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">Horário</h3>
                    <p className="font-body text-sm text-muted-foreground">Seg-Sex: 08:00 - 18:00</p>
                    <p className="font-body text-sm text-muted-foreground">Sáb: 08:00 - 12:00</p>
                  </div>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
                >
                  <Button variant="cta" className="mt-4 gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Agendar pelo WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default Home;