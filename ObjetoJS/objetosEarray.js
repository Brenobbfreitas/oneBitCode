////// Um objeto com um array dentro //////
// let spaceShips = [
//     {name: "Elemental", crew:8 },
//     {name: "Fenix", crew:1 },
//     {name: "MegaZord", crew:5 }
// ]

// console.log(spaceShips[0].name);

// spaceShips.forEach(spaceShip =>{
//     alert(spaceShip.name + " tem "+ spaceShip.crew+ " tripulantes" )
// })


///// Um objeto com outro objeto dentro //////

let spaceShipObj = {
    name: "Fenix",
    maxCrew: 10,
    captain:{
        name: "Cap. Breno",
        age: "25"
    }
}

console.log(spaceShipObj.captain.name);