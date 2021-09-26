export const STORAGE_NAME = 'todo-list';

let timeout;
const refreshIcon = document.getElementById('refresh-todo-icon');
export const updateStorage = (newList) => {
  clearTimeout(timeout);
  refreshIcon.classList.add('active');
  // update todo items indexes
  newList.forEach((item, idx) => {
    item.index = idx;
  });
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newList));
  timeout = setTimeout(() => {
    refreshIcon.classList.remove('active');
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

export const getItem = (id) => todoList.data.find((item) => item.index === parseInt(id, 10));