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
