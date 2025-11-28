// contact-effects.js
(function () {
  // ---------- Tiny Beep (quiet, short) ----------
  let audioCtx = null;

  function playBeep() {
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        audioCtx = new AudioContext();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "square";
      osc.frequency.value = 880; // A5-ish
      gain.gain.value = 0.06;    // nice and subtle

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      // fail silently
    }
  }

  // ---------- Typewriter ----------
  function setupTypewriter() {
    // Any "classic" forge-terminal (footer, etc.)
    const simpleTerminals = document.querySelectorAll(".forge-terminal code");
    // Contact-page CRT terminals
    const panelTerminals = document.querySelectorAll(
      ".forge-terminal-panel .forge-terminal-screen code"
    );

    const allCodes = Array.from(simpleTerminals).concat(Array.from(panelTerminals));

    let globalDelay = 0;
    const charDelay = 18;   // ms per char
    const blockPause = 320; // pause between blocks

    allCodes.forEach((codeEl, blockIndex) => {
      const rawText = codeEl.textContent;
      const text = rawText.replace(/\r\n/g, "\n");
      codeEl.textContent = "";

      // Cursor span at the end
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      codeEl.appendChild(cursor);

      const startDelay = globalDelay;

      setTimeout(() => {
        let i = 0;
        const len = text.length;

        const interval = setInterval(() => {
          if (i >= len) {
            clearInterval(interval);
            // final beep at end of block
            playBeep();
            return;
          }

          const ch = text[i];
          cursor.insertAdjacentText("beforebegin", ch);
          i++;

          // beep every ~24 chars so it's not insane
          if (i % 24 === 0) {
            playBeep();
          }
        }, charDelay);
      }, startDelay);

      globalDelay += text.length * charDelay + blockPause;
    });
  }

  // ---------- Display Modes (Scanline / Grid / Radar / Clean) ----------
  function setupDisplayModes() {
    const buttons = document.querySelectorAll(".terminal-mode-btn");
    const panels = document.querySelectorAll(".forge-terminal-panel");

    if (!buttons.length || !panels.length) return;

    function applyMode(mode) {
      panels.forEach((panel) => {
        panel.classList.remove("crt-scanline", "crt-grid", "crt-radar", "crt-clean");

        let cls = "crt-scanline";
        if (mode === "grid") cls = "crt-grid";
        else if (mode === "radar") cls = "crt-radar";
        else if (mode === "clean") cls = "crt-clean";

        panel.classList.add(cls);
      });
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-mode");

        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        applyMode(mode);
        playBeep();
      });
    });

    // Initialize to the first active button's mode
    const active = document.querySelector(".terminal-mode-btn.is-active");
    if (active) {
      applyMode(active.getAttribute("data-mode") || "scanline");
    } else {
      applyMode("scanline");
    }
  }

  // ---------- Copy Template ----------
  function setupCopyTemplate() {
    const btn = document.getElementById("copy-template");
    const code = document.getElementById("email-template-code");
    if (!btn || !code) return;

    btn.addEventListener("click", async () => {
      const text = code.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = "Copied!";
        playBeep();
        setTimeout(() => {
          btn.textContent = original;
        }, 1200);
      } catch (e) {
        const original = btn.textContent;
        btn.textContent = "Copy failed";
        setTimeout(() => {
          btn.textContent = original;
        }, 1200);
      }
    });
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", function () {
    setupTypewriter();
    setupDisplayModes();
    setupCopyTemplate();
  });
})();