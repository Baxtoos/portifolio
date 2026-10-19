/**
 * main.js
 * Interactive logic for Sérgio Bastos (@Baxtoos) Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTheme();
  initSkills();
  initProjects();
  initModal();
  initTerminal();
  initCopyEmail();
  init3DCardEffect();
  initScrollAnimations();
});

/* ==========================================================================
   NAVBAR & SCROLL
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Tracking
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileBtn && navLinksContainer) {
    mobileBtn.addEventListener('click', () => {
      const isVisible = navLinksContainer.style.display === 'flex';
      navLinksContainer.style.display = isVisible ? 'none' : 'flex';
      navLinksContainer.style.flexDirection = 'column';
      navLinksContainer.style.position = 'absolute';
      navLinksContainer.style.top = '76px';
      navLinksContainer.style.left = '0';
      navLinksContainer.style.width = '100%';
      navLinksContainer.style.background = '#0a0e17';
      navLinksContainer.style.padding = '24px';
      navLinksContainer.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    });

    // Close mobile menu on click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinksContainer.style.display = 'none';
        }
      });
    });
  }

  // Smooth back to top
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   THEME TOGGLE
   ========================================================================== */
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
    } else {
      themeIcon.className = 'fa-solid fa-sun';
    }
  }
}

/* ==========================================================================
   SKILLS RENDERING
   ========================================================================== */
function initSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container || !technicalSkills) return;

  const categories = [
    { key: 'frontend', title: 'Frontend & UI/UX', icon: 'fa-brands fa-react', desc: 'Interfaces reativas, responsivas e de alta performance' },
    { key: 'backend', title: 'Backend & APIs', icon: 'fa-solid fa-server', desc: 'Modelagem relacional, microsserviços e rotas RESTful' },
    { key: 'devops', title: 'DevOps & Cloud', icon: 'fa-solid fa-cloud', desc: 'Contêineres, CI/CD, proxy reverso e automação' },
    { key: 'engineering', title: 'Engenharia & Ciência', icon: 'fa-solid fa-sitemap', desc: 'Estruturas de dados, arquitetura em camadas e IHC' }
  ];

  container.innerHTML = categories.map(cat => {
    const list = technicalSkills[cat.key] || [];
    return `
      <div class="skill-category-card">
        <div class="skill-card-header">
          <div class="skill-header-icon">
            <i class="${cat.icon}"></i>
          </div>
          <div>
            <h3>${cat.title}</h3>
            <p style="font-size:0.8rem; color:var(--text-muted);">${cat.desc}</p>
          </div>
        </div>
        <ul class="skill-items-list">
          ${list.map(skill => `
            <li class="skill-item">
              <div class="skill-item-info">
                <i class="${skill.icon}" style="color:${skill.color};"></i>
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

/* ==========================================================================
   PROJECTS RENDERING & FILTERING
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid || !portfolioProjects) return;

  let currentCategory = 'all';

  function renderProjects(category) {
    const filtered = category === 'all' 
      ? portfolioProjects 
      : portfolioProjects.filter(p => p.category === category);

    grid.innerHTML = filtered.map(project => `
      <article class="project-card" data-id="${project.id}">
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
            ${project.techStack.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            ${project.techStack.length > 4 ? `<span class="tech-tag">+${project.techStack.length - 4}</span>` : ''}
          </div>
          <div class="project-footer">
            <span class="btn-card-details">
              Ver Detalhes <i class="fa-solid fa-arrow-right"></i>
            </span>
            <div class="project-links-icons" onclick="event.stopPropagation()">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Repositório GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Live Demo / Link">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  // Initial render
  renderProjects(currentCategory);

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProjects(currentCategory);

      // Animation on cards
      if (window.gsap) {
        gsap.fromTo('.project-card', 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' }
        );
      }
    });
  });
}

/* ==========================================================================
   PROJECT DETAILS MODAL
   ========================================================================== */
function initModal() {
  const backdrop = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
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
  const project = portfolioProjects.find(p => p.id === projectId);
  const backdrop = document.getElementById('projectModal');
  if (!project || !backdrop) return;

  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalBadge').textContent = project.categoryLabel || project.badge;
  
  const galleryImg = document.getElementById('modalGalleryImg');
  galleryImg.src = project.coverImage;
  galleryImg.alt = project.title;

  document.getElementById('modalMetric1').textContent = project.stats?.metric1 || 'Full-Stack';
  document.getElementById('modalMetric2').textContent = project.stats?.metric2 || '100% Responsivo';
  document.getElementById('modalMetric3').textContent = project.stats?.metric3 || 'Clean Code';

  document.getElementById('modalOverview').textContent = project.overview || project.shortDescription;
  document.getElementById('modalChallenge').textContent = project.challenge || 'Desenvolvimento e estruturação de arquitetura moderna de software.';
  document.getElementById('modalSolution').textContent = project.solution || 'Implementação modular com boas práticas e alta performance.';

  // Key features
  const featuresList = document.getElementById('modalFeaturesList');
  if (featuresList && project.keyFeatures) {
    featuresList.innerHTML = project.keyFeatures.map(feat => `
      <li><i class="fa-solid fa-circle-check"></i> <span>${feat}</span></li>
    `).join('');
  }

  // Tech stack tags
  const modalTechTags = document.getElementById('modalTechTags');
  if (modalTechTags) {
    modalTechTags.innerHTML = project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');
  }

  // Footer Links
  const githubLink = document.getElementById('modalGithubLink');
  const liveLink = document.getElementById('modalLiveLink');
  if (githubLink) githubLink.href = project.githubUrl;
  if (liveLink) liveLink.href = project.liveUrl;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   INTERACTIVE TERMINAL WIDGET
   ========================================================================== */
function initTerminal() {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');
  if (!input || !output) return;

  const commands = {
    help: () => `
<div class="terminal-line cyan">Comandos disponíveis:</div>
<div class="terminal-line">  <span class="purple">whoami</span>    - Informações sobre Sérgio Bastos</div>
<div class="terminal-line">  <span class="purple">skills</span>    - Resumo das tecnologias e competências</div>
<div class="terminal-line">  <span class="purple">projects</span>  - Principais projetos em destaque</div>
<div class="terminal-line">  <span class="purple">contact</span>   - Informações para contato e redes</div>
<div class="terminal-line">  <span class="purple">github</span>    - Link para o perfil do GitHub</div>
<div class="terminal-line">  <span class="purple">clear</span>     - Limpa o terminal</div>
    `,
    whoami: () => `
<div class="terminal-line cyan">Sérgio Bastos (Baxtoos)</div>
<div class="terminal-line">Desenvolvedor Full-Stack e Engenheiro de Software.</div>
<div class="terminal-line">Localização: Salto / Indaiatuba - SP, Brasil</div>
<div class="terminal-line">Formação: Ciência da Computação / Engenharia</div>
<div class="terminal-line green">Status: Disponível para novos projetos e oportunidades.</div>
    `,
    skills: () => `
<div class="terminal-line cyan">Stack Tecnológica:</div>
<div class="terminal-line">  [Frontend] React, TypeScript, JavaScript ES6+, Vite, Tailwind, HTML5/CSS3</div>
<div class="terminal-line">  [Backend]  Node.js, Express, Java, Spring Boot, Prisma ORM, Hibernate</div>
<div class="terminal-line">  [Database] MySQL, PostgreSQL, SQLite, Supabase</div>
<div class="terminal-line">  [DevOps]   Docker, Docker Compose, Nginx, Git, Linux, Vercel</div>
    `,
    projects: () => `
<div class="terminal-line cyan">Destaques do Portfólio:</div>
<div class="terminal-line">  * <strong>AppFisio</strong>: SaaS completo para fisioterapeutas (Node, Express, Prisma, SQLite)</div>
<div class="terminal-line">  * <strong>EventHub</strong>: Gestão corporativa de eventos e ingressos (Java, MVC, JPA)</div>
<div class="terminal-line">  * <strong>DIEX Studio</strong>: Ecossistema de soluções digitais e portais web</div>
<div class="terminal-line">  * <strong>CarTon</strong>: Sistema de oficinas mecânicas (Engenharia de Software)</div>
<div class="terminal-line">  * <strong>Sistema AURA</strong>: Microsserviços Docker + Nginx + MySQL</div>
    `,
    contact: () => `
<div class="terminal-line cyan">Contato:</div>
<div class="terminal-line">  Email: <a href="mailto:giftc444@gmail.com" class="cyan">giftc444@gmail.com</a></div>
<div class="terminal-line">  GitHub: <a href="https://github.com/Baxtoos" target="_blank" class="cyan">https://github.com/Baxtoos</a></div>
    `,
    github: () => {
      window.open('https://github.com/Baxtoos', '_blank');
      return `<div class="terminal-line green">Abrindo https://github.com/Baxtoos no navegador...</div>`;
    },
    clear: () => {
      output.innerHTML = '';
      return '';
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmdRaw = input.value.trim();
      const cmd = cmdRaw.toLowerCase();
      input.value = '';

      if (!cmd) return;

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
        : `<div class="terminal-line" style="color:#ef4444;">Comando não reconhecido: "${escapeHtml(cmd)}". Digite <span class="cyan">help</span> para lista.</div>`;

      if (responseHtml) {
        const respContainer = document.createElement('div');
        respContainer.innerHTML = responseHtml;
        output.appendChild(respContainer);
      }

      // Auto scroll to bottom
      const body = output.closest('.terminal-body');
      if (body) body.scrollTop = body.scrollHeight;
    }
  });

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

/* ==========================================================================
   COPY EMAIL
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toastNotice');
  const email = 'giftc444@gmail.com';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email copiado para a área de transferência!');
    }).catch(() => {
      showToast('Email: ' + email);
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* ==========================================================================
   GSAP & ENTRANCE ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  if (typeof gsap === 'undefined') return;

  // Hero timeline animation
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
  tl.from('.status-beacon-badge', { opacity: 0, y: -20, delay: 0.2 })
    .from('.hero-title', { opacity: 0, y: 30 }, '-=0.5')
    .from('.hero-description', { opacity: 0, y: 20 }, '-=0.5')
    .from('.hero-cta-group', { opacity: 0, y: 20 }, '-=0.5')
    .from('.hero-metrics-bar', { opacity: 0, y: 20 }, '-=0.5')
    .from('.avatar-card', { opacity: 0, scale: 0.95 }, '-=0.8')
    .from('.floating-chip', { opacity: 0, scale: 0.8, stagger: 0.2 }, '-=0.4');
}

/* ==========================================================================
   3D CARD PARALLAX EFFECT
   ========================================================================== */
function init3DCardEffect() {
  const wrapper = document.getElementById('heroVisualWrapper');
  const card = document.getElementById('frontend3DCard');
  if (!wrapper || !card) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}
