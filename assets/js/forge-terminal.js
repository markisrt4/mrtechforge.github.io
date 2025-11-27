document.addEventListener("DOMContentLoaded", () => {
  const terminals = document.querySelectorAll(".forge-terminal");

  terminals.forEach(term => {
    let block = term.querySelector("code, pre");
    if (!block) return;

    const text = block.innerText;
    block.innerText = "";

    let i = 0;
    const speed = 14;

    function type() {
      if (i < text.length) {
        block.innerText += text[i];
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  });

  // CRT Mode buttons
  document.querySelectorAll("[data-style]").forEach(btn => {
    btn.addEventListener("click", () => {
      const style = btn.dataset.style;
      document.querySelectorAll(".forge-terminal").forEach(t => {
        t.dataset.style = style;
      });
    });
  });
});