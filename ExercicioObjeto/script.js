//objeto está sendo preenchido pelas func 

let spaceShip = {
    velocity: 0,
    speedUp: function (acceleration) {
        this.velocity += acceleration
     },
     speedLow: function(lowerAcceleration){
        this.velocity -= lowerAcceleration;
     }
}

//func de registros da nave Obs: interagi com o objeto
function registroNave() {
    spaceShip.Name = prompt("Nome da nave?");
    spaceShip.type = prompt("Qual o tipo da nave?");
    spaceShip.velocityMax = Number(prompt("Informe a velocidade máxima da nave"));
}

// func de acelarar a nave Obs: converter para inteiro
function aceleration() {
    let acceleration = Number(prompt("Quanto quer acelerar?"));
    spaceShip.speedUp(acceleration);
    if (spaceShip.velocity > spaceShip.velocityMax) {
        alert("ALERTA!!! VELOCIDADE MÁXIMA ULTRAPASSADA!\nVelocidade da Nave: "+ spaceShip.velocity+"km/s\n" +
        "Velocidade Máxima:"+ spaceShip.velocityMax);
    }else{
        alert("Velocidade da Nave: "+ spaceShip.velocity+"km/s\n" +
        "Velocidade Máxima: "+ spaceShip.velocityMax+"km/s");
    }
}

// func de freiar a nave
function breaker() {
    let lowerAcceleration = Number(prompt("Quanto deseja reduzir?"));
    spaceShip.speedLow(lowerAcceleration);
    if (spaceShip.velocity > spaceShip.velocityMax) {
        alert("ALERTA!!! VELOCIDADE MÁXIMA ULTRAPASSADA!\nVelocidade da Nave: "+ spaceShip.velocity+"km/s\n" +
        "Velocidade Máxima:"+ spaceShip.velocityMax);
    }else if(lowerAcceleration = 0){
        alert("Velocidade da Nave: "+ spaceShip.velocity+"km/s\n" +
        "Velocidade Máxima: "+ spaceShip.velocityMax+"km/s" +
        "Nave Parada!!");
    }else{
        alert("Valores Invalidos");
    }
}

// func para parar a nave
function stop(){
    alert("Nome: "+spaceShip.Name+"\nTipo"+spaceShip.type+"\nVelocidade:"+spaceShip.velocity+"\nVelocidade Maxima"+spaceShip.velocityMax);
    spaceShip.velocityMax = 0;
    spaceShip.velocity = 0;
}


function showMenu(){
    let chooseoption;
    do {
        chooseoption = Number(prompt("Digite 1 para acelerar\nDigite 2 para reduzir\nDigite 3 para reduzir"))
        switch (chooseoption) {
            case 1:
                aceleration();
                break;
            case 2:
                breaker()
                break;
            case 3:
                stop();
                break;
            default:
                alert("Opção invalida")
        }
    } while (chooseoption != "3");
}

   

registroNave();
showMenu();
