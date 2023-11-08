let spaceShip = {
    name: "MegaZord",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        alert("Preparando propulsão," +this.name+ " ligada")
        alert("Ligando computador de bordo")
    }
}

// spaceShip.turnOn();

spaceShip.velocity = 0;
spaceShip.speedUp = function (acceleration) {
    this.velocity += acceleration;
}

console.log(spaceShip);

spaceShip.speedUp(100)

console.log(spaceShip);

//// metodo js para acionar o objeto THIS