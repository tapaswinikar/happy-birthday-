/* =========================================
   FINAL SURPRISE — MOBILE OPTIMIZED JS
========================================= */


/* =========================================
   FLOATING HEARTS
========================================= */

const heartsContainer =
    document.getElementById("hearts");

const heartTypes = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "🌸"
];
const loveContainer = document.getElementById("love");

function createLoveText() {
    const love = document.createElement("div");

    love.className = "love-text";
    love.innerHTML = "I LOVE U ❤️";

    love.style.left = Math.random() * 90 + "vw";
    love.style.animationDuration = (6 + Math.random() * 5) + "s";

    loveContainer.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 11000);
}

setInterval(createLoveText, 1200);

const MAX_HEARTS = 30;

let heartInterval = null;


/* =========================================
   CREATE HEART
========================================= */

function createHeart() {

    if (!heartsContainer) return;

    if (
        heartsContainer.children.length >=
        MAX_HEARTS
    ) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 14) + "px";

    const duration =
        8 + Math.random() * 4;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(
        heart
    );

    heart.addEventListener(
        "animationend",
        () => {
            heart.remove();
        },
        {
            once: true
        }
    );
}


/* =========================================
   START HEARTS
========================================= */

function startHeartAnimation() {

    if (heartInterval) return;

    heartInterval =
        setInterval(
            createHeart,
            1500
        );
}


/* =========================================
   STOP HEARTS
========================================= */

function stopHeartAnimation() {

    if (!heartInterval) return;

    clearInterval(
        heartInterval
    );

    heartInterval = null;
}


/* =========================================
   INITIAL HEARTS
========================================= */

for (
    let i = 0;
    i < 10;
    i++
) {

    setTimeout(
        createHeart,
        i * 700
    );
}

startHeartAnimation();


/* =========================================
   PAGE VISIBILITY
========================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            stopHeartAnimation();

        } else {

            /*
               Don't restart hearts while
               the video is playing.
            */

            if (
                !video ||
                video.paused
            ) {
                startHeartAnimation();
            }
        }

    }
);


/* =========================================
   BACKGROUND MUSIC
========================================= */

const music =
    document.getElementById(
        "backgroundMusic"
    );

const video =
    document.getElementById(
        "surpriseVideo"
    );


let musicStarted = false;


function startMusic() {

    if (!music || musicStarted) return;

    music.volume = 0.25;

    const promise =
        music.play();

    if (promise !== undefined) {

        promise
            .then(() => {

                musicStarted = true;

            })
            .catch(() => {

                /*
                   If the browser blocks it,
                   another user interaction
                   will try again.
                */

            });
    }
}


/*
   Don't use { once: true } here.
   If the first attempt is blocked,
   we still get another chance.
*/

document.addEventListener(
    "pointerdown",
    startMusic,
    {
        passive: true
    }
);


/* =========================================
   VIDEO + PERFORMANCE MODE
========================================= */

if (video) {

    /* -------------------------------
       VIDEO PLAY
    -------------------------------- */

    video.addEventListener(
        "play",
        () => {

            /*
               Stop generating new hearts
               while the video is playing.
            */

            stopHeartAnimation();


            /*
               Remove existing hearts so
               the browser has less work.
            */

            if (heartsContainer) {

                heartsContainer
                    .replaceChildren();

            }


            /*
               Tell CSS that the video is
               currently playing.
            */

            document.body.classList.add(
                "video-playing"
            );


            /*
               Lower background music.
            */

            if (music) {

                music.volume = 0.05;

            }

        }
    );


    /* -------------------------------
       VIDEO PAUSE
    -------------------------------- */

    video.addEventListener(
        "pause",
        () => {

            document.body.classList.remove(
                "video-playing"
            );


            if (music) {

                music.volume = 0.25;

            }


            /*
               Bring hearts back after
               the video is paused.
            */

            startHeartAnimation();

        }
    );


    /* -------------------------------
       VIDEO ENDED
    -------------------------------- */

    video.addEventListener(
        "ended",
        () => {

            document.body.classList.remove(
                "video-playing"
            );


            if (music) {

                music.volume = 0.25;

            }


            startHeartAnimation();

        }
    );
}


/* =========================================
   PAGE FADE-IN
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity =
            "1";

    }
);