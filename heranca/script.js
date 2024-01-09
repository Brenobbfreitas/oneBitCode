class SpaceShip{
    constructor(name, maxCrew, maxVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxVelocity = maxVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration 
        if (this.currentVelocity > this.maxVelocity) {
            alert("Velocidade MÁXIMA ULTRAPASSADA")
        }
    }
}


class BattleSpaceship extends SpaceShip{
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}



class DiscoverySpaceship extends SpaceShip{
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo equipamentos de amostra e parando nave de descoberta")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 5, 200)
let fenix = new BattleSpaceship("Fenix", 10, 2000)