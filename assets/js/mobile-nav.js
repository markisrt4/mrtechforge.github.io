document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");
  const dropdownParent = document.querySelector(".dropdown-parent");
  const dropdownContent = document.querySelector(".dropdown-content");

  /* BURGER TOGGLE */
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
  });

  /* MOBILE SUBMENU TOGGLE */
  dropdownParent.addEventListener("click", (e) => {
    if (window.innerWidth > 760) return; // desktop hover handles it
    dropdownContent.classList.toggle("open");
    dropdownParent.classList.toggle("active");
  });
});