// assets/js/mobile-nav.js
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".forge-nav");
  const dropdownParent = document.querySelector(".dropdown-parent");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (!burger || !nav) {
    return;
  }

  // Toggle main mobile nav
  burger.addEventListener("click", () => {
    const nowOpen = !burger.classList.contains("open");

    burger.classList.toggle("open", nowOpen);
    nav.classList.toggle("open", nowOpen);

    // If closing the nav, also close the Services submenu
    if (!nowOpen && dropdownContent && dropdownParent) {
      dropdownContent.classList.remove("open");
      dropdownParent.classList.remove("active");
    }
  });

  // Mobile-only toggle for Services submenu
  if (dropdownParent && dropdownContent) {
    dropdownParent.addEventListener("click", (evt) => {
      // Only intercept click on mobile
      if (window.matchMedia("(max-width: 760px)").matches) {
        evt.preventDefault();

        const isOpen = dropdownContent.classList.contains("open");
        dropdownContent.classList.toggle("open", !isOpen);
        dropdownParent.classList.toggle("active", !isOpen);
      }
    });
  }

  // On resize back to desktop, reset all mobile state
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      burger.classList.remove("open");
      nav.classList.remove("open");
      if (dropdownContent && dropdownParent) {
        dropdownContent.classList.remove("open");
        dropdownParent.classList.remove("active");
      }
    }
  });
});