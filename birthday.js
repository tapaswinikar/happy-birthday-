// ==========================================
// Elements
// ==========================================

const candles = document.querySelectorAll(".candle");
const flames = document.querySelectorAll(".flame");

const birthdayMessage = document.getElementById("birthdayMessage");
const nextBtn = document.getElementById("nextBtn");

const confetti = document.getElementById("confetti");

const birthdayMusic = document.getElementById("birthdayMusic");
const blowSound = document.getElementById("blowSound");

let blownCandles = 0;

// ==========================================
// Blow Out Candles
// ==========================================

candles.forEach((candle,index)=>{

    candle.addEventListener("click",()=>{

        if(flames[index].style.display==="none") return;

        flames[index].style.display="none";

        blownCandles++;

        if(blowSound){
            blowSound.currentTime=0;
            blowSound.play().catch(()=>{});
        }

        if(blownCandles===candles.length){

            celebrate();

        }

    });

});

// ==========================================
// Celebration
// ==========================================

function celebrate(){

    createConfetti();

    birthdayMessage.style.display="block";

    birthdayMessage.style.animation="fadeUp 1s ease forwards";

    nextBtn.style.display="inline-block";

    nextBtn.style.animation="fadeUp 1.2s ease forwards";

    if(birthdayMusic){

        birthdayMusic.play().catch(()=>{});

    }

}

// ==========================================
// Confetti
// ==========================================

function createConfetti(){

    const colors=[
        "#ff4d88",
        "#ffd700",
        "#00e5ff",
        "#7cff6b",
        "#ffffff",
        "#ff9800",
        "#c77dff"
    ];

    for(let i=0;i<180;i++){

        const piece=document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.background=
            colors[Math.floor(Math.random()*colors.length)];

        piece.style.width=(6+Math.random()*8)+"px";

        piece.style.height=(10+Math.random()*12)+"px";

        piece.style.animationDuration=
            (3+Math.random()*3)+"s";

        piece.style.transform=
            `rotate(${Math.random()*360}deg)`;

        confetti.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },7000);

    }

}

// ==========================================
// Fade Animation
// ==========================================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fadeUp{

from{

opacity:0;

transform:translateY(40px);

}

to{

opacity:1;

transform:translateY(0);

}

}

`;

document.head.appendChild(style);

// ==========================================
// Auto Sparkles
// ==========================================

setInterval(()=>{

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(12+Math.random()*20)+"px";

    star.style.pointerEvents="none";

    star.style.opacity="1";

    star.style.transition="2s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.opacity="0";

    },100);

    setTimeout(()=>{

        star.remove();

    },2000);

},350);