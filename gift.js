
// ==========================================
// GIFT OPENING SCRIPT
// ==========================================

const giftBox = document.querySelector(".gift-box");
const giftLid = document.querySelector(".gift-lid");
const giftContainer = document.querySelector(".gift-container");
const clickText = document.querySelector(".click-text");

const giftMessage = document.getElementById("giftMessage");
const lastBtn = document.getElementById("lastBtn");
const heartBurst = document.getElementById("heartBurst");

// ==========================================
// SOUNDS
// ==========================================

const openSound = document.getElementById("openSound");
const magicSound = document.getElementById("magicSound");


// ==========================================
// GIFT CLICK
// ==========================================

if (giftBox) {

    giftBox.addEventListener("click", function () {

        // Prevent opening multiple times
        if (giftBox.classList.contains("opened")) {
            return;
        }

        giftBox.classList.add("opened");


        // ======================================
        // 🎁 PLAY GIFT OPENING SOUND
        // ======================================

        if (openSound) {

            openSound.currentTime = 0;

            openSound.play().catch(() => {});

        }


        // Open lid animation
        giftLid.style.transform =
            "translateY(-90px) rotate(-15deg)";


        // Stop shaking
        giftBox.style.animation = "none";


        // Create heart burst
        createHeartBurst();


        // ======================================
        // ✨ SHOW SURPRISE
        // ======================================

        setTimeout(() => {

            // Play magical reveal sound
            if (magicSound) {

                magicSound.currentTime = 0;

                magicSound.play().catch(() => {});

            }


            giftContainer.style.display = "none";

            clickText.style.display = "none";

            giftMessage.style.display = "block";

            lastBtn.style.display = "inline-block";


        }, 1000);

    });

}


// ==========================================
// HEART BURST
// ==========================================

function createHeartBurst() {

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("span");

        heart.className = "burst-heart";

        heart.innerHTML = "❤️";


        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "70%";


        heart.style.animationDuration =
            (Math.random() * 2 + 2) + "s";


        heart.style.fontSize =
            (Math.random() * 20 + 20) + "px";


        heartBurst.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 3000);

    }

}


// ==========================================
// RANDOM FLOATING HEARTS
// ==========================================

const floating =
    document.querySelector(".floating-hearts");


function createFloatingHeart() {

    if (!floating) return;


    const heart =
        document.createElement("span");

    heart.innerHTML = "❤️";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";


    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";


    floating.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(createFloatingHeart, 500);


// ==========================================
// LAST BUTTON
// ==========================================

if (lastBtn) {

    lastBtn.addEventListener("click", function (e) {

        e.preventDefault();


        document.body.style.transition =
            "opacity 2s ease";

        document.body.style.opacity = "0";


        setTimeout(() => {

            window.location.href = "future.html";

        }, 2000);

    });

}
