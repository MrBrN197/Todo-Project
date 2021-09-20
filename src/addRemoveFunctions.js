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
        <div class="icon delete">
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
      <div class="icon">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      `;

  todoElem.innerHTML = innerHtml;
  const inputBox = todoElem.querySelector('.input-box input');
  const checkboxInput = todoElem.querySelector('input[type="checkbox"]');
  const deleteBtn = todoElem.querySelector('.icon.delete');

  inputBox.addEventListener('change', (e) => {
    todoList.data[parseInt(todoElem.id, 10)].description = e.currentTarget.value;
    updateStorage(todoList.data);
  });

  inputBox.value = item.description;
  inputBox.style.textDecoration = (item.completed && 'line-through') || 'none';
  checkboxInput.checked = item.completed;

  checkboxInput.addEventListener('change', (e) => {
    setCompleted(e, id, inputBox);
  });

  deleteBtn.addEventListener('mousedown', () => {
    todoList.data.splice(id, 1);
    todoElem.remove();
    updateStorage(todoList.data);
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
    index: todoList.data.length,
  };
  todoList.data.push(newItem);
  updateStorage(todoList.data);
  createTodo(newItem, todoList.data.length - 1);
  addTodoInput.value = '';
  addTodoInput.focus();
};

export const removeCompleted = () => {
  const notCompletedList = todoList.data.filter((i) => !i.completed);
  todoList.data
    .filter((item) => item.completed)
    .map((item) => document.querySelectorAll('div.todo-item')[item.index])
    .map((element) => element.remove());

  todoList.data = notCompletedList;
  updateStorage(todoList.data);

  // reset todo elements indexes
  todoContainerElement.querySelectorAll('.todo-item')
    .forEach((item, idx) => { item.id = idx; });
};