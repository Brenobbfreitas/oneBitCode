function clickMe() {
    console.log("Fui clicado");
}

function focusMe() {
    console.log("Fui focado");
}

function blurMe() {
    console.log("Fui desfocado");
}

function changeMe() {
    console.log("Fui alterado");
}

function overMe() {
    console.log("Mouse aqui");
}


var btn = document.querySelector(".changeButton");



function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }


function bgChange() {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.clickMe = bgChange;
