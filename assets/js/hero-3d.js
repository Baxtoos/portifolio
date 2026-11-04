/**
 * ==============================================================================
 * HERO 3D ARCHITECTURAL SCULPTURE (Three.js WebGL Engine)
 * Sérgio Bastos — Portfólio Profissional
 * Theme-aware (Warm Ink / Archival Paper), reduced-motion compliant, zero HUD clutter.
 * ==============================================================================
 */

(function () {
  'use strict';

  if (typeof THREE === 'undefined') {
    return;
  }

  const container = document.getElementById('holoCanvasWrapper');
  const canvas = document.getElementById('hero3DCanvas');
  if (!container || !canvas) return;

  const geomButtons = document.querySelectorAll('#geomToggleGroup .sculpture-btn');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let prefersReducedMotion = reducedMotionQuery.matches;

  reducedMotionQuery.addEventListener('change', (e) => {
    prefersReducedMotion = e.matches;
  });

  let width = container.clientWidth || 440;
  let height = container.clientHeight || 400;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 0, 6.8);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
  } catch (err) {
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);

  // Architectural Palettes synchronized with DESIGN.md
  const palettes = {
    dark: {
      wireframeHex: 0xE85D2A,
      emissiveHex: 0x2A1208,
      solidHex: 0x1A1714,
      pointsHex: 0xF4F0EA,
      innerCoreHex: 0xC4BBA9,
      ring1Hex: 0x3A332C,
      ring2Hex: 0xE85D2A,
      keyLightHex: 0xF4F0EA,
      accentLightHex: 0xE85D2A
    },
    light: {
      wireframeHex: 0x141210,
      emissiveHex: 0x000000,
      solidHex: 0xECE7DC,
      pointsHex: 0xC84312,
      innerCoreHex: 0xC84312,
      ring1Hex: 0xB8AEA0,
      ring2Hex: 0xC84312,
      keyLightHex: 0xFFFFFF,
      accentLightHex: 0xC84312
    }
  };

  function getActivePalette() {
    const attr = document.documentElement.getAttribute('data-theme');
    return attr === 'light' ? palettes.light : palettes.dark;
  }

  let activePalette = getActivePalette();
  let isWireframeMode = true;

  const geometries = {
    icosahedron: {
      geom: new THREE.IcosahedronGeometry(1.62, 2),
      speedY: 0.0045
    },
    torusKnot: {
      geom: new THREE.TorusKnotGeometry(1.1, 0.32, 110, 24, 2, 3),
      speedY: 0.0055
    },
    dodecahedron: {
      geom: new THREE.DodecahedronGeometry(1.55, 1),
      speedY: 0.004
    }
  };

  let currentGeomKey = 'icosahedron';

  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  const coreGroup = new THREE.Group();
  masterGroup.add(coreGroup);

  const wireframeMaterial = new THREE.MeshStandardMaterial({
    color: activePalette.wireframeHex,
    emissive: activePalette.emissiveHex,
    emissiveIntensity: 0.45,
    roughness: 0.35,
    metalness: 0.6,
    wireframe: true,
    transparent: true,
    opacity: 0.88
  });

  const solidMaterial = new THREE.MeshStandardMaterial({
    color: activePalette.solidHex,
    emissive: activePalette.emissiveHex,
    emissiveIntensity: 0.25,
    roughness: 0.3,
    metalness: 0.75,
    flatShading: true
  });

  const outerMesh = new THREE.Mesh(geometries[currentGeomKey].geom, wireframeMaterial);
  coreGroup.add(outerMesh);

  const pointsMaterial = new THREE.PointsMaterial({
    color: activePalette.pointsHex,
    size: 0.042,
    transparent: true,
    opacity: 0.85
  });
  const pointsMesh = new THREE.Points(geometries[currentGeomKey].geom, pointsMaterial);
  coreGroup.add(pointsMesh);

  const innerCoreGeometry = new THREE.OctahedronGeometry(0.72, 0);
  const innerCoreMaterial = new THREE.MeshBasicMaterial({
    color: activePalette.innerCoreHex,
    wireframe: true,
    transparent: true,
    opacity: 0.65
  });
  const innerCoreMesh = new THREE.Mesh(innerCoreGeometry, innerCoreMaterial);
  coreGroup.add(innerCoreMesh);

  // Two restrained architectural meridian rings
  const ringGroup = new THREE.Group();
  masterGroup.add(ringGroup);

  const ringMat1 = new THREE.MeshBasicMaterial({
    color: activePalette.ring1Hex,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  });
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.01, 12, 72), ringMat1);
  ring1.rotation.x = Math.PI * 0.36;
  ringGroup.add(ring1);

  const ringMat2 = new THREE.MeshBasicMaterial({
    color: activePalette.ring2Hex,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.58, 0.008, 12, 80), ringMat2);
  ring2.rotation.y = -Math.PI * 0.28;
  ringGroup.add(ring2);

  // Lighting
  const keyLight = new THREE.PointLight(activePalette.keyLightHex, 2.6, 16);
  keyLight.position.set(3, 2.5, 4);
  scene.add(keyLight);

  const accentLight = new THREE.PointLight(activePalette.accentLightHex, 2.2, 14);
  accentLight.position.set(-3, -2, 3);
  scene.add(accentLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
  scene.add(ambientLight);

  function applyThemePalette() {
    activePalette = getActivePalette();
    wireframeMaterial.color.setHex(activePalette.wireframeHex);
    wireframeMaterial.emissive.setHex(activePalette.emissiveHex);
    solidMaterial.color.setHex(activePalette.solidHex);
    solidMaterial.emissive.setHex(activePalette.emissiveHex);
    pointsMaterial.color.setHex(activePalette.pointsHex);
    innerCoreMaterial.color.setHex(activePalette.innerCoreHex);
    ringMat1.color.setHex(activePalette.ring1Hex);
    ringMat2.color.setHex(activePalette.ring2Hex);
    keyLight.color.setHex(activePalette.keyLightHex);
    accentLight.color.setHex(activePalette.accentLightHex);
    renderer.render(scene, camera);
  }

  // Observe data-theme changes on <html>
  const themeObserver = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.attributeName === 'data-theme') {
        applyThemePalette();
      }
    }
  });
  themeObserver.observe(document.documentElement, { attributes: true });

  // Pointer & Orbit State
  let targetRotX = 0.18;
  let targetRotY = 0.32;
  let currentRotX = 0.18;
  let currentRotY = 0.32;

  let isDragging = false;
  let dragMoved = false;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let dragVelX = 0;
  let dragVelY = 0;
  let dragRotX = 0;
  let dragRotY = 0;

  window.addEventListener('pointermove', (e) => {
    if (prefersReducedMotion && !isDragging) return;
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (window.innerWidth / 2);
    const normY = (e.clientY - centerY) / (window.innerHeight / 2);

    targetRotY = normX * 0.45;
    targetRotX = -normY * 0.32;
  }, { passive: true });

  canvas.addEventListener('pointerdown', (e) => {
    isDragging = true;
    dragMoved = false;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastPointerX;
    const deltaY = e.clientY - lastPointerY;
    if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
      dragMoved = true;
    }
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;

    dragVelY += deltaX * 0.004;
    dragVelX += deltaY * 0.004;
  }, { passive: true });

  window.addEventListener('pointerup', () => {
    isDragging = false;
  });

  // Click to toggle wireframe / faceted solid mode
  canvas.addEventListener('click', () => {
    if (dragMoved) return;
    isWireframeMode = !isWireframeMode;
    outerMesh.material = isWireframeMode ? wireframeMaterial : solidMaterial;

    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
      gsap.fromTo(
        coreGroup.scale,
        { x: 1.08, y: 1.08, z: 1.08 },
        { x: 1.0, y: 1.0, z: 1.0, duration: 0.45, ease: 'power3.out' }
      );
    }
    renderer.render(scene, camera);
  });

  function switchGeometry(newKey) {
    if (newKey === currentGeomKey || !geometries[newKey]) return;
    currentGeomKey = newKey;
    const targetGeom = geometries[newKey].geom;

    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
      gsap.to([outerMesh.scale, pointsMesh.scale], {
        x: 0.05,
        y: 0.05,
        z: 0.05,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          outerMesh.geometry = targetGeom;
          pointsMesh.geometry = targetGeom;
          gsap.to([outerMesh.scale, pointsMesh.scale], {
            x: 1.0,
            y: 1.0,
            z: 1.0,
            duration: 0.38,
            ease: 'power3.out'
          });
        }
      });
    } else {
      outerMesh.geometry = targetGeom;
      pointsMesh.geometry = targetGeom;
      renderer.render(scene, camera);
    }
  }

  geomButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      geomButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-geom');
      switchGeometry(target);
    });
  });

  function onResize() {
    if (!container) return;
    width = container.clientWidth || 440;
    height = container.clientHeight || 400;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.render(scene, camera);
  }

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(() => onResize());
    resizeObserver.observe(container);
  }
  window.addEventListener('resize', onResize, { passive: true });

  const clock = new THREE.Clock();
  let isTabVisible = true;
  let isElementInViewport = true;

  document.addEventListener('visibilitychange', () => {
    isTabVisible = !document.hidden;
    if (isTabVisible && isElementInViewport) {
      clock.getDelta();
    }
  });

  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isElementInViewport = entry.isIntersecting;
        if (isElementInViewport) {
          clock.getDelta();
        }
      });
    }, { threshold: 0.05 });
    heroObserver.observe(container);
  }

  // Initial static pose render
  coreGroup.rotation.set(0.22, 0.38, 0);
  renderer.render(scene, camera);

  function animate() {
    requestAnimationFrame(animate);
    if (!isTabVisible || !isElementInViewport) return;

    const elapsedTime = clock.getElapsedTime();

    dragRotX += dragVelX;
    dragRotY += dragVelY;
    dragVelX *= 0.92;
    dragVelY *= 0.92;

    currentRotX += (targetRotX - currentRotX) * 0.05;
    currentRotY += (targetRotY - currentRotY) * 0.05;

    if (!prefersReducedMotion) {
      const activeSpeed = geometries[currentGeomKey].speedY;
      coreGroup.rotation.y += activeSpeed;
      innerCoreMesh.rotation.y -= 0.008;
      innerCoreMesh.rotation.z += 0.005;
      ring1.rotation.z += 0.003;
      ring2.rotation.x -= 0.004;
      const breathe = 1.0 + Math.sin(elapsedTime * 1.8) * 0.04;
      innerCoreMesh.scale.set(breathe, breathe, breathe);
    }

    coreGroup.rotation.x = currentRotX + dragRotX;
    coreGroup.rotation.y += dragVelY;
    pointsMesh.rotation.copy(outerMesh.rotation);

    renderer.render(scene, camera);
  }

  animate();
})();
