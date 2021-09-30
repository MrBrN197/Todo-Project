import { createTodo } from '../src/addRemoveFunctions.js';

describe('DOM Manipulation', () => {
  it('should add a item to the DOM', () => {
    // Arrange
    const initialHTML = '<div id="0" class="todo-item"></div>';
    document.querySelector('.todo-container .todo-items-container').innerHTML = initialHTML;

    const item = {
      description: 'this is a second added item',
      index: 1,
      completed: false,
    };

    // Act
    createTodo(item);
    const list = document.querySelectorAll('.todo-item');
    // Assert
    expect(list).toHaveLength(2);
  });

  it.todo('should remove an item from the dom');
});