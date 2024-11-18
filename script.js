// Countdown Timer Logic
function countdownToBirthday(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("message").innerHTML = "🎉 Happy Birthday! 🎂";
            document.getElementById("countdown").style.display = "none";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
}

// Set the target date: 19 November 2024
const birthdayDate = new Date("2024-11-19T00:00:00").getTime();
countdownToBirthday(birthdayDate);
