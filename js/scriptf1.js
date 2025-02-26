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
// function startCountdown(raceDate) {
//     const raceTime = new Date(raceDate).getTime();
    
//     setInterval(() => {
//         const now = new Date().getTime();
//         const diff = raceTime - now;
        
//         if (diff <= 0) {
//             document.getElementById("timer").textContent = "¡Es día de carrera!";
//             return;
//         }

//         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
//         document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
//     }, 1000);
// }

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
    const placeholder = document.querySelector(".video-placeholder");

    if (video && placeholder) {
        video.addEventListener("canplay", function () {
            placeholder.style.display = "none";
            video.style.display = "block";
        });
    }

    // Botones de Invitación
    const invitacion = document.getElementById("invitacion");
    const contenido = document.querySelector(".mainf1");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    if (invitacion && contenido && yesButton && noButton) {
        contenido.style.display = "none";

        yesButton.addEventListener("click", function () {
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
            alert("Está bien, te esperaré cuando quieras 💔");
            window.location.href = "https://www.google.com/search?q=sad+images";
        });
    }

    // Ejecutar la API de F1
    fetchNextRace();
});


// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.getElementById("menu-toggle");
//     const navegacion = document.getElementById("navegacion");

//     menuToggle.addEventListener("click", function () {
//         navegacion.classList.toggle("activo"); // Agrega o quita la clase "activo"
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const video = document.querySelector(".videoF1 video");
//     const placeholder = document.querySelector(".video-placeholder");

//     video.addEventListener("canplay", function () {
//         placeholder.style.display = "none"; // Ocultar imagen
//         video.style.display = "block"; // Mostrar video
//     });
// });


// // Ejecutar la función al cargar la página
// fetchNextRace();


// document.addEventListener("DOMContentLoaded", function () {
//     const invitacion = document.getElementById("invitacion");
//     const contenido = document.querySelector(".mainf1");
//     const video = document.querySelector(".videoF1 video");
//     const yesButton = document.getElementById("yesButton");
//     const noButton = document.getElementById("noButton");

//     // Ocultar el contenido al inicio
//     contenido.style.display = "none";

//     yesButton.addEventListener("click", function () {
//         invitacion.style.display = "none"; // Oculta la invitación

//         // Mostrar una pantalla de carga mientras se carga el video
//         const loadingMessage = document.createElement("div");
//         loadingMessage.innerHTML = "<h2>llenando de amor la pagina... ⏳</h2>";
//         loadingMessage.style.position = "fixed";
//         loadingMessage.style.top = "50%";
//         loadingMessage.style.left = "50%";
//         loadingMessage.style.transform = "translate(-50%, -50%)";
//         loadingMessage.style.color = "white";
//         loadingMessage.style.fontSize = "24px";
//         document.body.appendChild(loadingMessage);

//         // Esperar a que el video esté listo
//         video.addEventListener("canplaythrough", function () {
//             document.body.removeChild(loadingMessage); // Eliminar el mensaje de carga
//             contenido.style.display = "block"; // Mostrar el contenido
//         });

//         // Si el video no carga en 5 segundos, mostrar el contenido de todos modos
//         setTimeout(() => {
//             if (contenido.style.display === "none") {
//                 document.body.removeChild(loadingMessage);
//                 contenido.style.display = "block";
//             }
//         }, 5000);
//     });

//     noButton.addEventListener("click", function () {
//         alert("Está bien, te esperaré cuando quieras 💔");
//         window.location.href = "https://www.google.com/search?sca_esv=885f4de560f195c7&rlz=1C1CHBD_esMX1099MX1099&sxsrf=AHTn8zq03Zj-Pi8AX_lKnWBsqc6v9upJJQ:1740604284618&q=sad+images&udm=2&fbs=ABzOT_BnMAgCWdhr5zilP5f1cnRvK9uZj3HA_MTJAA6lXR8yQElaIApxtef1-RKg2CcwxXYFPnQ3n4nbwZZO6RCmbc-sT1H_aKpp_RnGJowF9zN6tkTCWdfQPJ60Sf3GPKs8TDK7WpavUdY7QeLc1RZarkpnsxMsOEidpdYA4Y0GwEKdA1xCczwFIH1mPoOW5CW0Z3D8rKZFw4gcbxo7OomUxX-sByITCw&sa=X&sqi=2&ved=2ahUKEwiN59CgoOKLAxWJLtAFHZ1PIeYQtKgLegQIDhAB&biw=1920&bih=911&dpr=1"; // Puedes cambiar la URL
//     });
// });
