// On Mouse Click

const numberOfKeyButtons = document.querySelectorAll(".key").length;

for ( let i = 0; i < numberOfKeyButtons; i++ ) {

  document.querySelectorAll(".key")[i].addEventListener("click", function(){

    const keyCharacter = this.firstElementChild.innerHTML;

    switch(keyCharacter) {
      case "A":
        audio = new Audio("./sounds/clap.wav");
        audio.play();
        keyPressEffectAdd(this);
        keyPressEffectRemove(this);
        break;
      case "S":
        audio = new Audio("./sounds/hihat.wav");
        audio.play();
        keyPressEffectAdd(this);
        keyPressEffectRemove(this);
        break;
      case "D":
        audio = new Audio("./sounds/kick.wav");
        audio.play();
        keyPressEffectAdd(this);
        keyPressEffectRemove(this);
        break;
      case "F":
        audio = new Audio("./sounds/openhat.wav");
        audio.play();
        keyPressEffectAdd(this);
        keyPressEffectRemove(this);
        break;
      case "G":
        audio = new Audio("./sounds/boom.wav");
        audio.play();
        keyPressEffectAdd(this);
        keyPressEffectRemove(this);
        break;
      case "H":
        audio = new Audio("./sounds/ride.wav");
        audio.play();
        keyPressEffectAdd(this);
        keyPressEffectRemove(this);
        break;
      case "J":
        audio = new Audio("./sounds/snare.wav");
        audio.play();
        keyPressEffectAdd(this);
        keyPressEffectRemove(this);
        break;
      case "K":
        audio = new Audio("./sounds/tom.wav");
        audio.play();
        keyPressEffectAdd(this);
        keyPressEffectRemove(this);
        break;
      case "L":
        audio = new Audio("./sounds/tink.wav");
        audio.play();
        keyPressEffectAdd(this);
        keyPressEffectRemove(this);
        break;
    }

  })
}

// On KeyBorad Press
window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return; // stop the function running when hit another key
  audio.currentTime = 0; // rewind to the start
  audio.play();

  // Add Keypress Transition
  keyPressEffectAdd(key);

  // Remove Keypress transition
  keyPressEffectRemove(key);
})


// Add Keypress Transition function
function keyPressEffectAdd(element) {
  element.classList.add("playing")
}

// Remove Keypress Transition function
function keyPressEffectRemove(element) {
  setTimeout(function(){
    element.classList.remove("playing");
  }, 70)
}
