async function fetchNextRace() { 
    const response = await fetch("https://api.jolpi.ca/ergast/f1/2025/races");
    const data = await response.json();
    console.log("que me da", data);
    
    // Accede al array de carreras dentro de 'MRData.RaceTable.Races'
    const races = data.MRData.RaceTable.Races;
    
    // Buscar la próxima carrera (la que aún no ha ocurrido)
    const upcomingRace = races.find(race => new Date(race.date) > new Date());
    
    if (upcomingRace) {
        document.getElementById("race-name").textContent = upcomingRace.raceName;
        document.getElementById("race-date").textContent = upcomingRace.date;
        document.getElementById("race-location").textContent = upcomingRace.Circuit.Location.locality;
        startCountdown(upcomingRace.date);
    } else {
        document.getElementById("race-name").textContent = "No hay más carreras programadas.";
    }
}


// Función para iniciar la cuenta regresiva

function startCountdown(raceDate) {
    const raceTime = new Date(raceDate).getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const diff = raceTime - now;
        
        if (diff <= 0) {
            document.getElementById("timer").textContent = "¡Es día de carrera!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Ejecutar la API de F1
fetchNextRace();
console.log("fetchNextRace ejecutado");

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado correctamente en Netlify.");

    // Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navegacion = document.getElementById("navegacion");

    if (menuToggle && navegacion) {
        menuToggle.addEventListener("click", function () {
            navegacion.classList.toggle("activo");
        });
    }

    // Video Placeholder
    const video = document.querySelector(".videoF1 video");

    // Botones de Invitación
    const invitacion = document.getElementById("invitacion");
    const contenido = document.querySelector(".mainf1");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    console.log("losagarrra", invitacion, contenido, yesButton, noButton);

    if (invitacion && contenido && yesButton && noButton) {
        contenido.style.display = "none";

        yesButton.addEventListener("click", function () {
            console.log("click en el botón de sí");
            invitacion.style.display = "none";

            const loadingMessage = document.createElement("div");
            loadingMessage.innerHTML = "<h2>llenando de amor la página... ⏳</h2>";
            loadingMessage.style.position = "fixed";
            loadingMessage.style.top = "50%";
            loadingMessage.style.left = "50%";
            loadingMessage.style.transform = "translate(-50%, -50%)";
            loadingMessage.style.color = "white";
            loadingMessage.style.fontSize = "24px";
            document.body.appendChild(loadingMessage);

            video.addEventListener("canplaythrough", function () {
                document.body.removeChild(loadingMessage);
                contenido.style.display = "block";
            });

            setTimeout(() => {
                if (contenido.style.display === "none") {
                    document.body.removeChild(loadingMessage);
                    contenido.style.display = "block";
                }
            }, 5000);
        });

        noButton.addEventListener("click", function () {
            console.log("click en el botón de no");
            alert("Está bien, te esperaré cuando quieras 💔");
            window.location.href = "https://www.google.com/search?q=sad+images";
        });
    }
    
    setTimeout(() => {
        console.log("JavaScript cargado correctamente en Netlify.");
    }, 3000);
    
});
