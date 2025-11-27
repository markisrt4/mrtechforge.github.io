<script>
document.addEventListener("DOMContentLoaded", function () {
  const terminals = document.querySelectorAll(".forge-terminal");

  terminals.forEach((term) => {
    const blocks = term.querySelectorAll("code");
    let delay = 0;

    blocks.forEach((block) => {
      const original = block.innerText;
      block.innerText = "";

      [...original].forEach((char, i) => {
        setTimeout(() => {
          block.innerText += char;
        }, delay + i * 16);
      });

      delay += original.length * 16 + 250;
    });
  });
});
</script>