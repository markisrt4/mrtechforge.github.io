// =====================================================
//  M.R. TECHFORGE — MOBILE NAVIGATION (v14.0)
//  Desktop hover + Mobile accordion + idle animations
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  if (!burgerBtn || !nav) return;

  // Helper: get the mobile submenu for a dropdown parent
  function getMobileSubmenu(parent) {
    const navItem = parent.closest(".nav-item");
    return navItem ? navItem.querySelector(".mobile-submenu") : null;
  }

  // ---------------------------------------------------
  // BURGER TOGGLE
  // ---------------------------------------------------
  burgerBtn.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("open");

    burgerBtn.classList.toggle("open", willOpen);
    nav.classList.toggle("open", willOpen);

    // When closing, collapse all mobile submenus
    if (!willOpen) {
      dropdownParents.forEach(parent => {
        parent.classList.remove("active");
        const submenu = getMobileSubmenu(parent);
        if (submenu) submenu.classList.remove("open");
      });
    }
  });

  // ---------------------------------------------------
  // MOBILE DROPDOWN ACCORDION
  // ---------------------------------------------------
  dropdownParents.forEach(parent => {
    const submenu = getMobileSubmenu(parent);
    if (!submenu) return;

    parent.addEventListener("click", () => {
      // Desktop uses CSS hover; ignore clicks there
      if (window.innerWidth > 760) return;

      const isOpen = submenu.classList.contains("open");

      // Close all other dropdowns
      dropdownParents.forEach(otherParent => {
        if (otherParent === parent) return;
        const otherSub = getMobileSubmenu(otherParent);
        if (otherSub) {
          otherParent.classList.remove("active");
          otherSub.classList.remove("open");
        }
      });

      // Toggle this one
      parent.classList.toggle("active", !isOpen);
      submenu.classList.toggle("open", !isOpen);
    });
  });

  // ---------------------------------------------------
  // IDLE ANIMATION ENGINE
  // ---------------------------------------------------
  function triggerIdleAnimation() {
    // Don't idle-animate while menu is open
    if (!burgerBtn || burgerBtn.classList.contains("open")) {
      setTimeout(triggerIdleAnimation, 4000);
      return;
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