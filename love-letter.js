
// ===============================
// Elements
// ===============================

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");
const nextBtn = document.getElementById("nextBtn");
const paperSound = document.getElementById("paperSound");
const floatingHearts = document.querySelector(".floating-hearts");


// ===============================
// Letter Text
// ===============================

const message = `Happy Birthday, My Love ❤️

Today is all about celebrating you.

Thank you for every smile, every laugh, every beautiful memory we've shared.

You make ordinary moments feel extraordinary.

I hope this year brings you endless happiness, success, good health, and every dream you've been wishing for.

No matter where life takes us, I hope we continue creating memories together.

You are one of the most special people in my life.

Happy Birthday once again.

With lots of love,

❤️ Forever Yours ❤️`;


// ===============================
// Open Envelope
// ===============================

if (envelope) {

    envelope.addEventListener("click", () => {

        // Prevent opening the letter multiple times
        if (envelope.classList.contains("open")) {
            return;
        }

        envelope.classList.add("open");


        // Open paper sound once
        // This is only the envelope-opening sound.
        if (paperSound) {

            paperSound.currentTime = 0;

            paperSound.play().catch(() => {});

        }


        setTimeout(() => {

            letter.style.display = "flex";

            // Start typing
            typeLetter();

        }, 800);

    });

}


// ===============================
// Typewriter Effect
// ===============================

let index = 0;
let typingStarted = false;

function typeLetter() {

    // Start typing sound when typing begins
    if (!typingStarted) {

        typingStarted = true;

        if (paperSound) {

            /*
                Loop the sound so it continues
                for the entire letter.
            */

            paperSound.loop = true;

            paperSound.currentTime = 0;

            paperSound.play().catch(() => {});

        }

    }


    // Continue typing
    if (index < message.length) {

        typingText.textContent +=
            message.charAt(index);

        index++;

        setTimeout(typeLetter, 35);

    }

    // ===============================
    // Letter Finished
    // ===============================

    else {

        // STOP typing sound
        if (paperSound) {

            paperSound.pause();

            paperSound.currentTime = 0;

            paperSound.loop = false;

        }


        // Show next button
        nextBtn.style.display = "inline-block";

        nextBtn.style.animation =
            "fadeIn 1s forwards";

    }

}


// ===============================
// Floating Hearts
// ===============================

function createHeart() {

    if (!floatingHearts) return;

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    floatingHearts.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 500);


// ===============================
// Fade Animation
// ===============================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeIn {

    from {

        opacity: 0;

        transform: translateY(20px);

    }

    to {

        opacity: 1;

        transform: translateY(0);

    }

}

`;

document.head.appendChild(style);

