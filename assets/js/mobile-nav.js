// =====================================================
//  M.R. TECHFORGE — MOBILE NAVIGATION (v12.3)
//  Adds idle forge animations (pulse + sparks)
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");
  const serviceParent = document.querySelector(".dropdown-parent");
  const serviceMenu = document.querySelector(".dropdown-content");

  if (!burgerBtn || !nav) return;

  // ---------------------------------------------------
  // MAIN BURGER TOGGLE
  // ---------------------------------------------------
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // ---------------------------------------------------
  // SERVICES ACCORDION (mobile only)
  // ---------------------------------------------------
  if (serviceParent && serviceMenu) {
    serviceParent.addEventListener("click", () => {
      if (window.innerWidth > 760) return;
      serviceParent.classList.toggle("active");
      serviceMenu.classList.toggle("open");
    });
  }

  // ---------------------------------------------------
  // IDLE ANIMATION ENGINE
  // ---------------------------------------------------
  function triggerIdleAnimation() {
    if (burgerBtn.classList.contains("open")) {
      return setTimeout(triggerIdleAnimation, 4000);
    }

    // pick a random idle effect
    const effects = ["idle-pulse", "idle-flicker", "idle-spark"];
    const effect = effects[Math.floor(Math.random() * effects.length)];

    burgerBtn.classList.add(effect);

    // remove the effect after animation finishes
    setTimeout(() => burgerBtn.classList.remove(effect), 1600);

    // schedule next random idle
    const delay = 3000 + Math.random() * 4000; // 3–7 seconds
    setTimeout(triggerIdleAnimation, delay);
  }

  // start idle loop
  setTimeout(triggerIdleAnimation, 3500);
});