// ==========================================
// FLOATING HEARTS
// ==========================================

const heartContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 25 + 15) + "px";

    heart.style.animationDuration =
        (Math.random() * 4 + 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 600);


// ==========================================
// PHOTO REVEAL ANIMATION
// ==========================================

window.addEventListener("load", () => {

    const photos =
        document.querySelectorAll(".photo-card");

    photos.forEach((photo, index) => {

        setTimeout(() => {

            photo.style.transition =
                "1.2s ease";

            photo.style.opacity = "1";

            photo.style.transform =
                "scale(1)";

        }, 300 + (index * 300));

    });

});