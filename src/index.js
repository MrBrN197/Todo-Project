import './style.css';

import { todoList } from './storage.js';
import { createTodo } from './addRemoveFunctions.js';

const populate = () => {
  todoList.forEach((item) => {
    createTodo(item);
  });
};

populate();