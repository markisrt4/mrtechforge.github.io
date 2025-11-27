<script>
document.addEventListener("DOMContentLoaded", function () {
  const terminals = document.querySelectorAll(".forge-terminal");
  terminals.forEach((term, index) => {
    const blocks = term.querySelectorAll("code");
    let delay = 0;
    blocks.forEach(block => {
      const text = block.innerText;
      block.innerText = "";
      [...text].forEach((char, i) => {
        setTimeout(() => {
          block.innerText += char;
        }, delay + i * 18);
      });
      delay += text.length * 18 + 300; // pause before next block
    });
  });
});
</script>
