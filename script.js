
/* ==========================================
   INDEX PAGE
========================================== */

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "password.html";
        }, 1000);

    });

}


/* ==========================================
   PASSWORD PAGE
========================================== */

const unlockBtn = document.getElementById("unlockBtn");

if (unlockBtn) {

    unlockBtn.addEventListener("click", () => {

        const password = document.getElementById("password");
        const error = document.getElementById("error");

        if (!password) return;

        /*
           His birthday:
           19 August 2004
        */

        if (password.value === "2004-08-19") {

            if (error) {
                error.textContent = "";
            }

            // Remember that the birthday page was unlocked
            sessionStorage.setItem("birthdayUnlocked", "true");

            document.body.style.transition = "opacity 1s ease";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);

        } else {

            if (error) {
                error.textContent =
                    "❌ Wrong Birthday! Try Again ❤️";
            }

            password.style.animation = "shake .4s ease";

            setTimeout(() => {
                password.style.animation = "";
            }, 400);

        }

    });

}


/* ==========================================
   FLOATING HEARTS
========================================== */

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "🌸",
        "✨"
    ];

    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() * heartTypes.length
            )
        ];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";

    heart.style.fontSize =
        (14 + Math.random() * 20) + "px";

    heart.style.animation =
        "floatHeart " +
        (5 + Math.random() * 4) +
        "s linear";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

setInterval(createFloatingHeart, 700);


/* ==========================================
   MUSIC
========================================== */

const song = document.getElementById("loveSong");

if (song) {

    // Background music volume
    song.volume = 0.18;

    function playSong() {

        song.play().catch(() => {
            // Browser may block autoplay
        });

    }

    document.addEventListener(
        "click",
        playSong,
        { once: true }
    );

    document.addEventListener(
        "touchstart",
        playSong,
        { once: true }
    );

}


/* ==========================================
   DASHBOARD POPUP
========================================== */

const popup = document.getElementById("popup");
const popupBody = document.getElementById("popupBody");
const closePopup = document.getElementById("closePopup");


/*
   Only run dashboard logic
   when dashboard elements exist.
*/

if (popup && popupBody) {


    /* --------------------------------------
       LOVE LETTER
       → OPEN REAL PAGE
    -------------------------------------- */

    const loveLetter =
        document.getElementById("loveLetter");

    if (loveLetter) {

        loveLetter.onclick = () => {

            window.location.href =
                "love-letter.html";

        };

    }


    /* --------------------------------------
       BIRTHDAY WISH
       → OPEN REAL PAGE
    -------------------------------------- */

    const birthdayWish =
        document.getElementById("birthdayWish");

    if (birthdayWish) {

        birthdayWish.onclick = () => {

            window.location.href =
                "birthday.html";

        };

    }


    /* --------------------------------------
       MEMORIES
    -------------------------------------- */

    const memories =
        document.getElementById("memories");

    if (memories) {

        memories.onclick = () => {

            window.location.href =
                "memories.html";

        };

    }


    /* --------------------------------------
       REASONS
    -------------------------------------- */

    const reasons =
        document.getElementById("reasons");

    if (reasons) {

        reasons.onclick = () => {

            window.location.href =
                "reasons.html";

        };

    }


    /* --------------------------------------
       GIFTS
    -------------------------------------- */

    const gifts =
        document.getElementById("gifts");

    if (gifts) {

        gifts.onclick = () => {

            window.location.href =
                "gift.html";

        };

    }


    /* --------------------------------------
       FUTURE
    -------------------------------------- */

    const future =
        document.getElementById("future");

    if (future) {

        future.onclick = () => {

            window.location.href =
                "future.html";

        };

    }


    /* --------------------------------------
       BIRTHDAY BOY
    -------------------------------------- */

    const birthdayBoy =
        document.getElementById("birthdayBoy");

    if (birthdayBoy) {

        birthdayBoy.onclick = () => {

            window.location.href =
                "boy.html";

        };

    }


    /* --------------------------------------
       WELCOME
    -------------------------------------- */

    const welcomeCard =
        document.getElementById("welcomeCard");

    if (welcomeCard) {

        welcomeCard.onclick = () => {

            popup.style.display = "flex";

            popupBody.innerHTML = `
                <h2>✨ Welcome To Your Surprise ❤️</h2>

                <br>

                <p style="
                    opacity:1;
                    transform:none;
                    animation:none;
                ">
                    Every card here has a
                    little piece of my heart. 💗

                    <br><br>

                    Open them one by one...
                    and enjoy your surprise. 🥺🎀
                </p>
            `;

        };

    }


    /* --------------------------------------
       CLOSE POPUP
    -------------------------------------- */

    if (closePopup) {

        closePopup.onclick = () => {

            popup.style.display = "none";

        };

    }


    /* --------------------------------------
       CLICK OUTSIDE POPUP
    -------------------------------------- */

    popup.addEventListener("click", (event) => {

        if (event.target === popup) {

            popup.style.display = "none";

        }

    });

}


/* ==========================================
   LAST CLICK → FOREVER
========================================== */

const lastClick =
    document.getElementById("LastClick");

if (lastClick) {

    lastClick.onclick = () => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href =
                "forever.html";

        }, 1000);

    };

}


/* ==========================================
   FOREVER BUTTON → FINAL
========================================== */

const foreverBtn =
    document.getElementById("foreverBtn");

if (foreverBtn) {

    foreverBtn.onclick = () => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href =
                "final.html";

        }, 1000);

    };

}


/* ==========================================
   FADE IN PAGE
========================================== */

window.addEventListener("load", () => {

    document.body.style.transition =
        "opacity .8s ease";

    document.body.style.opacity = "1";

});


