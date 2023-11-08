 let spaceShip ={
     name:"Fenix",
     type: "Batalha",
     crewIntegrants:7
 }


// Como acessa a variavel
console.log(spaceShip);


// acessar pela propriedade
console.log(spaceShip.crewQuantity);

//acessar pelo indice
console.log(spaceShip["type"]);

//adicionando Objeto
spaceShip.shildLevel = 100;
spaceShip["isHitched"] = true;

console.log(spaceShip.shildLevel);
console.log(spaceShip["isHitched"]);

//Objeto vazio
let spaceValue={}

console.log(spaceValue);


let spacialStation = {
    name: "Receptora",
    platformsQuantity: 15,
    shape: "Esférica"
}

// console.log(spacialStation.name.toLowerCase());
// acesso por indice o array 
let spaceShipName = [
    "Fenix",
    "Puller",
    "Golias"
]

// console.log(spaceShipName[0].toUpperCase());

//alinhas Objetos com arrays

let spaceShipArr ={
    name:"Fenix",
    type: "Batalha",
    crew:["Cap. Breno", "Augusto","Francisco","Manugay"]
}

spaceShipArr.crew.push("Ten. Chico");

console.log(spaceShipArr.crew);

