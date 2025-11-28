/* =========================================================
   M.R. TECHFORGE — CONTACT PAGE EFFECTS
   (CRT Modes + Typewriter Terminal)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     TYPEWRITER EFFECT FOR ALL TERMINALS
  ----------------------------------------- */
  const terminals = document.querySelectorAll(".forge-terminal code");

  terminals.forEach((block, index) => {
    const text = block.innerText;
    block.innerText = "";

    let delay = 0;
    [...text].forEach((char, i) => {
      setTimeout(() => {
        block.innerText += char;
      }, index * 300 + i * 18);
    });
  });


  /* -----------------------------------------
     CRT MODE SWITCHER
  ----------------------------------------- */
  const buttons = document.querySelectorAll(".crt-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      const crtBlocks = document.querySelectorAll(".forge-terminal.crt");

      crtBlocks.forEach(block => {
        if (mode === "clean") {
          block.removeAttribute("data-style");
        } else {
          block.setAttribute("data-style", mode);
        }
      });
    });
  });


  /* -----------------------------------------
     COPY EMAIL TEMPLATE
  ----------------------------------------- */
  const copyBtn = document.querySelector("#copy-template");
  const emailTemplate = document.querySelector("#email-template code");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(emailTemplate.innerText);
      copyBtn.innerText = "Copied!";
      setTimeout(() => (copyBtn.innerText = "Copy Template"), 1500);
    });
  }
});