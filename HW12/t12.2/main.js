let list = document.getElementById('ul-list');
let btns = document.getElementsByClassName('btn');
list.addEventListener('click',(event)=>{
   if(event.target.classList.contains('btn')){
    alert(`Клікнуто на :${event.target.textContent}`)
   }  
 
})