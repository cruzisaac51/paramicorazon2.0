//import confetti from 'https://cdn.skypack.dev/canvas-confetti';
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const imageDisplay = document.getElementById('imageDisplay');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseButtons = document.getElementById('responseButtons');

let noClickCount = 0;
let buttonHeight = 48; // Starting height in pixels
let buttonWidth = 80;
let fontSize = 20; // Starting font size in pixels
const imagePaths = [
  "./images/image1.gif",
  "./images/image2.gif",
  "./images/image3.gif",
  "./images/image4.gif",
  "./images/image5.gif",
  "./images/image6.gif",
  "./images/image7.gif",
  "./images/image8.gif",
  "./images/image9.gif",
  "./images/image10.gif",
  "./images/image11.gif",
  "./images/image12.gif"
];

const preloadedImages = {};
let imagesLoaded = 0;
//const loadingImage = "./images/loading.gif"; // Puedes usar un emoji o imagen de carga

// Establecer imagen de carga antes de precargar los GIFs
imageDisplay.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' font-size='24'%3E⏳%3C/text%3E%3C/svg%3E";

// Función para precargar imágenes
function preloadImages() {
  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      imagesLoaded++;
      preloadedImages[path] = img;

      // Si todas las imágenes están cargadas, muestra la primera imagen
      if (imagesLoaded === imagePaths.length) {
        imageDisplay.src = imagePaths[0];
      }
    };
  });
}

// Llamar a la función de precarga
preloadImages();

noButton.addEventListener('click', function() {
  if (noClickCount < 9) {
    noClickCount++;
    // Obtener el ancho y alto de la ventana
    let maxX = window.innerWidth - buttonWidth;
    let maxY = window.innerHeight - buttonHeight;

    // Generar posiciones aleatorias dentro de la ventana
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    // Aplicar nuevas posiciones
    noButton.style.position = 'absolute'; // Asegurar que el botón puede moverse libremente
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    imageDisplay.src = imagePaths[noClickCount];
    buttonHeight += 35; // Increase height by 5px on each click
    buttonWidth += 35;
    fontSize += 25; // Increase font size by 1px on each click
    yesButton.style.height = `${buttonHeight}px`; // Update button height
    yesButton.style.width = `${buttonWidth}px`;
    yesButton.style.fontSize = `${fontSize}px`; // Update font size
    if (noClickCount < 10) {
      noButton.textContent = ["No", "Are you sure?", "Pookie please", "di que sii :(", "Rompes mi corazón", "vo a llorar...","porfavooor","y te quiero mas que ayer","di que siiiiiii", "te dare muchos besos"][noClickCount];
      if (noClickCount >= 9) {
        noButton.style.display = 'none'; // Hide the button after 10 clicks
      }
    }
  }
});

yesButton.addEventListener('click', () => {
  imageDisplay.src = './images/image13.gif';
  //imageDisplay.src = './images/image7.gif'; // Change to image7.gif
  valentineQuestion.textContent = "Me Encantas!! :3"; // Change the question text
  responseButtons.style.display = 'none'; // Hide both buttons
  //confetti(); // Trigger confetti animation
  // Número de WhatsApp (reemplázalo con el real)
  let phoneNumber = "528123095728"; // Formato internacional sin + ni espacios (Ejemplo para México: 5211234567890)

  // Mensaje que se enviará por WhatsApp
  let message = "¡Siii! 😍 Quiero ser tu Valentín 💖✨";

  // Crear enlace de WhatsApp
  let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Redirigir a WhatsApp
  window.open(whatsappURL, "_blank");
});