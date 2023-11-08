function speedup(velocity, acceleration) {
    let newVelocity = velocity + acceleration;
    console.log("Nova Velocidade "+ newVelocity);
}

speedup(60,10);


function greetPilote(name, mensage) {
    alert(mensage+ ", " + name)
}

greetPilote("Breno Barreto", "tenha fé");