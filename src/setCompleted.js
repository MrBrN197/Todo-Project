import { updateStorage, todoList } from './storage.js';

export default (e, item, inputBox) => {
  item.completed = e.currentTarget.checked;
  if (e.currentTarget.checked) {
    inputBox.classList.add('checked');
  } else {
    inputBox.classList.remove('checked');
  }

  updateStorage(todoList.data);
};
