const colonesInput = document.getElementById('colon-input');
const dollarsInput = document.getElementById('dollar-input');
const tipoCambio = 540.87;



dollarsInput.addEventListener('input',() => {
    parseInt(dollarsInput.value);
    if(isNaN(dollarsInput.value) == true) {
        alert("Ooops! You have to use a number to do the convertion");
        dollarsInput.value = "";
    }
    else if(dollarsInput.value == ""){
        colonesInput.value = "";
    }
    else {
        return colonesInput.value = (tipoCambio * dollarsInput.value).toFixed(2);
    }
})

colonesInput.addEventListener('input', ()=> {
    parseInt(colonesInput.value);
    if(isNaN(colonesInput.value) == true) {
        alert("Ooops! You have to use a number to do the convertion");
        colonesInput.value = "";
    }
    else if(colonesInput.value == ""){
        dollarsInput.value = "";
    }
    else {
        return dollarsInput.value = (colonesInput.value / tipoCambio  ).toFixed(2);
    }
})
