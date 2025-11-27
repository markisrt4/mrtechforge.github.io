document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     MOBILE MENU (hamburger toggle)
     ============================= */
  const menuBtn = document.querySelector("#nav-toggle");
  const nav = document.querySelector(".forge-nav");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    nav.classList.toggle("open");
  });

  /* =============================
     ACCORDION SUBMENU (Services)
     ============================= */
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  dropdownParents.forEach(parent => {
    parent.addEventListener("click", () => {

      const content = parent.nextElementSibling;

      // Close all open submenus except this one
      document.querySelectorAll(".dropdown-content.open").forEach(openMenu => {
        if (openMenu !== content) {
          openMenu.style.maxHeight = null;
          openMenu.classList.remove("open");
          openMenu.previousElementSibling.classList.remove("active");
        }
      });

      parent.classList.toggle("active");
      content.classList.toggle("open");

      if (content.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

});