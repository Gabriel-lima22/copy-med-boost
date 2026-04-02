import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, ClipboardList, Zap, Sparkles, Star, MapPin, Clock, Phone, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ScrollReveal } from "@/hooks/use-scroll-animation";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";
import { useState, useEffect, useCallback } from "react";
import draLorena from "@/assets/dra-lorena.jpg";
import heroHome from "@/assets/hero-home.jpg";
import bgTestimonials from "@/assets/bg-testimonials.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import procHarmonizacao from "@/assets/proc-harmonizacao.jpg";
import procBotox from "@/assets/proc-botox.jpg";
import procLabial from "@/assets/proc-labial.jpg";
import procBioestimuladores from "@/assets/proc-bioestimuladores.jpg";
import procLaser from "@/assets/proc-laser.jpg";
import procCapilar from "@/assets/proc-capilar.jpg";
import procEpilacao from "@/assets/proc-epilacao.jpg";
import procSkincare from "@/assets/proc-skincare.jpg";

const whatsappLink = createWhatsAppLink("Olá! Vim pelo site e gostaria de agendar uma avaliação.");

const procedureShortcuts = [
  { slug: "harmonizacao-facial", title: "Harmonização Facial", description: "Equilíbrio e proporção para o seu rosto", image: procHarmonizacao },
  { slug: "toxina-botulinica-botox", title: "Toxina Botulínica", description: "Suavize linhas de expressão", image: procBotox },
  { slug: "preenchimento-labial", title: "Preenchimento Labial", description: "Lábios naturais e definidos", image: procLabial },
  { slug: "bioestimuladores-colageno", title: "Bioestimuladores", description: "Rejuvenescimento de dentro pra fora", image: procBioestimuladores },
  { slug: "laser-co2-fracionado", title: "Laser CO2 Fracionado", description: "Renovação profunda da pele", image: procLaser },
  { slug: "tratamento-capilar", title: "Tratamento Capilar", description: "Combata a queda e fortaleça os fios", image: procCapilar },
  { slug: "epilacao-laser", title: "Epilação a Laser", description: "Depilação definitiva com tecnologia", image: procEpilacao },
  { slug: "skincare-manchas", title: "Skincare e Manchas", description: "Pele uniforme e radiante", image: procSkincare },
];

const differentials = [
  { icon: Heart, title: "Atendimento Humanizado", description: "Acolhimento e escuta atenta às suas necessidades e expectativas" },
  { icon: ClipboardList, title: "Protocolos Personalizados", description: "Cada tratamento é planejado de forma individualizada para você" },
  { icon: Zap, title: "Tecnologia de Ponta", description: "Equipamentos de última geração para resultados superiores" },
  { icon: Sparkles, title: "Resultados Naturais", description: "Técnicas que preservam sua identidade e realçam sua beleza" },
];

const testimonials = [
  { name: "Maria C.", text: "Amei o resultado da harmonização! Super natural e a Dra. Lorena é extremamente atenciosa.", procedure: "Harmonização Facial", stars: 5 },
  { name: "Ana P.", text: "O botox ficou perfeito, ninguém percebe que fiz. Resultado super natural como eu queria.", procedure: "Toxina Botulínica", stars: 5 },
  { name: "Juliana S.", text: "Fiz o Laser CO2 e minha pele melhorou muito! As manchas clarearam bastante. Recomendo demais.", procedure: "Laser CO2 Fracionado", stars: 5 },
  { name: "Camila R.", text: "O atendimento é incrível, me senti muito segura. Os resultados superaram minhas expectativas!", procedure: "Preenchimento Labial", stars: 5 },
  { name: "Fernanda L.", text: "Profissional maravilhosa! Fez toda a diferença na minha autoestima. Consultório lindo e acolhedor.", procedure: "Bioestimuladores", stars: 5 },
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Clínica Lacerda",
  description: "Clínica de Medicina Estética em Marabá/PA — Dra. Lorena Lacerda",
  url: "https://clinicalacerda.com",
  telephone: "+5594991521617",
  address: { "@type": "PostalAddress", addressLocality: "Marabá", addressRegion: "PA", addressCountry: "BR" },
  geo: { "@type": "GeoCoordinates", latitude: "-5.3686", longitude: "-49.1178" },
  medicalSpecialty: "PlasticSurgery",
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-12:00",
  sameAs: [
    "https://www.instagram.com/dralorenalacerdaa",
    "https://www.doctoralia.com.br/lorena-lacerda-2/especialista-em-medicina-estetica/maraba",
  ],
};

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

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
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroHome}
              alt="Medicina Estética Marabá - Clínica Lacerda"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/75 to-background/40" />
          </div>
          <div className="container relative z-10 py-32">
            <div className="max-w-2xl">
              <h1 className="animate-fade-up font-heading text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
                Realce sua beleza de forma
                <span className="block text-primary"> natural e segura</span>
              </h1>
              <p className="mt-6 animate-fade-up font-body text-lg text-muted-foreground opacity-0 stagger-1 md:text-xl">
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
          </div>
        </section>

        {/* Procedure Shortcuts */}
        <section className="py-20 lg:py-28" style={{ background: "hsl(0 0% 7%)" }}>
          <div className="container">
            <ScrollReveal>
              <div className="mb-14 text-center">
                <span className="mb-3 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                  Nossos Tratamentos
                </span>
                <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
                  Procedimentos Especializados
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {procedureShortcuts.map((proc, i) => (
                <ScrollReveal key={proc.slug} delay={i * 0.1}>
                  <Link
                    to={`/${proc.slug}`}
                    className="group relative block min-h-[280px] overflow-hidden rounded-xl border border-border/50 transition-all duration-400 hover:border-primary/40 hover:shadow-glow"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={proc.image}
                        alt={`${proc.title} em Marabá - Dra. Lorena Lacerda`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30 transition-all duration-300 group-hover:from-background/90 group-hover:via-background/60" />
                    </div>
                    {/* Content */}
                    <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6">
                      <h3 className="mb-2 font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                        {proc.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {proc.description}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Doctor */}
        <section id="doutora" className="py-20 lg:py-28" style={{ background: "hsl(0 0% 6%)" }}>
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <ScrollReveal>
                <div className="relative">
                  {/* SUBSTITUIR: foto real da Dra. Lorena */}
                  <div className="aspect-[3/4] overflow-hidden rounded-lg" style={{ border: "2px solid hsl(var(--primary))" }}>
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
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <span className="mb-3 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                    Sobre
                  </span>
                  <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Dra. Lorena Lacerda
                  </h2>
                  {/* Decorative quote */}
                  <div className="mb-6 border-l-2 border-primary/40 pl-6">
                    <p className="font-heading text-xl italic text-foreground/80">
                      "Minha missão é cuidar da sua autoestima através de protocolos personalizados, tecnologia de ponta e acompanhamento próximo."
                    </p>
                  </div>
                  <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                    <p>
                      Médica formada pela UNIRG (Universidade de Gurupi), com experiência adquirida no Hospital Universitário de Araguaína. Atua com dedicação exclusiva à Medicina Estética em Marabá/PA.
                    </p>
                    <p>
                      Com foco em resultados naturais e seguros, a Dra. Lorena combina conhecimento técnico atualizado com um olhar humanizado para cada paciente.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link to="/sobre">
                      <Button variant="ctaOutline" className="gap-2">
                        Saiba mais sobre a Dra. Lorena
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Differentials — Glassmorphism */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <ScrollReveal>
              <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Por que escolher a <span className="text-primary">Clínica Lacerda</span>
              </h2>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {differentials.map((diff, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group rounded-xl border border-primary/10 p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <diff.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                      {diff.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {diff.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgTestimonials}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              width={1920}
              height={800}
              aria-hidden="true"
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.85)" }} />
          </div>
          <div className="container relative z-10">
            <ScrollReveal>
              <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
                O que dizem nossos pacientes
              </h2>
            </ScrollReveal>

            {/* Carousel */}
            <div className="mx-auto max-w-3xl">
              <div className="relative">
                <Quote className="mx-auto mb-6 h-10 w-10 text-primary/40" />
                <div className="min-h-[180px]">
                  <p className="mb-6 text-center font-body text-lg italic leading-relaxed text-foreground/90 transition-opacity duration-500">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {Array.from({ length: testimonials[currentTestimonial].stars }).map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-center font-body text-sm font-medium text-foreground">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-center font-body text-xs text-muted-foreground">
                    {testimonials[currentTestimonial].procedure}
                  </p>
                </div>

                {/* Nav buttons */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentTestimonial(i)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? "w-6 bg-primary" : "bg-muted-foreground/30"}`}
                        aria-label={`Depoimento ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 lg:py-28" style={{ background: "hsl(0 0% 7%)" }}>
          <div className="container">
            <ScrollReveal>
              <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Localização
              </h2>
            </ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <ScrollReveal>
                <div className="overflow-hidden rounded-xl border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.91!2d-49.1178!3d-5.3686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c7a5b9515e7b%3A0x2e5e9d5a89d24b89!2sMarab%C3%A1%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Clínica Lacerda em Marabá"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex flex-col justify-center space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">Endereço</h3>
                      <p className="font-body text-sm text-muted-foreground">Marabá, PA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">Telefone / WhatsApp</h3>
                      <a href="tel:+5594991521617" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                        (94) 99152-1617
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
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
                    <Button variant="cta" size="lg" className="mt-4 gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Agendar pelo WhatsApp
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={ctaBg}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              width={1920}
              height={800}
              aria-hidden="true"
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.8)" }} />
          </div>
          <div className="container relative z-10 text-center">
            <ScrollReveal>
              <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
                Transforme sua autoestima hoje
              </h2>
              <p className="mx-auto mb-10 max-w-xl font-body text-lg text-muted-foreground">
                Agende sua avaliação personalizada com a Dra. Lorena Lacerda e descubra o tratamento ideal para você.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleWhatsAppClick(e, whatsappLink)}
              >
                <Button variant="cta" size="xl" className="animate-pulse-gold gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Agendar pelo WhatsApp
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default Home;
