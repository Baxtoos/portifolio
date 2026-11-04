/**
 * projects-data.js
 * Curated projects portfolio for Sérgio Bastos (Baxtoos)
 * Production Vercel deployments and verified URLs
 */

const portfolioProjects = [
  {
    id: 'diex-ecosystem',
    title: 'DIEX Tech Studio & Ecossistema Digital',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Ecossistema',
    badge: 'Destaque Corporativo',
    shortDescription: 'Ecossistema digital de soluções web de alta conversão, portais corporativos, catálogos dinâmicos e sistemas comerciais.',
    coverImage: 'assets/images/projects/diex-ecosystem.png',
    gallery: [
      'assets/images/projects/diex-ecosystem.png',
      'assets/images/projects/diex-auto-1.jpg',
      'assets/images/projects/diex-auto-2.jpg'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Vite', 'Supabase', 'Vanilla CSS', 'SEO Técnico'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://diex-site.vercel.app',
    featured: true,
    featuredOrder: 1,
    stats: {
      metric1: '+12 Soluções Entregues',
      metric2: '100% Responsivo',
      metric3: '< 0.8s FCP'
    },
    caseStudy: {
      role: 'Cofundador & Lead Full-Stack',
      context: 'Empresas industriais, automotivas e de serviços no interior paulista operavam sem infraestrutura digital própria que unisse engenharia sólida, SEO técnico e conversão comercial direta.',
      solution: 'Arquitetura modular em React, TypeScript, Node.js e Supabase com design systems dedicados por setor e otimização rigorosa do caminho crítico de renderização (< 0.8s FCP).',
      outcome: 'Mais de 12 sistemas, portais B2B e catálogos transacionais entregues e ativos em produção na Vercel.'
    },
    overview: 'Iniciativa tecnológica e estúdio de desenvolvimento focado em construir infraestrutura digital para empresas do interior paulista e além, unindo design de ponta, performance extrema e integração comercial via WhatsApp e APIs.'
  },
  {
    id: 'appfisio',
    title: 'AppFisio — Gestão Clínica & Fisioterapia',
    category: 'fullstack',
    categoryLabel: 'Full-Stack SaaS',
    badge: 'Vercel Produção',
    shortDescription: 'Plataforma completa para fisioterapeutas gerenciarem prontuários eletrônicos de pacientes, rotinas de reabilitação e prescrição de exercícios.',
    coverImage: 'assets/images/projects/appfisio-preview.jpg',
    gallery: [
      'assets/images/projects/appfisio-preview.jpg'
    ],
    techStack: ['Node.js', 'Express', 'Prisma ORM', 'SQLite / PostgreSQL', 'REST API', 'Vercel Deployment'],
    githubUrl: 'https://github.com/Baxtoos/appFisio-',
    liveUrl: 'https://appfisio.vercel.app',
    featured: true,
    featuredOrder: 2,
    stats: {
      metric1: 'Arquitetura RESTful',
      metric2: 'Prisma ORM Tipado',
      metric3: 'Prontuário Digital'
    },
    caseStudy: {
      role: 'Arquitetura Full-Stack & Banco de Dados',
      context: 'Clínicas de fisioterapia e profissionais autônomos gerenciavam fichas de avaliação e planos de exercícios de forma fragmentada, dificultando o acompanhamento longitudinal da evolução motora.',
      solution: 'Desenvolvimento de aplicação SaaS Full-Stack com backend RESTful em Node.js e Express, persistência relacional tipada com Prisma ORM e interface clínica enxuta para uso em consultório.',
      outcome: 'Centralização segura de prontuários eletrônicos, protocolos de reabilitação e histórico de sessões em produção na Vercel.'
    },
    overview: 'Sistema Full-Stack em produção na Vercel desenvolvido para otimizar o fluxo de trabalho de clínicas de fisioterapia e profissionais autônomos, permitindo acompanhamento minucioso da evolução motora de pacientes.'
  },
  {
    id: 'mtsublimacao',
    title: 'MT Sublimação & Brindes Corporativos',
    category: 'frontend',
    categoryLabel: 'Frontend & E-commerce',
    badge: 'Vercel Produção',
    shortDescription: 'Catálogo virtual interativo de personalização têxtil e brindes corporativos com cálculo e envio dinâmico de cotações para WhatsApp.',
    coverImage: 'assets/images/projects/mtsublimacao-hero.jpg',
    gallery: [
      'assets/images/projects/mtsublimacao-hero.jpg',
      'assets/images/projects/mtsublimacao-camisetas.jpg',
      'assets/images/projects/mtsublimacao-canecas.jpg'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Dynamic Catalog', 'WhatsApp Flow', 'Vercel'],
    githubUrl: 'https://github.com/Baxtoos/mtsublimacao',
    liveUrl: 'https://mtsublimacao.vercel.app',
    featured: true,
    featuredOrder: 3,
    stats: {
      metric1: '-60% Tempo Orçamento',
      metric2: 'Fluxo WhatsApp',
      metric3: 'Catálogo Dinâmico'
    },
    caseStudy: {
      role: 'Engenharia Frontend & Fluxo de Conversão',
      context: 'O processo comercial de confecção têxtil e brindes corporativos sofria gargalos na coleta manual de especificações, tamanhos e quantidades por mensagens não estruturadas.',
      solution: 'Construção de catálogo reativo em React e TypeScript com seleção de variações em tempo real, carrinho de cotação persistente e serialização automática do pedido para o WhatsApp.',
      outcome: 'Redução de 60% no tempo de elaboração de orçamentos em Salto-SP, eliminando retrabalho entre atendimento e produção.'
    },
    overview: 'Aplicação web em produção na Vercel focada em acelerar as vendas de confecção têxtil e brindes em Salto-SP, permitindo ao cliente navegar por produtos, selecionar variações e enviar o pedido estruturado diretamente no WhatsApp.'
  },
  {
    id: 'crucciolli-print3d',
    title: 'Crucciolli Print3D — Manufatura Aditiva',
    category: 'frontend',
    categoryLabel: 'Frontend & 3D Tech',
    badge: 'Vercel Produção',
    shortDescription: 'Portal corporativo e técnico de impressão 3D sob medida, peças de engenharia e prototipagem rápida para a indústria.',
    coverImage: 'assets/images/projects/crucolli-1.jpeg',
    gallery: [
      'assets/images/projects/crucolli-1.jpeg',
      'assets/images/projects/crucolli-2.jpeg',
      'assets/images/projects/crucolli-3.jpeg'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Three.js Specs', 'Vercel'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://crucolli-lp.vercel.app',
    featured: false,
    stats: {
      metric1: 'Precisão Milimétrica',
      metric2: 'FDM & Resina',
      metric3: 'Canal B2B'
    },
    overview: 'Plataforma moderna hospedada na Vercel com especificações de materiais técnicos (PLA, PETG, ABS, Resina UV) para guiar engenheiros e clientes no envio de arquivos STL para prototipagem rápida.'
  },
  {
    id: 'smoke-salto',
    title: 'Smoke Salto — Adega & Tabacaria Delivery',
    category: 'frontend',
    categoryLabel: 'Frontend & E-commerce',
    badge: 'Vercel Produção',
    shortDescription: 'Vitrine digital para conveniência e adega premium com busca instantânea por marcas e despacho ágil para entrega local.',
    coverImage: 'assets/images/projects/smoke-salto-hero.jpg',
    gallery: [
      'assets/images/projects/smoke-salto-hero.jpg',
      'assets/images/projects/smoke-salto-essencias.jpg',
      'assets/images/projects/smoke-salto-adega.jpg'
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Instant Search', 'Mobile First', 'Vercel'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://smoke-salto.vercel.app',
    featured: false,
    stats: {
      metric1: '+400 Pedidos/Mês',
      metric2: 'Busca Instantânea',
      metric3: 'Mobile First'
    },
    overview: 'Plataforma em produção na Vercel desenvolvida com React e Vite para busca ultra-rápida de produtos, catálogo interativo e fluxo direto de entrega delivery.'
  },
  {
    id: 'diex-auto-detail',
    title: 'DIEX Detailing Delivery — Estética Automotiva',
    category: 'landing',
    categoryLabel: 'Landing Pages & B2B',
    badge: 'Vercel Produção',
    shortDescription: 'Plataforma de agendamento online e vitrine de estética automotiva delivery, com lavagem técnica, polimento e vitrificação cerâmica.',
    coverImage: 'assets/images/projects/diex-auto-1.jpg',
    gallery: [
      'assets/images/projects/diex-auto-1.jpg',
      'assets/images/projects/diex-auto-2.jpg',
      'assets/images/projects/diex-auto-3.jpg'
    ],
    techStack: ['HTML5', 'CSS3 Avançado', 'JavaScript', 'Agendamento Online', 'Vercel'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://automotive-detailing-two.vercel.app',
    featured: false,
    stats: {
      metric1: '+320% Conversão',
      metric2: 'Agendamento Ágil',
      metric3: 'Vitrificação 9H'
    },
    overview: 'Landing page de estética automotiva premium em produção na Vercel, com tipografia sofisticada, pacotes detalhados de vitrificação e fluxo de agendamento online.'
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
    featured: false,
    stats: {
      metric1: 'Padrão MVC + Services',
      metric2: 'Persistência JPA',
      metric3: 'Engenharia de Requisitos'
    },
    overview: 'Projeto corporativo em Java e Spring Boot com persistência relacional orquestrada por JPA/Hibernate, tratamento defensivo de exceções e documentação completa de requisitos e casos de uso.'
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
    featured: false,
    stats: {
      metric1: 'Ciclo de Vida Completo',
      metric2: 'UML & Casos de Uso',
      metric3: 'Gestão de Frotas'
    },
    overview: 'Software corporativo estruturado em pipeline rigoroso de engenharia de software com repositório organizado em requisitos, análise e design UML, implementação e testes.'
  },
  {
    id: 'mr-galvano',
    title: 'MR Galvanoplastia — Revestimentos Técnicos',
    category: 'landing',
    categoryLabel: 'Landing Pages & B2B',
    badge: 'Vercel Produção',
    shortDescription: 'Landing page técnica para indústria metalúrgica de zincagem eletrolítica, fosfatização e ensaios de Salt Spray.',
    coverImage: 'assets/images/projects/mrgalvano-hero.jpg',
    gallery: [
      'assets/images/projects/mrgalvano-hero.jpg',
      'assets/images/projects/mrgalvano-parts.jpg'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'SEO Industrial', 'Vercel'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://lp-mrgalvanoplastia.vercel.app',
    featured: false,
    stats: {
      metric1: '+9 Anos de Fábrica',
      metric2: 'Normas Automotivas',
      metric3: 'Salt Spray'
    },
    overview: 'Website institucional e técnico em produção na Vercel para a indústria MR Galvanoplastia, apresentando banhos químicos normatizados e testes em câmara de Salt Spray.'
  },
  {
    id: 'gelou-gelo',
    title: 'GELOU — Fábrica & Distribuição de Gelo',
    category: 'landing',
    categoryLabel: 'Landing Pages & B2B',
    badge: 'Vercel Produção',
    shortDescription: 'Plataforma digital para indústria de gelo purificado com foco em contratos de fornecimento B2B e entregas expressas para eventos.',
    coverImage: 'assets/images/projects/gelou-hero.jpg',
    gallery: [
      'assets/images/projects/gelou-hero.jpg',
      'assets/images/projects/gelou-ice.jpg'
    ],
    techStack: ['HTML5', 'CSS3 Moderno', 'Vanilla JS', 'Local SEO', 'Vercel'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://lp-gelou.vercel.app',
    featured: false,
    stats: {
      metric1: '100% Água Filtrada',
      metric2: 'Plantão de Eventos',
      metric3: 'Contratos B2B'
    },
    overview: 'Aplicação web em produção na Vercel para a fábrica de gelo GELOU, conectando clientes para fornecimento recorrente B2B e atendimento de plantão de emergência para eventos.'
  },
  {
    id: 'talisma-imoveis',
    title: 'Talismã Imóveis — Alto Padrão Indaiatuba',
    category: 'landing',
    categoryLabel: 'Landing Pages & B2B',
    badge: 'Vercel Produção',
    shortDescription: 'Portal imobiliário de luxo para condomínios fechados e lançamentos exclusivos em Indaiatuba e região.',
    coverImage: 'assets/images/projects/talisma-hero.jpg',
    gallery: [
      'assets/images/projects/talisma-hero.jpg',
      'assets/images/projects/talisma-interior.jpg'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Filtros Dinâmicos', 'Vercel'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://generical-site-imobiliaria-sergio-bastos-projects-01da1aa3.vercel.app',
    featured: false,
    stats: {
      metric1: '+45% Leads Qualificados',
      metric2: 'Ficha Técnica VIP',
      metric3: 'Agendamento Direto'
    },
    overview: 'Portal imobiliário de alto padrão hospedado na Vercel com vitrine de residências em condomínios fechados e assessoria exclusiva para compradores e investidores.'
  },
  {
    id: 'stl-lima',
    title: 'STL Lima 3D — Manufatura e Peças Sob Medida',
    category: 'frontend',
    categoryLabel: 'Frontend & 3D Tech',
    badge: 'Vercel Produção',
    shortDescription: 'Modelagem tridimensional e fabricação aditiva de componentes mecânicos e protótipos industriais sob demanda.',
    coverImage: 'assets/images/projects/stl-lima-hero.jpeg',
    gallery: [
      'assets/images/projects/stl-lima-hero.jpeg',
      'assets/images/projects/stl-lima-parts.jpeg'
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', '3D Modeling', 'Vercel'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://stl-lima-lp.vercel.app',
    featured: false,
    stats: {
      metric1: 'Precisão Técnica',
      metric2: 'Lotes Piloto',
      metric3: 'Engenharia Sob Medida'
    },
    overview: 'Landing page técnica em produção na Vercel para soluções em manufatura aditiva e desenvolvimento de componentes mecânicos funcionais.'
  },
  {
    id: 'industrial-autom',
    title: 'Industrial Automation — Automação & Painéis',
    category: 'landing',
    categoryLabel: 'Landing Pages & B2B',
    badge: 'Vercel Produção',
    shortDescription: 'Portal corporativo para soluções industriais em automação, montagem de painéis elétricos e manutenção eletromecânica.',
    coverImage: 'assets/images/projects/autom-hero.jpg',
    gallery: [
      'assets/images/projects/autom-hero.jpg'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Design Industrial', 'Vercel'],
    githubUrl: 'https://github.com/Baxtoos',
    liveUrl: 'https://industrial-autom.vercel.app',
    featured: false,
    stats: {
      metric1: 'Projetos Industriais',
      metric2: 'Painéis Elétricos',
      metric3: 'Segurança NR10/NR12'
    },
    overview: 'Plataforma industrial em produção na Vercel para apresentação de serviços de automação fabril e engenharia de painéis elétricos industriais.'
  }
];

// Technical competencies structured for the Architectural Capability Ledger
const technicalSkills = {
  frontend: [
    { name: 'React & Next.js', detail: 'SPAs, SSR e arquiteturas modulares' },
    { name: 'TypeScript', detail: 'Tipagem estrita e contratos de interface' },
    { name: 'Three.js & WebGL 2.0', detail: 'Geometria procedural e cenas interativas' },
    { name: 'GSAP & ScrollTrigger', detail: 'Coreografia de movimento e timelines 60fps' },
    { name: 'CSS Moderno & Tailwind', detail: 'Tokens, Grid assimétrico e Design Systems' },
    { name: 'JavaScript (ES6+)', detail: 'DOM nativo, performance e zero-build' },
    { name: 'Acessibilidade & SEO', detail: 'WCAG AA, semântica e Core Web Vitals' }
  ],
  backend: [
    { name: 'Node.js & Express', detail: 'APIs RESTful, middlewares e serviços web' },
    { name: 'Java & Spring Boot', detail: 'Sistemas corporativos, MVC e regras de negócio' },
    { name: 'Prisma ORM & Hibernate', detail: 'Mapeamento objeto-relacional e migrações' },
    { name: 'PostgreSQL, MySQL & SQLite', detail: 'Modelagem relacional, índices e queries' },
    { name: 'Supabase & BaaS', detail: 'Autenticação, tempo real e políticas RLS' },
    { name: 'Integrações & Webhooks', detail: 'Fluxos comerciais, WhatsApp e REST' }
  ],
  devops: [
    { name: 'Docker & Docker Compose', detail: 'Conteinerização e ambientes isolados' },
    { name: 'Nginx Proxy Reverso', detail: 'Roteamento, SSL e balanceamento de carga' },
    { name: 'Vercel & Cloud CI/CD', detail: 'Deploy contínuo e edge network' },
    { name: 'Git & GitHub Workflow', detail: 'Versionamento semântico e code review' },
    { name: 'Linux & Bash Scripting', detail: 'Administração de servidores e automação' }
  ],
  engineering: [
    { name: 'Estruturas de Dados & Algoritmos', detail: 'Base sólida em C e Java pelo IFSP' },
    { name: 'Arquitetura MVC & Camadas', detail: 'Separação de responsabilidades e clean code' },
    { name: 'Interação Humano-Computador (IHC)', detail: 'Usabilidade, heurísticas e ergonomia cognitiva' },
    { name: 'Engenharia de Requisitos & UML', detail: 'Casos de uso, diagramas de classe e testes' }
  ]
};

// Profile information
const profileData = {
  name: 'Sérgio Bastos',
  fullName: 'Sérgio Bastos da Silva Filho',
  handle: '@Baxtoos',
  title: 'Full-Stack Developer (Foco em Frontend)',
  tagline: 'Construo interfaces de alta precisão e os sistemas que as sustentam.',
  location: 'Salto / Indaiatuba - SP, Brasil',
  email: 'giftc444@gmail.com',
  github: 'https://github.com/Baxtoos',
  portfolioRepo: 'https://github.com/Baxtoos/portifolio',
  stats: {
    projectsCount: '13',
    linesOfCode: '50k+',
    clientsServed: '10+',
    satisfaction: '100%'
  },
  bio: `Desenvolvedor Full-Stack com foco especializado em Frontend e formação sólida em Ciência da Computação pelo IFSP (estruturas de dados, sistemas operacionais, computação gráfica e IHC).
Atuo com visão completa de ponta a ponta — integrando backends eficientes (Node.js, Express, Java/Spring, Prisma ORM, SQL) a interfaces modernas, reativas e precisas (React, TypeScript, CSS avançado, Three.js).
Cofundador e engenheiro do estúdio DIEX Tech, com 13 aplicações e portais em produção na Vercel.`,
  terminalBio: [
    '> initializing baxtoos.sys...',
    '> load profile --user "Sérgio Bastos"',
    '> role: "Full-Stack Developer (Foco em Frontend)"',
    '> education: "B.Sc. Computer Science — IFSP"',
    '> studio: "Cofounder @ DIEX Tech Studio"',
    '> location: "Salto / Indaiatuba — SP, Brazil"',
    '> status: ready.'
  ]
};
