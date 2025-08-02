const keys = document.querySelectorAll(".drum-pad");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const audio = document.querySelector(
      `audio[data-key="${key.dataset.key}"]`
    );
    if (audio) {
      audio.currentTime = 0; // Rewind to the start
      audio.play();
      key.classList.add("active");
        setTimeout(() => {
          key.classList.remove("active");
        }, 100);
    }
  });
});

window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
  if (key) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio) {
      audio.currentTime = 0; // Rewind to the start
      audio.play();
    }
  }
});
document.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
  if (key) {
    key.classList.add("active");
  }
});

document.addEventListener("keyup", (e) => {
  const key = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
  if (key) {
    key.classList.remove("active");
  }
});
