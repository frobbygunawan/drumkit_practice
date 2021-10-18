var buttons = document.querySelectorAll("button");
buttons.forEach(function(eachButton) {
  eachButton.addEventListener('click', function () {
    handleClick(eachButton.innerHTML);
    pressingAnim(eachButton.innerHTML);
  });
});

document.addEventListener("keydown", function(event) {
  handleClick(event.key);
  pressingAnim(event.key);
})

function handleClick(key) {
  if (key == 'w') {
    var sound = new Audio("sounds/tom-1.mp3");
    sound.play();
  }
  if (key == 'a') {
    var sound = new Audio("sounds/tom-2.mp3");
    sound.play();
  }
  if (key == 's') {
    var sound = new Audio("sounds/tom-3.mp3");
    sound.play();
  }
  if (key == 'd') {
    var sound = new Audio("sounds/tom-4.mp3");
    sound.play();
  }
  if (key == 'j') {
    var sound = new Audio("sounds/snare.mp3");
    sound.play();
  }
  if (key == 'k') {
    var sound = new Audio("sounds/crash.mp3");
    sound.play();
  }
  if (key == 'l') {
    var sound = new Audio("sounds/kick-bass.mp3");
    sound.play();
  }
}

function pressingAnim(keybutton) {
  document.querySelector("." + keybutton).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + keybutton).classList.remove("pressed");
  }, 100);
}
