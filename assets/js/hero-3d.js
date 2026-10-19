/**
 * ==============================================================================
 * HERO 3D INTERACTIVE HOLOGRAPHIC CANVAS (Three.js WebGL Engine)
 * Sérgio Bastos — Portfólio Profissional
 * ==============================================================================
 */

(function () {
  'use strict';

  // Check if Three.js is available
  if (typeof THREE === 'undefined') {
    console.warn('[Hero3D] THREE is not loaded. Skipping 3D initialization.');
    return;
  }

  const container = document.getElementById('holoCanvasWrapper');
  const canvas = document.getElementById('hero3DCanvas');
  if (!container || !canvas) return;

  // Telemetry DOM elements
  const hudGeomName = document.getElementById('hudGeomName');
  const hudVertCount = document.getElementById('hudVertCount');
  const liveFpsChip = document.getElementById('liveFpsChip');
  const interactionHint = document.getElementById('holoInteractionHint');
  const wireframeToggleBtn = document.getElementById('wireframeToggleBtn');
  const wireframeModeText = document.getElementById('wireframeModeText');
  const geomButtons = document.querySelectorAll('#geomToggleGroup .hud-btn');
  const colorSwatches = document.querySelectorAll('#colorSwatchesGroup .swatch-btn');

  // Scene dimensions
  let width = container.clientWidth || 440;
  let height = container.clientHeight || 480;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07090e, 0.04);

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 7.2);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);
  if (renderer.toneMapping !== undefined) {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
  }

  // Color Palettes
  const themes = {
    cyan: {
      name: 'Cyber Cyan',
      primaryHex: 0x00f0ff,
      secondaryHex: 0x8b5cf6,
      accentHex: 0x10b981,
      emissiveHex: 0x00334d,
      innerCoreHex: 0x00f0ff,
      pointLight1: 0x00f0ff,
      pointLight2: 0x8b5cf6,
      ring1: 0x8b5cf6,
      ring2: 0x00f0ff,
      ring3: 0x38bdf8
    },
    violet: {
      name: 'Holo Violet',
      primaryHex: 0xa855f7,
      secondaryHex: 0xec4899,
      accentHex: 0x00f0ff,
      emissiveHex: 0x3b0764,
      innerCoreHex: 0xa855f7,
      pointLight1: 0xa855f7,
      pointLight2: 0xec4899,
      ring1: 0xec4899,
      ring2: 0xa855f7,
      ring3: 0xc084fc
    },
    emerald: {
      name: 'Neon Matrix',
      primaryHex: 0x10b981,
      secondaryHex: 0x06b6d4,
      accentHex: 0xa3e635,
      emissiveHex: 0x064e3b,
      innerCoreHex: 0x10b981,
      pointLight1: 0x10b981,
      pointLight2: 0x06b6d4,
      ring1: 0x06b6d4,
      ring2: 0x10b981,
      ring3: 0x34d399
    }
  };

  let currentThemeKey = 'cyan';
  let currentTheme = themes[currentThemeKey];
  let isWireframeMode = true;

  // Geometry Presets
  const geometries = {
    icosahedron: {
      name: 'ICOSA',
      geom: new THREE.IcosahedronGeometry(1.65, 2),
      scale: 1.0,
      speedY: 0.007
    },
    torusKnot: {
      name: 'TORUS',
      geom: new THREE.TorusKnotGeometry(1.15, 0.35, 128, 32, 2, 3),
      scale: 1.0,
      speedY: 0.009
    },
    dodecahedron: {
      name: 'DODECA',
      geom: new THREE.DodecahedronGeometry(1.55, 1),
      scale: 1.0,
      speedY: 0.006
    }
  };

  let currentGeomKey = 'icosahedron';

  // Master Groups
  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  const coreGroup = new THREE.Group();
  masterGroup.add(coreGroup);

  // Materials
  const wireframeMaterial = new THREE.MeshStandardMaterial({
    color: currentTheme.primaryHex,
    emissive: currentTheme.emissiveHex,
    emissiveIntensity: 0.85,
    roughness: 0.2,
    metalness: 0.8,
    wireframe: true,
    transparent: true,
    opacity: 0.88
  });

  const solidMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x081520,
    emissive: currentTheme.emissiveHex,
    emissiveIntensity: 0.5,
    roughness: 0.18,
    metalness: 0.9,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: 0.92,
    flatShading: true
  });

  // 1. Primary Outer Mesh
  const outerMesh = new THREE.Mesh(geometries[currentGeomKey].geom, wireframeMaterial);
  coreGroup.add(outerMesh);

  // 2. Vertex Points Sparkles
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.045,
    transparent: true,
    opacity: 0.85
  });
  const pointsMesh = new THREE.Points(geometries[currentGeomKey].geom, pointsMaterial);
  coreGroup.add(pointsMesh);

  // 3. Inner Pulsating Core
  const innerCoreGeometry = new THREE.OctahedronGeometry(0.75, 0);
  const innerCoreMaterial = new THREE.MeshBasicMaterial({
    color: currentTheme.innerCoreHex,
    wireframe: true,
    transparent: true,
    opacity: 0.95
  });
  const innerCoreMesh = new THREE.Mesh(innerCoreGeometry, innerCoreMaterial);
  coreGroup.add(innerCoreMesh);

  // 4. Futuristic Concentric Gyroscope Tech Rings
  const gyroGroup = new THREE.Group();
  masterGroup.add(gyroGroup);

  const ringMat1 = new THREE.MeshBasicMaterial({
    color: currentTheme.ring1,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  });
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.016, 16, 80), ringMat1);
  ring1.rotation.x = Math.PI * 0.35;
  gyroGroup.add(ring1);

  const ringMat2 = new THREE.MeshBasicMaterial({
    color: currentTheme.ring2,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.68, 0.014, 16, 90), ringMat2);
  ring2.rotation.y = -Math.PI * 0.25;
  gyroGroup.add(ring2);

  const ringMat3 = new THREE.MeshBasicMaterial({
    color: currentTheme.ring3,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const ring3 = new THREE.Mesh(new THREE.TorusGeometry(3.08, 0.012, 16, 100), ringMat3);
  ring3.rotation.z = Math.PI * 0.2;
  gyroGroup.add(ring3);

  // 5. Orbiting Satellite Shards
  const satellitesGroup = new THREE.Group();
  masterGroup.add(satellitesGroup);

  const satelliteGeom = new THREE.TetrahedronGeometry(0.08, 0);
  const satelliteMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.8
  });

  const satellites = [];
  const satelliteCount = 7;
  for (let i = 0; i < satelliteCount; i++) {
    const sat = new THREE.Mesh(satelliteGeom, satelliteMat);
    const angle = (i / satelliteCount) * Math.PI * 2;
    const distance = 2.45 + (i % 3) * 0.35;
    const heightOffset = (Math.sin(i * 1.5) - 0.5) * 1.2;
    sat.position.set(Math.cos(angle) * distance, heightOffset, Math.sin(angle) * distance);
    sat.userData = {
      angle: angle,
      distance: distance,
      speed: 0.012 + (i % 4) * 0.005,
      heightOffset: heightOffset
    };
    satellitesGroup.add(sat);
    satellites.push(sat);
  }

  // 6. Volumetric Ambient Cosmic Particles
  const particleCount = 1000;
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  const baseColor = new THREE.Color(currentTheme.primaryHex);
  const accentColor = new THREE.Color(currentTheme.secondaryHex);

  for (let i = 0; i < particleCount; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * 2.5 + 2.2;

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;

    const mixed = baseColor.clone().lerp(accentColor, Math.random());
    particleColors[i * 3] = mixed.r;
    particleColors[i * 3 + 1] = mixed.g;
    particleColors[i * 3 + 2] = mixed.b;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.038,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  masterGroup.add(particleSystem);

  // 7. Dynamic Lighting
  const lightCyan = new THREE.PointLight(currentTheme.pointLight1, 3.0, 15);
  lightCyan.position.set(3, 2, 4);
  scene.add(lightCyan);

  const lightViolet = new THREE.PointLight(currentTheme.pointLight2, 2.2, 12);
  lightViolet.position.set(-3, -2, 2);
  scene.add(lightViolet);

  const lightRim = new THREE.DirectionalLight(currentTheme.accentHex, 1.2);
  lightRim.position.set(0, -4, 2);
  scene.add(lightRim);

  const ambientLight = new THREE.AmbientLight(0x0a1120, 1.4);
  scene.add(ambientLight);

  // Interaction State
  let mouseX = 0;
  let mouseY = 0;
  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;

  let isDragging = false;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let dragVelX = 0;
  let dragVelY = 0;
  let dragRotX = 0;
  let dragRotY = 0;

  let pulseScale = 1.0;
  let pulseSpeed = 1.0;

  // Update telemetry counts
  function updateTelemetry(geomKey) {
    const current = geometries[geomKey];
    if (hudGeomName) hudGeomName.textContent = current.name;
    if (hudVertCount && current.geom.attributes.position) {
      const count = current.geom.attributes.position.count;
      hudVertCount.textContent = count.toLocaleString('pt-BR');
    }
  }
  updateTelemetry(currentGeomKey);

  // Event Listeners for Interaction
  // Mouse / Pointer Tracking
  window.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (window.innerWidth / 2);
    const normY = (e.clientY - centerY) / (window.innerHeight / 2);

    targetRotY = normX * 0.65;
    targetRotX = -normY * 0.45;

    // Follow light slightly with pointer
    lightCyan.position.x = normX * 3.5 + 2.5;
    lightCyan.position.y = -normY * 3.5 + 1.5;
  }, { passive: true });

  // Click & Drag 360 Orbit Interaction
  canvas.addEventListener('pointerdown', (e) => {
    isDragging = true;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
    canvas.style.cursor = 'grabbing';

    // Dismiss interaction hint
    if (interactionHint) {
      interactionHint.classList.add('fade-out');
    }
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastPointerX;
    const deltaY = e.clientY - lastPointerY;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;

    dragVelY += deltaX * 0.005;
    dragVelX += deltaY * 0.005;
  }, { passive: true });

  window.addEventListener('pointerup', () => {
    if (isDragging) {
      isDragging = false;
      canvas.style.cursor = 'grab';
    }
  });

  canvas.style.cursor = 'grab';

  // Shockwave Elastic Pulse on Canvas Click
  canvas.addEventListener('click', () => {
    pulseShockwave();
  });

  function pulseShockwave() {
    // Flare light intensity
    const origIntensity = 3.0;
    lightCyan.intensity = 6.5;
    lightViolet.intensity = 5.0;

    // Elastic scale pulse
    if (typeof gsap !== 'undefined') {
      gsap.killTweensOf(coreGroup.scale);
      gsap.fromTo(coreGroup.scale,
        { x: 1.25, y: 1.25, z: 1.25 },
        { x: 1.0, y: 1.0, z: 1.0, duration: 1.1, ease: 'elastic.out(1, 0.4)' }
      );
      gsap.to(lightCyan, { intensity: origIntensity, duration: 0.9, ease: 'power2.out' });
      gsap.to(lightViolet, { intensity: 2.2, duration: 0.9, ease: 'power2.out' });
    } else {
      pulseScale = 1.25;
    }

    // Boost satellite rotation temporarily
    pulseSpeed = 3.5;
    setTimeout(() => { pulseSpeed = 1.0; }, 900);
  }

  // Switch Geometry with Smooth Scale Transition
  function switchGeometry(newKey) {
    if (newKey === currentGeomKey || !geometries[newKey]) return;
    currentGeomKey = newKey;
    const targetGeom = geometries[newKey].geom;

    if (typeof gsap !== 'undefined') {
      gsap.to(outerMesh.scale, {
        x: 0.01, y: 0.01, z: 0.01, duration: 0.22, ease: 'power2.in',
        onComplete: () => {
          outerMesh.geometry = targetGeom;
          pointsMesh.geometry = targetGeom;
          updateTelemetry(newKey);
          gsap.to(outerMesh.scale, {
            x: 1.0, y: 1.0, z: 1.0, duration: 0.55, ease: 'back.out(1.8)'
          });
          gsap.to(pointsMesh.scale, {
            x: 1.0, y: 1.0, z: 1.0, duration: 0.55, ease: 'back.out(1.8)'
          });
        }
      });
      gsap.to(pointsMesh.scale, {
        x: 0.01, y: 0.01, z: 0.01, duration: 0.22, ease: 'power2.in'
      });
    } else {
      outerMesh.geometry = targetGeom;
      pointsMesh.geometry = targetGeom;
      updateTelemetry(newKey);
    }
  }

  // Geometry buttons click handler
  geomButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      geomButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-geom');
      switchGeometry(target);
    });
  });

  // Switch Color Theme
  function switchTheme(themeKey) {
    if (!themes[themeKey]) return;
    currentThemeKey = themeKey;
    currentTheme = themes[themeKey];

    const pColor = new THREE.Color(currentTheme.primaryHex);
    const sColor = new THREE.Color(currentTheme.secondaryHex);
    const eColor = new THREE.Color(currentTheme.emissiveHex);

    wireframeMaterial.color.set(pColor);
    wireframeMaterial.emissive.set(eColor);

    solidMaterial.emissive.set(eColor);

    innerCoreMaterial.color.set(new THREE.Color(currentTheme.innerCoreHex));

    ringMat1.color.set(new THREE.Color(currentTheme.ring1));
    ringMat2.color.set(new THREE.Color(currentTheme.ring2));
    ringMat3.color.set(new THREE.Color(currentTheme.ring3));

    lightCyan.color.set(new THREE.Color(currentTheme.pointLight1));
    lightViolet.color.set(new THREE.Color(currentTheme.pointLight2));
    lightRim.color.set(new THREE.Color(currentTheme.accentHex));

    // Update particle colors
    const colorsAttr = particleGeometry.attributes.color;
    for (let i = 0; i < particleCount; i++) {
      const mixed = pColor.clone().lerp(sColor, Math.random());
      colorsAttr.setXYZ(i, mixed.r, mixed.g, mixed.b);
    }
    colorsAttr.needsUpdate = true;
  }

  // Color Swatches click handler
  colorSwatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      colorSwatches.forEach((s) => s.classList.remove('active'));
      swatch.classList.add('active');
      const targetTheme = swatch.getAttribute('data-theme');
      switchTheme(targetTheme);
    });
  });

  // Wireframe / Solid Mode Toggle
  if (wireframeToggleBtn) {
    wireframeToggleBtn.addEventListener('click', () => {
      isWireframeMode = !isWireframeMode;
      outerMesh.material = isWireframeMode ? wireframeMaterial : solidMaterial;
      wireframeToggleBtn.classList.toggle('active', !isWireframeMode);

      if (wireframeModeText) {
        wireframeModeText.textContent = isWireframeMode ? 'Wireframe' : 'Sólido';
      }

      pulseShockwave();
    });
  }

  // Window & Container Resize Handler
  function onResize() {
    if (!container) return;
    width = container.clientWidth || 440;
    height = container.clientHeight || 480;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  }

  const resizeObserver = new ResizeObserver(() => onResize());
  resizeObserver.observe(container);
  window.addEventListener('resize', onResize, { passive: true });

  // FPS Telemetry Calculator
  let lastTime = performance.now();
  let frameCount = 0;
  let fpsTimer = 0;

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // FPS calculation
    frameCount++;
    fpsTimer += delta;
    if (fpsTimer >= 0.5) {
      const currentFps = Math.round(frameCount / fpsTimer);
      if (liveFpsChip) {
        liveFpsChip.textContent = `${currentFps} FPS • WebGL 2.0`;
      }
      frameCount = 0;
      fpsTimer = 0;
    }

    // Drag momentum friction
    dragRotX += dragVelX;
    dragRotY += dragVelY;
    dragVelX *= 0.93;
    dragVelY *= 0.93;

    // Smooth Cursor Lerp
    currentRotX += (targetRotX - currentRotX) * 0.05;
    currentRotY += (targetRotY - currentRotY) * 0.05;

    // Apply rotation to master/core
    const activeSpeed = geometries[currentGeomKey].speedY * pulseSpeed;
    coreGroup.rotation.y += activeSpeed;
    coreGroup.rotation.x = currentRotX + dragRotX;
    coreGroup.rotation.y += currentRotY * 0.05 + dragVelY;

    // Inner Core counter-rotates and breathes
    innerCoreMesh.rotation.y -= 0.015 * pulseSpeed;
    innerCoreMesh.rotation.z += 0.01 * pulseSpeed;
    const breathe = 1.0 + Math.sin(elapsedTime * 3.0) * 0.08;
    innerCoreMesh.scale.set(breathe, breathe, breathe);

    // Points mesh follows outer mesh exactly
    pointsMesh.rotation.copy(outerMesh.rotation);

    // Gyroscope Rings rotate on independent axes
    ring1.rotation.z += 0.006 * pulseSpeed;
    ring2.rotation.x -= 0.008 * pulseSpeed;
    ring3.rotation.y += 0.005 * pulseSpeed;

    // Rotate Satellites around core
    for (let i = 0; i < satellites.length; i++) {
      const sat = satellites[i];
      sat.userData.angle += sat.userData.speed * pulseSpeed;
      const dist = sat.userData.distance;
      sat.position.x = Math.cos(sat.userData.angle) * dist;
      sat.position.z = Math.sin(sat.userData.angle) * dist;
      sat.position.y = sat.userData.heightOffset + Math.sin(elapsedTime * 2.0 + i) * 0.2;
      sat.rotation.x += 0.02;
      sat.rotation.y += 0.03;
    }

    // Ambient Particle Swarm gentle drift
    particleSystem.rotation.y = elapsedTime * 0.025;
    particleSystem.rotation.x = Math.sin(elapsedTime * 0.02) * 0.15;

    // Fallback pulseScale if GSAP isn't active
    if (pulseScale > 1.0) {
      pulseScale -= 0.02;
      if (pulseScale < 1.0) pulseScale = 1.0;
      coreGroup.scale.set(pulseScale, pulseScale, pulseScale);
    }

    renderer.render(scene, camera);
  }

  // Kickstart animation loop
  animate();

  console.log('[Hero3D] Interactive 3D WebGL Holographic Stage initialized successfully.');
})();
