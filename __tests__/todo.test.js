import Todo from '../app/todo';
import React from 'react';
import { mount } from 'enzyme';

const todo = { id: 1, done: false, name: 'Buy Milk' };
const doneChange = jest.fn();
const deleteTodo = jest.fn();
const wrapper = mount(
  <Todo todo={todo} doneChange={doneChange} deleteTodo={deleteTodo} />
);

test('Checks the name of the todo component', () => {
  const p = wrapper.find('.toggle-todo');
  expect(p.text()).toBe(todo.name);  
});

test('TodoComponent calls doneChange when todo is clicked', () => {
  const p = wrapper.find('.toggle-todo');
  p.simulate('click');
  expect(doneChange).toBeCalledWith(1);
});

test('TodoComponent calls deleteTodo when delete button is clicked', () => {
  const deleteLink = wrapper.find('.delete-todo');
  deleteLink.simulate('click');
  expect(deleteTodo).toBeCalledWith(1);
});
