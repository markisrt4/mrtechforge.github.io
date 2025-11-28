// assets/js/forge-terminal.js
// Typewriter effect for any .forge-terminal > code block

document.addEventListener("DOMContentLoaded", () => {
  const terminals = document.querySelectorAll(".forge-terminal code");

  terminals.forEach((codeEl) => {
    const original = codeEl.innerText;
    codeEl.innerText = "";

    let i = 0;
    const speed = 18;

    function typeNext() {
      if (i <= original.length) {
        codeEl.innerText = original.slice(0, i);
        i++;
        requestAnimationFrame(() => {
          setTimeout(typeNext, speed);
        });
      } else {
        // Add a blinking cursor at the end
        if (!codeEl.querySelector(".cursor")) {
          const span = document.createElement("span");
          span.className = "cursor";
          codeEl.appendChild(span);
        }
      }
    }

    typeNext();
  });
});