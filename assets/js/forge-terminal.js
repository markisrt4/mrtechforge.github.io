document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     TYPEWRITER EFFECT
  ========================================================= */
  const terminals = document.querySelectorAll("[data-terminal] .forge-terminal-screen code");

  terminals.forEach((codeBlock) => {
    const text = codeBlock.textContent;
    codeBlock.textContent = ""; // clear

    let i = 0;
    let cursor = document.createElement("span");
    cursor.classList.add("typing-cursor");
    codeBlock.appendChild(cursor);

    function typeTick() {
      if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text[i]);
        i++;
        setTimeout(typeTick, 15);
      }
    }

    typeTick();
  });

  /* =========================================================
     DISPLAY MODE SWITCHING
  ========================================================= */

  const modeButtons = document.querySelectorAll(".terminal-mode-btn");
  const panels = document.querySelectorAll("[data-terminal]");

  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      
      // reset active button
      modeButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const mode = btn.dataset.mode;

      // remove old CRT classes
      panels.forEach((panel) => {
        panel.classList.remove("crt-scanline", "crt-grid", "crt-radar", "crt-clean");
        panel.classList.add(`crt-${mode}`);
      });
    });
  });

});