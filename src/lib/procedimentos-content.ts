/**
 * Conteudo das paginas de procedimento (/procedimentos/<slug>).
 *
 * Veio do procedimentos.js do handoff do design novo
 * (github.com/Gabriel-lima22/Site-Clinica-Lacerda), com as imagens trocadas
 * pelas versoes WebP de src/assets/v2. Regras do CFM (HANDOFF.md): sem antes e
 * depois, sem precos e sem a expressao "toxina botulinica".
 */
import imgCapelluxI9 from "@/assets/v2/capellux-i9.webp";
import imgHegonCo2 from "@/assets/v2/hegon-co2.webp";
import imgLaserCo2Rosto from "@/assets/v2/laser-co2-rosto.webp";
import imgLiftendo from "@/assets/v2/liftendo.webp";
import imgProcBlefaro from "@/assets/v2/proc-blefaro.webp";
import imgProcCapilarCard from "@/assets/v2/proc-capilar-card.webp";
import imgProcEndolaser from "@/assets/v2/proc-endolaser.webp";
import imgProcGluteo from "@/assets/v2/proc-gluteo.webp";
import imgProcHarmonizacao from "@/assets/v2/proc-harmonizacao.webp";
import imgProcMinilipo from "@/assets/v2/proc-minilipo.webp";

export interface Procedimento {
  name: string;
  kicker: string;
  title: string;
  /** Trecho do titulo em italico dourado */
  titleEm?: string;
  subtitle: string;
  paragraph?: string;
  /** Linha pequena sob o botao do hero: equipamento e registro */
  equipLine?: string;
  img: string;
  /** object-position da foto do hero */
  imgPos: string;
  /** Altura do hero no celular, em px */
  heroH: number;
  forWhom: { t: string; area: string }[];
  forWhomNote?: string;
  diff?: { title: string; text: string };
  equip?: { title: string; items: string[]; img: string };
  steps?: { t: string; d: string }[];
  after: string[];
  who: { title: string; text: string; crm: string };
  faq: { q: string; a: string }[];
  cta: { title: string; text: string; button: string };
  related: string[];
}

export const PROCEDIMENTOS: Record<string, Procedimento> = {
  "laser-co2-fracionado": {
    name: "Laser CO2 Fracionado", kicker: "Laser CO2 Fracionado", title: "Pele renovada,", titleEm: "com indicação médica",
    subtitle: "Manchas, cicatrizes de acne, poros e flacidez, com estímulo de colágeno. A indicação é confirmada na avaliação.",
    equipLine: "Laser CO2 fracionado Hegon · registro ANVISA 81243810014",
    img: imgLaserCo2Rosto, imgPos: "50% 62%", heroH: 480,
    forWhom: [
      { t: "Cicatrizes de acne e poros dilatados", area: "Rosto" },
      { t: "Cicatrizes cirúrgicas", area: "Corpo" },
      { t: "Linhas finas ao redor dos olhos e da boca", area: "Rosto" },
      { t: "Textura irregular e aspecto envelhecido da pele (fotoenvelhecimento)", area: "Rosto" },
      { t: "Flacidez leve a moderada da face e do pescoço", area: "Rosto" },
      { t: "Manchas solares e ceratoses (avaliadas individualmente)", area: "Rosto" },
    ],
    diff: { title: "Como funciona", text: "O laser cria microcolunas de tratamento na pele, preservando o tecido ao redor. Isso estimula a produção de colágeno e a renovação da superfície, com recuperação mais rápida do que o laser CO2 tradicional." },
    equip: { title: "Laser CO2 Fracionado Hegon", items: ["Laser de CO2 fracionado com registro na Anvisa", "Emissão em microcolunas: trata a pele preservando áreas íntegras e acelera a recuperação", "Parâmetros ajustáveis de energia e densidade para cada fototipo e indicação", "Operado pela própria Dra. Lorena"], img: imgHegonCo2 },
    after: ["Sessão de 30 a 60 minutos, com anestésico tópico. Vermelhidão e sensação de \"queimadura de sol\" nos primeiros dias. Recuperação média de 5 a 7 dias.", "Resultado progressivo ao longo de 1 a 3 meses; número de sessões definido em avaliação."],
    who: { title: "Médica na sala, do começo ao fim.", text: "Quem avalia é quem aplica. A Dra. Lorena Lacerda conduz o procedimento pessoalmente, com o laser CO2 Hegon — fabricado no Brasil para peles brasileiras.", crm: "CRM-PA 15626" },
    faq: [
      { q: "O Laser CO2 dói?", a: "O procedimento é realizado com anestesia tópica, minimizando o desconforto. Pode haver sensação de calor durante a aplicação." },
      { q: "Quantas sessões são necessárias?", a: "Geralmente de 1 a 3 sessões, com intervalo de 30 a 60 dias, conforme a indicação definida na avaliação." },
      { q: "Quanto tempo leva para recuperar?", a: "Cerca de 5 a 7 dias com crostas finas. É possível manter a rotina com cuidados e protetor solar." },
    ],
    cta: { title: "O Laser CO2 é para o seu caso?", text: "Mande uma foto da área pelo WhatsApp. A equipe agenda sua avaliação com a Dra. Lorena.", button: "Agendar avaliação" },
    related: ["harmonizacao-facial", "endolaser", "blefaroplastia"],
  },

  "endolaser": {
    name: "Endolaser", kicker: "Endolaser", title: "Firmeza por dentro, sem cirurgia.",
    subtitle: "Papada, flacidez do rosto e do corpo e gordura localizada. Na maioria dos casos, uma sessão.",
    paragraph: "Uma fibra óptica fina entra por um ponto mínimo na pele e aquece a camada que a sustenta, estimulando retração e colágeno novo. No corpo, também trata gordura localizada.",
    equipLine: "LiftEndo · Medical San · registro ANVISA 82338020003 · laser de diodo 980 nm + 1470 nm",
    equip: { title: "LiftEndo · Medical San", items: ["Endolaser de alta potência fabricado no Brasil, registro ANVISA 82338020003", "Dois comprimentos de onda: 1470 nm para retração e colágeno, 980 nm para lipólise", "Modos contínuo, pulsado ou pontual, com potência ajustada área por área", "Fibra óptica bem fina, entrada por ponto de menos de 1 mm"], img: imgLiftendo },
    img: imgProcEndolaser, imgPos: "100% 30%", heroH: 400,
    forWhom: [
      { t: "Papada e definição do contorno da mandíbula", area: "Rosto" },
      { t: "Pescoço com pele solta", area: "Pescoço" },
      { t: "Braços (flacidez da parte interna)", area: "Corpo" },
      { t: "Flacidez do abdômen, inclusive pós-parto", area: "Corpo" },
      { t: "Parte interna das coxas e joelhos", area: "Corpo" },
    ],
    forWhomNote: "A indicação e a área são definidas na avaliação. Flacidez muito acentuada ou grande excesso de pele é indicação de cirurgia — e a Dra. vai dizer isso.",
    diff: { title: "Dois comprimentos de onda", text: "O 1470 nm é absorvido pela água da pele — é ele que faz a retração e estimula o colágeno. O 980 nm interage com a gordura — é ele que faz a lipólise. A Dra. escolhe qual usar, em qual modo (contínuo, pulsado ou pontual) e com qual potência, área por área. Diferente de lasers e ultrassons de superfície, a energia é entregue por dentro, onde a flacidez começa." },
    steps: [
      { t: "Registro e marcação", d: "Fotos para o prontuário, marcação da área em pé e limpeza." },
      { t: "Anestesia local", d: "Aplicada nos pontos de entrada e na área tratada." },
      { t: "Aplicação", d: "A fibra entra por um ponto de menos de 1 mm e percorre a área em movimentos de vai e vem. Você sente um leve calor e pressão." },
      { t: "Orientações e volta pra casa", d: "Curativo mínimo, cuidados por escrito e o WhatsApp da clínica. A Dra. Lorena indica drenagem linfática pós-procedimento." },
    ],
    after: ["Inchaço nos primeiros 3 a 7 dias, sensibilidade ao toque e, em parte das pessoas, roxos leves. Podem surgir pequenas áreas mais firmes sob a pele, que amolecem sozinhas. No corpo, uso de cinta ou faixa por 30 dias. Sem sol direto na área por 4 semanas e sem exercício intenso por 7 dias.", "A retração inicial aparece já no primeiro mês. O resultado final é do colágeno, e ele leva cerca de 90 dias. Na maioria dos casos é uma sessão; papadas maiores ou flacidez mais acentuada podem precisar de 2 a 3, com intervalo de 30 dias — definido na avaliação."],
    who: { title: "Médica na sala, do começo ao fim.", text: "Quem avalia é quem aplica. A Dra. Lorena Lacerda conduz o procedimento pessoalmente, com o LiftEndo — endolaser fabricado no Brasil, registrado na ANVISA.", crm: "CRM-PA 15626" },
    faq: [
      { q: "Dói?", a: "Com a anestesia local, a maioria descreve como um leve calor. Se surgir algum desconforto nos dias seguintes, a Dra. receita analgésico." },
      { q: "É cirurgia? Fica cicatriz?", a: "Não é cirurgia: sem cortes, sem pontos, sem internação. O ponto de entrada da fibra tem menos de 1 mm e fecha em poucos dias." },
      { q: "Quanto tempo dura?", a: "O colágeno novo é seu. A pele continua envelhecendo no ritmo dela, e uma manutenção pode ser indicada a cada 12 meses." },
      { q: "Posso combinar com a mini lipo ou com o CO2?", a: "Pode, e muitas vezes é o plano: a mini lipo tira o volume e o CO2 cuida da pele. A Dra. define a ordem e o intervalo." },
      { q: "Posso fazer no calor de Marabá?", a: "Pode. O cuidado é proteger a área do sol enquanto houver inchaço ou roxo." },
      { q: "Quem não pode fazer?", a: "Gestantes e lactantes, quem tem infecção ativa na área, distúrbios de coagulação ou uso de anticoagulante sem liberação médica, diabetes descompensado. A avaliação médica confirma se o procedimento é indicado para você." },
    ],
    cta: { title: "O endolaser é para o seu caso?", text: "Mande uma foto da área pelo WhatsApp. A equipe agenda sua avaliação com a Dra. Lorena.", button: "Agendar avaliação" },
    related: ["mini-lipo-localizada", "laser-co2-fracionado", "harmonizacao-facial"],
  },

  "blefaroplastia": {
    name: "Blefaroplastia", kicker: "Blefaroplastia", title: "Olhar descansado.",
    subtitle: "Pálpebra superior tratada com laser CO2, com ou sem corte, conforme o grau de flacidez.",
    paragraph: "Na flacidez leve a moderada, o laser atua em pontos microscópicos e estimula colágeno novo, sem corte. Quando há excesso de pele, o mesmo laser faz o corte e remove o que sobra. A técnica é definida na avaliação.",
    equipLine: "Laser CO2 fracionado Hegon · registro ANVISA 81243810014",
    equip: { title: "Laser CO2 Fracionado Hegon", items: ["Laser de CO2 fracionado com registro ANVISA 81243810014", "Profundidade e intensidade ajustadas para a pele fina da pálpebra", "Pontos microscópicos com pele intacta entre eles, o que acelera a recuperação", "Fabricado no Brasil para peles brasileiras, operado pela própria Dra. Lorena"], img: imgHegonCo2 },
    img: imgProcBlefaro, imgPos: "55% 72%", heroH: 480,
    forWhom: [
      { t: "Pele \"sobrando\" na pálpebra superior, leve ou acentuada", area: "Olhos" },
      { t: "Rugas finas ao redor dos olhos (pés de galinha)", area: "Olhos" },
      { t: "Primeiros sinais de queda do olhar", area: "Olhos" },
      { t: "Textura e poros da região", area: "Olhos" },
    ],
    forWhomNote: "Flacidez leve a moderada: laser CO2 sem corte. Excesso de pele que pesa ou cobre os cílios: blefaroplastia com corte a laser. Pálpebra inferior não é tratada no momento. A técnica é definida na avaliação.",
    diff: { title: "Um laser, duas técnicas", text: "No modo fracionado, o laser CO2 faz a pele que existe encolher e se refazer, preservando pele intacta entre os pontos, o que acelera a recuperação. O resultado é sutil e progressivo, com manutenção periódica. No modo cirúrgico, o mesmo laser corta e remove o excesso de pele de uma vez, com menos sangramento que o bisturi, resultado duradouro e cicatriz na dobra da pálpebra. A Dra. escolhe a técnica pelo grau de flacidez, não pela preferência." },
    steps: [
      { t: "Registro e proteção", d: "Fotos para o prontuário, limpeza e proteção dos olhos (protetor ocular)." },
      { t: "Anestésico", d: "Tópico no sem corte, com ação em cerca de 30 minutos enquanto você espera na sala. Local no com corte." },
      { t: "Aplicação", d: "Sem corte: calor e pequenas picadas na pálpebra superior. Com corte: remoção do excesso de pele com o laser e pontos finos." },
      { t: "Orientações e volta pra casa", d: "Cuidados por escrito e o WhatsApp da clínica para qualquer dúvida." },
    ],
    after: ["Sem corte: inchaço e vermelhidão nas pálpebras, com recuperação em 5 a 7 dias. Protetor solar e óculos escuros conforme orientação da Dra.", "Com corte: roxo e sensação de inchaço no local por até 10 dias, com melhora a partir de 5 a 7 dias. Em geral, sessão única e resultado duradouro."],
    who: { title: "Médica na sala, do começo ao fim.", text: "Quem avalia é quem realiza. A Dra. Lorena Lacerda conduz o procedimento pessoalmente, com o laser CO2 Hegon, no modo sem corte ou cirúrgico.", crm: "CRM-PA 15626" },
    faq: [
      { q: "Dói?", a: "Sem corte, com o anestésico tópico, a maioria descreve como calor e picadas leves. Com corte, a anestesia local reduz o desconforto durante o procedimento." },
      { q: "Sem corte ou com corte?", a: "Depende do grau de flacidez. Sem corte é para flacidez leve a moderada. Excesso de pele importante costuma pedir corte — e a Dra. é honesta sobre isso na avaliação." },
      { q: "Quanto tempo dura o procedimento?", a: "Com corte, cerca de duas horas. Sem corte, cerca de uma hora e meia." },
      { q: "Quem não pode fazer?", a: "Gestantes e lactantes e quem tem herpes ativo na região. Peles mais escuras precisam de ajuste de parâmetro para evitar manchas — a Dra. avalia." },
    ],
    cta: { title: "Com corte ou sem corte?", text: "Mande uma foto dos olhos, de frente e sem maquiagem, pelo WhatsApp. A equipe agenda sua avaliação com a Dra. Lorena.", button: "Agendar avaliação" },
    related: ["laser-co2-fracionado", "harmonizacao-facial", "endolaser"],
  },

  "modelacao-glutea": {
    name: "Remodelação Glútea", kicker: "Remodelação glútea", title: "Contorno e projeção,", titleEm: "sem cirurgia.",
    subtitle: "Ácido hialurônico corporal aplicado com cânula em consultório. Reversível e ajustável, em Marabá.",
    paragraph: "Um gel mais denso que o usado no rosto, aplicado abaixo da pele e acima do músculo para trabalhar depressões laterais, projeção e contorno — sem prótese e sem internação.",
    equipLine: "Ácido hialurônico corporal · aplicação exclusivamente médica",
    img: imgProcGluteo, imgPos: "50% 30%", heroH: 360,
    forWhom: [
      { t: "Depressão nas laterais do quadril (hip dips)", area: "Glúteo" },
      { t: "Projeção discreta ou glúteo \"achatado\"", area: "Glúteo" },
      { t: "Assimetria entre os lados", area: "Glúteo" },
      { t: "Perda de volume após emagrecimento", area: "Glúteo" },
      { t: "Quem quer melhorar o contorno sem cirurgia ou prótese", area: "Glúteo" },
    ],
    forWhomNote: "O ácido hialurônico trabalha com contorno e projeção moderada. Quem busca o volume de uma prótese tem indicação cirúrgica. Também não substitui emagrecimento nem trata flacidez acentuada — e a Dra. vai dizer isso na avaliação.",
    diff: { title: "Reversível, ajustável, sem PMMA", text: "O ácido hialurônico é absorvido pelo organismo aos poucos e, se necessário, pode ser dissolvido com uma enzima. A aplicação é feita com cânula de ponta romba, no plano correto, por médica que conhece a anatomia da região — é isso que reduz os riscos do procedimento. Aqui não se usa PMMA, silicone líquido nem qualquer produto permanente ou sem registro." },
    steps: [
      { t: "Registro e marcação", d: "Fotos para o prontuário e marcação da área com você em pé, onde o contorno é avaliado de verdade." },
      { t: "Anestesia local", d: "Aplicada nos pontos de entrada da cânula." },
      { t: "Aplicação e modelagem", d: "O gel é distribuído com cânula e modelado à mão para ficar uniforme." },
      { t: "Orientações e volta pra casa", d: "Cuidados por escrito e o WhatsApp da clínica. Você sai andando." },
    ],
    after: ["Inchaço e sensibilidade por 1 a 2 semanas; roxos leves em parte das pessoas. Nos primeiros dias, evite ficar sentada por longos períodos, deitar de costas e massagear a área. Sem exercício intenso por cerca de 3 semanas, sem sol na região, sem sauna e sem álcool nos primeiros dias.", "O volume que você vê no dia inclui inchaço; o resultado real se define em 2 a 4 semanas. O ácido hialurônico dura em média 12 meses, e a absorção é gradual — o contorno não muda de um dia para o outro. Retoques são possíveis a qualquer momento."],
    who: { title: "Médica na sala, do começo ao fim.", text: "Quem avalia é quem aplica. A Dra. Lorena Lacerda faz a marcação, a aplicação e a modelagem pessoalmente, com técnica de cânula.", crm: "CRM-PA 15626" },
    faq: [
      { q: "Quantos ml eu preciso?", a: "Depende do seu ponto de partida e do objetivo. Casos de contorno pedem menos; projeção pede mais. A Dra. calcula na avaliação, em pé, e mostra o plano antes de qualquer aplicação." },
      { q: "Dói?", a: "Com a anestesia local, a aplicação é bem tolerada. O desconforto é nos dias seguintes, com o inchaço, e passa com analgésico comum." },
      { q: "Fica natural?", a: "O objetivo é proporção, não exagero. Por ser ajustável, o resultado é construído com a quantidade certa e pode ser complementado depois." },
      { q: "É seguro?", a: "Feito por médica, com ácido hialurônico e técnica de cânula no plano correto, as complicações graves são raras — e o produto é reversível. É por isso que aqui não se usa PMMA nem produto permanente." },
      { q: "Quanto tempo dura?", a: "Em média 12 meses, variando com metabolismo, atividade física e cuidados." },
      { q: "Quem não pode fazer?", a: "Gestantes e lactantes, infecção ativa na área, doenças autoimunes em atividade, distúrbios de coagulação. A avaliação médica confirma se o procedimento é indicado para você." },
    ],
    cta: { title: "O que dá para fazer no seu caso?", text: "Mande uma foto de perfil e de costas pelo WhatsApp. A equipe agenda sua avaliação com a Dra. Lorena.", button: "Agendar avaliação" },
    related: ["mini-lipo-localizada", "endolaser", "laser-co2-fracionado"],
  },

  "harmonizacao-facial": {
    name: "Harmonização Facial", kicker: "Harmonização facial", title: "Seu rosto, com as proporções certas.",
    subtitle: "Suavização de linhas de expressão, ácido hialurônico e bioestimulador de colágeno, com planejamento médico individual.",
    paragraph: "Harmonizar não é mudar o rosto — é equilibrar o que já existe. A Dra. avalia estrutura, volume, pele e expressão e monta o plano com o que faz sentido para você. Às vezes, é um produto só.",
    equipLine: "Produtos com registro na ANVISA · aplicação exclusivamente médica",
    img: imgProcHarmonizacao, imgPos: "60% 30%", heroH: 380,
    forWhom: [
      { t: "Linhas de expressão na testa, entre as sobrancelhas e pés de galinha", area: "Expressão" },
      { t: "Sorriso gengival e bruxismo", area: "Expressão" },
      { t: "Olheiras profundas e perda de volume nas maçãs do rosto", area: "Preenchimento" },
      { t: "Lábios, contorno da mandíbula e queixo", area: "Preenchimento" },
      { t: "Sulco entre nariz e boca (bigode chinês)", area: "Preenchimento" },
      { t: "Flacidez inicial e perda de firmeza do rosto e pescoço", area: "Bioestimulador" },
    ],
    forWhomNote: "A indicação e a combinação são definidas na avaliação. Se o seu caso pede outro procedimento — ou pede esperar — a Dra. vai dizer isso.",
    diff: { title: "Três ferramentas, um plano", text: "A suavização de linhas de expressão relaxa os músculos que marcam a pele — age em dias e dura meses. O ácido hialurônico repõe volume e contorno — efeito logo após a aplicação, reabsorvível e reversível. O bioestimulador não preenche: faz a sua própria pele produzir colágeno ao longo de meses. A Dra. combina e sequencia os três conforme o objetivo, sempre com produtos registrados na ANVISA e técnica de cânula onde a anatomia pede." },
    steps: [
      { t: "Registro e marcação", d: "Fotos para o prontuário, análise das proporções e marcação dos pontos com você sentada." },
      { t: "Anestésico", d: "Tópico para as aplicações com agulha; local nos pontos de entrada da cânula. Cerca de 30 minutos." },
      { t: "Aplicação", d: "Em torno de 60 minutos, conforme o número de áreas. Você acompanha no espelho." },
      { t: "Orientações e volta pra casa", d: "Cuidados por escrito e o WhatsApp da clínica para qualquer dúvida." },
    ],
    after: ["Linhas de expressão: sem inchaço; não deitar nem massagear por duas horas; o efeito começa em 3 a 5 dias e se completa em 15. Preenchimento: inchaço e possíveis roxos leves por 3 a 7 dias; o resultado se define em cerca de 2 semanas. Bioestimulador: leve inchaço por alguns dias; o colágeno aparece de forma progressiva a partir de 30 dias e continua por meses.", "Duração média: suavização de linhas de expressão 4 a 6 meses; ácido hialurônico e bioestimulador até 12 meses. O plano de manutenção é definido na avaliação."],
    who: { title: "Médica na sala, do começo ao fim.", text: "Quem avalia é quem aplica. A Dra. Lorena Lacerda faz o planejamento, a marcação e a aplicação pessoalmente, com produtos registrados na ANVISA.", crm: "CRM-PA 15626" },
    faq: [
      { q: "Vai ficar artificial?", a: "O objetivo é proporção, não excesso. A Dra. prefere fazer menos e complementar depois. Reversível é justamente por isso." },
      { q: "Dói?", a: "Com anestésico, a maioria descreve como picadas leves e pressão. Preenchimento com cânula desconforta menos que com agulha." },
      { q: "Quando vejo o resultado?", a: "Preenchimento: logo após a aplicação. Linhas de expressão: em até 15 dias. Bioestimulador: aos poucos, ao longo de meses." },
      { q: "Quanto tempo dura?", a: "Depende do produto e do seu metabolismo. A média está na seção \"Depois\", e a Dra. ajusta a manutenção ao seu caso." },
      { q: "Posso fazer tudo no mesmo dia?", a: "Alguns produtos sim; outros pedem intervalo. A sequência faz parte do plano." },
      { q: "Quem não pode fazer?", a: "Gestantes e lactantes, infecção ativa na área, doenças autoimunes em atividade, uso de anticoagulante sem liberação. A avaliação médica confirma se o procedimento é indicado para você." },
    ],
    cta: { title: "O que faz sentido para o seu rosto?", text: "Mande uma foto de frente e de perfil, sem maquiagem, pelo WhatsApp. A equipe agenda sua avaliação com a Dra. Lorena.", button: "Agendar avaliação" },
    related: ["laser-co2-fracionado", "blefaroplastia", "endolaser"],
  },

  "mini-lipo-localizada": {
    name: "Mini Lipo Localizada", kicker: "Mini lipo localizada", title: "Menos volume,", titleEm: "mais contorno.",
    subtitle: "Papada, braços, culote, parte interna das coxas e joelhos. Anestesia local, cânula fina e sem internação.",
    paragraph: "Para a gordura que resiste a dieta e treino, em áreas pequenas e bem delimitadas. Uma cânula fina retira a gordura por um ponto mínimo, e você volta à rotina em poucos dias. Não é emagrecimento: é contorno.",
    equipLine: "Procedimento médico em consultório · anestesia local",
    img: imgProcMinilipo, imgPos: "50% 45%", heroH: 380,
    forWhom: [
      { t: "Papada", area: "Rosto" },
      { t: "Parte interna dos braços", area: "Corpo" },
      { t: "Culote (lateral do quadril e coxa)", area: "Corpo" },
      { t: "Parte interna das coxas", area: "Corpo" },
      { t: "Joelhos", area: "Corpo" },
    ],
    forWhomNote: "Não fazemos mini lipo de abdômen nem de flancos. Quem tem gordura em áreas maiores, muito volume ou flacidez importante tem indicação cirúrgica com cirurgião plástico — e a Dra. vai dizer isso na avaliação.",
    diff: { title: "Pequena por escolha", text: "A mini lipo funciona porque é limitada: áreas pequenas, volumes pequenos, anestesia local. É isso que permite fazer em consultório, sem os riscos da anestesia geral e sem internação. A Dra. marca a área com você em pé, infiltra a anestesia, retira a gordura com cânula fina e finaliza com compressão. Se a pele da área tem flacidez, o endolaser pode entrar no plano para firmar." },
    steps: [
      { t: "Registro e marcação", d: "Fotos para o prontuário e marcação da área em pé, onde a gordura se mostra de verdade." },
      { t: "Anestesia local", d: "Infiltrada em toda a área, de forma tranquila e bem tolerada. Age em cerca de 10 minutos." },
      { t: "Aspiração", d: "Cânula fina por um ou dois pontos de entrada. Você sente pressão e movimento, não dor. Cerca de 10 minutos por área." },
      { t: "Compressão e volta pra casa", d: "Curativo, cinta ou faixa, cuidados por escrito e o WhatsApp da clínica. Você sai andando." },
    ],
    after: ["Inchaço e roxos por 1 a 2 semanas; dor parecida com a de um treino pesado nos primeiros dias, controlada com analgésico comum. Cinta ou faixa por 10 semanas — é ela que ajuda a pele a se acomodar. Drenagem linfática a partir de 24 horas. Volta ao trabalho em 2 a 3 dias; exercício intenso após uma semana.", "As células retiradas não se regeneram; o resultado depende de manter o peso. O contorno inicial aparece com a saída do inchaço, e o resultado final se define em 3 a 6 meses. Sessão única na maioria dos casos."],
    who: { title: "Médica na sala, do começo ao fim.", text: "Quem avalia é quem aplica. A Dra. Lorena Lacerda conduz a marcação, a anestesia e a aspiração pessoalmente, em ambiente preparado para o procedimento.", crm: "CRM-PA 15626" },
    faq: [
      { q: "Dói?", a: "A anestesia local é feita justamente para reduzir o desconforto. Durante a aspiração você sente pressão e movimento, não dor. Depois, uma sensação parecida com dor de treino por alguns dias." },
      { q: "A gordura volta?", a: "As retiradas não se regeneram. Mas, se você engordar, as que ficaram crescem — por isso o resultado depende da rotina." },
      { q: "Fica cicatriz?", a: "Os pontos de entrada têm poucos milímetros e ficam em dobras. Com protetor solar, clareiam com o tempo." },
      { q: "Por que não abdômen e flancos?", a: "Porque essas áreas costumam pedir volume e cuidado que fogem do que a mini lipo se propõe. Preferimos fazer bem o que é pequeno." },
      { q: "Posso fazer no calor de Marabá?", a: "Pode. O cuidado é a cinta e o sol longe da área enquanto houver roxo." },
      { q: "Quem não pode fazer?", a: "Gestantes e lactantes, distúrbios de coagulação, uso de anticoagulante sem liberação, doenças descompensadas, obesidade. A avaliação médica confirma se o procedimento é indicado para você." },
    ],
    cta: { title: "A mini lipo é para o seu caso?", text: "Mande uma foto da área pelo WhatsApp. A equipe agenda sua avaliação com a Dra. Lorena.", button: "Agendar avaliação" },
    related: ["endolaser", "modelacao-glutea", "laser-co2-fracionado"],
  },

  "tratamento-capilar": {
    name: "Tratamento Capilar", kicker: "Tratamento capilar", title: "Queda de cabelo tem causa. E tratamento.",
    subtitle: "Tricoscopia, exames e diagnóstico antes de qualquer sessão. Depois, LED e medicamentos no couro cabeludo.",
    paragraph: "Cabelo cai por muitos motivos — genética, hormônios, tireoide, ferro baixo, estresse, pós-parto. Por isso a primeira sessão é uma consulta, com tricoscopia e exames. O tratamento começa com o diagnóstico.",
    equipLine: "Capellux i9 Profissional · 204 LEDs de 635 nm · registro ANVISA 80455460006",
    equip: { title: "Capellux i9 Profissional", items: ["Capacete de LED de baixa potência com 204 LEDs de 635 nm", "Estimula o folículo sem calor nem dor: 15 minutos por sessão", "Registro ANVISA 80455460006", "Usado em conjunto com a aplicação de medicamentos no couro cabeludo"], img: imgCapelluxI9 },
    img: imgProcCapilarCard, imgPos: "20% 60%", heroH: 360,
    forWhom: [
      { t: "Calvície hereditária (alopecia androgenética) em homens e mulheres", area: "Couro cabeludo" },
      { t: "Afinamento dos fios e entradas", area: "Couro cabeludo" },
      { t: "Queda intensa pós-parto, pós-doença ou pós-estresse", area: "Couro cabeludo" },
      { t: "Fios fracos, quebradiços, sem volume", area: "Couro cabeludo" },
      { t: "Queda por deficiência nutricional ou hormonal", area: "Couro cabeludo" },
    ],
    forWhomNote: "Alguns tipos de alopecia precisam de investigação ou encaminhamento antes de qualquer sessão. A Dra. só trata o que diagnosticou.",
    diff: { title: "Diagnóstico primeiro, sessão depois", text: "A tricoscopia amplia o couro cabeludo e mostra o que o olho não vê: miniaturização dos fios, inflamação, padrão da perda. Com os exames, a Dra. sabe se a queda é genética, hormonal, nutricional ou mista — e monta o protocolo. As sessões combinam LED de baixa potência, que estimula o folículo sem calor nem dor, com aplicação de medicamentos direto no couro cabeludo, onde o comprimido e a loção não chegam com a mesma força. Prescrição oral e tópica completa o plano." },
    steps: [
      { t: "Registro", d: "Fotos padronizadas e tricoscopia de acompanhamento para comparar a evolução." },
      { t: "LED de baixa potência", d: "15 minutos de capacete. Sem calor; você só espera." },
      { t: "Medicamentos no couro cabeludo", d: "Microaplicações nos pontos marcados. Cerca de 30 minutos. Desconforto leve, tolerado sem anestesia na maioria dos casos." },
      { t: "Orientações e volta pra casa", d: "Cuidados por escrito, prescrição e o WhatsApp da clínica." },
    ],
    after: ["Sem afastamento. Pode haver pequenos pontos vermelhos e sensibilidade no couro cabeludo por 1 a 2 dias. Lavar o cabelo após 12 horas; sem sol direto e sem piscina por 5 dias.", "Ciclo do cabelo é lento: os primeiros sinais (menos queda, fios novos finos) aparecem em cerca de 3 meses, e o resultado se consolida entre 6 e 12 meses. Sessões quinzenais ou mensais, espaçadas conforme a resposta. Alopecia hereditária é crônica: sem manutenção, o ganho se perde ao longo do tempo. A Dra. é direta sobre isso desde a primeira consulta."],
    who: { title: "Médica na sala, do começo ao fim.", text: "Quem diagnostica é quem trata. A Dra. Lorena Lacerda faz a tricoscopia, interpreta os exames, prescreve e aplica pessoalmente.", crm: "CRM-PA 15626" },
    faq: [
      { q: "Serve para calvície de família?", a: "Pode frear a queda e fortalecer os fios que ainda existem. Não faz nascer cabelo onde o folículo já morreu — para isso a indicação é transplante, e a Dra. vai dizer isso." },
      { q: "Dói?", a: "O LED não sente nada. As aplicações são picadas leves e rápidas." },
      { q: "Em quanto tempo vejo resultado?", a: "Três meses para os primeiros sinais, seis a doze para o resultado. Cabelo cresce cerca de 1 cm por mês; não tem como acelerar isso." },
      { q: "Preciso mesmo dos exames?", a: "Precisa. Ferro, tireoide e hormônios alterados sabotam qualquer tratamento capilar. Tratar sem isso é tratar às cegas." },
      { q: "Mulher também faz?", a: "Faz, e é muito comum. A queda feminina tem padrão e causas próprias, e o protocolo é ajustado." },
      { q: "Quem não pode fazer?", a: "Gestantes e lactantes (para os injetáveis), infecção ou dermatite ativa no couro cabeludo, uso de fotossensibilizantes. A avaliação médica confirma se o tratamento é indicado para você." },
    ],
    cta: { title: "Sua queda tem nome?", text: "Mande uma foto do couro cabeludo — topo da cabeça e entradas, com luz natural — pelo WhatsApp. A equipe agenda sua consulta com a Dra. Lorena.", button: "Agendar consulta" },
    related: ["harmonizacao-facial", "laser-co2-fracionado", "endolaser"],
  },
};
