// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання,
//  при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).


let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2');
let promptUrl;

function isValidUrl(url){
try{
    new URL(url);
    return true;
}
catch{
    return false
}


}
btn1.addEventListener('click',()=>{
     promptUrl = prompt('Введіть посилання');
})

btn2.addEventListener('click',()=>{
    if(isValidUrl(promptUrl)){
        window.location.href = promptUrl;
    
        }
    else{
        console.log('Введіть коректне посилання')
    }
})