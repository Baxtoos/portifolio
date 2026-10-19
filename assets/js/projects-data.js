/**
 * projects-data.js
 * Curated projects portfolio for Sérgio Bastos (Baxtoos)
 */

const portfolioProjects = [
  {
    id: 'diex-ecosystem',
    title: 'DIEX Tech Studio & Ecossistema Digital',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Ecossistema',
    badge: 'Destaque Corporativo',
    shortDescription: 'Ecossistema digital de soluções web de alta conversão, portais corporativos, catálogos dinâmicos e sistemas comerciais.',
    coverImage: 'assets/images/projects/autom-hero.jpg',
    gallery: [
      'assets/images/projects/autom-hero.jpg',
      'assets/images/projects/diex-auto-1.jpg',
      'assets/images/projects/diex-auto-2.jpg'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Vite', 'Supabase', 'Tailwind / Vanilla CSS', 'SEO Avançado'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://github.com/Baxtoos/diex-site',
    featured: true,
    stats: {
      metric1: '+12 Soluções Entregues',
      metric2: '100% Responsivo',
      metric3: '< 0.8s FCP'
    },
    overview: 'Iniciativa tecnológica e estúdio de desenvolvimento focado em construir infraestrutura digital para empresas do interior paulista e além, unindo design de ponta, performance extrema e integração comercial via WhatsApp e APIs.',
    challenge: 'Empresas consolidadas em seus nichos (metalurgia, fábricas, imobiliárias de alto padrão, comércio especializado) não possuíam presença digital condizente com sua autoridade ou perdiam tempo em atendimentos manuais.',
    solution: 'Criação de portais sob medida com arquitetura moderna em componentes, otimização de renderização, fluxos automatizados de cotação e layouts imersivos de alta autoridade.',
    keyFeatures: [
      'Arquitetura modular de componentes em React e TypeScript',
      'Integração com Supabase para dados dinâmicos e formulários de alta conversão',
      'Renderização ultra-veloz com SEO técnico estruturado (Schema.org, OpenGraph)',
      'Design System proprietário com estética dark futurista e micro-interações fluidas'
    ]
  },
  {
    id: 'appfisio',
    title: 'AppFisio — Gestão Clínica & Fisioterapia',
    category: 'fullstack',
    categoryLabel: 'Full-Stack SaaS',
    badge: 'SaaS em Produção',
    shortDescription: 'Plataforma completa para fisioterapeutas gerenciarem prontuários eletrônicos de pacientes, rotinas de reabilitação e prescrição de exercícios.',
    coverImage: 'assets/images/projects/appfisio-preview.jpg',
    gallery: [
      'assets/images/projects/appfisio-preview.jpg'
    ],
    techStack: ['Node.js', 'Express', 'Prisma ORM', 'SQLite / PostgreSQL', 'RESTful API', 'HTML5/CSS3', 'Vercel Deployment'],
    githubUrl: 'https://github.com/Baxtoos/appFisio-',
    liveUrl: 'https://github.com/Baxtoos/appFisio-',
    featured: true,
    stats: {
      metric1: 'Arquitetura RESTful',
      metric2: 'Prisma ORM Tipado',
      metric3: 'Prontuário Digital'
    },
    overview: 'Sistema Full-Stack desenvolvido para otimizar o fluxo de trabalho de clínicas de fisioterapia e profissionais autônomos, permitindo acompanhamento minucioso da evolução motora de pacientes.',
    challenge: 'Muitos fisioterapeutas enfrentam dificuldade para documentar a evolução de tratamentos em planilhas ou papel, gerando falta de padronização nas séries de exercícios e histórico fragmentado.',
    solution: 'Desenvolvimento de uma API REST estruturada em Node.js e Express, utilizando Prisma ORM para manipulação segura e tipada do banco de dados, com autenticação, endpoints de prontuário e interface intuitiva.',
    keyFeatures: [
      'Modelagem relacional completa com Prisma ORM e migrações estruturadas',
      'Módulo de cadastro de pacientes, anamnese e histórico de lesões',
      'Catálogo de exercícios terapêuticos e criação de cronogramas de tratamento',
      'Configuração pronta para deploy serverless na Vercel com banco em nuvem'
    ]
  },
  {
    id: 'eventhub',
    title: 'EventHub — Gestão de Eventos & Ingressos',
    category: 'architecture',
    categoryLabel: 'Engenharia de Software',
    badge: 'Arquitetura Java MVC',
    shortDescription: 'Sistema corporativo para gerenciamento completo de eventos, controle de capacidade, emissão de ingressos e validação de acesso.',
    coverImage: 'assets/images/projects/eventhub-preview.jpg',
    gallery: [
      'assets/images/projects/eventhub-preview.jpg'
    ],
    techStack: ['Java', 'Spring Boot', 'JPA / Hibernate', 'Arquitetura MVC', 'MySQL', 'Design Patterns'],
    githubUrl: 'https://github.com/Baxtoos/event-hub',
    liveUrl: 'https://github.com/Baxtoos/event-hub',
    featured: true,
    stats: {
      metric1: 'Padrão MVC + Services',
      metric2: 'Persistência JPA',
      metric3: 'Engenharia de Requisitos'
    },
    overview: 'Projeto de grande porte desenvolvido com rigor de engenharia de software (LP1 e APSI), aplicando modelagem orientada a objetos avançada, persistência com Hibernate e documentação completa de requisitos e casos de uso.',
    challenge: 'Garantir consistência transacional e integridade relacional ao gerenciar simultaneamente lotes de ingressos, organizadores, participantes e controle de acesso.',
    solution: 'Implementação de arquitetura em camadas (Controller -> Service -> Repository / DAO) com tratamento defensivo de exceções e persistência relacional orquestrada por JPA/Hibernate.',
    keyFeatures: [
      'Separação estrita de responsabilidades no padrão MVC com Camada de Serviços',
      'Documentação extensiva de Requisitos Funcionais, Não-Funcionais e Diagramas de Caso de Uso',
      'Controle transacional para evitar overbooking de ingressos em sessões concorrentes',
      'Camada de validação de dados em regras de negócio no backend'
    ]
  },
  {
    id: 'carton',
    title: 'CarTon — Gestão de Oficinas Mecânicas',
    category: 'architecture',
    categoryLabel: 'Engenharia de Software',
    badge: 'Sistemas Complexos',
    shortDescription: 'Sistema completo para gestão operacional de oficinas mecânicas: ordens de serviço, controle de peças e agendamento de manutenção veicular.',
    coverImage: 'assets/images/projects/carton-preview.jpg',
    gallery: [
      'assets/images/projects/carton-preview.jpg'
    ],
    techStack: ['Java / Web', 'Modelagem UML', 'Análise & Design', 'Engenharia de Requisitos', 'Testes de Software'],
    githubUrl: 'https://github.com/Baxtoos/CarTon',
    liveUrl: 'https://github.com/Baxtoos/CarTon',
    featured: true,
    stats: {
      metric1: 'Ciclo de Vida Completo',
      metric2: 'UML & Casos de Uso',
      metric3: 'Gestão de Frotas'
    },
    overview: 'Software corporativo projetado desde a fase de elicitação de requisitos, design de interação, modelagem de classes e banco até a implementação e testes unitários/integrados.',
    challenge: 'Oficinas sofrem com desencontros no status de consertos, controle de peças em estoque e transparência de custos para os proprietários de veículos.',
    solution: 'Estruturação de um pipeline completo de engenharia de software com repositório organizado em fases (1. Requisitos, 2. Análise/Design, 3. Implementação, 4. Testes, 5. Implantação).',
    keyFeatures: [
      'Acompanhamento do ciclo de vida da Ordem de Serviço (Entrada, Diagnóstico, Peças, Entrega)',
      'Catálogo de peças com alerta de estoque mínimo e custo de mão-de-obra',
      'Histórico veicular por placa e chassi para rastreabilidade de manutenções anteriores',
      'Documentação de engenharia seguindo as melhores práticas acadêmicas e de mercado'
    ]
  },
  {
    id: 'sistema-aura',
    title: 'AURA — Plataforma em Microsserviços',
    category: 'fullstack',
    categoryLabel: 'Backend & DevOps',
    badge: 'Docker & Microsserviços',
    shortDescription: 'Ambiente conteinerizado com orquestração Docker Compose, reverse proxy Nginx, banco de dados MySQL e API RESTful.',
    coverImage: 'assets/images/projects/aura-preview.jpg',
    gallery: [
      'assets/images/projects/aura-preview.jpg'
    ],
    techStack: ['Docker', 'Docker Compose', 'Nginx', 'MySQL', 'Node.js / API', 'Linux Containers'],
    githubUrl: 'https://github.com/Baxtoos/sistema-aura',
    liveUrl: 'https://github.com/Baxtoos/sistema-aura',
    featured: false,
    stats: {
      metric1: '3 Serviços Isolados',
      metric2: 'Nginx Proxy Reverso',
      metric3: 'Volumes Persistentes'
    },
    overview: 'Infraestrutura automatizada em contêineres demonstrando proficiência em DevOps, roteamento de portas, isolamento de rede e persistência segura de dados.',
    challenge: 'Subir e conectar ambientes com dependências complexas de banco de dados, frontend e API de forma determinística e reproduzível.',
    solution: 'Criação de receita `docker-compose.yml` multi-serviço com volumes montados, healthchecks de dependência e proxy reverso orquestrado via Nginx.',
    keyFeatures: [
      'Ambiente reproduzível em qualquer máquina com um único comando `docker compose up`',
      'Configuração de Nginx para distribuição de tráfego e proxy reverso para a API',
      'Persistência em volume Docker nomeado para segurança dos dados do MySQL',
      'Variáveis de ambiente isoladas para credenciais e portas'
    ]
  },
  {
    id: 'crucciolli-print3d',
    title: 'Crucciolli Print3D — Manufatura Aditiva',
    category: 'frontend',
    categoryLabel: 'Frontend & 3D Tech',
    badge: 'Tecnologia & 3D',
    shortDescription: 'Portal corporativo e técnico de impressão 3D sob medida, peças de engenharia e prototipagem rápida para a indústria.',
    coverImage: 'assets/images/projects/crucolli-1.jpeg',
    gallery: [
      'assets/images/projects/crucolli-1.jpeg',
      'assets/images/projects/crucolli-2.jpeg',
      'assets/images/projects/crucolli-3.jpeg'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Three.js Specs', 'SEO Industrial'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://github.com/Baxtoos',
    featured: true,
    stats: {
      metric1: 'Precisão Milimétrica',
      metric2: 'FDM & Resina',
      metric3: 'Canal B2B'
    },
    overview: 'Plataforma moderna com cards informativos e especificações de materiais técnicos (PLA, PETG, ABS, Resina UV) para guiar engenheiros e clientes no envio de arquivos STL.',
    challenge: 'Clientes corporativos hesitavam em solicitar protótipos por falta de clareza nas tolerâncias mecânicas e acabamentos de cada tecnologia aditiva.',
    solution: 'Showcase visual imersivo com comparação lado a lado de tecnologias, galeria de gabaritos industriais e canal direto para envio de arquivos técnicos.',
    keyFeatures: [
      'Guia interativo para envio de arquivos STL e orçamentos dinâmicos',
      'Apresentação de acabamentos em alta definição fotográfica',
      'Seção B2B com foco em peças de reposição para máquinas industriais',
      'SEO técnico direcionado para o mercado fabril e de design de produtos'
    ]
  },
  {
    id: 'mtsublimacao',
    title: 'MT Sublimação & Brindes Corporativos',
    category: 'frontend',
    categoryLabel: 'Frontend & E-commerce',
    badge: 'Catálogo & Varejo',
    shortDescription: 'Catálogo virtual interativo de personalização têxtil e brindes corporativos com cálculo e envio dinâmico de cotações para WhatsApp.',
    coverImage: 'assets/images/projects/mtsublimacao-hero.jpg',
    gallery: [
      'assets/images/projects/mtsublimacao-hero.jpg',
      'assets/images/projects/mtsublimacao-camisetas.jpg',
      'assets/images/projects/mtsublimacao-canecas.jpg'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Dynamic Catalog', 'WhatsApp API Flow'],
    githubUrl: 'https://github.com/Baxtoos/mtsublimacao',
    liveUrl: 'https://github.com/Baxtoos/mtsublimacao',
    featured: true,
    stats: {
      metric1: '-60% Tempo Orçamento',
      metric2: 'Fluxo WhatsApp',
      metric3: 'Catálogo Dinâmico'
    },
    overview: 'Aplicação web focada em acelerar as vendas de uma confecção têxtil de Salto-SP, permitindo ao cliente navegar por produtos, selecionar variações e enviar o pedido estruturado.',
    challenge: 'A empresa recebia dezenas de mensagens desestruturadas por dia perguntando sobre preços, modelos e quantidades, sobrecarregando o atendimento.',
    solution: 'Catálogo interativo com categorização fluida (camisetas oversized, canecas cerâmicas, moletons, kits) e botão de orçamento inteligente que formata a mensagem com todos os dados.',
    keyFeatures: [
      'Vitrine interativa de produtos com zoom e detalhes de tecidos e acabamento',
      'Calculadora estimativa de pedidos em escala por quantidade de itens',
      'Envio de payload estruturado direto no chat comercial da empresa',
      'Redução drástica no ciclo de fechamento de novos pedidos corporativos'
    ]
  },
  {
    id: 'smoke-salto',
    title: 'Smoke Salto — Adega & Tabacaria Delivery',
    category: 'frontend',
    categoryLabel: 'Frontend & E-commerce',
    badge: 'Dark UI & Delivery',
    shortDescription: 'Vitrine digital para conveniência e adega premium com busca instantânea por marcas e despacho ágil para entrega local.',
    coverImage: 'assets/images/projects/smoke-salto-hero.jpg',
    gallery: [
      'assets/images/projects/smoke-salto-hero.jpg',
      'assets/images/projects/smoke-salto-essencias.jpg',
      'assets/images/projects/smoke-salto-adega.jpg'
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Instant Search', 'Dark Mode UI'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://github.com/Baxtoos',
    featured: false,
    stats: {
      metric1: '+400 Pedidos/Mês',
      metric2: 'Busca Instantânea',
      metric3: 'Mobile First'
    },
    overview: 'Plataforma leve e veloz pensada especialmente para dispositivos móveis, permitindo compras noturnas e de fins de semana em poucos toques.',
    challenge: 'Necessidade de um canal ágil de venda sem taxas abusivas de marketplaces de delivery para produtos de conveniência.',
    solution: 'Web app otimizado para carregamento instantâneo em 3G/4G com filtros por categoria, busca reativa em tempo real e finalização direta.',
    keyFeatures: [
      'Filtro instantâneo por marcas, sabores e categorias de produtos',
      'Design em Dark Theme sofisticado e moderno alinhado ao público jovem',
      'Otimização para telas mobile com suporte a toque e carregamento sob demanda',
      'Integração direta com o sistema de motoboys para entrega local'
    ]
  },
  {
    id: 'talisma-imoveis',
    title: 'Talismã Imóveis — Alto Padrão Indaiatuba',
    category: 'landing',
    categoryLabel: 'Landing Pages & B2B',
    badge: 'Alto Padrão',
    shortDescription: 'Portal imobiliário de luxo para condomínios fechados e lançamentos exclusivos em Indaiatuba e região.',
    coverImage: 'assets/images/projects/talisma-hero.jpg',
    gallery: [
      'assets/images/projects/talisma-hero.jpg',
      'assets/images/projects/talisma-interior.jpg'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Filtros Dinâmicos', 'SEO Local'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://github.com/Baxtoos',
    featured: false,
    stats: {
      metric1: '+45% Leads Qualificados',
      metric2: 'Ficha Técnica VIP',
      metric3: 'Agendamento Direto'
    },
    overview: 'Interface limpa e luxuosa desenhada para valorizar mansões e terrenos de alto padrão, transmitindo a exclusividade e a seriedade exigidas pelo público investidor.',
    challenge: 'Portais genéricos poluem o visual com anúncios e dificultam a visualização dos diferenciais arquitetônicos de imóveis nobres.',
    solution: 'Fichas técnicas limpas com metragem, suítes, vagas, galeria de arquitetura e agendamento de visita VIP em destaque.',
    keyFeatures: [
      'Filtros por tipologia, condomínio fechado e faixa de valor',
      'Galeria de alta resolução destacando acabamentos e áreas de lazer',
      'Canal VIP para contato direto com consultores especialistas',
      'Indexação no Google para palavras-chave de condomínios da região'
    ]
  },
  {
    id: 'mr-galvano',
    title: 'MR Galvanoplastia — Revestimentos Técnicos',
    category: 'landing',
    categoryLabel: 'Landing Pages & B2B',
    badge: 'Indústria B2B',
    shortDescription: 'Landing page técnica para indústria metalúrgica de zincagem eletrolítica, fosfatização e ensaios de Salt Spray.',
    coverImage: 'assets/images/projects/mrgalvano-hero.jpg',
    gallery: [
      'assets/images/projects/mrgalvano-hero.jpg',
      'assets/images/projects/mrgalvano-parts.jpg'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'SEO Industrial', 'Design Corporativo'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://github.com/Baxtoos',
    featured: false,
    stats: {
      metric1: '+9 Anos de Fábrica',
      metric2: 'Normas Automotivas',
      metric3: 'Salt Spray'
    },
    overview: 'Website institucional construído para consolidar a autoridade da indústria no fornecimento para sistemistas automotivos e fabricantes de fixadores.',
    challenge: 'Compradores industriais precisam de especificações exatas de normas (ASTM, DIN, ABNT) e garantias de resistência à corrosão antes de solicitar cotações.',
    solution: 'Estruturação de catálogo técnico com especificações normativas, explicações de banhos químicos e formulário dedicado a requisição de lotes industriais.',
    keyFeatures: [
      'Tabelas de conformidade com normas técnicas da indústria automotiva',
      'Apresentação de infraestrutura de laboratório e ensaios de névoa salina',
      'Formulário rápido para engenheiros de compras anexarem desenhos técnicos',
      'Performance nota 95+ no Google PageSpeed'
    ]
  },
  {
    id: 'gelou-gelo',
    title: 'GELOU — Fábrica & Distribuição de Gelo',
    category: 'landing',
    categoryLabel: 'Landing Pages & B2B',
    badge: 'Produção & Logística',
    shortDescription: 'Plataforma digital para indústria de gelo purificado com foco em contratos de fornecimento B2B e entregas expressas para eventos.',
    coverImage: 'assets/images/projects/gelou-hero.jpg',
    gallery: [
      'assets/images/projects/gelou-hero.jpg',
      'assets/images/projects/gelou-ice.jpg'
    ],
    techStack: ['HTML5', 'CSS3 Moderno', 'Vanilla JS', 'Local SEO', 'Plantão WhatsApp'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://github.com/Baxtoos',
    featured: false,
    stats: {
      metric1: '100% Água Filtrada',
      metric2: 'Plantão de Eventos',
      metric3: 'Contratos B2B'
    },
    overview: 'Presença digital estratégica para captação de clientes recorrentes (bares, restaurantes, casas de show) e atendimento de urgência para eventos.',
    challenge: 'Garantir que organizadores de eventos encontrem fornecimento confiável a qualquer hora do dia ou da noite na região de Salto e Itu.',
    solution: 'Design dinâmico com botão de plantão em destaque, apresentação das embalagens (5kg, 10kg, escamas) e processo de purificação com água mineral.',
    keyFeatures: [
      'Chamada direta para plantão de entregas urgentes para festas e eventos',
      'Módulo de simulação de consumo para eventos e confraternizações',
      'Seção de credenciamento para fornecimento fixo semanal B2B',
      'Carregamento ultra-rápido para usuários em conexões móveis'
    ]
  },
  {
    id: 'diex-auto-detail',
    title: 'DIEX Detailing Delivery — Estética Automotiva',
    category: 'landing',
    categoryLabel: 'Landing Pages & B2B',
    badge: 'Serviço Premium',
    shortDescription: 'Plataforma de agendamento online e vitrine de estética automotiva delivery, com lavagem técnica, polimento e vitrificação cerâmica.',
    coverImage: 'assets/images/projects/diex-auto-1.jpg',
    gallery: [
      'assets/images/projects/diex-auto-1.jpg',
      'assets/images/projects/diex-auto-2.jpg',
      'assets/images/projects/diex-auto-3.jpg'
    ],
    techStack: ['HTML5', 'CSS3 Avançado', 'JavaScript', 'Agendamento Online', 'Galeria Antes/Depois'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://github.com/Baxtoos',
    featured: false,
    stats: {
      metric1: '+320% Conversão',
      metric2: 'Agendamento Ágil',
      metric3: 'Vitrificação 9H'
    },
    overview: 'Landing page premium criada com visual cinematográfico para atrair proprietários de veículos de alto padrão que buscam cuidados automotivos a domicílio.',
    challenge: 'Transmitir confiança e rigor técnico no cuidado com pinturas e interiores de veículos esportivos e de luxo.',
    solution: 'Uso de tipografia sofisticada, fotografias de detalhes de acabamento, explicação clara dos benefícios da vitrificação e botão de agendamento prioritário.',
    keyFeatures: [
      'Tabela comparativa de pacotes (Essencial, Premium, Master Ceramic)',
      'Apresentação de equipamentos profissionais sem risco de micro-riscos',
      'Agendamento automático via WhatsApp com dados pré-preenchidos do veículo',
      'Mais de 320% de aumento na taxa de conversão de visitantes em clientes'
    ]
  }
];

// Technical competencies and skills
const technicalSkills = {
  frontend: [
    { name: 'React / Next.js', level: 'Avançado', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'TypeScript', level: 'Avançado', icon: 'fa-solid fa-code', color: '#3178C6' },
    { name: 'JavaScript (ES6+)', level: 'Especialista', icon: 'fa-brands fa-js', color: '#F7DF1E' },
    { name: 'HTML5 & CSS3 Moderno', level: 'Especialista', icon: 'fa-brands fa-html5', color: '#E34F26' },
    { name: 'Tailwind CSS & Vanilla CSS', level: 'Avançado', icon: 'fa-brands fa-css3-alt', color: '#38BDF8' },
    { name: 'Design Systems & UI/UX', level: 'Avançado', icon: 'fa-solid fa-palette', color: '#EC4899' },
    { name: 'Three.js & Gráficos 3D', level: 'Intermediário', icon: 'fa-solid fa-cube', color: '#00F0FF' }
  ],
  backend: [
    { name: 'Node.js & Express', level: 'Avançado', icon: 'fa-brands fa-node-js', color: '#339933' },
    { name: 'Java & Spring Boot', level: 'Avançado', icon: 'fa-brands fa-java', color: '#EA2D2E' },
    { name: 'Prisma ORM & Hibernate', level: 'Avançado', icon: 'fa-solid fa-database', color: '#5A67D8' },
    { name: 'RESTful APIs & GraphQL', level: 'Avançado', icon: 'fa-solid fa-network-wired', color: '#00F0FF' },
    { name: 'MySQL, PostgreSQL & SQLite', level: 'Avançado', icon: 'fa-solid fa-server', color: '#4479A1' },
    { name: 'Supabase & BaaS', level: 'Intermediário', icon: 'fa-solid fa-bolt', color: '#3ECF8E' }
  ],
  devops: [
    { name: 'Docker & Docker Compose', level: 'Avançado', icon: 'fa-brands fa-docker', color: '#2496ED' },
    { name: 'Git & GitHub Workflow', level: 'Especialista', icon: 'fa-brands fa-github', color: '#FFFFFF' },
    { name: 'Nginx Proxy Reverso', level: 'Intermediário', icon: 'fa-solid fa-microchip', color: '#009639' },
    { name: 'Vercel & Cloud Deploy', level: 'Avançado', icon: 'fa-solid fa-cloud-arrow-up', color: '#00F0FF' },
    { name: 'Linux & Terminal Bash', level: 'Avançado', icon: 'fa-brands fa-linux', color: '#FCC624' }
  ],
  engineering: [
    { name: 'Estruturas de Dados & Algoritmos', level: 'Sólido (C/Java)', icon: 'fa-solid fa-sitemap', color: '#A78BFA' },
    { name: 'Arquitetura MVC & Camadas', level: 'Avançado', icon: 'fa-solid fa-layer-group', color: '#6EE7B7' },
    { name: 'IHC (Interação Humano-Computador)', level: 'Avançado', icon: 'fa-solid fa-users', color: '#F472B6' },
    { name: 'Análise, Requisitos & UML', level: 'Avançado', icon: 'fa-solid fa-diagram-project', color: '#FBBF24' }
  ]
};

// Profile information
const profileData = {
  name: 'Sérgio Bastos',
  fullName: 'Sérgio Bastos da Silva Filho',
  handle: '@Baxtoos',
  title: 'Full-Stack Software Developer & Systems Engineer',
  tagline: 'Criando soluções digitais robustas, ecossistemas web escaláveis e interfaces de alta performance.',
  location: 'Salto / Indaiatuba - SP, Brasil',
  email: 'giftc444@gmail.com',
  github: 'https://github.com/Baxtoos',
  portfolioRepo: 'https://github.com/Baxtoos/portifolio',
  stats: {
    projectsCount: '12+',
    linesOfCode: '50k+',
    clientsServed: '10+',
    satisfaction: '100%'
  },
  bio: `Desenvolvedor Full-Stack e entusiasta de Engenharia de Software com formação sólida em Ciência da Computação (estruturas de dados, sistemas operacionais, computação gráfica e IHC).
Atuando no desenvolvimento de sistemas web ponta a ponta — desde a concepção de arquitetura e modelagem de banco de dados (Node.js, Express, Java/Spring, Prisma ORM, MySQL) até interfaces modernas e interativas (React, TypeScript, CSS avançado).
Cofundador e desenvolvedor do ecossistema DIEX, onde implementou soluções para indústrias, comércios locais e plataformas SaaS.`,
  terminalBio: [
    '> initializing baxtoos.sys...',
    '> load profile --user "Sérgio Bastos"',
    '> status: available for high-impact opportunities & projects',
    '> core_stack: [ "TypeScript", "React", "Node.js", "Java", "Docker", "Prisma" ]',
    '> location: "São Paulo, Brazil"',
    '> ready.'
  ]
};
