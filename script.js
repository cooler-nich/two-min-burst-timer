let countdownInterval;
let tickInterval;

document.getElementById('startButton').addEventListener('click', function () {
    let interval = parseInt(document.getElementById('intervalSelect').value);

    // Start ticking sound and countdown at the same time
    playAudio();
    startCountdown(interval);

    // Set main repeating interval
    tickInterval = setInterval(() => {
        playAudio();
        startCountdown(interval);
    }, interval);

    document.getElementById('startButton').disabled = true;
});

function playAudio() {
    const audio = document.getElementById('audio');
    audio.currentTime = 0;
    audio.play();
}

function startCountdown(durationMs) {
    // Clear any existing countdown
    clearInterval(countdownInterval);

    let duration = durationMs / 1000; // convert to seconds
    let countdownDisplay = document.getElementById('countdown');

    function updateCountdown() {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        countdownDisplay.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (duration <= 0) {
            clearInterval(countdownInterval);
        }

        duration--;
    }

    updateCountdown(); // Show immediately
    countdownInterval = setInterval(updateCountdown, 1000);
}