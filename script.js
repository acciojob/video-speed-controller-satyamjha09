const video = document.querySelector(".viewer");
        const toggle = document.querySelector(".toggle");
        const volume = document.querySelector(".volume");
        const playbackSpeed = document.querySelector(".playbackSpeed");
        const rewind = document.querySelector(".rewind");
        const fastForward = document.querySelector(".fastForward");
        const progress = document.querySelector(".progress");
        const progressFilled = document.querySelector(".progress__filled");
        const speedContainer = document.querySelector(".speed");
        const speedBar = document.querySelector(".speed-bar");
        
        function togglePlay() {
            if (video.paused) {
                video.play();
                toggle.textContent = "❚ ❚";
            } else {
                video.pause();
                toggle.textContent = "►";
            }
        }
        
        function updateVolume() {
            video.volume = volume.value;
        }
        
        function updatePlaybackSpeed() {
            video.playbackRate = playbackSpeed.value;
        }
        
        function rewindVideo() {
            video.currentTime -= 10;
        }
        
        function fastForwardVideo() {
            video.currentTime += 25;
        }
        
        function updateProgress() {
            const percent = (video.currentTime / video.duration) * 100;
            progressFilled.style.width = `${percent}%`;
        }
        
        function scrub(e) {
            const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
            video.currentTime = scrubTime;
        }
        
        function handleSpeedChange(e) {
            const y = e.pageY - speedContainer.offsetTop;
            const percent = y / speedContainer.offsetHeight;
            const min = 0.5;
            const max = 2;
            const height = Math.round(percent * 100) + "%";
            const playbackRate = percent * (max - min) + min;
            
            speedBar.style.height = height;
            speedBar.textContent = playbackRate.toFixed(1) + "×";
            video.playbackRate = playbackRate;
        }
        
        video.addEventListener("click", togglePlay);
        toggle.addEventListener("click", togglePlay);
        volume.addEventListener("input", updateVolume);
        playbackSpeed.addEventListener("input", updatePlaybackSpeed);
        rewind.addEventListener("click", rewindVideo);
        fastForward.addEventListener("click", fastForwardVideo);
        video.addEventListener("timeupdate", updateProgress);
        progress.addEventListener("click", scrub);
        speedContainer.addEventListener("mousemove", handleSpeedChange);
