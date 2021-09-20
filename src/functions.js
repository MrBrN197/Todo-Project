export default (e, todoList, id, inputBox) => {
  todoList[parseInt(id, 10)].completed = e.currentTarget.checked;
  inputBox.style.textDecoration = (e.currentTarget.checked && 'line-through') || 'none';
};
