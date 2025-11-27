document.addEventListener("DOMContentLoaded", () => {
  /* ===========================
       TYPEWRITER EFFECT
  ============================ */
  document.querySelectorAll(".forge-terminal code").forEach(codeBlock => {
    const original = codeBlock.textContent;
    codeBlock.textContent = "";

    let i = 0;
    const speed = 14;

    function type() {
      if (i < original.length) {
        codeBlock.textContent += original.charAt(i);
        i++;
        requestAnimationFrame(type);
      }
    }

    type();
  });


  /* ===========================
       MODE BUTTONS
  ============================ */
  document.querySelectorAll(".terminal-modes").forEach(group => {
    const buttons = group.querySelectorAll("button");
    const terminal = group.nextElementSibling;

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        // update active visual state
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // switch terminal style
        terminal.dataset.style = btn.dataset.style;
      });
    });
  });
});