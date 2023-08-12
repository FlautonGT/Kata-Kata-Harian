const dailyWords = [
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "In the middle of every difficulty lies opportunity.",
  "Your time is limited, don't waste it living someone else's life.",
  // Add more daily words here
];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * dailyWords.length);
  return dailyWords[randomIndex];
}

function updateDailyWord() {
  const dailyWordElement = document.getElementById("dailyWord");
  dailyWordElement.textContent = getRandomWord();
}

function sendWhatsAppMessage() {
  const wordInput = document.getElementById("wordInput");
  const word = wordInput.value;
  
  if (word) {
    const message = `Nih Bang Kata Kata : "${word}".`;
    const encodedMessage = encodeURIComponent(message);
    
    // Update the WhatsApp link to include the message
    const whatsappLink = document.getElementById("whatsappLink");
    whatsappLink.href = `https://wa.me/6283817424428/?text=${encodedMessage}`;
  } else {
    alert("Please enter a word before sending the request.");
  }
}

// Initial setup
updateDailyWord();
setInterval(updateDailyWord, 3600000); // Update every 1 hour (in milliseconds)

// Set up the Request button
const requestButton = document.getElementById("requestButton");
requestButton.addEventListener("click", sendWhatsAppMessage);
