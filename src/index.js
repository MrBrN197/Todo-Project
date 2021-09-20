import './style.css';

import { todoList } from './storage.js';
import { onSubmit, createTodo, removeCompleted } from './addRemoveFunctions.js';

const populate = () => {
  todoList.data.forEach((item) => {
    createTodo(item);
  });
};

populate();

const addTodoBtn = document.getElementById('add-todo-btn');
const submitBtn = document.querySelector('form');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

addTodoBtn.addEventListener('click', onSubmit);
submitBtn.addEventListener('submit', (e) => e.preventDefault() || onSubmit());

clearCompletedBtn.addEventListener('click', removeCompleted);
