
let form = document.getElementById('form');
let nameForm = document.getElementById('name');
let message = document.getElementById('message');
let phoneNumber = document.getElementById('phone');
let email = document.getElementById('email');
let inputError = document.getElementById('input-error');
let phoneRegExp = /^\+380\d{9}$/;
let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', function(event)  {
    event.preventDefault();
    inputError.innerHTML = ''; 
    let errors = [];
    
    if (nameForm.value.trim() === '') {
        errors.push('Name is required');
    }
    
    if (message.value.trim().length < 5) {
        errors.push('Message must be at least 5 characters long');
    }
    
    if (!phoneNumber.value.trim().match(phoneRegExp)) {
        errors.push('Phone must start with +380 and include 9 digits after');
    }

    if (!emailRegExp.test(email.value)) {
        errors.push('Email must include @ and .');
    }
    
    if (errors.length > 0) {
        errors.forEach(error => {
            const errorElement = document.createElement('div');
            errorElement.textContent = error;
            errorElement.style.color = 'red';
            inputError.appendChild(errorElement);
        });
    } else {
        console.log('Form submitted!');
        console.log('Name:', nameForm.value);
        console.log('Message:', message.value);
        console.log('Phone:', phoneNumber.value);
        console.log('Email:', email.value);
      
        
        form.reset(); 
    }
});
