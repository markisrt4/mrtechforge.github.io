// =====================================================
//  M.R. TECHFORGE — MOBILE NAVIGATION (v12.1 FINAL)
//  SVG burger + hammer FX + stacked Services submenu
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");
  const serviceParent = document.querySelector(".dropdown-parent");
  const serviceMenu = document.querySelector(".dropdown-content");

  if (!burgerBtn || !nav) {
    return;
  }

  // Toggle mobile nav
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // Services accordion on mobile only
  if (serviceParent && serviceMenu) {
    serviceParent.addEventListener("click", () => {
      if (window.innerWidth > 760) {
        return; // desktop uses hover
      }
      serviceParent.classList.toggle("active");
      serviceMenu.classList.toggle("open");
    });
  }
});