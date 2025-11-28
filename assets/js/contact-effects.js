// Contact Page Effects: Terminal Modes + Copy Button
document.addEventListener("DOMContentLoaded", () => {
  const modeButtons = document.querySelectorAll(".terminal-mode-btn");
  const terminals = document.querySelectorAll(".forge-terminal-panel");
  const copyBtn = document.getElementById("copy-template");
  const emailCode = document.getElementById("email-template-code");

  // -------------------------------
  // TERMINAL DISPLAY MODE SWITCHER
  // -------------------------------
  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode || "scanline";

      // Set active button
      modeButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      // Apply mode to all terminal panels
      terminals.forEach((panel) => {
        panel.classList.remove("crt-scanline", "crt-grid", "crt-radar", "crt-clean");

        switch (mode) {
          case "grid":
            panel.classList.add("crt-grid");
            break;
          case "radar":
            panel.classList.add("crt-radar");
            break;
          case "clean":
            panel.classList.add("crt-clean");
            break;
          default:
            panel.classList.add("crt-scanline");
        }
      });
    });
  });

  // -------------------------------
  // COPY TEMPLATE BUTTON
  // -------------------------------
  if (copyBtn && emailCode) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(emailCode.innerText.trim());

        const original = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        copyBtn.disabled = true;

        setTimeout(() => {
          copyBtn.textContent = original;
          copyBtn.disabled = false;
        }, 2000);
      } catch (err) {
        console.error("Clipboard failure:", err);
        copyBtn.textContent = "Error";
        setTimeout(() => (copyBtn.textContent = "Copy Template"), 2000);
      }
    });
  }
});