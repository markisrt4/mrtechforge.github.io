// assets/js/forge-terminal.js

document.addEventListener("DOMContentLoaded", () => {
  const terminalPanels = Array.from(
    document.querySelectorAll(".forge-terminal-panel .forge-terminal-screen code")
  );

  // Store full text & clear for typing effect
  terminalPanels.forEach((codeEl) => {
    const original = codeEl.textContent.replace(/\s+$/g, "");
    codeEl.dataset.fullText = original;
    codeEl.textContent = "";
  });

  // Sequential typewriter boot-up
  const typeSpeed = 18; // ms per character
  let totalDelay = 0;

  terminalPanels.forEach((codeEl) => {
    const text = codeEl.dataset.fullText || "";
    setTimeout(() => typeOut(codeEl, text, typeSpeed), totalDelay);
    totalDelay += text.length * typeSpeed + 350;
  });

  // Display mode handling
  const modeButtons = document.querySelectorAll(".terminal-mode-btn");
  const shells = document.querySelectorAll(".forge-terminal-panel");

  function setMode(mode) {
    shells.forEach((panel) => {
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
        case "scanline":
        default:
          panel.classList.add("crt-scanline");
          break;
      }
    });
    playBeep();
  }

  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode || "scanline";
      modeButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      setMode(mode);
    });
  });

  // Default mode on load
  if (modeButtons.length) {
    setMode(modeButtons[0].dataset.mode || "scanline");
    modeButtons[0].classList.add("is-active");
  }

  // Copy template button
  const copyBtn = document.getElementById("copy-template");
  const templateCode = document.getElementById("email-template-code");

  if (copyBtn && templateCode) {
    copyBtn.addEventListener("click", async () => {
      try {
        const text = templateCode.dataset.fullText || templateCode.textContent;
        await navigator.clipboard.writeText(text.trim());
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy Template"), 1800);
        playBeep();
      } catch (err) {
        console.error("Clipboard copy failed:", err);
        copyBtn.textContent = "Copy Failed";
        setTimeout(() => (copyBtn.textContent = "Copy Template"), 2000);
      }
    });
  }
});

/* ---------- Helpers ---------- */

// Simple typewriter
function typeOut(codeEl, text, speed) {
  let i = 0;
  const len = text.length;

  function step() {
    if (i <= len) {
      codeEl.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  }

  step();
}

// Tiny synth beep (no audio file needed)
let audioCtx = null;
function playBeep() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const duration = 0.09;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "square";
    osc.frequency.value = 880; // Hz
    gain.gain.value = 0.07;

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Fail silently if AudioContext is blocked
  }
}