import './style.css';

import { setCompleted, updateStorage, STORAGE_NAME } from './functions.js';

const todoContainerElement = document.querySelector('.todo-container .todo-items-container');

const prevStorage = JSON.parse(localStorage.getItem(STORAGE_NAME));
let todoList;
if (prevStorage && prevStorage.length) {
  todoList = prevStorage;
} else {
  todoList = [
    {
      description: 'dishes',
      completed: false,
      index: 0,
    },
    {
      description: 'exercise',
      completed: false,
      index: 1,
    },
    {
      description: 'finish project',
      completed: false,
      index: 2,
    },
  ];
  updateStorage(todoList);
}
const populate = () => {
  todoList.forEach((item) => {
    const todoElem = document.createElement('div');
    const id = item.index;
    todoElem.id = id;
    todoElem.classList.add('todo-item');
    const innerHtml = `
    <input type="checkbox">
    <div class="input-box">
      <input type="text">
    </div>
    <div class="icon">
      <i class="fas fa-ellipsis-v"></i>
    </div>
    `;

    todoElem.innerHTML = innerHtml;
    const inputBox = todoElem.querySelector('.input-box input');
    inputBox.value = item.description;
    inputBox.style.textDecoration = (item.completed && 'line-through') || 'none';
    const checkboxInput = todoElem.querySelector('input[type="checkbox"]');
    checkboxInput.checked = item.completed;

    checkboxInput.addEventListener('change', (e) => {
      setCompleted(e, todoList, id, inputBox);
    });

    todoContainerElement.appendChild(todoElem);
  });
};

populate();