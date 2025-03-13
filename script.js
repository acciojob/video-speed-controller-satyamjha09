const video = document.querySelector('video');
const progressBar = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.player__button');
const volumeInput = document.querySelector('input[name="volume"]');
const speedInput = document.querySelector('input[name="playbackSpeed"]');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    toggleButton.textContent = this.paused ? '►' : '❚ ❚';
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function handleVolumeUpdate() {
    video.volume = this.value;
}

function handleSpeedUpdate() {
    video.playbackRate = this.value;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

toggleButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

volumeInput.addEventListener('input', handleVolumeUpdate);
speedInput.addEventListener('input', handleSpeedUpdate);

skipButtons.forEach(button => button.addEventListener('click', skip));

// Initialize volume and playback rate from input values
video.volume = volumeInput.value;
video.playbackRate = speedInput.value;