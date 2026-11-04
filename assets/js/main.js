/**
 * ==============================================================================
 * main.js — Interactive Core for Sérgio Bastos (@Baxtoos) Portfolio
 * Architectural Engineering Monograph Edition
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTheme();
  initFeaturedCases();
  initProjects();
  initSkills();
  initModal();
  initTerminal();
  initCopyEmail();
  initMotion();
});

/* ==============================================================================
   1. NAVBAR, SCROLL SPY & ACCESSIBLE MOBILE DRAWER
   ============================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinksContainer = document.getElementById('navLinks');
  const backToTopBtn = document.getElementById('footerBackToTop');

  let isTicking = false;

  function onScroll() {
    const scrollY = window.scrollY;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 24);
    }

    const scrollPosition = scrollY + 160;
    let currentId = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach((link) => {
        const isMatch = link.getAttribute('href') === `#${currentId}`;
        link.classList.toggle('active', isMatch);
      });
    }

    isTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      requestAnimationFrame(onScroll);
      isTicking = true;
    }
  }, { passive: true });

  if (mobileBtn && navLinksContainer) {
    function closeMobileMenu(restoreFocus = false) {
      navLinksContainer.classList.remove('mobile-open');
      mobileBtn.setAttribute('aria-expanded', 'false');
      mobileBtn.setAttribute('aria-label', 'Abrir menu de navegação');
      if (restoreFocus) {
        mobileBtn.focus();
      }
    }

    function openMobileMenu() {
      navLinksContainer.classList.add('mobile-open');
      mobileBtn.setAttribute('aria-expanded', 'true');
      mobileBtn.setAttribute('aria-label', 'Fechar menu de navegação');
    }

    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinksContainer.classList.contains('mobile-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    navLinksContainer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 860) {
          closeMobileMenu();
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 860 && navLinksContainer.classList.contains('mobile-open')) {
        if (!navLinksContainer.contains(e.target) && !mobileBtn.contains(e.target)) {
          closeMobileMenu();
        }
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinksContainer.classList.contains('mobile-open')) {
        closeMobileMenu(true);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && navLinksContainer.classList.contains('mobile-open')) {
        closeMobileMenu();
      }
    }, { passive: true });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==============================================================================
   2. THEME TOGGLE (DARK / LIGHT WITH PERSISTENCE & META THEME-COLOR)
   ============================================================================== */
function initTheme() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeMeta = document.getElementById('themeColorMeta');
  const savedTheme = localStorage.getItem('baxtoos_theme') || 'dark';

  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('baxtoos_theme', nextTheme);
      applyTheme(nextTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'light' ? '#F6F3EC' : '#0C0B0A');
    }
    if (themeBtn) {
      themeBtn.setAttribute(
        'aria-label',
        theme === 'light' ? 'Alternar para tema escuro' : 'Alternar para tema claro'
      );
    }
  }
}

/* ==============================================================================
   3. FEATURED CASE STUDIES (3 FLAGSHIP PRODUCTION SYSTEMS)
   ============================================================================== */
let lastFocusedElement = null;

function initFeaturedCases() {
  const container = document.getElementById('featuredCases');
  if (!container || typeof portfolioProjects === 'undefined') return;

  const featuredList = portfolioProjects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99))
    .slice(0, 3);

  container.innerHTML = featuredList.map((project, index) => {
    const cs = project.caseStudy || {
      role: project.categoryLabel,
      context: project.shortDescription,
      solution: project.overview,
      outcome: project.stats?.metric1 || 'Em produção na Vercel'
    };

    const metrics = [
      project.stats?.metric1,
      project.stats?.metric2,
      project.stats?.metric3
    ].filter(Boolean);

    return `
      <article class="case-study-row" data-case-id="${project.id}">
        <div class="case-study-content">
          <h3 class="case-study-title">${project.title}</h3>
          <div class="case-study-meta">
            <span class="case-meta-role">${cs.role}</span>
            <span>•</span>
            <span>${project.categoryLabel}</span>
            <span>•</span>
            <span>Estudo ${index + 1} de ${featuredList.length}</span>
          </div>

          <div class="case-study-narrative">
            <div class="case-narrative-item">
              <span class="case-narrative-label">Problema</span>
              <p class="case-narrative-text">${cs.context}</p>
            </div>
            <div class="case-narrative-item">
              <span class="case-narrative-label">Engenharia</span>
              <p class="case-narrative-text">${cs.solution}</p>
            </div>
            <div class="case-narrative-item">
              <span class="case-narrative-label">Impacto</span>
              <p class="case-narrative-text">${cs.outcome}</p>
            </div>
          </div>

          <div class="case-study-metrics" aria-label="Indicadores e tecnologias principais">
            ${metrics.map((m) => `<span class="case-metric-pill">${m}</span>`).join('')}
            ${project.techStack.slice(0, 4).map((t) => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="case-study-actions">
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <span>Abrir Aplicação</span>
              <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </a>
            <button type="button" class="btn btn-secondary case-inspect-btn" data-id="${project.id}">
              <span>Ficha Técnica</span>
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" aria-label="Repositório GitHub de ${project.title}">
              <span>GitHub</span>
              <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </a>
          </div>
        </div>

        <div class="case-study-visual" data-id="${project.id}" tabindex="0" role="button" aria-label="Ampliar visualização de ${project.title}">
          <img src="${project.coverImage}" alt="Interface do sistema ${project.title}" loading="${index === 0 ? 'eager' : 'lazy'}" />
        </div>
      </article>
    `;
  }).join('');

  container.querySelectorAll('.case-inspect-btn, .case-study-visual').forEach((el) => {
    const triggerOpen = () => {
      lastFocusedElement = el;
      const id = el.getAttribute('data-id');
      openProjectModal(id);
    };

    el.addEventListener('click', triggerOpen);
    if (el.classList.contains('case-study-visual')) {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerOpen();
        }
      });
    }
  });
}

/* ==============================================================================
   4. COMPLETE PROJECT ARCHIVE & FILTERING
   ============================================================================== */
function initProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid || typeof portfolioProjects === 'undefined') return;

  const counts = {
    all: portfolioProjects.length,
    fullstack: portfolioProjects.filter((p) => p.category === 'fullstack').length,
    frontend: portfolioProjects.filter((p) => p.category === 'frontend').length,
    architecture: portfolioProjects.filter((p) => p.category === 'architecture').length,
    landing: portfolioProjects.filter((p) => p.category === 'landing').length
  };

  Object.keys(counts).forEach((key) => {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = counts[key];
  });

  let currentCategory = 'all';

  function renderProjects(category) {
    const filtered = category === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === category);

    grid.innerHTML = filtered.map((project) => `
      <article class="project-card" data-id="${project.id}" tabindex="0" role="button" aria-label="Ver ficha técnica de ${project.title}">
        <div class="project-thumbnail">
          <img src="${project.coverImage}" alt="${project.title}" loading="lazy" />
        </div>
        <div class="project-body">
          <h4 class="project-title">${project.title}</h4>
          <p class="project-desc">${project.shortDescription}</p>
          <div class="project-tech-tags">
            ${project.techStack.slice(0, 4).map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
            ${project.techStack.length > 4 ? `<span class="tech-tag">+${project.techStack.length - 4}</span>` : ''}
          </div>
          <div class="project-footer">
            <span class="btn-card-details">
              <span>Inspecionar</span>
              <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
            <div class="project-links-icons" onclick="event.stopPropagation()">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Repositório GitHub" aria-label="Código no GitHub de ${project.title}">
                <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>
                </svg>
              </a>
              ${project.liveUrl && project.liveUrl.startsWith('http')
                ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Abrir aplicação" aria-label="Abrir demonstração de ${project.title}">
                    <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  </a>`
                : ''}
            </div>
          </div>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.project-card').forEach((card) => {
      const handleOpen = () => {
        lastFocusedElement = card;
        const id = card.getAttribute('data-id');
        openProjectModal(id);
      };

      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });
    });
  }

  renderProjects(currentCategory);

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProjects(currentCategory);

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (window.gsap && !reduceMotion) {
        gsap.fromTo(
          '#projectsGrid .project-card',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.035, ease: 'power3.out' }
        );
      }
    });
  });
}

/* ==============================================================================
   5. ARCHITECTURAL CAPABILITY LEDGER (SKILLS)
   ============================================================================== */
function initSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container || typeof technicalSkills === 'undefined') return;

  const domains = [
    {
      key: 'frontend',
      title: 'Interface, Arquitetura UI & Gráficos 3D',
      desc: 'Construção de aplicações web reativas, sistemas de design escaláveis e experiências WebGL.'
    },
    {
      key: 'backend',
      title: 'Backend, APIs & Persistência de Dados',
      desc: 'Serviços RESTful resilientes, modelagem relacional tipada e integração de regras de negócio.'
    },
    {
      key: 'devops',
      title: 'Infraestrutura, Contêineres & Entrega',
      desc: 'Padronização de ambientes em Docker, proxy reverso e automação de deploy.'
    },
    {
      key: 'engineering',
      title: 'Fundamentos de Ciência da Computação',
      desc: 'Base algorítmica, engenharia de requisitos e ergonomia de interação humano-computador.'
    }
  ];

  container.innerHTML = domains.map((domain) => {
    const items = technicalSkills[domain.key] || [];
    return `
      <div class="skill-ledger-row">
        <div class="skill-domain-header">
          <h3 class="skill-domain-title">${domain.title}</h3>
          <p class="skill-domain-desc">${domain.desc}</p>
        </div>
        <ul class="skill-items-grid">
          ${items.map((item) => `
            <li class="skill-ledger-item">
              <span class="skill-item-name">${item.name}</span>
              <span class="skill-item-detail">${item.detail || ''}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }).join('');
}

/* ==============================================================================
   6. PROJECT DETAILS MODAL
   ============================================================================== */
function initModal() {
  const backdrop = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  if (typeof portfolioProjects === 'undefined') return;
  const project = portfolioProjects.find((p) => p.id === projectId);
  const backdrop = document.getElementById('projectModal');
  if (!project || !backdrop) return;

  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalBadge').textContent = `${project.categoryLabel} • ${project.badge}`;

  const galleryImg = document.getElementById('modalGalleryImg');
  if (galleryImg) {
    galleryImg.src = project.coverImage;
    galleryImg.alt = project.title;
  }

  const metric1 = document.getElementById('modalMetric1');
  const metric2 = document.getElementById('modalMetric2');
  const metric3 = document.getElementById('modalMetric3');
  if (metric1) metric1.textContent = project.stats?.metric1 || 'Full-Stack';
  if (metric2) metric2.textContent = project.stats?.metric2 || '100% Responsivo';
  if (metric3) metric3.textContent = project.stats?.metric3 || 'Clean Code';

  const modalOverview = document.getElementById('modalOverview');
  if (modalOverview) {
    modalOverview.textContent = project.overview || project.shortDescription;
  }

  const modalTechTags = document.getElementById('modalTechTags');
  if (modalTechTags) {
    modalTechTags.innerHTML = project.techStack.map((t) => `<span class="tech-tag">${t}</span>`).join('');
  }

  const githubLink = document.getElementById('modalGithubLink');
  const liveLink = document.getElementById('modalLiveLink');

  if (githubLink) {
    if (project.githubUrl && project.githubUrl.startsWith('http')) {
      githubLink.href = project.githubUrl;
      githubLink.style.display = 'inline-flex';
    } else {
      githubLink.style.display = 'none';
    }
  }

  if (liveLink) {
    if (project.liveUrl && project.liveUrl.startsWith('http')) {
      liveLink.href = project.liveUrl;
      liveLink.style.display = 'inline-flex';
    } else {
      liveLink.style.display = 'none';
    }
  }

  backdrop.classList.add('active');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.focus();
}

/* ==============================================================================
   7. INTERACTIVE CLI TERMINAL (WITH COMMAND HISTORY)
   ============================================================================== */
function initTerminal() {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');
  if (!input || !output) return;

  const history = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
<div class="terminal-line accent">Comandos disponíveis no baxtoos@dev:</div>
<div class="terminal-line">  <span class="cmd-inline">whoami</span>    — Resumo profissional e formação acadêmica</div>
<div class="terminal-line">  <span class="cmd-inline">frontend</span>  — Especialização em React, TypeScript e WebGL 3D</div>
<div class="terminal-line">  <span class="cmd-inline">backend</span>   — Competências em Node.js, Java/Spring, SQL e Docker</div>
<div class="terminal-line">  <span class="cmd-inline">skills</span>    — Matriz completa da stack tecnológica</div>
<div class="terminal-line">  <span class="cmd-inline">projects</span>  — Estudos de caso em destaque</div>
<div class="terminal-line">  <span class="cmd-inline">diex</span>      — Sobre o estúdio DIEX Tech Studio</div>
<div class="terminal-line">  <span class="cmd-inline">contact</span>   — E-mail direto e GitHub</div>
<div class="terminal-line">  <span class="cmd-inline">github</span>    — Abre github.com/Baxtoos em nova aba</div>
<div class="terminal-line">  <span class="cmd-inline">clear</span>     — Limpa a saída do terminal</div>
    `,
    whoami: () => `
<div class="terminal-line accent">Sérgio Bastos (@Baxtoos)</div>
<div class="terminal-line">Desenvolvedor Full-Stack com foco especializado em Frontend.</div>
<div class="terminal-line">Graduação: Bacharel em Ciência da Computação — IFSP.</div>
<div class="terminal-line">Localização: Salto / Indaiatuba — SP, Brasil.</div>
<div class="terminal-line">Status: Disponível para oportunidades e novos sistemas.</div>
    `,
    frontend: () => `
<div class="terminal-line accent">Engenharia de Interface &amp; WebGL:</div>
<div class="terminal-line">  • Ecossistema: React, Next.js, TypeScript, JavaScript ES6+, Vite</div>
<div class="terminal-line">  • Gráficos &amp; Motion: Three.js (WebGL 2.0), GSAP + ScrollTrigger</div>
<div class="terminal-line">  • Estilo &amp; Rigor: CSS Moderno, Tailwind, WCAG AA, Core Web Vitals</div>
    `,
    backend: () => `
<div class="terminal-line accent">Backend, Dados &amp; Infraestrutura:</div>
<div class="terminal-line">  • Serviços: Node.js, Express, Java, Spring Boot, APIs RESTful</div>
<div class="terminal-line">  • Persistência: Prisma ORM, JPA/Hibernate, PostgreSQL, MySQL, SQLite</div>
<div class="terminal-line">  • DevOps: Docker, Docker Compose, Nginx Proxy Reverso, Linux</div>
    `,
    diex: () => `
<div class="terminal-line accent">DIEX Tech Studio:</div>
<div class="terminal-line">Estúdio de engenharia digital cofundado por Sérgio Bastos.</div>
<div class="terminal-line">Mais de 12 sistemas, SaaS e portais corporativos entregues em produção.</div>
<div class="terminal-line">Produção: <a href="https://diex-site.vercel.app" target="_blank" rel="noopener noreferrer">https://diex-site.vercel.app</a></div>
    `,
    skills: () => `
<div class="terminal-line accent">Stack Tecnológica por Camada:</div>
<div class="terminal-line">  [Interface] React, TypeScript, Three.js, GSAP, CSS Moderno, Tailwind</div>
<div class="terminal-line">  [Backend]   Node.js, Express, Java, Spring Boot, Prisma ORM</div>
<div class="terminal-line">  [Database]  PostgreSQL, MySQL, SQLite, Supabase</div>
<div class="terminal-line">  [Infra]     Docker, Nginx, Git/GitHub, Linux, Vercel</div>
    `,
    projects: () => `
<div class="terminal-line accent">Estudos de Caso Principais (Vercel):</div>
<div class="terminal-line">  1. <strong>DIEX Tech Studio</strong> — Ecossistema digital (&lt; 0.8s FCP, +12 entregas)</div>
<div class="terminal-line">  2. <strong>AppFisio</strong> — SaaS clínico para fisioterapia (Node, Express, Prisma)</div>
<div class="terminal-line">  3. <strong>MT Sublimação</strong> — Catálogo dinâmico (-60% tempo de cotação)</div>
<div class="terminal-line">  4. <strong>EventHub &amp; CarTon</strong> — Arquitetura corporativa em Java &amp; Spring Boot</div>
    `,
    contact: () => `
<div class="terminal-line accent">Canais Diretos:</div>
<div class="terminal-line">  E-mail: <a href="mailto:giftc444@gmail.com">giftc444@gmail.com</a></div>
<div class="terminal-line">  GitHub: <a href="https://github.com/Baxtoos" target="_blank" rel="noopener noreferrer">https://github.com/Baxtoos</a></div>
    `,
    github: () => {
      window.open('https://github.com/Baxtoos', '_blank', 'noopener,noreferrer');
      return `<div class="terminal-line accent">Abrindo https://github.com/Baxtoos em nova aba...</div>`;
    },
    clear: () => {
      output.innerHTML = '';
      return '';
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        if (historyIndex === -1) {
          historyIndex = history.length - 1;
        } else if (historyIndex > 0) {
          historyIndex--;
        }
        input.value = history[historyIndex] || '';
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        if (historyIndex < history.length - 1) {
          historyIndex++;
          input.value = history[historyIndex] || '';
        } else {
          historyIndex = -1;
          input.value = '';
        }
      }
      return;
    }

    if (e.key === 'Enter') {
      const cmdRaw = input.value;
      input.value = '';
      historyIndex = -1;
      executeCommand(cmdRaw);
    }
  });

  function executeCommand(cmdRaw) {
    const trimmed = cmdRaw.trim();
    const cmd = trimmed.toLowerCase();
    if (!cmd) return;

    history.push(trimmed);

    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="terminal-prompt">baxtoos@dev:~$</span> ${escapeHtml(trimmed)}`;
    output.appendChild(userLine);

    if (cmd === 'clear') {
      commands.clear();
      return;
    }

    const responseHtml = commands[cmd]
      ? commands[cmd]()
      : `<div class="terminal-line">Comando não reconhecido: "${escapeHtml(cmd)}". Digite <span class="cmd-inline">help</span> para ver a lista.</div>`;

    if (responseHtml) {
      const respContainer = document.createElement('div');
      respContainer.innerHTML = responseHtml;
      output.appendChild(respContainer);
    }

    output.scrollTop = output.scrollHeight;
  }

  document.querySelectorAll('.terminal-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const targetCmd = chip.getAttribute('data-cmd');
      if (targetCmd) {
        input.value = '';
        executeCommand(targetCmd);
      }
    });
  });

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

/* ==============================================================================
   8. COPY EMAIL TO CLIPBOARD WITH MANAGED TOAST
   ============================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const directEmailLink = document.getElementById('contactDirectEmail');
  const toast = document.getElementById('toastNotice');
  const email = 'giftc444@gmail.com';
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    const msgEl = toast.querySelector('.toast-msg');
    if (msgEl) msgEl.textContent = msg;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3400);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
          .then(() => showToast('E-mail giftc444@gmail.com copiado para a área de transferência.'))
          .catch(() => showToast(`E-mail: ${email}`));
      } else {
        showToast(`E-mail: ${email}`);
      }
    });
  }

  if (directEmailLink) {
    directEmailLink.addEventListener('click', () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
      }
      showToast('Abrindo cliente de e-mail (giftc444@gmail.com copiado).');
    });
  }
}

/* ==============================================================================
   9. AUTHORED MOTION (GSAP + MATCHMEDIA + SCROLLTRIGGER)
   ============================================================================== */
function initMotion() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const mm = gsap.matchMedia();

  mm.add(
    {
      canAnimate: '(prefers-reduced-motion: no-preference)'
    },
    (context) => {
      const { canAnimate } = context.conditions;
      if (!canAnimate) return;

      // Single coordinated Hero entrance sequence (<= 750ms total budget)
      const heroTl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.55 }
      });

      heroTl
        .from('.hero-name', { y: 18, autoAlpha: 0 })
        .from('.hero-statement', { y: 14, autoAlpha: 0 }, '-=0.38')
        .from('.hero-description, .hero-cta-group', { y: 12, autoAlpha: 0, stagger: 0.08 }, '-=0.35')
        .from('.sculpture-stage', { scale: 0.97, autoAlpha: 0, duration: 0.6 }, '-=0.45')
        .from('.ledger-cell', { y: 10, autoAlpha: 0, stagger: 0.05, duration: 0.4 }, '-=0.35');
    }
  );
}
