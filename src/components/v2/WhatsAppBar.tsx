import type { ReactNode } from "react";
import { WhatsAppIcon, WhatsAppLink } from "./WhatsAppLink";

interface WhatsAppBarProps {
  message: string;
  /** Texto da esquerda na barra do celular */
  label?: ReactNode;
  /** Rotulo do botao na barra do celular */
  button?: string;
}

/** Barra fixa inferior no celular e botao flutuante no desktop. */
export const WhatsAppBar = ({
  message,
  label = (
    <>
      <strong className="text-cl-ink">Responde em minutos</strong>
      <br />
      Seg–Sáb, horário comercial
    </>
  ),
  button = "WhatsApp",
}: WhatsAppBarProps) => (
  <>
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-cl-line bg-cl-bg/95 px-4 pb-3.5 pt-3 backdrop-blur-md d:hidden">
      <div className="min-w-0 text-xs leading-snug text-cl-text">{label}</div>
      <WhatsAppLink
        message={message}
        placement="barra_fixa"
        className="flex h-[46px] flex-none items-center gap-2 whitespace-nowrap rounded-full bg-cl-ink px-[18px] text-sm font-semibold text-cl-cream no-underline"
      >
        {button}
      </WhatsAppLink>
    </div>
    <WhatsAppLink
      message={message}
      placement="botao_flutuante"
      aria-label="WhatsApp"
      className="fixed bottom-7 right-7 z-30 hidden h-14 items-center gap-2.5 rounded-full bg-cl-ink pl-[18px] pr-[22px] text-sm font-semibold text-cl-cream no-underline shadow-[0_12px_30px_-12px_rgba(28,25,22,.5)] hover:bg-cl-ink-hover d:flex"
    >
      <WhatsAppIcon size={22} />
      WhatsApp
    </WhatsAppLink>
  </>
);
