export const STORAGE_NAME = 'todo-list';

export const updateStorage = (newList) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newList));
};

const createTodoList = () => {
  const prevStorage = JSON.parse(localStorage.getItem(STORAGE_NAME));
  if (prevStorage && prevStorage.length) {
    return prevStorage;
  }
  const data = [
    {
      description: 'dishes',
      completed: false,
      index: 0,
    },
    {
      description: 'exercise',
      completed: false,
      index: 1,
    },
    {
      description: 'finish project',
      completed: false,
      index: 2,
    },
  ];
  updateStorage(data);
  return data;
};

export const todoList = {
  data: createTodoList(),
};