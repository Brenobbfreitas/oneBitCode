function saveHouse() {
    let area = document.querySelector("input[name='area']").value;
    let numero = document.querySelector("input[name='numero']").value;
    let cidade = document.querySelector("input[name='cidade']").value;
    let bairro = document.querySelector("input[name='bairro']").value;

    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m2, \n Numero:" + numero + "\n Cidade:" + cidade + "\n Bairro:" + bairro +"\n";


    //criando elemento botão
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remove"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("listaCasa").appendChild(newListValue)
}

function removeHouse(button){
    let liToRemove = button.parentNode;
    document.getElementById("listaCasa").removeChild(liToRemove);   
    console.log(liToRemove); 
    console.log(button); 

}