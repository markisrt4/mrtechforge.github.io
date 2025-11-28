// ==========================================================
// M.R. TECHFORGE — NAVIGATION JS (Forge Ultra v12 MAX)
// • Mobile hamburger toggle
// • Services submenu toggle
// • Hammer + spark + header pulse triggers
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
    const header        = document.querySelector(".forge-header");
    const hamburger     = document.querySelector(".forge-hamburger");
    const mobileMenu    = document.querySelector(".forge-mobile-menu");
    const servicesToggle = document.querySelector(".services-toggle");
    const servicesSubmenu = document.querySelector(".services-submenu");

    if (!hamburger || !mobileMenu || !header) {
        return; // bail if critical pieces missing
    }

    // ---------------------------
    // Mobile Menu Toggle
    // ---------------------------
    hamburger.addEventListener("click", () => {
        const isOpening = !mobileMenu.classList.contains("open");

        hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("open");

        // Trigger forge "burst" + hammer swing when opening
        if (isOpening) {
            header.classList.add("is-forging");

            // retrigger header pulse animation cleanly
            header.classList.remove("forge-pulse");
            // force reflow so animation restarts
            void header.offsetWidth;
            header.classList.add("forge-pulse");

            // Remove hammer + burst class after animation
            setTimeout(() => {
                header.classList.remove("is-forging");
                header.classList.remove("forge-pulse");
            }, 750);
        }
    });

    // ---------------------------
    // Services Dropdown (Mobile)
    // ---------------------------
    if (servicesToggle && servicesSubmenu) {
        servicesToggle.addEventListener("click", (e) => {
            // on desktop we mostly use hover; keep click for mobile
            if (window.innerWidth < 850) {
                e.preventDefault();
                servicesToggle.classList.toggle("open");
                servicesSubmenu.classList.toggle("open");
            }
        });

        // Optional: close submenu when viewport resized to desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 850) {
                servicesToggle.classList.remove("open");
                servicesSubmenu.classList.remove("open");
            }
        });
    }
});