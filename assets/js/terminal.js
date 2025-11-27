document.addEventListener("DOMContentLoaded", () => {
    const lines = [
        "> SIGNAL RECEIVED.",
        "> CONNECTION SECURE.",
        "> TRANSMISSION STANDING BY..."
    ];

    const container = document.querySelector(".terminal-boot");
    if (!container) return;

    let index = 0;

    function typeLine(text, callback) {
        const lineEl = document.createElement("div");
        lineEl.className = "terminal-line";
        container.appendChild(lineEl);

        let i = 0;
        lineEl.style.opacity = 1;

        function typeChar() {
            lineEl.textContent = text.substring(0, i);
            i++;

            if (i <= text.length) {
                setTimeout(typeChar, 26); // typing speed
            } else if (callback) {
                setTimeout(callback, 350); // delay before next line
            }
        }

        typeChar();
    }

    function nextLine() {
        if (index < lines.length) {
            typeLine(lines[index], nextLine);
            index++;
        } else {
            // Add blinking cursor at the end
            const cursor = document.createElement("span");
            cursor.className = "terminal-cursor";
            container.appendChild(cursor);
        }
    }

    nextLine();
});
