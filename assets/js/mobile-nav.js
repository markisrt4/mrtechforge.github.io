document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  if (!toggleBtn || !nav) return;

  // Toggle menu
  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // Mobile dropdowns
  dropdownParents.forEach(parent => {
    parent.addEventListener("click", () => {
      const content = parent.nextElementSibling;

      parent.classList.toggle("active");
      content.classList.toggle("open");
    });
  });
});