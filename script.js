function updateTimer() {
  const startDate = new Date("2022-06-28T21:00:00"); // Set your relationship start date
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const remainingDaysAfterYears = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
  );
  const remainingHours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainingMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `
        <div class="time-unit">${years} Years</div>
        <div class="time-unit">${remainingDaysAfterYears} Days</div>
        <div class="time-unit">${remainingHours} Hours</div>
        <div class="time-unit">${remainingMinutes} Minutes</div>
        <div class="time-unit">${remainingSeconds} Seconds</div>
    `;
}
setInterval(updateTimer, 1000);
updateTimer();

function updateQuote() {
  const quotes = [
    "Every second with you is a moment I cherish forever.",
    "Love is not about counting the days but making the days count.",
    "You are my today and all of my tomorrows.",
    "Time flies when I'm with you because every moment is precious.",
    "Forever isn't long enough with you by my side.",
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
setInterval(updateQuote, 5000);
updateQuote();

// Generate Falling Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000); // Remove heart after it falls
}
setInterval(createHeart, 500); // Create new heart every 500ms
