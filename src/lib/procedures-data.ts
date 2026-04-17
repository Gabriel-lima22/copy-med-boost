export interface ProcedureData {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  shortDescription: string;
  description: string[];
  indications: string[];
  benefits: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  sessionInfo?: string;
  recoveryInfo?: string;
  faq: { question: string; answer: string }[];
  relatedProcedures: string[];
  metaTitle: string;
  metaDescription: string;
}

export const procedures: Record<string, ProcedureData> = {
  "harmonizacao-facial": {
    slug: "harmonizacao-facial",
    title: "Harmonização Facial em Marabá",
    shortTitle: "Harmonização Facial",
    subtitle: "Equilíbrio e proporção para o seu rosto com técnicas minimamente invasivas",
    shortDescription: "Equilíbrio e proporção para o seu rosto",
    description: [
      "A harmonização facial é um conjunto de procedimentos personalizados que podem incluir preenchimentos, bioestimuladores e aplicações para relaxamento muscular e suavização de linhas de expressão. Cada protocolo é montado de forma individualizada pela Dra. Lorena, respeitando as proporções naturais do rosto e as necessidades de cada paciente.",
      "Na Clínica Lacerda, a Dra. Lorena Lacerda combina técnicas como preenchimentos com ácido hialurônico, bioestimuladores de colágeno e aplicações para relaxamento muscular facial para criar um plano de tratamento personalizado.",
      "O objetivo é realçar a beleza natural de cada paciente, respeitando suas características individuais e proporcionando resultados seguros e satisfatórios."
    ],
    indications: [
      "Realce das proporções faciais",
      "Volume facial mais equilibrado",
      "Contorno mandibular mais definido",
      "Suavização de linhas de expressão"
    ],
    benefits: [
      { title: "Resultado Natural", description: "Técnicas que respeitam suas características individuais para um resultado harmonioso" },
      { title: "Minimamente Invasivo", description: "Procedimentos realizados em consultório com recuperação rápida" },
      { title: "Personalizado", description: "Avaliação individualizada para um plano de tratamento sob medida" },
      { title: "Seguro", description: "Realizado por médica especialista com materiais de alta qualidade" }
    ],
    steps: [
      { title: "Avaliação", description: "Consulta detalhada para entender seus objetivos e avaliar as proporções faciais" },
      { title: "Planejamento", description: "Definição do plano de tratamento personalizado com as técnicas mais adequadas" },
      { title: "Procedimento", description: "Aplicação das técnicas escolhidas com conforto e segurança" },
      { title: "Acompanhamento", description: "Retorno para avaliação dos resultados e ajustes se necessário" }
    ],
    faq: [
      { question: "O que é harmonização facial?", answer: "A harmonização facial é um conjunto de procedimentos estéticos minimamente invasivos que visa equilibrar as proporções do rosto, como preenchimentos, bioestimuladores de colágeno e aplicações para relaxamento muscular." },
      { question: "A harmonização facial dói?", answer: "Os procedimentos são realizados com anestesia local ou tópica, proporcionando conforto durante a aplicação. A sensibilidade varia de pessoa para pessoa." },
      { question: "Quanto tempo dura o resultado?", answer: "Os resultados podem variar de acordo com as técnicas utilizadas e as características individuais de cada paciente, podendo durar de 6 meses a 2 anos." },
      { question: "Quem pode fazer harmonização facial?", answer: "A indicação é feita após avaliação médica individualizada. É importante que o paciente esteja em boas condições de saúde e tenha expectativas realistas." }
    ],
    relatedProcedures: ["preenchimento-labial", "bioestimuladores-colageno", "skincare-manchas"],
    metaTitle: "Harmonização Facial em Marabá - Clínica Lacerda | Dra. Lorena Lacerda",
    metaDescription: "Harmonização facial com resultados naturais em Marabá/PA. Dra. Lorena Lacerda — CRM 15626. Agende sua avaliação."
  },
  "preenchimento-labial": {
    slug: "preenchimento-labial",
    title: "Preenchimento Labial em Marabá",
    shortTitle: "Preenchimento Labial",
    subtitle: "Lábios naturais e definidos com ácido hialurônico",
    shortDescription: "Lábios naturais e definidos",
    description: [
      "O preenchimento labial com ácido hialurônico é um procedimento minimamente invasivo que proporciona volume, contorno e hidratação aos lábios, resultando em uma aparência natural e harmônica.",
      "A Dra. Lorena Lacerda realiza o procedimento com técnicas seguras e precisas, respeitando as proporções faciais de cada paciente para um resultado que valoriza a beleza natural.",
      "O ácido hialurônico é uma substância biocompatível, presente naturalmente no organismo, o que torna o procedimento seguro e com resultado imediato."
    ],
    indications: [
      "Lábios finos ou assimétricos",
      "Perda de volume labial",
      "Desejo de contorno mais definido",
      "Hidratação labial profunda"
    ],
    benefits: [
      { title: "Resultado Imediato", description: "Lábios mais volumosos e definidos logo após o procedimento" },
      { title: "Natural", description: "Técnica que respeita as proporções do rosto para um resultado harmonioso" },
      { title: "Reversível", description: "O ácido hialurônico pode ser dissolvido se necessário" },
      { title: "Seguro", description: "Substância biocompatível com baixo risco de reações" }
    ],
    steps: [
      { title: "Avaliação", description: "Análise das proporções labiais e definição do resultado desejado" },
      { title: "Anestesia", description: "Aplicação de anestesia tópica para conforto durante o procedimento" },
      { title: "Preenchimento", description: "Injeção precisa do ácido hialurônico nos pontos planejados" },
      { title: "Resultado", description: "Resultado imediato com lábios mais definidos e harmônicos" }
    ],
    sessionInfo: "Sessão de aproximadamente 30 minutos",
    recoveryInfo: "Inchaço leve nos primeiros 2-3 dias",
    faq: [
      { question: "O preenchimento labial dói?", answer: "O procedimento é realizado com anestesia tópica, minimizando o desconforto. A sensibilidade pode variar de pessoa para pessoa." },
      { question: "Quanto tempo dura o preenchimento labial?", answer: "Os resultados podem durar de 6 a 12 meses, dependendo do metabolismo e das características individuais de cada paciente." },
      { question: "O resultado fica natural?", answer: "Sim, quando realizado por profissional qualificado, o preenchimento labial proporciona um resultado natural e harmonioso com as proporções do rosto." },
      { question: "Posso escolher o volume?", answer: "Sim, o volume é definido em conjunto com a paciente durante a avaliação, sempre respeitando a harmonia facial." }
    ],
    relatedProcedures: ["harmonizacao-facial", "bioestimuladores-colageno", "skincare-manchas"],
    metaTitle: "Preenchimento Labial em Marabá - Clínica Lacerda | Dra. Lorena Lacerda",
    metaDescription: "Preenchimento labial com ácido hialurônico em Marabá/PA. Lábios naturais e definidos. Dra. Lorena Lacerda — CRM 15626. Agende."
  },
  "bioestimuladores-colageno": {
    slug: "bioestimuladores-colageno",
    title: "Bioestimuladores de Colágeno em Marabá",
    shortTitle: "Bioestimuladores",
    subtitle: "Rejuvenescimento de dentro para fora com estímulo natural de colágeno",
    shortDescription: "Rejuvenescimento de dentro pra fora",
    description: [
      "Os bioestimuladores de colágeno são substâncias injetáveis que estimulam a produção natural de colágeno pelo organismo, promovendo melhora progressiva da firmeza, textura e elasticidade da pele.",
      "Diferente dos preenchimentos tradicionais, os bioestimuladores atuam a longo prazo, estimulando o próprio corpo a produzir colágeno novo, resultando em um rejuvenescimento gradual e natural.",
      "Na Clínica Lacerda, a Dra. Lorena Lacerda utiliza os bioestimuladores em diversas áreas como rosto, pescoço, colo, mãos e glúteos, sempre com avaliação individualizada."
    ],
    indications: [
      "Flacidez facial e corporal",
      "Perda de firmeza da pele",
      "Rejuvenescimento do pescoço e colo",
      "Melhora da textura da pele das mãos"
    ],
    benefits: [
      { title: "Resultado Natural", description: "Estimula o colágeno do próprio organismo para um rejuvenescimento gradual" },
      { title: "Longa Duração", description: "Resultados podem durar até 2 anos após o protocolo completo" },
      { title: "Versátil", description: "Pode ser aplicado em diversas áreas do corpo e rosto" },
      { title: "Progressivo", description: "Melhora contínua ao longo de 2 a 3 meses após a aplicação" }
    ],
    steps: [
      { title: "Avaliação", description: "Análise do grau de flacidez e definição das áreas a serem tratadas" },
      { title: "Aplicação", description: "Injeção do bioestimulador nos pontos estratégicos" },
      { title: "Estímulo", description: "O organismo inicia a produção de colágeno nas semanas seguintes" },
      { title: "Resultado", description: "Melhora progressiva visível em 2-3 meses" }
    ],
    recoveryInfo: "Possível inchaço leve por 2-3 dias",
    faq: [
      { question: "O que são bioestimuladores de colágeno?", answer: "São substâncias injetáveis que estimulam o próprio organismo a produzir colágeno novo, melhorando firmeza, textura e elasticidade da pele de forma natural e progressiva." },
      { question: "Em quais áreas podem ser aplicados?", answer: "Os bioestimuladores podem ser aplicados no rosto, pescoço, colo, mãos e glúteos, sempre com avaliação individualizada." },
      { question: "Quantas sessões são necessárias?", answer: "O número de sessões varia de acordo com cada paciente e a área a ser tratada. Geralmente, são recomendadas 2 a 3 sessões com intervalo de 30 a 60 dias." },
      { question: "Quando vejo os resultados?", answer: "Os resultados são progressivos e começam a ser percebidos entre 2 e 3 meses após a aplicação, à medida que o colágeno novo é produzido." }
    ],
    relatedProcedures: ["harmonizacao-facial", "skincare-manchas", "preenchimento-labial"],
    metaTitle: "Bioestimuladores de Colágeno em Marabá - Clínica Lacerda | Dra. Lorena Lacerda",
    metaDescription: "Bioestimuladores de colágeno em Marabá/PA. Rejuvenescimento natural e progressivo. Dra. Lorena Lacerda — CRM 15626. Agende."
  },
  "laser-co2-fracionado": {
    slug: "laser-co2-fracionado",
    title: "Laser CO2 Fracionado em Marabá",
    shortTitle: "Laser CO2 Fracionado",
    subtitle: "Renovação profunda da pele com tecnologia de última geração",
    shortDescription: "Renovação profunda da pele",
    description: [
      "O Laser CO2 Fracionado é uma tecnologia avançada que promove a renovação celular profunda, tratando manchas, cicatrizes de acne, rugas e flacidez com resultados visíveis e duradouros.",
      "O procedimento cria microzonas de tratamento na pele, estimulando a produção de colágeno e elastina, resultando em uma pele mais firme, uniforme e rejuvenescida.",
      "Na Clínica Lacerda, o Laser CO2 é um dos tratamentos exclusivos, realizado pela Dra. Lorena Lacerda com protocolo personalizado para cada tipo de pele e necessidade."
    ],
    indications: [
      "Cicatrizes de acne",
      "Manchas e melasma",
      "Rugas finas e flacidez",
      "Textura irregular da pele"
    ],
    benefits: [
      { title: "Renovação Profunda", description: "Estimula a regeneração celular e produção de colágeno" },
      { title: "Resultados Visíveis", description: "Melhora perceptível já na primeira sessão" },
      { title: "Versatilidade", description: "Trata múltiplas condições de pele em um único procedimento" },
      { title: "Tecnologia Avançada", description: "Equipamento de última geração para máxima eficácia e segurança" }
    ],
    steps: [
      { title: "Avaliação", description: "Análise detalhada da pele e definição do protocolo ideal" },
      { title: "Preparação", description: "Limpeza da pele e aplicação de anestesia tópica" },
      { title: "Aplicação", description: "Tratamento com laser nos pontos definidos, duração de 30-60 minutos" },
      { title: "Recuperação", description: "Orientações de cuidados pós-procedimento para melhor resultado" }
    ],
    sessionInfo: "Sessão de 30 a 60 minutos",
    recoveryInfo: "Recuperação de 5 a 7 dias",
    faq: [
      { question: "O Laser CO2 dói?", answer: "O procedimento é realizado com anestesia tópica, minimizando o desconforto. Pode haver sensação de calor durante a aplicação." },
      { question: "Quantas sessões são necessárias?", answer: "O número de sessões varia de acordo com a condição tratada e a resposta individual de cada paciente. Geralmente, 1 a 3 sessões são recomendadas." },
      { question: "Qual o tempo de recuperação?", answer: "A recuperação leva em média 5 a 7 dias, com vermelhidão e descamação da pele. É fundamental seguir as orientações médicas e usar proteção solar." },
      { question: "O Laser CO2 é seguro?", answer: "Sim, quando realizado por profissional qualificado e com equipamento adequado, o Laser CO2 Fracionado é um procedimento seguro e eficaz." }
    ],
    relatedProcedures: ["skincare-manchas", "bioestimuladores-colageno", "harmonizacao-facial"],
    metaTitle: "Laser CO2 Fracionado em Marabá - Clínica Lacerda | Dra. Lorena Lacerda",
    metaDescription: "Laser CO2 Fracionado em Marabá/PA. Tratamento de manchas, cicatrizes e rejuvenescimento. Dra. Lorena Lacerda — CRM 15626. Agende."
  },
  "tratamento-capilar": {
    slug: "tratamento-capilar",
    title: "Tratamento Capilar em Marabá",
    shortTitle: "Tratamento Capilar",
    subtitle: "Combata a queda e fortaleça os fios com protocolos personalizados",
    shortDescription: "Combata a queda e fortaleça os fios",
    description: [
      "O tratamento capilar na Clínica Lacerda abrange uma variedade de procedimentos para combater a queda de cabelo, alopecia e calvície, com avaliação completa do couro cabeludo e diagnóstico preciso.",
      "A Dra. Lorena Lacerda utiliza técnicas como a MMP (Microinfusão de Medicamentos Percutânea), que permite a aplicação direta de medicamentos no couro cabeludo para estimular o crescimento capilar.",
      "Cada paciente recebe um protocolo personalizado, considerando as causas da queda capilar e as melhores opções de tratamento para seu caso específico."
    ],
    indications: [
      "Queda de cabelo",
      "Alopecia androgenética",
      "Enfraquecimento dos fios",
      "Falhas no couro cabeludo"
    ],
    benefits: [
      { title: "Diagnóstico Preciso", description: "Avaliação completa para identificar as causas da queda capilar" },
      { title: "MMP", description: "Microinfusão de medicamentos diretamente no couro cabeludo" },
      { title: "Personalizado", description: "Protocolo sob medida para cada tipo de problema capilar" },
      { title: "Resultados Progressivos", description: "Melhora gradual com fortalecimento e crescimento dos fios" }
    ],
    steps: [
      { title: "Avaliação", description: "Consulta com análise do couro cabeludo e histórico do paciente" },
      { title: "Diagnóstico", description: "Identificação das causas e definição do protocolo de tratamento" },
      { title: "Tratamento", description: "Aplicação das técnicas escolhidas (MMP, medicamentos, etc.)" },
      { title: "Manutenção", description: "Acompanhamento contínuo e ajustes no protocolo conforme necessário" }
    ],
    faq: [
      { question: "O que causa a queda de cabelo?", answer: "A queda capilar pode ter diversas causas, incluindo fatores genéticos, hormonais, nutricionais, estresse e doenças do couro cabeludo. A avaliação médica é essencial para identificar a causa." },
      { question: "O que é MMP capilar?", answer: "A MMP (Microinfusão de Medicamentos Percutânea) é uma técnica que permite a aplicação de medicamentos diretamente no couro cabeludo através de microagulhas, potencializando a absorção e os resultados." },
      { question: "Quanto tempo leva para ver resultados?", answer: "Os resultados variam de acordo com cada paciente e a causa da queda. Geralmente, melhorias começam a ser percebidas a partir de 3 a 6 meses de tratamento." },
      { question: "O tratamento é doloroso?", answer: "Os procedimentos são realizados com técnicas que minimizam o desconforto. A sensibilidade pode variar de pessoa para pessoa." }
    ],
    relatedProcedures: ["skincare-manchas", "bioestimuladores-colageno", "harmonizacao-facial"],
    metaTitle: "Tratamento Capilar em Marabá - Clínica Lacerda | Dra. Lorena Lacerda",
    metaDescription: "Tratamento capilar em Marabá/PA. Combata a queda de cabelo com MMP e protocolos personalizados. Dra. Lorena Lacerda — CRM 15626."
  },
  "epilacao-laser": {
    slug: "epilacao-laser",
    title: "Epilação a Laser em Marabá",
    shortTitle: "Epilação a Laser",
    subtitle: "Depilação definitiva com tecnologia avançada",
    shortDescription: "Depilação definitiva com tecnologia",
    description: [
      "A epilação a laser é o método mais eficaz para remoção definitiva de pelos indesejados. Utilizando laser de diodo de última geração, o procedimento é seguro, rápido e pode ser aplicado em todas as áreas do corpo.",
      "O laser atua diretamente no folículo piloso, reduzindo progressivamente o crescimento dos pelos a cada sessão, proporcionando uma pele lisa e livre de pelos.",
      "Na Clínica Lacerda, o procedimento é realizado com equipamento de alta tecnologia, garantindo eficácia para diferentes tipos de pele e espessuras de pelo."
    ],
    indications: [
      "Pelos indesejados em qualquer área do corpo",
      "Foliculite (inflamação do pelo encravado)",
      "Sensibilidade a métodos tradicionais de depilação",
      "Busca por praticidade e conforto"
    ],
    benefits: [
      { title: "Definitivo", description: "Redução progressiva e duradoura dos pelos a cada sessão" },
      { title: "Todas as Áreas", description: "Pode ser aplicado em rosto, corpo e áreas íntimas" },
      { title: "Rápido", description: "Sessões de poucos minutos a 1 hora dependendo da área" },
      { title: "Confortável", description: "Tecnologia com sistema de resfriamento para conforto durante a aplicação" }
    ],
    steps: [
      { title: "Avaliação", description: "Análise do tipo de pele, pelo e definição do protocolo" },
      { title: "Preparação", description: "Orientações pré-procedimento (tricotomia da área)" },
      { title: "Aplicação", description: "Sessão de laser com sistema de resfriamento para conforto" },
      { title: "Manutenção", description: "Sessões periódicas conforme protocolo (geralmente 6-10 sessões)" }
    ],
    faq: [
      { question: "Quantas sessões são necessárias?", answer: "Geralmente são necessárias de 6 a 10 sessões, com intervalos de 4 a 6 semanas entre elas. O número pode variar conforme a área tratada e as características individuais." },
      { question: "A epilação a laser dói?", answer: "O equipamento possui sistema de resfriamento que minimiza o desconforto. A sensação pode variar conforme a área tratada e a sensibilidade individual." },
      { question: "Funciona em todos os tipos de pele?", answer: "O laser de diodo é seguro e eficaz para diferentes fototipos de pele. A avaliação prévia é importante para definir os parâmetros ideais." },
      { question: "Os resultados são permanentes?", answer: "A epilação a laser promove uma redução significativa e duradoura dos pelos. Pode haver necessidade de sessões de manutenção esporádicas." }
    ],
    relatedProcedures: ["skincare-manchas", "harmonizacao-facial", "laser-co2-fracionado"],
    metaTitle: "Epilação a Laser em Marabá - Clínica Lacerda | Dra. Lorena Lacerda",
    metaDescription: "Epilação a laser em Marabá/PA. Depilação definitiva para todas as áreas. Dra. Lorena Lacerda — CRM 15626. Agende sua avaliação."
  },
  "skincare-manchas": {
    slug: "skincare-manchas",
    title: "Skincare e Tratamento de Manchas em Marabá",
    shortTitle: "Skincare e Manchas",
    subtitle: "Pele uniforme e radiante com protocolos personalizados",
    shortDescription: "Pele uniforme e radiante",
    description: [
      "O tratamento de manchas e cuidados com a pele (skincare) na Clínica Lacerda envolve uma abordagem completa, utilizando técnicas como peeling químico, microagulhamento e drug delivery para tratar melasma, manchas solares, acne e outras condições.",
      "A Dra. Lorena Lacerda avalia cada paciente individualmente, considerando o tipo de pele, as condições a serem tratadas e o estilo de vida para criar um protocolo personalizado e eficaz.",
      "Os tratamentos podem incluir procedimentos em consultório combinados com um protocolo de skincare domiciliar para potencializar e manter os resultados."
    ],
    indications: [
      "Melasma e manchas solares",
      "Acne ativa e cicatrizes de acne",
      "Textura irregular da pele",
      "Envelhecimento precoce da pele"
    ],
    benefits: [
      { title: "Personalizado", description: "Protocolo sob medida para seu tipo de pele e necessidades" },
      { title: "Múltiplas Técnicas", description: "Combinação de peeling, microagulhamento e drug delivery" },
      { title: "Resultados Progressivos", description: "Melhora gradual e contínua da qualidade da pele" },
      { title: "Prevenção", description: "Cuidados que previnem novas manchas e envelhecimento" }
    ],
    steps: [
      { title: "Avaliação", description: "Análise detalhada da pele e identificação das condições a tratar" },
      { title: "Protocolo", description: "Definição do plano de tratamento com as técnicas mais indicadas" },
      { title: "Tratamento", description: "Sessões em consultório + orientação de skincare domiciliar" },
      { title: "Manutenção", description: "Acompanhamento para ajustes e manutenção dos resultados" }
    ],
    faq: [
      { question: "Quais tipos de manchas podem ser tratados?", answer: "Diversos tipos de manchas podem ser tratados, incluindo melasma, manchas solares (melanose), manchas pós-inflamatórias e sardas. A avaliação médica define o melhor protocolo para cada caso." },
      { question: "O peeling químico é seguro?", answer: "Sim, quando realizado por profissional qualificado e com o ácido adequado para cada tipo de pele, o peeling químico é seguro e eficaz." },
      { question: "Quantas sessões são necessárias?", answer: "O número de sessões varia conforme o tipo e a extensão das manchas, e as características individuais da pele. O protocolo é definido na consulta de avaliação." },
      { question: "Preciso usar protetor solar?", answer: "Sim, o uso diário de protetor solar é fundamental durante e após o tratamento, sendo um dos pilares para manter os resultados e prevenir novas manchas." }
    ],
    relatedProcedures: ["laser-co2-fracionado", "bioestimuladores-colageno", "harmonizacao-facial"],
    metaTitle: "Tratamento de Manchas em Marabá - Skincare | Clínica Lacerda | Dra. Lorena Lacerda",
    metaDescription: "Tratamento de manchas e skincare em Marabá/PA. Melasma, acne e rejuvenescimento. Dra. Lorena Lacerda — CRM 15626. Agende."
  }
};