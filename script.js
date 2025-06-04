let countdownInterval;
let nextTriggerTime = null;

document.getElementById('startButton').addEventListener('click', function () {
    let interval = parseInt(document.getElementById('intervalSelect').value);
    nextTriggerTime = Date.now() + interval;

    startCountdown(interval); // Start countdown only
    document.getElementById('startButton').disabled = true;
});


function playAudio() {
    const audio = document.getElementById('audio');
    audio.currentTime = 0;
    audio.play();
}

function startCountdown(intervalMs) {
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        let now = Date.now();
        let remaining = nextTriggerTime - now;

        if (remaining <= 0) {
            playAudio();
            nextTriggerTime = Date.now() + intervalMs;
            remaining = intervalMs;
        }

        let totalSeconds = Math.floor(remaining / 1000);
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        document.getElementById('countdown').textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 250); // Frequent updates keep timer accurate
}