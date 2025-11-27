document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mobileNav");
  const openBtn = document.getElementById("navToggle");
  const closeBtn = document.getElementById("navClose");

  // OPEN NAV
  openBtn?.addEventListener("click", () => {
    nav.classList.add("open");
  });

  // CLOSE NAV
  closeBtn?.addEventListener("click", () => {
    nav.classList.remove("open");
  });

  // Accordion parents
  document.querySelectorAll(".nav-parent").forEach((btn) => {
    const target = document.getElementById(btn.dataset.target);

    btn.addEventListener("click", () => {
      const isOpen = target.classList.contains("open");

      // Close all other open menus
      document.querySelectorAll(".mobile-submenu").forEach((m) => {
        if (m !== target) {
          m.classList.remove("open");
        }
      });
      document.querySelectorAll(".nav-parent").forEach((p) => {
        if (p !== btn) {
          p.classList.remove("open");
        }
      });

      // Toggle this one
      btn.classList.toggle("open");
      target.classList.toggle("open");
    });
  });
});