// Scroll-aware navbar (backdrop blur), custom mobile slide-out panel,
// and the floating "Let's Work Together" CTA visibility.
(function () {
  const nav = document.getElementById("mainNav");
  const toggler = document.getElementById("navToggler");
  const panel = document.getElementById("navPanel");
  const backdrop = document.getElementById("navBackdrop");
  const floatingCta = document.getElementById("floatingCta");
  const heroSection = document.getElementById("hom");

  function updateScrollState() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("is-scrolled", y > 12);
    if (floatingCta) {
      const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 400;
      floatingCta.classList.toggle("is-visible", y > heroBottom * 0.6);
    }
  }
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  function openPanel() {
    if (!panel || !backdrop || !toggler) return;
    panel.classList.add("is-open");
    backdrop.classList.add("is-open");
    toggler.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closePanel() {
    if (!panel || !backdrop || !toggler) return;
    panel.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    toggler.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (toggler) {
    toggler.addEventListener("click", function () {
      const isOpen = panel.classList.contains("is-open");
      if (isOpen) closePanel(); else openPanel();
    });
  }

  if (backdrop) backdrop.addEventListener("click", closePanel);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePanel();
  });

  document.querySelectorAll(".nav-link, .nav-panel-cta").forEach(function (link) {
    link.addEventListener("click", closePanel);
  });

  // Light/dark theme toggle. Initial theme is already applied by the
  // inline script in <head> (before first paint); this just handles the
  // click and keeps it in sync everywhere (desktop + mobile buttons).
  const themeMetaColor = { dark: "#0b0c0e", light: "#f7f8f4" };
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeColorMeta) themeColorMeta.setAttribute("content", themeMetaColor[theme]);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  }

  document.querySelectorAll("#themeToggle, #themeToggleMobile").forEach(function (btn) {
    btn.addEventListener("click", toggleTheme);
  });

  // Sync theme-color meta with whatever the inline head script already applied.
  const initialTheme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  if (themeColorMeta) themeColorMeta.setAttribute("content", themeMetaColor[initialTheme]);
})();
