function openWebsite() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("main").style.display = "block";

    startPetals();

    startSparkles();

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
