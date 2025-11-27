// forge-terminal.js
// Shared terminal logic: typewriter effect, mode switching, beep, radar sweep

(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  // -------- Typewriter for all .forge-terminal code blocks --------
  function initTypewriter() {
    const codeBlocks = Array.from(
      document.querySelectorAll(".forge-terminal code")
    );

    if (!codeBlocks.length) return;

    // store full text & clear for typing
    codeBlocks.forEach((code) => {
      if (!code.dataset.fullText) {
        code.dataset.fullText = code.textContent;
        code.textContent = "";
      }
    });

    let idx = 0;

    function typeNext() {
      if (idx >= codeBlocks.length) return;
      const code = codeBlocks[idx];
      const full = code.dataset.fullText || "";
      let i = 0;

      function step() {
        if (i <= full.length) {
          code.textContent = full.slice(0, i);
          i++;
          setTimeout(step, 18);
        } else {
          idx++;
          setTimeout(typeNext, 350);
        }
      }

      step();
    }

    typeNext();
  }

  // -------- Simple beep via Web Audio --------
  let audioCtx = null;
  function playBeep() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "square";
      osc.frequency.value = 880;

      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtx.currentTime + 0.1
      );

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {
      // ignore if autoplay is blocked
    }
  }

  // -------- Mode switching (Scanline / Grid / Radar) --------
  function initTerminalModes() {
    const bars = document.querySelectorAll(".terminal-mode-bar");
    if (!bars.length) return;

    const allTerminals = document.querySelectorAll(".forge-terminal.crt");

    // add radar sweep overlays where needed
    allTerminals.forEach((term) => {
      if (!term.querySelector(".radar-sweep")) {
        const span = document.createElement("div");
        span.className = "radar-sweep";
        term.appendChild(span);
      }
    });

    bars.forEach((bar) => {
      const group = bar.dataset.terminalGroup || "default";
      const buttons = bar.querySelectorAll(".mode-btn");
      const groupTerms = document.querySelectorAll(
        '.forge-terminal.crt[data-group="' + group + '"]'
      );

      // apply initial mode from first terminal's data-style
      let initialMode = "scanline";
      if (groupTerms.length && groupTerms[0].dataset.style) {
        initialMode = groupTerms[0].dataset.style;
      }

      function applyMode(mode) {
        groupTerms.forEach((term) => {
          term.classList.remove(
            "crt-scanline",
            "crt-grid",
            "crt-radar"
          );
          term.classList.add("crt-" + mode);
          term.dataset.style = mode;
        });
      }

      applyMode(initialMode);

      buttons.forEach((btn) => {
        const mode = btn.dataset.mode;
        if (mode === initialMode) {
          btn.classList.add("active");
        }

        btn.addEventListener("click", () => {
          if (btn.classList.contains("active")) return;

          buttons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          applyMode(mode);
          playBeep();
        });
      });
    });
  }

  // -------- Copy email template --------
  function initCopyTemplate() {
    const btn = document.getElementById("copy-template");
    const terminal = document.getElementById("email-template");
    if (!btn || !terminal) return;

    const originalLabel = btn.textContent;

    btn.addEventListener("click", async () => {
      const code = terminal.querySelector("code");
      if (!code) return;
      const text = (code.dataset.fullText || code.textContent || "").trim();
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = originalLabel), 1800);
      } catch (e) {
        btn.textContent = "Copied (?)";
        setTimeout(() => (btn.textContent = originalLabel), 1800);
      }
    });
  }

  ready(function () {
    initTypewriter();
    initTerminalModes();
    initCopyTemplate();
  });
})();