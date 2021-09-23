import setCompleted from './setCompleted.js';
import { todoList, updateStorage } from './storage.js';

const todoContainerElement = document.querySelector('.todo-container .todo-items-container');

const removeTodoItem = (todoElem) => {
  todoList.data.splice(todoElem.id, 1);
  todoElem.remove();
  // reset todo elements indexes
  todoContainerElement.querySelectorAll('.todo-item')
    .forEach((item, idx) => { item.id = idx; });
  updateStorage(todoList.data);
};

const editTodoItem = (id, newValue) => {
  todoList.data[parseInt(id, 10)].description = newValue;
  updateStorage(todoList.data);
};

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
    editTodoItem(todoElem.id, e.currentTarget.value);
  });
  inputBox.addEventListener('focus', () => {
    todoElem.style.backgroundColor = '#f4f5cc';
  });
  inputBox.addEventListener('blur', () => {
    todoElem.style.backgroundColor = 'white';
  });

  inputBox.value = item.description;
  inputBox.style.textDecoration = (item.completed && 'line-through') || 'none';
  inputBox.style.color = (item.completed && 'gray') || 'black';
  inputBox.disabled = item.completed;

  checkboxInput.checked = item.completed;

  checkboxInput.addEventListener('change', (e) => {
    setCompleted(e, todoElem.id, inputBox);
  });

  deleteBtn.addEventListener('mousedown', () => {
    removeTodoItem(todoElem);
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