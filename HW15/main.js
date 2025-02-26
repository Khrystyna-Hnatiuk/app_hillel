

const btnAdd = document.querySelector('.form__btn');
const inputElement = document.querySelector('.form__input');
const toDoWrapper = document.querySelector('.js--todos-wrapper');

window.onload = function () {
    getTasks().forEach(task => {
        toDoWrapper.appendChild(createTaskElement(task))
    });
};
function getTasks() {
    try {
        return JSON.parse(localStorage.getItem('toDos')) || [];
    }
    catch (error) {
        console.log('error in reading from localStorage', error)
        return []
    }
}
function saveTasks(tasks) {
    try{
            localStorage.setItem('toDos', JSON.stringify(tasks));

    }
    catch(error){
        console.log('error in saving to localStorage', error)
    }
};


function createTaskElement(task) {
    const newElement = document.createElement('li');
    newElement.classList.add('todo-item');
    newElement.dataset.id = task.id;

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = task.checked;

    const span = document.createElement('span');
    span.classList.add('todo-item__description')
    span.textContent = task.text;
    if (task.checked) {
        span.classList.add('todo-item--checked')
    }
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('todo-item__delete')
    btnDelete.textContent = 'Видалити';

    newElement.appendChild(input);
    newElement.appendChild(span);
    newElement.appendChild(btnDelete);
    return newElement;

};



toDoWrapper.addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
        const li = event.target.closest('.todo-item');
        if (!li) return;
        let span = li.querySelector('.todo-item__description');
        if (!span) return;

        const id = li.dataset.id;
        const tasks = getTasks();
        const task = tasks.find(elem => elem.id === id);
        if (task) {
            task.checked = event.target.checked;
            saveTasks(tasks);
        }
        span.classList.toggle('todo-item--checked', event.target.checked)

    }
});

//delete Task
toDoWrapper.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON' && event.target) {
        let li = event.target.closest('.todo-item');
        const tasks = getTasks();

        let id = li.dataset.id;
        const updatedTasks = tasks.filter(task => task.id !== id);
        saveTasks(updatedTasks);

        toDoWrapper.removeChild(li)
    }

})

btnAdd.addEventListener('click', function (event) {
    event.preventDefault();

    if (inputElement.value.trim() !== '') {
        const tasks = getTasks();
        const existingTasks = tasks.some(task => task.text === inputElement.value.trim());
        if (existingTasks) return

        const newTask = {
            text: inputElement.value,
            checked: false,
            id: Date.now().toString()
        }
        tasks.push(newTask);
        saveTasks(tasks)
        toDoWrapper.appendChild(createTaskElement(newTask))

    }
    inputElement.value = ''
})

// localStorage.clear()