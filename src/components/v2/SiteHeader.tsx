import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/v2/logo-ll.webp";
import { WhatsAppLink } from "./WhatsAppLink";

const NAV = [
  { hash: "#procedimentos", label: "Procedimentos" },
  { hash: "#sobre", label: "Dra. Lorena" },
  { hash: "#clinica", label: "A clínica" },
  { hash: "#contato", label: "Endereço" },
];

/** Na home o logo rola para o topo; nas outras paginas leva para a home. */
const Brand = ({ onHome, className, children }: { onHome: boolean; className: string; children: ReactNode }) =>
  onHome ? (
    <a href="#inicio" className={className}>{children}</a>
  ) : (
    <Link to="/" className={className}>{children}</Link>
  );

interface SiteHeaderProps {
  /** Mensagem do botao "Agendar avaliação" no desktop */
  whatsappMessage: string;
}

export const SiteHeader = ({ whatsappMessage }: SiteHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  // Na home as ancoras rolam a pagina; nas outras levam para a secao da home.
  const onHome = pathname === "/";
  const to = (hash: string) => (onHome ? hash : `/${hash}`);

  const logoImg = (
    <img src={logo} alt="Dra. Lorena Lacerda — Medicina Estética" width={44} height={44} className="h-11 w-11 flex-none object-cover mix-blend-multiply" />
  );
  const name = "font-heading text-[17px] font-semibold uppercase tracking-[.22em]";

  return (
    <header className="sticky top-0 z-20 border-b border-cl-line bg-[linear-gradient(115deg,#FBF9F5_0%,#F3EEE6_45%,#FBF9F5_100%)] text-cl-ink">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-[clamp(20px,4vw,48px)] py-3">
        {/* Celular: logo | nome centralizado | menu */}
        <Brand onHome={onHome} className="flex w-11 flex-none d:hidden">{logoImg}</Brand>
        <Brand onHome={onHome} className={`flex-1 text-center text-cl-ink no-underline d:hidden ${name}`}>Clínica Lacerda</Brand>

        {/* Desktop: logo + nome | menu | botao */}
        <Brand onHome={onHome} className="hidden items-center gap-3 text-cl-ink no-underline d:flex">
          {logoImg}
          <span className={name}>Clínica Lacerda</span>
        </Brand>
        <nav className="ml-auto mr-7 hidden items-center gap-7 text-[13px] font-medium d:flex">
          {NAV.map((item) => (
            <a key={item.hash} href={to(item.hash)} className="whitespace-nowrap text-cl-ink no-underline hover:text-cl-gold">
              {item.label}
            </a>
          ))}
        </nav>
        <WhatsAppLink
          message={whatsappMessage}
          placement="cabecalho"
          className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-full bg-cl-ink px-5 text-[13px] font-semibold text-cl-cream no-underline hover:bg-cl-ink-hover d:flex"
        >
          Agendar avaliação
        </WhatsAppLink>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-11 w-11 flex-none flex-col items-center justify-center gap-1.5 border-0 bg-transparent p-0 d:hidden"
        >
          <span className="block h-0.5 w-[22px] rounded-sm bg-cl-ink" />
          <span className="block h-0.5 w-[22px] rounded-sm bg-cl-ink" />
          <span className="block h-0.5 w-[22px] rounded-sm bg-cl-ink" />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-cl-line bg-cl-bg px-5 pb-4 pt-2 d:hidden">
          {!onHome && (
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-cl-line px-1 py-3.5 font-heading text-[22px] font-semibold text-cl-ink no-underline"
            >
              Início
            </Link>
          )}
          {NAV.map((item, i) => (
            <a
              key={item.hash}
              href={to(item.hash)}
              onClick={() => setMenuOpen(false)}
              className={`px-1 py-3.5 font-heading text-[22px] font-semibold text-cl-ink no-underline ${i < NAV.length - 1 ? "border-b border-cl-line" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
