
function getFormValues() {

    let email = document.querySelector('#email-address').value;

    let model = document.querySelectorAll('.phone-type');
    let selectedModel = null;
    for (let select of model){
        if (select.checked) {
            selectedModel = select.value;
            break;
        }
    }
    
    let selectedServices = [];
    let services = document.querySelectorAll('.services');
    for (let s of services) {
        if (s.checked){
            selectedServices.push(s.value)
        }
    }

    let pickup = document.querySelector('#pick-up').value;

    // leave this line alone!
    return [email, selectedModel, selectedServices, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
