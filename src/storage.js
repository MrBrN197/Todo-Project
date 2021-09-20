export const STORAGE_NAME = 'todo-list';

let timeout;
const refreshIcon = document.getElementById('refresh-todo-icon');
export const updateStorage = (newList) => {
  clearTimeout(timeout);
  refreshIcon.style.opacity = 1;
  // update todo items indexes
  newList.forEach((item, idx) => {
    item.index = idx;
  });
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newList));
  timeout = setTimeout(() => {
    refreshIcon.style.opacity = 0;
  }, 400);
};

const createTodoList = () => {
  const prevStorage = JSON.parse(localStorage.getItem(STORAGE_NAME));
  if (prevStorage && prevStorage.length) {
    return prevStorage;
  }
  const data = [];
  updateStorage(data);
  return data;
};

export const todoList = {
  data: createTodoList(),
};