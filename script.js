const startBtn = document.getElementById("startBtn");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");

startBtn.addEventListener("click", () => {
    startBtn.style.display="none";
    mainContent.classList.remove("hidden");

    // cinematic title
    const cinematic = document.querySelector(".cinematic");
    setTimeout(()=>{ cinematic.style.opacity=1; cinematic.style.transform="scale(1)"; },500);

    music.play();
    animateMessages();
    showBouquet();
    startBalloons();
    startHearts();
    startConfetti();
});

// Fade-in messages
function animateMessages(){
    const messages = document.querySelectorAll(".message");
    messages.forEach((msg, i)=>{
        setTimeout(()=>{ msg.classList.add("show"); }, (i+1)*2000);
    });
}

// Show bouquet
function showBouquet(){
    const bouquet = document.querySelector(".bouquet");
    setTimeout(()=>{ bouquet.style.opacity=1; }, 6000);
}

// Balloons
function startBalloons(){
    setInterval(()=>{
        let balloon=document.createElement("div");
        balloon.classList.add("balloon");
        balloon.innerHTML="🎈";
        balloon.style.left=Math.random()*100+"vw";
        document.body.appendChild(balloon);
        setTimeout(()=>{ balloon.remove(); },10000);
    },800);
}

// Hearts
function startHearts(){
    setInterval(()=>{
        let heart=document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML="❤️";
        heart.style.left=Math.random()*100+"vw";
        heart.style.fontSize=Math.random()*20+10+"px";
        document.body.appendChild(heart);
        setTimeout(()=>{ heart.remove(); },6000);
    },300);
}

// Confetti
function startConfetti(){
    const canvas=document.getElementById("confetti");
    const ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    const pieces=[];
    for(let i=0;i<120;i++){
        pieces.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            size:Math.random()*8+2,
            speed:Math.random()*3+1
        });
    }

    function update(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle="white";
        pieces.forEach(p=>{
            ctx.fillRect(p.x,p.y,p.size,p.size);
            p.y+=p.speed;
            if(p.y>canvas.height){ p.y=0; }
        });
        requestAnimationFrame(update);
    }
    update();
}