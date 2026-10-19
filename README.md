# Sérgio Bastos — Portfólio Profissional Full-Stack

<div align="center">

![Badge Status](https://img.shields.io/badge/Status-Produção_Pronto-00F0FF?style=for-the-badge&logo=vercel&logoColor=black)
![Badge Licença](https://img.shields.io/badge/Licença-MIT-8B5CF6?style=for-the-badge)
![Badge Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS%20%7C%20GSAP-10B981?style=for-the-badge)

**Engenheiro de Software & Desenvolvedor Full-Stack**  
*Criando arquiteturas escaláveis, ecossistemas digitais e experiências web de alta conversão.*

[Live Demo (GitHub Pages)](https://baxtoos.github.io/portifolio/) • [Perfil GitHub](https://github.com/Baxtoos) • [Contato](#contato)

</div>

---

## Sobre o Projeto

Este repositório contém a versão completa do portfólio web de **Sérgio Bastos** ([@Baxtoos](https://github.com/Baxtoos)), projetado com estética contemporânea **Obsidian & Cyber-Cyan**, zero dependências de build pesadas (100% Vanilla HTML5, CSS3 moderno com CSS Variables, Vanilla JS estruturado e animações GSAP), garantindo **carregamento instantâneo no GitHub Pages**.

O portfólio reúne os principais projetos de desenvolvimento de software, sistemas SaaS corporativos, ecossistema **DIEX**, arquiteturas de microsserviços em Docker e engenharia em Java/Spring.

---

## Funcionalidades em Destaque

- **Performance Extrema & Zero Build**: Roda nativamente em qualquer navegador ou servidor estático (GitHub Pages, Vercel, Netlify).
- **Design System Obsidian**: Efeito Glassmorphism com `backdrop-filter`, orbes dinâmicos de luz no plano de fundo, badges cibernéticos e tipografia de ponta (*Syne*, *Plus Jakarta Sans*, *JetBrains Mono*).
- **Terminal Interativo Integrado**: Widget de terminal estilo Unix (`baxtoos@dev:~$`) com comandos interativos (`help`, `whoami`, `skills`, `projects`, `contact`, `clear`).
- **Showcase Filtrável de Projetos**: Filtros dinâmicos em tempo real por categoria (*Full-Stack*, *Engenharia & Java*, *Frontend*, *Landing Pages B2B*).
- **Modal Imersivo de Especificação Técnica**: Cada projeto conta com ficha completa (Desafio, Solução de Engenharia, Métricas/Resultados, Tags da Stack, links de demonstração e código).
- **Copy E-mail com Toast Feedback**: Copia o endereço `giftc444@gmail.com` com um clique e feedback animado.
- **Suporte a Temas (Dark / Light)**: Alternância suave com persistência no `localStorage`.
- **Animações de Clique e Redirecionamento**: Feedback tátil com efeito de ondulação radial neon e barra de progresso suave no topo.
- **100% Responsivo**: Layout otimizado para celulares, tablets e monitores ultrawide.

---

## Tecnologias & Fundamentos

| Camada | Tecnologias Utilizadas |
| :--- | :--- |
| **Frontend** | HTML5 Semântico, CSS3 Moderno (Custom Properties, Flexbox, Grid), JavaScript ES6+ Modular |
| **Estilização** | Design System Proprietário Obsidian/Cyan, Glassmorphism, Micro-interações |
| **Motion** | [GSAP 3](https://greensock.com/gsap/) (GreenSock Animation Platform) via CDN |
| **Tipografia & Ícones** | Google Fonts (Syne, Plus Jakarta Sans, JetBrains Mono), FontAwesome 6 |

---

## Estrutura do Repositório

```bash
portifolio/
├── index.html                  # Estrutura principal semântica da aplicação
├── assets/
│   ├── css/
│   │   └── style.css           # Design system completo, temas, responsividade e componentes
│   ├── js/
│   │   ├── main.js             # Lógica interativa (terminal, modal, filtros, toast, tema, animações)
│   │   └── projects-data.js    # Dados curados dos projetos, métricas e competências
│   └── images/
│       ├── frontend-3d.jpg     # Visual de arquitetura e tecnologia frontend em 3D
│       └── projects/           # Imagens em alta resolução dos projetos e sistemas
├── README.md                   # Documentação do repositório
└── PROFILE_README.md           # Template especial pronto para o perfil do GitHub (Baxtoos/Baxtoos)
```

---

## Projetos em Destaque

1. **DIEX Tech Studio & Ecossistema Digital**: Ecossistema de soluções web de alta conversão, portais corporativos e sistemas comerciais.
2. **AppFisio (SaaS Full-Stack)**: Gestão clínica para fisioterapeutas com prescrição de exercícios e prontuário digital (*Node.js, Express, Prisma ORM, SQLite/PostgreSQL*).
3. **EventHub (Arquitetura Java)**: Sistema corporativo de gerenciamento de eventos, lotes de ingressos e controle de acesso (*Java, Spring Boot, JPA/Hibernate, MVC*).
4. **CarTon (carToon)**: Gestão operacional de oficinas mecânicas com ciclo de vida completo de engenharia de software e modelagem UML.
5. **Sistema AURA**: Plataforma conteinerizada em microsserviços com Docker Compose, Nginx Proxy Reverso e MySQL.
6. **Crucciolli Print3D**: Portal de manufatura aditiva, impressão 3D e prototipagem rápida industrial.
7. **MT Sublimação & Brindes**: Catálogo virtual interativo com cotação automatizada e despacho para WhatsApp.
8. **Smoke Salto Adega & Delivery**: E-commerce e vitrine digital com busca em tempo real.
9. **Talismã Consultoria Imobiliária**: Portal de luxo para condomínios fechados e alto padrão em Indaiatuba.
10. **MR Galvanoplastia**: Landing page técnica para indústria de revestimentos galvânicos e normas automotivas.

---

## Como Publicar no GitHub Pages em 1 Minuto

1. Faça o commit e push deste repositório para o seu GitHub:
   ```bash
   git add .
   git commit -m "feat: complete interactive portfolio web app"
   git push origin main
   ```
2. No seu repositório no GitHub (`https://github.com/Baxtoos/portifolio`), clique na aba **Settings**.
3. No menu lateral esquerdo, clique em **Pages**.
4. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
5. Em **Branch**, selecione `main` e a pasta `/ (root)`. Clique em **Save**.
6. Em cerca de 30 segundos, seu portfólio estará online no endereço:  
   **`https://baxtoos.github.io/portifolio/`**

---

## Como Rodar Localmente

Você pode abrir diretamente o arquivo `index.html` em qualquer navegador, ou rodar um servidor local leve:

### Opção 1: Usando Python (já disponível no Windows)
```bash
python -m http.server 5500
```
Acesse no seu navegador: `http://localhost:5500`

### Opção 2: Usando Node / npx
```bash
npx serve .
```

---

## Contato

- **Desenvolvedor**: Sérgio Bastos da Silva Filho
- **GitHub**: [@Baxtoos](https://github.com/Baxtoos)
- **E-mail**: [giftc444@gmail.com](mailto:giftc444@gmail.com)
- **Localização**: Salto / Indaiatuba - SP, Brasil

---

<div align="center">
  <sub>Desenvolvido com dedicação e excelência técnica por Sérgio Bastos © 2026</sub>
</div>
