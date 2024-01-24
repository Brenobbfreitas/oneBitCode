function showInfo(){
    let name = document.querySelector("input[name]").value;
    let favoritColor = document.querySelector("select[name='color'] option:checked").text
    let gostaPrograma = document.querySelector("input[name='likeProgramming']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    optionsValue = []
    developerOptions.forEach(element => {
        optionsValue.push(element.value)
    })
    let opstionsChecked = optionsValue.join(", ")
    alert("Nome: " + name + "\nCor primária: " + favoritColor + "\nGosta de Programar ? "+ gostaPrograma + "\nConhecimentos em programação web:" +
    opstionsChecked);
}