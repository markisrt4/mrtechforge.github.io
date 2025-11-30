// =====================================================
//  M.R. TECHFORGE — MOBILE NAVIGATION (v13.2 SAFE)
//  Multi-dropdown accordion + idle animations
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  if (!burgerBtn || !nav) return;

  // Helper: always get the *mobile* submenu for a parent
  function getMobileSubmenu(parent) {
    const navItem = parent.closest(".nav-item");
    if (!navItem) return null;
    return navItem.querySelector(".mobile-submenu");
  }

  // ---------------------------------------------------
  // BURGER TOGGLE
  // ---------------------------------------------------
  burgerBtn.addEventListener("click", () => {
    const isOpening = !nav.classList.contains("open");

    burgerBtn.classList.toggle("open", isOpening);
    nav.classList.toggle("open", isOpening);

    // Explicitly control height on mobile so it MUST appear
    if (window.innerWidth <= 760) {
      if (isOpening) {
        // scrollHeight = full height needed for all children
        nav.style.maxHeight = nav.scrollHeight + "px";
      } else {
        nav.style.maxHeight = "0px";
      }
    } else {
      // Let desktop CSS handle things
      nav.style.maxHeight = "";
    }

    // Close ALL dropdowns when closing the menu
    if (!isOpening) {
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
      // Desktop uses hover; don’t interfere
      if (window.innerWidth > 760) return;

      const isOpen = submenu.classList.contains("open");

      // Close all other dropdowns first
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

      // Adjust nav height to fit new content
      if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";
      }
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