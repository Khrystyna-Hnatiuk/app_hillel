
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
let isValid = true;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    nameError.innerHTML = '';
    messageError.innerHTML = '';
    phoneError.innerHTML = '';
    emailError.innerHTML = '';


    if (nameForm.value.trim() === '') {
        isValid = false;
        nameError.textContent = 'Name is required'
    }

    if (message.value.trim().length < 5) {
        messageError.textContent = 'Message must be at least 5 characters long'
        isValid = false;
    }

    if (!phoneRegExp.test(phoneNumber.value.trim())) {
        phoneError.textContent = 'Phone must start with +380 and include 9 digits after'
        isValid = false;
    }

    if (!emailRegExp.test(email.value)) {
        emailError.textContent = 'Email must include @ and .'
        isValid = false;
    }
    if (isValid) {
        console.log('Form submitted!');
        console.log('Name:', nameForm.value);
        console.log('Message:', message.value);
        console.log('Phone:', phoneNumber.value);
        console.log('Email:', email.value);
        form.reset();
    }

});
