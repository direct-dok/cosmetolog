let callBackForm = document.querySelector('.csm-call-back-form');

callBackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let inputsForm = event.target.querySelectorAll('.form-control');
    let resultValidate = validateForm(inputsForm);
    if(resultValidate) {
        let objectInputValues = getFormValues(inputsForm);
        sendMessage(objectInputValues, event.target);
    }
});

function validateForm(inputs) {
    let errors = 0;
    for(let i = 0; i < inputs.length; i++) {
        if(!inputs[i].value) {
            errors++;
        }
    }
    return !errors
            ? true
            : false;
}

function getFormValues(inputs) {
    let values = {};
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value) {
            values[inputs[i].getAttribute('name')] = inputs[i].value;
        }
    }
    return values;
}

function sendMessage(inputValues, targetForm) {
    let xhr = new XMLHttpRequest();
    let body = '';

    for(const [key, value] of Object.entries(inputValues)) {
        body += '&' + key + '=' + encodeURIComponent(value);
    }

    body = body.slice(1);

    xhr.open("POST", '/api/v1/message/send', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        let response = JSON.parse(this.responseText);
        if(response.ok) {
            let inputsForm = targetForm.querySelectorAll('.form-control');
            for(let i = 0; i < inputsForm.length; i++) {
                inputsForm[i].value = '';
            }
            // success-message-alert
            let alertSuccessMessage = targetForm.querySelector('.success-message-alert');
            alertSuccessMessage.classList.remove('d-none');
            setTimeout(function() {
                alertSuccessMessage.classList.add('d-none');
            }, 3000)
        }
    }
    xhr.send(body);
}


