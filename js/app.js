document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
		`,
  });
});

let playBtn = document.querySelector(".play-audio"),
  audio = document.querySelector(".audio");

let playing = false;
playBtn.addEventListener("click", function () {
  if (playing == false) {
    audio.play();
    playing = true;
    playBtn.style.backgroundImage = "url(img/on.png)";
  } else if (playing == true) {
    audio.pause();
    playing = false;
    playBtn.style.backgroundImage = "url(img/off.png)";
  }
});
