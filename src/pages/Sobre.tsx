import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { MessageCircle, GraduationCap, Hospital, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { createWhatsAppLink, handleWhatsAppClick } from "@/lib/whatsapp";
import draLorena from "@/assets/dra-lorena.jpg";

const whatsappLink = createWhatsAppLink("Olá! Vim pelo site e gostaria de agendar uma avaliação.");

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Lorena Lacerda",
  description: "Médica especialista em Medicina Estética — CRM 15626",
  medicalSpecialty: "Dermatology",
  alumniOf: { "@type": "EducationalOrganization", name: "UNIRG - Universidade de Gurupi" },
  worksFor: { "@type": "MedicalBusiness", name: "Clínica Lacerda" },
  url: "https://clinicalacerda.com/sobre",
  sameAs: [
    "https://www.instagram.com/dralorenalacerdaa",
    "https://www.doctoralia.com.br/lorena-lacerda-2/especialista-em-medicina-estetica/maraba",
  ],
};

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a Dra. Lorena Lacerda - Clínica Lacerda | Medicina Estética em Marabá</title>
        <meta name="description" content="Conheça a Dra. Lorena Lacerda, médica especialista em Medicina Estética em Marabá/PA. CRM 15626. Formada pela UNIRG." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clinicalacerda.com/sobre" />
        <meta property="og:title" content="Dra. Lorena Lacerda - Medicina Estética em Marabá" />
        <meta property="og:description" content="Médica especialista em Medicina Estética. CRM 15626." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(physicianSchema)}</script>
      </Helmet>

      <SiteHeader />
      <main className="pt-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Sobre a Dra. Lorena" }]} />
        </div>

        <section className="py-12 lg:py-20">
          <div className="container">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                  <img
                    src={draLorena}
                    alt="Dra. Lorena Lacerda - Médica Especialista em Medicina Estética em Marabá"
                    className="h-full w-full object-cover"
                    width={600}
                    height={800}
                  />
                </div>
              </div>

              <div>
                <h1 className="mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
                  Dra. Lorena Lacerda
                </h1>
                <p className="mb-2 font-body text-sm font-medium uppercase tracking-widest text-primary">
                  Medicina Estética — CRM-PA 15626
                </p>

                <div className="mt-8 space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Médica formada pela UNIRG (Universidade de Gurupi), com experiência clínica adquirida no Hospital Universitário de Araguaína, onde atuou em atendimentos de urgência e ambulatório.
                  </p>
                  <p>
                    Atualmente, dedica-se exclusivamente à Medicina Estética em Marabá/PA, oferecendo atendimento personalizado e humanizado na Clínica Lacerda.
                  </p>
                  <p className="rounded-lg border-l-2 border-primary bg-card p-4 italic text-foreground/80">
                    "Minha missão é cuidar da sua autoestima através de protocolos personalizados, tecnologia de ponta e acompanhamento próximo. Acredito que cada paciente é único e merece um tratamento sob medida."
                  </p>
                </div>

                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">Formação</h3>
                      <p className="font-body text-sm text-muted-foreground">Medicina — UNIRG (Universidade de Gurupi)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Hospital className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">Experiência</h3>
                      <p className="font-body text-sm text-muted-foreground">Hospital Universitário de Araguaína</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">Atuação</h3>
                      <p className="font-body text-sm text-muted-foreground">Medicina Estética — Marabá/PA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, whatsappLink)}>
                    <Button variant="cta" size="lg" className="gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Agendar Consulta
                    </Button>
                  </a>
                </div>
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

export default Sobre;