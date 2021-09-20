import './style.css';

import setCompleted from './functions.js';

const todoContainerElement = document.querySelector('.todo-container .todo-items-container');

const todoList = [
  {
    description: 'watch the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'complete to do list project',
    completed: false,
    index: 1,
  },
  {
    description: 'watch "NO TIME TO DIE"',
    completed: false,
    index: 2,
  },
];

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