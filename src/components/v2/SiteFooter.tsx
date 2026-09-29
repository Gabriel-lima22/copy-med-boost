import { Link } from "react-router-dom";

export const SiteFooter = () => (
  <footer className="mt-[clamp(36px,5vw,72px)] border-t border-cl-line">
    {/* pb-24 deixa o rodape livre da barra fixa do WhatsApp no celular */}
    <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-x-6 gap-y-2.5 px-[clamp(20px,4vw,48px)] pb-24 pt-[22px] text-[11.5px] leading-relaxed text-cl-muted">
      <div>
        Dra. Lorena Lacerda — CRM-PA 15626 · Medicina Estética
        <br />
        LACERDA MEDICINA E ESTETICA LTDA - ME - CNPJ 63.449.483/0001-26
      </div>
      <div>
        © 2026 Clínica Lacerda ·{" "}
        <Link to="/politica-privacidade" className="text-cl-muted underline hover:text-cl-ink">
          Política de privacidade
        </Link>
      </div>
    </div>
  </footer>
);
