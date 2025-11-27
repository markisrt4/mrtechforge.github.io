document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------
     TYPEWRITER SEQUENCER
  ------------------------------------ */
  const terminals = document.querySelectorAll(".forge-terminal code");

  terminals.forEach((block) => {
    const text = block.innerText.trimEnd();
    block.innerText = "";

    [...text].forEach((char, i) => {
      setTimeout(() => {
        block.innerText += char;
      }, i * 15);
    });
  });


  /* ------------------------------------
     MODE SWITCHING (Grid / Radar / Scan)
  ------------------------------------ */
  const modeButtons = document.querySelectorAll(".mode-btn");

  modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      const terminal = btn.closest(".enhanced-terminal");

      // Clear all modes
      terminal.classList.remove("grid", "radar", "scanline");

      // Apply new mode
      if (mode === "grid") terminal.classList.add("grid");
      if (mode === "radar") terminal.classList.add("radar");
      if (mode === "scan") terminal.classList.add("scanline");

      // Button highlighting
      modeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

});