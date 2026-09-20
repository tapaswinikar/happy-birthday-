// ==========================================
// ELEMENTS
// ==========================================

const reasonText = document.getElementById("reasonText");
const currentReason = document.getElementById("currentReason");
const showReason = document.getElementById("showReason");
const finishMessage = document.getElementById("finishMessage");
const nextBtn = document.getElementById("nextBtn");
const confetti = document.getElementById("confetti");
const floatingHearts = document.querySelector(".floating-hearts");
const clickSound = document.getElementById("clickSound");

// ==========================================
// REASONS
// Replace these with your own later ❤️
// ==========================================

const reasons = [

"You always make me smile ❤️",
"You care about me.",
"You understand me.",
"You believe in me.",
"You make me feel special.",
"Your smile is beautiful.",
"I love your eyes.",
"You make my bad days better.",
"You always support me.",
"You make me laugh.",
"I feel safe with you.",
"You respect me.",
"You inspire me.",
"You are kind.",
"You are honest.",
"You never stop trying.",
"You always listen to me.",
"You make me feel loved.",
"You are my comfort.",
"You are my happiness.",

"I miss you when you're away.",
"You are my favorite person.",
"You make every day better.",
"I trust you.",
"You encourage me.",
"You make life exciting.",
"You are my best friend.",
"You are patient.",
"You are caring.",
"You make ordinary moments special.",

"You accept me as I am.",
"You always surprise me.",
"You have a beautiful heart.",
"You make me feel lucky.",
"You make me stronger.",
"You always cheer me up.",
"I love talking to you.",
"I love your voice.",
"You are adorable.",
"You always understand my silence.",

"You make me feel important.",
"You are thoughtful.",
"You always remember little things.",
"You never give up.",
"You make my heart race.",
"You are my peace.",
"You are my sunshine.",
"You make me proud.",
"You are unique.",
"You complete me.",

"You make me believe in love.",
"You make every memory precious.",
"You are my favorite notification.",
"You make distance feel smaller.",
"You make every hug special.",
"You are my safe place.",
"You care about my happiness.",
"You are sweet.",
"You make me laugh the hardest.",
"You bring positivity.",

"You inspire me every day.",
"You are always there.",
"You make me dream bigger.",
"You make life beautiful.",
"You are my biggest blessing.",
"You are my lucky charm.",
"You are amazing.",
"You make every moment magical.",
"You always know what to say.",
"You are unforgettable.",

"You are my home.",
"You make my heart smile.",
"You make every day worth living.",
"You are my forever.",
"You are my favorite hello.",
"You are my hardest goodbye.",
"You are my happiness.",
"You make me feel complete.",
"You always believe in us.",
"You are my peace of mind.",

"You are one of a kind.",
"You make me feel confident.",
"You understand my heart.",
"You are incredibly thoughtful.",
"You always make me laugh.",
"You make every photo beautiful.",
"You always stay in my heart.",
"You make me feel alive.",
"You make every dream sweeter.",
"You are my greatest gift.",

"You always make me smile without trying.",
"You are my favorite memory.",
"You make my world brighter.",
"You make everything feel possible.",
"You are my forever reason.",
"You are my today.",
"You are my tomorrow.",
"You are my always.",
"You are my everything.",
"And I'll keep finding more reasons forever... ❤️"

];

// ==========================================

let index = 0;

// ==========================================
// SHOW REASON
// ==========================================

showReason.addEventListener("click", () => {

    if(clickSound){

        clickSound.currentTime = 0;

        clickSound.play().catch(()=>{});

    }

    if(index < reasons.length){

        currentReason.textContent = index + 1;

        reasonText.style.opacity = "0";

        setTimeout(()=>{

            reasonText.textContent = reasons[index];

            reasonText.style.opacity = "1";

        },200);

        index++;

    }

    if(index === reasons.length){

        showReason.disabled = true;

        showReason.textContent = "All Reasons Revealed ❤️";

        finishMessage.style.display = "block";

        nextBtn.style.display = "inline-block";

        createConfetti();

    }

});

// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,500);

// ==========================================
// CONFETTI
// ==========================================

function createConfetti(){

    const colors = [

        "#ff4d88",
        "#ffd700",
        "#00d4ff",
        "#7cff6b",
        "#ffffff",
        "#ff9800",
        "#b266ff"

    ];

    for(let i=0;i<180;i++){

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random()*100 + "vw";

        piece.style.background =
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDuration =
        (3 + Math.random()*3) + "s";

        piece.style.transform =
        `rotate(${Math.random()*360}deg)`;

        confetti.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },7000);

    }

}