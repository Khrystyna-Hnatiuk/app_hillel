// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання,
//  при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).


let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2');
let promptUrl;

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch {
        return false
    }


}
btn1.addEventListener('click', () => {
    promptUrl = prompt('Введіть посилання');
    if (promptUrl === null || promptUrl.trim() === '') {
        console.log('посилання не введено');
        return
    }


    if (isValidUrl(promptUrl)) {
        console.log('Посилання збережене')
    }
    else {
        console.log('Введіть коректне посилання')
    }

})

btn2.addEventListener('click', () => {
    if (promptUrl) {
        if (isValidUrl(promptUrl)) {
            // window.location.href = promptUrl;
window.open(promptUrl,'_blank')
        }
        else {
            console.log('Введіть коректне посилання')
        }
    }

})