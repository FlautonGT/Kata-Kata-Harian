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

updateDailyWord();
setInterval(updateDailyWord, 3600000); // Update every 1 hour (in milliseconds)
