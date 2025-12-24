/* ===========================================================
   CONTACT PAGE INTERACTIVITY — STABLE BUILD
   - CRT Mode Switching (Scanline / Grid / Radar / Clean)
   - Scanline/Grid: typing loop (type → hold 10s → vanish → restart)
   - Radar: beam sweeps; text lights when beam points at it (JS-driven, mobile-safe)
   - Clean: erase + poof, then return to previous mode
   - Copy Email Template Button
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const modeButtons = Array.from(document.querySelectorAll(".terminal-mode-btn"));
  const terminalPanels = Array.from(document.querySelectorAll("[data-terminal]"));
  const codeBlocks = Array.from(
    document.querySelectorAll("[data-terminal] .forge-terminal-screen code")
  );

  // -----------------------------
  // Capture original text once
  // -----------------------------
  codeBlocks.forEach((code) => {
    if (!code.dataset.originalText) {
      // Preserve formatting exactly as rendered
      code.dataset.originalText = code.textContent;
    }
  });

  // -----------------------------
  // Effect controllers / cleanup
  // -----------------------------
  const timersByCode = new Map(); // code -> [timeoutIds]
  let radarRaf = null;
  let radarStart = 0;
  let activeMode = "scanline";
  let previousMode = "scanline";

  // -----------------------------
  // Per-mode sound effects (WebAudio, no external files)
  // Plays only on user gestures (button clicks) to satisfy mobile autoplay rules.
  // -----------------------------
  let audioCtx = null;

  function getAudioCtx() {
    if (audioCtx) return audioCtx;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
    return audioCtx;
  }

  function playToneSequence(steps) {
    const ctx = getAudioCtx();
    if (!ctx) return;

    // Some browsers start suspended until first interaction; button click counts.
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const now = ctx.currentTime;
    let t = now;

    steps.forEach(({ freq, dur = 0.07, type = "sine", gain = 0.08 }) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);

      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

      osc.connect(g);
      g.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + dur + 0.01);

      t += dur + 0.015;
    });
  }

  function playModeSfx(mode) {
    // Keep these short + subtle (feels like UI feedback, not a ringtone)
    switch (mode) {
      case "scanline":
        playToneSequence([
          { freq: 620, dur: 0.06, type: "triangle", gain: 0.07 },
          { freq: 840, dur: 0.06, type: "triangle", gain: 0.06 }
        ]);
        break;
      case "grid":
        playToneSequence([
          { freq: 520, dur: 0.05, type: "square", gain: 0.05 },
          { freq: 520, dur: 0.05, type: "square", gain: 0.04 },
          { freq: 780, dur: 0.06, type: "triangle", gain: 0.05 }
        ]);
        break;
      case "radar":
        playToneSequence([
          { freq: 380, dur: 0.08, type: "sine", gain: 0.07 },
          { freq: 520, dur: 0.06, type: "sine", gain: 0.05 }
        ]);
        break;
      case "modern":
        playToneSequence([
          { freq: 740, dur: 0.05, type: "sine", gain: 0.05 },
          { freq: 980, dur: 0.07, type: "sine", gain: 0.06 }
        ]);
        break;
      case "future":
        playToneSequence([
          { freq: 460, dur: 0.05, type: "sawtooth", gain: 0.045 },
          { freq: 920, dur: 0.06, type: "triangle", gain: 0.055 },
          { freq: 1240, dur: 0.05, type: "sine", gain: 0.05 }
        ]);
        break;
      case "clean":
        playToneSequence([
          { freq: 880, dur: 0.04, type: "triangle", gain: 0.05 },
          { freq: 520, dur: 0.10, type: "sine", gain: 0.05 }
        ]);
        break;
      default:
        break;
    }
  }


  function addTimer(code, id) {
    if (!timersByCode.has(code)) timersByCode.set(code, []);
    timersByCode.get(code).push(id);
  }

  function clearAllTimers() {
    for (const ids of timersByCode.values()) {
      ids.forEach((t) => clearTimeout(t));
    }
    timersByCode.clear();
  }

  function stopRadar() {
    if (radarRaf) cancelAnimationFrame(radarRaf);
    radarRaf = null;
  }

  function stopAllEffects() {
    clearAllTimers();
    stopRadar();
    codeBlocks.forEach((code) => {
      code.classList.remove(
        "is-typing",
        "is-vanishing",
        "is-erasing",
        "radar-dim",
        "radar-lit"
      );
    });
    terminalPanels.forEach((p) => p.classList.remove("crt-cleaning"));
  }

  function restoreAllText() {
    codeBlocks.forEach((code) => {
      code.textContent = code.dataset.originalText || "";
    });
  }

  // -----------------------------
  // Typing loop (Scanline / Grid)
  // -----------------------------
  function startTypingLoop(code, opts = {}) {
    const typeDelay = opts.typeDelay ?? 18;     // ms per char
    const holdMs = opts.holdMs ?? 10000;        // hold after complete
    const vanishMs = opts.vanishMs ?? 520;      // fade-out duration
    const restartGap = opts.restartGap ?? 260;  // pause before restart

    const full = code.dataset.originalText || "";
    code.textContent = "";

    let i = 0;

    function typeStep() {
      // If mode changed, bail (no new timers will get scheduled)
      if (activeMode !== "scanline" && activeMode !== "grid") return;

      code.classList.add("is-typing");
      code.textContent = full.slice(0, i + 1);
      i += 1;

      if (i >= full.length) {
        code.classList.remove("is-typing");

        // hold
        addTimer(code, setTimeout(() => {
          if (activeMode !== "scanline" && activeMode !== "grid") return;

          // vanish
          code.classList.add("is-vanishing");
          addTimer(code, setTimeout(() => {
            if (activeMode !== "scanline" && activeMode !== "grid") return;

            code.classList.remove("is-vanishing");
            code.textContent = "";
            i = 0;

            addTimer(code, setTimeout(() => {
              if (activeMode !== "scanline" && activeMode !== "grid") return;
              typeStep();
            }, restartGap));
          }, vanishMs));
        }, holdMs));

        return;
      }

      addTimer(code, setTimeout(typeStep, typeDelay));
    }

    typeStep();
  }
  // -----------------------------
  // Typing once (Modern / Future)
  // -----------------------------
  function startTypingOnce(code, opts = {}) {
    const typeDelay = opts.typeDelay ?? 14;

    const full = code.dataset.originalText || "";
    code.textContent = "";
    code.classList.add("is-typing");

    let i = 0;

    function step() {
      if (activeMode !== "modern" && activeMode !== "future") return;

      code.textContent = full.slice(0, i + 1);
      i += 1;

      if (i >= full.length) {
        code.classList.remove("is-typing");
        return;
      }

      addTimer(code, setTimeout(step, typeDelay));
    }

    addTimer(code, setTimeout(step, Math.max(0, typeDelay)));
  }



  function enableTypingLoop() {
    restoreAllText();
    codeBlocks.forEach((code) => startTypingLoop(code));
  }

  // -----------------------------
  // Radar illumination (mobile-safe)
  // -----------------------------
  function angleDiff(a, b) {
    // smallest signed diff in degrees (-180..180)
    let d = (a - b + 540) % 360 - 180;
    return d;
  }

  function enableRadar() {
    restoreAllText();

    // Make everything very dim by default
    codeBlocks.forEach((code) => {
      code.classList.add("radar-dim");
      code.classList.remove("radar-lit");
    });

    // Keep simple: sweep duration matches CSS beam animation (in scss)
    const durationMs = 4000;           // MUST match SCSS radarSweep duration
    const beamHalfWidth = 38;          // degrees (beam cone)
    const afterglowMs = 1750;           // text stays lit after beam passes
    const hitTimes = new Map();        // code -> last hit timestamp

    radarStart = performance.now();

    function frame(now) {
      if (activeMode !== "radar") return;

      // 0 at top, clockwise (matches conic-gradient default)
      const t = (now - radarStart) % durationMs;
      const beamAngle = (t / durationMs) * 360;

      // For each code block: light it if beam points at its center
      for (const code of codeBlocks) {
        const panel = code.closest(".forge-terminal-panel");
        if (!panel) continue;

        const panelRect = panel.getBoundingClientRect();
        const codeRect = code.getBoundingClientRect();

        const cx = panelRect.left + panelRect.width / 2;
        const cy = panelRect.top + panelRect.height / 2;

        const tx = codeRect.left + codeRect.width / 2;
        const ty = codeRect.top + codeRect.height / 2;

        const dx = tx - cx;
        const dy = ty - cy;

        // Convert vector to degrees: 0=up, clockwise
        const a = (Math.atan2(dx, -dy) * 180 / Math.PI + 360) % 360;
        const d = Math.abs(angleDiff(a, beamAngle));

        const litNow = d <= beamHalfWidth;

        if (litNow) {
          hitTimes.set(code, now);
          code.classList.add("radar-lit");
        } else {
          const last = hitTimes.get(code) ?? -Infinity;
          if (now - last > afterglowMs) {
            code.classList.remove("radar-lit");
          }
        }
      }

      radarRaf = requestAnimationFrame(frame);
    }

    radarRaf = requestAnimationFrame(frame);
  }

  // -----------------------------
  // Clean transition: erase + poof, then restore previous mode
  // -----------------------------
  function runCleanTransition() {
    // Clean is a one-shot. Keep current mode as "previousMode".
    terminalPanels.forEach((p) => p.classList.add("crt-cleaning"));
    restoreAllText();

    const eraseDelay = 14; // ms per delete tick
    const poofMs = 650;

    // Stop anything currently running, but don't wipe previousMode
    clearAllTimers();
    stopRadar();

    const donePromises = codeBlocks.map((code) => new Promise((resolve) => {
      const full = code.dataset.originalText || "";
      let i = full.length;

      code.classList.add("is-erasing");
      code.textContent = full;

      function step() {
        if (activeMode === "clean") {
          // delete 1-3 chars per tick for a magical erase feel
          const chop = Math.random() < 0.22 ? 3 : (Math.random() < 0.35 ? 2 : 1);
          i = Math.max(0, i - chop);
          code.textContent = full.slice(0, i);

          if (i <= 0) {
            code.classList.remove("is-erasing");

            const screen = code.closest(".forge-terminal-screen");
            if (screen) screen.classList.add("clean-poof-burst");

            addTimer(code, setTimeout(() => {
              if (screen) screen.classList.remove("clean-poof-burst");
              resolve();
            }, poofMs));

            return;
          }

          addTimer(code, setTimeout(step, eraseDelay));
        } else {
          // mode changed mid-clean
          resolve();
        }
      }

      addTimer(code, setTimeout(step, 260));
    }));

    Promise.all(donePromises).then(() => {
      // Return to prior mode
      activeMode = previousMode;
      terminalPanels.forEach((panel) => {
        panel.classList.remove("crt-cleaning", "crt-clean");
        panel.classList.add(`crt-${activeMode}`);
      });

      // Button highlight back to previous
      modeButtons.forEach((b) => b.classList.remove("is-active"));
      const prevBtn = modeButtons.find((b) => b.dataset.mode === activeMode);
      if (prevBtn) prevBtn.classList.add("is-active");

      // Re-enable effects for previous mode
      stopAllEffects();
      applyModeEffects(activeMode);
    });
  }

  // -----------------------------
  // Apply mode classes + effects
  // -----------------------------
  function applyModeClasses(mode) {
    terminalPanels.forEach((panel) => {
      panel.classList.remove("crt-scanline", "crt-grid", "crt-radar", "crt-clean", "crt-modern", "crt-future");
      panel.classList.add(`crt-${mode}`);
    });
  }

  function applyModeEffects(mode) {
    stopAllEffects();

    if (mode === "scanline" || mode === "grid") {
      enableTypingLoop();
      return;
    }
    if (mode === "radar") {
      enableRadar();
      return;
    }
    if (mode === "modern" || mode === "future") {
      restoreAllText();
      codeBlocks.forEach((code) => startTypingOnce(code));
      return;
    }
    if (mode === "clean") {
      // handled separately
      return;
    }
  }

  function setMode(mode) {
    // clean is a transition; don't treat as persistent visual mode
    if (mode === "clean") {
      previousMode = activeMode;
      activeMode = "clean";
      runCleanTransition();
      return;
    }

    previousMode = mode;
    activeMode = mode;

    applyModeClasses(mode);
    applyModeEffects(mode);
  }

  // Wire mode buttons
  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modeButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      setMode(btn.dataset.mode);
    });
  });

  // Init based on existing active button
  const initialBtn = document.querySelector(".terminal-mode-btn.is-active");
  const initialMode = (initialBtn && initialBtn.dataset.mode) ? initialBtn.dataset.mode : "scanline";
  activeMode = (initialMode === "clean") ? "scanline" : initialMode;
  previousMode = activeMode;
  applyModeClasses(activeMode);
  applyModeEffects(activeMode);

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