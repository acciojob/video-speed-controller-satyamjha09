const video = document.querySelector('.viewer');
        const toggle = document.querySelector('.toggle');
        const rewind = document.querySelector('.rewind');
        const fastForward = document.querySelector('.fastForward');
        const volume = document.querySelector('.volume');
        const playbackSpeed = document.querySelector('.playbackSpeed');
        const progress = document.querySelector('.progress');
        const progressFilled = document.querySelector('.progress__filled');
        
        function togglePlay() {
            if (video.paused) {
                video.play();
                toggle.textContent = '❚ ❚';
            } else {
                video.pause();
                toggle.textContent = '►';
            }
        }

        function handleProgress() {
            const percent = (video.currentTime / video.duration) * 100;
            progressFilled.style.width = `${percent}%`;
        }

        function scrub(e) {
            const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
            video.currentTime = scrubTime;
        }

        toggle.addEventListener('click', togglePlay);
        video.addEventListener('timeupdate', handleProgress);
        rewind.addEventListener('click', () => video.currentTime -= 10);
        fastForward.addEventListener('click', () => video.currentTime += 25);
        volume.addEventListener('input', () => video.volume = volume.value);
        playbackSpeed.addEventListener('input', () => video.playbackRate = playbackSpeed.value);
        progress.addEventListener('click', scrub);