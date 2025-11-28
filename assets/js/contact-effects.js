// assets/js/contact-effects.js
// Handles display modes + copy template on contact page

document.addEventListener("DOMContentLoaded", () => {
  const modeButtons = document.querySelectorAll(".terminal-mode-btn");
  const terminals = document.querySelectorAll(".forge-terminal[data-terminal]");
  const copyBtn = document.getElementById("copy-template");
  const templateCode = document.getElementById("email-template-code");

  // If not on contact page, bail quietly
  if (!document.body.classList.contains("contact") &&
      !document.querySelector(".forge-contact-page")) {
    return;
  }

  // ----- Mode switching -----
  const modes = ["scanline", "grid", "radar", "clean"];

  function applyMode(mode) {
    terminals.forEach((term) => {
      term.classList.remove(
        "crt-scanline",
        "crt-grid",
        "crt-radar",
        "crt-clean"
      );
      term.classList.add(`crt-${mode}`);
    });
  }

  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode");
      if (!modes.includes(mode)) return;

      modeButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      applyMode(mode);
    });
  });

  // Set initial mode to whatever button is active
  const active = document.querySelector(".terminal-mode-btn.is-active");
  if (active) {
    const mode = active.getAttribute("data-mode");
    if (modes.includes(mode)) {
      applyMode(mode);
    }
  }

  // ----- Copy email template -----
  if (copyBtn && templateCode) {
    copyBtn.addEventListener("click", async () => {
      const text = templateCode.innerText || templateCode.textContent || "";

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text.trim());
        } else {
          const ta = document.createElement("textarea");
          ta.value = text.trim();
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        copyBtn.innerText = "Copied!";
        setTimeout(() => {
          copyBtn.innerText = "Copy Template";
        }, 1500);
      } catch (e) {
        console.error("Clipboard copy failed", e);
      }
    });
  }
});