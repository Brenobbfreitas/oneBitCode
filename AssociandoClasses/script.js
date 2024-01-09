class Captain{
    constructor(name,age,flighHours){
        this.name = name;
        this.age = age;
        this.flighHours = flighHours;
    }
}

class SpaceShip{
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours){
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new Captain(captainName, captainAge, captainFlightHours)
    }
}

let spaceShip = new SpaceShip("artemis", 13, "Breno", 45, 1500)

console.log(spaceShip);