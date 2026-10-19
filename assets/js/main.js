/**
 * ==============================================================================
 * main.js — Interactive Core for Sérgio Bastos (@Baxtoos) Portfolio
 * Clean architecture, accessible interactions, throttled events, and terminal logic.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTheme();
  initSkills();
  initProjects();
  initModal();
  initTerminal();
  initCopyEmail();
  initClickAnimations();
  initRedirectionAnimations();
  initScrollAnimations();
});

/* ==============================================================================
   1. NAVBAR & THROTTLED SCROLL
   ============================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  let isTicking = false;

  function onScroll() {
    const scrollY = window.scrollY;

    // Navbar scrolled glassmorphism state
    if (scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Spy
    const scrollPosition = scrollY + 140;
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
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
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

  // Mobile menu toggle
  if (mobileBtn && navLinksContainer) {
    mobileBtn.addEventListener('click', () => {
      const isVisible = navLinksContainer.classList.contains('mobile-open');
      navLinksContainer.classList.toggle('mobile-open', !isVisible);
      mobileBtn.setAttribute('aria-expanded', !isVisible);
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinksContainer.classList.remove('mobile-open');
          mobileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Smooth back to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==============================================================================
   2. THEME TOGGLE (DARK / LIGHT WITH PERSISTENCE)
   ============================================================================== */
function initTheme() {
  const themeBtn = document.querySelector('.theme-toggle-btn');
  const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;
  const savedTheme = localStorage.getItem('baxtoos_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('baxtoos_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.className = 'fa-solid fa-moon';
      themeBtn.setAttribute('aria-label', 'Alternar para tema escuro');
    } else {
      themeIcon.className = 'fa-solid fa-sun';
      themeBtn.setAttribute('aria-label', 'Alternar para tema claro');
    }
  }
}

/* ==============================================================================
   3. SKILLS CATEGORY CARDS RENDERING
   ============================================================================== */
function initSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container || typeof technicalSkills === 'undefined') return;

  const categories = [
    { key: 'frontend', title: 'Frontend & UI/UX (Foco)', icon: 'fa-brands fa-react', desc: 'Interfaces reativas, WebGL 3D, design systems e performance' },
    { key: 'backend', title: 'Backend & APIs', icon: 'fa-solid fa-server', desc: 'Modelagem relacional, microsserviços e rotas RESTful' },
    { key: 'devops', title: 'DevOps & Infra', icon: 'fa-solid fa-cloud', desc: 'Contêineres Docker, proxy reverso Nginx e deploy na Vercel' },
    { key: 'engineering', title: 'Engenharia & Ciência', icon: 'fa-solid fa-sitemap', desc: 'Estruturas de dados, algoritmos em C/Java, MVC e IHC' }
  ];

  container.innerHTML = categories.map((cat) => {
    const list = technicalSkills[cat.key] || [];
    return `
      <div class="skill-category-card">
        <div class="skill-card-header">
          <div class="skill-header-icon" aria-hidden="true">
            <i class="${cat.icon}"></i>
          </div>
          <div>
            <h3>${cat.title}</h3>
            <p style="font-size:0.8rem; color:var(--text-muted);">${cat.desc}</p>
          </div>
        </div>
        <ul class="skill-items-list">
          ${list.map((skill) => `
            <li class="skill-item">
              <div class="skill-item-info">
                <i class="${skill.icon}" style="color:${skill.color};" aria-hidden="true"></i>
                <span>${skill.name}</span>
              </div>
              <span class="skill-item-badge">${skill.level}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }).join('');
}

/* ==============================================================================
   4. PROJECTS RENDERING & FILTERING
   ============================================================================== */
let lastFocusedCard = null;

function initProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid || typeof portfolioProjects === 'undefined') return;

  let currentCategory = 'all';

  function renderProjects(category) {
    const filtered = category === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === category);

    grid.innerHTML = filtered.map((project) => `
      <article class="project-card" data-id="${project.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${project.title}">
        <div class="project-thumbnail">
          <img src="${project.coverImage}" alt="${project.title}" loading="lazy" />
          <span class="project-badge-top">${project.badge}</span>
        </div>
        <div class="project-body">
          <div class="project-header-row">
            <h3 class="project-title">${project.title}</h3>
          </div>
          <p class="project-desc">${project.shortDescription}</p>
          <div class="project-tech-tags">
            ${project.techStack.slice(0, 4).map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
            ${project.techStack.length > 4 ? `<span class="tech-tag">+${project.techStack.length - 4}</span>` : ''}
          </div>
          <div class="project-footer">
            <span class="btn-card-details">
              Ver Detalhes <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </span>
            <div class="project-links-icons" onclick="event.stopPropagation()">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Repositório GitHub" aria-label="Código no GitHub de ${project.title}">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Live Demo / Link" aria-label="Abrir demonstração ao vivo de ${project.title}">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click and keyboard listeners to cards
    document.querySelectorAll('.project-card').forEach((card) => {
      const handleOpen = () => {
        lastFocusedCard = card;
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

  // Initial render
  renderProjects(currentCategory);

  // Filter Buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProjects(currentCategory);

      // Smooth card entrance animation with GSAP
      if (window.gsap) {
        gsap.fromTo('.project-card',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.38, stagger: 0.05, ease: 'power2.out' }
        );
      }
    });
  });
}

/* ==============================================================================
   5. PROJECT DETAILS MODAL
   ============================================================================== */
function initModal() {
  const backdrop = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Return focus to triggering card
    if (lastFocusedCard && typeof lastFocusedCard.focus === 'function') {
      lastFocusedCard.focus();
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
  document.getElementById('modalBadge').textContent = project.categoryLabel || project.badge;

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
  if (githubLink) githubLink.href = project.githubUrl;
  if (liveLink) liveLink.href = project.liveUrl;

  backdrop.classList.add('active');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Move focus to modal close button for accessibility
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.focus();
}

/* ==============================================================================
   6. INTERACTIVE TERMINAL WIDGET (WITH COMMAND HISTORY)
   ============================================================================== */
function initTerminal() {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');
  if (!input || !output) return;

  // Command History Memory
  const history = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
<div class="terminal-line cyan">Comandos disponiveis no baxtoos.sys:</div>
<div class="terminal-line">  <span class="purple">whoami</span>    - Perfil e visao geral do desenvolvedor</div>
<div class="terminal-line">  <span class="purple">frontend</span>  - Especializacao em Frontend e UI 3D</div>
<div class="terminal-line">  <span class="purple">backend</span>   - Competencias de backend, bancos e Docker</div>
<div class="terminal-line">  <span class="purple">skills</span>    - Stack tecnologica completa</div>
<div class="terminal-line">  <span class="purple">projects</span>  - Principais sistemas em producao</div>
<div class="terminal-line">  <span class="purple">diex</span>      - Ecossistema de solucoes web corporativas</div>
<div class="terminal-line">  <span class="purple">contact</span>   - Canais de contato direto</div>
<div class="terminal-line">  <span class="purple">github</span>    - Abre o perfil do GitHub em nova aba</div>
<div class="terminal-line">  <span class="purple">clear</span>     - Limpa o historico do terminal</div>
    `,
    whoami: () => `
<div class="terminal-line cyan">Sergio Bastos (Baxtoos)</div>
<div class="terminal-line">Desenvolvedor Full-Stack com foco especializado em Frontend.</div>
<div class="terminal-line">Localizacao: Salto / Indaiatuba - SP, Brasil</div>
<div class="terminal-line">Formacao: Ciencia da Computacao / Engenharia de Software</div>
<div class="terminal-line green">Status: Disponivel para projetos de alto impacto e engenharia de produto.</div>
    `,
    frontend: () => `
<div class="terminal-line cyan">Frontend Engineering & 3D Web:</div>
<div class="terminal-line">  * Core: React, TypeScript, JavaScript ES6+, Vite, Tailwind CSS, Vanilla CSS</div>
<div class="terminal-line">  * 3D & WebGL: Three.js, shaders procedural, animacoes GSAP, IHC</div>
<div class="terminal-line">  * Foco: Arquitetura de componentes reutilizaveis, zero dependencias desnecessarias, performance extrema</div>
    `,
    backend: () => `
<div class="terminal-line cyan">Backend & Infraestrutura:</div>
<div class="terminal-line">  * Linguagens & Frameworks: Node.js, Express, Java, Spring Boot</div>
<div class="terminal-line">  * Persistencia: Prisma ORM, JPA / Hibernate, MySQL, PostgreSQL, SQLite</div>
<div class="terminal-line">  * DevOps: Docker, Docker Compose, Nginx Proxy Reverso, Linux Bash</div>
    `,
    diex: () => `
<div class="terminal-line cyan">Ecossistema DIEX Tech Studio:</div>
<div class="terminal-line">Estudio de tecnologia cofundado por Sergio Bastos.</div>
<div class="terminal-line">Solucoes digitais para industrias metalurgicas, estampagem automotiva, comercio textil e SaaS.</div>
<div class="terminal-line green">Website oficial: <a href="http://127.0.0.1:5173" target="_blank" class="cyan">DIEX Studio</a></div>
    `,
    skills: () => `
<div class="terminal-line cyan">Stack Tecnologica Resumida:</div>
<div class="terminal-line">  [Frontend] React, TypeScript, Three.js, GSAP, HTML5 / CSS3 Avançado</div>
<div class="terminal-line">  [Backend]  Node.js, Express, Java, Spring Boot, Prisma ORM, REST APIs</div>
<div class="terminal-line">  [Database] MySQL, PostgreSQL, SQLite, Supabase</div>
<div class="terminal-line">  [DevOps]   Docker Compose, Nginx, Git, Linux, Vercel</div>
    `,
    projects: () => `
<div class="terminal-line cyan">Destaques do Portfólio (Hospedados na Vercel):</div>
<div class="terminal-line">  * <strong>AppFisio</strong>: SaaS clinico para fisioterapia (Node, Express, Prisma, SQLite)</div>
<div class="terminal-line">  * <strong>EventHub</strong>: Gestao corporativa de eventos e ingressos (Java, MVC, JPA)</div>
<div class="terminal-line">  * <strong>MT Sublimacao</strong>: Catalogo dinamico e cotacoes no WhatsApp (React, TS)</div>
<div class="terminal-line">  * <strong>Smoke Salto</strong>: Catalogo e delivery para adega (React, Vite, Dark Mode)</div>
<div class="terminal-line">  * <strong>Crucciolli Print3D</strong>: Engenharia e manufatura aditiva 3D</div>
    `,
    contact: () => `
<div class="terminal-line cyan">Canais de Contato:</div>
<div class="terminal-line">  E-mail: <a href="mailto:giftc444@gmail.com" class="cyan">giftc444@gmail.com</a></div>
<div class="terminal-line">  GitHub: <a href="https://github.com/Baxtoos" target="_blank" class="cyan">https://github.com/Baxtoos</a></div>
    `,
    github: () => {
      window.open('https://github.com/Baxtoos', '_blank', 'noopener,noreferrer');
      return `<div class="terminal-line green">Abrindo https://github.com/Baxtoos no navegador...</div>`;
    },
    clear: () => {
      output.innerHTML = '';
      return '';
    }
  };

  input.addEventListener('keydown', (e) => {
    // Command History Navigation: ArrowUp
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

    // Command History Navigation: ArrowDown
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
      const cmdRaw = input.value.trim();
      const cmd = cmdRaw.toLowerCase();
      input.value = '';
      historyIndex = -1;

      if (!cmd) return;

      // Store in command history
      history.push(cmdRaw);

      const userLine = document.createElement('div');
      userLine.className = 'terminal-line';
      userLine.innerHTML = `<span class="terminal-prompt">baxtoos@dev:~$</span> ${escapeHtml(cmdRaw)}`;
      output.appendChild(userLine);

      if (cmd === 'clear') {
        commands.clear();
        return;
      }

      const responseHtml = commands[cmd]
        ? commands[cmd]()
        : `<div class="terminal-line" style="color:#ef4444;">Comando nao reconhecido: "${escapeHtml(cmd)}". Digite <span class="cyan">help</span> para a lista de comandos.</div>`;

      if (responseHtml) {
        const respContainer = document.createElement('div');
        respContainer.innerHTML = responseHtml;
        output.appendChild(respContainer);
      }

      // Auto scroll terminal to bottom
      const body = output.closest('.terminal-body');
      if (body) {
        body.scrollTop = body.scrollHeight;
      }
    }
  });

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

/* ==============================================================================
   7. COPY EMAIL TO CLIPBOARD WITH MANAGED TOAST
   ============================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toastNotice');
  const email = 'giftc444@gmail.com';
  let toastTimer = null;

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => showToast('E-mail copiado para a área de transferência!'))
        .catch(() => showToast('E-mail: ' + email));
    } else {
      showToast('E-mail: ' + email);
    }
  });

  function showToast(msg) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = msg;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* ==============================================================================
   8. ENTRANCE GSAP ANIMATIONS
   ============================================================================== */
function initScrollAnimations() {
  if (typeof gsap === 'undefined') return;

  // Hero section entry animation timeline
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
  tl.from('.status-beacon-badge', { opacity: 0, y: -20, delay: 0.15 })
    .from('.hero-title', { opacity: 0, y: 25 }, '-=0.5')
    .from('.hero-description', { opacity: 0, y: 20 }, '-=0.5')
    .from('.hero-cta-group', { opacity: 0, y: 20 }, '-=0.5')
    .from('.hero-metrics-bar', { opacity: 0, y: 20 }, '-=0.5')
    .from('.holo-3d-stage', { opacity: 0, scale: 0.94, duration: 0.9 }, '-=0.7')
    .from('.floating-chip', { opacity: 0, scale: 0.8, stagger: 0.15 }, '-=0.4');
}

/* ==============================================================================
   9. TACTILE CLICK ANIMATIONS (RADIAL NEON RIPPLE)
   ============================================================================== */
function initClickAnimations() {
  const container = document.getElementById('clickRippleContainer');
  if (!container) return;

  document.addEventListener('pointerdown', (e) => {
    // Avoid creating ripple over 3D canvas so WebGL interaction stays pristine
    if (e.target && e.target.id === 'hero3DCanvas') return;

    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';

    const size = 110;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    container.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 550);
  }, { passive: true });
}

/* ==============================================================================
   10. REDIRECTION & ROUTE PROGRESS BAR ANIMATIONS
   ============================================================================== */
function initRedirectionAnimations() {
  const progressBar = document.getElementById('routeProgressBar');
  const curtain = document.getElementById('redirectionCurtain');
  const navbarHeight = 76;

  function triggerProgressBar(onComplete) {
    if (!progressBar) {
      if (onComplete) onComplete();
      return;
    }

    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    progressBar.style.opacity = '1';

    requestAnimationFrame(() => {
      progressBar.style.transition = 'width 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease';
      progressBar.style.width = '75%';

      setTimeout(() => {
        progressBar.style.width = '100%';
        if (onComplete) onComplete();

        setTimeout(() => {
          progressBar.style.opacity = '0';
          setTimeout(() => {
            progressBar.style.width = '0%';
          }, 300);
        }, 180);
      }, 160);
    });
  }

  // Smooth scroll and feedback for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      triggerProgressBar(() => {
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });

        target.classList.remove('section-arrived');
        void target.offsetWidth;
        target.classList.add('section-arrived');
      });
    });
  });

  // External link redirection feedback
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const isBlank = link.getAttribute('target') === '_blank';

      if (isBlank) {
        triggerProgressBar();
      } else {
        e.preventDefault();
        const dest = link.getAttribute('href');
        if (curtain) curtain.classList.add('active');
        triggerProgressBar(() => {
          setTimeout(() => {
            window.location.href = dest;
          }, 200);
        });
      }
    });
  });
}
