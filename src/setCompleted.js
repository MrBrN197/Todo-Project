import { updateStorage, todoList } from './storage.js';

export default (e, item, inputBox) => {
  item.completed = e.currentTarget.checked;
  inputBox.style.textDecoration = (e.currentTarget.checked && 'line-through') || 'none';
  inputBox.style.color = (e.currentTarget.checked && 'gray') || 'black';
  inputBox.disabled = e.currentTarget.checked;

  updateStorage(todoList.data);
};
