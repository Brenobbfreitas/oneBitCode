let spaceShip = {
    velocity: 0,
    speedUp: function (acceleration) {
        this.velocity += acceleration
     }
}


function registroNave() {
    spaceShip.Name = prompt("Nome da nave?");
    spaceShip.type = prompt("Qual o tipo da nave?");
    spaceShip.velocityMax = Number(prompt("Informe a velocidade máxima da nave"));
}


function aceleration() {
    let acceleration = Number(prompt("Quanto quer acelerar?"));
    spaceShip.speedUp(acceleration);
    if (spaceShip.velocity > spaceShip.velocityMax) {
        alert("ALERTA!!! VELOCIDADE MÁXIMA ULTRAPASSADA!\nVelocidade da Nave: "+ spaceShip.velocity+"km/s\n" +
        "Velocidade Máxima:"+ spaceShip.velocityMax);
    }else{
        alert("VELOCIDADE!!\nVelocidade da Nave: "+ spaceShip.velocity+"km/s\n" +
        "Velocidade Máxima:"+ spaceShip.velocityMax);
    }
}



registroNave();
aceleration();


console.log(spaceShip);

   




