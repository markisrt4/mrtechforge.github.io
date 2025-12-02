// accordions.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".forge-accordion .accordion-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      if (!panel) return;

      // Toggle active state on button (for arrow rotation, styling, etc.)
      btn.classList.toggle("active");

      // If you're using a CSS class for open/closed, toggle it:
      panel.classList.toggle("open");

      // If you want smooth height animation:
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});