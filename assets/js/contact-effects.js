/* ==========================================================
   CONTACT TERMINAL EFFECTS — M.R. TechForge
   Modes: scanline, grid, radar, modern, future
   Clean = transition (erase + poof)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const terminals = document.querySelectorAll("[data-terminal]");
  const modeButtons = document.querySelectorAll(".terminal-mode-btn");

  let activeMode = "scanline";
  let previousMode = "scanline";
  let typingTimers = [];

  /* ------------------------------
     Utilities
  ------------------------------ */

  function clearTimers() {
    typingTimers.forEach(t => clearTimeout(t));
    typingTimers = [];
  }

  function resetTerminal(term) {
    const original = term.getAttribute("data-original");
    term.innerHTML = "";
    term.dataset.text = original;
  }

  function storeOriginalText() {
    terminals.forEach(term => {
      if (!term.dataset.original) {
        term.dataset.original = term.textContent.trim();
      }
    });
  }

  /* ------------------------------
     Typing Effect
  ------------------------------ */

  function typeText(term, delay = 25) {
    const text = term.dataset.original;
    let index = 0;
    term.innerHTML = "";

    function tick() {
      if (index < text.length) {
        term.innerHTML += text[index++];
        typingTimers.push(setTimeout(tick, delay));
      }
    }
    tick();
  }

  function typeAll() {
    clearTimers();
    terminals.forEach(term => {
      resetTerminal(term);
      typeText(term);
    });
  }

  /* ------------------------------
     Clean Transition
  ------------------------------ */

  function cleanTransition() {
    terminals.forEach(term => {
      term.classList.add("clean-erasing");
    });

    setTimeout(() => {
      terminals.forEach(term => {
        term.classList.remove("clean-erasing");
        resetTerminal(term);
      });

      applyMode(previousMode, true);
    }, 1200);
  }

  /* ------------------------------
     Radar Setup
  ------------------------------ */

  function setupRadar() {
    terminals.forEach(term => {
      term.innerHTML = `
        <span class="radar-dim">${term.dataset.original}</span>
        <span class="radar-lit">${term.dataset.original}</span>
      `;
    });
  }

  /* ------------------------------
     Mode Handling
  ------------------------------ */

  function applyMode(mode, force = false) {
    clearTimers();

    if (mode !== "clean") {
      previousMode = mode;
    }

    document.body.className = "";
    document.body.classList.add(`crt-${mode}`);

    if (mode === "clean") {
      cleanTransition();
      return;
    }

    if (mode === "radar") {
      setupRadar();
      return;
    }

    if (force || mode === "modern" || mode === "future" || mode === "scanline" || mode === "grid") {
      storeOriginalText();
      typeAll();
    }
  }

  /* ------------------------------
     Init
  ------------------------------ */

  storeOriginalText();
  applyMode(activeMode, true);

  modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      applyMode(mode, true);
    });
  });
});