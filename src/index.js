import './style.css';

import { todoList } from './storage.js';
import { onSubmit, createTodo } from './addRemoveFunctions.js';

const populate = () => {
  todoList.forEach((item) => {
    createTodo(item);
  });
};

populate();

const addTodoBtn = document.getElementById('add-todo-btn');
const submitBtn = document.querySelector('form');

addTodoBtn.addEventListener('click', onSubmit);
submitBtn.addEventListener('submit', (e) => e.preventDefault() || onSubmit());