document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    
    function playMusic() {
        music.volume = 0.5; // Set a soft volume level
        music.play().catch(error => console.log("Music autoplay prevented by browser. Play manually."));
    }
    
    document.body.addEventListener("click", playMusic, { once: true });
});