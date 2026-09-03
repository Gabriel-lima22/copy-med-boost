/**
 * Marcador de trecho pendente de validacao medica.
 *
 * O texto clinico da pagina foi escrito para ficar correto e dentro da
 * Resolucao CFM 2.336/2023, mas ha afirmacoes que so a medica responsavel pode
 * confirmar (comprimento de onda do equipamento, duracao real da sessao, tempo
 * de recuperacao, lista de contraindicacoes).
 *
 * O marcador NAO aparece para o paciente: publicar "[REVISAR-MEDICO]" numa
 * pagina de saude no ar passa a impressao de conteudo inacabado. Ele aparece
 * so em modo de revisao, acessando a pagina com `?revisao=1` — a Dra. Lorena
 * abre o link, ve cada ponto destacado no contexto em que aparece e devolve as
 * correcoes. O canonical da rota aponta para a URL sem query, entao o modo de
 * revisao nao gera conteudo duplicado para o Google.
 */
export const isReviewMode = () =>
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("revisao");

interface ReviewMarkProps {
  /** O que precisa ser confirmado pela medica. */
  note: string;
}

export const ReviewMark = ({ note }: ReviewMarkProps) => {
  if (!isReviewMode()) return null;

  return (
    <mark
      className="mx-1 inline-block rounded px-1.5 py-0.5 align-baseline font-body text-xs font-medium"
      style={{ background: "rgba(255,196,0,0.22)", color: "#FFD166", border: "1px solid rgba(255,196,0,0.45)" }}
    >
      [REVISAR-MÉDICO: {note}]
    </mark>
  );
};

/** Aviso de topo, visivel so em modo de revisao. */
export const ReviewModeBanner = () => {
  if (!isReviewMode()) return null;

  return (
    <div
      className="rounded-lg p-4 font-body text-sm"
      style={{ background: "rgba(255,196,0,0.1)", border: "1px solid rgba(255,196,0,0.4)", color: "#FFD166" }}
    >
      <strong>Modo de revisão médica.</strong> Os trechos destacados abaixo aguardam validação
      da Dra. Lorena Lacerda. Este aviso e os destaques não aparecem para os pacientes —
      só nesta URL, com <code>?revisao=1</code>.
    </div>
  );
};
