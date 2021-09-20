import { updateStorage, todoList } from './storage.js';

export default (e, id, inputBox) => {
  todoList.data[parseInt(id, 10)].completed = e.currentTarget.checked;
  inputBox.style.textDecoration = (e.currentTarget.checked && 'line-through') || 'none';
  inputBox.style.color = (e.currentTarget.checked && 'gray') || 'black';

  updateStorage(todoList.data);
};
