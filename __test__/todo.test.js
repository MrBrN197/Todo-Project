import { createTodo, removeTodoItem, editTodoItem } from '../src/addRemoveFunctions.js';
import { getItem } from '../src/storage.js';

jest.mock('../src/storage.js');

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

  it('should remove an item from the dom', () => {
    const initialHTML = '';
    document.querySelector('.todo-container .todo-items-container').innerHTML = initialHTML;
    const item = {
      description: 'this is a second added item',
      index: 1,
      completed: false,
    };
    createTodo(item);
    const todoElem = document.querySelector('.todo-item');
    removeTodoItem(todoElem);
    const list = document.querySelectorAll('.todo-item');
    expect(list).toHaveLength(0);
  });

  it('should edit the value of the input element', () => {
    // Arrange
    const item = {
      description: 'Colors',
      index: 1,
      completed: false,
    };
    const mockedEvent = {
      currentTarget: {
        value: 'Rainbow',
      },
    };

    // mock the getItem function
    getItem.mockImplementation(() => item);

    // Act
    editTodoItem(mockedEvent, item);

    // Assert
    expect(item.index).toBe(1); // index should stay the same
    expect(item.description).toBe('Rainbow'); // description should be changed to the new description
    expect(item.completed).toBe(false); // completed status should remain the same
  });
});