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


document.addEventListener("DOMContentLoaded", () => {
  const segments = document.querySelectorAll(".hero-line-progress");
  const heroBg1 = document.querySelector(".hero-bg-image-1");
  const heroBg2 = document.querySelector(".hero-bg-image-2");
  if (!segments.length || !heroBg1 || !heroBg2) return;

  let currentProject = 0;
  let currentImage = 0;

  const lineDuration = 12500;
  const imageDuration = 2500;

  let imageLoop = null;

  let activeLayer = 0;

  function showHeroImage(src) {
    const incomingLayer = activeLayer === 0 ? heroBg2 : heroBg1;
    const outgoingLayer = activeLayer === 0 ? heroBg1 : heroBg2;

    incomingLayer.style.backgroundImage = `url("${src}")`;
    incomingLayer.classList.add("is-visible");
    outgoingLayer.classList.remove("is-visible");

    activeLayer = activeLayer === 0 ? 1 : 0;
  }

  function startImageLoop(projectIndex) {
    clearInterval(imageLoop);

    const project = PROJECTS[projectIndex];
    if (!project || !project.images || !project.images.length) return;

    currentImage = 0;

    // fade into first image of next project
    showHeroImage(project.images[currentImage]);

    imageLoop = setInterval(() => {
      currentImage = (currentImage + 1) % project.images.length;
      showHeroImage(project.images[currentImage]);
    }, imageDuration);
  }

  function runNext() {
    if (currentProject >= segments.length) {
      currentProject = 0;
      segments.forEach(segment => {
        segment.style.transition = "none";
        segment.style.width = "0%";
      });
    }

    const active = segments[currentProject];

    active.style.transition = "none";
    active.style.width = "0%";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        startImageLoop(currentProject);

        active.style.transition = `width ${lineDuration}ms linear`;
        active.style.width = "100%";
      });
    });

    setTimeout(() => {
      currentProject++;
      runNext();
    }, lineDuration);
  }

  runNext();
});


// Swiper vertical fullpage with wheel/touch, no arrows/pagination
const verticalSwiperEl = document.querySelector('.my-vertical-swiper');

if (verticalSwiperEl) {
  const verticalSwiper = new Swiper(verticalSwiperEl, {
    direction: 'vertical',
    slidesPerView: 1,
    speed: 700,
    allowTouchMove: true,
    simulateTouch: true,
    threshold: 8,
    longSwipesMs: 100,
    resistanceRatio: 0.85,

    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: true,
      sensitivity: 1.2
    },

    keyboard: { enabled: false },
    pagination: { el: null },
    navigation: { enabled: false },
  });

  const aboutBtn = document.querySelector('.above-the-fold .about');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      verticalSwiper.slideNext();
    });
  }
}


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
  // const PROJECTS = [
  //   { title: "PEBLZ", image: "public/assets/PEBLZ.png", icon: "fa-light fa-arrow-up-right",
  //   images: [
  //     "public/assets/projects/PEBLZ/project-img-1.png",
  //     "public/assets/projects/PEBLZ/project-img-2.png",
  //     "public/assets/projects/PEBLZ/project-img-3.png",
  //     "public/assets/projects/PEBLZ/project-img-4.png",
  //     "public/assets/projects/PEBLZ/project-img-5.png",
  //     "public/assets/projects/PEBLZ/project-img-6.png",
  //     "public/assets/projects/PEBLZ/project-img-7.png",
  //     "public/assets/projects/PEBLZ/project-img-8.png",
  //     "public/assets/projects/PEBLZ/project-img-9.png",
  //     "public/assets/projects/PEBLZ/project-img-10.png",
  //     "public/assets/projects/PEBLZ/project-img-11.png",
  //   ],},
  //   { title: "Creator Dao", image: "public/assets/CRDAO.png", icon: "fa-light fa-arrow-up-right",
  //   images: [
  //     "public/assets/projects/CRDAO/project-img-1.png",
  //     "public/assets/projects/CRDAO/project-img-2.png",
  //     "public/assets/projects/CRDAO/project-img-3.png",
  //     "public/assets/projects/CRDAO/project-img-4.png",
  //     "public/assets/projects/CRDAO/project-img-5.png",
  //     "public/assets/projects/CRDAO/project-img-6.png",
  //     "public/assets/projects/CRDAO/project-img-7.png",
  //     "public/assets/projects/CRDAO/project-img-8.png",
  //     "public/assets/projects/CRDAO/project-img-9.png",
  //     "public/assets/projects/CRDAO/project-img-10.png",
  //     "public/assets/projects/CRDAO/project-img-11.png",
  //   ], },
  //   { title: "MAUDE", image: "public/assets/MAUDE.png", icon: "fa-light fa-arrow-up-right",
  //   images: [
  //     "public/assets/projects/MAUDE/project-img-1.png",
  //     "public/assets/projects/MAUDE/project-img-2.png",
  //     "public/assets/projects/MAUDE/project-img-3.png",
  //     "public/assets/projects/MAUDE/project-img-4.png",
  //     "public/assets/projects/MAUDE/project-img-5.png",
  //     "public/assets/projects/MAUDE/project-img-6.png",
  //     "public/assets/projects/MAUDE/project-img-7.png",
  //     "public/assets/projects/MAUDE/project-img-8.png",
  //     "public/assets/projects/MAUDE/project-img-9.png",
  //     "public/assets/projects/MAUDE/project-img-10.png",
  //     "public/assets/projects/MAUDE/project-img-11.png",
  //   ], },
  //   { title: "Cheeki", image: "public/assets/CHEEKI.png", icon: "fa-light fa-arrow-up-right",
  //   images: [
  //     "public/assets/projects/CHEEKI/project-img-1.png",
  //     "public/assets/projects/CHEEKI/project-img-2.png",
  //     "public/assets/projects/CHEEKI/project-img-3.png",
  //     "public/assets/projects/CHEEKI/project-img-4.png",
  //     "public/assets/projects/CHEEKI/project-img-5.png",
  //     "public/assets/projects/CHEEKI/project-img-6.png",
  //     "public/assets/projects/CHEEKI/project-img-7.png",
  //     "public/assets/projects/CHEEKI/project-img-8.png",
  //     "public/assets/projects/CHEEKI/project-img-9.png",
  //     "public/assets/projects/CHEEKI/project-img-10.png",
  //     "public/assets/projects/CHEEKI/project-img-11.png",
  //   ], },
  //   { title: "DataCrest", image: "public/assets/DATACREST.png", icon: "fa-light fa-arrow-up-right",
  //   images: [
  //     "public/assets/projects/DATACREST/project-img-1.png",
  //     "public/assets/projects/DATACREST/project-img-2.png",
  //     "public/assets/projects/DATACREST/project-img-3.png",
  //     "public/assets/projects/DATACREST/project-img-4.png",
  //     "public/assets/projects/DATACREST/project-img-5.png",
  //     "public/assets/projects/DATACREST/project-img-6.png",
  //     "public/assets/projects/DATACREST/project-img-7.png",
  //     "public/assets/projects/DATACREST/project-img-8.png",
  //     "public/assets/projects/DATACREST/project-img-9.png",
  //     "public/assets/projects/DATACREST/project-img-10.png",
  //     "public/assets/projects/DATACREST/project-img-11.png",
  //   ], },
  //   { title: "ACL", image: "public/assets/ACL.png", icon: "fa-light fa-arrow-up-right",
  //   images: [
  //     "public/assets/projects/ACL/project-img-1.png",
  //     "public/assets/projects/ACL/project-img-2.png",
  //     "public/assets/projects/ACL/project-img-3.png",
  //     "public/assets/projects/ACL/project-img-4.png",
  //     "public/assets/projects/ACL/project-img-5.png",
  //     "public/assets/projects/ACL/project-img-6.png",
  //     "public/assets/projects/ACL/project-img-7.png",
  //     "public/assets/projects/ACL/project-img-8.png",
  //     "public/assets/projects/ACL/project-img-9.png",
  //   ], },
  //   { title: "LOGO_FOLIO_1", image: "public/assets/LOGO_FOLIO_1.png", icon: "fa-light fa-arrow-up-right",
  //   images: [
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-1.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-2.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-3.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-4.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-5.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-6.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-7.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-8.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-9.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-10.png",
  //     "public/assets/projects/LOGO_FOLIO_1/project-img-11.png",
  //   ], },
  // ];

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
      currentIndex = index;

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
      const slugMap = {
        "PEBLZ": "peblz",
        "ACL": "acl",
        "Cheeki": "cheeki",
        "Creator Dao": "crdao",
        "DataCrest": "datacrest",
        "LOGO_FOLIO_1": "logo-folio",
        "MAUDE": "maude",
      };

      const project = PROJECTS[currentIndex];
      if (!project) return;

      const slug = slugMap[project.title];
      if (!slug) return;

      window.location.href = `project-page.html?project=${slug}`;
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
    // card.style.cursor = "pointer";
    card.classList.add("linked")
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

    const cursor = document.querySelector(".cursor-circle");
    card.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
    });

    card.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
    });

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
    mount.addEventListener("mouseenter", () => {
      paused = true;
    });

    mount.addEventListener("mouseleave", () => {
      paused = false;
    });

    function createMapTile() {
      // Tile wrapper (NO overflow hidden — we don't want tile clipping)
      const tile = document.createElement("div");
      tile.style.position = "absolute";
      tile.style.top = "0";
      tile.style.left = "0";
      tile.style.height = "100%";
      tile.style.willChange = "transform";
      tile.style.pointerEvents = "auto";

      // Inner layer: fixed to circle size, then scaled
      const inner = document.createElement("div");
      inner.style.position = "absolute";
      inner.style.top = "50%";
      inner.style.left = "50%";
      inner.style.transformOrigin = "center center";
      inner.style.willChange = "transform";

      inner.innerHTML = svgText;

      const svg = inner.querySelector("svg");
      svg.addEventListener("click", (e) => {
      const country = e.target.id;

      if (country === "US") console.log("Todd Hogan");
      if (country === "PK") console.log("Victor, Peter, Ikenna, Ada");
      if (country === "NG") console.log("Ahsan, Ali, Alveena, Ameen");
    });
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
    let paused = false;
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

      if (!paused) {
        x -= SPEED * dt;
      }

      // Wrap endlessly (no drift, no stopping)
      // Keep x in [-tileW, 0)
      x = x % tileW;
      if (x > 0) x -= tileW;

      render();
      requestAnimationFrame(tick);
    }

    layout();
    mount.addEventListener("mouseenter", () => {
      paused = true;
    });

    mount.addEventListener("mouseleave", () => {
      paused = false;
    });
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





// Project Page 

const testimonialSwiperEl = document.querySelector('.testimonial-swiper');

if (testimonialSwiperEl) {
  if (testimonialSwiperEl.swiper) {
    testimonialSwiperEl.swiper.destroy(true, true);
  }

  new Swiper(testimonialSwiperEl, {
    slidesPerView: "auto",
    spaceBetween: 12,
    grabCursor: true,
    simulateTouch: true,
    allowTouchMove: true,
    touchRatio: 1,
    touchAngle: 45,
    freeMode: true,
  });
}

const impactSwiperEl = document.querySelector('.impact-swiper');

if (impactSwiperEl) {
  if (impactSwiperEl.swiper) {
    impactSwiperEl.swiper.destroy(true, true);
  }

  new Swiper(impactSwiperEl, {
    slidesPerView: "auto",
    spaceBetween: 12,
    grabCursor: true,
    simulateTouch: true,
    allowTouchMove: true,
    touchRatio: 1,
    touchAngle: 45,
    freeMode: true,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const projectSlug = params.get("project");

  if (!projectSlug || !PROJECT_PAGE_DATA[projectSlug]) return;

  const project = PROJECT_PAGE_DATA[projectSlug];
  const projectName = project.projectName.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]*>/g, "").trim();
  document.title = `Studo-G4G - ${projectName}`;
  const heroImage = document.getElementById("project-hero-image");
  const pageTitle = document.getElementById("project-page-title");
  const introText = document.getElementById("project-intro-text");
  const section3Image = document.getElementById("project-section-3-image");
  const section4Text = document.getElementById("project-section-4-text");
  const section5Image = document.getElementById("project-section-5-image");
  const section5Text = document.getElementById("project-section-5-text");
  const section6Image1 = document.getElementById("project-section-6-image-1");
  const section6Image2 = document.getElementById("project-section-6-image-2");
  const section6Image3 = document.getElementById("project-section-6-image-3");
  const section7Image1 = document.getElementById("project-section-7-image-1");
  const section7Image2 = document.getElementById("project-section-7-image-2");
  const testimonialSection = document.querySelector(".testimonial-section");
  const testimonialWrapper = document.getElementById("testimonial-wrapper");
  const impactSection = document.querySelector(".impact-section");
  const impactWrapper = document.getElementById("impact-wrapper");

  if (heroImage) {
    heroImage.src = project.heroImage;
    heroImage.alt = projectSlug;
  }

  if (pageTitle) {
    pageTitle.innerHTML = project.pageTitle;
  }

  if (introText) {
    introText.textContent = project.introText;
  }

  if (section3Image) {
    section3Image.src = project.section3Image;
    section3Image.alt = projectSlug;
  }

  if (section4Text) {
    section4Text.textContent = project.section4Text;
  }

  if (section5Image) {
    section5Image.src = project.section5Image;
    section5Image.alt = projectSlug;
  }

  if (section5Text) {
    section5Text.textContent = project.section5Text;
  }

  if (section6Image1) {
    section6Image1.src = project.section6Image1;
    section6Image1.alt = projectSlug;
  }

  if (section6Image2) {
    section6Image2.src = project.section6Image2;
    section6Image2.alt = projectSlug;
  }

  if (section6Image3) {
    section6Image3.src = project.section6Image3;
    section6Image3.alt = projectSlug;
  }

  if (section7Image1) {
    section7Image1.src = project.section7Image1;
    section7Image1.alt = projectSlug;
  }

  if (section7Image2) {
    section7Image2.src = project.section7Image2;
    section7Image2.alt = projectSlug;
  }

  if (testimonialSection && testimonialWrapper) {
    const testimonials = project.testimonials || [];

    if (!testimonials.length) {
      testimonialSection.style.display = "none";
    } else {
      testimonialWrapper.innerHTML = testimonials.map(item => `
        <div class="swiper-slide">
          <div class="testimonial-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </div>
      `).join("");
    }
  }

  if (impactSection && impactWrapper) {
    const impacts = project.impacts || [];

    if (!impacts.length) {
      impactSection.style.display = "none";
    } else {
      impactWrapper.innerHTML = impacts.map(item => `
        <div class="swiper-slide">
          <div class="impact-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </div>
      `).join("");
    }
  }
});

