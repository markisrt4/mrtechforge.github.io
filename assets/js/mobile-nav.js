document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".forge-nav");
  const toggleBtn = document.querySelector(".nav-toggle-btn");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  /* ---------------------------------------------
     MOBILE HAMBURGER TOGGLE
  --------------------------------------------- */
  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggleBtn.classList.toggle("open", isOpen);
    });
  }

  /* ---------------------------------------------
     MOBILE ACCORDION — SERVICES SUBMENU
  --------------------------------------------- */
  dropdownParents.forEach((parent) => {
    parent.addEventListener("click", (e) => {
      // Desktop shouldn't toggle accordion
      if (window.innerWidth > 760) return;

      e.preventDefault();
      const content = parent.nextElementSibling;

      parent.classList.toggle("active");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  /* ---------------------------------------------
     RESET MOBILE STATE ON DESKTOP RESIZE
  --------------------------------------------- */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      nav.classList.remove("open");
      toggleBtn?.classList.remove("open");

      dropdownParents.forEach((parent) => parent.classList.remove("active"));
      document
        .querySelectorAll(".dropdown-content")
        .forEach((c) => (c.style.maxHeight = null));
    }
  });
});