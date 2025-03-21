

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
function getTasks() {
    try {
        return JSON.parse(localStorage.getItem('toDos')) || [];
    }
    catch (error) {
        console.log('error in reading from localStorage', error);
        return [];
    }
}
$(document).ready(() => {
    const $addBtn = $('.form__btn');
    const $inputElement = $('.form__input');
    const $toDoWrapper = $('.js--todos-wrapper');
    const $modal = new bootstrap.Modal($('#myModal')[0]);
    const $modalTitle = $('#myModal .modal-title');
    const $modalBody = $('#myModal .modal-body')
    function saveTasks(tasks) {
        try {
            localStorage.setItem('toDos', JSON.stringify(tasks));

        }
        catch (error) {
            console.log('error in saving to localStorage', error)
        }
    };


    $toDoWrapper.on('change', function (event) {
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

    $toDoWrapper.on('click', function (event) {
        if (event.target.tagName === 'BUTTON' && event.target) {
            let li = event.target.closest('.todo-item');
            const tasks = getTasks();

            let id = li.dataset.id;
            const updatedTasks = tasks.filter(task => task.id !== id);
            saveTasks(updatedTasks);

            $(li).remove()
        }
        if (event.target.tagName === 'SPAN') {
            const li = event.target.closest('.todo-item');
            const taskId = li.dataset.id;
            const tasks = getTasks();
            const task = tasks.find(task => task.id === taskId);

            if (task) {
                $modalTitle.text(`Завдання: ${task.text}`);
                $modalBody.text(`Статус: ${task.checked ? 'Виконано' : 'Не виконано'}`);
                $modal.show();
            }
        }


    })

    $addBtn.on('click', function (event) {
        event.preventDefault();

        if ($inputElement.val().trim() !== '') {
            const tasks = getTasks();
            const existingTasks = tasks.some(task => task.text === $inputElement.val().trim());
            if (existingTasks) return

            const newTask = {
                text: $inputElement.val(),
                checked: false,
                id: Date.now().toString()
            }
            tasks.push(newTask);
            saveTasks(tasks)
            $toDoWrapper.append(createTaskElement(newTask))

        }
        $inputElement.val('')
    })
})

window.onload = function () {
    const $toDoWrapper = $('.js--todos-wrapper');

    getTasks().forEach(task => {
        $toDoWrapper.append(createTaskElement(task))
    });
};
