import { Helmet } from "react-helmet-async";
import { BotoxHeader } from "@/components/botox/BotoxHeader";
import { BotoxHero } from "@/components/botox/BotoxHero";
import { BotoxIndications } from "@/components/botox/BotoxIndications";
import { Doctor } from "@/components/landing/Doctor";
import { BotoxDifferentials } from "@/components/botox/BotoxDifferentials";
import { BotoxFAQ } from "@/components/botox/BotoxFAQ";
import { BotoxCTA } from "@/components/botox/BotoxCTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const Botox = () => {
  return (
    <>
      <Helmet>
        <title>Botox - Toxina Botulínica | Clínica Lacerda - Dra. Lorena Lacerda</title>
        <meta
          name="description"
          content="Tratamento com Botox para suavização de rugas e linhas de expressão. Resultado natural com a Dra. Lorena Lacerda. Agende sua avaliação."
        />
        <meta name="keywords" content="botox, toxina botulínica, rugas, linhas de expressão, rejuvenescimento facial, medicina estética, clínica lacerda" />
        <link rel="canonical" href="https://clinicalacerda.com.br/botox" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Botox - Toxina Botulínica | Clínica Lacerda" />
        <meta property="og:description" content="Tratamento com Botox para suavização de rugas e linhas de expressão com resultado natural." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Clínica Lacerda",
            "description": "Clínica de medicina estética especializada em tratamentos com Toxina Botulínica",
            "medicalSpecialty": "PlasticSurgery",
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "Botox - Toxina Botulínica",
              "procedureType": "https://health-lifesci.schema.org/NoninvasiveProcedure"
            }
          })}
        </script>
      </Helmet>

      <main>
        <BotoxHeader />
        <BotoxHero />
        <BotoxIndications />
        <Doctor />
        <BotoxDifferentials />
        <BotoxFAQ />
        <BotoxCTA />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Botox;
