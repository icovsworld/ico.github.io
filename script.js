document.addEventListener("DOMContentLoaded", function() {
    const lowerLink = document.getElementById("lower-link");
    const vuotoLink = document.getElementById("vuoto-link");
    const upcyclingLink = document.getElementById("upcycling-link");
    const valdenLink = document.getElementById("valden-link");
    const cvLink = document.getElementById("cv-link");
    const lowerContent = document.getElementById("lower-content");
    const vuotoContent = document.getElementById("vuoto-content");
    const upcyclingContent = document.getElementById("upcycling-content");
    const valdenContent = document.getElementById("valden-content");
    const cvContent = document.getElementById("cv-content");
    const homeLink = document.getElementById("home-link");
    const homeContent = document.getElementById("home-content");

    lowerLink.addEventListener("click", function(event) {
        event.preventDefault();
        lowerContent.style.display = "block";
        vuotoContent.style.display = "none";
        upcyclingContent.style.display = "none";
        valdenContent.style.display = "none";
        cvContent.style.display = "none";
        homeContent.style.display = "none";

    });

    vuotoLink.addEventListener("click", function(event) {
        event.preventDefault();
        vuotoContent.style.display = "block";
        lowerContent.style.display = "none";
        upcyclingContent.style.display = "none";
        valdenContent.style.display = "none";
        cvContent.style.display = "none";
        homeContent.style.display = "none";

    });

    upcyclingLink.addEventListener("click", function(event) {
        event.preventDefault();
        upcyclingContent.style.display = "block";
        lowerContent.style.display = "none";
        vuotoContent.style.display = "none";
        valdenContent.style.display = "none";
        cvContent.style.display = "none";
        homeContent.style.display = "none";

    });
    
    valdenLink.addEventListener("click", function(event) {
        event.preventDefault();
        valdenContent.style.display = "block";
        lowerContent.style.display = "none";
        vuotoContent.style.display = "none";
        upcyclingContent.style.display = "none";
        cvContent.style.display = "none";
        homeContent.style.display = "none";

    });

    cvLink.addEventListener("click", function(event) {
        event.preventDefault();
        cvContent.style.display = "block";
        lowerContent.style.display = "none";
        vuotoContent.style.display = "none";
        upcyclingContent.style.display = "none";
        valdenContent.style.display = "none";
        homeContent.style.display = "none";

    });

    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        homeContent.style.display = "block";
        lowerContent.style.display = "none";
        vuotoContent.style.display = "none";
        upcyclingContent.style.display = "none";
        valdenContent.style.display = "none";
        cvContent.style.display = "none";
    });
});




const cosino1 = document.querySelector('.cosino1');
const audio = document.getElementById('myAudio');

cosino1.addEventListener('mouseenter', function() {
    // Riproduci la canzone
    audio.play();
});

cosino1.addEventListener('mouseleave', function() {
    // Metti in pausa la canzone
    audio.pause();
});



