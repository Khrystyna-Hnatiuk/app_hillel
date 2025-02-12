let input = document.getElementById('input');
let addBtn = document.querySelector('.add-btn');
let ulList = document.getElementById('list');

addBtn.addEventListener('click', () => {
    if (input.value !== '') {
        let li = document.createElement('li');
        li.textContent = input.value;
        let deleteBtn = document.createElement('button');

        deleteBtn.style.marginLeft = '10px'
        deleteBtn.style.marginBottom = '5px'
        deleteBtn.style.padding = '10px'
        deleteBtn.style.color = 'white'
        deleteBtn.style.backgroundColor = 'red'
        deleteBtn.style.border = 'none'

        deleteBtn.textContent = 'Видалити елемент';
        li.appendChild(deleteBtn)

        ulList.appendChild(li);

    }
    input.value = '';


});
ulList.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') {
        let li = event.target.parentElement;
        ulList.removeChild(li)
    }
})

