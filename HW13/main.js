
const form = document.getElementById('form');
const nameForm = document.getElementById('name');
const message = document.getElementById('message');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const messageError = document.getElementById('message-error');
const emailError = document.getElementById('email-error');

let phoneRegExp = /^\+380\d{9}$/;
let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let formSubmitted = false;

function validateName() {
    if (formSubmitted) {
        if (nameForm.value.trim() === '') {
            nameError.textContent = 'Name is required';
        }
        else {
            nameError.textContent = '';
        }
    }
}
function validateMessage() {
    if (formSubmitted) {
        if (message.value.trim().length < 5) {
            messageError.textContent = 'Message must be at least 5 characters long'
        }
        else {
            messageError.textContent = ''
        }
    }
}
function validateEmail() {
    if (formSubmitted) {
        if (!emailRegExp.test(email.value)) {
            emailError.textContent = 'Email must include @ and .'
        }
        else {
            emailError.textContent = ''
        }
    }
}
function validatePhone() {
    if (formSubmitted) {
        if (!phoneRegExp.test(phoneNumber.value.trim())) {
            phoneError.textContent = 'Phone must start with +380 and include 9 digits after'
        }
        else {
            phoneError.textContent = ''
        }
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    formSubmitted = true;

    validateName();
    validateMessage();
    validatePhone();
    validateEmail()


    if (!nameError.textContent && !phoneError.textContent && !emailError.textContent && !messageError.textContent) {
        console.log('Form submitted!');
        console.log('Name:', nameForm.value);
        console.log('Message:', message.value);
        console.log('Phone:', phoneNumber.value);
        console.log('Email:', email.value);
        form.reset();
        formSubmitted = false;
    }

});

[nameForm, message, email, phoneNumber].forEach(item => {
    item.addEventListener('change', function () {
        if (formSubmitted) {
            if (this === nameForm) validateName()
            if (this === email) validateEmail()
            if (this === message) validateMessage()
            if (this === phoneNumber) validatePhone()
        }

    })
})




