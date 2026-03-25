import { Helmet } from "react-helmet-async";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeHero } from "@/components/home/HomeHero";
import { Procedures } from "@/components/home/Procedures";
import { AboutDoctor } from "@/components/home/AboutDoctor";
import { HomeFooter } from "@/components/home/HomeFooter";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Clínica Lacerda | Dra. Lorena Lacerda - Medicina Estética</title>
        <meta
          name="description"
          content="Clínica Lacerda - Especializada em medicina estética. Laser CO2 Fracionado, Botox, Preenchimento Facial, Tratamento Capilar e Modelação de Glúteos com a Dra. Lorena Lacerda."
        />
        <meta
          name="keywords"
          content="medicina estética, laser co2, botox, preenchimento facial, tratamento capilar, modelação de glúteos, Dra Lorena Lacerda, Clínica Lacerda"
        />
        <link rel="canonical" href="https://clinicalacerda.com.br" />
        <meta property="og:title" content="Clínica Lacerda | Dra. Lorena Lacerda - Medicina Estética" />
        <meta
          property="og:description"
          content="Especializada em dermatologia e medicina estética. Tratamentos com tecnologia avançada e atendimento personalizado."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Clínica Lacerda",
            description: "Clínica especializada em dermatologia e medicina estética",
            medicalSpecialty: "PlasticSurgery",
            availableService: [
              { "@type": "MedicalProcedure", name: "Laser CO2 Fracionado" },
              { "@type": "MedicalProcedure", name: "Botox" },
              { "@type": "MedicalProcedure", name: "Preenchimento Facial" },
              { "@type": "MedicalProcedure", name: "Tratamento Capilar" },
              { "@type": "MedicalProcedure", name: "Modelação de Glúteos" },
            ],
          })}
        </script>
      </Helmet>

      <HomeHeader />
      <main>
        <HomeHero />
        <Procedures />
        <AboutDoctor />
      </main>
      <HomeFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default Home;
