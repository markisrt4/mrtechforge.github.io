document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");

  if (!burgerBtn || !nav) return;

  // ---------------------------------------------------
  // MAIN BURGER TOGGLE
  // ---------------------------------------------------
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // ---------------------------------------------------
  // MOBILE ACCORDION — supports unlimited dropdowns
  // ---------------------------------------------------
  const parents = document.querySelectorAll(".dropdown-parent");

  parents.forEach((parent) => {
    parent.addEventListener("click", () => {
      if (window.innerWidth > 760) return;

      const submenu = parent.nextElementSibling.nextElementSibling; // mobile-submenu

      // Close all other submenus
      document.querySelectorAll(".mobile-submenu").forEach((menu) => {
        if (menu !== submenu) menu.classList.remove("open");
      });

      // Toggle current
      submenu.classList.toggle("open");
    });
  });

  // ---------------------------------------------------
  //  IDLE HAMMER / SPARK ANIMATIONS (unchanged)
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