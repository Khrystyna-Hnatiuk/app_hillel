// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. 
// При повторному натисканні – повертається попередній колір


let button = document.getElementById('btn');
let text = document.querySelector('.text');

button.addEventListener('click', function () {
    text.classList.toggle('btn-color')
})