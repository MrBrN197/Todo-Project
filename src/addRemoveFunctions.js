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

const editTodoItem = (item, newValue) => {
  item.description = newValue.trim();
  updateStorage(todoList.data);
};

export const createTodo = (item) => {
  const todoElem = document.createElement('div');
  todoElem.id = item.index;
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
    editTodoItem(item, e.currentTarget.value);
    e.currentTarget.value = e.currentTarget.value.trim();
  });
  inputBox.addEventListener('focus', () => {
    todoElem.classList.add('highlight');
    inputBox.classList.remove('checked');
  });
  inputBox.addEventListener('blur', () => {
    todoElem.classList.remove('highlight');
    if (item.completed) {
      inputBox.classList.add('checked');
    }
  });

  inputBox.value = item.description;
  if (item.completed) {
    inputBox.classList.add('checked');
  }

  checkboxInput.checked = item.completed;

  checkboxInput.addEventListener('change', (e) => {
    setCompleted(e, item, inputBox);
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
  const todoElements = document.querySelectorAll('div.todo-item');
  todoList.data
    .filter((item) => item.completed)
    .map((item) => todoElements[item.index])
    .map((element) => element.remove());

  todoList.data = notCompletedList;
  updateStorage(todoList.data);

  // reset todo elements indexes
  todoContainerElement.querySelectorAll('.todo-item')
    .forEach((item, idx) => { item.id = idx; });
};