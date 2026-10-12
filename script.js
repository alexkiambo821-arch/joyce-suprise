const message = `

**Dear Natasha, ❤️

If there's one thing I wish you could see, it's how beautifully you've found your way into my heart without even trying. ❤️

There's something about you that makes me want to do better, love deeper, and become someone who can give you the kind of happiness you deserve. It's not just about the smiles, the little moments, or the way you make me feel; it's about the thought of having you beside me and building something real with you. 🫶🏽❤️

I know love isn't just sweet words and promises. It's patience, effort, understanding, and choosing someone even when things aren't easy. And if life gives me the chance to love you, I want to show you that my feelings aren't just something I say; they're something I'm willing to stand by.

Natasha, I don't just want a place in your heart; I want to be someone who makes it feel safe to love. And if I could make one wish today, it would be for the chance to turn these feelings into a beautiful story with you. ❤️🌹

— Alex, with a heart that keeps choosing you. ❤️

`;

let index = 0;

function typeLetter(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }
}
function openWebsite() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("main").style.display = "block";
    document.getElementById("letter").style.display = "block";
    document.getElementById("special").style.display = "block";
    document.getElementById("reasons").style.display = "block";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("journey").style.display = "block";
    document.getElementById("ending").style.display = "block";
    document.getElementById("music").style.display = "block";
    
    
    const song = document.getElementById("loveSong");

if (song) {
    song.volume = 0.8;

    song.play().catch(error => {
        console.log("Autoplay blocked:", error);
    });
}
    startPetals();
    startSparkles();
    typeLetter();
}

function startPetals() {

    setInterval(() => {

        const petal = document.createElement("div");

        petal.innerHTML = "🌹";

        petal.style.position = "fixed";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.top = "-50px";
        petal.style.fontSize = "28px";
        petal.style.pointerEvents = "none";
        petal.style.zIndex = "999";

        const duration = 6 + Math.random() * 4;

        petal.animate([
            { transform: "translateY(-50px) rotate(0deg)" },
            { transform: "translateY(110vh) rotate(360deg)" }
        ], {
            duration: duration * 1000,
            easing: "linear"
        });

        document.body.appendChild(petal);

        setTimeout(() => petal.remove(), duration * 1000);

    }, 500);

}

function startSparkles() {

    setInterval(() => {

        const sparkle = document.createElement("div");

        sparkle.innerHTML = "✨";

        sparkle.style.position = "fixed";
        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = "-20px";
        sparkle.style.fontSize = "18px";
        sparkle.style.pointerEvents = "none";
        sparkle.style.zIndex = "999";

        const duration = 4 + Math.random() * 3;

        sparkle.animate([
            { transform: "translateY(-20px)" },
            { transform: "translateY(110vh)" }
        ], {
            duration: duration * 1000,
            easing: "linear"
        });

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), duration * 1000);

    }, 700);

}
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".special-card").forEach(card => {
    observer.observe(card);
});

document.querySelectorAll(".special-card").forEach(card=>{

observer.observe(card);

});
function showFinale() {

    document.getElementById("surpriseBtn").style.display = "none";

    document.getElementById("finalMessage").style.display = "block";

    startFireworks();

}
    
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function startFireworks() {

    let particles = [];

    function explode() {

        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6;

        const colors = [
            "#FFD700",
            "#ff4d6d",
            "#ffffff",
            "#00c2ff",
            "#ff9900",
            "#ff66cc"
        ];

        for (let i = 0; i < 80; i++) {

            particles.push({

                x: x,
                y: y,

                dx: (Math.random() - 0.5) * 10,
                dy: (Math.random() - 0.5) * 10,

                size: Math.random() * 4 + 2,

                color: colors[Math.floor(Math.random() * colors.length)],

                life: 100

            });

        }

    }

    const launcher = setInterval(explode, 500);

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {

            p.x += p.dx;
            p.y += p.dy;

            p.dy += 0.05;

            p.life--;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            if (p.life <= 0) {
                particles.splice(i, 1);
            }

        });

        requestAnimationFrame(animate);

    }

    animate();

    setTimeout(() => {

        clearInterval(launcher);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }, 10000);

}
