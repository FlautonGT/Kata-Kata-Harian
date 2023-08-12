const dailyWords = [
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Unknown"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  // Add more daily words here
];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * dailyWords.length);
  return dailyWords[randomIndex];
}

function updateDailyWord(word) {
  const dailyWordElement = document.getElementById("dailyWord");
  dailyWordElement.innerHTML = `<em>"${word.text}"</em> - <strong>${word.author}</strong>`;
}

function refreshWord() {
  const randomWord = getRandomWord();
  updateDailyWord(randomWord);
}

function sendWhatsAppMessage() {
  const word = getRandomWord();
  const message = `Hello! Please send me the word: "${word.text}" by ${word.author}. My email: [Your Email]`;
  const encodedMessage = encodeURIComponent(message);
  
  // Update the WhatsApp link to include the message
  const whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.href = `https://wa.me/6283817424428/?text=${encodedMessage}`;
}

// Initial setup
const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", refreshWord);

updateDailyWord(getRandomWord());
setInterval(refreshWord, 3600000); // Update every 1 hour (in milliseconds)

// Set up the WhatsApp link
const whatsappLink = document.getElementById("whatsappLink");
whatsappLink.addEventListener("click", sendWhatsAppMessage);
