import { updateStorage, todoList } from './storage.js';

export default (e, id, inputBox) => {
  todoList[parseInt(id, 10)].completed = e.currentTarget.checked;
  inputBox.style.textDecoration = (e.currentTarget.checked && 'line-through') || 'none';

  updateStorage(todoList);
};
