import { Helmet } from "react-helmet-async";
import { SeoHead } from "@/components/SeoHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageCircle, CheckCircle, Shield, Clock, Syringe, Eye, User, ArrowRight, Target,
  Stethoscope, FileText, Crosshair, Activity, Heart, Award, BadgeCheck, Sparkles, Check, Circle,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MedicalDisclaimer } from "@/components/layout/MedicalDisclaimer";
import { ScrollReveal } from "@/hooks/use-scroll-animation";
import { handleWhatsAppClick } from "@/lib/whatsapp";

// Images
import heroImg from "@/assets/minilipo-hero.webp";
import whatImg from "@/assets/minilipo-what.webp";
import tableBg from "@/assets/minilipo-table-bg.webp";
import benefitsBg from "@/assets/minilipo-benefits-bg.webp";
import timelineBg from "@/assets/minilipo-timeline-bg.webp";
import step1Img from "@/assets/minilipo-step1.webp";
import step4Img from "@/assets/minilipo-step4.webp";
import step6Img from "@/assets/minilipo-step6.webp";
import whoCanDoImg from "@/assets/minilipo-whocando.webp";
import faqImg from "@/assets/minilipo-faq.webp";
import ctaImg from "@/assets/minilipo-cta.webp";
import areaAbdomen from "@/assets/area-abdomen.webp";
import areaPapada from "@/assets/area-papada.webp";
import areaFlancos from "@/assets/area-flancos.webp";
import areaCostas from "@/assets/area-costas.webp";
import areaBracos from "@/assets/area-bracos.webp";
import areaCoxas from "@/assets/area-coxas.webp";

const whatsappLink = "https://wa.me/5594992693532?text=Oi%2C%20vim%20pelo%20Google%20e%20tenho%20interesse%20em%20Mini%20Lipo%20Localizada.";

const areas = [
  { title: "Abdômen", desc: "Gordura abdominal resistente", image: areaAbdomen },
  { title: "Flancos", desc: "Laterais do quadril e cintura", image: areaFlancos },
  { title: "Costas", desc: "Região das costas e dobras", image: areaCostas },
  { title: "Braços", desc: "Parte interna dos braços", image: areaBracos },
  { title: "Papada", desc: "Gordura abaixo do queixo", image: areaPapada },
  { title: "Coxas", desc: "Parte interna e externa", image: areaCoxas },
];

const benefits = [
  { icon: BadgeCheck, title: "Resultado Definitivo", desc: "A gordura removida não retorna na área tratada" },
  { icon: Clock, title: "Recuperação Rápida", desc: "Retorno às atividades leves em 2-5 dias — sem internação" },
  { icon: Heart, title: "Anestesia Local", desc: "Sem necessidade de anestesia geral — mais segurança e conforto" },
  { icon: Shield, title: "Menos Trauma", desc: "Microcânulas causam menos hematomas e inchaço" },
  { icon: Eye, title: "Cicatrizes Mínimas", desc: "Incisões de 2-3mm que se tornam praticamente invisíveis" },
  { icon: Sparkles, title: "Contorno Natural", desc: "Remodelação precisa respeitando as proporções do corpo" },
];

const timelineSteps = [
  { icon: Stethoscope, title: "Avaliação Médica", desc: "Consulta completa para avaliar indicação, áreas a tratar e expectativas de resultado", image: step1Img },
  { icon: FileText, title: "Exames Pré-Procedimento", desc: "Exames laboratoriais para garantir segurança total" },
  { icon: Crosshair, title: "Marcação e Anestesia Local", desc: "Marcação precisa das áreas e aplicação de anestesia local" },
  { icon: Activity, title: "Procedimento com Microcânulas", desc: "Aspiração da gordura localizada através de microincisões de 2-3mm — duração de 1-2 horas", image: step4Img },
  { icon: Heart, title: "Recuperação Rápida", desc: "Uso de cinta modeladora, repouso relativo de 24-48h e retorno às atividades leves em 2-5 dias" },
  { icon: Award, title: "Resultado Definitivo", desc: "Resultado visível progressivamente — resultado final entre 30-90 dias", image: step6Img },
];

const comparison = [
  { feature: "Instrumento", mini: "Microcânulas (finas)", trad: "Cânulas grandes" },
  { feature: "Anestesia", mini: "Local", trad: "Geral ou sedação" },
  { feature: "Incisões", mini: "2-3mm (mínimas)", trad: "Maiores" },
  { feature: "Recuperação", mini: "2-5 dias", trad: "2-4 semanas" },
  { feature: "Hematomas", mini: "Mínimos", trad: "Mais intensos" },
  { feature: "Trauma tecidual", mini: "Menor", trad: "Maior" },
  { feature: "Volume removido", mini: "Quantidades localizadas", trad: "Grandes volumes" },
  { feature: "Ambiente", mini: "Consultório/clínica", trad: "Centro cirúrgico" },
];

const faqs = [
  { q: "A mini lipo dói?", a: "O procedimento é feito com anestesia local, então durante a sessão você não sente dor. No pós-operatório, é normal sentir um desconforto leve a moderado nos primeiros 2-3 dias, semelhante a uma dor muscular, controlado com medicação prescrita pela Dra. Lorena." },
  { q: "Quanto tempo leva para ver o resultado final?", a: "O resultado começa a ser visível já na primeira semana, à medida que o inchaço diminui. O resultado final é alcançado entre 30 e 90 dias, quando o corpo completa a cicatrização e retração da pele." },
  { q: "A gordura volta depois da mini lipo?", a: "As células de gordura removidas não retornam. Porém, se o paciente ganhar peso significativo, as células restantes podem aumentar de volume. Manter hábitos saudáveis preserva o resultado de forma definitiva." },
  { q: "Quanto tempo de repouso preciso?", a: "A maioria dos pacientes retorna às atividades leves em 2-5 dias. Atividades físicas intensas são liberadas após 2-3 semanas, conforme avaliação da Dra. Lorena." },
  { q: "Preciso usar cinta modeladora?", a: "Sim. A cinta compressiva é essencial na recuperação — ajuda na retração da pele, reduz o inchaço e melhora o contorno final. O tempo de uso varia entre 30-45 dias." },
  { q: "Ficam cicatrizes?", a: "As incisões da mini lipo são de apenas 2-3mm, feitas em locais estratégicos e discretos. Com o tempo, tornam-se praticamente imperceptíveis." },
  { q: "Posso combinar com outros procedimentos?", a: "Sim. A mini lipo pode ser combinada com bioestimuladores de colágeno para melhorar a firmeza da pele na área tratada. A Dra. Lorena monta o protocolo combinado ideal na avaliação." },
];

const schema = {
  "@context": "https://schema.org", "@type": "MedicalWebPage",
  name: "Mini Lipo Localizada em Marabá",
  description: "Mini lipoaspiração localizada com microcânulas — recuperação rápida e resultado definitivo. Dra. Lorena Lacerda em Marabá/PA",
  lastReviewed: "2026-04-01",
  reviewedBy: { "@type": "Physician", name: "Dra. Lorena Lacerda", credential: "CRM 15626" },
  about: { "@type": "MedicalProcedure", name: "Mini Lipoaspiração Localizada", procedureType: "SurgicalProcedure" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const MiniLipo = () => (
  <>
    <SeoHead path="/mini-lipo-localizada" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <SiteHeader />

    <main>
      {/* ═══ HERO — 85vh desktop, golden curves bg ═══ */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20 lg:min-h-[85vh]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Mini Lipo Localizada em Marabá" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.3) 100%)" }} />
        </div>
        <div className="container relative z-10 pb-16 pt-32 lg:pb-28">
          <Breadcrumbs items={[{ label: "Procedimentos" }, { label: "Mini Lipo Localizada" }]} />
          <h1 className="mt-4 animate-fade-up font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            Mini Lipo Localizada<span className="block text-primary"> em Marabá</span>
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up font-body text-lg text-muted-foreground opacity-0 stagger-1 md:text-xl">
            Reduza gordura localizada com microcânulas — recuperação rápida e resultado definitivo
          </p>
          <div className="mt-10 animate-fade-up opacity-0 stagger-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, whatsappLink)}>
              <Button variant="cta" size="xl" className="gap-2">
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
      <div className="container mt-6"><MedicalDisclaimer /></div>

      {/* ═══ O QUE É — text left + image right with gold border ═══ */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="mb-8 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  O que é a Mini Lipo Localizada?
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>A mini lipo localizada é um procedimento minimamente invasivo que utiliza <strong className="text-foreground">microcânulas</strong> para remover pequenos depósitos de gordura em áreas específicas do corpo.</p>
                  <p>Diferente da lipoaspiração tradicional, é feita com <strong className="text-foreground">anestesia local</strong>, incisões mínimas (2-3mm) e <strong className="text-foreground">recuperação muito mais rápida</strong> — a maioria dos pacientes retorna às atividades em poucos dias.</p>
                  <p>Indicada para pacientes próximos do peso ideal com gordura resistente a dieta e exercício. É uma técnica de <strong className="text-foreground">contorno e remodelação corporal</strong> com resultado definitivo.</p>
                  <p>As microcânulas causam menos trauma aos tecidos, resultando em menos inchaço, menos hematomas e maior conforto pós-operatório.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="overflow-hidden rounded-lg" style={{ border: "1px solid rgba(200,169,110,0.3)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                {/* SUBSTITUIR: foto real do consultório ou da Dra. Lorena */}
                <img src={whatImg} alt="Consultório de medicina estética - Mini Lipo em Marabá" className="h-full w-full object-cover" loading="lazy" width={800} height={600} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ TABELA COMPARATIVA — with clinic bg ═══ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={tableBg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.88)" }} />
        </div>
        <div className="container relative z-10 max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Mini Lipo vs. Lipo Tradicional
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-xl md:block" style={{ border: "1px solid rgba(200,169,110,0.2)", background: "rgba(10,10,10,0.6)", backdropFilter: "blur(10px)" }}>
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(200,169,110,0.2)" }}>
                    <th className="px-6 py-4 text-left font-heading text-sm font-semibold text-muted-foreground">Característica</th>
                    <th className="px-6 py-4 text-left font-heading text-sm font-semibold text-primary" style={{ background: "rgba(200,169,110,0.1)" }}>Mini Lipo Localizada</th>
                    <th className="px-6 py-4 text-left font-heading text-sm font-semibold text-muted-foreground">Lipo Tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(200,169,110,0.08)" }}>
                      <td className="px-6 py-4 font-body text-sm font-medium text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 font-body text-sm" style={{ background: "rgba(200,169,110,0.05)" }}>
                        <span className="flex items-center gap-2 text-primary">
                          <Check className="h-4 w-4 shrink-0" /> {row.mini}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-body text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Circle className="h-3 w-3 shrink-0" /> {row.trad}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile */}
            <div className="space-y-4 md:hidden">
              {comparison.map((row, i) => (
                <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,169,110,0.1)" }}>
                  <p className="mb-2 font-heading text-sm font-semibold text-foreground">{row.feature}</p>
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="font-body text-xs text-primary/70">Mini Lipo</p>
                      <p className="flex items-center gap-1 font-body text-sm text-primary"><Check className="h-3 w-3" /> {row.mini}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-body text-xs text-muted-foreground/70">Tradicional</p>
                      <p className="font-body text-sm text-muted-foreground">{row.trad}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ ÁREAS TRATADAS — image cards 3/4 aspect ═══ */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(0 0% 6%)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Áreas Tratadas
            </h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative min-h-[250px] overflow-hidden rounded-lg transition-all duration-500 hover:shadow-glow" style={{ aspectRatio: "3/4", border: "1px solid transparent" }}>
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.08]">
                    <img src={a.image} alt={`Mini lipo ${a.title} em Marabá`} className="h-full w-full object-cover" loading="lazy" width={600} height={800} />
                  </div>
                  <div className="absolute inset-0 transition-all duration-300" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 60%)" }} />
                  <div className="absolute inset-0 border border-transparent transition-all duration-300 group-hover:border-primary/30" style={{ borderRadius: "inherit" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{a.title}</h3>
                    <p className="font-body text-sm text-primary/80">{a.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BENEFÍCIOS — marble bg, glassmorphism cards ═══ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={benefitsBg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.9)" }} />
        </div>
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Benefícios da Mini Lipo
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="group rounded-xl p-8 backdrop-blur-md transition-all duration-300 hover:shadow-glow"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,169,110,0.15)" }}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-[1.15]">
                    <b.icon className="h-7 w-7 text-primary" style={{ filter: "drop-shadow(0 0 8px rgba(200,169,110,0.3))" }} />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">{b.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE — clinic bg, with images on steps 1,4,6 ═══ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={timelineBg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.92)" }} />
        </div>
        <div className="container relative z-10 max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Como Funciona
            </h2>
          </ScrollReveal>
          <div className="relative">
            {/* Gold timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/10 lg:left-6" />
            <div className="space-y-12">
              {timelineSteps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className={`flex gap-6 ${s.image ? "flex-col lg:flex-row lg:items-start" : ""}`}>
                    <div className="flex shrink-0 gap-6">
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-glow">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div className={s.image ? "lg:max-w-sm" : ""}>
                        <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">{s.title}</h3>
                        <p className="font-body text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                    {s.image && (
                      <div className="ml-[72px] mt-4 max-w-[280px] overflow-hidden rounded-lg lg:ml-0 lg:mt-0" style={{ border: "1px solid rgba(200,169,110,0.25)" }}>
                        <img src={s.image} alt={s.title} className="h-auto w-full object-cover" loading="lazy" width={768} height={512} />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUEM PODE FAZER — text + image ═══ */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(0 0% 6%)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="grid items-center gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3 rounded-xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, rgba(200,169,110,0.08) 0%, rgba(200,169,110,0.02) 100%)", borderLeft: "4px solid hsl(var(--primary))" }}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mb-6 font-heading text-2xl font-semibold text-primary md:text-3xl">
                  Quem pode fazer?
                </h2>
                <ul className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Pacientes com peso próximo do ideal com <strong className="text-foreground">gordura localizada resistente</strong> a dieta e exercício</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Ideal para quem busca refinamento de contorno corporal, não emagrecimento</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Excelente opção para quem deseja <strong className="text-foreground">resultado definitivo com recuperação rápida</strong></span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>A avaliação médica com a Dra. Lorena é essencial para confirmar a indicação</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Contraindicações incluem gravidez, distúrbios de coagulação e condições avaliadas individualmente</span></li>
                </ul>
              </div>
              <div className="hidden lg:col-span-2 lg:block">
                <div className="overflow-hidden rounded-lg" style={{ border: "1px solid rgba(200,169,110,0.3)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                  {/* SUBSTITUIR: foto real de paciente satisfeita */}
                  <img src={whoCanDoImg} alt="Resultado da mini lipo - confiança e bem-estar" className="h-full w-full object-cover" loading="lazy" width={600} height={800} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ — with sticky side image on desktop ═══ */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(0 0% 5%)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Perguntas Frequentes
            </h2>
          </ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <AccordionItem value={`faq-${i}`} className="rounded-xl border px-6" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(200,169,110,0.1)" }}>
                      <AccordionTrigger className="py-5 font-heading text-lg font-medium text-foreground hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
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
            <div className="hidden lg:block">
              <div className="sticky top-24 overflow-hidden rounded-lg" style={{ border: "1px solid rgba(200,169,110,0.25)" }}>
                <img src={faqImg} alt="Beleza e confiança - Clínica Lacerda" className="h-auto w-full object-cover" loading="lazy" width={600} height={900} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RELATED PROCEDURES ═══ */}
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
                <Link to={`/${r.slug}`} className="group block rounded-xl p-6 transition-all duration-300 hover:shadow-glow" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,169,110,0.1)" }}>
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

      {/* ═══ CTA FINAL — 50vh with golden waves bg ═══ */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaImg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.4) 100%)" }} />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <ScrollReveal>
            <h2 className="mb-6 font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Conquiste o contorno corporal que você deseja
            </h2>
            <p className="mx-auto mb-10 max-w-xl font-body text-lg text-muted-foreground">
              Agende sua avaliação e descubra se a mini lipo localizada é indicada para você
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, whatsappLink)}>
              <Button variant="cta" size="xl" className="animate-pulse-gold gap-2 text-lg">
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
