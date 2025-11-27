document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".forge-terminal-wrapper");

  wrappers.forEach(wrapper => {
    const terminal = wrapper.querySelector(".forge-terminal");
    const buttons = wrapper.querySelectorAll(".terminal-mode-btn");

    if (!terminal || buttons.length === 0) return;

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        terminal.classList.remove("grid-bg", "radar-bg", "scanline-bg");

        const mode = btn.dataset.mode;
        if (mode === "grid") terminal.classList.add("grid-bg");
        if (mode === "radar") terminal.classList.add("radar-bg");
        if (mode === "scanline") terminal.classList.add("scanline-bg");
      });
    });
  });
});