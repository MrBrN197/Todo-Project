const todoContainerElement = document.getElementById('todo-container');

const todoList = [
  {
    description: 'watch the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'complete to do list project',
    completed: false,
    index: 1,
  },
  {
    description: 'watch "NO TIME TO DIE"',
    completed: false,
    index: 2,
  },
];

const populate = () => {
  todoList.forEach((item, index) => {
    const todoElem = document.createElement('div');
    todoElem.id = index;
    todoElem.classList.add('todo-item');
    const innerHtml = `
    <input type="checkbox">
    <div class="input-box">
      <input type="text">
    </div>
    <div class="icon">
      <i class="fas fa-ellipsis-v"></i>
    </div>
    `;

    todoElem.innerHTML = innerHtml;
    const inputBox = todoElem.querySelector('.input-box input');
    inputBox.value = item.description;
    const checkboxInput = todoElem.querySelector('input[type="checkbox"]');
    checkboxInput.checked = item.completed;
    todoContainerElement.appendChild(todoElem);
  });
};

populate();