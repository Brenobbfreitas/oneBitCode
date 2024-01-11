function addNewPhone() {
    const phoneForme = document.querySelector("form#phones") // aqui ele busca o form com o label e input
    const newPhone = phoneForme.children[0].cloneNode(true) // aqui ele está clonando o phoneForme
    const phonePosition = phoneForme.children.length + 1
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ":"
    phoneForme.appendChild(newPhone)
    console.log(phoneForme);
}


var btn = document.querySelector("#novoTelefone");

btn.addEventListener("click", addNewPhone);

function printPhones() {
    mensagem = "";
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {
        mensagem += "Telefone" + (index + 1) + ":"+ phone.value + "\n" 
    })
}