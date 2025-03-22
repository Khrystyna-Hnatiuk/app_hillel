"use strict";

function createTaskElement(task) {
  var newElement = document.createElement('li');
  newElement.classList.add('todo-item');
  newElement.dataset.id = task.id;
  var input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = task.checked;
  var span = document.createElement('span');
  span.classList.add('todo-item__description');
  span.textContent = task.text;
  if (task.checked) {
    span.classList.add('todo-item--checked');
  }
  var btnDelete = document.createElement('button');
  btnDelete.classList.add('todo-item__delete');
  btnDelete.textContent = 'Видалити';
  newElement.appendChild(input);
  newElement.appendChild(span);
  newElement.appendChild(btnDelete);
  return newElement;
}
;
function getTasks() {
  try {
    return JSON.parse(localStorage.getItem('toDos')) || [];
  } catch (error) {
    console.log('error in reading from localStorage', error);
    return [];
  }
}
$(document).ready(function () {
  var $addBtn = $('.form__btn');
  var $inputElement = $('.form__input');
  var $toDoWrapper = $('.js--todos-wrapper');
  var $modal = new bootstrap.Modal($('#myModal')[0]);
  var $modalTitle = $('#myModal .modal-title');
  var $modalBody = $('#myModal .modal-body');
  function saveTasks(tasks) {
    try {
      localStorage.setItem('toDos', JSON.stringify(tasks));
    } catch (error) {
      console.log('error in saving to localStorage', error);
    }
  }
  ;
  $toDoWrapper.on('change', function (event) {
    if (event.target.type === 'checkbox') {
      var li = event.target.closest('.todo-item');
      if (!li) return;
      var span = li.querySelector('.todo-item__description');
      if (!span) return;
      var id = li.dataset.id;
      var tasks = getTasks();
      var task = tasks.find(function (elem) {
        return elem.id === id;
      });
      if (task) {
        task.checked = event.target.checked;
        saveTasks(tasks);
      }
      span.classList.toggle('todo-item--checked', event.target.checked);
    }
  });
  $toDoWrapper.on('click', function (event) {
    if (event.target.tagName === 'BUTTON' && event.target) {
      var li = event.target.closest('.todo-item');
      var tasks = getTasks();
      var id = li.dataset.id;
      var updatedTasks = tasks.filter(function (task) {
        return task.id !== id;
      });
      saveTasks(updatedTasks);
      $(li).remove();
    }
    if (event.target.tagName === 'SPAN') {
      var _li = event.target.closest('.todo-item');
      var taskId = _li.dataset.id;
      var _tasks = getTasks();
      var task = _tasks.find(function (task) {
        return task.id === taskId;
      });
      if (task) {
        $modalTitle.text("\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F: ".concat(task.text));
        $modalBody.text("\u0421\u0442\u0430\u0442\u0443\u0441: ".concat(task.checked ? 'Виконано' : 'Не виконано'));
        $modal.show();
      }
    }
  });
  $addBtn.on('click', function (event) {
    event.preventDefault();
    if ($inputElement.val().trim() !== '') {
      var tasks = getTasks();
      var existingTasks = tasks.some(function (task) {
        return task.text === $inputElement.val().trim();
      });
      if (existingTasks) return;
      var newTask = {
        text: $inputElement.val(),
        checked: false,
        id: Date.now().toString()
      };
      tasks.push(newTask);
      saveTasks(tasks);
      $toDoWrapper.append(createTaskElement(newTask));
    }
    $inputElement.val('');
  });
});
window.onload = function () {
  var $toDoWrapper = $('.js--todos-wrapper');
  getTasks().forEach(function (task) {
    $toDoWrapper.append(createTaskElement(task));
  });
};