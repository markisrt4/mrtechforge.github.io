/* ===========================================================
   CONTACT PAGE INTERACTIVITY (M.R. TechForge)
   ===========================================================
   Modes:
     - scanline, grid: typing loop (type -> hold 10s -> vanish -> repeat)
     - radar: illumination synced to sweep (CSS-driven via data-text)
     - modern: calm glass HUD styling (CSS-only)
     - future: flashy holo HUD styling (CSS-only)

   Special button:
     - clean: transition (erase + poof), then returns to previous visual mode

   Other:
     - Copy template button
   =========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const modeButtons = Array.from(document.querySelectorAll('.terminal-mode-btn'));
  const terminalPanels = Array.from(document.querySelectorAll('[data-terminal]'));
  const terminalCodes = Array.from(
    document.querySelectorAll('[data-terminal] .forge-terminal-screen code')
  );

  // Capture original text once
  terminalCodes.forEach((codeEl) => {
    if (!codeEl.dataset.originalText) {
      codeEl.dataset.originalText = codeEl.innerText;
    }
  });

  // Track timeouts so we can stop loops on mode change
  const controllers = new Map(); // codeEl -> { stopped: boolean, timeouts: number[] }

  const schedule = (ctrl, fn, ms) => {
    const id = window.setTimeout(fn, ms);
    ctrl.timeouts.push(id);
    return id;
  };

  const stopController = (codeEl) => {
    const ctrl = controllers.get(codeEl);
    if (ctrl) {
      ctrl.stopped = true;
      ctrl.timeouts.forEach((t) => window.clearTimeout(t));
      controllers.delete(codeEl);
    }

    const screen = codeEl.closest('.forge-terminal-screen');
    if (screen) screen.classList.remove('clean-poof-burst');

    codeEl.classList.remove(
      'is-typing',
      'is-vanishing',
      'is-erasing',
      'is-poofing',
      'radar-illuminate'
    );
    codeEl.removeAttribute('data-text');
  };

  const stopAll = () => terminalCodes.forEach(stopController);

  const setText = (codeEl, text) => {
    codeEl.textContent = text;
  };

  const restoreOriginal = (codeEl) => {
    setText(codeEl, codeEl.dataset.originalText || '');
  };

  const startTypingLoop = (codeEl, opts = {}) => {
    const typeDelayMs = Number.isFinite(opts.typeDelayMs) ? opts.typeDelayMs : 18;
    const holdMs = Number.isFinite(opts.holdMs) ? opts.holdMs : 10_000;
    const vanishMs = Number.isFinite(opts.vanishMs) ? opts.vanishMs : 520;
    const restartGapMs = Number.isFinite(opts.restartGapMs) ? opts.restartGapMs : 260;

    stopController(codeEl);
    const ctrl = { stopped: false, timeouts: [] };
    controllers.set(codeEl, ctrl);

    const full = codeEl.dataset.originalText || '';

    const typeOnce = () => {
      if (ctrl.stopped) return;

      codeEl.classList.add('is-typing');
      codeEl.classList.remove('is-vanishing');
      setText(codeEl, '');

      let i = 0;
      const step = () => {
        if (ctrl.stopped) return;

        if (i >= full.length) {
          codeEl.classList.remove('is-typing');

          schedule(ctrl, () => {
            if (ctrl.stopped) return;
            codeEl.classList.add('is-vanishing');

            schedule(ctrl, () => {
              if (ctrl.stopped) return;
              setText(codeEl, '');
              codeEl.classList.remove('is-vanishing');
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

  const runCleanTransitionOnce = async (opts = {}) => {
    const waitBeforeMs = Number.isFinite(opts.waitBeforeMs) ? opts.waitBeforeMs : 650;
    const eraseDelayMs = Number.isFinite(opts.eraseDelayMs) ? opts.eraseDelayMs : 14;
    const poofDurationMs = Number.isFinite(opts.poofDurationMs) ? opts.poofDurationMs : 650;

    // Stop any loops so we erase what the user currently sees
    stopAll();

    // Restore originals before erasing (deterministic)
    terminalCodes.forEach(restoreOriginal);

    await new Promise((r) => window.setTimeout(r, waitBeforeMs));

    const erasePromises = terminalCodes.map((codeEl) => {
      stopController(codeEl);
      const ctrl = { stopped: false, timeouts: [] };
      controllers.set(codeEl, ctrl);

      return new Promise((resolve) => {
        const full = codeEl.dataset.originalText || '';
        let i = full.length;

        codeEl.classList.add('is-erasing');

        const step = () => {
          if (ctrl.stopped) return resolve();

          if (i <= 0) {
            codeEl.classList.remove('is-erasing');
            codeEl.classList.add('is-poofing');
            setText(codeEl, '');

            const screen = codeEl.closest('.forge-terminal-screen');
            if (screen) screen.classList.add('clean-poof-burst');

            schedule(ctrl, () => {
              if (screen) screen.classList.remove('clean-poof-burst');
              codeEl.classList.remove('is-poofing');
              resolve();
            }, poofDurationMs);

            return;
          }

          const chop = Math.random() < 0.22 ? 3 : Math.random() < 0.35 ? 2 : 1;
          i = Math.max(0, i - chop);
          setText(codeEl, full.slice(0, i));
          schedule(ctrl, step, eraseDelayMs);
        };

        step();
      });
    });

    await Promise.all(erasePromises);

    // Cleanup
    terminalCodes.forEach((codeEl) => {
      stopController(codeEl);
      restoreOriginal(codeEl);
    });
  };

  // ---------------------------
  // Mode application
  // ---------------------------
  const visualModes = new Set(['scanline', 'grid', 'radar', 'modern', 'future']);
  let currentMode = 'scanline';
  let previousVisualMode = 'scanline';

  const setPanelModeClass = (mode) => {
    terminalPanels.forEach((panel) => {
      panel.classList.remove(
        'crt-scanline',
        'crt-grid',
        'crt-radar',
        'crt-modern',
        'crt-future'
      );
      panel.classList.add(`crt-${mode}`);
    });
  };

  const applyModeEffects = (mode) => {
    stopAll();

    terminalCodes.forEach((codeEl) => {
      restoreOriginal(codeEl);

      if (mode === 'scanline' || mode === 'grid') {
        startTypingLoop(codeEl);
        return;
      }

      if (mode === 'radar') {
        codeEl.classList.add('radar-illuminate');
        codeEl.setAttribute('data-text', codeEl.dataset.originalText || '');
        return;
      }

      // modern/future: CSS-only visuals
    });
  };

  const setMode = (mode) => {
    if (mode === 'clean') return;

    if (!visualModes.has(mode)) {
      mode = 'scanline';
    }

    currentMode = mode;
    previousVisualMode = mode;

    setPanelModeClass(mode);
    applyModeEffects(mode);
  };

  const runCleanAndReturn = async () => {
    const returnMode = previousVisualMode;

    // Temporary "clean" class just for the overlay look during the transition
    terminalPanels.forEach((panel) => {
      panel.classList.add('crt-clean');
    });

    try {
      await runCleanTransitionOnce();
    } finally {
      terminalPanels.forEach((panel) => {
        panel.classList.remove('crt-clean');
      });

      // Return to whichever visual mode we were on before
      setMode(returnMode);

      // Re-highlight the active visual mode button
      modeButtons.forEach((b) => b.classList.remove('is-active'));
      const btn = modeButtons.find((b) => b.dataset.mode === returnMode);
      if (btn) btn.classList.add('is-active');
    }
  };

  // ---------------------------
  // Button behavior
  // ---------------------------
  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.mode;

      if (selected === 'clean') {
        // Clean is a transition, not a persistent mode
        runCleanAndReturn();
        return;
      }

      modeButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      setMode(selected);
    });
  });

  // Initialize
  const initialBtn = document.querySelector('.terminal-mode-btn.is-active');
  const initial = (initialBtn && initialBtn.dataset.mode) || 'scanline';
  if (initial === 'clean') {
    setMode('scanline');
  } else {
    setMode(initial);
  }

  // ---------------------------
  // Copy email template
  // ---------------------------
  const copyBtn = document.getElementById('copy-template');
  const templateCode = document.getElementById('email-template-code');

  if (copyBtn && templateCode) {
    copyBtn.addEventListener('click', async () => {
      const text = templateCode.innerText;

      try {
        await navigator.clipboard.writeText(text);

        copyBtn.classList.add('copied');
        copyBtn.textContent = 'Copied!';

        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.textContent = 'Copy Template';
        }, 1400);
      } catch (err) {
        console.error('Clipboard error:', err);
        alert('Copy failed — your browser may not allow clipboard access.');
      }
    });
  }
});