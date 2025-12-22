/* ===========================================================
   CONTACT PAGE INTERACTIVITY
   - CRT Mode Switching (Scanline / Grid / Radar / Clean)
   - Copy Email Template Button
   - Animated Text Effects per Mode
     - Scanline/Grid: Type-in loop, then vanish after 10s, restart
     - Radar: Text illuminates only under the sweep (CSS-driven)
     - Clean: Text erases, then "poof" burst
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------------
     TERMINAL MODE SWITCHING
  --------------------------------------------- */
  const modeButtons = document.querySelectorAll(".terminal-mode-btn");
  const terminalPanels = document.querySelectorAll("[data-terminal]");
  const terminalCodes = document.querySelectorAll(
    "[data-terminal] .forge-terminal-screen code"
  );

  // Store original terminal text (one-time capture)
  terminalCodes.forEach((codeEl) => {
    if (!codeEl.dataset.originalText) {
      // innerText preserves newlines nicely for terminals
      codeEl.dataset.originalText = codeEl.innerText;
    }
  });

  // Track running animation loops so we can stop them on mode changes
  const controllers = new Map(); // codeEl -> { stopped: boolean, timeouts: number[] }

  const stopController = (codeEl) => {
    const ctrl = controllers.get(codeEl);
    if (!ctrl) return;

    ctrl.stopped = true;
    ctrl.timeouts.forEach((t) => window.clearTimeout(t));
    controllers.delete(codeEl);

    // Clean up classes/attrs
    codeEl.classList.remove(
      "is-typing",
      "is-vanishing",
      "is-erasing",
      "is-poofing",
      "radar-illuminate"
    );
    codeEl.removeAttribute("data-text");
  };

  const schedule = (ctrl, fn, ms) => {
    const id = window.setTimeout(fn, ms);
    ctrl.timeouts.push(id);
    return id;
  };

  const setText = (codeEl, text) => {
    // Use textContent to avoid HTML parsing
    codeEl.textContent = text;
  };

  const restoreOriginal = (codeEl) => {
    setText(codeEl, codeEl.dataset.originalText || "");
  };

  const startTypingLoop = (codeEl, opts = {}) => {
    const typeDelayMs = typeof opts.typeDelayMs === "number" ? opts.typeDelayMs : 18;
    const holdMs = typeof opts.holdMs === "number" ? opts.holdMs : 10_000;
    const vanishMs = typeof opts.vanishMs === "number" ? opts.vanishMs : 520;
    const restartGapMs = typeof opts.restartGapMs === "number" ? opts.restartGapMs : 260;

    stopController(codeEl);
    const ctrl = { stopped: false, timeouts: [] };
    controllers.set(codeEl, ctrl);

    const full = codeEl.dataset.originalText || "";

    const typeOnce = () => {
      if (ctrl.stopped) return;

      codeEl.classList.add("is-typing");
      codeEl.classList.remove("is-vanishing");
      setText(codeEl, "");

      let i = 0;

      const step = () => {
        if (ctrl.stopped) return;

        if (i >= full.length) {
          // Finished typing
          codeEl.classList.remove("is-typing");

          // Hold for a bit, then vanish, then restart
          schedule(ctrl, () => {
            if (ctrl.stopped) return;

            codeEl.classList.add("is-vanishing");
            schedule(ctrl, () => {
              if (ctrl.stopped) return;

              setText(codeEl, "");
              codeEl.classList.remove("is-vanishing");
              schedule(ctrl, typeOnce, restartGapMs);
            }, vanishMs);
          }, holdMs);

          return;
        }

        setText(codeEl, full.slice(0, i + 1));
        i += 1;
        schedule(ctrl, step, typeDelayMs);
      };

      schedule(ctrl, step, Math.max(0, typeDelayMs));
    };

    typeOnce();
  };

  const startCleanEraseLoop = (codeEl, opts = {}) => {
    const waitBeforeMs = typeof opts.waitBeforeMs === "number" ? opts.waitBeforeMs : 2000;
    const eraseDelayMs = typeof opts.eraseDelayMs === "number" ? opts.eraseDelayMs : 14;
    const poofDurationMs = typeof opts.poofDurationMs === "number" ? opts.poofDurationMs : 650;
    const resetHoldMs = typeof opts.resetHoldMs === "number" ? opts.resetHoldMs : 2500;

    stopController(codeEl);
    const ctrl = { stopped: false, timeouts: [] };
    controllers.set(codeEl, ctrl);

    const cycle = () => {
      if (ctrl.stopped) return;

      restoreOriginal(codeEl);
      codeEl.classList.remove("is-poofing");
      codeEl.classList.add("is-erasing");

      schedule(ctrl, () => {
        if (ctrl.stopped) return;

        const full = codeEl.dataset.originalText || "";
        let i = full.length;

        const step = () => {
          if (ctrl.stopped) return;

          if (i <= 0) {
            // Done erasing -> poof
            codeEl.classList.remove("is-erasing");
            codeEl.classList.add("is-poofing");

            setText(codeEl, "");

            schedule(ctrl, () => {
              if (ctrl.stopped) return;
              codeEl.classList.remove("is-poofing");
              schedule(ctrl, cycle, resetHoldMs);
            }, poofDurationMs);

            return;
          }

          // Magical erase: delete 1-3 chars per tick for a more organic feel
          const chop = Math.random() < 0.22 ? 3 : Math.random() < 0.35 ? 2 : 1;
          i = Math.max(0, i - chop);
          setText(codeEl, full.slice(0, i));

          schedule(ctrl, step, eraseDelayMs);
        };

        step();
      }, waitBeforeMs);
    };

    cycle();
  };

  const applyModeEffects = (mode) => {
    terminalCodes.forEach((codeEl) => {
      stopController(codeEl);
      restoreOriginal(codeEl);

      if (mode === "scanline" || mode === "grid") {
        startTypingLoop(codeEl);
      } else if (mode === "radar") {
        // CSS handles illumination; we just provide the duplicate text via data-text
        codeEl.classList.add("radar-illuminate");
        codeEl.setAttribute("data-text", codeEl.dataset.originalText || "");
      } else if (mode === "clean") {
        startCleanEraseLoop(codeEl);
      }
    });
  };

  const setMode = (mode) => {
    terminalPanels.forEach((panel) => {
      panel.classList.remove("crt-scanline", "crt-grid", "crt-radar", "crt-clean");
      panel.classList.add(`crt-${mode}`);
    });

    applyModeEffects(mode);
  };

  // Wire up buttons
  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modeButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      setMode(btn.dataset.mode);
    });
  });

  // Apply effects on initial load (based on the active button)
  const initiallyActive = document.querySelector(".terminal-mode-btn.is-active");
  setMode((initiallyActive && initiallyActive.dataset.mode) || "scanline");

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