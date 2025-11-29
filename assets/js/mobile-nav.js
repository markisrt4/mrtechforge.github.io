// =====================================================
//  M.R. TECHFORGE — MOBILE NAVIGATION (v13.0 SAFE)
//  Multi-dropdown accordion + idle animations
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  if (!burgerBtn || !nav) return;

  // ---------------------------------------------------
  // BURGER TOGGLE
  // ---------------------------------------------------
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    nav.classList.toggle("open");

    // Close ALL open dropdowns when closing the menu
    if (!nav.classList.contains("open")) {
      dropdownParents.forEach(parent => {
        parent.classList.remove("active");

        const submenu = parent.nextElementSibling;
        if (submenu && submenu.classList.contains("dropdown-content")) {
          submenu.classList.remove("open");
        }
      });
    }
  });

  // ---------------------------------------------------
  // MULTI-DROPDOWN ACCORDION (MOBILE ONLY)
  // ---------------------------------------------------
  dropdownParents.forEach(parent => {
    const submenu = parent.nextElementSibling;
    if (!submenu) return;

    parent.addEventListener("click", () => {
      if (window.innerWidth > 760) return; // desktop behavior not touched

      const isOpen = submenu.classList.contains("open");

      // Close all other dropdowns first
      dropdownParents.forEach(otherParent => {
        const otherSub = otherParent.nextElementSibling;
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