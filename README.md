# Sérgio Bastos — Portfólio de Engenharia Full-Stack & Frontend

<div align="center">

![Badge Status](https://img.shields.io/badge/Status-Produção-E85D2A?style=for-the-badge&logo=vercel&logoColor=black)
![Badge Licença](https://img.shields.io/badge/Licença-MIT-1A1714?style=for-the-badge)
![Badge Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS%20%7C%20Three.js%20%7C%20GSAP-F4F0EA?style=for-the-badge&labelColor=0C0B0A)

<br />

<a href="https://baxtoos.github.io/portifolio/" target="_blank">
  <img src="assets/images/portfolio-preview.png" alt="Sérgio Bastos — Portfólio de Engenharia" width="100%" />
</a>

**Desenvolvedor Full-Stack (Foco em Frontend) & Bacharel em Ciência da Computação (IFSP)**  
*Construo interfaces de alta precisão e os sistemas que as sustentam.*

[Acesso em Produção](https://baxtoos.github.io/portifolio/) | [Perfil GitHub](https://github.com/Baxtoos) | [Contato](#contato)

</div>

---

## Direção de Design: Monografia Editorial de Engenharia

O portfólio foi desenhado sob a disciplina **Impeccable First** (`PRODUCT.md` e `DESIGN.md`), priorizando clareza estrutural, tipografia autoral e prova imediata de sistemas reais em produção:

- **Paleta Editorial Dual-Theme**: Tinta carbono quente (`#0C0B0A`) no tema escuro padrão e papel técnico arquival (`#F6F3EC`) no tema claro, acompanhados de um único acento vermilion-cobre (`#E85D2A` / `#C84312`) com contraste validado WCAG AA/AAA.
- **Tipografia com Ponto de Vista**: *Bricolage Grotesque* para títulos e display, *Manrope* para leitura contínua (medida de 65–68ch) e *JetBrains Mono* reservada estritamente para código, métricas tabulares e identificadores de stack.
- **Hierarquia Guiada por Provas**: Três estudos de caso principais (*DIEX Tech Studio*, *AppFisio* e *MT Sublimação*) abrem a página logo após o Hero com análise estruturada (*Problema → Engenharia → Impacto*), seguidos pelo arquivo filtrável completo de 13 projetos.
- **Escultura 3D Autoral (Three.js WebGL 2.0)**: Geometria poliédrica interativa integrada automaticamente ao tema ativo (escuro/claro), com pausa inteligente fora da viewport e respeito integral a `prefers-reduced-motion`.
- **Matriz de Capacidades & Terminal CLI**: Ledger arquitetural de competências por camada e terminal interativo compacto (`baxtoos@dev:~$`) posicionado antes da seção de contato.
- **Performance Zero-Build & SVGs Nativos**: Execução direta em qualquer servidor estático sem dependências de bibliotecas externas de ícones.

---

## Tecnologias & Arquitetura

| Camada | Tecnologias Utilizadas |
| :--- | :--- |
| **Core** | HTML5 Semântico, CSS3 Custom Properties, JavaScript (ES6+) |
| **3D & WebGL** | [Three.js r128](https://threejs.org/) (Geometria procedural adaptativa ao tema) |
| **Motion** | [GSAP 3.12 + ScrollTrigger](https://gsap.com/) com `gsap.matchMedia()` |
| **Tipografia & Ícones** | *Bricolage Grotesque*, *Manrope*, *JetBrains Mono* + SVGs vetoriais inline (`1.75px` stroke) |
| **Governança de Design** | `PRODUCT.md`, `DESIGN.md` e `.impeccable/surfaces/index-html.md` |

---

## Estrutura do Repositório

```bash
portifolio/
|-- index.html                  # Documento principal (semântico, acessível, SEO/JSON-LD)
|-- PRODUCT.md                  # Verdade de produto, público e restrições técnicas
|-- DESIGN.md                   # Sistema de design, tokens de cor, escala tipográfica e regras
|-- assets/
|   |-- css/
|   |   `-- style.css           # Design system completo (Dark Ink & Archival Paper)
|   |-- js/
|   |   |-- hero-3d.js          # Escultura geométrica Three.js reativa ao tema
|   |   |-- main.js             # Estudos de caso, filtros, modal, terminal CLI e GSAP
|   |   |-- projects-data.js    # Base de dados dos 13 projetos e matriz de capacidades
|   |   `-- vendor/
|   |       `-- three.min.js    # Three.js r128 local
|   `-- images/
|       `-- projects/           # Previews verificados dos sistemas em produção
`-- README.md                   # Documentação do repositório
```

---

## Estudos de Caso Principais

1. **DIEX Tech Studio & Ecossistema Digital**: [diex-site.vercel.app](https://diex-site.vercel.app) — Estúdio de tecnologia e ecossistema com +12 sistemas e portais entregues (*React, TypeScript, Node.js, Supabase, < 0.8s FCP*).
2. **AppFisio (SaaS Clínico)**: [appfisio.vercel.app](https://appfisio.vercel.app) — Plataforma Full-Stack para gestão de prontuários eletrônicos e reabilitação motora (*Node.js, Express, Prisma ORM, SQLite/PostgreSQL*).
3. **MT Sublimação & Brindes Corporativos**: [mtsublimacao.vercel.app](https://mtsublimacao.vercel.app) — Catálogo dinâmico com redução de 60% no tempo de fechamento de orçamentos via WhatsApp (*React, TypeScript, Tailwind CSS*).

---

## Contato

- **Desenvolvedor**: Sérgio Bastos da Silva Filho
- **GitHub**: [@Baxtoos](https://github.com/Baxtoos)
- **E-mail**: [giftc444@gmail.com](mailto:giftc444@gmail.com)
- **Localização**: Salto / Indaiatuba — SP, Brasil
