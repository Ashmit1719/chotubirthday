document.addEventListener("DOMContentLoaded", function () {
    // Floating "I love you, Sneha"
    const floatingText = document.createElement("div");
    floatingText.innerText = "I love you, Sneha!";
    floatingText.style.position = "fixed";
    floatingText.style.bottom = "20px";
    floatingText.style.right = "20px";
    floatingText.style.fontSize = "24px";
    floatingText.style.color = "pink";
    floatingText.style.fontWeight = "bold";
    document.body.appendChild(floatingText);

    // Confetti animation
    const confettiSettings = { target: "confetti-canvas", max: 150, size: 1.2 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
});