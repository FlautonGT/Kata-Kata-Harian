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

function requestWord() {
  const email = prompt("Please enter your email:");
  if (email) {
    const word = getRandomWord();

    // Send the email and word to the server
    fetch("send_email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, word: word }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Word requested successfully! It will be sent to your email.");
      } else {
        alert("Failed to send email. Please try again later.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
  }
}

// Initial update
updateDailyWord();

// Update every hour
setInterval(updateDailyWord, 3600000); // Update every 1 hour (in milliseconds)
