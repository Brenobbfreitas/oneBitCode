// alert("Bem Vindo!! A seguir pediremos que informe alguns dados.");


let name = prompt("Qual o seu nome?");
let velocity = 0;
let newVelocity = prompt("Informe a velocidade a ser atingida: ");
let confirmVelocity = confirm("Sua velocidade é de " + newVelocity + " Km");

if (confirmVelocity) {
    velocity = parseFloat(newVelocity);
}

switch (true) {
    case velocity <= 0:
        alert("Nave está parada. Considere partir e aumentar a velocidade");
        break;
    case velocity < 40:
        alert("Você está devagar, podemos aumentar mais");
        break;
    case velocity >= 40 && velocity < 80:
        alert("Parce uma boa velocidade para manter");
        break;
    case velocity >= 80 && velocity <= 100:
        alert("Velocidade alta. Considere diminuir");
        break;
    default:
        alert("Vai explodir");
}

alert("Piloto: "+ name + "\nVelocidade: " + velocity + "km/s");

// USO DO IF ELSE(codigo emaranhado )

// let name = prompt("Qual o seu nome?");
// let velocity = 0;
// let newVelocity = prompt("Informe a velocidade a ser atingida: ");
// let confirmVelocity = confirm("Sua velocidade é de " + newVelocity + " Km");

// if (confirmVelocity) {
//     velocity = parseFloat(newVelocity); // Convertemos a entrada para um número
// }

// if (velocity <= 0) {
//     alert("Nave está parada. Considere partir e aumentar a velocidade");
// } else if (velocity < 40) {
//     alert("Você está devagar, podemos aumentar mais");
// } else if (velocity >= 40 && velocity < 80) {
//     alert("Parce uma boa velocidade para manter");
// } else if (velocity >= 80 && velocity <= 100) {
//     alert("Velocidade alta. Considere diminuir");
// } else {
//     alert("Vai explodir");
// }
