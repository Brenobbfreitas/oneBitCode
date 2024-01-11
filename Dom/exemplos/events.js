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



var btn = document.querySelector(".changeColorButton");

var btnRemove = document.querySelector(".removeColor");


function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }


function bgChange() {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

function bgRemove() {
    var colorWhite = "rgb(255, 255, 255)";
    document.body.style.backgroundColor = colorWhite;
}




btn.addEventListener("click", bgChange)

btnRemove.addEventListener("click", bgRemove)