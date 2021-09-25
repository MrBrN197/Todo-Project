import setCompleted from './setCompleted.js';
import { todoList, updateStorage, getItem } from './storage.js';

const todoContainerElement = document.querySelector('.todo-container .todo-items-container');
const todoContainerX = todoContainerElement.getBoundingClientRect().left;
const todoContainerY = todoContainerElement.getBoundingClientRect().top;

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

let active = false;
let offsetLeft;
let offsetTop;
let offsetFromMoveBtnX;
let offsetFromMoveBtnY;

const PLACEHOLDER = document.createElement('div');
PLACEHOLDER.id = 'placeholder';
PLACEHOLDER.style.position = 'absolute';
PLACEHOLDER.style.width = '384px';
PLACEHOLDER.style.border = '1px solid black';
// PLACEHOLDER.style.height = '52px';

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
      <div class="icon move temporary">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      `;

  todoElem.innerHTML = innerHtml;
  const inputBox = todoElem.querySelector('.input-box input');
  const checkboxInput = todoElem.querySelector('input[type="checkbox"]');
  const deleteBtn = todoElem.querySelector('.icon.delete');
  const moveBtn = todoElem.querySelector('.icon.move');

  inputBox.addEventListener('change', (e) => {
    editTodoItem(getItem(todoElem.id), e.currentTarget.value);
    e.currentTarget.value = e.currentTarget.value.trim();
  });
  inputBox.addEventListener('focus', () => {
    todoElem.classList.add('highlight');
    inputBox.classList.remove('checked');
  });
  inputBox.addEventListener('blur', () => {
    todoElem.classList.remove('highlight');
    if (getItem(todoElem.id).completed) {
      inputBox.classList.add('checked');
    }
  });

  inputBox.value = item.description;
  if (item.completed) {
    inputBox.classList.add('checked');
  }

  checkboxInput.checked = item.completed;

  checkboxInput.addEventListener('change', (e) => {
    setCompleted(e, getItem(todoElem.id), inputBox);
  });

  deleteBtn.addEventListener('mousedown', () => {
    removeTodoItem(todoElem);
  });

  let lastIndex = null;

  const mouseMoved = (e) => {
    if (!active) return;
    offsetLeft = e.pageX - todoContainerX;
    offsetTop = e.pageY - todoContainerY;
    PLACEHOLDER.style.left = `${offsetLeft - offsetFromMoveBtnX}px`;
    PLACEHOLDER.style.top = `${offsetTop - offsetFromMoveBtnY}px`;

    const todoItemIndex = Math.floor(offsetTop / 52);

    if (lastIndex !== todoItemIndex && todoItemIndex >= 0) {
      todoElem.remove();
      todoContainerElement.insertBefore(todoElem, todoContainerElement.children[todoItemIndex]);
      lastIndex = todoItemIndex;

      const elements = Array.from(document.querySelectorAll('.todo-item:not(#placeholder)'));
      todoList.data = elements.map((elem, idx) => ({
        description: elem.querySelector('input[type="text"]').value,
        complted: elem.querySelector('input[type="checkbox"]').checked,
        index: idx,
      }));
      updateStorage(todoList.data);
    }
  };

  moveBtn.addEventListener('mousedown', (e) => {
    active = true;
    document.addEventListener('mousemove', mouseMoved);
    offsetFromMoveBtnX = e.pageX - (todoElem.getBoundingClientRect().left + window.scrollX);
    offsetFromMoveBtnY = e.pageY - (todoElem.getBoundingClientRect().top + window.scrollY);

    offsetLeft = e.pageX - todoContainerX;
    offsetTop = e.pageY - todoContainerY;
    PLACEHOLDER.style.left = `${offsetLeft - offsetFromMoveBtnX}px`;
    PLACEHOLDER.style.top = `${offsetTop - offsetFromMoveBtnY}px`;

    // const newNode = todoElem.cloneNode(true);
    PLACEHOLDER.innerHTML = todoElem.innerHTML;
    PLACEHOLDER.querySelector('input[type="text"]').value = inputBox.value;
    PLACEHOLDER.classList.add('todo-item');
    todoElem.classList.add('selected');
    todoContainerElement.appendChild(PLACEHOLDER);
  });

  document.addEventListener('mouseup', () => {
    active = false;
    todoElem.classList.remove('selected');
    document.removeEventListener('mousemove', mouseMoved);
    PLACEHOLDER.remove();
  });

  todoContainerElement.appendChild(todoElem);
};

// NOTE: disable drag start for firefox
todoContainerElement.addEventListener('dragstart', (e) => {
  e.preventDefault();
});

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
  const todoElements = document.querySelectorAll('.todo-item');
  todoList.data
    .filter((item) => item.completed)
    .map((item) => Array.from(todoElements).find((i) => parseInt(i.id, 10) === item.index))
    .forEach((element) => element.remove());

  todoList.data = notCompletedList;
  updateStorage(todoList.data);

  // reset todo elements indexes
  todoContainerElement.querySelectorAll('.todo-item')
    .forEach((item, idx) => { item.id = idx; });
};