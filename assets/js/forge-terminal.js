document.addEventListener("DOMContentLoaded", () => {
  const terminals = document.querySelectorAll(".forge-terminal code");

  terminals.forEach(codeBlock => {
    const text = codeBlock.innerText;
    codeBlock.innerText = "";

    [...text].forEach((char, i) => {
      setTimeout(() => {
        codeBlock.innerText += char;
      }, i * 14);
    });
  });
});