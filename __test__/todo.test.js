import {
  createTodo, removeTodoItem, editTodoItem, removeCompleted,
} from '../src/addRemoveFunctions.js';
import { getItem } from '../src/storage.js';
import * as storage from '../src/storage.js';
import setCompleted from '../src/setCompleted.js';

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

  it('Edit the completed status', () => {
    const item = {
      description: 'Colors',
      index: 1,
      completed: false,
    };
    const mockedEvent = {
      currentTarget: {
        checked: true,
      },
    };
    const inputBox = document.createElement('INPUT');
    setCompleted(mockedEvent, item, inputBox);
    expect(item.index).toBe(1); // index should be 1
    expect(item.description).toBe('Colors'); // description should remain the same(Colors)
    expect(item.completed).toBe(true); // completed status should true
  });

  it('removeCompleted  should remove all completed tasks', () => {
    // Arrange
    const initialHTML = `
      <div id="0" class="todo-item"></div>
      <div id="1" class="todo-item"></div>
      <div id="2" class="todo-item"></div>
    `;
    document.querySelector('.todo-container .todo-items-container').innerHTML = initialHTML;

    // mock todoLit items
    storage.todoList = {
      data: [
        {
          // this item should be removed
          description: 'Item 1',
          completed: true,
          index: 0,
        },
        {
          description: 'Item 2',
          completed: false,
          index: 1,
        },
        {
          description: 'Item 3',
          completed: false,
          index: 2,
        },
      ],
    };

    // Act
    removeCompleted();

    // Assert
    const result = document.querySelectorAll('.todo-item');
    expect(result).toHaveLength(2); //
    expect(result[0].id).toBe('0');
    expect(result[1].id).toBe('1');

    // two should remain in the todoList
    expect(storage.todoList.data).toHaveLength(2);

    // Item 2 should remain and be unmodified
    expect(storage.todoList.data[0].description).toBe('Item 2');
    expect(storage.todoList.data[0].completed).toBe(false);

    // Item 2 should remain and be unmodified
    expect(storage.todoList.data[1].description).toBe('Item 3');
    expect(storage.todoList.data[1].completed).toBe(false);
  });
});