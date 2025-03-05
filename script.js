const video = document.querySelector("video");
const speedContainer = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

speedContainer.addEventListener("mousemove", function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.5;
  const max = 2;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  
  speedBar.style.height = height;
  speedBar.textContent = playbackRate.toFixed(1) + "×";
  video.playbackRate = playbackRate;
});

