let departureDateEntry = prompt("Digite a data de partida (formata DD/MM/YYYY)");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");
//  moment = pacote js para manipular datas de maneira mais simples 
let today = moment();

let dateDiff = today - departureDate;

let choseOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- segundos\n2- Minutos \n3- Horas \n4- Dias")

if (choseOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000); //math.round nativo do js é utilizado para arredondar para o valor inteiro mais proximo
    alert("Tempo de vôo: "+ secondsOfDeparture +" segundos")
}else if(choseOption == "2"){
    let minutsOfDeparture = Math.round(dateDiff / 1000 / 60);
    alert("Tempo de vôo: "+ minutsOfDeparture +" minutos")
}else if(choseOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
    alert("Tempo de vôo: "+ hoursOfDeparture +" horas")
}else if(choseOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
    alert("Tempo de vôo: "+ daysOfDeparture +" dias")
}else{
    alert("opção inválida")
}