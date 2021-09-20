import setCompleted from './setCompleted.js';
import { todoList, updateStorage } from './storage.js';

const todoContainerElement = document.querySelector('.todo-container .todo-items-container');

export const createTodo = (item) => {
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
    setCompleted(e, id, inputBox);
  });

  todoContainerElement.appendChild(todoElem);
};

export const onSubmit = () => {
  const addTodoInput = document.getElementById('add-todo-input');
  if (!addTodoInput.value) {
    return;
  }
  const newItem = {
    description: addTodoInput.value,
    completed: false,
    index: todoList.length,
  };
  todoList.push(newItem);
  updateStorage(todoList);
  createTodo(newItem, todoList.length - 1);
  addTodoInput.value = '';
  addTodoInput.focus();
};
