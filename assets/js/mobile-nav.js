/* ============================================================
   M.R. TechForge — Mobile Navigation Logic (Final v10)
   Stable, conflict-free, fully synced with nav.scss v10
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------
     1. HAMBURGER TOGGLE
  ------------------------------------------------------------ */
  const navToggleBtn = document.querySelector(".nav-toggle-btn");
  const navMenu      = document.querySelector(".forge-nav");

  if (navToggleBtn) {
    navToggleBtn.addEventListener("click", () => {
      navToggleBtn.classList.toggle("open");
      navMenu.classList.toggle("open");
    });
  }

  /* ------------------------------------------------------------
     2. SERVICES SUBMENU TOGGLE (Mobile Only)
  ------------------------------------------------------------ */
  const dropdownParent = document.querySelector(".dropdown-parent");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownParent && dropdownContent) {

    // Mobile only behavior
    const mobileCheck = () => window.innerWidth <= 760;

    dropdownParent.addEventListener("click", (e) => {
      if (!mobileCheck()) return;  // ignore on desktop

      e.preventDefault();          // prevent navigation
      e.stopPropagation();

      dropdownParent.classList.toggle("active");
      dropdownContent.classList.toggle("open");
    });
  }

  /* ------------------------------------------------------------
     3. CLOSE MENU WHEN CHOOSING A LINK (Mobile Only)
  ------------------------------------------------------------ */
  const navLinks = document.querySelectorAll(".forge-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth > 760) return; // desktop

      navToggleBtn.classList.remove("open");
      navMenu.classList.remove("open");

      // close submenu too
      if (dropdownContent) {
        dropdownParent.classList.remove("active");
        dropdownContent.classList.remove("open");
      }
    });
  });

});