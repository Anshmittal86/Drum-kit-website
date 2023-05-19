window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return; // stop the function running when hit another key
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");

  // For removing transition
  setTimeout(function(){
    key.classList.remove("playing")
  }, 70)
})
