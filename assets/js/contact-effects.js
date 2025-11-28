/* ===========================================================
   CONTACT PAGE INTERACTIVITY
   - CRT Mode Switching (Scanline / Grid / Radar / Clean)
   - Copy Email Template Button
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------------
     TERMINAL MODE SWITCHING
  --------------------------------------------- */
  const modeButtons = document.querySelectorAll(".terminal-mode-btn");
  const terminalPanels = document.querySelectorAll("[data-terminal]");

  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active highlight from all buttons
      modeButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const selected = btn.dataset.mode; // "scanline", "grid", "radar", "clean"

      terminalPanels.forEach((panel) => {
        panel.classList.remove("crt-scanline", "crt-grid", "crt-radar", "crt-clean");
        panel.classList.add(`crt-${selected}`);
      });
    });
  });

  /* ---------------------------------------------
     COPY EMAIL TEMPLATE
  --------------------------------------------- */
  const copyBtn = document.getElementById("copy-template");
  const templateCode = document.getElementById("email-template-code");

  if (copyBtn && templateCode) {
    copyBtn.addEventListener("click", async () => {
      const text = templateCode.innerText;

      try {
        await navigator.clipboard.writeText(text);

        // Temporary glow feedback
        copyBtn.classList.add("copied");
        copyBtn.textContent = "Copied!";

        setTimeout(() => {
          copyBtn.classList.remove("copied");
          copyBtn.textContent = "Copy Template";
        }, 1400);

      } catch (err) {
        console.error("Clipboard error:", err);
        alert("Copy failed — your browser may not allow clipboard access.");
      }
    });
  }
});