
function quickSound(key) {

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

    default:
      break;

  }
}


function quickAnimation(currentKey) {

  document.querySelector("." + currentKey).classList.toggle("pressed");
  setTimeout( () => {
    document.querySelector("." + currentKey).classList.toggle("pressed");
  }, 150);

}


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    quickSound(this.innerHTML);
    quickAnimation(this.innerHTML);
  });

}

document.addEventListener("keydown", function(event) {

  quickSound(event.key);

  var keys = [];
  for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    keys.push(document.querySelectorAll(".drum")[i].classList[0]);
  } 

  if (keys.includes(event.key))  {
    quickAnimation(event.key);
  }

});
