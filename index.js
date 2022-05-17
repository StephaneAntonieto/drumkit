// DOM element.
const btn = document.querySelectorAll(".drum");

// Get the event key and play the right sound.
function playSound(e) {
  switch (e) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(e);
      break;
  }
}

// Get the event key and animate the right button.
function playAnimation(e) {
  const pressedButton = document.querySelector("." + e);

  pressedButton.classList.add("pressed");
  setTimeout(() => {
    pressedButton.classList.remove("pressed");
  }, 100);
}

// Listen for the click event.
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (evt) => {
    playSound(evt.target.textContent);
    playAnimation(evt.target.textContent);
  });
}

// Listen for the pressed button.
document.addEventListener("keypress", (evt) => {
  playSound(evt.key);
  playAnimation(evt.key);
});
