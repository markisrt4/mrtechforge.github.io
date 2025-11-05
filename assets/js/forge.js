document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector("#copy-template");
  const codeBlock = document.querySelector("#email-template pre");

  if (copyBtn && codeBlock) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText.trim());
      copyBtn.textContent = "Copied!";
      copyBtn.classList.add("copied");

      setTimeout(() => {
        copyBtn.textContent = "Copy Template";
        copyBtn.classList.remove("copied");
      }, 2000);
    });
  }
});
