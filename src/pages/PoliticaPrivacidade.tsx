import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const PoliticaPrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Clínica Lacerda</title>
        <meta name="description" content="Política de Privacidade da Clínica Lacerda — saiba como tratamos seus dados pessoais." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clinicalacerda.com/politica-privacidade" />
      </Helmet>

      <SiteHeader />
      <main className="pt-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />
        </div>

        <section className="py-12 lg:py-20">
          <div className="container max-w-3xl">
            <h1 className="mb-8 font-heading text-4xl font-bold text-foreground">
              Política de Privacidade
            </h1>

            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>Última atualização: Agosto de 2026</p>

              <h2 className="font-heading text-2xl font-semibold text-foreground">1. Informações Gerais</h2>
              <p>
                A Clínica Lacerda, pessoa jurídica de direito privado, com sede em Marabá/PA, inscrita no CNPJ sob o nº [a definir], é a controladora dos dados pessoais coletados neste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground">2. Dados Coletados</h2>
              <p>Podemos coletar os seguintes dados pessoais:</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Nome completo</li>
                <li>Número de telefone</li>
                <li>Dados de navegação (cookies, IP, páginas visitadas)</li>
              </ul>

              <h2 className="font-heading text-2xl font-semibold text-foreground">3. Finalidade do Tratamento</h2>
              <p>Os dados pessoais são coletados para as seguintes finalidades:</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Agendamento de consultas e avaliações</li>
                <li>Comunicação sobre procedimentos e serviços</li>
                <li>Melhoria da experiência do usuário no site</li>
                <li>Campanhas de marketing (Google Ads, redes sociais)</li>
              </ul>

              <h2 className="font-heading text-2xl font-semibold text-foreground">4. Compartilhamento de Dados</h2>
              <p>
                Seus dados pessoais não serão compartilhados com terceiros, exceto quando necessário para cumprir obrigações legais ou com prestadores de serviços essenciais (como plataformas de marketing), sempre com garantias de proteção adequadas.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground">5. Cookies e Ferramentas de Análise</h2>
              <p>
                Este site utiliza cookies e ferramentas de terceiros para entender como as páginas são usadas e para medir o resultado das campanhas:
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  <strong>Google Analytics 4</strong> — páginas visitadas, origem do acesso e tempo de permanência, de forma agregada.
                </li>
                <li>
                  <strong>Google Ads e Google Tag Manager</strong> — medição das conversões das campanhas de anúncios.
                </li>
                <li>
                  <strong>Microsoft Clarity</strong> — mapas de calor de clique e de rolagem e gravação anônima da navegação, usados para identificar dificuldades de uso. O Clarity oculta automaticamente o conteúdo digitado em campos de formulário.
                </li>
              </ul>
              <p>
                Essas ferramentas não recebem seu nome, seu telefone nem qualquer informação de saúde. Você pode bloquear ou apagar cookies nas configurações do seu navegador e pode solicitar a exclusão dos seus dados de navegação pelo contato indicado abaixo.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground">6. Segurança</h2>
              <p>
                Adotamos medidas de segurança técnicas e administrativas para proteger seus dados pessoais contra acessos não autorizados, destruição, perda ou alteração.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground">7. Seus Direitos</h2>
              <p>Você tem direito a:</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Confirmar a existência de tratamento de seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Solicitar correção de dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados pessoais</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>

              <h2 className="font-heading text-2xl font-semibold text-foreground">8. Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo WhatsApp: (94) 99152-1617.
              </p>

              <p className="mt-8 text-sm">
                Dra. Lorena Lacerda — CRM-PA 15626 | Clínica Lacerda — Marabá/PA
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default PoliticaPrivacidade;