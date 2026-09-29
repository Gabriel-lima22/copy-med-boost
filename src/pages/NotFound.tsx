import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/v2/SiteHeader";
import { SiteFooter } from "@/components/v2/SiteFooter";
import { HOME_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

const NotFound = () => (
  <div className="flex min-h-screen flex-col bg-cl-bg font-body text-cl-ink antialiased">
    <SiteHeader whatsappMessage={HOME_WHATSAPP_MESSAGE} />
    <main className="flex flex-1 items-center justify-center px-6 py-24 text-center">
      <div>
        <h1 className="m-0 font-heading text-6xl font-medium">404</h1>
        <p className="mb-6 mt-3 text-lg text-cl-text">Página não encontrada</p>
        <Link to="/" className="font-semibold text-cl-gold underline hover:text-cl-ink">
          Voltar para o início
        </Link>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default NotFound;
