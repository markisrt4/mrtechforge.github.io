/* ===========================================================
   CONTACT PAGE INTERACTIVITY (M.R. TechForge) — CLEAN BUILD
   ===========================================================
   Modes:
     - scanline, grid: typing loop (type -> hold 10s -> vanish -> repeat)
     - radar: text very dim by default; bright layer revealed by sweeping wedge (CSS)
     - modern, future: start fresh typing on entry (and on every click)

   Special button:
     - clean: one-time erase + poof, then return to previous visual mode

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

  /* -----------------------------------------------------------
     Typing loop (scanline/grid)
  ----------------------------------------------------------- */

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

  /* -----------------------------------------------------------
     Typing once (modern/future)
  ----------------------------------------------------------- */

  const startTypingOnce = (codeEl, opts = {}) => {
    const typeDelayMs = Number.isFinite(opts.typeDelayMs) ? opts.typeDelayMs : 14;

    stopController(codeEl);
    const ctrl = { stopped: false, timeouts: [] };
    controllers.set(codeEl, ctrl);

    const full = codeEl.dataset.originalText || '';
    codeEl.classList.add('is-typing');
    setText(codeEl, '');

    let i = 0;
    const step = () => {
      if (ctrl.stopped) return;

      if (i >= full.length) {
        codeEl.classList.remove('is-typing');
        schedule(ctrl, () => stopController(codeEl), 250);
        return;
      }

      setText(codeEl, full.slice(0, i + 1));
      i += 1;
      schedule(ctrl, step, typeDelayMs);
    };

    schedule(ctrl, step, Math.max(0, typeDelayMs));
  };

  /* -----------------------------------------------------------
     Radar setup (CSS does sweep; we provide bright duplicate text)
  ----------------------------------------------------------- */

  const enableRadarText = () => {
    stopAll();
    terminalCodes.forEach((codeEl) => {
      restoreOriginal(codeEl);
      codeEl.setAttribute('data-text', codeEl.dataset.originalText || '');
      codeEl.classList.add('radar-illuminate');
    });
  };

  /* -----------------------------------------------------------
     Clean transition (erase + poof once, then return)
  ----------------------------------------------------------- */

  const runCleanTransitionOnce = async (opts = {}) => {
    const waitBeforeMs = Number.isFinite(opts.waitBeforeMs) ? opts.waitBeforeMs : 450;
    const eraseDelayMs = Number.isFinite(opts.eraseDelayMs) ? opts.eraseDelayMs : 14;
    const poofDurationMs = Number.isFinite(opts.poofDurationMs) ? opts.poofDurationMs : 650;

    // Stop any loops so we erase what the user currently sees
    stopAll();
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

          // delete 1-3 chars per tick for a more organic "magic erase"
          const chop = Math.random() < 0.22 ? 3 : Math.random() < 0.35 ? 2 : 1;
          i = Math.max(0, i - chop);
          setText(codeEl, full.slice(0, i));
          schedule(ctrl, step, eraseDelayMs);
        };

        step();
      });
    });

    await Promise.all(erasePromises);
  };

  /* -----------------------------------------------------------
     Mode orchestration
  ----------------------------------------------------------- */

  const visualModes = new Set(['scanline', 'grid', 'radar', 'modern', 'future']);
  let previousVisualMode = 'scanline';
  let currentMode = 'scanline';

  const setPanelModeClass = (mode) => {
    terminalPanels.forEach((panel) => {
      panel.classList.remove(
        'crt-scanline',
        'crt-grid',
        'crt-radar',
        'crt-clean',
        'crt-modern',
        'crt-future'
      );
      panel.classList.add(`crt-${mode}`);
    });
  };

  const applyModeEffects = (mode) => {
    stopAll();

    if (mode === 'scanline' || mode === 'grid') {
      terminalCodes.forEach((codeEl) => startTypingLoop(codeEl));
      return;
    }

    if (mode === 'radar') {
      enableRadarText();
      return;
    }

    // modern/future: type fresh on entry
    terminalCodes.forEach((codeEl) => startTypingOnce(codeEl));
  };

  const setMode = (mode) => {
    if (!visualModes.has(mode)) mode = 'scanline';

    currentMode = mode;
    previousVisualMode = mode;

    setPanelModeClass(mode);
    applyModeEffects(mode);
  };

  const runCleanAndReturn = async () => {
    const returnMode = previousVisualMode;

    // temporary clean overlay class during transition
    terminalPanels.forEach((panel) => panel.classList.add('crt-clean'));

    try {
      await runCleanTransitionOnce();
    } finally {
      terminalPanels.forEach((panel) => panel.classList.remove('crt-clean'));
      setMode(returnMode);

      modeButtons.forEach((b) => b.classList.remove('is-active'));
      const btn = modeButtons.find((b) => b.dataset.mode === returnMode);
      if (btn) btn.classList.add('is-active');
    }
  };

  // Button behavior
  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.mode;

      if (selected === 'clean') {
        runCleanAndReturn();
        return;
      }

      // Even clicking the same mode again should restart typing for modern/future
      modeButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      setMode(selected);
    });
  });

  // Initialize from active button
  const initialBtn = document.querySelector('.terminal-mode-btn.is-active');
  const initial = (initialBtn && initialBtn.dataset.mode) || 'scanline';
  if (initial === 'clean') {
    setMode('scanline');
  } else {
    setMode(initial);
  }

  /* -----------------------------------------------------------
     Copy email template
  ----------------------------------------------------------- */

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
