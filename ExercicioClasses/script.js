class SpaceShip {
    // classe contrutora de SpaceShip
    constructor(nome, quantidadeTripulantes){
        this.nome = nome
        this.quantidadeTripulantes = quantidadeTripulantes
        this.engate = false
        this.portasEstatus = false
    }
    // engate da nave valor bool 
    hitch() {
        this.engate = true;
        this.portasEstatus = true;
    }
}11
// função para mostrar menu 
function showMenu() {
    let chooseOption
    while(chooseOption != "1" && chooseOption != "2" && chooseOption != "3"){
        chooseOption = prompt("O que deseja fazer?\n" +
                                 "1- Engatar nave\n" +
                                 "2- Imprimir naves\n" +
                                 "3- Sair do programa")
    }
    return chooseOption;
    
}
// função para crir nave 
function creteSpaceShip() {
    let spaceShipName = prompt("Informe o nome da nave")
    let quantidadeTripulantes = prompt("Informe a quantidade de tripulantes")
    let spaceShip = new SpaceShip(spaceShipName, quantidadeTripulantes)
    return spaceShip
}
// 
function printSpaceShipList(spaceShip) {
    let spaceShipList = ""
    spaceShip.forEach((spaceship, index) => {
        spaceShipList += (index + 1) + "- " + spaceship.nome + " (" + spaceship.quantidadeTripulantes + " tripulantes) \n"
    });
    alert(spaceShipList)

}

let hitchedSpaceships = []

let chooseOption

while (chooseOption != "3") {
    chooseOption = showMenu();
    switch (chooseOption) {
        case "1":
            let  spaceShipToAdd = creteSpaceShip()
            spaceShipToAdd.hitch();
            hitchedSpaceships.push(spaceShipToAdd)
            break;
        case "2":
            printSpaceShipList(hitchedSpaceships)
            break;
    }
}

