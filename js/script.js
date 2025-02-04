import confetti from 'https://cdn.skypack.dev/canvas-confetti';
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
  "./images/image7.gif"
];

noButton.addEventListener('click', function() {
  if (noClickCount < 5) {
    noClickCount++;
    imageDisplay.src = imagePaths[noClickCount];
    buttonHeight += 35; // Increase height by 5px on each click
    buttonWidth += 35;
    fontSize += 25; // Increase font size by 1px on each click
    yesButton.style.height = `${buttonHeight}px`; // Update button height
    yesButton.style.width = `${buttonWidth}px`;
    yesButton.style.fontSize = `${fontSize}px`; // Update font size
    if (noClickCount < 6) {
      noButton.textContent = ["No", "Are you sure?", "Pookie please", "Don't do this to me :(", "You're breaking my heart", "I'm gonna cry..."][noClickCount];
    }
  }
});

yesButton.addEventListener('click', () => {
  imageDisplay.src = './images/image7.gif'; // Change to image7.gif
  valentineQuestion.textContent = "Yayyy!! :3"; // Change the question text
  responseButtons.style.display = 'none'; // Hide both buttons
  confetti(); // Trigger confetti animation
});