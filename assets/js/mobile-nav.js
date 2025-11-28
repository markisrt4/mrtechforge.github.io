// ==========================================================
// M.R. TECHFORGE — NAVIGATION JS (Forge Ultra v12 MAX)
// CSS Hammer Edition
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".forge-header");
    const hamburger = document.querySelector(".forge-hamburger");
    const mobileMenu = document.querySelector(".forge-mobile-menu");

    const servicesToggle = document.querySelector(".services-toggle");
    const servicesSubmenu = document.querySelector(".services-submenu");

    // --------------------------
    // HAMBURGER + MOBILE MENU
    // --------------------------
    hamburger.addEventListener("click", () => {

        const opening = !mobileMenu.classList.contains("open");

        hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("open");

        if (opening) {
            header.classList.add("is-forging");

            // pulse restart
            header.classList.remove("forge-pulse");
            void header.offsetWidth;
            header.classList.add("forge-pulse");

            // cleanup
            setTimeout(() => {
                header.classList.remove("is-forging");
                header.classList.remove("forge-pulse");
            }, 750);
        }
    });

    // --------------------------
    // SERVICES DROPDOWN (MOBILE)
    // --------------------------
    if (servicesToggle) {
        servicesToggle.addEventListener("click", (e) => {
            if (window.innerWidth < 850) {
                e.preventDefault();
                servicesToggle.classList.toggle("open");
                servicesSubmenu.classList.toggle("open");
            }
        });

        // Auto-close on desktop switch
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 850) {
                servicesToggle.classList.remove("open");
                servicesSubmenu.classList.remove("open");
            }
        });
    }
});