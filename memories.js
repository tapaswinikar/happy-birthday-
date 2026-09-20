// ==========================================
// ELEMENTS
// ==========================================

const photoCards = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeBtn");

const floatingHearts = document.querySelector(".floating-hearts");

// ==========================================
// LIGHTBOX
// ==========================================

photoCards.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = photo.src;

        lightboxImg.alt = photo.alt;

        document.body.style.overflow = "hidden";

    });

});

// ==========================================
// CLOSE BUTTON
// ==========================================

closeBtn.addEventListener("click", closeLightbox);

// ==========================================
// CLICK OUTSIDE IMAGE
// ==========================================

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        closeLightbox();

    }

});

// ==========================================
// ESC KEY
// ==========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeLightbox();

    }

});

// ==========================================
// CLOSE FUNCTION
// ==========================================

function closeLightbox(){

    lightbox.style.display="none";

    document.body.style.overflowY="auto";

}

// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart(){

    const heart=document.createElement("span");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    floatingHearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,450);

// ==========================================
// PHOTO ANIMATION
// ==========================================

const cards=document.querySelectorAll(".photo-card");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(60px)";

    card.style.transition=".8s";

    observer.observe(card);

});