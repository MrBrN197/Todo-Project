export const STORAGE_NAME = 'todo-list';

export const updateStorage = (newList) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newList));
};

export const setCompleted = (e, todoList, id, inputBox) => {
  todoList[parseInt(id, 10)].completed = e.currentTarget.checked;
  inputBox.style.textDecoration = (e.currentTarget.checked && 'line-through') || 'none';

  updateStorage(todoList);
};
