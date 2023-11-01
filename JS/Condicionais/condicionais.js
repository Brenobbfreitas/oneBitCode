// let spaceship = "Golias"
// let velocity = 80

// console.log(velocity === "80")
// console.log(spaceship < "Helmet")

let velocity = 1111

// if (velocity < 100) {
//     console.log("Estamos numa velocidade aceitável")
// }

// if (velocity < 100) {
//     console.log("Estamos numa velocidade aceitável")
// } else {
//     console.log("Estamos numa velocidade de risco")
// }

if (velocity < 40) {
    console.log("Velocidade baixa")
} else {
    if (velocity <= 100) {
        console.log("Cuidado! Próximo a velocidade de risco")
    } else{
        console.log("VELOCIDADE DE RISCO!!");
    }
}

(velocity > 100 ) ? console.log("Velocidade maior que 100!!") : console.log("Velocidade menor que 100!");
