import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Shield, Clock, Syringe, Eye, User, ArrowRight, Target } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import { ScrollReveal } from "@/hooks/use-scroll-animation";
import { handleWhatsAppClick } from "@/lib/whatsapp";
import heroImg from "@/assets/proc-minilipo.jpg";
import consultaImg from "@/assets/minilipo-consulta.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const whatsappLink = "https://wa.me/5594991521617?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Mini%20Lipo%20Localizada.";

const areas = [
  { title: "Abdômen", desc: "Gordura abdominal resistente" },
  { title: "Flancos (Culotes)", desc: "Laterais do quadril e cintura" },
  { title: "Costas", desc: "Região das costas e dobras" },
  { title: "Braços", desc: "Acúmulo na parte interna dos braços" },
  { title: "Papada", desc: "Gordura abaixo do queixo" },
  { title: "Coxas", desc: "Parte interna e externa das coxas" },
];

const benefits = [
  { icon: Shield, title: "Resultado Definitivo", desc: "A gordura removida não retorna na área tratada" },
  { icon: Clock, title: "Recuperação Rápida", desc: "Retorno às atividades leves em 2-5 dias — sem internação" },
  { icon: Syringe, title: "Anestesia Local", desc: "Sem necessidade de anestesia geral — mais segurança e conforto" },
  { icon: CheckCircle, title: "Menos Trauma", desc: "Microcânulas causam menos hematomas e inchaço" },
  { icon: Eye, title: "Cicatrizes Mínimas", desc: "Incisões de 2-3mm que se tornam praticamente invisíveis" },
  { icon: User, title: "Contorno Natural", desc: "Remodelação precisa respeitando as proporções do corpo" },
];

const steps = [
  { title: "Avaliação Médica", desc: "Consulta completa para avaliar indicação, áreas a tratar e expectativas de resultado" },
  { title: "Exames Pré-Procedimento", desc: "Exames laboratoriais para garantir segurança total" },
  { title: "Marcação e Anestesia Local", desc: "Marcação precisa das áreas e aplicação de anestesia local — sem necessidade de anestesia geral" },
  { title: "Procedimento com Microcânulas", desc: "Aspiração da gordura localizada através de microincisões de 2-3mm — procedimento dura em média 1-2 horas" },
  { title: "Recuperação Rápida", desc: "Uso de cinta modeladora, repouso relativo de 24-48h e retorno às atividades leves em 2-5 dias" },
  { title: "Resultado Definitivo", desc: "Resultado visível progressivamente — resultado final entre 30-90 dias após redução completa do inchaço" },
];

const comparison = [
  { feature: "Instrumento", mini: "Microcânulas (finas)", trad: "Cânulas grandes" },
  { feature: "Anestesia", mini: "Local", trad: "Geral ou sedação" },
  { feature: "Incisões", mini: "2-3mm (mínimas)", trad: "Maiores" },
  { feature: "Recuperação", mini: "2-5 dias", trad: "2-4 semanas" },
  { feature: "Hematomas", mini: "Mínimos", trad: "Mais intensos" },
  { feature: "Trauma tecidual", mini: "Menor", trad: "Maior" },
  { feature: "Volume removido", mini: "Pequenas quantidades localizadas", trad: "Grandes volumes" },
  { feature: "Ambiente", mini: "Consultório/clínica", trad: "Centro cirúrgico" },
];

const faqs = [
  { q: "A mini lipo dói?", a: "O procedimento é feito com anestesia local, então durante a sessão você não sente dor. No pós-operatório, é normal sentir um desconforto leve a moderado nos primeiros 2-3 dias, semelhante a uma dor muscular, controlado com medicação prescrita pela Dra. Lorena." },
  { q: "Quanto tempo leva para ver o resultado final?", a: "O resultado começa a ser visível já na primeira semana, à medida que o inchaço diminui. O resultado final é alcançado entre 30 e 90 dias, quando o corpo completa a cicatrização e retração da pele." },
  { q: "A gordura volta depois da mini lipo?", a: "As células de gordura removidas não retornam. Porém, se o paciente ganhar peso significativo, as células restantes podem aumentar de volume. Manter hábitos saudáveis preserva o resultado de forma definitiva." },
  { q: "Quanto tempo de repouso preciso?", a: "A recuperação da mini lipo é muito mais rápida que a lipo tradicional. A maioria dos pacientes retorna às atividades leves em 2-5 dias. Atividades físicas intensas são liberadas após 2-3 semanas, conforme avaliação da Dra. Lorena." },
  { q: "Preciso usar cinta modeladora?", a: "Sim. A cinta compressiva é essencial na recuperação — ajuda na retração da pele, reduz o inchaço e melhora o contorno final. O tempo de uso varia entre 30-45 dias e é orientado pela Dra. Lorena." },
  { q: "Ficam cicatrizes?", a: "As incisões da mini lipo são de apenas 2-3mm, feitas em locais estratégicos e discretos. Com o tempo, tornam-se praticamente imperceptíveis." },
  { q: "Posso combinar com outros procedimentos?", a: "Sim. A mini lipo pode ser combinada com bioestimuladores de colágeno para melhorar a firmeza da pele na área tratada, ou com outros procedimentos corporais. A Dra. Lorena monta o protocolo combinado ideal na avaliação." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Mini Lipo Localizada em Marabá",
  description: "Mini lipoaspiração localizada com microcânulas — recuperação rápida e resultado definitivo. Dra. Lorena Lacerda em Marabá/PA",
  lastReviewed: "2026-04-01",
  reviewedBy: { "@type": "Physician", name: "Dra. Lorena Lacerda", credential: "CRM 15626" },
  about: { "@type": "MedicalProcedure", name: "Mini Lipoaspiração Localizada", procedureType: "SurgicalProcedure", howPerformed: "Aspiração de gordura localizada através de microcânulas com anestesia local" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const MiniLipo = () => (
  <>
    <Helmet>
      <title>Mini Lipo Localizada em Marabá - Clínica Lacerda | Dra. Lorena Lacerda</title>
      <meta name="description" content="Mini lipoaspiração localizada com microcânulas em Marabá/PA. Recuperação rápida, resultado definitivo. Dra. Lorena Lacerda — CRM 15626. Agende sua avaliação." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://clinicalacerda.com/mini-lipo-localizada" />
      <meta property="og:title" content="Mini Lipo Localizada em Marabá - Clínica Lacerda" />
      <meta property="og:description" content="Mini lipoaspiração com microcânulas. Recuperação rápida, resultado definitivo. Dra. Lorena Lacerda — CRM 15626." />
      <meta property="og:url" content="https://clinicalacerda.com/mini-lipo-localizada" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <SiteHeader />

    <main>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Mini Lipo Localizada em Marabá" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>
        <div className="container relative z-10 pb-16 pt-32">
          <Breadcrumbs items={[{ label: "Procedimentos" }, { label: "Mini Lipo Localizada" }]} />
          <h1 className="mt-4 animate-fade-up font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Mini Lipo Localizada em Marabá
          </h1>
          <p className="mt-4 max-w-2xl animate-fade-up font-body text-lg text-muted-foreground opacity-0 stagger-1">
            Reduza gordura localizada com microcânulas — recuperação rápida e resultado definitivo
          </p>
          <div className="mt-8 animate-fade-up opacity-0 stagger-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, whatsappLink)}>
              <Button variant="cta" size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Agende sua Consulta
              </Button>
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 font-body text-xs text-muted-foreground">
            <span>Conteúdo por Dra. Lorena Lacerda — CRM 15626</span>
            <span>Última atualização: Abril/2026</span>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="container mt-6">
        <MedicalDisclaimer />
      </div>

      {/* O que é */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="mb-8 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  O que é a Mini Lipo Localizada?
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>A mini lipo localizada é um procedimento minimamente invasivo que utiliza <strong className="text-foreground">microcânulas</strong> para remover pequenos depósitos de gordura em áreas específicas do corpo.</p>
                  <p>Diferente da lipoaspiração tradicional, a mini lipo é feita com <strong className="text-foreground">anestesia local</strong>, incisões mínimas (2-3mm) e <strong className="text-foreground">recuperação muito mais rápida</strong> — a maioria dos pacientes retorna às atividades em poucos dias.</p>
                  <p>É indicada para pacientes próximos do peso ideal que possuem gordura resistente a dieta e exercício. Não é um procedimento para emagrecimento — é uma técnica de <strong className="text-foreground">contorno e remodelação corporal</strong> com resultado definitivo.</p>
                  <p>As microcânulas causam menos trauma aos tecidos, resultando em menos inchaço, menos hematomas e maior conforto pós-operatório.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="overflow-hidden rounded-xl border border-border/50">
                <img src={consultaImg} alt="Consultório de medicina estética - Mini Lipo em Marabá" className="h-full w-full object-cover" loading="lazy" width={800} height={600} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Mini Lipo vs. Lipo Tradicional
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-xl border border-primary/20 md:block" style={{ background: "hsl(0 0% 6%)" }}>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="px-6 py-4 text-left font-heading text-sm font-semibold text-muted-foreground">Característica</th>
                    <th className="px-6 py-4 text-left font-heading text-sm font-semibold text-primary">Mini Lipo Localizada</th>
                    <th className="px-6 py-4 text-left font-heading text-sm font-semibold text-muted-foreground">Lipo Tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-border/30 last:border-0">
                      <td className="px-6 py-4 font-body text-sm font-medium text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 font-body text-sm text-primary">{row.mini}</td>
                      <td className="px-6 py-4 font-body text-sm text-muted-foreground">{row.trad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile cards */}
            <div className="space-y-4 md:hidden">
              {comparison.map((row, i) => (
                <div key={i} className="rounded-xl border border-border/50 p-4" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <p className="mb-2 font-heading text-sm font-semibold text-foreground">{row.feature}</p>
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Mini Lipo</p>
                      <p className="font-body text-sm text-primary">{row.mini}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-body text-xs text-muted-foreground">Tradicional</p>
                      <p className="font-body text-sm text-muted-foreground">{row.trad}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Áreas Tratadas */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Áreas Tratadas
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-xl border border-primary/10 p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-glow" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{a.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Benefícios da Mini Lipo
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-xl border border-primary/10 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-glow" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{b.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Como Funciona
            </h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
            <div className="space-y-10">
              {steps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="flex gap-6">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-glow">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">{s.title}</h3>
                      <p className="font-body text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem pode fazer */}
      <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="rounded-xl border border-primary/20 p-8 md:p-10" style={{ background: "rgba(200,169,110,0.05)" }}>
              <h2 className="mb-6 font-heading text-2xl font-semibold text-primary md:text-3xl">
                Quem pode fazer?
              </h2>
              <ul className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Indicada para pacientes com peso próximo do ideal que possuem <strong className="text-foreground">gordura localizada resistente</strong> a dieta e exercício</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Ideal para quem busca refinamento de contorno corporal, não emagrecimento</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Excelente opção para quem deseja <strong className="text-foreground">resultado definitivo com recuperação rápida</strong> e sem anestesia geral</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>A avaliação médica com a Dra. Lorena é essencial para confirmar a indicação</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Contraindicações incluem gravidez, distúrbios de coagulação e algumas condições avaliadas individualmente</span></li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Perguntas Frequentes
            </h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <AccordionItem value={`faq-${i}`} className="rounded-xl border border-border/50 px-6" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <AccordionTrigger className="py-5 font-heading text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-body text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 lg:py-24" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Você Também Pode se Interessar
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: "bioestimuladores-colageno", title: "Bioestimuladores", desc: "Complemento ideal para firmeza pós-lipo" },
              { slug: "harmonizacao-facial", title: "Harmonização Facial", desc: "Equilíbrio e proporção para o rosto" },
              { slug: "skincare-manchas", title: "Skincare e Manchas", desc: "Pele uniforme e radiante" },
            ].map((r, i) => (
              <ScrollReveal key={r.slug} delay={i * 0.1}>
                <Link to={`/${r.slug}`} className="group block rounded-xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-glow" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary">{r.title}</h3>
                  <p className="mb-3 font-body text-sm text-muted-foreground">{r.desc}</p>
                  <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={ctaBg} alt="" className="h-full w-full object-cover" loading="lazy" width={1920} height={800} aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.85)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Conquiste o contorno corporal que você deseja
            </h2>
            <p className="mx-auto mb-10 max-w-xl font-body text-lg text-muted-foreground">
              Agende sua avaliação e descubra se a mini lipo localizada é indicada para você
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, whatsappLink)}>
              <Button variant="cta" size="xl" className="animate-pulse-gold gap-2">
                <MessageCircle className="h-5 w-5" />
                Agendar no WhatsApp
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

export default MiniLipo;
