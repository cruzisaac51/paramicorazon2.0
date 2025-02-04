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
});