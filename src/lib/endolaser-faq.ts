/**
 * FAQ do Endolaser — fonte unica.
 *
 * Lida por dois consumidores:
 *   1. src/pages/Endolaser.tsx, que renderiza o accordion;
 *   2. src/lib/seo-routes.ts, que monta o FAQPage do schema.org.
 *
 * O campo `review` fica de proposito FORA de `answer`: o marcador de revisao
 * medica aparece na pagina em modo de revisao (?revisao=1), mas nunca entra no
 * JSON-LD — senao o Google poderia exibir "[REVISAR-MEDICO]" no resultado de
 * busca.
 */
export interface FaqItem {
  question: string;
  answer: string;
  /** Ponto que depende de confirmacao da medica. Nao vai para o schema. */
  review?: string;
}

export const ENDOLASER_FAQ: FaqItem[] = [
  {
    question: "O que é o Endolaser?",
    answer:
      "É uma técnica em que uma fibra óptica muito fina é introduzida sob a pele por uma microperfuração, entregando a energia do laser na camada logo abaixo da superfície. O estímulo térmico controlado pode auxiliar na retração do colágeno existente e no estímulo à produção de colágeno novo. Também é chamado de laser endodérmico ou endolifting.",
    review: "validar a definição técnica publicada",
  },
  {
    question: "O Endolaser dói?",
    answer:
      "O procedimento é realizado com anestesia local. A percepção de desconforto varia de pessoa para pessoa, e o que esperar durante e depois da sessão é explicado na consulta de avaliação.",
    review: "confirmar o tipo de anestesia e o nível de desconforto relatado pelas pacientes",
  },
  {
    question: "Quanto tempo dura a sessão e como é a recuperação?",
    answer:
      "A duração depende da área tratada e é informada na avaliação. No período seguinte, inchaço e hematomas são esperados, e podem ser orientados cuidados como o uso de malha compressiva. O tempo de retorno às atividades é definido individualmente pela médica.",
    review: "informar a duração média por área, o tempo de recuperação e o uso e a duração da malha compressiva",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Não há um número fixo. A quantidade de sessões e o intervalo entre elas são definidos na avaliação médica, conforme a área, o grau de flacidez e a resposta de cada paciente.",
    review: "informar o número de sessões habitual no protocolo da clínica",
  },
  {
    question: "Qual a diferença entre o Endolaser e o laser de CO2 fracionado?",
    answer:
      "São técnicas com objetivos diferentes. O laser de CO2 fracionado é aplicado na superfície da pele e atua sobre textura, manchas e cicatrizes. No Endolaser, a fibra é introduzida sob a pele e a energia é entregue na camada subdérmica. Qual das duas se aplica ao seu caso, ou se há indicação de associar as duas, é definido em consulta.",
  },
  {
    question: "Quem não pode fazer o Endolaser?",
    answer:
      "Entre as situações que contraindicam ou exigem cuidado adicional estão gestação e amamentação, infecção ou lesão ativa na área, distúrbios de coagulação ou uso de anticoagulantes, doenças crônicas descompensadas, histórico de cicatrização queloidiana e uso de medicações fotossensibilizantes. A relação é informativa: só a avaliação médica define se há indicação.",
    review: "confirmar a lista completa de contraindicações",
  },
];
