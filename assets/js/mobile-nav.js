/* ============================================================
   M.R. TECHFORGE — Navigation JS (v11.2 FINAL)
   - Smooth mobile hamburger
   - Hammer + sparks animation
   - Dropdown accordions (mobile only)
   - Zero drift, zero double-toggle issues
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------------
     ELEMENTS
  ----------------------------------------------- */
  const navToggleBtn = document.querySelector(".nav-toggle-btn");
  const forgeNav = document.querySelector(".forge-nav");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  if (!navToggleBtn || !forgeNav) return;

  /* -----------------------------------------------
     HAMBURGER TOGGLE
  ----------------------------------------------- */
  navToggleBtn.addEventListener("click", () => {
    const isOpen = navToggleBtn.classList.toggle("open");
    forgeNav.classList.toggle("open", isOpen);

    // Smooth opening: allows max-height transition
    if (isOpen) {
      forgeNav.style.maxHeight = forgeNav.scrollHeight + "px";
    } else {
      forgeNav.style.maxHeight = "0px";
    }
  });

  /* -------------------------------------------------
     MOBILE-ONLY DROPDOWN BEHAVIOR (Services)
     Prevents desktop hover logic from interfering
  ------------------------------------------------- */
  const enableMobileDropdowns = () => {
    // Only operate if screen width ≤ 760px
    if (window.innerWidth > 760) return;

    dropdownParents.forEach((parent) => {
      const dropdownContainer = parent.closest(".nav-item.dropdown");
      const dropdownContent = dropdownContainer.querySelector(".dropdown-content");

      parent.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isExpanded = dropdownContent.classList.toggle("open");
        parent.classList.toggle("active", isExpanded);

        // Stretch smoothly
        dropdownContent.style.maxHeight = isExpanded
          ? dropdownContent.scrollHeight + "px"
          : "0px";
      });
    });
  };

  enableMobileDropdowns();

  /* -------------------------------------------------
     Recalculate dropdown sizes on resize
  ------------------------------------------------- */
  window.addEventListener("resize", () => {
    // Close nav completely when switching to desktop mode
    if (window.innerWidth > 760) {
      forgeNav.classList.remove("open");
      navToggleBtn.classList.remove("open");
      forgeNav.style.maxHeight = "";
    }
  });
});