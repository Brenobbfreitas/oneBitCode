function saveHouse() {
    let area = document.querySelector("input[name='area']").value;
    let numero = document.querySelector("input[name='numero']").value;
    let cidade = document.querySelector("input[name='cidade']").value;
    let bairro = document.querySelector("input[name='bairro']").value;

    let newListValue = document.createElement("li")

    newListValue.innerText = area + "m2, \n numero:" + numero + "\n cidade:" + cidade + "\n No bairro:" + bairro ;
}