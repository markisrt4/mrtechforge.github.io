// =====================================================
//  M.R. TECHFORGE — MOBILE NAVIGATION (v13.3 CLEAN)
//  Desktop hover + mobile accordion + idle animations
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  if (!burgerBtn || !nav) return;

  // Helper: always get the MOBILE submenu for a parent
  function getMobileSubmenu(parent) {
    const navItem = parent.closest(".nav-item");
    if (!navItem) return null;
    return navItem.querySelector(".mobile-submenu");
  }

  // ---------------------------------------------------
  // BURGER TOGGLE (just toggles .open on nav + button)
  // ---------------------------------------------------
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    nav.classList.toggle("open");

    // When closing menu, collapse all mobile submenus
    if (!nav.classList.contains("open")) {
      dropdownParents.forEach(parent => {
        parent.classList.remove("active");
        const submenu = getMobileSubmenu(parent);
        if (submenu) {
          submenu.classList.remove("open");
        }
      });
    }
  });

  // ---------------------------------------------------
  // MULTI-DROPDOWN ACCORDION (MOBILE ONLY)
  // ---------------------------------------------------
  dropdownParents.forEach(parent => {
    const submenu = getMobileSubmenu(parent);
    if (!submenu) return;

    parent.addEventListener("click", () => {
      // On desktop, let CSS hover handle dropdowns
      if (window.innerWidth > 760) return;

      const isOpen = submenu.classList.contains("open");

      // Close all other dropdowns
      dropdownParents.forEach(otherParent => {
        const otherSub = getMobileSubmenu(otherParent);
        if (otherSub && otherSub !== submenu) {
          otherParent.classList.remove("active");
          otherSub.classList.remove("open");
        }
      });

      // Toggle the clicked one
      parent.classList.toggle("active", !isOpen);
      submenu.classList.toggle("open", !isOpen);
    });
  });

  // ---------------------------------------------------
  // IDLE ANIMATION ENGINE (unchanged)
  // ---------------------------------------------------
  function triggerIdleAnimation() {
    if (burgerBtn.classList.contains("open")) {
      return setTimeout(triggerIdleAnimation, 4000);
    }

    const effects = ["idle-pulse", "idle-flicker", "idle-spark"];
    const effect = effects[Math.floor(Math.random() * effects.length)];

    burgerBtn.classList.add(effect);
    setTimeout(() => burgerBtn.classList.remove(effect), 1600);

    const delay = 3000 + Math.random() * 4000;
    setTimeout(triggerIdleAnimation, delay);
  }

  setTimeout(triggerIdleAnimation, 3500);
});