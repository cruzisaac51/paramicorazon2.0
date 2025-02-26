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

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navegacion = document.getElementById("navegacion");

    menuToggle.addEventListener("click", function () {
        navegacion.classList.toggle("activo"); // Agrega o quita la clase "activo"
    });
});

// Ejecutar la función al cargar la página
fetchNextRace();
