for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    Sound(buttonInnerHTML);
    DoAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  Sound(event.key);
  DoAnimation(event.key);
});


function Sound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function DoAnimation(currentKey) {

  // check if the button is one of those listed

  var buttons = document.querySelectorAll("button");

  let letters = [];
  for (var i=0; i < buttons.length; i++) {
      letters.push(buttons[i].innerText);
  }

  if (letters.includes(currentKey)) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function() {
      activeButton.classList.toggle("pressed");
    }, 100);
  }

}
