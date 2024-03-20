const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const salaryInput = document.querySelector("#salary");
const addressInput = document.querySelector("#address");
const numberInput = document.querySelector("#number");
const cityInput = document.querySelector("#city");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if(nameInput.value === "" || !isNameValid(nameInput.value)) {
        alert("Por favor, preencha seu nome somente com letras.");
        return;
    }

    if(ageInput.value === ""){
        alert("Por favor, digite sua idade.");
        return;
    }

    if(salaryInput.value === ""){
        alert("Por favor, digite seu salário.");
        return;
    }

    if(addressInput.value === "" || !isAddressValid(addressInput.value)){
        alert("Por favor, digite seu endereço utilizando apenas letras.");
        return;
    }  

    if(numberInput.value === "") {
        alert("Por favor, digite o número do seu endereço.");
        return;
    }

    if(cityInput.value === "" || !isCityValid (cityInput.value)){
        alert("Por favor, digite sua cidade somente com letras.");
        return;
    }


    form.submit();
})

function isNameValid(name) {
    const nameRegex = new RegExp(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]{2,20}$/
    );

    if(nameRegex.test(name)) {
        return true;
    }
    return false;
}

function isAddressValid(address) {
    const addressRegex = new RegExp(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]{2,20}$/
    );

    if(addressRegex.test(address)) {
        return true;
    }
    return false;
}

function isCityValid(city) {
    const cityRegex = new RegExp(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]{2,20}$/
    );

    if(cityRegex.test(city)) {
        return true;
    }
    return false;
}
