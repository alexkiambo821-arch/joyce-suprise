const message = `

Dear Joyce,

Happy Girlfriends' Day. ❤️

Some people enter our lives so quietly that they don't even realize the impact they have.

I just wanted to remind you today that your smile, your kindness and the beautiful person you are never go unnoticed.

This little website is simply my way of saying thank you for being someone worth appreciating.

I hope today brings you countless reasons to smile.

— Alex 🌹

`;

let index = 0;

function typeLetter(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

function openWebsite(){

    document.getElementById("welcome").style.display="none";

    document.getElementById("main").style.display="block";

    document.getElementById("letter").style.display="block";

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
