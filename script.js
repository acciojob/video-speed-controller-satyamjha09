const video = document.querySelector(".video");
const playButton = document.querySelector(".toggle");
const rewindButton = document.querySelector(".rewind");
const fastForwardButton = document.querySelector(".fast-forward");
const volumeControl = document.querySelector(".volume");
const speedControl = document.querySelector(".playbackSpeed");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

// Toggle Play/Pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = "❚ ❚";
    } else {
        video.pause();
        playButton.textContent = "►";
    }
}

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Set Video Progress on Click
function setProgress(e) {
    const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
}

// Adjust Volume
function updateVolume() {
    video.volume = volumeControl.value;
}

// Adjust Playback Speed
function updateSpeed() {
    video.playbackRate = speedControl.value;
}

// Rewind 10 seconds
function rewind() {
    video.currentTime -= 10;
}

// Fast Forward 25 seconds
function fastForward() {
    video.currentTime += 25;
}

// Event Listeners
playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("click", setProgress);
volumeControl.addEventListener("input", updateVolume);
speedControl.addEventListener("input", updateSpeed);
rewindButton.addEventListener("click", rewind);
fastForwardButton.addEventListener("click", fastForward);

