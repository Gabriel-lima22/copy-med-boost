import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Indications } from "@/components/landing/Indications";
import { Doctor } from "@/components/landing/Doctor";
import { Differentials } from "@/components/landing/Differentials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Laser CO2 Fracionado - Clínica Lacerda | Dra. Lorena Lacerda - Dermatologista</title>
        <meta
          name="description"
          content="Tratamento de Melasma, Rejuvenescimento Facial e Cicatrizes com Laser CO2 Fracionado. Dra. Lorena Lacerda - Dermatologista. Agende sua avaliação."
        />
        <meta name="keywords" content="laser co2 fracionado, melasma tratamento, rejuvenescimento facial, cicatrizes acne, dermatologista, clínica lacerda" />
        <link rel="canonical" href="https://clinicalacerda.com.br" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Laser CO2 Fracionado - Clínica Lacerda" />
        <meta property="og:description" content="Tratamento de Melasma, Rejuvenescimento Facial e Cicatrizes com tecnologia avançada." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Clínica Lacerda",
            "description": "Clínica de dermatologia especializada em tratamentos com Laser CO2 Fracionado",
            "medicalSpecialty": "Dermatology",
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "Laser CO2 Fracionado",
              "procedureType": "https://health-lifesci.schema.org/NoninvasiveProcedure"
            }
          })}
        </script>
      </Helmet>

      <main>
        <Header />
        <Hero />
        <Indications />
        <Doctor />
        <Differentials />
        <FAQ />
        <CTA />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Index;
