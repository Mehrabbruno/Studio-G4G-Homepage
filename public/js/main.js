// ====== Rising Strips (with cycling text strips, evenly spaced) ======
(() => {
  
  let isHorizontal = window.innerWidth <= 1200;

  window.addEventListener("resize", () => {
    isHorizontal = window.innerWidth <= 1200;
  });

  const container = document.querySelector('.pattern-container');
  if (!container) return console.warn('[Strips] .pattern-container not found');

  // Ensure container works as a viewport
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
  container.style.overflow = 'hidden';
  container.style.willChange = 'transform';

  // ---- Config ----
  const cfg = {
    palette: ['#2273BC', '#000000', '#929292'],
    visibleCount: 36,
    widthPct: [30, 60],        // %
    heightPx: [30, 60],        // px
    speedPxPerSec: [160, 180],  // rising speed
    opacity: [0.6, 1],
    zIndex: [1, 9],            // always < 10
    spawnAttemptMs: 120,       // how often we try to fill up to visibleCount
    stripedChance: 0.30,       // 20%

    // TEXT STRIPS
    
    textEnabled: true,
    textLines: [
      // 'Where does design begin?',
      // 'Where does creativity spark?',
      // 'Where does experience connect?'
    ],
    textSpeedPxPerSec: [150, 165],  // can be same or slightly different than non-text
    textPadding: '18px 24px',
    textFontSize: 'clamp(28px, 2.1vw, 36px)',
    textFontWeight: '400',
    textLetterSpacing: '0.2px',
    textBackground: '#000000',     // black
    textColor: '#2273BC',          // blue text
    textWidthPct: [40, 70],        // text strips width range (use same “spread” policy)
    textOpacity: [1, 1.0],      // text should be crisp
  };

  // Respect reduced motion
  const prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    cfg.visibleCount = Math.min(8, cfg.visibleCount);
    cfg.speedPxPerSec = [25, 70];
    cfg.textSpeedPxPerSec = [25, 70];
  }

  // ---- Helpers ----
  const rand = (a, b) => a + Math.random() * (b - a);
  const randi = (a, b) => Math.floor(rand(a, b + 1));
  const pick = (arr) => arr[(Math.random() * arr.length) | 0];
  const clamp = (v, mn, mx) => Math.max(mn, Math.min(mx, v));

  function hexToRGBA(hex, a=1) {
    const h = hex.replace('#','');
    const r = parseInt(h.substring(0,2),16);
    const g = parseInt(h.substring(2,4),16);
    const b = parseInt(h.substring(4,6),16);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  function makeBackground(baseHex) {
    if (Math.random() < cfg.stripedChance) {
      const c1 = hexToRGBA(baseHex, 0.95);
      const c2 = hexToRGBA(baseHex, 0.85);
      const cLine = hexToRGBA('#E8D8B6', 1); // your warmer paper-tone highlight
      const band = 5;
      return `
        repeating-linear-gradient(
          180deg,
          ${cLine} 0px,
          ${cLine} 2px,
          transparent 1px,
          transparent ${band}px
        ),
        linear-gradient(${c1}, ${c2})
      `;
    }
    return hexToRGBA(baseHex, 1);
  }

  // ---- Strip management ----
  const active = [];       // non-text strips
  const pool = [];         // pooled non-text nodes

  const activeText = [];   // text strips (exactly textLines.length alive)
  const poolText = [];     // pooled text nodes
  let textCursor = 0;      // which line spawns next (order preserved)

  function baseStripEl() {
    const el = document.createElement('div');
    el.className = 'strip';
    el.style.position = 'absolute';
    el.style.left = '0';
    el.style.top = '0';
    el.style.willChange = 'transform, opacity';
    el.style.pointerEvents = 'none';
    return el;
  }

  function createStrip() {
    return pool.pop() || baseStripEl();
  }
  function createTextStrip() {
    const el = poolText.pop() || baseStripEl();
    el.className = 'strip text-strip';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.style.whiteSpace = 'nowrap';
    el.style.overflow = 'hidden';
    el.style.textOverflow = 'ellipsis';
    el.style.fontWeight = cfg.textFontWeight;
    el.style.letterSpacing = cfg.textLetterSpacing;
    return el;
  }

  // ---------- SPAWNERS ----------
  function spawn(initialY = null) {
    const W = container.clientWidth;
    const H = container.clientHeight || container.offsetHeight;
    if (!W || !H) return;

    let widthPx, heightPx;

    if (isHorizontal) {
      // Tall vertical bars
      widthPx = randi(cfg.heightPx[0], cfg.heightPx[1]); // thin
      const heightPct = rand(cfg.widthPct[0], cfg.widthPct[1]);
      heightPx = (heightPct / 100) * H; // tall
    } else {
      // Original horizontal bars
      const widthPct = rand(cfg.widthPct[0], cfg.widthPct[1]);
      widthPx = (widthPct / 100) * W;
      heightPx = randi(cfg.heightPx[0], cfg.heightPx[1]);
    }
    const speed = rand(cfg.speedPxPerSec[0], cfg.speedPxPerSec[1]);
    const z = randi(cfg.zIndex[0], cfg.zIndex[1]);
    const opacity = rand(cfg.opacity[0], cfg.opacity[1]);
    const color = pick(cfg.palette);
    const bg = makeBackground(color);

    const leftPx = rand(0, Math.max(1, W - widthPx));

    const el = createStrip();
    el.style.zIndex = String(z);
    el.style.width = `${widthPx}px`;
    el.style.height = `${heightPx}px`;
    el.style.opacity = opacity.toFixed(3);
    el.style.background = bg;
    el.style.backgroundBlendMode = 'overlay';
    el.style.backgroundSize = 'auto';
    el.style.boxShadow = color.toUpperCase() !== '#929292'
      ? `0 0 8px ${hexToRGBA(color, 0.15)}`
      : 'none';

    // let startY = s?.y || 0;
    // let startX = s?.x || 0;

    if (isHorizontal) {
      startX = W + randi(6, 40);
      startY = rand(0, Math.max(1, H - heightPx));
    } else {
      startY = (initialY !== null) ? initialY : (H + randi(6, 40));
      startX = leftPx;
    }
    el.style.transform = `translate3d(${leftPx}px, ${startY}px, 0)`;

    container.appendChild(el);

    active.push({
      el, x: leftPx, y: startY, w: widthPx, h: heightPx, speed
    });
  }

  function spawnText(initialY = null) {
    const W = container.clientWidth;
    const H = container.clientHeight || container.offsetHeight;
    if (!W || !H) return;

    const text = cfg.textLines[textCursor];
    textCursor = (textCursor + 1) % cfg.textLines.length;

    const widthPct = rand(cfg.textWidthPct[0], cfg.textWidthPct[1]);
    const widthPx = (widthPct / 100) * W;
    const heightPx = randi(cfg.heightPx[0], cfg.heightPx[1]); // same height range for consistency
    const speed = rand(cfg.textSpeedPxPerSec[0], cfg.textSpeedPxPerSec[1]);
    const z = randi(cfg.zIndex[0], cfg.zIndex[1]);
    const opacity = rand(cfg.textOpacity[0], cfg.textOpacity[1]);

    const leftPx = rand(0, Math.max(1, W - widthPx));

    const el = createTextStrip();
    el.style.zIndex = '10'; // always on top
    el.style.width = 'max-content'; // fit to text width
    el.style.height = `${heightPx}px`;
    el.style.opacity = opacity.toFixed(3);
    el.style.background = cfg.textBackground;
    el.style.color = cfg.textColor;
    el.style.padding = cfg.textPadding;
    el.style.fontSize = cfg.textFontSize;
    el.style.backgroundBlendMode = ''; // not needed
    el.style.boxShadow = `0 0 8px ${hexToRGBA('#000000', 0.22)}`;

    el.textContent = text;

    let startX, startY;

    if (isHorizontal) {
      startX = W + randi(6, 40); // spawn from right
      startY = rand(0, Math.max(1, H - heightPx));
    } else {
      startX = leftPx;
      startY = (initialY !== null) ? initialY : (H + randi(6, 40));
    }

    el.style.transform = `translate3d(${startX}px, ${startY}px, 0)`;
    container.appendChild(el);

    activeText.push({
      el, x: leftPx, y: startY, w: widthPx, h: heightPx, speed
    });
  }

  // ---------- RECYCLE ----------
  function recycle(i) {
    const item = active[i];
    if (!item) return;
    const el = item.el;
    if (el.parentNode === container) container.removeChild(el);
    pool.push(el);
    active.splice(i, 1);
  }
  function recycleText(i) {
    const item = activeText[i];
    if (!item) return;
    const el = item.el;
    if (el.parentNode === container) container.removeChild(el);
    poolText.push(el);
    activeText.splice(i, 1);
  }

  // ---------- MAIN LOOP ----------
  let last = performance.now();
  function tick(t) {
    const dt = Math.min(64, t - last) / 1000;
    last = t;

    // non-text
    for (let i = active.length - 1; i >= 0; i--) {
      const s = active[i];
      if (isHorizontal) {
        s.x -= s.speed * dt;
        s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0)`;
        if (s.x + s.w < 0) recycle(i);
      } else {
        s.y -= s.speed * dt;
        s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0)`;
        if (s.y + s.h < 0) recycle(i);
      }
    }

    // text
    for (let i = activeText.length - 1; i >= 0; i--) {
      const s = activeText[i];
      s.y -= s.speed * dt;
      s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0)`;
      if (s.y + s.h < 0) {
        recycleText(i);
        // immediately schedule next text line (order preserved)
        spawnText(); // spawns from bottom with the next line in sequence
      }
    }

    requestAnimationFrame(tick);
  }

  // ---------- FILLERS ----------
  let didInitialStagger = false;
  let didInitialTextStagger = false;

  function initialStaggerFill() {
    const W = container.clientWidth;
    const H = container.clientHeight || container.offsetHeight;
    if (!W || !H) return;

    const target = cfg.visibleCount;

    if (isHorizontal) {
      const step = W / target;

      for (let i = 0; i < target; i++) {
        const laneCenter = W - i * step;
        const jitter = rand(-step * 0.25, step * 0.25);
        const x = clamp(laneCenter + jitter, -60, W + 60);

        spawn(null, x); // pass X instead of Y
      }

    } else {
      const step = H / target;

      for (let i = 0; i < target; i++) {
        const laneCenter = H - i * step;
        const jitter = rand(-step * 0.25, step * 0.25);
        const y = clamp(laneCenter + jitter, -60, H + 60);

        spawn(y);
      }
    }

    didInitialStagger = true;
  }

  function initialTextStaggerFill() {
    if (!cfg.textEnabled || !cfg.textLines.length) { didInitialTextStagger = true; return; }
    const H = container.clientHeight || container.offsetHeight;
    if (!H) return;

    const N = cfg.textLines.length;
    const step = H / (N + 1); // even spacing across height
    // Reset cursor to ensure order starts from first line
    textCursor = 0;
    for (let i = 0; i < N; i++) {
      const laneY = H - (i + 1) * step;
      const jitter = rand(-step * 0.18, step * 0.18);
      const y = clamp(laneY + jitter, -40, H + 40);
      spawnText(y); // will take lines in order due to textCursor
    }
    didInitialTextStagger = true;
  }

  function tryFill() {
    if (!document.body.contains(container)) return;

    if (!didInitialStagger) initialStaggerFill();
    if (cfg.textEnabled && !didInitialTextStagger) initialTextStaggerFill();

    // top up non-text to target
    const deficit = cfg.visibleCount - active.length;
    if (deficit > 0) for (let i = 0; i < deficit; i++) spawn();

    // ensure exactly one live text strip per text line
    if (cfg.textEnabled) {
      const wanted = cfg.textLines.length;
      const have = activeText.length;
      if (have < wanted) {
        for (let i = 0; i < wanted - have; i++) spawnText();
      } else if (have > wanted) {
        // trim extras if text lines array was reduced at runtime
        for (let i = 0; i < have - wanted; i++) recycleText(activeText.length - 1 - i);
      }
    }
  }

  const spawnTimer = setInterval(tryFill, cfg.spawnAttemptMs);

  // Handle resize (keep simple; existing strips continue gracefully)
  let resizeTO = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTO);
    resizeTO = setTimeout(() => {
      tryFill();
    }, 120);
  });

  // Kickoff
  tryFill();
  requestAnimationFrame(tick);
})();


// Swiper vertical fullpage with wheel/touch, no arrows/pagination
const swiper = new Swiper('.my-vertical-swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  speed: 700,
  allowTouchMove: true,         // enable touch/trackpad
  simulateTouch: true,
  threshold: 8,                 // minimum px swipe
  longSwipesMs: 100,
  resistanceRatio: 0.85,

  // Mouse/trackpad scroll
  mousewheel: {
    forceToAxis: true,          // vertical wheel → vertical slides
    releaseOnEdges: true,       // allow native bounce at ends
    sensitivity: 1.2
  },

  // Disable extras you don’t want
  keyboard: { enabled: false },
  pagination: { el: null },
  navigation: { enabled: false },

  // Optional: snap only when user stops (off = normal snap)
  // freeMode: { enabled: false },
});


// ===================== SECTION TWO: STRIPES MARQUEE + PROJECT CARD (PAUSE ON HOVER) =====================
(() => {
  

  function getResponsiveConfig() {
    const isSmall = window.innerWidth <= 1200;

    return {
      STRIPE_PATTERN: isSmall ? [8, 6, 4, 3, 4, 6] : [10, 8, 6, 4, 6, 8],
      STRIPE_GAP: isSmall ? 24 : 40,
      PROJECT_CARD_WIDTH: isSmall ? 320 : 400,
      ROW_HEIGHT: isSmall ? 200 : 250,
    };
  }

  // =========================
  // CONFIG
  // =========================
  let STRIPE_PATTERN;
  let STRIPE_GAP;
  let ROW_HEIGHT;

  const STRIPE_BASE_COLOR = "#222222";
  const STRIPE_ACCENT_COLOR = "#2273BC";
  const ACCENT_PROBABILITY = 0.18; // accent stripe chance

  const SPEED_ROW_1 = 80; // px/sec (moves RIGHT)
  const SPEED_ROW_2 = 80; // px/sec (moves LEFT)

  let PROJECT_CARD_WIDTH;
  const PROJECT_CARD_PROBABILITY = 0.10; // tweak

  // Your projects (Font Awesome classes as strings)
  const PROJECTS = [
    { title: "PEBLZ", image: "public/assets/PEBLZ.png", icon: "fa-light fa-arrow-up-right",
    images: [
      "public/assets/projects/PEBLZ/project-img-1.png",
      "public/assets/projects/PEBLZ/project-img-2.png",
      "public/assets/projects/PEBLZ/project-img-3.png",
      "public/assets/projects/PEBLZ/project-img-4.png",
      "public/assets/projects/PEBLZ/project-img-5.png",
      "public/assets/projects/PEBLZ/project-img-6.png",
      "public/assets/projects/PEBLZ/project-img-7.png",
      "public/assets/projects/PEBLZ/project-img-8.png",
      "public/assets/projects/PEBLZ/project-img-9.png",
      "public/assets/projects/PEBLZ/project-img-10.png",
      "public/assets/projects/PEBLZ/project-img-11.png",
    ],},
    { title: "Creator Dao", image: "public/assets/CRDAO.png", icon: "fa-light fa-arrow-up-right",
    images: [
      "public/assets/projects/CRDAO/project-img-1.png",
      "public/assets/projects/CRDAO/project-img-2.png",
      "public/assets/projects/CRDAO/project-img-3.png",
      "public/assets/projects/CRDAO/project-img-4.png",
      "public/assets/projects/CRDAO/project-img-5.png",
      "public/assets/projects/CRDAO/project-img-6.png",
      "public/assets/projects/CRDAO/project-img-7.png",
      "public/assets/projects/CRDAO/project-img-8.png",
      "public/assets/projects/CRDAO/project-img-9.png",
      "public/assets/projects/CRDAO/project-img-10.png",
      "public/assets/projects/CRDAO/project-img-11.png",
    ], },
    { title: "MAUDE", image: "public/assets/MAUDE.png", icon: "fa-light fa-arrow-up-right",
    images: [
      "public/assets/projects/MAUDE/project-img-1.png",
      "public/assets/projects/MAUDE/project-img-2.png",
      "public/assets/projects/MAUDE/project-img-3.png",
      "public/assets/projects/MAUDE/project-img-4.png",
      "public/assets/projects/MAUDE/project-img-5.png",
      "public/assets/projects/MAUDE/project-img-6.png",
      "public/assets/projects/MAUDE/project-img-7.png",
      "public/assets/projects/MAUDE/project-img-8.png",
      "public/assets/projects/MAUDE/project-img-9.png",
      "public/assets/projects/MAUDE/project-img-10.png",
      "public/assets/projects/MAUDE/project-img-11.png",
    ], },
    { title: "Cheeki", image: "public/assets/CHEEKI.png", icon: "fa-light fa-arrow-up-right",
    images: [
      "public/assets/projects/CHEEKI/project-img-1.png",
      "public/assets/projects/CHEEKI/project-img-2.png",
      "public/assets/projects/CHEEKI/project-img-3.png",
      "public/assets/projects/CHEEKI/project-img-4.png",
      "public/assets/projects/CHEEKI/project-img-5.png",
      "public/assets/projects/CHEEKI/project-img-6.png",
      "public/assets/projects/CHEEKI/project-img-7.png",
      "public/assets/projects/CHEEKI/project-img-8.png",
      "public/assets/projects/CHEEKI/project-img-9.png",
      "public/assets/projects/CHEEKI/project-img-10.png",
      "public/assets/projects/CHEEKI/project-img-11.png",
    ], },
    { title: "DataCrest", image: "public/assets/DATACREST.png", icon: "fa-light fa-arrow-up-right",
    images: [
      "public/assets/projects/DATACREST/project-img-1.png",
      "public/assets/projects/DATACREST/project-img-2.png",
      "public/assets/projects/DATACREST/project-img-3.png",
      "public/assets/projects/DATACREST/project-img-4.png",
      "public/assets/projects/DATACREST/project-img-5.png",
      "public/assets/projects/DATACREST/project-img-6.png",
      "public/assets/projects/DATACREST/project-img-7.png",
      "public/assets/projects/DATACREST/project-img-8.png",
      "public/assets/projects/DATACREST/project-img-9.png",
      "public/assets/projects/DATACREST/project-img-10.png",
      "public/assets/projects/DATACREST/project-img-11.png",
    ], },
    { title: "ACL", image: "public/assets/ACL.png", icon: "fa-light fa-arrow-up-right",
    images: [
      "public/assets/projects/ACL/project-img-1.png",
      "public/assets/projects/ACL/project-img-2.png",
      "public/assets/projects/ACL/project-img-3.png",
      "public/assets/projects/ACL/project-img-4.png",
      "public/assets/projects/ACL/project-img-5.png",
      "public/assets/projects/ACL/project-img-6.png",
      "public/assets/projects/ACL/project-img-7.png",
      "public/assets/projects/ACL/project-img-8.png",
      "public/assets/projects/ACL/project-img-9.png",
    ], },
    { title: "LOGO_FOLIO_1", image: "public/assets/LOGO_FOLIO_1.png", icon: "fa-light fa-arrow-up-right",
    images: [
      "public/assets/projects/LOGO_FOLIO_1/project-img-1.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-2.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-3.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-4.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-5.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-6.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-7.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-8.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-9.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-10.png",
      "public/assets/projects/LOGO_FOLIO_1/project-img-11.png",
    ], },
  ];

  // =========================
  // STATE
  // =========================
  const state = {
    rafId: null,
    lastTs: 0,
    rows: [], // row controllers
  };

  // =========================
  // MODAL (event delegation safe)
  // =========================
  function setupModal() {
    const modal = document.getElementById("projectModal");
    if (!modal) {
      console.warn("Modal not found. Add id='projectModal' to .project-modal");
      return null;
    }

    const modalTitle = modal.querySelector(".project-title");
    const closeBtn = modal.querySelector(".project-close-btn");
    const nextBtn = modal.querySelector(".next-project-btn");

    let currentIndex = 0;

    function openProjectModalByIndex(index) {
      const project = PROJECTS[index];
      if (!project) return;

      modalTitle.textContent = project.title || "Project";
      modal.style.display = "block";
      document.body.style.overflow = "hidden";

      // Build stripes after open (your working approach)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          buildModalStripeRow(modal.querySelector(".stripes-row-1"), { anchor: "top" });
          buildModalStripeRow(modal.querySelector(".stripes-row-2"), { anchor: "bottom" });
        });
      });

      // ✅ Init swiper after modal is visible (needs layout)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          mountProjectSwiper(modal, project);
        });
      });
    }


    function closeProjectModal() {
      modal.style.display = "none";
      document.body.style.overflow = "";
      destroyProjectSwiper();
    }


    closeBtn?.addEventListener("click", closeProjectModal);

    // Optional: click outside to close (if you want)
    // modal.addEventListener("click", (e) => {
    //   if (e.target === modal) closeProjectModal();
    // });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.style.display === "block") {
        closeProjectModal();
      }
    });

    nextBtn?.addEventListener("click", () => {
      const next = (currentIndex + 1) % PROJECTS.length;
      openProjectModalByIndex(next);
    });

    // ✅ Event delegation: works for cloned cards too
    document.addEventListener("click", (e) => {
      const card = e.target.closest('[data-project-card="1"]');
      if (!card) return;

      const idx = Number(card.dataset.projectIndex);
      if (Number.isNaN(idx)) return;

      openProjectModalByIndex(idx);
    });

    return { openProjectModalByIndex, closeProjectModal };
  }

  // =========================
  // CARD CREATION
  // =========================
  function createProjectCard(project, projectIndex) {
    const card = document.createElement("div");

    // Markers so clicks work via delegation (even after cloneNode)
    card.dataset.projectCard = "1";
    card.dataset.projectIndex = String(projectIndex);

    card.style.width = `${PROJECT_CARD_WIDTH}px`;
    card.style.height = "100%";
    card.style.flexShrink = "0";
    // card.style.borderRadius = "16px";
    card.style.overflow = "hidden";
    card.style.position = "relative";
    card.style.cursor = "pointer";
    card.style.pointerEvents = "auto";

    card.style.backgroundImage = `url("${project.image}")`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    card.style.backgroundRepeat = "no-repeat";

    // Overlay for readability
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.inset = "0";
    overlay.style.background =
      "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15), rgba(0,0,0,0))";
    card.appendChild(overlay);

    // Bottom content
    const content = document.createElement("div");
    content.style.position = "absolute";
    content.style.left = "16px";
    content.style.right = "16px";
    content.style.bottom = "14px";
    content.style.display = "flex";
    content.style.alignItems = "center";
    content.style.justifyContent = "space-between";
    content.style.gap = "12px";
    card.appendChild(content);

    // Title
    const title = document.createElement("div");
    title.textContent = project.title || "Project";
    title.style.color = "#FFFFFF";
    title.style.fontFamily = "system-ui, -apple-system, Segoe UI, Roboto, Arial";
    title.style.fontSize = "18px";
    title.style.fontWeight = "700";
    title.style.letterSpacing = "0.2px";
    title.style.textShadow = "0 2px 12px rgba(0,0,0,0.35)";
    title.style.whiteSpace = "nowrap";
    title.style.overflow = "hidden";
    title.style.textOverflow = "ellipsis";
    content.appendChild(title);

    // Icon wrapper
    const iconWrap = document.createElement("div");
    iconWrap.style.width = "44px";
    iconWrap.style.height = "44px";
    iconWrap.style.display = "flex";
    iconWrap.style.alignItems = "center";
    iconWrap.style.justifyContent = "center";
    iconWrap.style.borderRadius = "12px";
    iconWrap.style.background = "rgba(255,255,255,0.14)";
    iconWrap.style.backdropFilter = "blur(6px)";
    iconWrap.style.color = "#FFFFFF";
    iconWrap.style.fontSize = "18px";
    iconWrap.style.textShadow = "0 2px 10px rgba(0,0,0,0.35)";

    const iEl = document.createElement("i");
    iEl.className = project.icon || "fa-solid fa-star";
    iEl.setAttribute("aria-hidden", "true");

    iconWrap.appendChild(iEl);
    content.appendChild(iconWrap);

    return card;
  }

  // =========================
  // STRIPES SEQUENCE (build seqA then clone)
  // =========================
  function buildStripeSequence(sequenceEl, targetWidth) {
    const projectOrder = [...PROJECTS]
      .map((p, i) => ({ p, i }))
      .sort(() => Math.random() - 0.5);

    let projectCursor = 0;

    sequenceEl.innerHTML = "";
    sequenceEl.style.display = "inline-flex";
    sequenceEl.style.height = "100%";
    sequenceEl.style.alignItems = "stretch";
    sequenceEl.style.gap = `${STRIPE_GAP}px`;

    // Fix seam "sticking" between seqA and seqB:
    sequenceEl.style.paddingRight = `${STRIPE_GAP}px`;
    sequenceEl.style.boxSizing = "border-box";

    let filled = 0;
    let i = 0;
    let lastWasAccent = false;
    let lastWasCard = false;

    while (filled < targetWidth + 600) {

      // Insert stripes first
      const w = STRIPE_PATTERN[i % STRIPE_PATTERN.length];

      const stripe = document.createElement("div");
      stripe.style.width = `${w}px`;
      stripe.style.height = "100%";
      stripe.style.flexShrink = "0";

      const isAccent = !lastWasAccent && Math.random() < ACCENT_PROBABILITY;
      stripe.style.backgroundColor = isAccent ? STRIPE_ACCENT_COLOR : STRIPE_BASE_COLOR;

      sequenceEl.appendChild(stripe);

      filled += w + STRIPE_GAP;
      i++;
      lastWasAccent = isAccent;
      lastWasCard = false;

      // Random chance to insert project (if not all used)
      if (
        projectCursor < projectOrder.length &&
        Math.random() < 0.15 &&   // controls spacing density
        !lastWasCard
      ) {
        const { p, i: idx } = projectOrder[projectCursor++];

        const card = createProjectCard(p, idx);
        sequenceEl.appendChild(card);

        filled += PROJECT_CARD_WIDTH + STRIPE_GAP;
        lastWasCard = true;
      }
    }
  }

  // =========================
  // ROW MARQUEE (seamless loop)
  // =========================
  function ensureRowBasics(rowEl) {
    rowEl.style.position = rowEl.style.position || "relative";
    rowEl.style.overflow = "hidden";
    rowEl.style.height = `${ROW_HEIGHT}px`;
  }

  function createMarqueeForRow(rowEl, direction, speedPxPerSec) {
    ensureRowBasics(rowEl);

    const viewport = document.createElement("div");
    viewport.style.width = "100%";
    viewport.style.height = "100%";
    viewport.style.overflow = "hidden";
    viewport.style.position = "relative";

    const track = document.createElement("div");
    track.style.display = "inline-flex";
    track.style.height = "100%";
    track.style.willChange = "transform";

    const seqA = document.createElement("div");

    const rowController = {
      rowEl,
      viewport,
      track,
      seqA,
      direction,
      speed: speedPxPerSec,
      offset: 0,
      paused: false,
      seqAWidth: () => Math.ceil(seqA.getBoundingClientRect().width),
    };

    // Build seqA and clone it to seqB (clone doesn't keep listeners, but click uses delegation)
    const rowWidth = Math.ceil(rowEl.getBoundingClientRect().width) || 0;
    buildStripeSequence(seqA, rowWidth);
    const seqB = seqA.cloneNode(true);

    track.appendChild(seqA);
    track.appendChild(seqB);
    viewport.appendChild(track);

    rowEl.innerHTML = "";
    rowEl.appendChild(viewport);

    // Hover pause via delegation (works for cloned cards too)
    function isOverProjectCard(el) {
      return !!(el && el.closest && el.closest('[data-project-card="1"]'));
    }

    viewport.addEventListener("pointerover", (e) => {
      if (isOverProjectCard(e.target)) rowController.paused = true;
    });

    viewport.addEventListener("pointerout", (e) => {
      if (!isOverProjectCard(e.target)) return;
      const toEl = e.relatedTarget;
      if (isOverProjectCard(toEl)) return;
      rowController.paused = false;
    });

    // Start offset:
    // For RIGHT movement, start at -W so there is no gap on the left.
    const w = rowController.seqAWidth();
    rowController.offset = direction === "right" ? -w : 0;
    track.style.transform = `translate3d(${Math.round(rowController.offset)}px, 0, 0)`;

    return rowController;
  }

  function tick(ts) {
    if (!state.lastTs) state.lastTs = ts;
    const dt = (ts - state.lastTs) / 1000;
    state.lastTs = ts;

    for (const r of state.rows) {
      const loopW = r.seqAWidth();
      if (!loopW) continue;

      if (!r.paused) {
        const delta = r.speed * dt;

        // keep offset in [-loopW, 0)
        if (r.direction === "right") {
          r.offset += delta;
          if (r.offset >= 0) r.offset -= loopW;
        } else {
          r.offset -= delta;
          if (r.offset <= -loopW) r.offset += loopW;
        }

        r.track.style.transform = `translate3d(${Math.round(r.offset)}px, 0, 0)`;
      }
    }

    state.rafId = requestAnimationFrame(tick);
  }

  function init() {
    const r = getResponsiveConfig();
    STRIPE_PATTERN = r.STRIPE_PATTERN;
    STRIPE_GAP = r.STRIPE_GAP;
    PROJECT_CARD_WIDTH = r.PROJECT_CARD_WIDTH;
    ROW_HEIGHT = r.ROW_HEIGHT;

    const row1 = document.querySelector(".row-1");
    const row2 = document.querySelector(".row-2");

    if (!row1 || !row2) {
      console.warn("Init: .row-1 or .row-2 not found.");
      return;
    }

    state.rows = [
      createMarqueeForRow(row1, "right", SPEED_ROW_1),
      createMarqueeForRow(row2, "left", SPEED_ROW_2),
    ];

    state.lastTs = 0;
    if (state.rafId) cancelAnimationFrame(state.rafId);
    state.rafId = requestAnimationFrame(tick);
  }

  // =========================
  // BOOT
  // =========================
  document.addEventListener("DOMContentLoaded", () => {
    // Setup modal first (so clicks open it)
    setupModal();

    // Init stripes rows
    init();

    // Layout settling retries (Swiper/fonts)
    requestAnimationFrame(init);
    setTimeout(init, 150);
    setTimeout(init, 400);

    window.addEventListener("resize", init);
  });
})();










document.addEventListener("DOMContentLoaded", async () => {
  const mount = document.getElementById("map-circle");
  if (!mount) return;

  // Circle styling (your version)
  mount.style.position = "absolute";
  mount.style.left = "50%";
  mount.style.top = "50%";
  mount.style.transform = "translate(-50%, -50%)";
  mount.style.width = "550px";
  mount.style.height = "550px";
  mount.style.borderRadius = "50%";
  mount.style.border = "2px solid #2273BC";
  mount.style.overflow = "hidden"; // circle clips overall view (keep)
  mount.style.zIndex = "999";
  mount.style.background = "transparent";
  mount.style.willChange = "transform";

  // Controls
  const SCALE = 2;   // ✅ bigger map
  const SPEED = 35;  // px/sec (tweak)

  try {
    const res = await fetch("public/assets/map.svg");
    const svgText = await res.text();

    // Build viewport + track
    mount.innerHTML = "";

    const viewport = document.createElement("div");
    viewport.style.width = "100%";
    viewport.style.height = "100%";
    viewport.style.overflow = "hidden";
    viewport.style.position = "relative";

    const track = document.createElement("div");
    track.style.position = "absolute";
    track.style.left = "0";
    track.style.top = "0";
    track.style.height = "100%";
    track.style.width = "100%";
    track.style.willChange = "transform";

    viewport.appendChild(track);
    mount.appendChild(viewport);

    function createMapTile() {
      // Tile wrapper (NO overflow hidden — we don't want tile clipping)
      const tile = document.createElement("div");
      tile.style.position = "absolute";
      tile.style.top = "0";
      tile.style.left = "0";
      tile.style.height = "100%";
      tile.style.willChange = "transform";
      tile.style.pointerEvents = "none";

      // Inner layer: fixed to circle size, then scaled
      const inner = document.createElement("div");
      inner.style.position = "absolute";
      inner.style.top = "50%";
      inner.style.left = "50%";
      inner.style.transformOrigin = "center center";
      inner.style.willChange = "transform";

      inner.innerHTML = svgText;

      const svg = inner.querySelector("svg");
      if (svg) {
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.style.display = "block";
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
      }

      tile.appendChild(inner);
      return { tile, inner };
    }

    // Two tiles
    const A = createMapTile();
    const B = createMapTile();
    track.appendChild(A.tile);
    track.appendChild(B.tile);

    // Animation state
    let tileW = 0;   // how far until repeat
    let x = 0;       // offset in [-tileW, 0)
    let lastTs = 0;

    function layout() {
      const circleW = Math.ceil(mount.getBoundingClientRect().width);
      const circleH = Math.ceil(mount.getBoundingClientRect().height);

      // IMPORTANT: tile width must scale with SCALE so tiles don't overlap
      tileW = Math.ceil(circleW * SCALE);

      // Each tile is tileW wide (so there's enough room for scaled map)
      A.tile.style.width = `${tileW}px`;
      B.tile.style.width = `${tileW}px`;
      A.tile.style.height = "100%";
      B.tile.style.height = "100%";

      // Inner uses circle size, then scaled up visually
      A.inner.style.width = `${circleW}px`;
      A.inner.style.height = `${circleH}px`;
      B.inner.style.width = `${circleW}px`;
      B.inner.style.height = `${circleH}px`;

      A.inner.style.transform = `translate(-50%, -50%) scale(${SCALE})`;
      B.inner.style.transform = `translate(-50%, -50%) scale(${SCALE})`;

      // Place tiles side-by-side
      A.tile.style.transform = "translate3d(0px,0,0)";
      B.tile.style.transform = `translate3d(${tileW}px,0,0)`;

      // Reset x into safe range so it never "ends"
      x = 0;
      lastTs = 0;
      render();
    }

    function render() {
      if (!tileW) return;

      // x stays in [-tileW, 0)
      A.tile.style.transform = `translate3d(${Math.round(x)}px, 0, 0)`;
      B.tile.style.transform = `translate3d(${Math.round(x + tileW)}px, 0, 0)`;
    }

    function tick(ts) {
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      if (!tileW) return requestAnimationFrame(tick);

      x -= SPEED * dt;

      // Wrap endlessly (no drift, no stopping)
      // Keep x in [-tileW, 0)
      x = x % tileW;
      if (x > 0) x -= tileW;

      render();
      requestAnimationFrame(tick);
    }

    layout();
    window.addEventListener("resize", layout);
    requestAnimationFrame(tick);
  } catch (err) {
    console.error("Failed to load SVG:", err);
  }
});










function buildModalStripeRow(rowEl, opts = {}) {
  if (!rowEl) return;

  const {
    baseColor = "#222222",
    accentColor = "#2273BC",
    accentProbability = 0.12,
    barWidth = 3,           // thickness of each vertical line
    gap = 28,               // spacing between bars
    minHeight = 18,
    maxHeight = 48,
    anchor = "top",         // "top" (hang down) or "bottom" (hang up)
  } = opts;

  // Reset / layout
  rowEl.innerHTML = "";
  rowEl.style.display = "flex";
  rowEl.style.gap = `${gap}px`;
  rowEl.style.alignItems = anchor === "top" ? "flex-start" : "flex-end";
  rowEl.style.justifyContent = "flex-start";
  rowEl.style.overflow = "hidden";
  rowEl.style.background = "transparent"; // keep your modal bg clean

  const rowW = Math.ceil(rowEl.getBoundingClientRect().width);
  if (!rowW) return;

  // How many bars fit across the row
  const step = barWidth + gap;
  const count = Math.ceil(rowW / step) + 2;

  for (let i = 0; i < count; i++) {
    const bar = document.createElement("div");
    bar.style.width = `${barWidth}px`;
    bar.style.flexShrink = "0";

    // Random height within range
    const h = Math.floor(minHeight + Math.random() * (maxHeight - minHeight));
    bar.style.height = `${h}px`;

    // Random accent
    bar.style.backgroundColor = Math.random() < accentProbability ? accentColor : baseColor;

    rowEl.appendChild(bar);
  }
}

const stripeTop = document.querySelector("#projectModal .stripes-row-1");
const stripeBottom = document.querySelector("#projectModal .stripes-row-2");

buildModalStripeRow(stripeTop, {
  anchor: "top",
  barWidth: 3,
  gap: 28,
  minHeight: 18,
  maxHeight: 48,
  accentProbability: 0.12,
});

buildModalStripeRow(stripeBottom, {
  anchor: "bottom",
  barWidth: 3,
  gap: 28,
  minHeight: 18,
  maxHeight: 48,
  accentProbability: 0.12,
});

window.addEventListener("resize", () => {
  const modal = document.getElementById("projectModal");
  if (!modal || modal.style.display !== "block") return;

  buildModalStripeRow(modal.querySelector(".stripes-row-1"), { anchor: "top" });
  buildModalStripeRow(modal.querySelector(".stripes-row-2"), { anchor: "bottom" });
});


let projectSwiper = null;

function mountProjectSwiper(modalEl, project) {
  const wrapper = modalEl.querySelector(".project-swiper .swiper-wrapper");
  if (!wrapper) return;

  // Build slides
  wrapper.innerHTML = "";
  (project.images || []).forEach((src) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const img = document.createElement("img");
    img.src = src;
    img.alt = project.title || "Project image";
    img.loading = "lazy";

    slide.appendChild(img);
    wrapper.appendChild(slide);
  });

  // Destroy previous instance
  if (projectSwiper) {
    projectSwiper.destroy(true, true);
    projectSwiper = null;
  }

  // Init new Swiper
  projectSwiper = new Swiper(modalEl.querySelector(".project-swiper"), {
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    freeMode: {
      enabled: true,
      momentum: true,
      momentumRatio: 0.9,
      momentumVelocityRatio: 0.9,
    },

    // Let users scroll horizontally with wheel/trackpad
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
    },

    // Autoplay that moves left → right
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true, // ✅ makes it move L → R
    },
    speed: 9000, // larger = slower continuous drift

    // Optional: keeps it smooth when touching/draggng
    watchSlidesProgress: true,
  });
}

function destroyProjectSwiper() {
  if (projectSwiper) {
    projectSwiper.destroy(true, true);
    projectSwiper = null;
  }
}






