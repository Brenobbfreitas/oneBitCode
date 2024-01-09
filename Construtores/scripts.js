class SpacialStation{
    constructor(name, plataformQuantity){
        this.name = name;
        this.plataformQuantity = plataformQuantity;
    }
}

//instanciando o objeto
let observatory = new SpacialStation("Observatorio", 40)

let darwin = new SpacialStation("darwin",10)


class SpaceShip{
    constructor(name){
        this.name = name
        this.velocity = 0
    }

    speedUp(accleration){
        this.velocity += aceleration
    }
}

let artemis = new SpaceShip("artemis")

artemis.speedUp(100)

console.log(artemis);